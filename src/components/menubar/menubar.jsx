import { Calendar } from 'primereact/calendar';
import Hero from '../hero/Hero';
import './menubar.css';
import { NavLink , Routes, Route} from 'react-router-dom';

function Menubar() {
  return (
    <div className='br-header'>
      <nav className="navbar">
        <div className="navbar-left">
          <NavLink to="/" className="main-logo">mandapam</NavLink>
        </div>
        <div className="navbar-center">
          <ul>
            <li><NavLink to="/resorts">Resorts</NavLink></li>
            <li><NavLink to="/vendors">Vendors</NavLink></li>
            <li><NavLink to="/plan-your-wedding">Plan your wedding</NavLink></li>
            <li><NavLink to="/rivaaya">Rivaaya</NavLink></li>
          </ul>
        </div>
        <div className="navbar-right">
          <ul>
            <li><NavLink className='mandapamfc' to="/mfc">mandapam <span className='s1'>for <span className='s2'>corporates</span></span> </NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
          </ul>
        </div>
      </nav>
      
    </div>
  );
}

export default Menubar;