import { useState } from "react";

export default function GeminiAssistant() {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
        {
            role: "bot",
            text: "Hi! 👋 Ask me about air quality, health risks, or policy actions.",
        },
    ]);

    const sendMessage = () => {
        if (!input.trim()) return;

        const userMsg = { role: "user", text: input };

        const botReply = {
            role: "bot",
            text:
                "AQI is high today due to increased PM2.5 levels from traffic emissions and weather conditions. Consider limiting outdoor activity.",
        };

        setMessages((prev) => [...prev, userMsg, botReply]);
        setInput("");
    };

    return (
        <>
            {/* Floating Button */}
            <button onClick={() => setOpen(true)} style={styles.fab}>
                🤖
            </button>

            {/* Chat Window */}
            {open && (
                <div style={styles.chatBox}>
                    <div style={styles.header}>
                        <span>🤖 Gemini AI</span>
                        <button onClick={() => setOpen(false)} style={styles.closeBtn}>
                            ✕
                        </button>
                    </div>

                    <div style={styles.messages}>
                        {messages.map((msg, i) => (
                            <div
                                key={i}
                                style={msg.role === "bot" ? styles.botMsg : styles.userMsg}
                            >
                                {msg.text}
                            </div>
                        ))}
                    </div>

                    <div style={styles.inputRow}>
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                            placeholder="Why is AQI high today?"
                            style={styles.input}
                        />
                        <button onClick={sendMessage} style={styles.sendBtn}>
                            ➤
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

const styles = {
    fab: {
        position: "fixed",
        bottom: "24px",
        right: "24px",
        width: "56px",
        height: "56px",
        borderRadius: "50%",
        background: "linear-gradient(135deg, #00c853, #00e676)",
        fontSize: "22px",
        border: "none",
        cursor: "pointer",
        zIndex: 999,
    },

    chatBox: {
        position: "fixed",
        bottom: "90px",
        right: "24px",
        width: "320px",
        background: "rgba(20,25,22,0.95)",
        backdropFilter: "blur(20px)",
        borderRadius: "18px",
        boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
        overflow: "hidden",
        zIndex: 1000,
        color: "#fff",
    },

    header: {
        padding: "14px 16px",
        display: "flex",
        justifyContent: "space-between",
        background: "rgba(255,255,255,0.05)",
        fontWeight: "600",
    },

    closeBtn: {
        background: "none",
        border: "none",
        color: "#aaa",
        cursor: "pointer",
        fontSize: "16px",
    },

    messages: {
        padding: "16px",
        maxHeight: "220px",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
    },

    botMsg: {
        background: "rgba(255,255,255,0.08)",
        padding: "10px 12px",
        borderRadius: "12px",
        fontSize: "14px",
        alignSelf: "flex-start",
        maxWidth: "85%",
    },

    userMsg: {
        background: "#00e676",
        color: "#000",
        padding: "10px 12px",
        borderRadius: "12px",
        fontSize: "14px",
        alignSelf: "flex-end",
        maxWidth: "85%",
    },

    inputRow: {
        display: "flex",
        padding: "12px",
        gap: "8px",
        background: "rgba(0,0,0,0.25)",
    },

    input: {
        flex: 1,
        background: "rgba(255,255,255,0.1)",
        border: "none",
        borderRadius: "10px",
        padding: "10px",
        color: "#fff",
        outline: "none",
    },

    sendBtn: {
        background: "#00e676",
        border: "none",
        borderRadius: "10px",
        padding: "0 14px",
        cursor: "pointer",
        fontWeight: "600",
    },
};
