import { atom, useAtom } from 'jotai';
import Image from 'next/image';
import React from 'react';

// Define an atom with a default value of 'home'
export const currentPageAtom = atom<string>('home');

type Props = {};

function UI({}: Props) {
    // Use the atom within your component
    const [currentPage, setCurrentPage] = useAtom(currentPageAtom);

    // Toggle between 'home' and 'store' pages
    const togglePage = () => {
        setCurrentPage((prevPage) => (prevPage === 'home' ? 'store' : 'home'));
    };

    return (
        <div className='fixed inset-0 pointer-events-none'>
            <section
                className={`flex w-full h-full flex-col items-center justify-center duration-500 `}
            >
                <div className='h-[66%]'> </div>
                <button
                    onClick={togglePage}
                    className="pointer-events-auto py-4 px rounded-full shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 transition duration-300 ease-in-out"
                >
                    <Image src='/logoButton.png' alt='' width={80} height={80} />
                </button>
            </section>
        </div>
    );
}

export default UI;
