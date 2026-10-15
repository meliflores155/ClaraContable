import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { SiteDataProvider } from './context/SiteDataContext'
import { ROUTES } from './config/routes'

// Pages
import HomePage from './pages/main/HomePage'
import PanelLogin from './pages/panel/PanelLogin'
import PanelLayout from './ui/layouts/PanelLayout'
import PanelDashboard from './pages/panel/PanelDashboard'

export default function App() {
  return (
    <AuthProvider>
      <SiteDataProvider>
        <BrowserRouter>
          <Routes>
            {/* ─── Public ─────────────────────────────── */}
            <Route path={ROUTES.HOME} element={<HomePage />} />

            {/* ─── Admin Panel ────────────────────────── */}
            <Route path={ROUTES.PANEL_LOGIN} element={<PanelLogin />} />
            <Route path={ROUTES.PANEL} element={<PanelLayout />}>
              <Route path="dashboard" element={<PanelDashboard />} />
              {/* More panel routes will go here */}
            </Route>
          </Routes>
        </BrowserRouter>
      </SiteDataProvider>
    </AuthProvider>
  )
}
