
import { useContext } from "react"
import { PopupContext } from "../contexts/PopupContext"
import CountryDetails from "./CountryDetails"
import '../styles/Country.css'
import { PopupContext2 } from "../contexts/PopupContext2"
export default function Country(props){
   //const {name, continents, map, latlng }=props;
  
//    const [popup, setPopup] = useContext(PopupContext)
const {popup, setPopup } = useContext(PopupContext2)
   const { flags, name, capital, region } = props
   
debugger;

{/* <MapWithAMarker
  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCz6I3rqYYn5M38If1iWW-p38Rc_ivtwVo&v=3.exp&libraries=geometry,drawing,places"
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `400px` }} />}
  mapElement={<div style={{ height: `100%` }} />}
/> */}

return <li onClick={() => setPopup(<CountryDetails {...props} />)}>
        <div
            className='flag'
            style={{ backgroundImage: `url(${flags.svg})` }}
        />
        <div>
            <div><strong>{name.common}</strong> - {capital}</div>
            <label>{region}</label>
        </div>
    </li>


//     return(<div>
// {name.common}-{continents[0]}
// {/* <img src={map} width='100px' height='50px'/> */}


//     </div>)
}



