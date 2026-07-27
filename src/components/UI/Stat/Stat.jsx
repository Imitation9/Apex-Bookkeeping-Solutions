export default function Stat({
  value,
  label,
}) {
  return (
    <div>
      <h3 className="text-5xl font-bold text-apex-navy">
        {value}
      </h3>

      <p className="mt-2 text-slate-600">
        {label}
      </p>
    </div>
  );
}
