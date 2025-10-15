import { Shield, Award, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const About = () => {
  useScrollReveal();

  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We uphold the highest standards of honesty and transparency in all our dealings.",
    },
    {
      icon: Award,
      title: "Quality",
      description: "Excellence is not an option, it's our standard. Every project reflects our commitment to quality.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace new technologies and creative solutions to deliver exceptional results.",
    },
  ];

  return (
    <div>
      {/* Banner */}
      <section className="relative h-64 flex items-center justify-center bg-gradient-to-r from-primary to-primary/80">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground reveal">
          About Nakitak
        </h1>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
                alt="Nakitak team"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="reveal">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg mb-4 text-muted-foreground">
                Nakitak was founded with a vision to transform the construction and interior design landscape 
                in Gaborone and beyond. What started as a small team of dedicated professionals has grown into 
                a trusted name in the industry, known for delivering projects that exceed expectations.
              </p>
              <p className="text-lg mb-4 text-muted-foreground">
                Our journey has been marked by a commitment to excellence, innovation, and customer satisfaction. 
                We believe that every structure we build and every space we design should not only meet functional 
                requirements but also inspire and elevate the human experience.
              </p>
              <p className="text-lg mb-4 text-muted-foreground">
                Today, Nakitak stands as a full-service construction and design firm, offering comprehensive 
                solutions from initial concept to final completion. Our diverse portfolio spans residential, 
                commercial, and institutional projects, each one a testament to our expertise and dedication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center reveal">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-muted-foreground">
              To deliver exceptional construction and design services that transform spaces and exceed 
              client expectations, while maintaining the highest standards of quality, integrity, and 
              sustainability. We strive to be the partner of choice for those who demand excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 reveal">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="reveal text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <value.icon className="w-16 h-16 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
