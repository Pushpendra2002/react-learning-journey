import { useState, useRef, useEffect } from "react";

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  function startTimer() {
    // Prevent multiple intervals if already running
    if (timerRef.current !== null) return;

    setIsRunning(true);
    timerRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  }

  function stopTimer() {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setIsRunning(false);
  }

  function resetTimer() {
    stopTimer();
    setTime(0);
  }

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0f172a",
        color: "#ffffff",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "#1e293b",
          padding: "2.5rem 3rem",
          borderRadius: "16px",
          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.5)",
          textAlign: "center",
          border: "1px solid #334155",
          width: "90%",
          maxWidth: "400px",
        }}
      >
        <h1 style={{ margin: "0 0 1rem 0", fontSize: "1.75rem", color: "#94a3b8" }}>
          React Stopwatch
        </h1>

        <div
          style={{
            fontSize: "3.5rem",
            fontWeight: "700",
            fontVariantNumeric: "tabular-nums",
            color: "#38bdf8",
            margin: "1rem 0 2rem 0",
          }}
        >
          {formatTime(time)}
          <span style={{ fontSize: "1rem", color: "#64748b", marginLeft: "0.5rem" }}>
            ({time}s)
          </span>
        </div>

        <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center" }}>
          <button
            onClick={startTimer}
            disabled={isRunning}
            style={{
              padding: "0.6rem 1.4rem",
              fontSize: "1rem",
              fontWeight: "600",
              borderRadius: "8px",
              border: "none",
              cursor: isRunning ? "not-allowed" : "pointer",
              backgroundColor: isRunning ? "#334155" : "#22c55e",
              color: "#ffffff",
              transition: "background-color 0.2s",
            }}
          >
            Start
          </button>

          <button
            onClick={stopTimer}
            disabled={!isRunning}
            style={{
              padding: "0.6rem 1.4rem",
              fontSize: "1rem",
              fontWeight: "600",
              borderRadius: "8px",
              border: "none",
              cursor: !isRunning ? "not-allowed" : "pointer",
              backgroundColor: !isRunning ? "#334155" : "#ef4444",
              color: "#ffffff",
              transition: "background-color 0.2s",
            }}
          >
            Stop
          </button>

          <button
            onClick={resetTimer}
            style={{
              padding: "0.6rem 1.4rem",
              fontSize: "1rem",
              fontWeight: "600",
              borderRadius: "8px",
              border: "1px solid #475569",
              cursor: "pointer",
              backgroundColor: "#1e293b",
              color: "#f1f5f9",
              transition: "background-color 0.2s",
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;