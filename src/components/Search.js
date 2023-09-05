import { SearchContext } from "../contexts/SearchContext"
import { useContext } from 'react'
import '../styles/Search.css'

export default function Search() {
    const [, setSearchValue] = useContext(SearchContext)
    return <input
        onChange={e => {setSearchValue(e.target.value); }}
        placeholder='search'
        type='search'
    />
}