import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Portfolio from './Portfolio/Portfolio.jsx'
// import "./css/index.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Portfolio />
  </StrictMode>,
)
