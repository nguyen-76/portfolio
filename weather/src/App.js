import React, {useState, useEffect} from 'react';
import "./App.css";
const api = {
    key: "6b5b26bba33aada4aa941d7c12bab231",
    base: "https://api.openweathermap.org/data/2.5",
};

function App() {
const [searchInput, setSearchInput] = useState("");
const [searchCity, setSearchCity] = useState("");
const [weatherInfo, setWeatherInfo] = useState("");
const [loading, setLoading] = useState(false);
const [errorMes, setErrorMes] = useState(false);
useEffect(() => {
  const fetchWeatherData = async () => {
    if (!searchCity) return;
    setLoading(true);
    try {
      const url = `${api.base}/weather?q=${searchCity}&units=metric&appid=${api.key}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (res.ok) {
        setWeatherInfo(`${data.name}, ${data.sys.country} ${data.weather[0].description}, ${data.main.temp}Celsius`);
        setErrorMes("");
      } else {
        setErrorMes(data.message);
      }
    } catch (error) {
      setErrorMes(error.message);
    }
    setLoading(false);
  }
  fetchWeatherData();
}, [searchCity])
const handleSumbit = (e) => {
    e.preventDefault();
    setSearchCity(searchInput);
}
  return (
<>
    <form onSubmit={handleSumbit}>
        <input 
        type="text" 
        placeholder="Search city" 
        value={searchInput} 
        onChange={(e) => setSearchInput(e.target.value)} />
        <button>Search</button>
    </form>
    {loading ? (<div>Loading...</div>) : (
      <>
        {errorMes ? (<div style={{color: "red"}}>{errorMes}</div>) : (<div className="container">
          <h1>Today's weather</h1>
          <div>{weatherInfo}</div>
          </div>)}
      </>
    )}
</>
  )
}

export default App
