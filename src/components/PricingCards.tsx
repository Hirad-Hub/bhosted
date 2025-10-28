import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Mail-Only Pakket",
    price: "€4,99",
    period: "/maand",
    description: "Perfect voor e-mailbeheer",
    features: [
      "10 GB opslag",
      "100 email adressen",
      "Instelbare virus- en spamfilter",
      "Aliassen en doorsturen",
      "Uitgebreid backup schema",
    ],
  },
  {
    name: "Webhosting",
    price: "€4,99",
    period: "/maand",
    description: "Complete hostingoplossing",
    features: [
      "50 GB SSD opslag",
      "100 email adressen",
      "20GB data per maand",
      "100 MySQL databases",
      "Gratis SSL certificaat",
      "Uitgebreid backup schema",
    ],
    popular: true,
  },
  {
    name: "Webshop",
    price: "€9,99",
    period: "/maand",
    description: "E-commerce klaar hosting",
    features: [
      "100 GB SSD opslag",
      "Inclusief voorraadbeheer",
      "Gratis beveiligde website",
      "Extra snel door caching",
      "iDeal en PayPal ondersteuning",
      "30 dagen geld-terug-garantie",
    ],
  },
];

const PricingCards = () => {
  return (
    <section id="hosting" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Kies Uw Perfecte Plan</h2>
          <p className="text-xl text-muted-foreground">
            Flexibele hostingoplossingen op maat van uw behoeften
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
                    Meest Populair
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
                  Meer info &gt;&gt;
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
