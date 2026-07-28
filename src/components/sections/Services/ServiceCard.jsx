import Card from "../../ui/Card/Card";

export default function ServiceCard({
  icon: Icon,
  title,
  description,
}) {
  return (
    <Card className="group h-full">

      <div className="mb-6 inline-flex rounded-2xl bg-apex-gold/10 p-4 transition duration-300 group-hover:bg-apex-gold group-hover:text-white">

        <Icon size={34} />

      </div>

      <h3 className="mb-4 text-2xl font-semibold">

        {title}

      </h3>

      <p className="leading-8 text-slate-600">

        {description}

      </p>

    </Card>
  );
}
