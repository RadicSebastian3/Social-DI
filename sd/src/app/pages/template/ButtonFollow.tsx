import React, { useState } from 'react'

interface Props {
    label: string;
    background: string;
    onClick: () => void;
}

export const ButtonFollow = ({ label, onClick, background }: Props) => {

    return <>
        {label === "Follow" &&
            <>
                <button
                    style={{ backgroundColor: "#275DAD" }}
                    className='p-4 w-40 max-w-40 rounded-sm text-white text-bold hover:opacity-80'
                    onClick={onClick}>
                    {label}
                </button>
            </>
            }
        {label === "Following" &&
            <>
                <button
                    style={{ backgroundColor: background }}
                    className='p-4 w-40 max-w-40 rounded-sm text-white text-bold hover:opacity-90'
                    onClick={onClick}>
                    {label}
                </button>
            </>
            }
    </>
}
