import { NavLink, Outlet } from "react-router-dom";

const AppointmentsLayout = () => {
  return (
    <div className="appointments-layout">
      <nav className="services-navigation">
        <div className="services-nav-container">
          <NavLink
            to="/appointments"
            end
            className={({ isActive }) => (isActive ? "service-nav active" : "service-nav")}
          >
            📅 Book Appointment
          </NavLink>
          <NavLink
            to="/appointments/my"
            className={({ isActive }) => (isActive ? "service-nav active" : "service-nav")}
          >
            📋 My Appointments
          </NavLink>
        </div>
      </nav>

      <main className="services-content">
        <Outlet />
      </main>
    </div>
  );
};

export default AppointmentsLayout;