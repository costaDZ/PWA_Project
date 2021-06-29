import React from 'react';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'f33a484cf794d08d0148764789aaba32';


export const fetchWeather = async (query) => {

    try {
        const response = await fetch(URL + `?q=${query}&units=metric&appid=${API_KEY}`);
        const data = await response.json();
        return data;
    } catch (error) {
        alert(error)
    }

}

