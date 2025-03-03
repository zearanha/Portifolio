import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/home'
import Projetos from './pages/projetos'
import Tecnologias from './pages/Tecnologias'


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/projects',
        element: <Projetos />
    },
    {
        path: '/Tecnologias',
        element: <Tecnologias/>
    }
])

export default router