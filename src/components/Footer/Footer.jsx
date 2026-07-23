export default function Footer() {
  return (
    <footer className="bg-apex-navy text-white py-16">

      <div className="container grid md:grid-cols-3 gap-10">

        <div>

          <h3 className="text-xl font-bold">
            Apex Bookkeeping Solutions
          </h3>

          <p className="mt-4 opacity-80">
            Accurate bookkeeping, payroll, financial reporting,
            and QuickBooks expertise for Arkansas businesses.
          </p>

        </div>

        <div>

          <h4 className="font-semibold mb-3">
            Services
          </h4>

          <ul className="space-y-2 opacity-80">

            <li>Bookkeeping</li>

            <li>Payroll</li>

            <li>Cleanup</li>

            <li>Financial Reporting</li>

          </ul>

        </div>

        <div>

          <h4 className="font-semibold mb-3">
            Contact
          </h4>

          <p>North Little Rock, Arkansas</p>

          <p className="mt-2">
            501.366.8940
          </p>

        </div>

      </div>

    </footer>
  );
}
