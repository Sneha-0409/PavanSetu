export default function MockAQIMap() {
  const cities = [
    { name: "Delhi", aqi: 215, color: "#ef4444" },
    { name: "Mumbai", aqi: 165, color: "#f59e0b" },
    { name: "Kolkata", aqi: 190, color: "#f59e0b" },
    { name: "Bengaluru", aqi: 110, color: "#22c55e" },
  ];

  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>City AQI Map</h3>
      <p style={styles.subtext}>
        Google Maps–ready AQI visualization (mocked)
      </p>

      <div style={styles.map}>
        {cities.map((c) => (
          <div
            key={c.name}
            style={{
              ...styles.marker,
              backgroundColor: c.color,
            }}
          >
            {c.name} · {c.aqi}
          </div>
        ))}
      </div>

      <div style={styles.legend}>
        <span>🟥 Poor</span>
        <span>🟨 Moderate</span>
        <span>🟩 Good</span>
      </div>
    </div>
  );
}

const styles = {
  container: {
    background: "#ffffff",
    borderRadius: "16px",
    padding: "20px",
    marginTop: "24px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
  },

  heading: {
    margin: 0,
    fontSize: "18px",
    fontWeight: 600,
    color: "#111827",
  },

  subtext: {
    color: "#6b7280",
    fontSize: "14px",
    marginBottom: "16px",
  },

 map: {
    background: "#ffffff",
    borderRadius: "18px",
    padding: "24px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
},

  marker: {
    padding: "10px 16px",
    borderRadius: "999px",
    fontSize: "14px",
    fontWeight: 600,
    color: "#ffffff",
    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
  },

  legend: {
    display: "flex",
    gap: "18px",
    marginTop: "14px",
    fontSize: "14px",
    color: "#374151",
  },
};
