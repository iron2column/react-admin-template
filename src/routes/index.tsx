import { createBrowserRouter } from 'react-router-dom'
import { lazy } from 'react'
import Home from '@/pages/Home'
import About from '@/pages/About'

const NotFound = lazy(() => import('@/pages/NotFound'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

export default router