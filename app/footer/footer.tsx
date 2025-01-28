import React from 'react'

const Footer = () => {
  return (
    <section className='mt-20 text-white'>
       
 
        <div className='text-[#ffffffb3] font-medium'>
            <p className='underline mt-16'>Questions? Contact us.</p>

            <div className='flex ul-container items-center justify-center flex-wrap underline mt-10'>
                <div className='flex-grow basis-64'>
                    <ul>
                        <li>FAQ</li>
                        <li>Investor Relations</li>
                        <li>Privacy.</li>
                        <li>Speed Test</li>
                        </ul>
                </div>

                <div className='flex-grow basis-64'>
                    <ul>
                        <li>Help Center</li>
                        <li>Jobs</li>
                        <li>Cookies Preferences</li>
                        <li>Legal Notice</li>
                        </ul>
                </div>

                <div className='flex-grow basis-64'>
                    <ul>
                        <li>Account</li>
                        <li>Ways to watch</li>
                        <li>Corporate Information.</li>
                        <li>Only on Netflix</li>
                        </ul>
                </div>

                <div className='flex-grow basis-64'>
                    <ul>
                        <li>Media center</li>
                        <li>Terms of Use</li>
                        <li>Contact Us</li>
                        </ul>
                </div>
            </div>

            <div className='mt-10 mb-20'>
                <select className='bg-black border mb-8 border-white rounded-sm px-3 py-1' name="" id="">
                <option className='bg-black' lang='en' value="en-NG" label='English'>English
                </option>
                </select>
                <p>Netflix Nigeria</p>
            </div>
        </div>

    </section>
  )
}

export default Footer