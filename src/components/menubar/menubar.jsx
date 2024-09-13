import './menubar.css';
import { NavLink } from 'react-router-dom';

function Menubar() {
  return (
    <div className='br-header'>
      <nav className="navbar">
        <div className="navbar-left">
          <a href="/" className="main-logo">mandapam</a>
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
            <li><a className='mandapamfc' href="/mfc">mandapam <span className='s1'>for <span className='s2'>corporates</span></span> </a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Menubar;