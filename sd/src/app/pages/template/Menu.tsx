import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

type Props = {
    closeModal: () => void;
}

export const Menu = ({ closeModal }: Props) => {
    return (
        <section
            style={{
                borderTop: "1rem solid #0C1821",
                backgroundColor: '#1B2A41',
                color: "#DDE1E4",
            }}
        >
            <div
                onClick={closeModal}
                className="text-end text-2xl cursor-pointer">
                [X]
            </div>
            <nav className='hamburger '>
                <ul className='sm:gap-0 md:gap-2 lg:gap-4 xl:gap-4'>
                    <li>
                        <Link to="/Home">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/Profile">
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link to="/People">
                            People
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            Log Out
                        </Link>
                    </li>
                </ul>
            </nav>
        </section>
    )
}
