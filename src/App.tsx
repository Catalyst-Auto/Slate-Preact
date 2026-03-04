import { useState } from 'preact/hooks'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const envVars = {
    APP_NAME: import.meta.env.VITE_APP_NAME,
    API_URL: import.meta.env.VITE_API_URL,
    VERSION: import.meta.env.VITE_VERSION,
    ENVIRONMENT: import.meta.env.VITE_ENVIRONMENT || 'Development',
    SUPABASE_URL: import.meta.env.VITE_SUPABASE_URL || 'Not Defined',
    MODE: import.meta.env.MODE || 'Development',
    DEV: import.meta.env.DEV || false,
    PROD: import.meta.env.PROD || true
  }

  return (
    <div className="app-container">
      <h1>Preact Environment Variables</h1>
      <div className="rollback">Title</div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <div className="env-section">
        <h2>Environment Variables</h2>
        <div className="env-list">
          {Object.entries(envVars).map(([key, value]) => (
            <div key={key} className="env-item">
              <span className="env-key">{key}:</span>
              <h5 className="env-value">{String(value)}</h5>
            </div>
          ))}
        </div>
      </div>

      <div className="info-box">
        <p>Environment variables must be prefixed with <code>VITE_</code> to be exposed to the app.</p>
        <p>Check the <code>.env</code> file in the project root to see the defined variables.</p>
      </div>
    </div>
  )
}

export default App
