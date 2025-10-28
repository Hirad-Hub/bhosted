import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Small Business Owner",
    content: "As a simple WordPress website owner, you just want to put your content on your site. Nothing else matters. I have no idea what PHP is, and I have no idea if I can use email plugin and not another. I panic if the website suddenly disappears. Then there's the helpdesk. Short and sweet, quick answers, in person, or even by phone. You'll only find that here, at bHosted.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "E-commerce Manager",
    content: "After switching to bHosted, our website performance improved dramatically. The SSD hosting makes everything lightning fast, and our customers notice the difference. Customer support is always there when we need them.",
    rating: 5,
  },
  {
    name: "Emma Williams",
    role: "Freelance Developer",
    content: "I've tried many hosting providers, but bHosted stands out with their reliable service and excellent support. The control panel is intuitive, and I can manage multiple client websites effortlessly.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Trusted by Thousands</h2>
          <p className="text-xl text-muted-foreground">
            See what our customers say about us
          </p>
          <div className="flex items-center justify-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="fill-primary text-primary" size={24} />
            ))}
            <span className="ml-2 text-lg font-semibold">4.9/5</span>
            <span className="text-muted-foreground ml-1">on WebHosters.nl</span>
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
