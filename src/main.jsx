import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { TokenProvider } from './contexts/TokenContext.jsx'
import { UserProvider } from './contexts/UserContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
    <TokenProvider>
      <App />
    </TokenProvider>
    </UserProvider>
  </React.StrictMode>,
)
