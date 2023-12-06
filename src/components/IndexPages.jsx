import axios from "axios"
import { useEffect, useState } from "react"

function IndexPages() {
  const [Places,setPlaces]= useState([])

  useEffect(()=>{
      axios.get("/places",).then(response=> {setPlaces(response.data.Places)})
  },[])

  return (
    <div className="mt-8 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
     {Places.length > 0 && Places.map(place=>(
      <div key={place.length}>
       <div className="bg-gray-500 rounded-2xl mb-2 flex">
       {place.photos?.[0] &&(
          <img className="rounded-2xl aspect-square object-cover" src={`https://booking-app.rohitmane2.repl.co/uploads/`+place.photos?.[0]} alt="" />
        )}
       </div>
        <h2 className="text-sm ">{place.title} </h2>
        <h3 className="font-bold">{place.address}</h3>
        <div className="mt-2">
        ₹<span className="font-bold">{place.Price}</span> Per Night
        </div>
      </div>
     ))}
    </div>
  )
}

export default IndexPages