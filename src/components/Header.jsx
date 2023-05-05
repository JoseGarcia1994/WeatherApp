import { useState } from "react";
import axios from "axios";

const Header = ({ apikey, apiData, darkMode, setDarkMode }) => {

	const [city, setCity] = useState("")

	const searchByCity = () => {
		axios
			.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`)
			.then(resp => apiData(resp.data))
			.catch(error => console.error(error))
	}

	const dm = () => {
		setDarkMode(!darkMode)
	}

	return (
		<div>
			<div className='header'>

				<div className='header__container-title container'>
					<h1>Weather app</h1>
				</div>

				<div className='header__container-input container'>
					<input type="text" placeholder='Search City' className={darkMode ? "header__input-darkmode" : "header__input"}
						onChange={(e) => setCity(e.target.value)}
					/>
					<button onClick={searchByCity} className="header__btn" >Search</button>
				</div>

				<div className='header__container-dark container'>
					<button
						className='header__dark-mode'
						onClick={dm}>
						{darkMode ? <i className='bx bxs-bulb bxs-bulb-two bx-sm'></i> : <i className='bx bxs-bulb bx-sm'></i>}
					</button>
				</div>

			</div>
		</div>
	);
};

export default Header;