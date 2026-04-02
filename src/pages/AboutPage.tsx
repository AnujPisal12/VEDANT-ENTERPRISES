import React from "react";
import { Link } from "react-router-dom";
import PageShell from "@/components/PageShell";
import DetailPageHeader from "@/components/DetailPageHeader";
import { Factory } from "lucide-react";

const AboutPage: React.FC = () => (
  <PageShell>
    <DetailPageHeader
      title="About Vedant Enterprises"
      subtitle="Precision plastic components for automotive and industrial applications — established 2006, Pune."
    />
    <article className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 max-w-3xl">
      <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
        <p>
          Established in 2006, Vedant Enterprises has been at the forefront of precision plastic
          component manufacturing, specializing in automotive and industrial applications. Our journey
          began with a vision to provide innovative solutions that meet the evolving needs of modern
          industry.
        </p>
        <p>
          With over 17 years of experience, we have developed expertise in plastic injection molding,
          serving esteemed clients across various sectors. Our commitment to quality, innovation, and
          customer satisfaction has positioned us as a trusted partner in the manufacturing ecosystem.
        </p>
        <p>
          From protective caps and machine parts to automotive components and hydraulic solutions, we
          deliver excellence through persistent teamwork, cutting-edge technology, and rigorous quality
          management systems aligned with ISO-oriented practices.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
        <div className="bg-card p-6 rounded-xl shadow-soft border border-border text-center">
          <div className="text-3xl font-bold text-primary mb-2">2006</div>
          <div className="text-sm text-muted-foreground">Established</div>
        </div>
        <div className="bg-card p-6 rounded-xl shadow-soft border border-border text-center">
          <div className="text-3xl font-bold text-accent mb-2">17+</div>
          <div className="text-sm text-muted-foreground">Years experience</div>
        </div>
        <div className="bg-card p-6 rounded-xl shadow-soft border border-border text-center">
          <div className="text-3xl font-bold text-primary mb-2">15+</div>
          <div className="text-sm text-muted-foreground">Trusted clients</div>
        </div>
      </div>

      <div className="mt-12 bg-gradient-card rounded-2xl p-8 shadow-medium border border-border">
        <h2 className="text-xl font-semibold mb-6 text-primary flex items-center gap-2">
          <Factory className="w-6 h-6" />
          Core strengths
        </h2>
        <ul className="space-y-4 text-muted-foreground">
          <li className="flex gap-3">
            <span className="text-accent font-bold">•</span>
            <span>
              <strong className="text-foreground">Precision manufacturing</strong> — advanced injection
              molding and repeatable processes for tight tolerances.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-accent font-bold">•</span>
            <span>
              <strong className="text-foreground">Quality assurance</strong> — metrology support and
              structured quality systems for consistent output.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-accent font-bold">•</span>
            <span>
              <strong className="text-foreground">Automotive & industrial</strong> — components tailored
              to OEM and tier-supply expectations.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-accent font-bold">•</span>
            <span>
              <strong className="text-foreground">Custom development</strong> — tooling and molding
              support from concept through production.
            </span>
          </li>
        </ul>
      </div>

      <p className="mt-10 text-sm text-muted-foreground">
        For capabilities by product line, visit{" "}
        <Link to="/solutions" className="text-primary font-medium hover:underline">
          Our Solutions
        </Link>
        .
      </p>
    </article>
  </PageShell>
);

export default AboutPage;
