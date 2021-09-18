import './App.css';
import { useState, useEffect } from 'react';


function App() {

const api={
  base: 'https://api.openweathermap.org/data/2.5/',
  key:'eac01b9fc5f236d892224849fa3a1dd3'
}

const [query,setQuery]= useState('')
const [weather, setWeather]= useState({})


// useEffect(()=>{
// if(weather.main.temp <= 13){
// alert('hello')
// }
// },[weather])

const search = e =>{
  if (e.key === "Enter"){
    fetch(`${api.base}weather?q=${query}&unins=metric&APPID=${api.key}`)
    .then(res=> res.json())
    .then(result => {
      setQuery('')
      setWeather(result)
    })
    
  }
}

  return (
    <div className="App">

        <div className="search">
        <input type="text" className='search__input' placeholder='Weather in...' onChange={(e)=>setQuery(e.target.value)} value={query}
        onKeyPress={search}/>
      </div>
{(typeof weather.main !='undefined')? (
  <div>
      <div className="location-box">
        <div className="location">{weather.name}, {weather.sys.country}</div>
        <div className="date">{new Date().toDateString()}</div>
      </div>

      <div className="weather-box">
        <div className="temp">{Math.round((weather.main.temp)-273.15)}°C</div>
        <div className="weather">{weather.weather[0].main}</div>
      </div>
      </div>
 ):('')}
    </div>
  );
}

export default App;
