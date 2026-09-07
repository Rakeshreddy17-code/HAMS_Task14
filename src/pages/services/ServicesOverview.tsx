import { Link } from "react-router-dom";
import { services } from "../../data/services";

const ServicesOverview = () => {
  return (
    <div>

      <div className="services-title">
        <span>WHAT WE OFFER</span>

        <h2>Our Healthcare Services</h2>

        <p>
          Choose from a wide range of healthcare services
          provided by experienced professionals.
        </p>
      </div>

      <div className="services-grid">

        {services.map((service) => (
          <div className="service-card" key={service.id}>

            <div className="service-icon">
              {service.icon}
            </div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

            <Link
              to={
                service.id === 1
                  ? "/services/consultation"
                  : service.id === 2
                  ? "/services/laboratory"
                  : service.id === 3
                  ? "/services/pharmacy"
                  : "/services"
              }
              className="service-link"
            >
              Learn More →
            </Link>

          </div>
        ))}

      </div>

      {/* Why Choose HAMS */}
      <section className="service-features">

        <div>
          <span>✓</span>
          <h3>Trusted Doctors</h3>
          <p>
            Consult qualified and experienced healthcare
            professionals.
          </p>
        </div>

        <div>
          <span>⚡</span>
          <h3>Easy Appointments</h3>
          <p>
            Book appointments quickly through our simple
            online system.
          </p>
        </div>

        <div>
          <span>🔒</span>
          <h3>Patient First</h3>
          <p>
            Your comfort and healthcare needs are always
            our priority.
          </p>
        </div>

      </section>

    </div>
  );
};

export default ServicesOverview;