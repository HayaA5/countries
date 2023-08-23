import React, { useState, createContext } from 'react'

export const PopupContext2 = createContext('')

export const Popup2Provider = ({ children }) => {
  const [popup, setPopup] = useState('')
//   const toggleTheme = () => {
//     setTheme(theme === 'light' ? 'dark' : 'light')
//   }

  return (
    <PopupContext2.Provider value={{ popup, setPopup }}>
      {children}
    </PopupContext2.Provider>
  )
}