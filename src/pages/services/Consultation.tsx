import { Link } from "react-router-dom";

const Consultation = () => {
  return (
    <div className="service-detail">

      <div className="service-detail-icon">
        🩺
      </div>

      <div className="service-detail-content">

        <span>MEDICAL CONSULTATION</span>

        <h2>Doctor Consultation</h2>

        <p>
          Get professional medical advice from experienced
          doctors across different specialties. Our doctors
          provide personalized guidance based on your
          healthcare needs.
        </p>

        <div className="service-detail-grid">

          <div>
            <strong>01</strong>
            <h3>Choose a Doctor</h3>
            <p>
              Browse our doctors and select a specialist
              according to your needs.
            </p>
          </div>

          <div>
            <strong>02</strong>
            <h3>Select a Time</h3>
            <p>
              Choose an available appointment time that
              works for you.
            </p>
          </div>

          <div>
            <strong>03</strong>
            <h3>Meet Your Doctor</h3>
            <p>
              Attend your appointment and receive
              professional medical guidance.
            </p>
          </div>

        </div>

        <Link
          to="/doctors"
          className="primary-btn"
        >
          Find a Doctor
        </Link>

      </div>

    </div>
  );
};

export default Consultation;