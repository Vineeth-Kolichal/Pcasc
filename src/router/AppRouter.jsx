import { Routes, Route, Navigate } from 'react-router-dom'
import StudentRegistration from '../pages/StudentRegistration'
import AdminLogin from '../pages/AdminLogin'
import AdminDashboard from '../pages/AdminDashboard'
import AdminLayout from '../layouts/AdminLayout'

function ProtectedRoute({ children }) {
  const isAuthenticated = sessionStorage.getItem('isAdminAuthenticated') === 'true'
  return isAuthenticated ? children : <Navigate to="/admin-page" replace />
}

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<StudentRegistration />} />
      <Route path="/admin-page" element={<AdminLogin />} />
      <Route
        path="/admin-page/dashboard"
        element={
          <ProtectedRoute>
            <AdminLayout>
              <AdminDashboard />
            </AdminLayout>
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}
