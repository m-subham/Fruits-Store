import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import TictaeToe from './components/TicTaeToe/TictaeToe.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TictaeToe/>
  </React.StrictMode>,
)
