export default function CompanyWiseDeployments() {
  const leftData = [
    { company: "National Bank", guards: "1300 (Uptil 12/2021)" },
    { company: "Descon A. Hakim", guards: "94" },
    { company: "Rousch P.P", guards: "80" },
    { company: "Imtiaz Stores", guards: "25" },
    { company: "Allied Schools", guards: "10" },
  ];

  const rightData = [
    { company: "Summit Cardboards", guards: "5" },
    { company: "ARY News", guards: "7" },
    { company: "Shifa International", guards: "10" },
    { company: "Daud Hercules", guards: "10" },
  ];

  return (
    <section className="py-8 sm:py-10 md:py-16 bg-gradient-to-b from-background via-background to-background/95 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Section Title with Visual Styling */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <div className="flex items-center gap-3 md:gap-4 mb-4 sm:mb-6">
            <div className="w-1 md:w-1.5 h-10 md:h-12 bg-pk-green-main rounded-full flex-shrink-0"></div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black leading-tight">
              Company Wise Deployments
            </h2>
          </div>
          <p className="text-sm md:text-lg font-bold text-muted-foreground ml-0 max-w-3xl leading-relaxed">
            Our security personnel deployed across major organizations and
            businesses
          </p>
        </div>

        {/* Two Column Table */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Left Column */}
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="bg-pk-green-main text-white px-6 md:px-8 py-3 md:py-4">
              <h3 className="text-base md:text-lg font-black">Deployments</h3>
            </div>
            <div className="divide-y divide-border">
              {leftData.map((item, i) => (
                <div
                  key={i}
                  className="px-6 md:px-8 py-2.5 md:py-3 hover:bg-accent/5 transition-colors duration-300 grid grid-cols-2 gap-4"
                >
                  <span className="text-sm md:text-base font-black text-foreground text-left">
                    {item.company}
                  </span>
                  <span className="text-sm md:text-base font-black text-foreground text-right">
                    {item.guards}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="bg-accent text-white px-6 md:px-8 py-3 md:py-4">
              <h3 className="text-base md:text-lg font-black">
                Additional Deployments
              </h3>
            </div>
            <div className="divide-y divide-border">
              {rightData.map((item, i) => (
                <div
                  key={i}
                  className="px-6 md:px-8 py-2.5 md:py-3 hover:bg-accent/5 transition-colors duration-300 grid grid-cols-2 gap-4"
                >
                  <span className="text-sm md:text-base font-black text-foreground text-left">
                    {item.company}
                  </span>
                  <span className="text-sm md:text-base font-black text-foreground text-right">
                    {item.guards}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
