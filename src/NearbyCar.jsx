import React, { useEffect, useState } from 'react'
import { selectedCar, allCarsAvailable, carSelector } from './atoms.js'
import {useRecoilState, useRecoilValue} from 'recoil'
import './NearbyCar.sass'
function NearbyCar() {
        //states
        //get the stored value from the recoil Atom
    const currentCar = useRecoilValue(selectedCar)
        //set the Atom's value to a local component's state 
    // const handleCar = (id) => {
    //     setCar(id)
    // }
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
                            <button onClick={handleCar(id)}></button>
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