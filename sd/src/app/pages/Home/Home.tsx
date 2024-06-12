import React from 'react'
import { Link } from 'react-router-dom';
import { useAuthUser } from '@/contexts/LoginUser'
import { Header } from '../template/Header';
import { Post } from '../template/Post';
import { FriendList } from '../template/FriendList';

export const Home = () => {
    const usernameCtx = useAuthUser();
    return <>
        <Header />
        <main className='p-8 relative'>
            <section className='flex flex-col gap-8'>
                <h1
                    style={{ color: "#3066BE", borderLeft: ".8rem solid #B4C5E4" }}
                    className='font-bold sm:text-6xl md:text-3xl lg:text-6xl xl:text-6xl'>Welcome, {usernameCtx?.name}
                </h1>
            </section>
            <Post />
            <aside
                className='hidden p-8 flex-col justify-start items-baseline scroll-container overflow-y-auto h-full absolute top-0 right-0 bottom-0 mt-6 md:w-60 md:flex sm:w-72 lg:w-72 xl:w-72'>
                <h1 className='text-2xl text-center mb-8 font-bold'>Friends</h1>
                <FriendList />
            </aside>
        </main>
        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2">
            <Link to="Game\home.html">
                <button className="p-4 rounded-md bg-blue-600 text-white">
                    Go to Game
                </button>
            </Link>
        </div>
    </>
}