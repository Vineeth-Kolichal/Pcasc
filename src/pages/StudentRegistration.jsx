import { useState } from 'react'
import { db } from '../firebase'
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore'
import { StudentNavbar } from '../components/Navbar'
import { StudentFooter } from '../components/Footer'
import Card from '../components/Card'
import FormInput from '../components/FormInput'
import SelectInput from '../components/SelectInput'
import Button from '../components/Button'
import collegeGateImg from '../assets/college-gate.avif'
import {
  User,
  BookOpen,
  Info,
  Clock,
  X,
  ArrowRight,
} from 'lucide-react'
import dropdownData from '../../dropdown_data.json'

const programs = dropdownData.flatMap(item => item['sub-course'] || [])

export default function StudentRegistration() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    program: '',
    mdcPaper: '',
    minor1: '',
    minor2: '',
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (field) => (e) => {
    if (field === 'program') {
      setFormData((prev) => ({
        ...prev,
        [field]: e.target.value,
        mdcPaper: '',
        minor1: '',
        minor2: '',
      }))
    } else {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }))
    }
  }

  const selectedCourseGroup = dropdownData.find(item => (item['sub-course'] || []).includes(formData.program))?.course

  const mdcPapers = dropdownData
    .filter(item => item.course !== selectedCourseGroup)
    .flatMap(item => item.mdc || [])

  const minor1Options = dropdownData
    .filter(item => item.course !== selectedCourseGroup)
    .flatMap(item => item.minor1 || [])

  const minor2Options = dropdownData
    .filter(item => item.course !== selectedCourseGroup)
    .flatMap(item => item.minor2 || [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { fullName, phone, program, mdcPaper, minor1, minor2 } = formData
    if (!fullName || !phone || !program || !mdcPaper || !minor1 || !minor2) {
      alert("Please fill and select all fields before submitting.")
      return
    }

    setIsLoading(true)
    try {
      const studentsRef = collection(db, "students")
      const q = query(studentsRef, where("phone", "==", phone))
      const querySnapshot = await getDocs(q)

      if (!querySnapshot.empty) {
        alert("A registration with this phone number already exists.")
        setIsLoading(false)
        return
      }

      await addDoc(studentsRef, {
        fullName,
        phone,
        program,
        mdcPaper,
        minor1,
        minor2,
        registeredAt: new Date()
      })

      alert("Registration successful!")
      handleCancel()
    } catch (error) {
      console.error("Error adding document: ", error)
      alert("An error occurred during registration. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleCancel = () => {
    setFormData({
      fullName: '',
      phone: '',
      program: '',
      mdcPaper: '',
      minor1: '',
      minor2: '',
    })
  }

  return (
    <div className="min-h-screen flex flex-col bg-surface-100">
      <StudentNavbar />

      {/* Main Content */}
      <main className="flex-1 py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* ── Left Info Panel ── */}
            <div className="lg:col-span-4">
              <Card className="p-8 mb-6">
                <h1 className="text-3xl font-extrabold text-primary-900 leading-tight mb-4">
                  Academic<br />Registration
                </h1>
                <p className="text-sm text-slate-500 leading-relaxed mb-8">
                  Complete your MDC and Minor course registration. Please verify your subject selections carefully before submission to avoid any academic discrepancies.
                </p>

                {/* Info Badges */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Info className="w-4 h-4 text-primary-600" />
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Prerequisites are automatically validated upon submission.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Campus Image */}
              <Card className="overflow-hidden">
                <div className="relative">
                  <img
                    src={collegeGateImg}
                    alt="PCASC Munnad Campus"
                    className="w-full h-52 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-xs font-medium font-mono opacity-90">
                      Course Selection Form | PCASC Munnad
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* ── Right Form Panel ── */}
            <div className="lg:col-span-8">
              <Card className="p-8">
                <form onSubmit={handleSubmit}>
                  {/* Student Information Section */}
                  <div className="flex items-center gap-3 mb-6">
                    <User className="w-5 h-5 text-primary-700" />
                    <h2 className="text-lg font-bold text-primary-900 tracking-wide uppercase">
                      Student Information
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                    <FormInput
                      label="Full Name"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={handleChange('fullName')}
                      id="fullName"
                    />
                    <FormInput
                      label="Phone Number"
                      placeholder="Enter your Phone number"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange('phone')}
                      id="phone"
                    />
                  </div>

                  {/* Course Selection Section */}
                  <div className="flex items-center gap-3 mb-6">
                    <BookOpen className="w-5 h-5 text-primary-700" />
                    <h2 className="text-lg font-bold text-primary-900 tracking-wide uppercase">
                      Course Selection
                    </h2>
                  </div>

                  {/* Primary Program */}
                  <div className="border-l-4 border-primary-600 pl-6 py-1 mb-8 bg-surface-50 rounded-r-lg p-6">
                    <SelectInput
                      label="Department"
                      placeholder="Select department..."
                      options={programs}
                      value={formData.program}
                      onChange={handleChange('program')}
                      id="program"
                    />
                  </div>

                  {/* MDC / Minor Row */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <SelectInput
                      label="MDC Paper"
                      placeholder="Select Paper"
                      options={mdcPapers}
                      value={formData.mdcPaper}
                      onChange={handleChange('mdcPaper')}
                      id="mdcPaper"
                    />
                    <SelectInput
                      label="Minor 1"
                      placeholder="Choose Minor 1"
                      options={minor1Options}
                      value={formData.minor1}
                      onChange={handleChange('minor1')}
                      id="minor1"
                    />
                    <SelectInput
                      label="Minor 2"
                      placeholder="Choose Minor 2"
                      options={minor2Options}
                      value={formData.minor2}
                      onChange={handleChange('minor2')}
                      id="minor2"
                    />
                  </div>

                  {/* Divider */}
                  <div className="border-t border-surface-200 my-6"></div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-end">
                    <Button
                      variant="primary"
                      iconRight={ArrowRight}
                      type="submit"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Submitting...' : 'Submit Registration'}
                    </Button>
                  </div>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <StudentFooter />
    </div>
  )
}
