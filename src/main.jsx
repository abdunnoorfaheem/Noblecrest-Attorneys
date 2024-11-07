import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Banner } from './components/banner.jsx'
import { TopBar } from './components/Topbar.jsx'
import { WelcomeSec } from './components/WelcomeSec.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <TopBar/>
    <Banner/>
    <WelcomeSec/>
  </StrictMode>,
)
