"use client"

import React from 'react'
import Home from './Home/Home'
import Hero from './hero/Hero'
import Reasons from './reasons/reasons'
import Faq from './FAq/faq'
import Footer from './footer/footer'
// import Search from './Search/Search'


const Page = () => {
// const [searchTerm, setSearchTerm] = useState("")


  return (

    <div className='bg-black'>
      <Home/>
      {/* <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> */}
      <Hero/>
      <Reasons/>
      <Faq/>
      <Footer/>
    </div>

   

    
  )
}

export default Page