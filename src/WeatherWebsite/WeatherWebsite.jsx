import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './WeatherWebsite.css';

const WeatherWebsite = () => {
    const [weather, setWeather] = useState('');
    const [city, setCity] = useState("Delhi");
    const api = '800e74c6ff4f48f6bfa54454242210';

    const getWeather = async () => {
        try {
            const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${api}&q=${city}&aqi=no`);
            setWeather(response.data);
            console.log(response.data);
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    };

    useEffect(() => {
        getWeather();
    }, []);

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            getWeather(); // Call getWeather instead of addTodo
        }
    };

    return (
        <div className='Weather-main'>
            <p className='weather-temp'>Location: <span>{weather?.location?.name}</span></p>
            <p className='weather-temp'>Temperature: <span>{weather?.current?.temp_c}°C</span></p>
            <p className='weather-cond'>Condition: <span>{weather?.current?.condition?.text}</span></p>
            <p className='weather-cond'>Humidity: <span>{weather?.current?.humidity}</span></p>
            <input 
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                onKeyPress={handleKeyPress} // Correctly add this line here
                placeholder='Enter city' 
            />
            <button style={{ marginLeft: 30 }} onClick={getWeather}>Search</button>
        </div>
    );
}

export default WeatherWebsite;
