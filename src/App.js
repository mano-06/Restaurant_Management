import Nav from './Nav';
import Home from './Home.js';
import Login from './Login.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="About" element={<Login />} />
          <Route path="Menu" element={<Login />} />
          <Route path="Orderonline" element={<Login />} />
          <Route path="Reservation" element={<Login />} />
          <Route path="Login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
