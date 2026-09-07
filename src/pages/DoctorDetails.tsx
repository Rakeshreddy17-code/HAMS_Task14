import { Link, useParams } from "react-router-dom";
import { doctors } from "../data/doctors";

const DoctorDetails = () => {
  const { id } = useParams<{ id: string }>();

  const doctor = doctors.find(
    (item) => item.id === Number(id)
  );

  // Conditional rendering if doctor doesn't exist
  if (!doctor) {
    return (
      <div className="doctor-not-found">
        <div className="not-found-icon">🔍</div>

        <h1>Doctor Not Found</h1>

        <p>
          Sorry, we couldn't find the doctor you are
          looking for.
        </p>

        <Link to="/doctors" className="primary-btn">
          Back to Doctors
        </Link>
      </div>
    );
  }

  return (
    <div className="doctor-details-page">

      {/* Page Header */}
      <section className="details-header">
        <div>
          <span>DOCTOR PROFILE</span>

          <h1>Meet Your Doctor</h1>

          <p>
            Learn more about our experienced healthcare
            professionals.
          </p>
        </div>
      </section>

      {/* Doctor Profile */}
      <section className="doctor-profile-section">
        <div className="doctor-profile-card">

          {/* Image */}
          <div className="doctor-profile-image">
            <img
              src={doctor.image}
              alt={doctor.name}
            />

            <span
              className={`profile-availability ${
                doctor.available
                  ? "available"
                  : "unavailable"
              }`}
            >
              {doctor.available
                ? "● Available Today"
                : "● Currently Unavailable"}
            </span>
          </div>

          {/* Information */}
          <div className="doctor-profile-content">

            <div className="profile-rating">
              ⭐ {doctor.rating} Rating
            </div>

            <h2>{doctor.name}</h2>

            <h3>{doctor.specialty}</h3>

            <p className="profile-qualification">
              {doctor.qualification}
            </p>

            <p className="profile-about">
              {doctor.about}
            </p>

            {/* Stats */}
            <div className="profile-stats">

              <div>
                <strong>{doctor.experience}</strong>
                <span>Years Experience</span>
              </div>

              <div>
                <strong>
                  {doctor.patients.toLocaleString()}+
                </strong>
                <span>Patients</span>
              </div>

              <div>
                <strong>₹{doctor.fee}</strong>
                <span>Consultation</span>
              </div>

            </div>

            {/* Actions */}
            <div className="profile-actions">

              {doctor.available ? (
                <Link
                  to={`/appointments?doctor=${doctor.id}`}
                  className="primary-btn"
                >
                  Book Appointment
                </Link>
              ) : (
                <button
                  className="disabled-btn"
                  disabled
                >
                  Currently Unavailable
                </button>
              )}

              <Link
                to="/doctors"
                className="back-doctors-btn"
              >
                ← Back to Doctors
              </Link>

            </div>

          </div>

        </div>
      </section>

      {/* Available Slots */}
      <section className="availability-section">

        <div className="availability-heading">
          <span>APPOINTMENT SCHEDULE</span>

          <h2>Available Time Slots</h2>

          <p>
            Choose a convenient time for your consultation.
          </p>
        </div>

        <div className="schedule-card">

          <div className="schedule-day">
            <strong>Today</strong>
            <span>Sep 7</span>
          </div>

          <div className="time-slots">
            <button>09:00 AM</button>
            <button>10:30 AM</button>
            <button>11:30 AM</button>
            <button>02:00 PM</button>
            <button>04:30 PM</button>
            <button>06:00 PM</button>
          </div>

        </div>

        <div className="schedule-card">

          <div className="schedule-day">
            <strong>Tomorrow</strong>
            <span>Sep 8</span>
          </div>

          <div className="time-slots">
            <button>09:30 AM</button>
            <button>11:00 AM</button>
            <button>01:30 PM</button>
            <button>03:30 PM</button>
            <button>05:00 PM</button>
          </div>

        </div>

      </section>

      {/* Why Choose Doctor */}
      <section className="doctor-benefits">

        <div>
          <span>✓</span>
          <h3>Experienced Professional</h3>
          <p>
            Qualified medical professional with years
            of clinical experience.
          </p>
        </div>

        <div>
          <span>♥</span>
          <h3>Patient-Centered Care</h3>
          <p>
            Personalized healthcare focused on your
            individual needs.
          </p>
        </div>

        <div>
          <span>★</span>
          <h3>Highly Rated</h3>
          <p>
            Consistently rated highly by our patients.
          </p>
        </div>

      </section>

    </div>
  );
};

export default DoctorDetails;