import "./Country.css"
const Country = ({ country, handleVisited}) => {
    const { name, capital, flags, continents, currencies,languages } = country;

    return (
        <div className="card">
            <img src={flags?.png} alt={flags?.alt} />
            <h2>Country: {name?.common}</h2>
            <h3>Capital: {capital? capital.join(', '): 'Not Found'}</h3>
            <p>Continents: {continents}</p>
            <p>Currencies: {currencies? Object.keys(currencies).join(', '):'Not Found'}</p>
            <p>Languages: {languages ? Object.values(languages).join(', ') : 'Not Found'}</p>
            <button onClick={()=>handleVisited(country)} className="btn">Mark Visited</button>
        </div>
    );
};

export default Country;