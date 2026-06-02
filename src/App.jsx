import { useEffect, useState } from 'react'
import './App.css'
import SearchForm from './components/SearchForm';
import WeatherCard from './components/WeatherCard';
import SearchHistory from './components/SearchHistory';

function App() {

  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState(() => {
    const savedHistory = localStorage.getItem('weatherHistory');
    return savedHistory ? JSON.parse(savedHistory) : [];
  });

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    localStorage.setItem('weatherHistory', JSON.stringify(history));
  }, [history]);

  const handleSearch = async (city) => {
    setError("");
    setWeather(null);
    setLoading(true);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=es`
      );

      if (!response.ok) {
        throw new Error('Ciudad no encontrada');
      }

      const data = await response.json();
      setWeather(data);


      setHistory((prevHistory) => {
        const updatedHistory = [

          city,
          ...prevHistory.filter((item) => item.toLowerCase() !== city.toLowerCase()),
        ];

        return updatedHistory.slice(0, 5);
      });


      console.log(data);

    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };


  return (
    <main className='app-container'>
      <section className='app-card'>

        <h1>Weather App</h1>
        <p className='subtitle'>Consulta el clima actual de cualquier ciudad</p>

        <SearchForm onSearch={handleSearch} />

        <SearchHistory history={history} onSelectCity={handleSearch} />

        {loading && <p className='loading'>Cargando clima...</p>}

        {error && <p className='error'>{error}</p>}

        {weather && <WeatherCard weather={weather} />}

      </section>


    </main>
  )
}

export default App
