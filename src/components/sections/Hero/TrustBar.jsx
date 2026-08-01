import Reveal from "../../UI/Reveal/Reveal";

const trustItems = [
  {
    title: "23+ Years",
    subtitle: "Accounting & Financial Leadership",
  },
  {
    title: "QuickBooks",
    subtitle: "Advanced ProAdvisor",
  },
  {
    title: "Nonprofits",
    subtitle: "Primary Area of Focus",
  },
  {
    title: "Arkansas Based",
    subtitle: "Locally Owned & Operated",
  },
];

export default function TrustBar() {
  return (
    <section
      className="relative border-y border-slate-200 bg-white"
      aria-label="Apex credentials and areas of expertise"
    >
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-8">
        <Reveal animation="up">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {trustItems.map((item) => (
              <article
                key={item.title}
                className="group flex min-h-[210px] flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white px-5 py-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-apex-gold/60 hover:shadow-lg sm:px-6"
              >
                <div
                  className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-apex-gold/10 text-lg font-bold text-apex-gold-dark transition-transform duration-300 group-hover:scale-105 group-hover:bg-apex-gold group-hover:text-apex-navy"
                  aria-hidden="true"
                >
                  ✓
                </div>

                <p className="whitespace-nowrap text-2xl font-extrabold leading-tight tracking-tight text-apex-navy xl:text-[1.7rem]">
                  {item.title}
                </p>

                <p className="mt-3 max-w-[15rem] text-sm font-medium leading-6 text-slate-600">
                  {item.subtitle}
                </p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
