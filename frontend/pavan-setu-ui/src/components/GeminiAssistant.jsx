import { useState } from "react";

export default function GeminiAssistant() {
    const [question, setQuestion] = useState("");
    const [response, setResponse] = useState("");

    const askGemini = () => {
        // Temporary mock response (Gemini-style)
        setResponse(
            "AQI is high today due to increased traffic emissions and stagnant wind conditions. Sensitive groups should limit outdoor exposure."
        );
    };

    return (
        <div
            style={{
                background: "var(--bg-card)",
                padding: "24px",
                borderRadius: "18px",
                maxWidth: "700px",
            }}
        >
            <h2>🤖 Gemini AI Assistant</h2>
            <p style={{ color: "var(--text-muted)", marginBottom: "12px" }}>
                Ask about air quality, health risks, or policy actions
            </p>

            <input
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Why is AQI high today?"
                style={{
                    width: "100%",
                    padding: "12px",
                    borderRadius: "10px",
                    border: "none",
                    marginBottom: "12px",
                }}
            />

            <button
                onClick={askGemini}
                style={{
                    padding: "10px 16px",
                    borderRadius: "8px",
                    background: "#7ddc7a",
                    border: "none",
                    cursor: "pointer",
                }}
            >
                Ask Gemini
            </button>

            {response && (
                <div
                    style={{
                        marginTop: "16px",
                        background: "rgba(0,0,0,0.2)",
                        padding: "16px",
                        borderRadius: "12px",
                    }}
                >
                    {response}
                </div>
            )}
        </div>
    );
}
