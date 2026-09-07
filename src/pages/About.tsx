import { Link } from "react-router-dom";

const About = () => {
  const stats = [
    { label: "Expert Doctors", value: "50+" },
    { label: "Happy Patients", value: "10K+" },
    { label: "Medical Departments", value: "15+" },
    { label: "Patient Satisfaction", value: "99%" },
  ];

  const values = [
    {
      icon: "🩺",
      title: "Patient-Centered Care",
      desc: "Our primary commitment is the safety, comfort, and well-being of every patient.",
    },
    {
      icon: "🔬",
      title: "Advanced Medical Tech",
      desc: "We leverage state-of-the-art diagnostic and clinical equipment for precision care.",
    },
    {
      icon: "🤝",
      title: "Compassionate Team",
      desc: "Dedicated healthcare professionals providing empathetic support every step of the way.",
    },
    {
      icon: "⚡",
      title: "Seamless Experience",
      desc: "Simplified booking, digital record keeping, and prompt service delivery.",
    },
  ];

  return (
    <div className="about-page">
      {/* Hero Header */}
      <section className="about-hero">
        <div className="about-hero-content">
          <span className="about-badge">ABOUT HAMS</span>
          <h1>Dedicated to Excellence in Healthcare</h1>
          <p>
            Hospital Appointment Management System (HAMS) provides a seamless connection between patients and elite medical professionals. We deliver reliable, accessible, and compassionate healthcare solutions.
          </p>
        </div>
      </section>

      {/* Stats Counter Bar */}
      <section className="about-stats-container">
        <div className="about-stats-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="about-stat-card">
              <h2>{stat.value}</h2>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="about-mission-section">
        <div className="mission-box">
          <div className="mission-icon">🎯</div>
          <h3>Our Mission</h3>
          <p>
            To empower individuals by providing instant, reliable access to high-quality healthcare, ensuring every patient receives personal and effective medical attention without hassle.
          </p>
        </div>

        <div className="mission-box">
          <div className="mission-icon">👁️</div>
          <h3>Our Vision</h3>
          <p>
            To be a globally trusted digital health platform known for clinical excellence, innovation, and unwavering dedication to patient-first service delivery.
          </p>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="about-values-section">
        <div className="section-title-center">
          <span>WHY CHOOSE US</span>
          <h2>Our Core Values</h2>
        </div>

        <div className="about-values-grid">
          {values.map((item, index) => (
            <div key={index} className="value-card">
              <div className="value-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="about-cta-banner">
        <h2>Ready to schedule your appointment?</h2>
        <p>Explore our list of experienced specialists and book a consultation today.</p>
        <div className="cta-buttons">
          <Link to="/doctors" className="primary-btn">Find a Doctor</Link>
          <Link to="/appointments" className="secondary-btn">Book Appointment</Link>
        </div>
      </section>
    </div>
  );
};

export default About;