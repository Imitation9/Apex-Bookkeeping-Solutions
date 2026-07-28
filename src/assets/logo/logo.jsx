import logo from "../../../assets/logo/apex-logo.png";

export default function Logo() {
  return (
    <a
      href="/"
      aria-label="Apex Bookkeeping Solutions"
      className="flex items-center"
    >
      <img
        src={logo}
        alt="Apex Bookkeeping Solutions"
        className="h-14 w-auto transition-transform duration-300 hover:scale-105"
      />
    </a>
  );
}
