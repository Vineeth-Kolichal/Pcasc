export default function Button({
  children,
  variant = 'primary',
  icon: Icon,
  iconRight: IconRight,
  onClick,
  className = '',
  type = 'button',
}) {
  const variants = {
    primary:
      'bg-primary-700 hover:bg-primary-800 text-white shadow-md shadow-primary-700/20 hover:shadow-lg hover:shadow-primary-700/30',
    ghost:
      'bg-transparent text-slate-600 hover:text-slate-800 hover:bg-slate-100',
    danger:
      'bg-red-600 hover:bg-red-700 text-white shadow-md shadow-red-600/20',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${variants[variant]} ${className}`}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {children}
      {IconRight && <IconRight className="w-4 h-4" />}
    </button>
  )
}
