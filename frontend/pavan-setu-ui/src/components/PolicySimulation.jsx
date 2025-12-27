import { useState } from "react";

const policies = [
    { name: "Odd-Even Traffic Rule", impact: 15 },
    { name: "Industrial Emission Control", impact: 20 },
    { name: "Construction Activity Ban", impact: 10 },
    { name: "Public Transport Boost", impact: 12 },
];

export default function PolicySimulation() {
    const baseAQI = 215;
    const [selected, setSelected] = useState(null);

    const newAQI = selected
        ? Math.round(baseAQI * (1 - selected.impact / 100))
        : baseAQI;

    return (
        <div className="section">
            <h2>Policy Simulation</h2>
            <p className="muted">
                Simulate impact of government policies on air quality
            </p>

            <div className="policy-grid">
                {policies.map((policy) => (
                    <button
                        key={policy.name}
                        className={`policy-card ${selected?.name === policy.name ? "active" : ""
                            }`}
                        onClick={() => setSelected(policy)}
                    >
                        <h4>{policy.name}</h4>
                        <span>Expected AQI ↓ {policy.impact}%</span>
                    </button>
                ))}
            </div>

            <div className="policy-result">
                <div>
                    <span>Current AQI</span>
                    <h3>{baseAQI}</h3>
                </div>

                <div className="arrow">➡</div>

                <div>
                    <span>After Policy</span>
                    <h3 className="improved">{newAQI}</h3>
                </div>
            </div>
        </div>
    );
}
