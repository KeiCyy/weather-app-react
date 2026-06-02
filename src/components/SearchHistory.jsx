
function SearchHistory({ history, onSelectCity }) {
    if (history.length === 0) return null;

    return (
        <div className="search-history">
            <h3>Ultimas Busquedas</h3>

            <div className="history-list">
                {history.map((city) => (
                    <button key={city} onClick={() => onSelectCity(city)}>
                        {city}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default SearchHistory;