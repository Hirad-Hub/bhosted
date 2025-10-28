import { Server, Shield, Zap, HeadphonesIcon, HardDrive, Globe } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Razendsnelle SSD",
    description: "Ervaar bliksemsnelle snelheid met onze SSD webhosting. Geen zorgen over snelheid en stabiliteit.",
  },
  {
    icon: Shield,
    title: "Gratis SSL Certificaat",
    description: "Beveilig uw website met een gratis SSL certificaat inbegrepen bij elk hostingpakket.",
  },
  {
    icon: Server,
    title: "99,9% Uptime Garantie",
    description: "Uw website blijft 24/7 online met onze betrouwbare infrastructuur en monitoring.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Expert Ondersteuning",
    description: "Krijg hulp wanneer u het nodig heeft via telefoon, e-mail, WhatsApp of live chat.",
  },
  {
    icon: Globe,
    title: "Meerdere Domeinen",
    description: "Host meerdere websites op één pakket. Koppel verschillende domeinen eenvoudig.",
  },
  {
    icon: HardDrive,
    title: "Geautomatiseerde Backups",
    description: "Wekelijkse, dagelijkse, maandelijkse en jaarlijkse backups van uw gehele account.",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Waarom Kiezen voor bHosted?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ervaar de beste webhosting met functies ontworpen voor prestaties en betrouwbaarheid
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-colors group"
            >
              <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <feature.icon className="text-primary group-hover:text-primary-foreground transition-colors" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
