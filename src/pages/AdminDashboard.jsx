import { useState } from 'react'
import Card from '../components/Card'
import SelectInput from '../components/SelectInput'
import Button from '../components/Button'
import {
  Download,
  FileSpreadsheet,
} from 'lucide-react'
import dropdownData from '../../dropdown_data.json'
import { db } from '../firebase'
import { collection, query, where, getDocs } from 'firebase/firestore'
import XLSX from 'xlsx-js-style'

const categories = ['MDC', 'Minor 1', 'Minor 2']

const mdcOptions = Array.from(
  new Set(dropdownData.flatMap((item) => item.mdc || []))
)
const minor1Options = Array.from(
  new Set(dropdownData.flatMap((item) => item.minor1 || []))
)
const minor2Options = Array.from(
  new Set(dropdownData.flatMap((item) => item.minor2 || []))
)

const categoryFieldMap = {
  MDC: 'mdcPaper',
  'Minor 1': 'minor1',
  'Minor 2': 'minor2',
}

export default function AdminDashboard() {
  const [selectedCategory, setSelectedCategory] = useState('MDC')
  const [selectedSubject, setSelectedSubject] = useState('')
  const [isExporting, setIsExporting] = useState(false)

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value)
    setSelectedSubject('')
  }

  const getSubjectOptions = () => {
    if (selectedCategory === 'MDC') return mdcOptions
    if (selectedCategory === 'Minor 1') return minor1Options
    if (selectedCategory === 'Minor 2') return minor2Options
    return []
  }

  const handleExport = async () => {
    if (!selectedSubject) {
      alert('Please select a subject first.')
      return
    }
    setIsExporting(true)
    try {
      const studentsRef = collection(db, 'students')
      const field = categoryFieldMap[selectedCategory]
      const q = query(studentsRef, where(field, '==', selectedSubject))

      const querySnapshot = await getDocs(q)
      if (querySnapshot.empty) {
        alert('No registered students found for the selected subject.')
        setIsExporting(false)
        return
      }

      const data = querySnapshot.docs.map((doc) => {
        const docData = doc.data()
        let registeredAtStr = ''
        if (docData.registeredAt) {
          if (typeof docData.registeredAt.toDate === 'function') {
            registeredAtStr = docData.registeredAt.toDate().toLocaleString()
          } else {
            registeredAtStr = new Date(docData.registeredAt).toLocaleString()
          }
        }
        return {
          FullName: docData.fullName || '',
          Phone: docData.phone || '',
          Program: docData.program || '',
          MdcPaper: docData.mdcPaper || '',
          Minor1: docData.minor1 || '',
          Minor2: docData.minor2 || '',
          RegisteredAt: registeredAtStr,
        }
      })

      const worksheet = XLSX.utils.json_to_sheet(data)

      // Make the header titles bold
      const range = XLSX.utils.decode_range(worksheet['!ref'])
      for (let C = range.s.c; C <= range.e.c; ++C) {
        const cellAddress = XLSX.utils.encode_cell({ r: 0, c: C })
        if (worksheet[cellAddress]) {
          worksheet[cellAddress].s = {
            font: { bold: true },
          }
        }
      }

      const workbook = XLSX.utils.book_new()
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Students')
      const safeSubject = selectedSubject.replace(/\s+/g, '_')
      const safeCategory = selectedCategory.replace(/\s+/g, '_')
      XLSX.writeFile(
        workbook,
        `student_selections_${safeCategory.toLowerCase()}_${safeSubject}.xlsx`
      )
    } catch (error) {
      console.error('Export failed:', error)
      alert('An error occurred while exporting the data. Please try again.')
    } finally {
      setIsExporting(false)
    }
  }

  return (
    <div className="p-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-primary-900 mb-2">
          Student's Course Data
        </h1>
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

        {/* Category & Subject Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <SelectInput
            label="Category Selection"
            placeholder="Select Category"
            options={categories}
            value={selectedCategory}
            onChange={handleCategoryChange}
            id="categoryExport"
          />
          <SelectInput
            label="Subject Selection"
            placeholder="Select Subject"
            options={getSubjectOptions()}
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            id="subjectExport"
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
          <p className="text-sm text-slate-400 italic">
            Exports live student records directly from Firestore
          </p>
          <Button
            variant="primary"
            icon={Download}
            onClick={handleExport}
            disabled={isExporting}
          >
            {isExporting ? 'Exporting...' : 'Export to Excel'}
          </Button>
        </div>
      </Card>
    </div>
  )
}
