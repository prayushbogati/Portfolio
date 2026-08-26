import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from "./App"
import { BrowserRouter } from 'react-router-dom'
import "./css/index.css"
// import '@fontsource/ubuntu-mono';
// Supports weights 200-800
import '@fontsource-variable/plus-jakarta-sans/wght.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
