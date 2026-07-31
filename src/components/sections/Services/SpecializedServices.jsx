import Reveal from "../../UI/Reveal/Reveal";

import { specializedServiceGroups } from "./specializedServices";

const panelTones = {
  navy: {
    panel:
      "border-slate-800 bg-apex-navy text-white shadow-2xl shadow-slate-900/15",
    eyebrow: "text-apex-gold-light",
    title: "text-white",
    description: "text-slate-300",
    icon: "bg-white/10 text-apex-gold-light",
    item: "border-white/10 bg-white/5",
    itemIcon: "bg-white/10 text-apex-gold-light",
    itemTitle: "text-white",
    itemDescription: "text-slate-300",
  },
  gold: {
    panel:
      "border-amber-200 bg-gradient-to-br from-amber-50 to-white text-apex-navy shadow-xl shadow-amber-900/5",
    eyebrow: "text-amber-800",
    title: "text-apex-navy",
    description: "text-slate-600",
    icon: "bg-apex-gold text-apex-navy",
    item: "border-amber-200/70 bg-white/70",
    itemIcon: "bg-amber-100 text-amber-800",
    itemTitle: "text-apex-navy",
    itemDescription: "text-slate-600",
  },
};

export default function SpecializedServices() {
  return (
    <div className="mt-24">
      <Reveal animation="up">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-apex-gold">
            Specialized Support
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-apex-navy sm:text-4xl lg:text-5xl">
            Different organizations require different financial systems
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Apex adapts its bookkeeping and reporting approach to the unique
            responsibilities, priorities, and decisions facing each client.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-8 xl:grid-cols-2">
        {specializedServiceGroups.map((group, groupIndex) => {
          const Icon = group.icon;
          const tone = panelTones[group.tone] ?? panelTones.navy;

          return (
            <Reveal
              key={group.title}
              animation={groupIndex === 0 ? "left" : "right"}
              delay={groupIndex * 100}
              className="h-full"
            >
              <article
                className={[
                  "h-full overflow-hidden rounded-3xl border p-6 sm:p-8 lg:p-10",
                  tone.panel,
                ].join(" ")}
              >
                <div
                  className={[
                    "inline-flex rounded-2xl p-4",
                    tone.icon,
                  ].join(" ")}
                >
                  <Icon
                    size={34}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </div>

                <p
                  className={[
                    "mt-6 text-sm font-bold uppercase tracking-[0.2em]",
                    tone.eyebrow,
                  ].join(" ")}
                >
                  {group.eyebrow}
                </p>

                <h3
                  className={[
                    "mt-3 text-3xl font-bold tracking-tight",
                    tone.title,
                  ].join(" ")}
                >
                  {group.title}
                </h3>

                <p
                  className={[
                    "mt-5 leading-8",
                    tone.description,
                  ].join(" ")}
                >
                  {group.description}
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {group.items.map((item) => {
                    const ItemIcon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className={[
                          "rounded-2xl border p-5",
                          tone.item,
                        ].join(" ")}
                      >
                        <div
                          className={[
                            "inline-flex rounded-xl p-2.5",
                            tone.itemIcon,
                          ].join(" ")}
                        >
                          <ItemIcon
                            size={22}
                            strokeWidth={1.8}
                            aria-hidden="true"
                          />
                        </div>

                        <h4
                          className={[
                            "mt-4 text-base font-bold",
                            tone.itemTitle,
                          ].join(" ")}
                        >
                          {item.title}
                        </h4>

                        <p
                          className={[
                            "mt-2 text-sm leading-6",
                            tone.itemDescription,
                          ].join(" ")}
                        >
                          {item.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal animation="up" delay={180}>
        <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 px-6 py-7 text-center sm:px-10">
          <p className="text-lg font-semibold text-apex-navy">
            Every engagement begins with a clearly defined scope of services.
          </p>

          <p className="mx-auto mt-2 max-w-3xl leading-7 text-slate-600">
            Your engagement agreement documents the work Apex will provide,
            the responsibilities of each party, and the agreed pricing before
            services begin.
          </p>

          <a
            href="#consultation"
            className="mt-5 inline-flex font-bold text-apex-blue underline decoration-apex-gold decoration-2 underline-offset-4 transition hover:text-apex-navy"
          >
            Discuss your bookkeeping needs
          </a>
        </div>
      </Reveal>
    </div>
  );
}
