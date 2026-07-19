import { StudentNavbar } from '../components/Navbar'
import { StudentFooter } from '../components/Footer'
import Sidebar from '../components/Sidebar'

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-surface-100">
      <StudentNavbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 flex flex-col">
          <div className="flex-1">
            {children}
          </div>
          <StudentFooter />
        </main>
      </div>
    </div>
  )
}
