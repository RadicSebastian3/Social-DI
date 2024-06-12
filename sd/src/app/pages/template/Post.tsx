import React, { useEffect, useState } from 'react'
import { addNewPost } from '@/app/data/postData';
import { Post as PostType } from '@/app/types/PostsType';
import { Posts } from './Posts';
import { api } from '@/api/Api';
import { useAuthUser } from '@/contexts/LoginUser';
import { PostForm } from './PostForm';

export const Post = () => {
    const [post, setPost] = useState('');
    const [error, setError] = useState('');
    const [json, setJson] = useState('');

    const usernameCtx = useAuthUser();


    useEffect(() => { getDataFromApi(); })

    const getDataFromApi = async () => {
        let json = await api.getUserAvatar();
        setJson(json.message)
    }

    const handlePost = (e: React.ChangeEvent<HTMLTextAreaElement>) => setPost(e.target.value);

    const handleWithWhiteSpace = () => post.trim() === '';


    const createANewPost = () => {
        if (handleWithWhiteSpace()) {
            setError('You need to write down a post to display it.');
        } else {
            const newPost: PostType = {
                id: new Date().getMilliseconds() as number,
                userId: new Date().getMilliseconds() as number,
                post: post as string,
                postedBy: usernameCtx?.name as string,
                date: `${new Date().toLocaleDateString()} - ${new Date().getHours()}:${new Date().getMinutes()}`,
                avatar: `${usernameCtx?.photo ? usernameCtx?.photo : json}`,
            };
            addNewPost(newPost);
            setPost('');
            setError('');
        }
    };



    return <>
        <main className=''>
            <section className='mt-6 md:mt-6 lg:mt-16 xl:mt-16 '>
                <PostForm
                    createANewPost={createANewPost}
                    error={error}
                    handleWithWhiteSpace={handleWithWhiteSpace}
                    post={post}
                    handlePost={handlePost}
                />
            </section>

            <section className='flex flex-col flex-1 gap-8 mt-8'>
                <Posts />
            </section>
        </main >
    </>
}
