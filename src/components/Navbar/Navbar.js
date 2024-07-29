import React, { useContext,useState } from 'react';
import assets from '../../assets/assets';
import './Navbar.css';
import { StoreContext } from '../../context/StoreContext';

const Navbar = () => {
  const { sidebarVisible, setSidebarVisible } = useContext(StoreContext);

  const [productsVisible,setProductsVisible]=useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const toggleProducts=()=>{
    setProductsVisible(!productsVisible)
  };

  return (
    <div className="navbar-container">

        <div className='navbar'>

            <div className="nav-logo">
            <img src={assets.logo1} alt="Logo" />
            </div>

            <div className="nav-elements">
            <ul>
                <li>Services</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>
            <img src={assets.menu} alt="Menu" onClick={toggleSidebar} />
            </div>


        </div>

        {(sidebarVisible)?
        <div className='sidebar'>
            <div className='sidebar-elements'>

              <a href='/' onClick={toggleSidebar}>Home</a>
              <hr />

              <a href='#products-div' onClick={toggleProducts}>Products</a>
              <hr/>
              {(productsVisible)?
              <div  className='products-div'id='products-div'>
                <a href='/product1'>S03-Lite</a>
                <hr/>
                <a href='/product2'>S03</a>
                <hr/>
                <a href='/product3'>S03-Max</a>
                <hr/>
                <a href='/compare'>Compare-all</a>
                <hr/>
              </div>:<></>}
              <a href='/prebook' onClick={toggleSidebar}>Prebook Now</a>
              <hr />
              <a href='/contact-us' onClick={toggleSidebar}>Contact Us</a>
              <hr />
              <a href='/about' onClick={toggleSidebar}>About Us</a>
              <hr />
              <a href='/prebook' onClick={toggleSidebar}>Rentals</a>
              <hr />
            </div>
            <img src={assets.close} onClick={toggleSidebar}  alt=""/>
        </div> :<></>}

    </div>
  );
};

export default Navbar;
