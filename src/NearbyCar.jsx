import React, { useEffect, useState } from 'react'
import { selectedCar, allCarsAvailable } from './atoms.js'
import {useRecoilState, useRecoilValue} from 'recoil'
import './NearbyCar.sass'
function NearbyCar() {
    const currentCar = useRecoilValue(selectedCar)
  return (
    <div className='mt-5'>
        <h5>Nearby Rentals</h5>
        <div className='nearby-car-component-container row'>
            {
            currentCar.map((car, id) => {
                return(
                <button className='nearby-rental-button col-6'> 
                    <div key={id} className='px-2 nearby-car-container m-2 d-flex align-items-center justify-content-between'>
                        <div className='ps-2'>
                            <h5 className=''>{car.make}</h5> 
                            <p className='text-start'>{car.location.distance}KM</p>
                        </div>
                        <div>
                            <img className='img img-fluid car-img me-3' src={car.img}>
                            </img>
                        </div>
                    </div>
                </button>
                )
            })
            }
         </div>
    </div>
  )
}

export default NearbyCar