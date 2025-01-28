
import React from 'react'
import Header from './header'
import Login from './login'
import Footer from '@/app/footer/footer'

const Page = () => {
  return (
    <div>
    <div className='sm:bg-netflixBG bg-cover h-screen bg-no-repeat'>
       <Header/>
       <Login/>
    </div>
    <Footer/>
    </div>
  )
}

export default Page