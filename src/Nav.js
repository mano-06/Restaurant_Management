import { Outlet, Link } from "react-router-dom";
import './Nav.css';
import title from './images/Yellow_title.png';
import login from './images/Login.png';
const Nav = () => {
  return (
    <>
      <nav className="Nav">
        <div className="logo">
        <Link className="logo1" to="/"><img src={title} alt="Little Lemon"></img></Link>
        </div>
        <ul>
            <li>
                <Link className="link" to="/">Home</Link>
            </li>
            <li>
                <Link className="link" to="/About">About</Link>
            </li>
            <li>
                <Link className="link" to="/Menu">Menu</Link>
            </li>
            <li>
                <Link className="link" to="/Reservation">Reservation</Link>
            </li>
            <li>
                <Link className="link" to="/Orderonline">Order Online</Link>
            </li>
        </ul>
        <div className="Login">
            <Link className="" to="/Login"><img src={login} alt="Little Lemon"></img></Link>
        </div>
      </nav>

      <Outlet />
    </>
  )
};

export default Nav;