import React from 'react'

const Footer = () => {
  return (
    <section className='mt-20 text-white'>
          <p className="text-[1rem] font-medium sm:text-center  mb-3">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <form className="w-full flex items-center justify-center">
          <div className="flex w-full justify-center sm:items-center flex-col sm:flex-row gap-3">
            <input
              className="sm:w-[550px] px-8 py-4 w-[90%] rounded-md text-white font-semibold pl-4 border border-green-300 bg-[#ffffff18] "
              type="email"
              required
              placeholder="Email Address"
            />
            <span>
              <button className="w-40 py-3 pl-1 pr rounded-md font-bold font-sans md:text-[1.5rem] text-[1.2rem] bg-[#d4131d]">
                Get Started &gt;
              </button>
            </span>
          </div>
        </form>
 
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