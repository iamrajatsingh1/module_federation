import React, { Suspense, lazy } from "react";
import "./styles.css";

/**
 * Federated remote module (same React version)
 */
const RemoteApp = lazy(() => import("app1/App"));

/**
 * Host Application (Same React Version)
 * ------------------------------------
 * - Uses the same React version as the remote
 * - React is shared as a singleton
 * - Recommended production setup
 */
function App() {
  return (
    <div className="app-shell">
      <div className="card">
        <div className="header">
          <h1 className="title">Host Application</h1>
          <span className="badge badge-host">React 18</span>
        </div>

        <p className="subtitle">
          This setup demonstrates Module Federation between applications
          using the same React version, enabling a shared singleton runtime.
        </p>

        <Suspense fallback={<p className="loading">Loading remote module…</p>}>
          <div className="remote-wrapper">
            <RemoteApp />
          </div>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
