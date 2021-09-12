import Home from '../Pages/Home'
import About from '../Pages/About'

const routes = [
    {
        path: '/',
        component: Home,
        exact: true,
    },
    {
        path: '/about',
        component: About,
        exact: true,
    },
    {
        path: '/blogs',
        component: Home,
        exact: true,
    },
    {
        path: '/projects',
        component: Home,
        exact: true,
    },
    {
        path: '/projects/:id',
        component: Home,
        exact: false,
    },
    {
        path: '/stats',
        component: Home,
        exact: true,
    },
    {
        path: '/plans',
        component: Home,
        exact: true,
    },
]

export default routes
