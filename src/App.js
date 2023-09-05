import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import Popup from './components/Popup';
import { Popup2Provider } from './contexts/PopupContext2';

function App() {
  return (
   <div className='all-app'>
    <Popup2Provider>
    <Main/>
    <Popup/>
    <Footer/>
    </Popup2Provider>
    </div>
  );
}
export default App;


