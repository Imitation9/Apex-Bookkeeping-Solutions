import Container from "../Container/Container";

export default function Section({
  id,
  children,
  className = "",
  containerClassName = "",
}) {
  return (
    <section
      id={id}
      className={`py-24 lg:py-32 ${className}`}
    >
      <Container className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}
