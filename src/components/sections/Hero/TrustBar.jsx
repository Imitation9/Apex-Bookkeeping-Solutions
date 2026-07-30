import Reveal from "../../UI/Reveal/Reveal";

const trustItems = [
  {
    title: "23+ Years",
    subtitle: "Professional Accounting Experience",
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
    title: "Arkansas",
    subtitle: "Locally Owned & Operated",
  },
];

export default function TrustBar() {
  return (
    <section className="relative border-y border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-8">
        <Reveal animation="up">
          <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
            {trustItems.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-lg"
              >
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber-50 text-xl font-bold text-amber-700">
                  ✓
                </div>

                <h3 className="text-xl font-bold text-apex-navy">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
