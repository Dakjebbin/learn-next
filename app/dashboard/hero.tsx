'use client'

import { assets } from '@/public/asset'
import axios from 'axios'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Movies from './movies'
import Spinner from './spinner'
import { useDebounce } from 'react-use'

type Movie = {
  id: number,
  title: string,
  poster_path: string,
  overview: string,
  release_date: string
  vote_average: number
  original_language: string
}

const Hero = () => {
  const [search, setSearch] = useState('')
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false)
  const [debounceSearch, setDebounceSearch] = useState('')
  const baseUrl: string = "https://api.themoviedb.org/3";
  const apiKey = process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN

  useDebounce(() => setDebounceSearch(search), 1000, [search])

  useEffect(() => {
    const fetchMovies = async (query: string = '') => {
      setLoading(true)
      try {

        const endPoint = query ? `${baseUrl}/search/movie?query=${encodeURIComponent(query)}`
          :
          `${baseUrl}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`
          
          console.log(query);
          

        const response = await axios.get(endPoint, {
          headers: {
            'Authorization': `Bearer ${apiKey}`
          }
        })


        setMovies(response.data.results)

        if (response.status === 200) {
          console.log("movies fetched successfully")
        } else {
          console.log("Failed to fetch movies")
        }

      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log("Error response:", error?.response?.data);
        } else {
          console.log("Error:", error);
        }
      } finally {
        setLoading(false)
      }

    }

    
    fetchMovies(debounceSearch)
  }, [debounceSearch])

  
  return (
    <div>
      <div className='bg-heroBg bg-cover w-full'>
        <section className='flex flex-col items-center justify-center '>
          <Image className='w-96' src={assets.hero} alt='hero image' width='1000' height="1000" />
          <p className='text-5xl fontfam text-center font-[700]'>
            Find <span className='bg-gradient-to-tr bg-clip-text text-transparent from-[#D6C7FF] to-[#AB8BFF]'>Movies</span> You’ll Love <br /> Without the Hassle
          </p>
        </section>

        <section>
          <div className='flex relative justify-center sm:w-96 w-[340] m-auto items-center'>
            <input
              value={search}
              className='bg-[#0F0D23] px-[40px] py-3 w-full mt-7 rounded-md'
              placeholder='Search through 300+ movies online'
              type="text"
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className='absolute left-0 bottom-3 px-3'>
              <Image src={assets.search} alt='icon' />
            </div>
          </div>
        </section>
      </div>
      <h2 className="text-center text-2xl font-bold my-10">All Movies</h2>
      {movies.length === 0 && <p className="text-center text-red-500 text-2xl font-bold my-10">No Movies Found</p>}
      <div className="w-[80%] m-auto grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
        {loading ? <Spinner /> : (
          movies.map((movie, index) => (
            <Movies movies={movie} key={index} />
          ))
        )}
      </div>
    </div>
  )
}

export default Hero