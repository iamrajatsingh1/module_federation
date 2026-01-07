import React from 'react';
import "./styles.css";
/**
 * App1 (Remote Application)
 * -------------------------
 * - Built using React 18
 * - Exposed via Webpack Module Federation
 * - Consumed by a Host application running React 16
 *
 * This component intentionally keeps React logic simple
 * to highlight cross-version compatibility.
 */

function App() {
  return (
    <div className="remote-card">
      <div className="header">
        <h2 className="title">Remote Application</h2>
        <span className="badge badge-remote">React 18</span>
      </div>

      <p className="subtitle">
        This UI is rendered from a separate build and runtime,
        consumed dynamically by the host application.
      </p>
    </div>
  );
}


export default App;
