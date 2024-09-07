import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='flex w-full overflow-x-hidden bg-gradient-to-r from-gray-400 p-3 items-center to-purple-950 sticky top-0 left-0 right-0 z-[99]'>
      <div className='max-w-6xl max-lg:hidden items-center w-full flex justify-between mx-auto'>
        <Link href='/'>
            <Image src='/logo-bg.png' width={80} height={80} alt=''/>
        </Link>
        <div className='flex space-x-6 items-center font-medium text-gray-200'>
            <Link href='/'>Expertise</Link>
            <Link href='/'>Creations</Link>
            <Link href='/'>Resources</Link>
            <Link href='/ContactUs'>
                <button className='p-2 border border-purple-600 bg-gradient-to-bl hover:bg-gradient hover:from-purple-400 hover:to-pink-600  from-purple-300 to-pink-700 rounded-[1pc]'>Contact Us</button>
            </Link>

        </div>
      </div>

      <div className='lg:hidden w-full flex items-center'>
      <div className='max-w-6xl  w-full flex items-center justify-between mx-auto'>
        <div>
            <Image src='/logo-bg.png' width={80} height={80} alt=''/>
        </div>
       {/* <MenuDropdown/> */}
      </div>
      </div>
    </div>
  )
}

export default Navbar
