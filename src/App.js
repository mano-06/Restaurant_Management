import './styles/App.css';
import Nav from './Nav';
import Home from './Home.js';
import Login from './Login.js';
import Contactus from './Contactus.js';
import About from './About.js';
import Menu from './Menu.js';
import BookingForm from './BookingForm.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Menu" element={<Menu />} />
          <Route path="ContactUs" element={<Contactus />} />
          <Route path="Reservation" element={<BookingForm />} />
          <Route path="Login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;