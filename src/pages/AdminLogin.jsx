import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { StudentNavbar } from '../components/Navbar'
import { StudentFooter } from '../components/Footer'
import Card from '../components/Card'
import FormInput from '../components/FormInput'
import Button from '../components/Button'
import { ShieldCheck, Landmark, Lock, Eye, EyeOff, CheckSquare } from 'lucide-react'

export default function AdminLogin() {
  const navigate = useNavigate()
  const [userId, setUserId] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault()
    if (userId === 'admin' && password === 'Admin@123') {
      navigate('/admin-page/dashboard')
    } else {
      alert('Invalid User ID or Password')
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-surface-100">
      <StudentNavbar />

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6 py-16">
        <Card className="w-full max-w-md p-10">
          {/* Shield Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-14 h-14 bg-primary-600 rounded-2xl flex items-center justify-center shadow-lg shadow-primary-600/30">
              <ShieldCheck className="w-7 h-7 text-white" />
            </div>
          </div>

          {/* Heading */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-extrabold text-primary-900 mb-2">Login to Admin</h1>
            <p className="text-sm text-slate-500">
              Access the centralized registrar management system.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            {/* User ID */}
            <FormInput
              label="User ID"
              placeholder="Enter admin ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              icon={Landmark}
              id="adminId"
            />

            {/* Password */}
            <div>
              <div className="mb-2">
                <span className="label-caps">Password</span>
              </div>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                  <Lock className="w-[18px] h-[18px]" />
                </div>
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full h-11 bg-surface-50 border border-surface-300 rounded-lg text-sm text-slate-700 placeholder:text-slate-400 focus:bg-white transition-all pl-10 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-[18px] h-[18px]" />
                  ) : (
                    <Eye className="w-[18px] h-[18px]" />
                  )}
                </button>
              </div>
            </div>



            {/* Submit Button */}
            <Button
              type="submit"
              variant="primary"
              icon={ShieldCheck}
              className="w-full py-3"
            >
              Secure Login
            </Button>
          </form>


        </Card>
      </main>

      <StudentFooter />
    </div>
  )
}
