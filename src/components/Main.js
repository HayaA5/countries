import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../contexts/SearchContext";
import Header from "./Header";
import CountriesList from "./CountriesList";
import Loader from "./Loader";
import { useFetch } from "../hooks/useFetch";

export default function Main(){
    const [searchValue, setSearchValue]=useState();
    const { isLoading, data, error } = useFetch(
        'https://restcountries.com/v3.1/all'
      )
    
    const countries=data;
    if( isLoading) return   <Loader/>
    if(error) return <div>Something went wrong. Please try again later</div>

    const filteredList = countries?.filter(c =>
        c.name.common
            .toLowerCase()
            .startsWith(searchValue?searchValue.toLowerCase():'') //search[0].toLowerCase()
    )

    return(
    <div>
        <SearchContext.Provider value={[searchValue, setSearchValue]}>
            <Header countriesNum={filteredList.length} />
        </SearchContext.Provider>
        <CountriesList list={filteredList} />
    </div>)
}