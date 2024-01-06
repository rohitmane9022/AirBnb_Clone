import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function IndexPages() {
  const [Places,setPlaces]= useState([])

  useEffect(()=>{
      axios.get("/places",).then(response=> {setPlaces(response.data.Places)})
  },[])

  return (
    <div className="mt-8 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
     {Places.length > 0 && Places.map(place=>(
      <Link key={place._id} to={"/place/"+place._id}>
       <div className="bg-gray-500 rounded-2xl mb-2 flex">
       {place.photos?.[0] &&(
          <img className="rounded-2xl aspect-square object-cover" src={`https://c681ca78-c502-4b52-9e91-8023e3f31f7e-00-2vurzb2dpjbur.asia-b.replit.dev/uploads/`+place.photos?.[0]} alt="" />
        )}
       </div>
        <h2 className="text-sm ">{place.title} </h2>
        <h3 className="font-bold">{place.address}</h3>
        <div className="mt-2">
        ₹<span className="font-bold">{place.Price}</span> Per Night
        </div>
      </Link>
     ))}
    </div>
  )
}

export default IndexPages