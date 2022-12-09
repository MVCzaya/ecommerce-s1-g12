import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpeg';
import { RxHamburgerMenu } from 'react-icons/rx';
import { BsCart3 } from 'react-icons/bs';
import '../css/navBar.css';
import { useSelector } from 'react-redux';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const cartLength = useSelector((state) => state.car.car.length);

  const btn = () => {
    setOpen(!open);
  };

  return (
    <div className="nav">
      <nav className="container-fluid d-flex justify-content-between align-items-center">
        <Link to={'/'}>
          <img src={logo} alt="logo" />
        </Link>

        <ul className="desktop">
          <li className="desktop-li">
            <Link to={'/'}>Inicio</Link>
          </li>
          <li className="desktop-li">
            <Link to={'/products'}>Productos</Link>
          </li>

          <div className="desktop-car">
            <Link className="car" to={'/car'}>
              <BsCart3 />
              <span className="car-num"> {cartLength}</span>
            </Link>
          </div>
        </ul>
        <div className="mobile" style={{ transform: open ? 'translateX(0)' : '' }}>
          <ul>
            <li className="mobile-li" onClick={btn}>
              <Link to={'/'}>Inicio</Link>
            </li>
            <li className="mobile-li" onClick={btn}>
              <Link to={'/products'}>Productos</Link>
            </li>
            <li className="mobile-li" onClick={btn}>
              <Link to={'/car'}>
                <BsCart3 />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <span className="hambur" onClick={btn}>
        <RxHamburgerMenu />
      </span>
    </div>
  );
};

export default NavBar;
