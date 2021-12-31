import Home from '../Pages/Home'
import About from '../Pages/About'
import Blogs from '../Pages/Blogs'
import Projects from '../Pages/Projects'
import SitePlans from '../Pages/SitePlans'
import Stats from '../Pages/Stats'

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
        component: Blogs,
        exact: true,
    },
    {
        path: '/projects',
        component: Projects,
        exact: true,
    },
    {
        path: '/projects/:id',
        component: Home,
        exact: false,
    },
    {
        path: '/stats',
        component: Stats,
        exact: true,
    },
    {
        path: '/plans',
        component: SitePlans,
        exact: true,
    },
]

export default routes
