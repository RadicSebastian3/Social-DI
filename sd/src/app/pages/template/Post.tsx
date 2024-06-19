import React, { useState, useEffect } from 'react';
import { addNewPost, getAllPosts } from '@/app/data/postData'; // Pfade entsprechend anpassen
import { Post as PostType } from '@/app/types/PostsType';
import { Posts } from './Posts';
import { useAuthUser } from '@/contexts/LoginUser';
import { PostForm } from './PostForm';

export const Post = () => {
    const [post, setPost] = useState('');
    const [error, setError] = useState('');
    const [posts, setPosts] = useState<PostType[]>([]);
    const userCtx = useAuthUser();

    useEffect(() => {
        fetchPosts(); // Beim Laden der Komponente alle Posts abrufen
    }, []);

    const fetchPosts = async () => {
        try {
            const fetchedPosts = await getAllPosts();
            setPosts(fetchedPosts);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    const handlePost = (e: React.ChangeEvent<HTMLTextAreaElement>) => setPost(e.target.value);

    const handleWithWhiteSpace = () => post.trim() === '';

    const createANewPost = async () => {
        if (handleWithWhiteSpace()) {
            setError('Du musst einen Beitrag schreiben, um ihn anzuzeigen.');
        } else if (userCtx && userCtx.name) {
            const newPost: PostType = {
                id: new Date().getTime(), // Beispielhafte ID-Erzeugung (Timestamp)
                userId: new Date().getTime(), // Beispielhafte Benutzer-ID (Timestamp)
                post: post,
                postedBy: userCtx.name,
                date: `${new Date().toLocaleDateString()} - ${new Date().getHours()}:${new Date().getMinutes()}`,
                avatar: userCtx.photo || "default-avatar-url" // Verwenden Sie das Benutzerfoto oder einen Standardwert
            };

            try {
                await addNewPost(newPost); // Post in der Datenbank speichern
                setPosts([newPost, ...posts]); // Neuen Post zur Liste hinzufügen
                setPost('');
                setError('');
            } catch (error) {
                console.error('Error adding new post:', error);
            }
        } else {
            setError('Benutzer nicht authentifiziert.');
        }
    };

    return (
        <main>
            <section className='mt-6 md:mt-6 lg:mt-16 xl:mt-16'>
                <PostForm
                    createANewPost={createANewPost}
                    error={error}
                    handleWithWhiteSpace={handleWithWhiteSpace}
                    post={post}
                    handlePost={handlePost}
                />
            </section>

            <section className='flex flex-col flex-1 gap-8 mt-8'>
                <Posts posts={posts} /> {/* Übergeben Sie die gespeicherten Posts als Prop */}
            </section>
        </main>
    );
};
