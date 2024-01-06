import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import BookingWindow from "./BookingWindow";
import PlaceGallary from "./PlaceGallary";

export default function SinglesPages() {
  const {id}= useParams()
  const [Place,setPlace] = useState([])
  
  
  useEffect(()=>{
      if(!id){
        return null;
      }
      axios.get(`/place/${id}`).then(response=> setPlace(response.data))
  },[id])
console.log(Place)


  return (
    <div className="mt-4 -mx-8 px-8 pt-8 grid justify-center  mx-auto">
      <h1 className="text-3xl">{Place.title}</h1>
      <a className="my-2 block font-semibold underline flex gap-1" href={"https://maps.google.com/?q="+Place.address} target="blank" ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
</svg>
{Place.address}
</a>
      
    <PlaceGallary Place={Place}/>
      <div className="mt-8 mb-8 grid gap-8 grid-cols-1  md:grid-cols-[2fr_1fr]">
        
        <div>
        <div className="my-4">
      <h2 className="font-semibold text-2xl">Description</h2>
      {Place.description}</div>
      Check-in: {Place.checkIn}<br/>
      Check-out: {Place.checkOut}<br/>
        Max number of guest: {Place.maxGuest}
        
      </div>
      <div>
       <BookingWindow Place={Place}/>
      </div>
      </div>
      <div className="border-t bg-neutral-50 -mx-20 px-8 py-8">
      <div>
        <h2 className="font-semibold text-2xl ">Extra Info</h2>
      </div>
      <div className="mb-4 mt-2  text-sm text-gray-700 leading-5 ">{Place.extraInfo}</div>
      </div>
    </div>
  )
}
