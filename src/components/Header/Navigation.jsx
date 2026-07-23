import Button from "../UI/Button";

export default function Navigation() {
  return (
    <>
      <a
        href="/"
        className="text-2xl font-bold text-apex-navy"
      >
        APEX
      </a>

      <nav className="hidden lg:flex gap-8 items-center">

        <a href="#services">Services</a>

        <a href="#about">About</a>

        <a href="#industries">Industries</a>

        <a href="#contact">Contact</a>

        <Button href="#contact">
          Free Consultation
        </Button>

      </nav>
    </>
  );
}
