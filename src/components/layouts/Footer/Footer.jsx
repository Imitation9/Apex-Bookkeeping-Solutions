import Logo from "../Logo/Logo";
import { footerNavigation } from "../../../data/footerNavigation";

export default function Footer() {
  return (
    <footer className="bg-[#163047] text-white">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-3">
        <div>
          <Logo />

          <p className="mt-8 max-w-sm leading-8 text-slate-300">
            Accurate bookkeeping. Reliable financial reporting.
            Empowering nonprofits, small businesses, and startups to make
            confident financial decisions.
          </p>
        </div>

        <div>
          <h3 className="mb-6 text-lg font-bold">
            Company
          </h3>

          <ul className="space-y-3">
            {footerNavigation.company.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-slate-300 transition hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-6 text-lg font-bold">
            Services
          </h3>

          <ul className="space-y-3">
            {footerNavigation.services.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-slate-300 transition hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-700">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-slate-400 md:flex-row">
          <p>
            © {new Date().getFullYear()} Apex Bookkeeping Solutions, LLC. All
            rights reserved.
          </p>

          <p>
            Accurate. Reliable. Empowering Your Success.
          </p>
        </div>
      </div>
    </footer>
  );
}
