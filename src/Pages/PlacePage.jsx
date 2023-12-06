
import { Link } from "react-router-dom";
import AccountNavigation from "./AccountNavigation";
import { useEffect, useState } from "react";
import axios from "axios";
function PlacePage() {
  const [placeAll,setplaceAll]= useState([])

  useEffect(()=>{
    axios.get('/user-place').then(({data})=> setplaceAll(data.AllPlace))
  },[])

  console.log(placeAll)
  return (
    <div>
    <AccountNavigation/>
        <div className="text-center">
          <Link className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full" to={"/account/place/new"}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            Add new places
          </Link>
        </div>
        <div className="mt-4" >
          {placeAll.length>0 && placeAll.map(place=>(
            <Link to={"/account/place/"+place._id} className="flex gap-4 cursor-pointer bg-gray-100 p-4 rounded-2xl" key={place.length}>
              <div className=" flex object-cover w-32 h-32 bg-gray-300 grow shrink-0">
                {place.photos.length>0 &&(
                  <img src={"https://booking-app.rohitmane2.repl.co/uploads/"+place.photos[0]} alt={place.photos[0]} />
                )}
              </div>
              <div className="grow-0 shrink">
              <h2 className="text-xl">{place.title}</h2>
              <p className="text-sm mt-2">{place.description}</p>
              </div>
              
            </Link>
          ))}
        </div>
    </div>
  );
}

export default PlacePage;
