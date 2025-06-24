import { createBrowserRouter } from 'react-router-dom'
import { lazy } from 'react'
import RootLayout from '@/layouts/RootLayout'
import Dashboard from '@/pages/Dashboard'
import LoginLayout from '@/layouts/LoginLayout'
import Login from '@/pages/Login'
const SettingsLayout = lazy(() => import('@/layouts/SettingsLayout'))

const NotFound = lazy(() => import('@/pages/NotFound'))
const Error = lazy(() => import('@/pages/Error'))
const Users = lazy(() => import('@/pages/Users'))
const Profile = lazy(() => import('@/pages/Profile'))
const Security = lazy(() => import('@/pages/Security'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, path: 'dashboard', element: <Dashboard /> },
      { path: 'users', element: <Users /> },
      {
        path: 'settings',
        element: <SettingsLayout />,
        children: [
          { path: 'profile', element: <Profile /> },
          { path: 'security', element: <Security /> },
        ],
      },
    ],
  },
  {
    path: '/login',
    element: (
      <LoginLayout>
        <Login />
      </LoginLayout>
    ),
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

export default router
