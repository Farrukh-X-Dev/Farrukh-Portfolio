
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Employee Management System',
      description: 'A comprehensive task management system designed for admins and employees to streamline workflow and productivity.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop&crop=center',
      tags: ['React', 'JavaScript', 'CSS', 'Local Storage'],
      github: 'https://github.com/Farrukh-X-Dev/',
      demo: '#'
    },
    {
      title: 'Restaurant Billing App',
      description: 'Real-time billing application for restaurants to generate customer receipts with dynamic pricing and order management.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop&crop=center',
      tags: ['HTML', 'CSS', 'JavaScript', 'DOM Manipulation'],
      github: 'https://github.com/Farrukh-X-Dev/',
      demo: '#'
    },
    {
      title: 'Interactive Quiz App',
      description: 'Fun and educational quiz application tailored for 3 different age groups of children with engaging UI and scoring system.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop&crop=center',
      tags: ['React', 'Tailwind CSS', 'JavaScript', 'Responsive Design'],
      github: 'https://github.com/Farrukh-X-Dev/',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`bg-card border border-border rounded-xl overflow-hidden card-hover fade-in-up stagger-${index + 1}`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="flex gap-3">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      <Github size={18} className="text-white" />
                    </a>
                    <a 
                      href={project.demo}
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      <ExternalLink size={18} className="text-white" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-muted hover:bg-muted/80 text-center py-2 rounded-lg font-medium transition-colors"
                  >
                    View Code
                  </a>
                  <a 
                    href={project.demo}
                    className="flex-1 gradient-primary text-white text-center py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://github.com/Farrukh-X-Dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-full font-medium hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            <Github size={20} />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
