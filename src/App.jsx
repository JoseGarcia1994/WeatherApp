import WeatherCard from './components/WeatherCard'
import Loader from './components/Loader'
import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'


const apiKey = `ebf0b0de36906a24c7fff67f68d9e7df`
const apiEndPoint = "https://api.openweathermap.org/data/2.5/weather?"

function App() {

  const [weatherData, setWeatherData] = useState( {} )  
  const [loader, setLoader] = useState( true )
  const [city, setCity] = useState("")

 
  useEffect( () => {

    navigator.geolocation.getCurrentPosition( (position) => {
      let finalEndPoint = `${apiEndPoint}lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`

      getData(finalEndPoint)
    })

     setTimeout(() => {
      setLoader( false )
     }, 2000);  

  }, [])

  const getData = (url) => {
    axios
    .get(url)
    .then(resp => setWeatherData(resp.data))
    .catch( error => console.error(error))
  }

  const searchByCity = () => {
    axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then( resp => setWeatherData(resp.data))
        .catch( error => console.error(error))
  }

  return (
    <div className="App">
     { loader && <Loader /> } 
     
      <div className='header'>

        <div className='header__container-title container'>
          <h1>Weather app</h1>
        </div>

        
        <div className='header__container-input container'>
            <input type="text" placeholder='Search City' className='header__input'
            onChange={ (e) => setCity(e.target.value)}
            />
            <button onClick={searchByCity} className="header__btn" >Search</button>
        </div>
        
        <div className='header__container-dark container'>
          <button className='header__dark-mode'>On/Off</button>
        </div>
      
      </div>

      <div className='card'>
        <WeatherCard 
        data={weatherData}
        dataC={city}
        />
      </div>

    </div>
  )
}

export default App
