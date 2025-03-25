import { Outlet, Link } from "react-router-dom";
import style from './styles/Nav.module.css';
import login from './images/Login.png';
import logo from './images/saffron logo.png';
const Nav = () => {
  return (
    <>
      <nav className={style.Nav}>
        <div className={style.logo}>
          <Link className={style.logo1} to="/">
            <img src={logo} alt="Little Lemon" className={style.logoImage}></img>
          </Link>
        </div>
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
            <Link className={style.link} to="/Orderonline">Order Online</Link>
          </li>
        </ul>
        <div className={style.Login}>
          <Link to="/Login">
            <img src={login} alt="Login" className={style.loginIcon}></img>
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  )
};

export default Nav;