import '../styles/CountryDetails.css'
import SimpleMap from "./SimpleMap";

export default function CountryDetails(props) {
    const { name = {}, flags = {}, languages = {}, population, latlng } = props
    const [lat, lng]=latlng;
    return <div className='countryDetails'>
        <h2>{name.common}</h2>
        <SimpleMap lat={lat} lng={lng}/>
        <div className="flagContainer">
        <img src={flags.svg} />
        </div>
        <h4>Population: </h4>
        <span>{population.toLocaleString()}</span>
        <h4>Languages:</h4>
        <div className="languagesContainer">
        <ul>{Object.values(languages).map(l => <li key={l} >{l}</li>)}</ul>
        </div>
    </div>
}