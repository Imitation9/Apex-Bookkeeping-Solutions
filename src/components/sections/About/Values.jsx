import Card from "../../ui/Card/Card";

const values = [
  {
    title: "Accuracy",
    description:
      "Reliable financial records create confident decisions.",
  },
  {
    title: "Integrity",
    description:
      "Every client relationship is built on honesty and accountability.",
  },
  {
    title: "Service",
    description:
      "Responsive communication and dependable support every step of the way.",
  },
];

export default function Values() {
  return (
    <div className="mt-20 grid gap-8 md:grid-cols-3">

      {values.map((value) => (
        <Card
          key={value.title}
          className="text-center"
        >

          <h3 className="mb-4 text-2xl font-semibold">

            {value.title}

          </h3>

          <p className="text-slate-600 leading-7">

            {value.description}

          </p>

        </Card>
      ))}

    </div>
  );
}
