const Laboratory = () => {
  const tests = [
    {
      id: 1,
      name: "Complete Blood Count",
      description:
        "Measures different components of your blood.",
    },
    {
      id: 2,
      name: "Blood Sugar Test",
      description:
        "Helps monitor and assess blood glucose levels.",
    },
    {
      id: 3,
      name: "Lipid Profile",
      description:
        "Measures cholesterol and other blood fats.",
    },
    {
      id: 4,
      name: "Thyroid Test",
      description:
        "Checks thyroid hormone levels in the body.",
    },
    {
      id: 5,
      name: "Liver Function Test",
      description:
        "Helps evaluate liver health and function.",
    },
    {
      id: 6,
      name: "Kidney Function Test",
      description:
        "Provides information about kidney function.",
    },
  ];

  return (
    <div className="service-detail">

      <div className="service-detail-icon">
        🧪
      </div>

      <div className="service-detail-content">

        <span>DIAGNOSTIC SERVICES</span>

        <h2>Laboratory Tests</h2>

        <p>
          Our diagnostic services help patients and doctors
          understand health conditions through reliable
          laboratory testing.
        </p>

        <div className="laboratory-grid">

          {tests.map((test) => (
            <div
              className="laboratory-card"
              key={test.id}
            >
              <div className="test-number">
                {String(test.id).padStart(2, "0")}
              </div>

              <h3>{test.name}</h3>

              <p>{test.description}</p>
            </div>
          ))}

        </div>

      </div>

    </div>
  );
};

export default Laboratory;