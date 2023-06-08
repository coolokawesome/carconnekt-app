import React, {useState, useEffect} from 'react'
import { allTrips } from './atoms'
import { useAtom } from 'jotai'
import './CurrentTrip.sass'
function CurrentTrip() {
  const [localeLocationSelector, setLocaleLocationSelector] = useAtom(allTrips)
  const [location, setLocation] = useState(localeLocationSelector[0])
  useEffect(() => {
    setLocation(localeLocationSelector[0])
  }, [])

  return (
    <>
      <div className='current-location-container p-3'> 
        <h5>Current Trip </h5> 
        <h2 className='text-start'>{location.arrival}</h2>
      </div>
    </>
  )
}
 
export default CurrentTrip