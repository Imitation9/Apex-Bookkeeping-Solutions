export default function MobileMenu() {
  return (
    <button
      type="button"
      aria-label="Open navigation menu"
      className="rounded-lg p-2 transition hover:bg-slate-100 lg:hidden"
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M4 7h16M4 12h16M4 17h16" />
      </svg>
    </button>
  );
}
