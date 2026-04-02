import React from "react";
import PageShell from "@/components/PageShell";
import DetailPageHeader from "@/components/DetailPageHeader";
import { timelineData } from "@/data/historyTimeline";

const HistoryPage: React.FC = () => (
  <PageShell>
    <DetailPageHeader
      title="Our History & Milestones"
      subtitle="From protective caps in 2006 to expanded capacity and quality systems — the milestones that shaped Vedant Enterprises."
    />
    <article className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <p className="max-w-3xl text-lg text-muted-foreground leading-relaxed mb-12">
        Our growth reflects steady investment in plant capacity, tooling, and customer partnerships.
        Each phase below maps to real developments on the shop floor and in our customer portfolio.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className="glass-card p-8 rounded-2xl border border-border/20 shadow-glass hover:shadow-accent transition-all duration-300"
          >
            <div className="relative mb-6">
              <div className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-xl font-bold text-2xl shadow-accent border-2 border-accent/30">
                {item.year}
              </div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent rounded-full" />
            </div>
            <h2 className="text-2xl font-bold text-primary leading-tight mb-4">{item.title}</h2>
            <ul className="space-y-3">
              {item.description.map((desc, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground font-medium">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0" />
                  {desc}
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-4 border-t border-accent/20">
              <div className="w-full h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </article>
  </PageShell>
);

export default HistoryPage;
