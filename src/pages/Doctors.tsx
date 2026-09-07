import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import DoctorCard from "../components/DoctorCard";
import { doctors } from "../data/doctors";

const Doctors = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(
    searchParams.get("search") || ""
  );

  const [department, setDepartment] = useState(
    searchParams.get("department") || "All"
  );

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const departments = [
    "All",
    ...Array.from(
      new Set(doctors.map((doctor) => doctor.department))
    ),
  ];

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch =
      doctor.name.toLowerCase().includes(search.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(search.toLowerCase()) ||
      doctor.department.toLowerCase().includes(search.toLowerCase());

    const matchesDepartment =
      department === "All" ||
      doctor.department === department;

    return matchesSearch && matchesDepartment;
  });

  const handleSearch = (value: string) => {
    setSearch(value);

    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    if (department !== "All") {
      params.set("department", department);
    }

    setSearchParams(params);
  };

  const handleDepartment = (value: string) => {
    setDepartment(value);

    const params = new URLSearchParams(searchParams);

    if (value === "All") {
      params.delete("department");
    } else {
      params.set("department", value);
    }

    if (search) {
      params.set("search", search);
    }

    setSearchParams(params);
  };

  if (loading) {
    return (
      <div className="doctors-loading">
        <div className="loader"></div>
        <p>Loading doctors...</p>
      </div>
    );
  }

  return (
    <div className="doctors-page">

      {/* Page Header */}
      <section className="page-header">
        <div>
          <span>OUR MEDICAL TEAM</span>

          <h1>Find the Right Doctor</h1>

          <p>
            Connect with experienced healthcare professionals
            and get the care you deserve.
          </p>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="doctor-filter-section">
        <div className="doctor-filter-container">

          <div className="doctor-search">
            <span>🔎</span>

            <input
              type="text"
              placeholder="Search doctor, specialty or department..."
              value={search}
              onChange={(e) =>
                handleSearch(e.target.value)
              }
            />
          </div>

          <div className="department-filter">
            <label>Department</label>

            <select
              value={department}
              onChange={(e) =>
                handleDepartment(e.target.value)
              }
            >
              {departments.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

        </div>
      </section>

      {/* Results */}
      <section className="doctors-section">

        <div className="doctors-heading">
          <div>
            <h2>Our Doctors</h2>

            <p>
              {filteredDoctors.length} doctors found
            </p>
          </div>

          {(search || department !== "All") && (
            <button
              className="clear-filter"
              onClick={() => {
                setSearch("");
                setDepartment("All");
                setSearchParams({});
              }}
            >
              Clear Filters
            </button>
          )}
        </div>

        {filteredDoctors.length > 0 ? (
          <div className="doctors-grid">
            {filteredDoctors.map((doctor) => (
              <DoctorCard
                key={doctor.id}
                doctor={doctor}
              />
            ))}
          </div>
        ) : (
          <div className="no-doctors">
            <div>🔍</div>

            <h3>No doctors found</h3>

            <p>
              Try searching with a different name,
              specialty or department.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setDepartment("All");
                setSearchParams({});
              }}
            >
              Reset Search
            </button>
          </div>
        )}

      </section>

    </div>
  );
};

export default Doctors;