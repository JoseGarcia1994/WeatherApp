
import { useState } from "react";

const WeatherCard = ({data, darkMode}) => {

  let id = (data.weather?.[0].id);

  const [isCelsius, SetIsCelsius] = useState(true)

  Math.trunc( ( data.main?.temp *  9/5 ) + 32 )

  const kelvinToCelsius = () => {
    const kelvin = Math.trunc(data.main?.temp - 273.15)
    const celsius = Math.trunc(data.main?.temp)
    if (data.main?.temp > 200) {
        return kelvin
    } else {
        return celsius
    }
  }

  const images = () => {
    if (id >= 200 && id <= 232) {
      return <img className="weather__img" src="9.svg" alt="" />
    } else if (id >= 300 && id <= 321) {
      return <img className="weather__img" src="6.svg" alt="" />
    } else if (id >= 500 && id <= 531) {
      return <img className="weather__img" src="5.svg" alt="" />
    } else if (id >= 600 && id <= 622) {
      return <img className="weather__img" src="7.svg" alt="" />
    } else if ( id >= 701 && id <= 781) {
      return <img className="weather__img" src="8.svg" alt="" />
    } else if ( id === 800 ) {
      return <img className="weather__img" src="clear-sky.png" alt="" />
    } else if (id === 801 || id === 802) {
      return <img className="weather__img" src="3.svg" alt="" />
    } else if ( id === 803 || id === 804) {
      return <img className="weather__img" src="4.svg" alt="" />
    }
  }

    return (
        <div className="weather__card-container">
          <div className={darkMode ? "weather__card-darkmode" : "weather__card"}>
            
            <div className="weather__grd-img">
              <h2 
              className={darkMode ? "weather__grd-dm" : "weather__grd"}>
                 { isCelsius ? kelvinToCelsius() : (Math.trunc(kelvinToCelsius() * 9/5) + 32)} {isCelsius ? "°C" : "°F"} 
              </h2>
              {
                images()
              }
            </div>

            <div className={darkMode ? "weather__wind-dm" : "weather__wind"}>
              <p> <span>Sky:</span> { data.weather?.[0].main }</p>
              <p><span>Pressure:</span> {data.main?.pressure} </p>
            </div>
                
            <div className={darkMode ? "weather__location-dm" : "weather__location"}>
              <p>{ data.name }, { data.sys?.country }</p>
              <p>{ data.weather?.[0].description }</p>
            </div>

          </div>
          <button 
          className={darkMode ? "change__temp-btn-darkmode" : "change__temp-btn"}  
          onClick={ () => SetIsCelsius( !isCelsius  ) }> { isCelsius ? "Change to F°" : "Change to C°" }
          </button>
        </div>
    );
};

export default WeatherCard;