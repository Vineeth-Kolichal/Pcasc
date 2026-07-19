import { LogOut } from 'lucide-react'

export default function Sidebar() {
  return (
    <aside className="w-56 bg-white border-r border-surface-200 flex flex-col min-h-[calc(100vh-4rem)]">

      <div className="flex-1"></div>

      {/* Bottom Actions */}
      <div className="px-3 pb-4 space-y-1">
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-red-600 transition-colors">
          <LogOut className="w-[18px] h-[18px]" />
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  )
}
