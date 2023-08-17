import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ContextDataProvider from './context/InfoContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextDataProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </ContextDataProvider>
  </React.StrictMode>,
)
