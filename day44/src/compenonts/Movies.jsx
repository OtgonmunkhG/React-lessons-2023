import { useState } from "react"
import movieData from '../data/books'
import { Link } from 'react-router-dom'

export default function Movies() {
    const [movies, setMovies] = useState()
    return (
        <div> <h1>Movies</h1>
            {
                movieData.map((data, index) => {
                    return (
                        <Link to={`/movie/${data.id}`} state={data} key={index}>
                            <div >
                                {data.name}
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}