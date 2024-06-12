import React from 'react'

interface Props {
    post: string;
    handlePost: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    error: string;
    handleWithWhiteSpace: () => any;
    createANewPost: () => void;
}


export const PostForm = ({ post, handlePost, error, handleWithWhiteSpace, createANewPost }: Props) => {
    return <>
        <form action="/" className='flex flex-col items-start gap-4' onSubmit={e => e.preventDefault()}>
            <label htmlFor="postField" className='text-2xl my-4'>Post your thoughts here</label>
            <div className='w-full flex items-start justify-start'>
                <textarea
                    id='postField'
                    name="postField"
                    style={{ height: '15rem', border: '.2rem solid #FDFFFC' }}
                    className=" p-4 text-4sm resize-none w-full md:w-2/4 lg:w-128 xl:w-160 rounded-sm"
                    placeholder='What are you thinking 🤔?'
                    value={post}
                    onChange={handlePost}
                >
                </textarea>
                <aside
                    style={{ height: '15rem', borderLeft: '1rem solid #587291' }}
                    className='bg-white h-full flex flex-col gap-4 items-center justify-between shadow-md'>
                </aside>
            </div>
            {error && <p className="text-red-500">{error}</p>}
            {handleWithWhiteSpace() ? (
                <input
                    disabled={true}
                    type="submit"
                    style={{ background: "#235789" }}
                    className="p-4 hidden text-white font-light text-4sm w-full md:w-2/4 lg:w-128 xl:w-160 cursor-not-allowed rounded-sm"
                    value="Post"
                />
            ) : (
                <input
                    type="submit"
                    style={{ background: "#235789" }}
                    className="p-4 text-white font-light text-4sm w-full md:w-2/4 lg:w-128 xl:w-160 cursor-pointer rounded-sm"
                    value="Post"
                    onClick={createANewPost}
                />
            )}
        </form>
    </>
}
