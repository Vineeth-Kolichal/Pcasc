import { Link } from 'react-router-dom'
import logoImg from '../assets/logo.jpeg'

/**
 * Student Footer - used on the registration page
 */
export function StudentFooter() {
  return (
    <footer className="bg-white border-t border-surface-200 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo & Copyright */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <img src={logoImg} alt="PCASC Logo" className="w-7 h-7 rounded-full object-cover" />
            <span className="text-sm font-bold text-primary-900">PCASC Munnad</span>
          </div>
          <span className="text-xs text-slate-400 font-mono">
            made with ❤️ by{' '}
            <a
              href="https://www.instagram.com/vineeth_narayani_chandran/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 transition-colors"
            >
              Vineeth Chandran
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}

/**
 * Admin Footer - used on admin pages
 */
export function AdminFooter() {
  const links = ['Privacy Policy', 'Security Standards', 'Compliance', 'Contact IT']

  return (
    <footer className="bg-white border-t border-surface-200 mt-auto">
      <div className="px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-xs text-slate-400 font-mono">
          © 2024 Central University Academic Systems. Secure Administrator Access Only.
        </span>
        <div className="flex items-center gap-5">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="text-xs text-slate-500 hover:text-primary-600 transition-colors font-mono"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

/**
 * Admin Login Footer - minimal footer
 */
export function AdminLoginFooter() {
  return (
    <footer className="bg-white border-t border-surface-200 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-xs text-slate-400 font-mono">
          © 2024 Central University Academic Systems. Secure Administrator Access Only.
        </span>
        <div className="flex items-center gap-5">
          <a href="#" className="text-xs text-slate-500 hover:text-primary-600 transition-colors font-mono">
            Privacy Policy
          </a>
          <a href="#" className="text-xs text-slate-500 hover:text-primary-600 transition-colors font-mono">
            Security Standards
          </a>
        </div>
      </div>
    </footer>
  )
}

export default StudentFooter
