export default function Card({ children, className = '' }) {
  return (
    <div className={`bg-white rounded-xl border border-surface-200 shadow-sm ${className}`}>
      {children}
    </div>
  )
}
