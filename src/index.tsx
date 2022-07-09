import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'

const index = document.getElementById('root')
if (!index) { throw new Error("The element #portal wasn't found") }
const root = ReactDOM.createRoot(index)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
