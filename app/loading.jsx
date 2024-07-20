import React from "react";

// Inline CSS styles for the Loading component
const styles = {
  loadingContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#1a1a1a",
    color: "#fff",
    textAlign: "center",
  },
  spinner: {
    border: "8px solid #f3f3f3" /* Light gray border */,
    borderTop: "8px solid #3498db" /* Blue top border for the spinner */,
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    marginBottom: "20px",
    animation: "spin 1s linear infinite",
  },
  loadingText: {
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
};

// Keyframes for the spinner animation
const keyframes = `
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`;

// Loading component
export default function Loading() {
  return (
    <div style={styles.loadingContainer}>
      <style>{keyframes}</style> {/* Inject keyframes into the document */}
      <div style={styles.spinner}></div>
      <p style={styles.loadingText}>Loading, please wait...</p>
    </div>
  );
}
