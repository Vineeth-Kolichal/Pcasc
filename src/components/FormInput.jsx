export default function FormInput({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  icon: Icon,
  id,
  rightElement,
}) {
  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={id} className="label-caps block">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
            <Icon className="w-[18px] h-[18px]" />
          </div>
        )}
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full h-11 bg-surface-50 border border-surface-300 rounded-lg text-sm text-slate-700 placeholder:text-slate-400 focus:bg-white transition-all ${
            Icon ? 'pl-10 pr-4' : 'px-4'
          } ${rightElement ? 'pr-10' : ''}`}
        />
        {rightElement && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            {rightElement}
          </div>
        )}
      </div>
    </div>
  )
}
