import React, { useEffect, useState } from 'react'
import { CurrentCar, allCarsAvailable } from './atoms.js'
import './NearbyCar.sass'
import { useAtom } from 'jotai'
function NearbyCar() {
        //states
        //get the stored value from the recoil Atom
    const [allCars, setAllCars] = useAtom(allCarsAvailable)
    const [currentCar, setCurrentCar] = useAtom(CurrentCar)
        //set the Atom's value to a local component's state 
        //set a const effect here
    const handleNewCar = (e) => {
        const id = e.target.id
        console.log('current car: ', currentCar)
        console.log('targets ID: ' + e.target.id)
        setCurrentCar(allCarsAvailable.init[id])
    }
  return (
    <div className='mt-5'>
        <h5>Nearby Rentals</h5>
        <div className='nearby-car-component-container row'>
            {
            allCars.map((car, key) => {
                return(
                <button onClick={handleNewCar} key={key} id={key}className='nearby-rental-button col-6'> 
                    <div id={key} key={key} className='px-2 nearby-car-container m-2 d-flex align-items-center justify-content-between'>
                        <div id={key} className='ps-2'>
                            <h5 id={key} value={car.make} className=''>{car.make}</h5> 
                            <p id={key} value={car.location.distance} className='text-start'>{car.location.distance}KM</p>
                        </div>
                        <div id={key}>
                            <img className='img img-fluid car-img me-3' id={key} value={car.img} src={car.img}>
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