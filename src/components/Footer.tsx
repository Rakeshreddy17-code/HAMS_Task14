const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>
            <span>✚</span> HAMS
          </h2>

          <p>
            Healthcare Appointment Management System providing convenient
            access to doctors and healthcare services.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>

          <p>Home</p>
          <p>About</p>
          <p>Doctors</p>
          <p>Services</p>
        </div>

        <div className="footer-section">
          <h3>Services</h3>

          <p>Doctor Consultation</p>
          <p>Laboratory Tests</p>
          <p>Pharmacy</p>
          <p>Emergency Care</p>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>

          <p>📍 Hyderabad, Telangana</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ support@hams.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 HAMS. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;