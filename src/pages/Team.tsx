import React from "react";
import { Mail } from "lucide-react";
import PageShell from "@/components/PageShell";
import DetailPageHeader from "@/components/DetailPageHeader";
import harshalImg from "@/assets/harshal.jpeg.jpeg";

const Team: React.FC = () => (
  <PageShell>
    <DetailPageHeader
      title="Our Team"
      subtitle="The people behind Vedant Enterprises — leadership and contact for your enquiries."
    />
    <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 flex justify-center">
      <div className="bg-card rounded-2xl shadow-medium border border-border p-10 text-center max-w-sm w-full">
        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 border-4 border-primary/20 shadow-medium">
          <img src={harshalImg} alt="Harshal Hanmantrao Shinde" className="w-full h-full object-cover" />
        </div>
        <h2 className="text-2xl font-bold text-primary mb-1">Harshal Hanmantrao Shinde</h2>
        <p className="text-accent font-semibold text-lg mb-6">Managing Director</p>
        <div className="w-12 h-0.5 bg-accent mx-auto mb-6" />
        <a
          href="mailto:vedant_en@rediffmail.com"
          className="inline-flex items-center gap-2 text-muted-foreground text-sm hover:text-primary transition-colors"
        >
          <Mail className="w-4 h-4" />
          <span>vedant_en@rediffmail.com</span>
        </a>
      </div>
    </div>
  </PageShell>
);

export default Team;
