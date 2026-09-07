import { Link } from "react-router-dom";

const Pharmacy = () => {
  const pharmacyFeatures = [
    "Prescription medicine support",
    "Medicine availability assistance",
    "Healthcare product guidance",
    "Easy and convenient service",
  ];

  return (
    <div className="service-detail">

      <div className="service-detail-icon">
        💊
      </div>

      <div className="service-detail-content">

        <span>MEDICINE SERVICES</span>

        <h2>HAMS Pharmacy</h2>

        <p>
          Our pharmacy service helps patients access their
          prescribed medicines and healthcare products
          conveniently.
        </p>

        <div className="pharmacy-box">

          <h3>Our Pharmacy Services</h3>

          <ul>
            {pharmacyFeatures.map((feature) => (
              <li key={feature}>
                <span>✓</span>
                {feature}
              </li>
            ))}
          </ul>

        </div>

        <div className="pharmacy-note">
          <strong>Important:</strong>

          <p>
            Prescription medicines should be taken only
            according to the advice of a qualified
            healthcare professional.
          </p>
        </div>

        <Link
          to="/doctors"
          className="primary-btn"
        >
          Consult a Doctor
        </Link>

      </div>

    </div>
  );
};

export default Pharmacy;