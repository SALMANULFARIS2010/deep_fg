

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Link, Routes, useLocation } from 'react-router-dom';
import './App.css';

// Navbar Component
const Navbar = () => (
  <nav className="navbar">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/menu">Menu</Link></li>
      <li><Link to="/reservation">Make A Reservation</Link></li>
      <li><Link to="/contact">Contact</Link></li> {/* Adjusted for section navigation */}
    </ul>
  </nav>
);

const Home = ({ menuData }) => (
  <div>
    <section id="drinks">
      <h2>Drinks</h2>
      <ul>
        {menuData.drinks.map((drink, index) => (
          <li key={index}>
            <div className="menu-item">
              <span className="menu-item-name">{drink.name}</span>
              <span className="menu-item-dots"></span>
              <span className="menu-item-price">${drink.price}</span>
            </div>
            <p className="menu-item-description">{drink.description}</p>
          </li>
        ))}
      </ul>
    </section>
    <section id="brunch">
      <h2>Brunch Cocktails</h2>
      <ul>
        {menuData.brunch.map((brunchItem, index) => (
          <li key={index}>
            <div className="menu-item">
              <span className="menu-item-name">{brunchItem.name}</span>
              <span className="menu-item-dots"></span>
              <span className="menu-item-price">${brunchItem.price}</span>
            </div>
            <p className="menu-item-description">{brunchItem.description}</p>
          </li>
        ))}
      </ul>
    </section>
    <section id="hookah">
      <h2>Hookah Flavors</h2>
      <ul>
        {menuData.hookah.map((flavor, index) => (
          <li key={index} className="hookah-item">{flavor}</li>
        ))}
      </ul>
    </section>
    {/* Conditionally render the Order Online button */}
    {/* <button className="order-button">Order Online</button> */}
  </div>
);

const Drinks = ({ menuData }) => (
  <section id="drinks">
    <h2>Drinks</h2>
    <ul>
      {menuData.drinks.map((drink, index) => (
        <li key={index}>
          <div className="menu-item">
            <span className="menu-item-name">{drink.name}</span>
            <span className="menu-item-dots"></span>
            <span className="menu-item-price">${drink.price}</span>
          </div>
          <p className="menu-item-description">{drink.description}</p>
        </li>
      ))}
    </ul>
  </section>
);

const Brunch = ({ menuData }) => (
  <section id="brunch">
    <h2>Brunch Cocktails</h2>
    <ul>
      {menuData.brunch.map((brunchItem, index) => (
        <li key={index}>
          <div className="menu-item">
            <span className="menu-item-name">{brunchItem.name}</span>
            <span className="menu-item-dots"></span>
            <span className="menu-item-price">${brunchItem.price}</span>
          </div>
          <p className="menu-item-description">{brunchItem.description}</p>
        </li>
      ))}
    </ul>
  </section>
);

const Hookah = ({ menuData }) => (
  <section id="hookah">
    <h2>Hookah Flavors</h2>
    <ul>
      {menuData.hookah.map((flavor, index) => (
        <li key={index} className="hookah-item">{flavor}</li>
      ))}
    </ul>
  </section>
);

const Reservation = () => (
  <div className='ac'>
     
    <h2>Make A Reservation</h2>
    <p>Details about how to make a reservation will go here.</p>

  </div>
);

const App = () => {
  const [menuData, setMenuData] = useState({ drinks: [], brunch: [], hookah: [] });
  const location = useLocation(); // Get current location

  useEffect(() => {
    axios.get('https://naveen-81.tl-workspace.techwarelab.com/menu')
      .then(response => setMenuData(response.data))
      .catch(error => console.error('Error fetching menu data:', error));
  }, []);

  // Inline Footer Function
  const Footer = () => (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p>Connect with us: +1 123-456-7890</p>
        </div>
        <div className="footer-center">
          <h3 style={{ color: 'blue', margin: '0' }}>Deep Net Soft</h3>
          <img 
            src="https://media.licdn.com/dms/image/C510BAQH0-mSUg_0e6A/company-logo_200_200/0/1630616737945/deepnetsoft_logo?e=1730332800&v=beta&t=rLjaDRYVvT1JOgyK-7hkv8aqB_qtVL_t8Yb2WpubJBI" 
            alt="Deep Net Soft" 
            className="footer-logo" 
          />
          <a href="https://www.deepnetsoft.com/" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://static.vecteezy.com/system/resources/previews/003/731/316/original/web-icon-line-on-white-background-image-for-web-presentation-logo-icon-symbol-free-vector.jpg" 
              alt="Instagram" 
              className="footer-logo" 
            />
          </a>
          <a href="https://www.youtube.com/your-channel" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://www.pinclipart.com/picdir/big/54-541778_powertap-p1s-pedal-video-youtube-logo-black-transparent.png" 
              alt="YouTube" 
              className="footer-logo" 
            />
          </a>
        </div>
        <div className="footer-right">
          <p>Find us: 123 Awesome St, Atlanta, GA 12345, USA</p>
        </div>
      </div>
    </footer>
  );
  

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-content" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img 
            src="https://media.licdn.com/dms/image/C510BAQH0-mSUg_0e6A/company-logo_200_200/0/1630616737945/deepnetsoft_logo?e=1730332800&v=beta&t=rLjaDRYVvT1JOgyK-7hkv8aqB_qtVL_t8Yb2WpubJBI" 
            alt="Deep Net Soft" 
            className="logo" 
            style={{ width: '50px', height: '50px' }} 
          />
          <h3 style={{ color: 'blue', margin: '0' }}>Deep Net Soft</h3>
        </div>
        <Navbar />
      </header>
      <div className="banner">
        <h1>Menu</h1>
        <p>Please take a look at our menu featuring food, drinks, and brunch. If you'd like to place an order, use the "Order Online" button located below the menu.</p>
        <div className="menu-buttons">
          <Link to="/drinks"><button>Drinks</button></Link>
          <Link to="/brunch"><button>Brunch</button></Link>
          <Link to="/hookah"><button>Hookah</button></Link>
        </div>
      </div>
      <main>
        <Routes>
          <Route path="/" element={<Home menuData={menuData} />} />
          <Route path="/drinks" element={<Drinks menuData={menuData} />} />
          <Route path="/brunch" element={<Brunch menuData={menuData} />} />
          <Route path="/hookah" element={<Hookah menuData={menuData} />} />
          <Route path="/reservation" element={<Reservation />} />
        </Routes>
      </main>
      {/* {location.pathname === "/" && <button className="order-button">Order Online</button>} */}
      <Footer /> {/* Render the inline Footer component */}
    </div>
  );
}

export default App;
