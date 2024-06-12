import { NotificationType } from '@/app/types/notificationType'
import React from 'react'


export const Notifications = ({ label, date, description, id }: NotificationType) => {
    return <>
        <div key={id} className=' p-4 max-h-full cursor-pointer hover:opacity-80' style={{ background: "#F0EDEE", borderBottom: ".1rem solid #F6F8FF" }}>
            <div className='flex flex-row items-baseline gap-4'>
                <span className='w-4 h-4 bg-blue-600 rounded-full'></span>
                <div className='flex items-start justify-between gap-4'>
                    <h2 className='text-2sm font-bold mb-4'>{label}</h2>
                    <span className='text-gray-400 font-semibold'>({new Date().toLocaleDateString()} - {new Date().getHours()}:{new Date().getMinutes()})
                    </span>
                </div>
            </div>
            <p>{description}</p>

        </div>
    </>
}
