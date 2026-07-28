import Card from "../../ui/Card/Card";

export default function ProcessStep({
  icon: Icon,
  number,
  title,
  description,
}) {
  return (
    <Card className="relative h-full">
      <div className="absolute right-8 top-8 text-5xl font-black text-slate-100">
        {number}
      </div>

      <div className="mb-8 inline-flex rounded-2xl bg-apex-gold/10 p-4">
        <Icon size={34} />
      </div>

      <h3 className="mb-4 text-2xl font-bold">
        {title}
      </h3>

      <p className="leading-8 text-slate-600">
        {description}
      </p>
    </Card>
  );
}
