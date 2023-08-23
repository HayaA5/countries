import { useContext, useEffect, useState } from "react";
import Country from "./Country";
import { SearchContext } from "../contexts/SearchContext";
import Header from "./Header";
import CountriesList from "./CountriesList";
import Loader from "./Loader";
import { useFetch } from "../hooks/useFetch";
import { Search2Provider } from "../contexts/SearchContext2";

export default function Main(){
  //  const [countries, setCountries]=useState();
  //  const  [filteredList, setFilteredList]=useState();
    const [searchValue, setSearchValue]=useState();
//const search=useState();
    // function getCountries(){
    //     fetch('https://restcountries.com/v3.1/all').then(res=>res.json())
    //     .then(res=>{setCountries(res); console.log(res)})
    // }
    //useEffect(getCountries,[]);
    
    const { data, isLoading, error } = useFetch(
        'https://restcountries.com/v3.1/all'
      )
       // setCountries(data);
       const countries=data;
    // useEffect(filterCountries, [searchValue]);
    if( isLoading) return   <Loader/>
    console.log(countries);
   debugger;
    

    // function filteredList(){
    //     return countries.filter(country=>country.name.common.toLowerCase().startsWith(searchValue.toLowerCase()))
    //    // setFilteredList(res)
    //  }
//console.log('serachValue'+searchValue);

    const filteredList = countries?.filter(c =>
        c.name.common
            .toLowerCase()
            .startsWith(searchValue?searchValue.toLowerCase():'') //search[0].toLowerCase()
    )

    //debugger;
    return(
    <div>

<SearchContext.Provider value={[searchValue, setSearchValue]}>
{/* <Search2Provider> */}
            <Header countriesNum={filteredList.length} />
            {/* </Search2Provider> */}
            {/* <Header/> */}
        </SearchContext.Provider>
        <CountriesList list={filteredList} />

        {/* {countries && countries.map(country=><Country key={country.cca3} name={country.name.common} continents={country.continents} flags={country.flags}/>)} */}
    </div>)
}