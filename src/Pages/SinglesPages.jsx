import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import BookingWindow from "./BookingWindow";

export default function SinglesPages() {
  const {id}= useParams()
  const [Place,setPlace] = useState([])
  const [ShowAllPhoto,setShowAllPhoto]= useState(false)
  
  useEffect(()=>{
      if(!id){
        return null;
      }
      axios.get(`/place/${id}`).then(response=> setPlace(response.data))
  },[id])
console.log(Place)

  if(ShowAllPhoto){
    return(
      <div className="absolute inset-0 bg-black text-white min-h-full">
        <div className="bg-black p-8 grid gap-4">
          <div>
            <h2 className="text-3xl ">Photo of {Place.title}</h2>
            <button onClick={e=> setShowAllPhoto(false)} className="fixed right-12 top-8 flex gap-1 py-2 px-4 rounded-2xl shadow shadow-black bg-white text-black"><svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
Close photo</button>
          </div>
        {Place?.photos?.length>0 && Place.photos.map(photo=>(
          <div>
            <img src={"https://booking-app.rohitmane2.repl.co/uploads/"+photo} alt={"https://booking-app.rohitmane2.repl.co/uploads/"+photo}/>
          </div>
        ))}
        </div>
      </div>
    )
  }

  return (
    <div className="mt-4 -mx-8 px-8 pt-8 max-w-[1300px]  mx-auto">
      <h1 className="text-3xl">{Place.title}</h1>
      <a className="my-2 block font-semibold underline flex gap-1" href={"https://maps.google.com/?q="+Place.address} target="blank" ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
</svg>
{Place.address}
</a>
      <div className="relative min-w-[1200px] min-h-[10px] grid">
      <div className="grid gap-2 grid-cols-[2fr_1fr] grid-rows-1 rounded-3xl overflow-hidden min-w-[1200px]">
       <div className="grid">
        {Place.photos?.[0] &&(
          <div >
             <img className=" 	h-[100%]	" src={`https://booking-app.rohitmane2.repl.co/uploads/`+Place.photos[0]} alt="" />
          </div>
         
        )}
        </div>
        
       <div className=" grid gap-1">
       {Place.photos?.[1] &&(
          <img className="object-cover" src={`https://booking-app.rohitmane2.repl.co/uploads/`+Place.photos[1]} alt="" />
        )}
        <div className="">
        {Place.photos?.[2] &&(

<img className="overflow-hidden" src={`https://booking-app.rohitmane2.repl.co/uploads/`+Place.photos[2]} alt="" />
)}
        </div>
        
       </div>
      </div>
      <button onClick={e=> setShowAllPhoto(true)} className="flex gap-1 absolute bottom-2 right-2 py-2 px-4 bg-white rounded-2xl shadow shadow-md shadow-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>
Show more photos</button>
      </div>
     

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
      <div>
      <div>
        <h2 className="font-semibold text-2xl border-t">Extra Info</h2>
      </div>
      <div className="mb-4 mt-2 text-sm text-gray-700 leading-100">{Place.extraInfo}</div>
      </div>
    </div>
  )
}
