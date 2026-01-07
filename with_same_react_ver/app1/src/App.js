import React from "react";
import "./styles.css";

/**
 * Remote Application (Same React Version)
 * --------------------------------------
 * - Uses the same React version as the host
 * - Shared as a singleton via Module Federation
 */

function App() {
  return (
    <div className="remote-card">
      <div className="header">
        <h2 className="title">Remote Application</h2>
        <span className="badge badge-remote">React 18</span>
      </div>

      <p className="subtitle">
        This remote component is built using the same React version
        as the host application and is shared as a singleton.
      </p>
    </div>
  );
}

export default App;
