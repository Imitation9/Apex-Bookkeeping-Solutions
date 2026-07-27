export default function Badge({ children }) {
  return (
    <span
      className="
        inline-flex
        items-center
        rounded-full
        bg-apex-gold/10
        px-4
        py-2
        text-sm
        font-semibold
        text-apex-gold
      "
    >
      {children}
    </span>
  );
}
