import './App.sass'
import CurrentCarComponent from './CurrentCar'
import NearbyCar from './NearbyCar'
import CurrentTrip from './CurrentTrip'
import RecentTrips from './RecentTrips'

function App() {
  return (
  <div> 
    <div className='container nav-container d-flex justify-content-between'>
      <h1 className='left-nav mt-5'>Welcome Back</h1>
      <div className='right-nav d-flex align-items-center'>
         <div className='location-nav'>
          <a>
            <i class="fa-solid fa-location-dot me-2 ">
              </i>{`location`}</a>
              <a><i class="fa-solid fa-pen-to-square ms-2"></i>
              </a>
          </div>
      </div>
    </div>
    <div className='dashboard container-fluid container-lg'>
      <div className="row mt-5">
        <div className='col-12 col-lg-7'>
        <CurrentCarComponent />
        <NearbyCar />
        </div>
        <div className='col-12 col-lg-5'>
          <CurrentTrip />
          <RecentTrips />
        </div>
      </div>
    </div>
  </div>
  )
}

export default App
