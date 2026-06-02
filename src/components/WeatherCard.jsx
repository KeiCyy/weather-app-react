
function WeatherCard({ weather }) {
    const iconCode = weather.weather[0].icon;
    const iconURL = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    const today = new Date().toLocaleDateString("es-Es", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    return (
        <div className="weather-card">
            <h2>
                {weather.name}, {weather.sys.country}
            </h2>
            <p className="data">{today}</p>

            <img src={iconURL} alt={weather.weather[0].description} />

            <h3>{Math.round(weather.main.temp)}°C</h3>

            <p className="description">{weather.weather[0].description}</p>

            <div>
                <p>Sensacion: {Math.round(weather.main.feels_like)}°C</p>
                <p>Viento: {weather.wind.speed}m/s</p>
                <p>Humedad: {weather.main.humidity}%</p>
                <p>Min: {Math.round(weather.main.temp_min)}°C</p>
                <p>Max: {Math.round(weather.main.temp_max)}°C</p>

            </div>

        </div>
    );
}

export default WeatherCard;