import React from 'react'
import { movieList } from '@/public/asset'
import Image from 'next/image'

const Hero = () => {
  return (
    <section>
        <div className='mt-16'>
        <p className='text-white mb-6 font-semibold text-2xl'>Trending Now</p>

        <div className='grid grid-flow-col md:auto-cols-[20%] auto-cols-[40%] no-scrollbar overscroll-contain scroll-smooth snap-x snap-mandatory overflow-x-auto gap-0.5rem]'>
            {movieList.map((movie, index) => (
                <div key={index} className='relative ml-5' >
                        <div className='w-[100%]'>
                       <Image className='rounded-lg hover:-translate-y-4 duration-500 w-full' src={movie.image} width={1000} height={290} alt={movie.title}/>
                       </div>
                       <div className='absolute -left-5 bottom-2 lg:text-[6rem] text-[4rem] '>
                       <p className='text-black font-extrabold outlined '>{movie.id} </p> 
                       </div>
                </div>
            ))}
        </div>

        </div>
    </section>
  )
}

export default Hero