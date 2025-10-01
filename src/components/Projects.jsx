import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Management from "../assets/Management.png";
import OmMart from "../assets/OmMart.png";
import Qabila from "../assets/Qabila.png";

const Projects = () => {
  const projects = [
    {
      title: "Employee Management System",
      description: "A comprehensive task management system designed for admins and employees to assign tasks and streamline workflow and productivity.",
      image: Management,
      tags: [ "Static Authentication ","Local Storage", "Nested Array Manipulation"],
      github: "https://github.com/Farrukh-X-Dev/Employees-Management-System",
      demo: "https://ems-portal-pro.netlify.app/",
    },
    {
      title: "E-commerce Website",
      description:"A modern e-commerce platform with a sleek design, featuring product listings, shopping cart functionality, and secure authentication process.",
      image: OmMart,
      tags: ["Firebase", "Context Api", "Framer Motion"],
      github: "https://github.com/Farrukh-X-Dev/E-Commerce-Store",
      demo: "https://ommartonline.netlify.app/",
    },
    {
      title: "Food-Qabila Billing App",
      description:"Real-time billing application for restaurants to generate customer receipts with dynamic pricing and order management.",
      image: Qabila,
      tags: ["Electron js", "Dynamic Document Generation (PDF/Print)", "Computed Properties"],
      github: "https://github.com/Farrukh-X-Dev/Billing-App",
      demo: "https://food-qabila.netlify.app/",
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ staggerChildren: 0.25 }}
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              {/* Image + Overlay */}
              <div className="relative overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-4"
                >
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
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      <ExternalLink size={18} className="text-white" />
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
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

                {/* Buttons */}
                <div className="flex gap-3">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-muted hover:bg-muted/80 text-center py-2 rounded-lg font-medium transition-colors"
                  >
                    View Code
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href={project.demo}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="flex-1 gradient-primary text-white text-center py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                  >
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Farrukh-X-Dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-full font-medium hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            <Github size={20} />
            View more on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
