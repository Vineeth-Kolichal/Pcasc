import { Routes, Route } from 'react-router-dom'
import StudentRegistration from '../pages/StudentRegistration'
import AdminLogin from '../pages/AdminLogin'
import AdminDashboard from '../pages/AdminDashboard'
import AdminLayout from '../layouts/AdminLayout'

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<StudentRegistration />} />
      <Route path="/admin-page" element={<AdminLogin />} />
      <Route
        path="/admin-page/dashboard"
        element={
          <AdminLayout>
            <AdminDashboard />
          </AdminLayout>
        }
      />
    </Routes>
  )
}
