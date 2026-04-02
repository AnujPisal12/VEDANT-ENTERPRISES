import React from "react";
import { Link } from "react-router-dom";
import PageShell from "@/components/PageShell";
import DetailPageHeader from "@/components/DetailPageHeader";
import { MapPin, Phone, Mail, FileText, ArrowRight } from "lucide-react";

const contactBlocks = [
  {
    icon: MapPin,
    title: "Address",
    details: "Gat No. 93, Sonawane Wasti, Bhalekar Chowk, Jyotiba Nagar, Talawade, Pune – 412114",
    action: "Open in Maps",
    link: "https://maps.app.goo.gl/n6byvzdM2e4CsWRf8",
    external: true,
  },
  {
    icon: Phone,
    title: "Phone",
    details: "8975-034-567",
    action: "Call now",
    link: "tel:+918975034567",
    external: false,
  },
  {
    icon: Mail,
    title: "Email",
    details: "vedant_en@rediffmail.com",
    action: "Send email",
    link: "mailto:vedant_en@rediffmail.com",
    external: false,
  },
  {
    icon: FileText,
    title: "GSTIN",
    details: "27BAXPS7899K1Z3",
    action: null,
    link: null,
    external: false,
  },
];

const ContactPage: React.FC = () => (
  <PageShell>
    <DetailPageHeader
      title="Contact Us"
      subtitle="Discuss drawings, volumes, timelines, or visit our facility in Talawade. We respond to serious enquiries for plastic injection molding and tooling."
    />
    <article className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 max-w-3xl">
      <p className="text-lg text-muted-foreground leading-relaxed mb-10">
        For RFQs, share part drawings or photos, annual volume, material preferences, and delivery
        location. Our team will advise feasibility, tooling approach, and next steps.
      </p>

      <div className="space-y-6">
        {contactBlocks.map(({ icon: Icon, title, details, action, link, external }) => (
          <div key={title} className="p-6 bg-card rounded-xl shadow-soft border border-border">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg shrink-0">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-lg font-semibold mb-2">{title}</h2>
                <p className="text-muted-foreground mb-3 leading-relaxed">{details}</p>
                {link && action ? (
                  <a
                    href={link}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="text-primary font-medium text-sm inline-flex items-center gap-1 hover:underline"
                  >
                    <span>{action}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 rounded-xl bg-muted/50 border border-border text-muted-foreground text-sm leading-relaxed">
        <strong className="text-foreground">Managing Director:</strong> Harshal Hanmantrao Shinde — see
        also the{" "}
        <Link to="/team" className="text-primary font-medium hover:underline">
          Our Team
        </Link>{" "}
        page for a brief profile.
      </div>
    </article>
  </PageShell>
);

export default ContactPage;
