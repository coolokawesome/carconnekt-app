import React, {useState, useEffect} from 'react'
import { CurrentLocation } from './atoms'
import { useAtom } from 'jotai'
import './CurrentTrip.sass'


function CurrentTrip() {
  const [location] = useAtom(CurrentLocation)


  return (
    <>
      <div className='current-location-container p-3'> 
        <h5>Current Trip </h5> 
        <h2 className='text-start reservation-car'>{location.address}</h2>
      </div>
    </>
  )
}
 
export default CurrentTrip