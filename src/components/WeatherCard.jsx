
import { useState } from "react";

const WeatherCard = ({data, darkMode}) => {

  let id = (data.weather?.[0].id);

  const [isCelsius, SetIsCelsius] = useState(true)


    return (
        <div className="weather__card-container">

          <div className={darkMode ? "weather__card-darkmode" : "weather__card"}>
            
            <div className="weather__grd-img">
              <h2 className="weather__grd"> { isCelsius ? Math.trunc(data.main?.temp) : Math.trunc( ( data.main?.temp *  9/5 ) + 32) }°</h2>
              {
                id >= 200 && id <= 232 ? <img className="weather__img" src="9.svg" alt="" /> : false
              }
              {
                id >= 300 && id <= 321 ? <img className="weather__img" src="6.svg" alt="" /> : false
              }
              {
                id >= 500 && id <= 531 ? <img className="weather__img" src="5.svg" alt="" /> : false
              }
              {
                id >= 600 && id <= 622 ? <img className="weather__img" src="7.svg" alt="" /> : false
              }
              {
                id >= 701 && id <= 781 ? <img className="weather__img" src="8.svg" alt="" /> : false
              }
              {
                id === 800 ? <img className="weather__img" src="clear-sky.png" alt="" /> : false
              }
              
              {
                id === 801 || id === 802 ? <img className="weather__img" src="3.svg" alt="" /> : false
              }

              { 
               id === 803 || id === 804 ? <img className="weather__img" src="4.svg" alt="" /> : false
              }
              
            </div>

            <div className="weather__wind">
              <p> { data.weather?.[0].main }</p>
              <p><span>Pressure:</span> {data.main?.pressure} </p>
            </div>
                
            <div className="weather__location">
              <p>{ data.name }, { data.sys?.country }</p>
              <p>{ data.weather?.[0].description }</p>
            </div>

          </div>
            
          <button 
            className={darkMode ? "change__temp-btn-darkmode" : "change__temp-btn"}  onClick={ () => SetIsCelsius( !isCelsius  ) }> { isCelsius ? "Change to F°" : "Change to C°" }
          </button>
        </div>
    );
};

export default WeatherCard;