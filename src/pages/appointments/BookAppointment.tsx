import {  useEffect, useReducer, useRef } from "react";
import type { FormEvent } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { doctors } from "../../data/doctors";

interface FormState {
  doctorId: string;
  patientName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  reason: string;
}

interface FormErrors {
  doctorId?: string;
  patientName?: string;
  email?: string;
  phone?: string;
  date?: string;
  time?: string;
  reason?: string;
}

type Action =
  | { type: "UPDATE_FIELD"; field: keyof FormState; value: string }
  | { type: "RESET"; doctorId: string };

const initialState: FormState = {
  doctorId: "",
  patientName: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  reason: "",
};

const formReducer = (state: FormState, action: Action): FormState => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value };
    case "RESET":
      return { ...initialState, doctorId: action.doctorId };
    default:
      return state;
  }
};

const BookAppointment = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const doctorFromUrl = searchParams.get("doctor") || "";

  const [form, dispatch] = useReducer(formReducer, {
    ...initialState,
    doctorId: doctorFromUrl,
  });

  const [errors, setErrors] = useReducer(
    (state: FormErrors, action: FormErrors): FormErrors => ({
      ...state,
      ...action,
    }),
    {}
  );

  const patientNameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (doctorFromUrl) {
      dispatch({
        type: "UPDATE_FIELD",
        field: "doctorId",
        value: doctorFromUrl,
      });
    }
  }, [doctorFromUrl]);

  const handleChange = (field: keyof FormState, value: string) => {
    dispatch({ type: "UPDATE_FIELD", field, value });
    setErrors({ [field]: undefined });
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!form.doctorId) newErrors.doctorId = "Please select a doctor.";
    if (!form.patientName.trim()) newErrors.patientName = "Patient name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email.";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[6-9]\d{9}$/.test(form.phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number.";
    }

    if (!form.date) newErrors.date = "Please select an appointment date.";
    if (!form.time) newErrors.time = "Please select an appointment time.";
    if (!form.reason.trim()) newErrors.reason = "Please enter the reason for your appointment.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      if (newErrors.patientName) {
        patientNameRef.current?.focus();
      }
      return false;
    }

    return true;
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!validateForm()) return;

    const selectedDoctor = doctors.find((doc) => doc.id === Number(form.doctorId));

    const existingAppointments = JSON.parse(
      localStorage.getItem("hams_appointments") || "[]"
    );

    const newAppointment = {
      id: Date.now(),
      doctorId: Number(form.doctorId),
      doctorName: selectedDoctor?.name || "Doctor",
      specialty: selectedDoctor?.specialty || "General",
      patientName: form.patientName,
      email: form.email,
      phone: form.phone,
      date: form.date,
      time: form.time,
      reason: form.reason,
      status: "Upcoming",
    };

    localStorage.setItem(
      "hams_appointments",
      JSON.stringify([...existingAppointments, newAppointment])
    );

    alert("Appointment booked successfully!");
    dispatch({ type: "RESET", doctorId: "" });
    navigate("/appointments/my");
  };

  return (
    <div className="appointment-page">
      <div className="appointment-header">
        <span>BOOK APPOINTMENT</span>
        <h1>Schedule Your Appointment</h1>
        <p>
          Choose a doctor, select a convenient date and time, and provide your details to book an appointment.
        </p>
      </div>

      <form className="appointment-form" onSubmit={handleSubmit}>
        {/* Doctor Selection */}
        <div className="form-group">
          <label htmlFor="doctor">Select Doctor *</label>
          <select
            id="doctor"
            value={form.doctorId}
            onChange={(e) => handleChange("doctorId", e.target.value)}
          >
            <option value="">-- Choose a Doctor --</option>
            {doctors.map((doc) => (
              <option key={doc.id} value={doc.id}>
                {doc.name} ({doc.specialty})
              </option>
            ))}
          </select>
          {errors.doctorId && <span className="error-text">{errors.doctorId}</span>}
        </div>

        {/* Patient Name */}
        <div className="form-group">
          <label htmlFor="patientName">Patient Name *</label>
          <input
            ref={patientNameRef}
            type="text"
            id="patientName"
            value={form.patientName}
            placeholder="Enter full name"
            onChange={(e) => handleChange("patientName", e.target.value)}
          />
          {errors.patientName && <span className="error-text">{errors.patientName}</span>}
        </div>

        {/* Email & Phone */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              value={form.email}
              placeholder="example@mail.com"
              onChange={(e) => handleChange("email", e.target.value)}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number *</label>
            <input
              type="tel"
              id="phone"
              value={form.phone}
              placeholder="10-digit phone number"
              onChange={(e) => handleChange("phone", e.target.value)}
            />
            {errors.phone && <span className="error-text">{errors.phone}</span>}
          </div>
        </div>

        {/* Date & Time */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="date">Date *</label>
            <input
              type="date"
              id="date"
              value={form.date}
              min={new Date().toISOString().split("T")[0]}
              onChange={(e) => handleChange("date", e.target.value)}
            />
            {errors.date && <span className="error-text">{errors.date}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="time">Time Slot *</label>
            <select
              id="time"
              value={form.time}
              onChange={(e) => handleChange("time", e.target.value)}
            >
              <option value="">-- Select Time --</option>
              <option value="09:00 AM">09:00 AM</option>
              <option value="10:30 AM">10:30 AM</option>
              <option value="01:00 PM">01:00 PM</option>
              <option value="03:30 PM">03:30 PM</option>
              <option value="05:00 PM">05:00 PM</option>
            </select>
            {errors.time && <span className="error-text">{errors.time}</span>}
          </div>
        </div>

        {/* Reason */}
        <div className="form-group">
          <label htmlFor="reason">Reason for Visit *</label>
          <textarea
            id="reason"
            rows={4}
            value={form.reason}
            placeholder="Briefly describe your symptoms or reason for visit"
            onChange={(e) => handleChange("reason", e.target.value)}
          />
          {errors.reason && <span className="error-text">{errors.reason}</span>}
        </div>

        <button type="submit" className="primary-btn submit-btn">
          Confirm & Book Appointment
        </button>
      </form>
    </div>
  );
};

export default BookAppointment;