import { useEffect, useState } from "react"
import {allTrips} from './atoms'
import { useAtom } from "jotai"
import './RecentTrips.sass'
function RecentTrips() {
    
    const [trips, setTrips] = useAtom(allTrips)
    return(
        <div className='recent-trips-container mt-3'>
            <h5>Recent Trips</h5>
            {
                trips.map((trip, id) => {
                    return (
                        <div id={`trip-${id}`} className="trip-container p-3 my-2">
                            <h5 className="trip-label">
                                {trip.arrival}
                            </h5>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default RecentTrips