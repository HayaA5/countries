
import { useContext } from "react"
import CountryDetails from "./CountryDetails"
import '../styles/Country.css'
import { PopupContext2 } from "../contexts/PopupContext2"

export default function Country(props){
const {popup, setPopup } = useContext(PopupContext2)
const { flags, name, capital, region } = props
  
return (
<li onClick={() => setPopup(<CountryDetails {...props} />)}>
        <div
            className='flag'
            style={{ backgroundImage: `url(${flags.svg})` }}
        />
        <div>
            <div><strong>{name.common}</strong> - {capital}</div>
            <label>{region}</label>
        </div>
    </li>
)
}
