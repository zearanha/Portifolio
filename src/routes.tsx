import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/home'
import Projetos from './pages/projetos'
import Tecnologias from './pages/tecnologias'
import NotFound from './pages/notFound'


const router = createBrowserRouter([
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/projects',
        element: <Projetos />
    },
    {
        path: '/Tecnologias',
        element: <Tecnologias/>
    },
    {
        path: '*',
        element: <NotFound/>
    }
])

export default router