import {
  CircleCheckBig,
  Handshake,
  Scale,
} from "lucide-react";

import Card from "../../UI/Card/Card";
import Reveal from "../../UI/Reveal/Reveal";

const values = [
  {
    icon: CircleCheckBig,
    title: "Accuracy",
    description:
      "Financial records are reviewed carefully because dependable reporting begins with accurate information.",
  },
  {
    icon: Scale,
    title: "Integrity",
    description:
      "Every client relationship is guided by honesty, accountability, confidentiality, and responsible stewardship.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description:
      "Responsive communication and practical support help clients build stronger financial systems over time.",
  },
];

export default function Values() {
  return (
    <div className="mt-20 border-t border-slate-200 pt-14 lg:mt-24 lg:pt-16">
      <Reveal animation="up">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-apex-gold">
            The Apex Standard
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-apex-navy sm:text-4xl">
            Financial stewardship. Practical solutions. Trusted partnership.
          </h2>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {values.map((value, index) => {
          const Icon = value.icon;

          return (
            <Reveal
              key={value.title}
              animation="up"
              delay={index * 100}
              className="h-full"
            >
              <Card
                as="article"
                accent
                className="group h-full text-center"
              >
                <div className="mx-auto inline-flex rounded-2xl bg-apex-gold/10 p-4 text-apex-gold transition duration-300 group-hover:bg-apex-gold group-hover:text-apex-navy">
                  <Icon
                    size={30}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mt-6 text-xl font-bold text-apex-navy">
                  {value.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {value.description}
                </p>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
