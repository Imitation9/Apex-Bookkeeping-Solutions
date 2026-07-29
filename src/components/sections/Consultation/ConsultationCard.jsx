import Button from "../../ui/Button/Button";

export default function ConsultationCard() {
  return (
    <div className="rounded-3xl bg-white p-10 text-slate-700 shadow-2xl">

      <h3 className="text-3xl font-bold">

        Complimentary Consultation

      </h3>

      <p className="mt-6 leading-8">

        During your consultation we'll discuss your bookkeeping needs,
        review your current situation,
        and determine the services that best support your organization.

      </p>

      <ul className="mt-8 space-y-4">

        <li>✓ No obligation</li>

        <li>✓ Transparent pricing</li>

        <li>✓ Personalized recommendations</li>

        <li>✓ Professional guidance</li>

      </ul>

      <Button
        href="https://calendly.com/ryoung4696"
        className="mt-10 w-full justify-center"
      >

        Schedule Online

      </Button>

    </div>
  );
}
