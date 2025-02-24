import { Outlet, Link } from "react-router-dom";
import './Nav.css';
const Nav = () => {
  return (
    <>
      <nav className="Nav">
        <div className="logo">
            <img src="src\images\Yellow_title.png" alt="Little Lemon"></img>
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
            <Link className="link" to="/Login"><img src="src\images\Login.png"/></Link>
        </div>
      </nav>

      <Outlet />
    </>
  )
};

export default Nav;