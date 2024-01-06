import React from 'react'

export default function PlaceImg({place,index=0,className=null}) {

  if(!place.photos?.length){
    return ""
  }
  
  return (
   
      <img className="h-full" src={"https://c681ca78-c502-4b52-9e91-8023e3f31f7e-00-2vurzb2dpjbur.asia-b.replit.dev/uploads/"+place.photos[index]}/>
  
  )
}
