import React from 'react'
import { render } from 'react-dom'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import App from './components/App'
import { PublicClientApplication } from "@azure/msal-browser"
import { MsalProvider } from "@azure/msal-react"
import { msalConfig } from "./config/authConfig"

const msalInstance = new PublicClientApplication(msalConfig)

render(
  <React.StrictMode>
    <MsalProvider instance={msalInstance}>
      <App />
    </MsalProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
