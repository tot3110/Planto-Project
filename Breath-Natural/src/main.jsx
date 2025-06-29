import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './page/Login.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  
    <App />
    <Login/>
    
  </StrictMode>,
)
