import WeatherCard from './components/WeatherCard'
import Loader from './components/Loader'
import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Header from './components/Header'


const apiKey = `ebf0b0de36906a24c7fff67f68d9e7df`
const apiEndPoint = "https://api.openweathermap.org/data/2.5/weather?"

function App() {

  const [weatherData, setWeatherData] = useState( {} )  
  const [loader, setLoader] = useState( true )
  const [darkMode, setDarkMode] = useState(false)
 
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

  return (
    <div className={darkMode ? "App-two" : "App"}>
     { loader && <Loader /> } 
     
    <Header 
    apikey={apiKey}
    apiData={setWeatherData}
    darkMode={darkMode}
    setDarkMode={setDarkMode}
    />

    <div className='card'>
      <WeatherCard 
      data={weatherData}
      darkMode={darkMode}
      />
    </div>

    </div>
  )
}

export default App
