import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import router from './routes.jsx'
import GlobalStyle from './style/style.ts'
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle/>
    <RouterProvider router={router} />
  </StrictMode>,
)
