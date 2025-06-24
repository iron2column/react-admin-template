import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/index.css'
import App from './App'

import { getPreference } from '@/lib/db/modules/preferences'

const syncThemeEarly = async () => {
  const theme = await getPreference('themeMode')
  if (theme === 'dark') {
    document.documentElement.classList.add('dark')
  }
}
await syncThemeEarly()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
