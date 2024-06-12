import React, { useState } from 'react'
import { UserType } from '@/app/types/userType';
import { ButtonFollow } from '../template/ButtonFollow';


interface PeopleProps extends UserType {
    onFollowChange: (change: number) => void;
}

export const People: React.FC<PeopleProps> = ({ name, avatar, id, onFollowChange }) => {
    const [buttonLabel, setButtonLabel] = useState(() => {
        return localStorage.getItem(`following_${id}`) || 'Follow';
    });

    const handleFollowButton = () => {
        if (buttonLabel === 'Follow') {
            setButtonLabel('Following');
            onFollowChange(1);
            localStorage.setItem(`following_${id}`, 'Following');
        } else {
            setButtonLabel('Follow');
            onFollowChange(-1);
            localStorage.setItem(`following_${id}`, 'Follow');
        }
    };

    return <>
        <section id="followUser" key={id}>
            <div className='
                bg-neutral-50
                flex 
                flex-col 
                items-center 
                justify-center 
                max-w-full
                max-h-full
                mt-8
                rounded'
            >
                <div className="">
                    <img
                        src={avatar}
                        alt=""
                        className='object-cover w-full'
                    />
                </div>
                <div className="flex items-center flex-col gap-3 p-4 w-full "
                    style={{ background: "#dcdcdc" }}
                >
                    <p className='text-2xl text-blue-600 font-semibold'>{name}</p>
                    <ButtonFollow
                        label={buttonLabel}
                        onClick={handleFollowButton}
                        background="#F4743B"
                    />

                </div>
            </div>
        </section>
    </>
}
