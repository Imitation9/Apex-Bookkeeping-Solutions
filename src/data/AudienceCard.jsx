import Card from "../../ui/Card/Card";
import Badge from "../../ui/Badge/Badge";

export default function AudienceCard({
  icon: Icon,
  title,
  badge,
  description,
  bullets,
}) {
  return (
    <Card className="flex h-full flex-col">
      <div className="mb-6 flex items-center justify-between">
        <div className="rounded-2xl bg-apex-gold/10 p-4">
          <Icon size={34} />
        </div>

        <Badge>{badge}</Badge>
      </div>

      <h3 className="mb-4 text-2xl font-bold">
        {title}
      </h3>

      <p className="mb-8 leading-8 text-slate-600">
        {description}
      </p>

      <ul className="mt-auto space-y-3">
        {bullets.map((item) => (
          <li
            key={item}
            className="flex items-center gap-3"
          >
            <span className="h-2 w-2 rounded-full bg-apex-gold" />

            {item}
          </li>
        ))}
      </ul>
    </Card>
  );
}
