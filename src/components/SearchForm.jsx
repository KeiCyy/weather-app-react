import { useState } from "react";

function SearchForm({ onSearch }) {
    const [city, setCity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!city.trim()) return;

        onSearch(city);
        setCity('');
    };

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Escriba una ciudad.."
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />

            <button type="submit">Buscar</button>

        </form>
    );
}

export default SearchForm;