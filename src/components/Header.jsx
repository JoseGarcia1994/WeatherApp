import { useState, useEffect } from "react";
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
		<div className='header'>
			<div className='header__container-title container'>
				<h1>Weather app</h1>
			</div>

			<div className='header__container-input container'>
				<input
					type="text"
					placeholder='Search City'
					onChange={(e) => setCity(e.target.value)}
					className={darkMode ? "header__input-darkmode" : "header__input"}
				/>
				<button
					onClick={searchByCity}
					className={darkMode ? "header__btn-darkmode" : "header__btn"}>
					Search
				</button>
			</div>

			<div className='header__container-dark container'>
				<button
					className={darkMode ? "header__dm" : "header__dark-mode"}
					onClick={dm}>
					{darkMode ? <i className='bx bxs-bulb bx-sm'></i> : <i className='bx bxs-bulb bxs-bulb-two bx-sm'></i>}
				</button>
			</div>
		</div>
	);
};

export default Header;