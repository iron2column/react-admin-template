import { createBrowserRouter } from 'react-router-dom'
import { lazy } from 'react'
import RootLayout from '@/layouts/RootLayout'
import Dashboard from '@/pages/Dashboard'

const NotFound = lazy(() => import('@/pages/NotFound'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'login', element: <div>TODO:login</div> },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

export default router
