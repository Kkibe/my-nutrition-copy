import { useState } from 'react';
import './Navbar.css';
import { FaBars, FaHeart, FaSearch, FaShoppingCart, FaWineGlass } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    const [opened, setOpened] = useState(false)
    const [user, setUser] = useState(false);
    const handleToggle = () => {
        //document.querySelector('#menu-bars').classList.toggle('displayed');
        setOpened(!opened);
        document.querySelector('nav').classList.toggle('active');
    }

    const handleOpenSearch = () => {
        document.querySelector('#search-form').classList.toggle('active');
    }



    //another approach
    /*
        const [opened, setOpened] = useState(false)
    const nav = document.querySelector('nav');
    const [user, setUser] = useState(false);
    
    const handleToggle = async () => {
        nav.classList.toggle('active');
        setOpened(!opened);
    }
    document.body.onscroll = () => {
        if(nav.classList.contains('active')) {
            setOpened(nav.classList.remove('active'));
        }
    }
    const handleOpenSearch = () => {
        document.querySelector('#search-form').classList.toggle('active');
    }
  */
  
  return (
    <header> 
        <a href="/" className="logo"><FaWineGlass className='icon'/>LiquorsKE</a>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="shop" >Store</NavLink>
            <NavLink to="blogs">Blog</NavLink>
            <NavLink to="about-us" end> About Us</NavLink>
            <NavLink to="contact-us" end>Contact Us</NavLink>
        </nav>
        <div className="icons">
            <div className="icon" id='menu-bars' onClick={handleToggle}>
                {
                    opened ? <FaXmark /> : <FaBars />
                }
            </div>
            <div className="icon" id='search-icon'  onClick={handleOpenSearch}><FaSearch/></div>
            <a href='#' className='icon' id='bars'><span>3</span><FaShoppingCart /></a>
            {
                user && <a href='#' className='icon' id='favorite'><FaHeart /></a>
            }
        </div>
    </header>
  )
}
