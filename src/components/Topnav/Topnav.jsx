import { useEffect, useState } from 'react';
import './Topnav.css';
import { FaBars, FaSearch, FaShoppingCart } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import { auth } from '../../../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Icon from '../../assets/react.svg';

export default function Topnav() {
    const [user, setUser] = useState(null);
    const [opened, setOpened] = useState(false)
    
    const handleToggle = () => {
      //document.querySelector('#menu-bars').classList.toggle('displayed');
      setOpened(!opened);
      document.querySelector('nav').classList.toggle('active');
  }

    useEffect(() => {
        document.onscroll = () => {
                document.querySelector('nav').classList.remove('active');
        }
        onAuthStateChanged(auth, (user) => {
            if (user) {
              return setUser(user);
            } else {
              return null;
            }
          });
    }, [])

    const handleOpenSearch = () => {
        document.querySelector('#search-form').classList.toggle('active');
    }
  
  return (
    <header>
        <a href="/" className="logo"><img src={Icon} alt=''/></a>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="shop" >Store</NavLink>
            <NavLink to="blogs">Blog</NavLink>
            <NavLink to="about-us" end> About Us</NavLink>
            <NavLink to="contact-us" end>Contact Us</NavLink>
        </nav>
        <div className="icons">
            <div className="icon" id='bars' onClick={handleToggle}>
                {
                    opened ? <FaXmark /> : <FaBars />
                }
            </div>
            <div className="icon" id='search-icon'  onClick={handleOpenSearch}><FaSearch/></div>
            <NavLink to='/cart' className='icon' title='cart'><span>3</span><FaShoppingCart /></NavLink>
        </div>
        {!user && <NavLink to="/get-started" className="btn">Get Started</NavLink>}
    </header>
  )
}
