

import { signIn } from '@/auth'

import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col text-white justify-center items-center '>
        <div className='bg-[#000000b3] sm:p-16 pt-16'>
                    <p className='text-3xl mb-10 font-bold'>Sign In</p>
        <form action="">
            <div className='w-[300px] mb-7'>
            <input className='bg-transparent rounded-md border py-3 px-4 w-full border-white outline-red-700 text-white' required placeholder='Email' type="email" name="" id="1" />
            </div>
            
            <div className='w-[300px] mb-4'>
            <input className='bg-transparent rounded-md border py-3 px-4 w-full border-white outline-red-700 text-white' required placeholder='Password' type="password" name="" id="2" />
            </div>
            <button className='w-full bg-[#c11119] py-2 rounded-md font-semibold hover:bg-[]'>Sign In</button>
        </form>

        <p className='text-center text-xl my-3'>OR</p>

        <form action= {
          async () => {
            'use server'
            await signIn('google',  { redirectTo: "/dashboard" })
          }}>
        <button type='submit' className='w-full bg-[#464343a6] py-2 rounded-md font-semibold hover:bg-[]'>Sign In Using Google</button>
        </form>

        

        <p className='my-5 text-center'>
            Forgot Password?
        </p>

        <div className='flex my-3'>
            <input className='mr-2' type="checkbox" name="" />
            <p>Remember Me</p>
        </div>

        <p>New to Netflix? <Link className='cursor-pointer hover:underline font-semibold' href= "/"> Sign Up Now. </Link></p>
        </div>


    </div>
  )
}

export default Login