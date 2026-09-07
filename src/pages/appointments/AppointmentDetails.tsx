import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import type { Appointment } from "./MyAppointments";

const AppointmentDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [appointment, setAppointment] = useState<Appointment | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("hams_appointments");
    if (saved && id) {
      const list: Appointment[] = JSON.parse(saved);
      const found = list.find((item) => item.id === Number(id));
      if (found) setAppointment(found);
    }
  }, [id]);

  if (!appointment) {
    return (
      <div className="empty-appointments">
        <h2>Appointment Not Found</h2>
        <Link to="/appointments/my" className="primary-btn">
          Back to My Appointments
        </Link>
      </div>
    );
  }

  return (
    <div className="appointment-detail-container">
      <button onClick={() => navigate(-1)} className="back-btn">
        ← Back
      </button>

      <div className="appointment-card detail-card">
        <div className="card-top">
          <div>
            <span>APPOINTMENT SUMMARY</span>
            <h2>{appointment.doctorName}</h2>
            <p className="specialty-tag">{appointment.specialty}</p>
          </div>
          <span className={`status-badge ${appointment.status.toLowerCase()}`}>
            {appointment.status}
          </span>
        </div>

        <hr />

        <div className="detail-rows">
          <div className="detail-row">
            <strong>Appointment Reference ID:</strong> #{appointment.id}
          </div>
          <div className="detail-row">
            <strong>Patient Name:</strong> {appointment.patientName}
          </div>
          <div className="detail-row">
            <strong>Contact Info:</strong> {appointment.email} | {appointment.phone}
          </div>
          <div className="detail-row">
            <strong>Scheduled Time:</strong> {appointment.date} @ {appointment.time}
          </div>
          <div className="detail-row">
            <strong>Reason for Visit:</strong>
            <p>{appointment.reason}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentDetails;