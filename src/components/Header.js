//import { SearchContext } from "../contexts/SearchContext";
//import { useContext } from "react";
// export default function Header(props){

//     const {countriesNum}=props;
//     const [searchValue, setSearchValue]=useContext(SearchContext);
//  //const x=useContext(SearchContext)
//  debugger;
//     //console.log('search value: '+x)
//     return(
//         <div>
//             countries({countriesNum})
//             <input type="text" placeholder="search" onChange={(e)=>{setSearchValue(e.currentTarget.value); console.log(searchValue);}}/>
//         </div>
//     );
// }

import Search from "./Search";
import '../styles/Header.css'
export default function Header(props) {
    return <header>
        <h1 className=".lineUp">Countries <span>({props.countriesNum})</span></h1>
        <Search />
    </header>
}