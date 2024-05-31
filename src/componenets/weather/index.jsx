import React, { useEffect, useState } from 'react'
import './index.css'
import axios from 'axios'
import toast from 'react-hot-toast'
import { ReactComponent as MoonSvg } from '../../assets/svgs/dark_mode2.svg'
import { ReactComponent as CloudSvg } from '../../assets/svgs/cloud2.svg'
import { ReactComponent as SunSvg } from '../../assets/svgs/sun2.svg'

const WeatherWidget = ({location}) => {

    const [weatherData,setWeatherData]=useState(null);
    useEffect(()=>{
        if(location.length){
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=1b1d559e8ea2a585f5010637dba43f81&units=metric`)
            .then(response => {
                setWeatherData(response.data);
                console.log(response.data);
            }).catch(error=>{
                console.error("error: ",error);
                toast.error('Invalid Place');
            })
        }
    },[location]);

let timezoneOffset = 0;
if (weatherData) {
  timezoneOffset = weatherData.timezone * 1000;
}

let sunriseLocal = 0;
let sunsetLocal = 0;
if (weatherData && weatherData.sys) {
  sunriseLocal = (weatherData.sys.sunrise + timezoneOffset) * 1000;
  sunsetLocal = (weatherData.sys.sunset + timezoneOffset) * 1000;
}
   
const currentTimeUTC = Math.floor(new Date().getTime() / 1000);
const localTime = (currentTimeUTC + timezoneOffset)*1000; 
const isDaytime = weatherData?.sys ? (localTime > sunriseLocal && localTime < sunsetLocal) : false;
const cloudSize = weatherData?.clouds ? weatherData.clouds.all : 0;

    

    if(!weatherData){
        return (
            <div>
                Loading...
            </div>
        );
    }


  return (
    <div className="app">
      <div className="container">
        <div className="top">
            <div className='logos'>
              <div className='moon-container'>
                {isDaytime ? <SunSvg className='sun'/> :<MoonSvg className='moon'/>}
              </div>
              <div className='cloud-container'>
                {cloudSize>25 && <CloudSvg className='cloud'/>}
              </div>
            </div>
            <div className='loc-temp'>
              <div className="location">
                <div>{weatherData.name}</div>
                </div>
              <div className="temp">
                 <div>{Math.round(weatherData.main.temp)}°</div>
                </div>
          </div>
          </div>
          <div className='properties'>
          <div className="low-high">
            <div>Min-Max</div>
              <div>{Math.round(weatherData.main.temp_min)}°/{Math.round(weatherData.main.temp_max)}°</div>
            </div>
          <div className="feels">
              <div>Feels Like</div>
              <div>{Math.round(weatherData.main.feels_like)}°</div>
            </div>
            <div className="humidity">
              <div>Humidity</div>
              <div>{weatherData.main.humidity}</div>
            </div>
            </div>
      </div>
    </div>
  )
}

export default WeatherWidget
