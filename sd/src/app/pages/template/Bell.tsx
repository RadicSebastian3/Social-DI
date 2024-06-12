import React, { useEffect, useState } from 'react'
import { Notifications } from './Notifications';
import { NotificationList } from '@/app/data/notificationData';


export const Bell = () => {
  const [isOpen, setIsOpen] = useState(false);

  const ScrollBell = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    addEventListener("scroll", ScrollBell)

  }, [isOpen])


  const toggleModal = () => {
    if (isOpen) {
      setIsOpen(false);
    }
    else {
      setIsOpen(true)
    }
  };

  return <>
    <div className='flex flex-col items-end justify-center'>
      <span className='bg-red-600 rounded-full p-1 text-white text-sm' title='Unread notifications'>{NotificationList.length}</span>
      <div
        className="text-3xl cursor-pointer p-3 rounded-lg"
        style={{ background: "#FBF9FF" }}
        onClick={toggleModal}
        title='Unread notifications'>
        🔔

      </div>

      {isOpen && (
        <div id="notificationSize" className="scroll-container overflow-y-scroll lg:w-2/4 xl:w-2/4 fixed right-8 top-40 max-h-80 bg-white z-10 shadow-lg ">
          <h1 className='p-4 text-2xl '>notifications</h1>
          {NotificationList.map((item) => (
            <Notifications
              id={item.id}
              label={item.label}
              date={item.date}
              description={item.description}
            />
          ))}
        </div>
      )}
    </div>
  </>;
}
