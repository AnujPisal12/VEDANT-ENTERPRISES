import React from "react";
import PageShell from "@/components/PageShell";
import DetailPageHeader from "@/components/DetailPageHeader";
import { customers } from "@/data/customers";

const CustomersPage: React.FC = () => (
  <PageShell>
    <DetailPageHeader
      title="Our Customers"
      subtitle="Trusted by leading automotive and industrial brands across India — relationships built on delivery, quality, and long-term collaboration."
    />
    <article className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <div className="max-w-3xl space-y-6 text-lg text-muted-foreground leading-relaxed mb-12">
        <p>
          Vedant Enterprises supplies precision plastic components to a growing base of OEMs and tier
          suppliers. Our customer list includes names in construction equipment, automotive systems,
          batteries, forgings, and global automotive programs.
        </p>
        <p>
          We are proud to support <strong className="text-foreground">15+ esteemed customers</strong>{" "}
          and continue to qualify new programs as capacity and capabilities expand.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {customers.map((customer) => (
          <div
            key={customer.name}
            className="bg-card p-6 rounded-xl text-center shadow-soft border border-border"
          >
            <div className="h-16 flex items-center justify-center mb-4">
              <img
                src={customer.logo}
                alt={`${customer.name} logo`}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <h3 className="text-sm font-semibold text-muted-foreground">{customer.name}</h3>
          </div>
        ))}
      </div>
    </article>
  </PageShell>
);

export default CustomersPage;
