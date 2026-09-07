import { Link } from "react-router-dom";
import { services } from "../data/services";

const Home = () => {
  return (
    <div className="home-page">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">

          <div className="hero-content">
            <span className="hero-badge">
              🏥 Trusted Healthcare Platform
            </span>

            <h1>
              Your Health,
              <span> Our Priority</span>
            </h1>

            <p>
              Find experienced doctors, explore healthcare services and
              schedule your appointment quickly and conveniently.
            </p>

            <div className="hero-buttons">
              <Link to="/doctors" className="primary-btn">
                Find a Doctor
              </Link>

              <Link to="/appointments" className="secondary-btn">
                Book Appointment
              </Link>
            </div>

            <div className="hero-features">
              <div>
                <strong>24/7</strong>
                <small>Support</small>
              </div>

              <div>
                <strong>50+</strong>
                <small>Doctors</small>
              </div>

              <div>
                <strong>10K+</strong>
                <small>Patients</small>
              </div>
            </div>
          </div>

          <div className="hero-image">
            <div className="doctor-illustration">
              <div className="doctor-icon">👨‍⚕️</div>

              <div className="floating-card card-one">
                ❤️
                <div>
                  <strong>98%</strong>
                  <span>Patient Satisfaction</span>
                </div>
              </div>

              <div className="floating-card card-two">
                ⭐
                <div>
                  <strong>4.9/5</strong>
                  <span>Average Rating</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Search Section */}
      <section className="search-section">
        <div className="search-box">

          <div>
            <span>🔎</span>
            <div>
              <small>Search</small>
              <strong>Doctor or Specialty</strong>
            </div>
          </div>

          <div>
            <span>📍</span>
            <div>
              <small>Location</small>
              <strong>Hyderabad</strong>
            </div>
          </div>

          <Link to="/doctors" className="search-button">
            Search Doctors
          </Link>

        </div>
      </section>

      {/* Statistics */}
      <section className="stats-section">
        <div className="stats-container">

          <div className="stat-card">
            <span>👨‍⚕️</span>
            <div>
              <h2>50+</h2>
              <p>Expert Doctors</p>
            </div>
          </div>

          <div className="stat-card">
            <span>😊</span>
            <div>
              <h2>10K+</h2>
              <p>Happy Patients</p>
            </div>
          </div>

          <div className="stat-card">
            <span>🏥</span>
            <div>
              <h2>15+</h2>
              <p>Departments</p>
            </div>
          </div>

          <div className="stat-card">
            <span>⭐</span>
            <div>
              <h2>4.9</h2>
              <p>Patient Rating</p>
            </div>
          </div>

        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="section-heading">
          <span>OUR SERVICES</span>
          <h2>Healthcare Made Simple</h2>
          <p>
            Comprehensive healthcare services designed around your needs.
          </p>
        </div>

        <div className="service-grid">
          {services.slice(0, 3).map((service) => (
            <div className="home-service-card" key={service.id}>
              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <Link to="/services">
                Learn More →
              </Link>
            </div>
          ))}
        </div>

        <div className="center-button">
          <Link to="/services" className="outline-btn">
            View All Services
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-section">
        <div className="why-container">

          <div className="why-image">
            <div className="why-icon">
              🏥
            </div>

            <div className="experience-card">
              <strong>15+</strong>
              <span>Years of Excellence</span>
            </div>
          </div>

          <div className="why-content">

            <span className="section-label">
              WHY CHOOSE HAMS
            </span>

            <h2>
              Healthcare You Can
              <span> Trust</span>
            </h2>

            <p>
              HAMS connects patients with trusted healthcare professionals
              and makes appointment management simple and convenient.
            </p>

            <div className="why-list">

              <div>
                <span>✓</span>
                <div>
                  <h3>Experienced Doctors</h3>
                  <p>
                    Consult highly qualified and experienced medical
                    professionals.
                  </p>
                </div>
              </div>

              <div>
                <span>✓</span>
                <div>
                  <h3>Easy Appointment Booking</h3>
                  <p>
                    Book and manage your appointments with just a few clicks.
                  </p>
                </div>
              </div>

              <div>
                <span>✓</span>
                <div>
                  <h3>Patient-Focused Care</h3>
                  <p>
                    Your comfort, safety and satisfaction are our priority.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div>
          <h2>Need Medical Assistance?</h2>

          <p>
            Find the right doctor and book your appointment today.
          </p>

          <Link to="/doctors" className="cta-button">
            Find a Doctor →
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;