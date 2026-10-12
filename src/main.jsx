import React, { useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import AOS from 'aos'
import 'aos/dist/aos.css'

function RootComponent() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50
    })
    AOS.refresh()
    window.addEventListener('load', AOS.refresh);
    return () => window.removeEventListener('load', AOS.refresh);
  }, [])

  return (
    <div className='site'>
      <App />
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RootComponent />
  </React.StrictMode>
)