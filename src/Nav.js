  import { Outlet, Link } from "react-router-dom";
  import { useState } from 'react';
  import style from './styles/Nav.module.css';
  import login from './images/Login.png';
  import logo from './images/saffron logo.png';
  import hamIcon from './images/hamburger.png';
  const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
      <div>
        <nav className={`${style.Nav} ${isMenuOpen ? style.open : ''}`}>
          <div className={style.logo}>
            <Link className={style.logo1} to="/">
              <img src={logo} alt="Saffron" className={style.logoImage}></img>
            </Link>
          </div>
          <div className={`${style.hamburgerMenu} ${isMenuOpen ? style.open : ''}`} onClick={toggleMenu} ><img src={hamIcon} alt="Nav"/></div>
          <ul className={style.navList}>
            <li className={style.navItem}>
              <Link className={style.link} to="/">Home</Link>
            </li>
            <li className={style.navItem}>
              <Link className={style.link} to="/About">About</Link>
            </li>
            <li className={style.navItem}>
              <Link className={style.link} to="/Menu">Menu</Link>
            </li>
            <li className={style.navItem}>
              <Link className={style.link} to="/Reservation">Reservation</Link>
            </li>
            <li className={style.navItem}>
              <Link className={style.link} to="/ContactUs">Contact Us</Link>
            </li>
          </ul>
          <div className={style.Login}>
            <Link to="/Login">
              <img src={login} alt="Login" className={style.loginIcon}></img>
            </Link>
          </div>
        </nav>
        <Outlet />
      </div>
    )
  };

  export default Nav;