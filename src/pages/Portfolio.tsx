import { useState } from "react";
import { X } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Portfolio = () => {
  useScrollReveal();
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Modern Office Complex",
      category: "Commercial",
      description: "A state-of-the-art office building featuring open-plan workspaces, modern amenities, and sustainable design elements.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
    },
    {
      title: "Luxury Residential Home",
      category: "Residential",
      description: "Custom-built luxury home with contemporary architecture, premium finishes, and smart home integration.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    },
    {
      title: "Boutique Hotel Interior",
      category: "Interior Design",
      description: "Elegant interior design for a boutique hotel, combining comfort with sophisticated aesthetics.",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop",
    },
    {
      title: "Shopping Mall Development",
      category: "Commercial",
      description: "Large-scale retail development with modern architecture and efficient traffic flow design.",
      image: "https://images.unsplash.com/photo-1567958451986-2de427a4a0be?w=800&h=600&fit=crop",
    },
    {
      title: "Restaurant Renovation",
      category: "Renovation",
      description: "Complete transformation of an existing space into a modern, inviting dining experience.",
      image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&h=600&fit=crop",
    },
    {
      title: "Residential Complex",
      category: "Residential",
      description: "Multi-family housing development with modern amenities and sustainable features.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
    },
    {
      title: "Corporate Headquarters",
      category: "Commercial",
      description: "Iconic corporate building with cutting-edge design and energy-efficient systems.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    },
    {
      title: "Modern Villa",
      category: "Residential",
      description: "Contemporary villa design featuring clean lines, open spaces, and luxury amenities.",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
    },
    {
      title: "Office Interior Design",
      category: "Interior Design",
      description: "Creative workspace design promoting collaboration and productivity.",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop",
    },
  ];

  return (
    <div>
      {/* Banner */}
      <section className="relative h-64 flex items-center justify-center bg-gradient-to-r from-primary to-primary/80">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground reveal">
          Our Portfolio
        </h1>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12 reveal">
            <p className="text-xl text-muted-foreground">
              Explore our diverse portfolio of completed projects that showcase our expertise 
              in construction, renovation, and interior design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="reveal group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all"
                onClick={() => setSelectedProject(index)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground">
                      <span className="text-sm font-medium">{project.category}</span>
                      <h3 className="text-xl font-bold">{project.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject !== null && (
        <div
          className="fixed inset-0 bg-foreground/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-background/90 rounded-full p-2 hover:bg-background transition-colors z-10"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={projects[selectedProject].image}
                alt={projects[selectedProject].title}
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <span className="text-sm font-medium text-primary">
                  {projects[selectedProject].category}
                </span>
                <h2 className="text-3xl font-bold mt-2 mb-4">
                  {projects[selectedProject].title}
                </h2>
                <p className="text-lg text-muted-foreground">
                  {projects[selectedProject].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
