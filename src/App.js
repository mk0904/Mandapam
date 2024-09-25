import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Menubar from "./components/menubar/menubar";
import Hero from "./components/hero/Hero";
import PlanYourWedding from "./components/planYourWedding/PlanYourWedding";
import VendorsPage from "./components/vendorsPage/VendorsPage";
import VendorCategoryPage from "./components/vendorCategoryPage/VendorCategoryPage";
import Home from "./components/home/Home";
import ResortResults from "./components/resortResults/resortResults";
import DetailedCard from "./components/detailedCard/DetailedCard";
import Rivaaya from "./components/rivaaya/Rivaaya";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Menubar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resorts" element={<Hero />} />
          <Route path="/resorts/results" element={<ResortResults />} />
          <Route path="/vendors" element={<VendorsPage />} />
          <Route path="/plan-your-wedding" element={<PlanYourWedding />} />
          <Route path="/vendors/:category" element={<VendorCategoryPage />} />
          <Route path="/vendors/:category/:id" element={<DetailedCard />} />
          <Route path="/resorts/:id" element={<DetailedCard />} />
          <Route path="/rivaaya" element={<Rivaaya />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer 
                position="bottom-right" 
                autoClose={3000} 
                hideProgressBar={false} 
                toastClassName="toast-custom" // Apply your custom class here
            />
    </div>
  );
}

export default App;
