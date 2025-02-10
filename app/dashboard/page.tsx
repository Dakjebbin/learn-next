
import React from 'react'
import { auth, signOut } from '@/auth'
import Image from 'next/image'
import { assets } from '@/public/asset'

const Page = async () => {
    const session = await auth()
       if (!session) return <div className='text-white'>Not Authenticated Please Login</div>
  return (
     
    <div className='text-white'>
<div className='flex items-center mx-10 justify-between'>
      <div className='w-56'>
      <Image className='w-full' src={assets.logo} alt='Logo'/>
      </div>
      <div className='flex items-center'>
        <div className='flex items-center mr-10'>
        <h1 className='text-xl mr-4 font-bold'>Welcome {session?.user?.name}</h1>
       
       {session?.user?.image &&
        <Image className='w-8 rounded-full' src={session?.user?.image} width={100} height={100} alt="user Image"  />
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
    </div>
      
  )
}

export default Page