import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah de Vries",
    role: "Kleine Ondernemer",
    content: "Als een eenvoudige WordPress website eigenaar, wil je gewoon je content op je site zetten. Niets anders doet ertoe. Ik heb geen idee wat PHP is, en ik heb geen idee of ik een e-mail plugin kan gebruiken en een andere niet. Ik raak in paniek als de website plotseling verdwijnt. Dan is er de helpdesk. Kort en bondig, snelle antwoorden, persoonlijk, of zelfs per telefoon. Dat vind je alleen hier, bij bHosted.",
    rating: 5,
  },
  {
    name: "Michael van Dam",
    role: "E-commerce Manager",
    content: "Na het overstappen naar bHosted is de prestatie van onze website dramatisch verbeterd. De SSD hosting maakt alles razend snel, en onze klanten merken het verschil. Klantenservice is er altijd wanneer we ze nodig hebben.",
    rating: 5,
  },
  {
    name: "Emma Jansen",
    role: "Freelance Developer",
    content: "Ik heb veel hostingproviders geprobeerd, maar bHosted valt op met hun betrouwbare service en uitstekende ondersteuning. Het controlepaneel is intuïtief, en ik kan meerdere klantwebsites moeiteloos beheren.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Vertrouwd door Duizenden</h2>
          <p className="text-xl text-muted-foreground">
            Zie wat onze klanten over ons zeggen
          </p>
          <div className="flex items-center justify-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="fill-primary text-primary" size={24} />
            ))}
            <span className="ml-2 text-lg font-semibold">4,9/5</span>
            <span className="text-muted-foreground ml-1">op WebHosters.nl</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="border-border">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="fill-primary text-primary" size={16} />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
