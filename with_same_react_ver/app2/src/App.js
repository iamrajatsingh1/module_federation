import React from 'react';

const RemoteApp = React.lazy(() => import('app1/App'));

function App() {
  return (
    <div>
      <div
        style={{
          margin: '10px',
          padding: '10px',
          textAlign: 'center',
          backgroundColor: 'greenyellow',
        }}
      >
        <h1>App2</h1>
        <React.Suspense fallback={'loading...'}>
          <RemoteApp />
        </React.Suspense>
      </div>
    </div>
  );
}

export default App;