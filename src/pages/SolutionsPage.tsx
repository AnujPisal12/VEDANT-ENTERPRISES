import React from "react";
import PageShell from "@/components/PageShell";
import DetailPageHeader from "@/components/DetailPageHeader";
import { Shield, Wrench, Car, Cog, Droplets, Settings } from "lucide-react";

const solutions = [
  {
    title: "Protective cap solutions",
    icon: Shield,
    summary:
      "High-quality protective caps for industrial applications — durability, precision fit, and material grades matched to end use.",
    details: [
      "Suited to sealing, finishing, and protection in assembly lines.",
      "Support for batch and repeat orders with stable tooling.",
    ],
  },
  {
    title: "Handle & knob solutions",
    icon: Wrench,
    summary:
      "Ergonomic handles and knobs for automotive and machinery — grip, durability, and surface finish aligned to OEM expectations.",
    details: [
      "Design support for ergonomics and mounting interfaces.",
      "Materials chosen for wear resistance and appearance.",
    ],
  },
  {
    title: "Automotive components",
    icon: Car,
    summary:
      "Precision-engineered parts including dashboard-related and interior elements, produced with process control suitable for automotive supply chains.",
    details: [
      "Focus on repeatability and inspection-friendly geometry.",
      "Scalable volumes as programs mature.",
    ],
  },
  {
    title: "Machine parts",
    icon: Cog,
    summary:
      "Custom machine parts such as door handles, cable ties, and gear knobs for industrial equipment — practical geometry and reliable performance.",
    details: [
      "Works with your drawings or samples for feasibility.",
      "In-house tool room supports iteration and maintenance.",
    ],
  },
  {
    title: "Hydraulic solutions",
    icon: Droplets,
    summary:
      "Hydraulic hose and metal pipe clamping solutions across sizes — including developments such as hydraulic pipe clamps from our expansion phases.",
    details: [
      "Designed for clamping forces and environmental exposure typical in fluid systems.",
      "Discuss pressure, temperature, and media with our team for material selection.",
    ],
  },
  {
    title: "Custom molding",
    icon: Settings,
    summary:
      "Tailored injection molding to your specifications — from design assistance through trial shots and production ramp-up.",
    details: [
      "New product introduction (NPI) style engagement.",
      "Collaboration with your quality and logistics requirements.",
    ],
  },
];

const SolutionsPage: React.FC = () => (
  <PageShell>
    <DetailPageHeader
      title="Our Solutions"
      subtitle="Comprehensive plastic molding capabilities — the same lines featured on our home page, with more context for sourcing and design discussions."
    />
    <article className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {solutions.map(({ title, icon: Icon, summary, details }) => (
          <div
            key={title}
            className="card-hover bg-card p-8 rounded-xl border border-border relative overflow-hidden h-full flex flex-col"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-accent" />
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <Icon className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-xl font-semibold mb-3">{title}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4 flex-1">{summary}</p>
            <ul className="space-y-2 text-sm text-muted-foreground border-t border-border/60 pt-4">
              {details.map((d) => (
                <li key={d} className="flex gap-2">
                  <span className="text-accent shrink-0">•</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </article>
  </PageShell>
);

export default SolutionsPage;
