
import React from 'react'
import { auth, signOut } from '@/auth'
import Image from 'next/image'

const Page = async () => {
    const session = await auth()
       
  return (
    <div className='text-white'>
        <h1>Welcome {session?.user?.name}</h1>
       
        <Image src={session?.user?.image} width={100} height={100} alt="user Image"  />
        
        <form action={async () => {
            'use server'

            await signOut( {redirectTo: '/'})
            
        }}>
            <button type='submit'>Logout</button>
        </form>
       
    </div>
  )
}

export default Page