import React, { useEffect, useState } from 'react'
import { CurrentCar, allCarsAvailable } from './atoms.js'
import './CurrentCar.sass'
import { useAtom } from 'jotai'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function CurrentCarComponent() {

    //get the stored value from the recoil Atom
    const [car, setCar] = useAtom(CurrentCar)
    const [open, setOpen] = useState(false)


    const handleModal = (e) => {
        open == false ? setOpen(true) : setOpen(false)}
        //MUI Styling: https://mui.com/material-ui/react-modal/
        const style = {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          };


    return(
     <>
    <button onClick={handleModal} className='current-car-button '>
        <div className='current-car-component-container p-3'>
            <div className='current-car-component-header'>
                <h5 className='text-start'>Current Reservation</h5>  
                <h2 className='text-start reservation-car'>{`${car.make } ${car.model}`}</h2>
                <h5 className='text-start'>{car.location.distance}KM away</h5>
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
    <Modal
        open={open}
        onClose={null}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title"  component="h2">
            <div className='d-flex justify-content-between'>
                <h2 className='reservation-title'>Current Reservation</h2>
                <button onClick={() => setOpen(false)} className='btn btn-primary px-lg-5 my-lg-1'>X</button>
            </div>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className='row'>
                <div className='col-12 col-lg-6 modal-desc-col'>
                    <h5>Location: <br></br> </h5>{car != null ? <>{car.location.address}</> : <></>}
                    <br></br>
                    {car != null ? <>{car.location.distance}KM away</> : <></>}
                    <h5 className='mt-3'>Car Information:</h5>
                    {car != null ? 
                    <div className='info-table row'>
                        <p className='col-6'>Make:</p><p className='col-6 col-lg-4 text-end'>{car.make}</p>
                        <p className='col-6'>Model:</p><p className='col-6 col-lg-4 text-end'>{car.model}</p>
                        <p className='col-6'>Year:</p><p className='col-6 col-lg-4 text-end'>{car.year}</p>
                        <p className='col-6'>Transmission:</p><p className='col-6 col-lg-4 text-end'>{car.transmission}</p>
                        <p className='col-6'>Doors:</p><p className='col-6 col-lg-4 text-end'>{car.doors}</p>
                    </div>
                    :
                    null}
                </div>
                <div className='col-lg-6 col-xl-4 offset-lg-0 offset-xl-1 text-start text-lg-center'>
                    <h2 class="reservation-car">
                        {car != null ? <> {car.make} {car.model}</> : null }
                    </h2>
                    {car != null ? <img className='col-10 offset-1 col-lg-12 col-xl-10 offset-lg-0 offset-xl-1 img img-fluid' src={car.img}></img> : null}
                </div>
            </div>            
          </Typography>
        </Box>
      </Modal>
     </>   
    )
} 

export default CurrentCarComponent