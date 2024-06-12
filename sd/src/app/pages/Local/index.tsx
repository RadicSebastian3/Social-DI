import { useState } from 'react'
import { UserData } from '@/app/data/userData'
import { useFollower } from '@/contexts/Follower'
import { Header } from '../template/Header'
import { People } from '../People'

export const PeopleLocal = () => {
    const [toFollow] = useState(UserData);
    const follow = useFollower();


    const handleFollowChange = (change: number) => {
        follow?.setFollowingCount((prevCount) => prevCount + change);
    };
    

    return <>
        <Header />
        <main className='p-8 '>
            <section className='flex flex-col gap-8'>
                <h1
                    style={{ color: "#3066BE", borderLeft: ".8rem solid #B4C5E4" }}
                    className='font-bold sm:text-6xl md:text-3xl lg:text-6xl xl:text-6xl'>Suggested people
                </h1>
            </section>
            <section
                className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4' >
                {toFollow.map((item) => (
                    <People
                        name={item.name}
                        avatar={item.avatar}
                        id={item.id}
                        key={item.id}
                        onFollowChange={handleFollowChange}
                    />
                ))}
            </section>
        </main>
    </>
}
