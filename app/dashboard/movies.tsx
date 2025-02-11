"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'

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
    const apiKey = process.env.TMDB_ACCESS_TOKEN

    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true)
            try {
                
                const response = await axios.get(`${baseUrl}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,{
                    headers: {
                        'Authorization': `Bearer ${apiKey}`
                    }
                })
                console.log(response);
                
                setMovies(response.data.results)

                if(response.status === 200) {
               console.log("movies fetched successfully")
                }  else{
                    console.log("Failed to fetch movies")
                }
                
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
            
        }
        fetchMovies()
    }, [])
  return (
    <div className='text-white'>
        {loading ? (
            <div className='text-red-500 animate-pulse'>Loading</div>
        ) : (
            <ul>
                {movies.map((movie, index) => (
                    <li key={index}>
                        {movie.title}
                    </li>
                ))}
            </ul>
        )}
    </div>
  )
}

export default Movies