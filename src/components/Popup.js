import '../styles/Popup.css'
import { PopupContext } from '../contexts/PopupContext'
import { useContext } from 'react'
import { PopupContext2 } from '../contexts/PopupContext2'

export default function Popup() {

    //const [popup, setPopup] = useContext(PopupContext)
    const {popup, setPopup} = useContext(PopupContext2)
    return <div
        className={`overlay ${popup ? '' : 'close'}`}
        onClick={(e) =>e.target === e.currentTarget?setPopup(''):null}>
        <div className='popup'>{popup}</div>
    </div>
}