import { Link } from "react-router-dom";
import type { Doctor } from "../types";

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard = ({ doctor }: DoctorCardProps) => {
  return (
    <div className="doctor-card">
      <div className="doctor-image-container">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="doctor-image"
        />

        <span
          className={`availability ${
            doctor.available ? "available" : "unavailable"
          }`}
        >
          {doctor.available ? "Available" : "Unavailable"}
        </span>
      </div>

      <div className="doctor-card-content">
        <div className="doctor-rating">
          ⭐ {doctor.rating}
        </div>

        <h3>{doctor.name}</h3>

        <p className="doctor-specialty">
          {doctor.specialty}
        </p>

        <p className="doctor-experience">
          {doctor.experience} years experience
        </p>

        <div className="doctor-info">
          <span>👥 {doctor.patients}+ patients</span>
          <span>💰 ₹{doctor.fee}</span>
        </div>

        <Link
          to={`/doctors/${doctor.id}`}
          className="doctor-details-btn"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;