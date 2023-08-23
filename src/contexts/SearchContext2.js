import React, { useState, createContext } from 'react'

export const SearchContext2 = createContext('')

export const Search2Provider = ({ children }) => {
  const [searchValue, setSearchValue] = useState('')
//   const toggleTheme = () => {
//     setTheme(theme === 'light' ? 'dark' : 'light')
//   }

  return (
    <SearchContext2.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </SearchContext2.Provider>
  )
}