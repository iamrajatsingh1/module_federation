import React, { Suspense, lazy } from "react";
import ErrorBoundary from "./ErrorBoundary";
import "./styles.css";
/**
 * RemoteApp
 * ----------
 * Federated module imported from App1 (React 18).
 * Loaded lazily to enable runtime integration.
 */
const RemoteApp = lazy(() => import('app1/App'));

/**
 * App2 (Host Application)
 * ----------------------
 * - Built using React 16
 * - Consumes a federated React 18 application
 * - Demonstrates cross-version Module Federation
 */
function App() {
  return (
    <div className="app-shell">
      <div className="card">
        <div className="header">
          <h1 className="title">Host Application</h1>
          <span className="badge badge-host">React 16</span>
        </div>

        <p className="subtitle">
          This application dynamically loads a remote React 18 application
          using Webpack Module Federation.
        </p>

        <ErrorBoundary>
          <Suspense fallback={<p className="loading">Loading remote application…</p>}>
            <div className="remote-wrapper">
              <RemoteApp />
            </div>
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;