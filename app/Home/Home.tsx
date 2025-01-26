import { assets } from "@/public/asset";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <header className=" z-[1000] sticky bg-netflixBG bg-cover bg-no-repeat ">
      <nav className="pt-6 items-center flex justify-between md:mx-20 ">
        <div className="md:w-[300px] w-[200px] h-16 ">
          <Link href="/">
          <Image
            className="w-full h-full object-cover"
            src={assets.logo}
            alt="Netflix Logo"
          />
          </Link>
        </div>

        <div className="sm:mr-16 mr-10 z-30">
          <button className="bg-[#e50914] hover:bg-[#b81820] transition-colors duration-500 text-white font-bold font-sans text-[0.875rem] rounded-lg px-5 py-[5px]">
            Sign In
          </button>
        </div>
      </nav>

      <div className="text-white bg-transparent border-b border-b-red-400 w-full items-center flex py-28 flex-col justify-center">
        <h1 className="font-[900] text-center md:text-[3.5rem] text-[2rem] md:leading-[70px]">
          Unlimited movies, <br />
          TV shows, and more
        </h1>

        <p className="sm:text-[1.25rem] text-[1rem] text-center my-5 font-semibold">
          Starts at ₦2,200. Cancel anytime.
        </p>
        <p className="text-[1rem] text-center px-4 mb-3">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <form className="w-full flex items-center justify-center">
          <div className="flex w-full justify-center items-center flex-col sm:flex-row gap-3">
            <input
              className="sm:w-[350px] px-8 py-4 w-[90%] rounded-md text-white font-semibold pl-4 border border-green-300 bg-[#ffffff18] "
              type="email"
              required
              placeholder="Email Address"
            />
            <span>
              <button className="sm:px-8 sm:py-3 px-4 py-3 rounded-md font-bold font-sans sm:text-[1.5rem] text-[1.2rem] bg-[#d4131d]">
                Get Started &gt;
              </button>
            </span>
          </div>
        </form>
      </div>
    </header>
  );
};

export default Home;
