import { NavLink, Outlet } from "react-router-dom";

const ServicesLayout = () => {
  return (
    <div className="services-page">

      {/* Header */}
      <section className="services-header">
        <div>
          <span>OUR HEALTHCARE SERVICES</span>

          <h1>Quality Healthcare Under One Roof</h1>

          <p>
            Explore our healthcare services designed to make
            your medical journey simple, convenient and reliable.
          </p>
        </div>
      </section>

      {/* Nested Navigation */}
      <section className="services-navigation">
        <div className="services-nav-container">

          <NavLink
            to="/services"
            end
            className={({ isActive }) =>
              isActive ? "service-nav active" : "service-nav"
            }
          >
            🏥 Overview
          </NavLink>

          <NavLink
            to="/services/consultation"
            className={({ isActive }) =>
              isActive ? "service-nav active" : "service-nav"
            }
          >
            🩺 Doctor Consultation
          </NavLink>

          <NavLink
            to="/services/laboratory"
            className={({ isActive }) =>
              isActive ? "service-nav active" : "service-nav"
            }
          >
            🧪 Laboratory
          </NavLink>

          <NavLink
            to="/services/pharmacy"
            className={({ isActive }) =>
              isActive ? "service-nav active" : "service-nav"
            }
          >
            💊 Pharmacy
          </NavLink>

        </div>
      </section>

      {/* Nested Page Content */}
      <main className="services-content">
        <Outlet />
      </main>

    </div>
  );
};

export default ServicesLayout;