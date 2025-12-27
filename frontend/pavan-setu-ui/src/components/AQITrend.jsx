export default function AQITrend() {
    const data = [
        { time: "6 AM", value: 180 },
        { time: "9 AM", value: 240 },
        { time: "12 PM", value: 300 },
        { time: "3 PM", value: 260 },
        { time: "6 PM", value: 220 },
    ];

    return (
        <div style={styles.card}>
            <h3 style={styles.title}>AQI Trend (Today)</h3>

            <svg viewBox="0 0 600 220" style={styles.chart}>
                {/* Grid */}
                {[40, 80, 120, 160].map((y) => (
                    <line
                        key={y}
                        x1="40"
                        y1={y}
                        x2="560"
                        y2={y}
                        stroke="#e5e7eb"
                        strokeDasharray="4"
                    />
                ))}

                {/* Line */}
                <polyline
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="3"
                    points="40,160 170,110 300,70 430,100 560,130"
                />

                {/* Points */}
                {[160, 110, 70, 100, 130].map((y, i) => (
                    <circle
                        key={i}
                        cx={40 + i * 130}
                        cy={y}
                        r="6"
                        fill="#ef4444"
                        stroke="#fff"
                        strokeWidth="2"
                    />
                ))}

                {/* X labels */}
                {data.map((d, i) => (
                    <text
                        key={d.time}
                        x={40 + i * 130}
                        y={200}
                        textAnchor="middle"
                        style={styles.label}
                    >
                        {d.time}
                    </text>
                ))}
            </svg>
        </div>
    );
}

const styles = {
    card: {
        background: "#ffffff",
        borderRadius: "18px",
        padding: "24px",
        boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
        marginTop: "28px",
    },
    title: {
        marginBottom: "16px",
        fontSize: "18px",
    },
    chart: {
        width: "100%",
        height: "220px",
    },
    label: {
        fontSize: "13px",
        fill: "#64748b",
    },
};
