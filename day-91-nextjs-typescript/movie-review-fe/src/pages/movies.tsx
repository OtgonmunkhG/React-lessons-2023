import { useEffect } from "react"

export default function Movies() {

   async function getMovies():Promise<void> {
    const response = await fetch("http://localhost:8181/movies/pagination")
    const movies = await response.json()
    
   }
    useEffect(() => {
       
    })
    return(
        <div>

        </div>
    )
}