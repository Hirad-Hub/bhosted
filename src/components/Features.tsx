import { Server, Shield, Zap, HeadphonesIcon, HardDrive, Globe } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast SSD",
    description: "Experience blazing speed with our SSD web hosting. No worries about speed and stability.",
  },
  {
    icon: Shield,
    title: "Free SSL Certificate",
    description: "Secure your website with a free SSL certificate included with every hosting package.",
  },
  {
    icon: Server,
    title: "99.9% Uptime Guarantee",
    description: "Your website stays online 24/7 with our reliable infrastructure and monitoring.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Expert Support",
    description: "Get help whenever you need it via phone, email, WhatsApp, or live chat.",
  },
  {
    icon: Globe,
    title: "Multiple Domains",
    description: "Host multiple websites on a single package. Link different domains easily.",
  },
  {
    icon: HardDrive,
    title: "Automated Backups",
    description: "Weekly, daily, monthly, and yearly backups of your entire account.",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Why Choose bHosted?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the best web hosting with features designed for performance and reliability
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
