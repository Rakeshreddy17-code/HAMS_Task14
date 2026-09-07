import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="nav-container">
        <NavLink to="/" className="logo">
          <span className="logo-icon">✚</span>
          HAMS
        </NavLink>

        <nav className="nav-links">
          <NavLink to="/">Home</NavLink>

          <NavLink to="/about">About</NavLink>

          <NavLink to="/doctors">Doctors</NavLink>

          <NavLink to="/services">Services</NavLink>

          <NavLink to="/appointments">Appointments</NavLink>

          <NavLink to="/contact">Contact</NavLink>

          <NavLink to="/profile">Profile</NavLink>
        </nav>

        <NavLink to="/appointments" className="nav-button">
          Book Appointment
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;