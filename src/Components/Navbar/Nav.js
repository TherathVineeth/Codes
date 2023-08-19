import React from 'react'
import { Link } from 'react-router-dom';
import './Nav.css';
import Homepg from '../Homepage/Home';
import MenuPage from '../Menu/Menu';

function Nav() {
  return (
    <nav className='main-nav'>
    <div className='logo'>
        <h2>
            <span>T</span>atse
            <span>T</span>itans
        </h2>
    </div>

    <div className='menu-link'>
        <ul>
            <li>
               <Link to="/home">
               <a href= {<Homepg/>}>Home</a>
               </Link>
            </li>
            <li>
                <Link to="/menu">
                <a href={<MenuPage/>}>Menu</a>
                </Link>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
        </ul>
    </div>

    <div className='auth-buttons'>

   
   <Link  to="/login">
   <button className='auth-button' >Sign In</button>
   </Link>
   <Link to="/signup">
   <button className='auth-button'>Sign Up</button>
   </Link>
</div>
</nav>
  )
}

export default Nav