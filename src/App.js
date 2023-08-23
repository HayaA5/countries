
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Popup from './components/Popup';
import { PopupContext } from './contexts/PopupContext';
import { useState } from 'react';
import { SearchContext } from './contexts/SearchContext';
import Example from './components/Example';
import { Popup2Provider } from './contexts/PopupContext2';

function App() {
  const value=useState();

  return (
   <div className='all-app'>
    
    {/* <PopupContext.Provider value={value}> */}
    <Popup2Provider>
    <Main/>
 
    <Popup/>
    <Footer/>
    </Popup2Provider>
    {/* </PopupContext.Provider> */}
    </div>
  );
}

export default App;


