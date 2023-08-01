import React from 'react'
import Image from 'next/image'
import {movies} from "@/data/data.js"

const WorkPAge = ({params}) => {
  const movie = movies.find((movie) => movie.imdbID === params.id);
  return (
    <div className='flex flex-col items-center gap-5 mt-24 justify-center'>
      <div className=' text-3xl'>
        {movie.Title}
      </div>
      <div className="gallery-image">
            <Image
              className="tattoo-image max-w-full h-auto rounded-md object-cover"
              src={movie.Poster}
              alt="gallery"
              width={400}
              height={300}
            />
          </div>
          <div>
            {movie.Plot}
          </div>
          <div>
            {movie.Year}
          </div>
          <div>
            {movie.Genre}
          </div>
          <div>
            {movie.Director}
          </div>
    </div>

  )
}

export default WorkPAge