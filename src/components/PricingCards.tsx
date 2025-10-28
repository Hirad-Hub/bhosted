import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Mail Only",
    price: "€4.99",
    period: "/month",
    description: "Perfect for email management",
    features: [
      "10 GB storage",
      "100 email addresses",
      "Adjustable virus and spam filter",
      "Aliases and forwards",
      "Extended backup schedule",
    ],
  },
  {
    name: "Web Hosting",
    price: "€4.99",
    period: "/month",
    description: "Complete hosting solution",
    features: [
      "50 GB SSD storage",
      "100 email addresses",
      "20GB of data per month",
      "100 MySQL databases",
      "Free SSL certificate",
      "Extended backup schedule",
    ],
    popular: true,
  },
  {
    name: "Webshop",
    price: "€9.99",
    period: "/month",
    description: "E-commerce ready hosting",
    features: [
      "100 GB SSD storage",
      "Including memory management",
      "Free secure website",
      "Extra fast due to caching",
      "iDeal and PayPal support",
      "30-day money-back guarantee",
    ],
  },
];

const PricingCards = () => {
  return (
    <section id="hosting" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Choose Your Perfect Plan</h2>
          <p className="text-xl text-muted-foreground">
            Flexible hosting solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative ${
                plan.popular
                  ? "border-primary shadow-primary"
                  : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="text-success shrink-0 mt-0.5" size={20} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  variant={plan.popular ? "default" : "outline"}
                  className="w-full"
                  size="lg"
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingCards;
