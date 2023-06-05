import { useEffect, useState } from "react"
import {selectAllTrips} from './atoms'
import { useRecoilValue } from "recoil"
import './RecentTrips.sass'
function RecentTrips() {
    const allTrips = useRecoilValue(selectAllTrips)
    return(
        <div className='recent-trips-container mt-3'>
            <h5>Recent Trips</h5>
            {
                allTrips.map((trip, id) => {
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