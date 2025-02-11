
import React from 'react'
import { auth, signOut } from '@/auth'
import Image from 'next/image'
import { assets } from '@/public/asset'
import Hero from './hero'
import Movies from './movies'

const Page = async () => {
    const session = await auth()
       if (!session) return <div className='text-white'>Not Authenticated Please Login</div>
  return (
     
    <div className='text-white'>
<div className='flex items-center sm:mx-10 mx-4 justify-between'>
      <div className='w-56'>
      <Image className='w-full' src={assets.logo} alt='Logo'/>
      </div>
      <div className='flex items-center'>
        <div className='flex items-center sm:mr-10 mr-2'>
        <h1 className='sm:mr-2 font-bold'>Welcome {session?.user?.name}</h1>
       
       {session?.user?.image &&
        <Image className='w-5 sm:block hidden rounded-full' src={session?.user?.image} width={100} height={100} alt="user Image"  />
       }
       </div>
        <form action={async () => {
            'use server'

            await signOut( {redirectTo: '/'})
            
        }}>
            <button className=' bg-red-700 px-3 py-1 rounded-md font-semibold' type='submit'>Logout</button>
        </form>
        </div>
        </div>
        <Hero/>
        <Movies/>
    </div>
      
  )
}

export default Page