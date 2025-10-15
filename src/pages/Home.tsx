import { Link } from "react-router-dom";
import { Building2, Wrench, Palette, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Home = () => {
  useScrollReveal();

  const services = [
    {
      icon: Building2,
      title: "Construction",
      description: "Quality building services from foundation to completion",
    },
    {
      icon: Wrench,
      title: "Renovation",
      description: "Transform existing spaces with expert renovation work",
    },
    {
      icon: Palette,
      title: "Interior Design",
      description: "Creative and functional interior design solutions",
    },
    {
      icon: ClipboardCheck,
      title: "Project Management",
      description: "End-to-end project oversight and coordination",
    },
  ];

  const projects = [
    {
      title: "Modern Office Complex",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
    },
    {
      title: "Luxury Residential Home",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
    },
    {
      title: "Boutique Hotel Interior",
      category: "Interior Design",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&h=400&fit=crop",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-center bg-gradient-to-br from-primary/20 to-primary/5">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=1080&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-foreground/40" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-primary-foreground reveal">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Building Tomorrow's Spaces, Today.
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            From foundations to finishes — Nakitak delivers quality and reliability.
          </p>
          <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <Link to="/portfolio">View Our Work →</Link>
          </Button>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center reveal">
            <h2 className="text-3xl font-bold mb-6">About Nakitak</h2>
            <p className="text-lg mb-4 text-muted-foreground">
              Nakitak is a leading construction and interior design company based in Gaborone, 
              dedicated to delivering exceptional quality in every project we undertake. With years 
              of experience in the industry, we've built a reputation for reliability, innovation, 
              and excellence.
            </p>
            <p className="text-lg mb-8 text-muted-foreground">
              Our team of skilled professionals brings together expertise in construction, 
              renovation, and interior design to transform your vision into reality. Whether 
              it's a commercial development or a residential project, we're committed to 
              exceeding expectations.
            </p>
            <Button asChild variant="outline" size="lg">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 reveal">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {services.map((service, index) => (
              <Card key={index} className="reveal hover:shadow-lg transition-shadow">
                <CardHeader>
                  <service.icon className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center reveal">
            <Button asChild size="lg">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 reveal">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {projects.map((project, index) => (
              <div key={index} className="reveal group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="text-center text-primary-foreground">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-sm">{project.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center reveal">
            <Button asChild size="lg">
              <Link to="/portfolio">See Full Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Bring Your Vision to Life
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Reach out today and let's discuss your next project.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
