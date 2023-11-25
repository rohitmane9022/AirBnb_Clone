import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Perks from "../components/Perks";
import axios from "axios";

function PlacePage() {
  const { action } = useParams();

  const [title, settitle] = useState("");
  const [address, setaddress] = useState("");
  const [addedPhotos, setaddedPhotos] = useState([]);
  const [photoLink, setphotoLink] = useState("");
  const [description, setdescription] = useState("");
  const [perks, setperks] = useState([]);
  const [extraInfo, setextraInfo] = useState("");
  const [checkIn, setcheckIn] = useState("");
  const [checkOut, setcheckOut] = useState("");
  const [maxguest, setmaxguest] = useState("");

  const addPhotoByLink=async(e)=>{
    e.preventDefault()

    const {data:filename}=  await axios.post("/upload-by-link", {link:photoLink})
    setaddedPhotos(pre=>{
      return [...pre, filename]
    })
    setphotoLink("")
  }

  return (
    <div>

      {action !== "new" && (
        <div className="text-center">
          <Link className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full" to={"/account/place/new"}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            Add new places
          </Link>
        </div>
      )}

      {action === "new" && (
        <div>
          <form>
            <h2 className="text-2xl mt-4">Title</h2>
            <p className="text-gray-500 text-sm">Title for your place. should be short and catchy as in adventure</p>
            <input type="text" value={title} onChange={(e) => settitle(e.target.value)} placeholder="title, for example: My lovely apt" />
            <h2 className="text-2xl mt-4">Address</h2>
            <p className="text-gray-500 text-sm">Address to this place</p>
            <input type="text" value={address} onChange={(e) => setaddress(e.target.value)} placeholder="address" />
            <h2 className="text-2xl mt-4">Photos</h2>
            <p className="text-gray-500 text-sm">More = Better</p>
            <div className="flex gap-2">
              <input value={photoLink} onChange={(e) => setphotoLink(e.target.value)} type="text" placeholder="Add using a link ...jpg" />
              <button className="bg-gray-200 px-4 rounded-2xl" onClick={addPhotoByLink}>Add&nbsp;photo</button>
            </div>

            <div className="mt-2 grid  grid-cols-3 lg:grid-cols-6 md:grid-cols-4">
             {addedPhotos.length> 0 && addedPhotos.map(link=>(
              <div>
                <img src={`https://booking-app.rohitmane2.repl.co/uploads/${link}`} />
              </div>
             ))}
              <button className="flex justify-center gap-1 border bg-transparent rounded-2xl p-8 text-2xl text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                  />
                </svg>
                Upload
              </button>
            </div>
            <h2 className="text-2xl mt-4">Description</h2>
            <p className="text-gray-500 text-sm">description of the place</p>
            <textarea value={description} onChange={(e) => setdescription(e.target.value)} />

            <h2 className="text-2xl mt-4">Perks</h2>
            <p className="text-gray-500 text-sm">select all the perks of your place</p>
            <div className="grid mt-2 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
              <Perks selected={perks} onChange={setperks} />
            </div>

            <h2 className="text-2xl mt-4">Extra Info</h2>
            <p className="text-gray-500 text-sm">How many Hours.</p>
            <textarea value={extraInfo} onChange={(e) => setextraInfo(e.target.value)} />

            <h2 className="text-2xl mt-4">Check in$out times, max guests</h2>
            <p className="text-gray-500 text-sm">add check in and out time, remember to have how many guest are coming</p>
            <div className=" grid  sm:grid-cols-3 gap-2">
              <div>
                <h3 className="mt-2 -mb-1">Check in time</h3>
                <input type="text" 
                placeholder="2pm"
                 value={checkIn}
                 onChange={(e) => setcheckIn(e.target.value)} />
              </div>
              <div>
                <h3 className="mt-2 -mb-1">Check in out</h3>
                <input type="text" 
                placeholder="11" 
                value={checkOut}
                 onChange={(e) => setcheckOut(e.target.value)} />
              </div>
              <div>
                <h3 className="mt-2 -mb-1">Max number of guests </h3>
                <input type="text" 
                placeholder="1" 
                value={maxguest} 
                onChange={(e) => setmaxguest(e.target.value)} />
              </div>
            </div>
            <button className="primary my-4">Save</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default PlacePage;
