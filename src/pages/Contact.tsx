
import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page">

      {/* Header */}
      <section className="contact-header">
        <div>
          <span>GET IN TOUCH</span>

          <h1>Contact HAMS</h1>

          <p>
            Have a question or need assistance? Send us a message
            and our team will be happy to help.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">

        {/* Contact Information */}
        <div className="contact-info">

          <span className="contact-label">CONTACT US</span>

          <h2>We are here to help</h2>

          <p>
            Whether you have a question about appointments, doctors,
            or our services, feel free to contact us.
          </p>

          <div className="contact-info-list">

            <div className="contact-info-item">
              <div className="contact-icon">📍</div>

              <div>
                <h3>Address</h3>
                <p>
                  HAMS Healthcare Center,
                  Hyderabad, Telangana
                </p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">📞</div>

              <div>
                <h3>Phone</h3>
                <p>+91 98765 43210</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">✉️</div>

              <div>
                <h3>Email</h3>
                <p>support@hams.com</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">🕒</div>

              <div>
                <h3>Working Hours</h3>
                <p>Monday - Saturday, 9:00 AM - 6:00 PM</p>
              </div>
            </div>

          </div>

        </div>

        {/* Contact Form */}
        <div className="contact-form-card">

          <h2>Send us a message</h2>

          <p>
            Fill in the form below and we'll get back to you soon.
          </p>

          {submitted && (
            <div className="contact-success">
              ✅ Your message has been sent successfully!
            </div>
          )}

          <form onSubmit={handleSubmit}>

            <div className="contact-form-group">
              <label htmlFor="name">Your Name</label>

              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="contact-form-group">
              <label htmlFor="email">Email Address</label>

              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="contact-form-group">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                rows={5}
                placeholder="Write your message..."
                required
              />
            </div>

            <button type="submit" className="contact-submit">
              Send Message
            </button>

          </form>

        </div>

      </section>

    </div>
  );
};

export default Contact;
