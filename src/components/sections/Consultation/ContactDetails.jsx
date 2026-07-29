export default function ContactDetails() {
  return (
    <div className="flex flex-col justify-center">

      <h3 className="text-3xl font-bold">

        Why Schedule?

      </h3>

      <p className="mt-6 text-lg leading-9 text-slate-200">

        Every organization has unique bookkeeping needs.
        Our consultation provides an opportunity to understand your goals,
        answer your questions,
        and recommend the bookkeeping services that best fit your organization.

      </p>

      <div className="mt-10 space-y-6">

        <div>

          <strong>Response Time</strong>

          <p className="text-slate-300">

            We strive to respond to every inquiry within one business day.

          </p>

        </div>

        <div>

          <strong>Service Area</strong>

          <p className="text-slate-300">

            Serving clients throughout Arkansas and remotely across the United States.

          </p>

        </div>

        <div>

          <strong>Primary Focus</strong>

          <p className="text-slate-300">

            Nonprofit organizations, small businesses, and startups.

          </p>

        </div>

      </div>

    </div>
  );
}
