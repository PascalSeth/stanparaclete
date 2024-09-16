import Image from 'next/image';
import React from 'react';

type Props = {}

function Page({ }: Props) {
  return (
    <div className="min-h-screen  bg-[#070707] text-gray-800">
  <div className='h-fit w-full p-5 rounded-[1pc] max-w-6xl mx-auto justify-center   '>
<Image src='/apparel.png' className='w-full rounded-[1pc] h-64' width={1920} height={1080} alt=''/>/
  </div>
    </div>
  )
}

export default Page;
