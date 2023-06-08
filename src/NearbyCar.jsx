import React, { useEffect, useState } from 'react'
import { CurrentCar, allCarsAvailable } from './atoms.js'
import './NearbyCar.sass'
import { useAtom } from 'jotai'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function NearbyCar() {

    const [allCars, setAllCars] = useAtom(allCarsAvailable)
    const [currentCar, setCurrentCar] = useAtom(CurrentCar)
    const [open, setOpen] = useState(false)
    const [modalCar, setModalCar] = useState(null)

        //modal handling
    const handleModal = (e) => {
        open == false ? 
            setOpen(true, 
                setModalCar(allCarsAvailable.init[e.target.id])) : 
            setOpen(false)}
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
        //handle car states
    const handleNewCar = (e) => {
        setOpen(false)
        setCurrentCar(modalCar)
    }

  return (
    <div className='mt-5'>
        <h5>Nearby Rentals</h5>
        <div className='nearby-car-component-container row'>
            {
            allCars.map((car, key) => {
                return(
                <button onClick={handleModal} 
                key={key} id={key}className='nearby-rental-button col-6'> 
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
         <Modal
        open={open}
        onClose={null}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title"  component="h2">
            <div className='d-flex justify-content-between'>
                <h2 className='reservation-title'>Reservation</h2>
                <button onClick={() => setOpen(false)} className='btn btn-primary px-lg-5 my-lg-1'>X</button>
            </div>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className='row'>
                <div className='col-12 col-lg-6 modal-desc-col'>
                    <h5>Location: <br></br> </h5>{modalCar != null ? <>{modalCar.location.address}</> : <></>}
                    <br></br>
                    {modalCar != null ? <>{modalCar.location.distance}KM away</> : <></>}
                    <h5 className='mt-3'>Car Information:</h5>
                    {modalCar != null ? 
                    <div className='info-table row'>
                        <p className='col-6'>Make:</p><p className='col-6 col-lg-4 text-end'>{modalCar.make}</p>
                        <p className='col-6'>Model:</p><p className='col-6 col-lg-4 text-end'>{modalCar.model}</p>
                        <p className='col-6'>Year:</p><p className='col-6 col-lg-4 text-end'>{modalCar.year}</p>
                        <p className='col-6'>Transmission:</p><p className='col-6 col-lg-4 text-end'>{modalCar.transmission}</p>
                        <p className='col-6'>Doors:</p><p className='col-6 col-lg-4 text-end'>{modalCar.doors}</p>
                    </div>
                    :
                    null}
                </div>
                <div className='col-12 col-lg-6 text-start text-lg-center'>
                    <h2 class="reservation-car">
                        {modalCar != null ? <> {modalCar.make} {modalCar.model}</> : null }
                    </h2>
                    {modalCar != null ? <img className='col-10 offset-1 col-lg-12 offset-lg-0 img img-fluid' src={modalCar.img}></img> : null}
                </div>
                <button onClick={handleNewCar} className='btn btn-primary'>Reserve Now</button>
            </div>            
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}

export default NearbyCar