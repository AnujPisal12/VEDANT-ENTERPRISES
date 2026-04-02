import React from "react";

type DetailPageHeaderProps = {
  title: string;
  subtitle?: string;
};

const DetailPageHeader: React.FC<DetailPageHeaderProps> = ({ title, subtitle }) => (
  <header className="border-b border-border/30 bg-muted/40">
    <div className="container mx-auto px-4 sm:px-6 py-10 pt-24 sm:pt-28">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient-professional">
        {title}
      </h1>
      {subtitle ? (
        <p className="text-base sm:text-lg text-muted-foreground mt-3 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      ) : null}
      <div className="w-24 h-1 bg-accent rounded-full mt-6" />
    </div>
  </header>
);

export default DetailPageHeader;
