import Search from "./Search";
import '../styles/Header.css'
export default function Header(props) {
    return <header className="header-countries">
        <h1 className=".lineUp">Countries <span>({props.countriesNum})</span></h1>
        <Search />
    </header>
}