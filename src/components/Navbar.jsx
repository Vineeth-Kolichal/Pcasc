import { Link, useLocation } from 'react-router-dom'
import { Settings, Bell, Shield } from 'lucide-react'
import logoImg from '../assets/logo.jpeg'

/**
 * Student Navbar - used on the registration page
 */
export function StudentNavbar() {
  return (
    <nav className="bg-white border-b border-surface-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <img src={logoImg} alt="PCASC Logo" className="w-9 h-9 rounded-full object-cover" />
          <span className="text-lg font-bold text-primary-900 tracking-tight">PCASC Munnad</span>
        </Link>
      </div>
    </nav>
  )
}

/**
 * Admin Navbar - used on the admin dashboard
 */
export function AdminNavbar() {
  const location = useLocation()

  const navLinks = [
    { label: 'Dashboard', path: '/admin-page/dashboard' },
    { label: 'Courses', path: '#' },
    { label: 'Students', path: '#' },
    { label: 'Reports', path: '/admin-page/dashboard' },
  ]

  return (
    <nav className="bg-white border-b border-surface-200 sticky top-0 z-50">
      <div className="px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-6">
          <Link to="/admin-page/dashboard" className="flex items-center gap-2.5">
            <img src={logoImg} alt="PCASC Logo" className="w-9 h-9 rounded-full object-cover" />
            <span className="text-lg font-bold text-primary-900 tracking-tight">Registrar Admin Portal</span>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <Link
                key={`${link.label}-${i}`}
                to={link.path}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  link.label === 'Reports'
                    ? 'text-primary-700 border-b-2 border-primary-600'
                    : 'text-slate-600 hover:text-primary-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <button className="p-2 text-slate-500 hover:text-primary-700 hover:bg-slate-50 rounded-lg transition-colors">
            <Bell className="w-5 h-5" />
          </button>
          <button className="p-2 text-slate-500 hover:text-primary-700 hover:bg-slate-50 rounded-lg transition-colors">
            <Settings className="w-5 h-5" />
          </button>
          <div className="w-9 h-9 rounded-full bg-primary-700 overflow-hidden flex items-center justify-center text-white text-sm font-bold shadow-sm">
            AD
          </div>
        </div>
      </div>
    </nav>
  )
}

/**
 * Admin Login Navbar - minimal top bar
 */
export function AdminLoginNavbar() {
  return (
    <nav className="bg-white border-b border-surface-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/admin-page" className="flex items-center gap-2.5">
          <img src={logoImg} alt="PCASC Logo" className="w-9 h-9 rounded-full object-cover" />
          <span className="text-lg font-bold text-primary-900 tracking-tight">Registrar Admin Portal</span>
        </Link>

        <div className="flex items-center gap-2 text-slate-500">
          <Shield className="w-4 h-4" />
          <span className="text-xs font-semibold tracking-widest uppercase">Secure Access</span>
        </div>
      </div>
    </nav>
  )
}

export default StudentNavbar
