import React, {useState, useEffect} from 'react'
import { selectAllTrips } from './atoms'
import { useRecoilState, useRecoilValue } from 'recoil'
import './CurrentTrip.sass'
function CurrentTrip() {
  const localeLocationSelector = useRecoilValue(selectAllTrips)
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