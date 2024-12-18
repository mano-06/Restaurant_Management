import { Outlet, Link } from "react-router-dom";
import './Nav.css';
const Nav = () => {
  return (
    <>
      <nav>
        <ul className="Nav">
            <li className="image">
                <img src=".\images\Yellow_title.png" alt="img"></img>
            </li>
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
            <li>
                <Link className="link" to="/Login">Login</Link>
            </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Nav;