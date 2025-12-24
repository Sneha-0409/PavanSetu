// export default function App() {
//   return (
//     <div
//       style={{
//         backgroundColor: "#0B0F14",
//         minHeight: "100vh",
//         color: "#E6EDF3",
//         padding: "32px",
//         fontFamily: "system-ui, -apple-system",
//       }}
//     >
//       <h1 style={{ fontSize: "32px", marginBottom: "6px" }}>
//         🌿 PAVAN SETU
//       </h1>

//       <p style={{ color: "#8A94A6", fontSize: "14px" }}>
//         AI-driven Air Quality Intelligence Dashboard
//       </p>
//     </div>
//   );
// }

export default function App() {
  const cardStyle = {
    backgroundColor: "#121821",
    borderRadius: "16px",
    padding: "20px",
    minWidth: "200px",
  };

  return (
    <div
      style={{
        backgroundColor: "#0B0F14",
        minHeight: "100vh",
        color: "#E6EDF3",
        padding: "32px",
        fontFamily: "system-ui, -apple-system",
      }}
    >
      <h1 style={{ fontSize: "28px", marginBottom: "24px" }}>
        🌿 PAVAN SETU Dashboard
      </h1>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <div style={cardStyle}>
          <p style={{ color: "#8A94A6" }}>Current AQI</p>
          <h2>215</h2>
          <p style={{ color: "#FF4C4C" }}>Poor</p>
        </div>

        <div style={cardStyle}>
          <p style={{ color: "#8A94A6" }}>Main Pollutant</p>
          <h2>PM2.5</h2>
        </div>

        <div style={cardStyle}>
          <p style={{ color: "#8A94A6" }}>24h Forecast</p>
          <h2>225</h2>
        </div>

        <div style={cardStyle}>
          <p style={{ color: "#8A94A6" }}>Health Advisory</p>
          <h2 style={{ color: "#FFD166" }}>Limit Outdoor Activity</h2>
        </div>
      </div>
    </div>
  );
}
