import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import '../navbar.css'
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { SlBasketLoaded } from "react-icons/sl";


const Navbar = () => {
    const[active,setActive]=useState('nav-menu')
    const navToggle=()=>{
        active==='nav-menu'? setActive('nav-menu nav_active'): setActive('nav-menu')
    }

    
  return (
    <nav className='nav'>
        <h1 className='logo'>LOGO</h1>
        <ul className={active}>
            <li className='nav-item'>
                <Link to="/" className='nav-link'>Home</Link></li>
            <li className='nav-item'>
                <Link to="/product" className='nav-link'>Product</Link></li>
            <li className='nav-item'>
                <a href="#" className='nav-link'>Solution</a></li>
            <li className='nav-item'>
                <a href="#" className='nav-link'>About</a></li>
            <li className='nav-item'><Link to="/contact" className='nav-link'>Contact</Link></li>
        </ul>
        <div className="Icon">
            <ul className='icon-list'>
            <li className='nav-icon'><CiUser /></li>
            <li className='nav-icon'><CiSearch /></li>
            <li className='nav-icon'><SlBasketLoaded /></li>
            </ul>
            </div>

        <div onClick={navToggle} className="nav_toggler">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>
    
    </nav>

  )
}

export default Navbar




