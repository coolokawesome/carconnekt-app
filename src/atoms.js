import Tesla from './imgs/cars/tesla.png'
import Honda from './imgs/cars/honda.png'
import Jeep from './imgs/cars/jeep.png'
import Ford from './imgs/cars/ford.png'
import Mini from './imgs/cars/mini.png'
import Nissan from './imgs/cars/nissan.png'
import Volkswagen from './imgs/cars/golf.png'
import Audi from './imgs/cars/audi.png'
import { atom, selector} from 'recoil';

export const allCarsAvailable = atom(
    {
        key: "allCarsAvailable",
        default:[
            {
            id: 1,
            make: "Tesla",
            model: "Model 3",
            year: 2022,
            transmission: "automatic",
            doors: 4,
            img: Tesla,
            location:{
                address: "33 King St. Toronto, ON",
                distance: 0.3
            }
            },
            {
            id: 2,
            make: "Honda",
            model: "Accord",
            year: 2021,
            transmission: "automatic",
            doors: 4,
            img: Honda,
            location: {
                address: "55 Queen St. Toronto, ON",
                distance: 0.5
            }
            },
            {
            id: 3,
            make: "Jeep",
            model: "Wrangler",
            year: 2022,
            transmission: "automatic",
            doors: 4,
            img: Jeep,
            location: {
                address: "77 Main St. Toronto, ON",
                distance: 0.4
            }
            },
            {
            id: 4,
            make: "Ford",
            model: "F-350",
            year: 2022,
            transmission: "automatic",
            doors: 4,
            img: Ford,
            location: {
                address: "99 Market St. Toronto, ON",
                distance: 0.6
            }
            },
            {
            id: 5,
            make: "Mini",
            model: "Cooper S",
            year: 2020,
            transmission: "manual",
            doors: 2,
            img: Mini,
            location: {
                address: "11 Grove St. Toronto, ON",
                distance: 0.2
            }
            },
            {
            id: 6,
            make: "Nissan",
            model: "Sentra",
            year: 2020,
            transmission: "automatic",
            doors: 4,
            img: Nissan,
            location: {
                address: "22 Oak St. Toronto, ON",
                distance: 0.4
            }
            },
            {
            id: 7,
            make: "Volkswagen",
            model: "Golf",
            year: 2022,
            transmission: "automatic",
            doors: 4,
            img: Volkswagen,
            location: {
                address: "44 Elm St. Toronto, ON",
                distance: 0.7
            }
            },
            {
            id: 8,
            make: "Audi",
            model: "Etron",
            year: 2023,
            transmission: "automatic",
            doors: 4,
            img: Audi,
            location: {
                address: "66 Maple St. Toronto, ON",
                distance: 0.9
                }
            } 
        ]
    }
)
export const allTrips = atom ({
    key: "tripList",
    default: [
            {
            departure: "2 April Ct. Toronto, ON",
            arrival: "831 Blooms St. Toronto, ON"
            },

            {
            departure: "831 Blooms St. Toronto, ON",
            arrival: "2 April Ct. Toronto, ON"
            },

            {
            departure: "22 Spadina Ave. Toronto, ON",
             arrival: "831 Blooms St. Toronto, ON"
            },
        ]
    }
)

export const selectAllTrips = selector(
    {
        key: "selectAllTrips",
        get: ({get}) => get(allTrips)
    }
)
export const selectedCar = selector(
    {
        key: "selectedCar",
        get: ({get}) => get(allCarsAvailable)
    }
)