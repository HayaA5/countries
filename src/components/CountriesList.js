import Country from "./Country"
import '../styles/CountriesList.css'
export default function CountriesList({list}) {
  
    list.sort((a, b) => a.name.common > b.name.common ? 1 : -1)

    return <ul>
        {list.map(c => <Country
            key={c.cca2}
            {...c}
        />)}
    </ul>
}