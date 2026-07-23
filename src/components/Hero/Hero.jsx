import Button from "../UI/Button";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-apex-navy to-apex-blue text-white">

      <div className="container min-h-[88vh] flex items-center">

        <div className="max-w-3xl">

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            Bookkeeping That Gives You Confidence to Grow
          </h1>

          <p className="mt-8 text-xl opacity-90 leading-8">
            Accurate bookkeeping, payroll, cleanup, and
            financial reporting that gives you the confidence
            to focus on running your business.
          </p>

          <div className="flex gap-4 mt-10">

            <Button href="#contact">
              Schedule Consultation
            </Button>

            <Button
              href="#services"
              variant="secondary"
            >
              Learn More
            </Button>

          </div>

        </div>

      </div>

    </section>
  );
}
