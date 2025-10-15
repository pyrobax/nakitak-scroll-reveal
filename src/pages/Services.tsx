import { Link } from "react-router-dom";
import { Building2, Wrench, Palette, ClipboardCheck, HardHat, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Services = () => {
  useScrollReveal();

  const services = [
    {
      icon: Building2,
      title: "Construction",
      description: "Full-scale construction services for residential and commercial projects.",
      details: [
        "New building construction",
        "Structural engineering",
        "Site preparation and foundation work",
        "Quality materials and expert craftsmanship",
      ],
    },
    {
      icon: Wrench,
      title: "Renovation",
      description: "Transform and modernize existing structures with our renovation expertise.",
      details: [
        "Kitchen and bathroom remodeling",
        "Building extensions",
        "Structural modifications",
        "Modernization and upgrades",
      ],
    },
    {
      icon: Palette,
      title: "Interior Design",
      description: "Creative interior design solutions that blend aesthetics with functionality.",
      details: [
        "Space planning and layout",
        "Custom furniture design",
        "Color consultation and material selection",
        "Lighting design",
      ],
    },
    {
      icon: ClipboardCheck,
      title: "Project Management",
      description: "Comprehensive project oversight from concept to completion.",
      details: [
        "Budget planning and cost control",
        "Timeline management",
        "Quality assurance",
        "Contractor coordination",
      ],
    },
    {
      icon: HardHat,
      title: "Commercial Construction",
      description: "Specialized construction services for commercial and industrial projects.",
      details: [
        "Office buildings and retail spaces",
        "Warehouses and industrial facilities",
        "Restaurant and hospitality venues",
        "Compliance with commercial building codes",
      ],
    },
    {
      icon: Home,
      title: "Residential Construction",
      description: "Creating dream homes with attention to detail and quality.",
      details: [
        "Custom home construction",
        "Multi-family housing",
        "Luxury residences",
        "Sustainable building practices",
      ],
    },
  ];

  return (
    <div>
      {/* Banner */}
      <section className="relative h-64 flex items-center justify-center bg-gradient-to-r from-primary to-primary/80">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground reveal">
          Our Services
        </h1>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12 reveal">
            <p className="text-xl text-muted-foreground">
              Nakitak offers comprehensive construction and design services tailored to meet your 
              specific needs. From initial planning to final execution, we're with you every step of the way.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="reveal hover:shadow-xl transition-shadow">
                <CardHeader>
                  <service.icon className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center reveal">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and provide you with a detailed quote.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Get a Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
