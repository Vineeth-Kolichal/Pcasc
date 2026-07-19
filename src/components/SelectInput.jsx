export default function SelectInput({
  label,
  placeholder,
  options = [],
  value,
  onChange,
  id,
}) {
  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={id} className="label-caps block">
          {label}
        </label>
      )}
      <select
        id={id}
        value={value}
        onChange={onChange}
        className="w-full h-11 bg-surface-50 border border-surface-300 rounded-lg text-sm text-slate-700 px-4 cursor-pointer hover:border-primary-300 focus:bg-white transition-all"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  )
}
