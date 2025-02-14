"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './spinner';

type Movie = {
    id: number,
    title: string,
    poster_path: string,
    overview: string,
    release_date: string
}

const Movies = () => {
    const [movies, setMovies] =  useState<Movie[]>([]);
    const [loading, setLoading] = useState(false)
    const baseUrl:string = "https://api.themoviedb.org/3";
    const apiKey = process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN

    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true)
            try {
                
                const response = await axios.get(`${baseUrl}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,{
                    headers: {
                        'Authorization': `Bearer ${apiKey}`
                    }
                })
                
                setMovies(response.data.results)

                if(response.status === 200) {
               console.log("movies fetched successfully")
                }  else{
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
        fetchMovies()
    }, [])
  return (
    <div className='text-white'>
        <h2 className='text-center text-2xl font-bold my-10'>All Movies</h2>
        {loading ? (
            <Spinner/>
        ) : (
            <ul className='w-[80%] m-auto grid grid-cols-4 gap-5 max-xs:grid-cols-1 max-sm:grid-cols-2 max-lg:grid-cols-3'>
                {movies.map((movie, index:number) => (
                    <p key={index} >
                        {movie.title}
                    </p>
                ))}
            </ul>
        )}
    </div>
  )
}

export default Movies