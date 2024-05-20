import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// This is the launcher  kinda like the init 
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
