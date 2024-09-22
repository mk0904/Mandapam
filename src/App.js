
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Menubar from './components/menubar/menubar';
import Hero from './components/hero/Hero';
import PlanYourWedding from './components/planYourWedding/PlanYourWedding';
import VendorsPage from './components/vendorsPage/VendorsPage';
import VendorCategoryPage from './components/vendorCategoryPage/VendorCategoryPage';
import Home from './components/home/Home';
  
function App() {

  return (
    <div>
      <BrowserRouter>
        <Menubar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/resorts" element={<Hero/>} />
          <Route path="/vendors" element={<VendorsPage/>} />
          <Route path="/plan-your-wedding" element={<PlanYourWedding/>} />
          <Route path="/vendors/:category" element={<VendorCategoryPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
