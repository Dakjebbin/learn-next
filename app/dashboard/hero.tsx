'use client'

import { assets } from '@/public/asset'
import Image from 'next/image'
import React, { useState } from 'react'

const Hero = () => {
    const [search, setSearch] = useState('')
  return (
    <div className='bg-heroBg bg-cover w-full'>
            <section className='flex flex-col items-center justify-center '>
                <Image className='w-96' src={assets.hero} alt='hero image' width='1000' height="1000"/>
                <p className='text-5xl fontfam text-center font-[700]'>
                Find <span className='bg-gradient-to-tr bg-clip-text text-transparent from-[#D6C7FF] to-[#AB8BFF]'>Movies</span> You’ll Love <br /> Without the Hassle
                </p>
            </section>

            <section>
            <div className='flex relative justify-center sm:w-96 w-[340] m-auto items-center'>
                <input 
                value={search} 
                className='bg-[#0F0D23] px-[40px] py-3 w-full mt-7 rounded-md' 
                placeholder='Search through 300+ movies online' 
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                />
                <div className='absolute left-0 bottom-3 px-3'>
                <Image src={assets.search} alt='icon'/>
                </div>
            </div>
            </section>
    </div>
  )
}

export default Hero