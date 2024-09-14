
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Menubar from './components/menubar/menubar';
import Hero from './components/hero/Hero';
import Calendar from './components/calendar/Calendar';
  
function App() {

  return (
    <div>
      <BrowserRouter>
        <Menubar/>
        {/* <Routes>
          <Route path="/resorts" element={<Hero/>} />
          <Route path="/vendors" element={<Calendar />} />
          <Route path="/plan-your-wedding" element={<Hero />} />
      </Routes> */}
      </BrowserRouter>
      <Hero/>
      
    </div>
  );
}

export default App;
