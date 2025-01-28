import { assets } from '@/public/asset'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div>
        <header className='flex m-auto w-[80%] justify-items-start items-start '>
        <nav className='sm:w-[300px]  h-20'>
          <Link href='/'>
            <Image
              className='w-full h-full object-cover'
              src={assets.logo}
              alt='Netflix Logo'
            />
          </Link>
        </nav>
       </header>
    </div>
  )
}

export default Header