import { useEffect, useState } from "react";

interface IGeo {
    type: {
        type: string,
        enum: ["point"],
        required: true
    },
    coordinates: {
        type: [number, number],
        require: true
    }
}



interface IAddress {
    street1: string,
    city: string,
    state: string,
    zipcode: string
}

interface ILocation {
    address: IAddress,
    goe: IGeo
}
interface ITheater {
    theaterId: number,
    location: ILocation
}

export default function TheatersList(): JSX.Element {
    const ALL_URL= "http://localhost:8181/theaters/list";
   
    const [data, setData] = useState<ITheater[]>([])
    console.log(data)

   async function fetchedAll(URL: string): Promise<void> {
    const FETCHED_DATA = await fetch(URL)
    const FETCHED_JSON = await FETCHED_DATA.json()
    console.log(FETCHED_JSON)
    setData(FETCHED_JSON)
    
   }

   useEffect(() => {
    fetchedAll(ALL_URL)
   }, [])
    return(
        <div>
            <h1>Movies</h1>
        {
             data.map((element, index) => 
                (
                    <div key={index}>
                        {element.theaterId}
                        
                    </div>
                )
            )
        }
        </div>
    )
}