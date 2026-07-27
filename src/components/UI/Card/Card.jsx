export default function Card({
  children,
  className = "",
}) {
  return (
    <div
      className={`
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-8
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
        ${className}
      `}
    >
      {children}
    </div>
  );
}
