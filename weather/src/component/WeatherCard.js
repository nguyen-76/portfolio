import React from 'react'

function WeatherCard(weatherInfo) {
  return (
    <div className="container">
      <div>{weatherInfo.name}, {weatherInfo.sys.country}</div>
      <div>{weatherInfo.main.temp}</div>
    </div>
  )
}

export default WeatherCard
