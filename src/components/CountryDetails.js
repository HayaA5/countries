import Map from "./Map";
import '../styles/CountryDetails.css'

export default function CountryDetails(props) {
    const { name = {}, flags = {}, languages = {}, population, latlng } = props
    const [lat, lng]=latlng;
    return <div className='countryDetails'>
        <h2>{name.common}</h2>
        <Map lat={lat} lng={lng}/>
        <img src={flags.svg} />
        <h4>Population: </h4>
        <span>{population.toLocaleString()}</span>
        <h4>Languages:</h4>
        <ul>{Object.values(languages).map(l => <li key={l} >{l}</li>)}</ul>
    </div>
}