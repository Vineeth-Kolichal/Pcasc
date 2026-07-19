import { useState } from 'react'
import Card from '../components/Card'
import SelectInput from '../components/SelectInput'
import Button from '../components/Button'
import {
  Download,
  FileSpreadsheet,
  RefreshCw,
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
} from 'lucide-react'

const courseOptions = [
  'All Active Courses',
  'B.Tech Computer Science',
  'B.Tech IT',
  'B.Com',
  'BBA',
]

export default function AdminDashboard() {
  const [selectedCourse, setSelectedCourse] = useState('All Active Courses')

  return (
    <div className="p-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-primary-900 mb-2">Student's Course Data</h1>
        <p className="text-sm text-slate-500">
          Manage and export student's course data for the current semester.
        </p>
      </div>

      {/* Data Export Card */}
      <Card className="p-8 mb-8">
        {/* Export Header */}
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
            <Download className="w-6 h-6 text-primary-600" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-primary-900">Data Export</h2>
            <p className="text-sm text-slate-500 mt-0.5">
              Configure and download institutional data files.
            </p>
          </div>
        </div>

        {/* Course Selection */}
        <div className="mb-6">
          <SelectInput
            label="Course Selection"
            placeholder="All Active Courses"
            options={courseOptions}
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
            id="courseExport"
          />
        </div>

        {/* Divider */}
        <div className="border-t border-surface-200 my-6"></div>

        {/* File Info Badges */}
        <div className="mb-6">
          <div className="flex items-center gap-3 bg-surface-50 rounded-xl px-5 py-4 border border-surface-200">
            <FileSpreadsheet className="w-5 h-5 text-primary-600 flex-shrink-0" />
            <div>
              <p className="label-caps text-slate-400 mb-0.5">Format</p>
              <p className="text-sm font-semibold text-slate-800">.XLSX (Excel)</p>
            </div>
          </div>
        </div>

        {/* Export Action Row */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-slate-400 italic">Estimated file size: 2.4 MB</p>
          <Button variant="primary" icon={Download}>
            Export to Excel
          </Button>
        </div>
      </Card>


    </div>
  )
}
