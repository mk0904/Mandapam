
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Menubar from './components/menubar/menubar';
import Hero from './components/hero/Hero';
import BasicDemo from './components/dropdown/Dropdown';
import SelectAutoWidth from './components/dropdown/Dropdown';


  
function App() {

  return (
    <div>
      <BrowserRouter>
        <Menubar/>
      </BrowserRouter>
      <Hero/>
      <BasicDemo/>
      
    </div>
  );
}

export default App;
