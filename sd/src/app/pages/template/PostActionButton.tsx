import React, { useState,ReactNode } from 'react'

export const PostActionButton = () => {
    const [boldButton, setBoldButton] = useState(false);
    const [italicButton, setItalicButton] = useState(false);
    const [underlineButton, setUnderlineButton] = useState(false);

    const handleBoldText = () => {
        setBoldButton(!boldButton);
    }
    const handleItaicText = () => {
        setItalicButton(!italicButton);
    }
    const handleUnderleText = () => {
        setUnderlineButton(!underlineButton);
    }

    return <>
    
        <button
            className={`font-bold p-3 text-2xl ${boldButton ? 'bg-blue-600 text-white' : ''}`} onClick={handleBoldText}>B
        </button>

        <button
            className={`font-bold p-3 text-2xl ${italicButton ? 'bg-blue-600 text-white' : ''}`} onClick={handleItaicText}>I
        </button>

        <button
            className={`font-bold p-3 text-2xl underline ${underlineButton ? 'bg-blue-600 text-white underline' : ''}`} onClick={handleUnderleText}>U
        </button>
    </>
}
