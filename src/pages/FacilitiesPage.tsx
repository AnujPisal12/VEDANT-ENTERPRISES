import React from "react";
import PageShell from "@/components/PageShell";
import DetailPageHeader from "@/components/DetailPageHeader";
import { Factory, Cog, Wrench, Ruler, Thermometer, CheckCircle } from "lucide-react";

const facilities = [
  {
    title: "Manufacturing floor",
    icon: Factory,
    description:
      "Approximately 6000 sq. ft. of manufacturing space with workflow organized for injection molding, finishing, and movement of material.",
    badge: "Total floor space — 6000 Sqft",
    extra:
      "Layout supports multiple presses and auxiliary equipment while keeping inspection and packing accessible.",
  },
  {
    title: "Injection molding",
    icon: Cog,
    description:
      "Fleet of injection molding machines from smaller tonnage up to 220T, supporting a mix of part sizes and cavitation.",
    badge: "200T, 160T, 110T M/C available",
    extra:
      "Recent expansions added 110T machines and 220T capacity to serve higher-cavitation and larger-shot programs.",
  },
  {
    title: "Tool room",
    icon: Wrench,
    description:
      "In-house tool room for dies and molds — machining and maintenance to reduce downtime and support engineering changes.",
    badge: "EDM, Milling, Pentagon Drilling",
    extra:
      "Local tool support helps shorten trials and keeps production aligned with design updates.",
  },
  {
    title: "Quality & metrology",
    icon: Ruler,
    description:
      "Dedicated metrology capability including CMM for dimensional verification and ongoing process control.",
    badge: "Metrology room with CMM",
    extra:
      "Measurement discipline complements visual and functional checks on the line.",
  },
  {
    title: "Heat treatment & material prep",
    icon: Thermometer,
    description:
      "Pre-heating and temperature control to stabilize material behavior before and during processing.",
    badge: "Pre-heater & temperature control",
    extra:
      "Consistent material conditioning contributes to fewer defects and more stable dimensions.",
  },
  {
    title: "Quality assurance systems",
    icon: CheckCircle,
    description:
      "Structured quality management aligned with ISO-style practices — documentation, traceability, and corrective action as programs require.",
    badge: "ISO standards & quality systems",
    extra:
      "Systems evolve with customer audits and internal improvement initiatives.",
  },
];

const FacilitiesPage: React.FC = () => (
  <PageShell>
    <DetailPageHeader
      title="Facilities & Infrastructure"
      subtitle="Manufacturing, tooling, and quality infrastructure supporting precision plastic production in Talawade, Pune."
    />
    <article className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {facilities.map(({ title, icon: Icon, description, badge, extra }) => (
          <div
            key={title}
            className="card-hover bg-card p-8 rounded-xl h-full flex flex-col relative overflow-hidden border border-border"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-accent" />
            <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6">
              <Icon className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-xl font-semibold mb-3">{title}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4 flex-1">{description}</p>
            <p className="text-sm text-muted-foreground mb-4">{extra}</p>
            <div className="text-sm font-medium text-primary bg-primary/5 px-3 py-2 rounded-full inline-block mt-auto">
              {badge}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 grid md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
        <div className="p-6 bg-card rounded-xl border border-border">
          <div className="text-3xl font-bold text-primary mb-2">6000+</div>
          <p className="text-muted-foreground">Square feet</p>
        </div>
        <div className="p-6 bg-card rounded-xl border border-border">
          <div className="text-3xl font-bold text-accent mb-2">220T</div>
          <p className="text-muted-foreground">Max machine capacity</p>
        </div>
        <div className="p-6 bg-card rounded-xl border border-border">
          <div className="text-3xl font-bold text-yellow-500 mb-2">17+</div>
          <p className="text-muted-foreground">Years experience</p>
        </div>
      </div>
    </article>
  </PageShell>
);

export default FacilitiesPage;
