import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export interface Appointment {
  id: number;
  doctorId: number;
  doctorName: string;
  specialty: string;
  patientName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  reason: string;
  status: "Upcoming" | "Completed" | "Cancelled";
}

const MyAppointments = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("hams_appointments");
    if (saved) {
      setAppointments(JSON.parse(saved));
    }
  }, []);

  const handleCancel = (id: number) => {
    if (!window.confirm("Are you sure you want to cancel this appointment?")) return;

    const updated = appointments.map((appt) =>
      appt.id === id ? { ...appt, status: "Cancelled" as const } : appt
    );

    setAppointments(updated);
    localStorage.setItem("hams_appointments", JSON.stringify(updated));
  };

  return (
    <div className="my-appointments-page">
      <div className="appointments-header">
        <h2>My Scheduled Appointments</h2>
        <Link to="/appointments" className="primary-btn">
          + Book New Appointment
        </Link>
      </div>

      {appointments.length === 0 ? (
        <div className="empty-appointments">
          <p>No appointments found.</p>
          <Link to="/appointments" className="service-link">
            Book your first appointment now →
          </Link>
        </div>
      ) : (
        <div className="appointments-grid">
          {appointments.map((appt) => (
            <div key={appt.id} className={`appointment-card status-${appt.status.toLowerCase()}`}>
              <div className="card-top">
                <div>
                  <h3>{appt.doctorName}</h3>
                  <span className="specialty-tag">{appt.specialty}</span>
                </div>
                <span className={`status-badge ${appt.status.toLowerCase()}`}>
                  {appt.status}
                </span>
              </div>

              <div className="card-details">
                <p><strong>Patient:</strong> {appt.patientName}</p>
                <p><strong>Date & Time:</strong> {appt.date} at {appt.time}</p>
                <p><strong>Reason:</strong> {appt.reason}</p>
              </div>

              <div className="card-actions">
                <Link to={`/appointments/${appt.id}`} className="service-link">
                  View Details
                </Link>
                {appt.status === "Upcoming" && (
                  <button onClick={() => handleCancel(appt.id)} className="cancel-btn">
                    Cancel
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyAppointments;