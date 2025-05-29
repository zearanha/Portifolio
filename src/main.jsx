import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GloblaStyle } from './styles/GlobaStyle.js'
import Home from './page/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GloblaStyle/>
    <Home />
  </StrictMode>,
)
