import React from 'react'
import { UserData } from '@/app/data/userData'

export const FriendList = () => {
    return <>
        <div className=' flex flex-col-reverse gap-6 justify-between'>
            {UserData.map((item) => (
                <div key={item.id} className='cursor-pointer ' >
                    <div className='flex gap-2 ' >
                        <img src={item.avatar} alt={item.name} title={item.name} className='w-10 h-10 object-cover rounded-full' />
                        <h2>{item.name}</h2>
                        <span className='w-4 h-4 bg-blue-600 rounded-full'></span>
                    </div>
                </div>
            ))}
        </div>
    </>
}
