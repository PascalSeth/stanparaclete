import { atom, useAtom } from 'jotai';
import Image from 'next/image';
import React from 'react';

// Define an atom with a default value of 'intro'
export const currentPageAtom = atom<string>('home');

type Props = {};

function UI({}: Props) {
    // Use the atom within your component
    const [currentPage, setCurrentPage] = useAtom(currentPageAtom);

    return (
        <div className='fixed inset-0 pointer-events-none'>
            <section
                className={`flex w-full h-full flex-col items-center justify-center duration-500 ${currentPage === 'home' ? '' : 'opacity-0'}`}
            >
                <div className='h-[66%]'> </div>
                <button
                    onClick={() => setCurrentPage('store')}
                    className="pointer-events-auto py-4 px rounded-full shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 transition duration-300 ease-in-out"
                >
                    <Image src='/logoButton.png' alt='' width={80} height={80} />
                </button>
            </section>
        </div>
    );
}

export default UI;
