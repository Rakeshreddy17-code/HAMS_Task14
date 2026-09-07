import { useState } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const [editing, setEditing] = useState(false);
  const [showSavedMsg, setShowSavedMsg] = useState(false);

  // Editable Form States
  const [name, setName] = useState("Rakesh Reddy");
  const [email, setEmail] = useState("rakesh@example.com");
  const [phone, setPhone] = useState("+91 98765 43210");
  const [bloodGroup, setBloodGroup] = useState("O+");
  const [dob, setDob] = useState("1994-08-15");
  const [address, setAddress] = useState("Hyderabad, Telangana");

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setEditing(false);
    setShowSavedMsg(true);
    setTimeout(() => setShowSavedMsg(false), 3000);
  };

  return (
    <div className="profile-page">
      {/* Toast Notification */}
      {showSavedMsg && (
        <div className="profile-toast">
          ✓ Profile details updated successfully!
        </div>
      )}

      {/* Profile Banner */}
      <section className="profile-header">
        <div className="profile-header-content">
          <span className="profile-badge">PATIENT PORTAL</span>
          <h1>Welcome back, {name}</h1>
          <p>Manage your account settings, medical profile, and contact details.</p>
        </div>
      </section>

      {/* Main Grid */}
      <div className="profile-grid">
        {/* Left Side: Avatar Card */}
        <div className="profile-sidebar">
          <div className="profile-card">
            <div className="profile-avatar-wrapper">
              <div className="profile-avatar">
                {name.charAt(0).toUpperCase()}
              </div>
              <span className="status-dot" title="Active Account"></span>
            </div>

            <h2>{name}</h2>
            <p className="profile-role">Verified Patient</p>
            <p className="patient-id">ID: #HAMS-8942</p>

            <button
              type="button"
              className={`profile-edit-button ${editing ? "cancel" : ""}`}
              onClick={() => setEditing(!editing)}
            >
              {editing ? "Cancel Editing" : "✏️ Edit Profile"}
            </button>
          </div>

          {/* Quick Health Stats Widget */}
          <div className="profile-stats-widget">
            <h3>Medical Snapshot</h3>
            <div className="stat-item">
              <span>Upcoming Visits</span>
              <strong>2 Active</strong>
            </div>
            <div className="stat-item">
              <span>Primary Hospital</span>
              <strong>City Care HAMS</strong>
            </div>
            <Link to="/appointments/my" className="widget-link">
              View Appointments →
            </Link>
          </div>
        </div>

        {/* Right Side: Main Details Card */}
        <div className="profile-main-card">
          <div className="card-header">
            <h2>Personal & Health Information</h2>
            <p className="profile-description">
              {editing
                ? "Update your editable fields below and click save."
                : "Your personal details registered with our healthcare network."}
            </p>
          </div>

          <form onSubmit={handleSave} className="profile-form">
            <div className="form-row">
              <div className="profile-form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={!editing}
                  required
                />
              </div>

              <div className="profile-form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={!editing}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="profile-form-group">
                <label>Phone Number</label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  disabled={!editing}
                  required
                />
              </div>

              <div className="profile-form-group">
                <label>Blood Group</label>
                <select
                  value={bloodGroup}
                  onChange={(e) => setBloodGroup(e.target.value)}
                  disabled={!editing}
                >
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="profile-form-group">
                <label>Date of Birth</label>
                <input
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  disabled={!editing}
                />
              </div>

              <div className="profile-form-group">
                <label>Account Type</label>
                <input type="text" value="Patient (Standard)" disabled />
              </div>
            </div>

            <div className="profile-form-group">
              <label>Location / Address</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                disabled={!editing}
              />
            </div>

            {editing && (
              <div className="form-actions">
                <button type="submit" className="profile-save-button">
                  💾 Save Changes
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;