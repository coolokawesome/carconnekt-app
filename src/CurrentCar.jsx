import React, { useEffect, useState } from 'react'
import { CurrentCar, allCarsAvailable } from './atoms.js'
import './CurrentCar.sass'
import { useAtom } from 'jotai'

function CurrentCarComponent() {

    //get the stored value from the recoil Atom
    const [car, setCar] = useAtom(CurrentCar)
    return(
     <>
    <button className='current-car-button '>
        <div className='current-car-component-container p-3'>
            <div className='current-car-component-header'>
                <h5 className='text-start'>Current Reservation</h5>  
                <h2 className='text-start'>{`${car.make } ${car.model}`}</h2>
            </div>
            <div className='current-car-component-body'>
                <div className='row d-flex align-items-center'>
                    <div className='col-6'>
                    </div>
                    <img className='img img-fluid col-6' src={car.img}></img>
                </div>
                <div className='row d-flex justify-content-between'>
                    {/* {possibly location of car below?} */}
                    <p className='col-6 text-start'>{null}</p>             
                </div>

            </div>
        </div>
    </button>
     </>   
    )
} 

export default CurrentCarComponent