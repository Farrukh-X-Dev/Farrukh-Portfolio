import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiFirebase, SiRedux } from "react-icons/si";


const Skills = () => {
  const skills = [
    { name: "HTML", level: 95, icon: FaHtml5 , description: "Semantic markup and accessibility" },
    { name: "CSS", level: 90, icon: FaCss3Alt, description: "Modern styling and animations" },
    { name: "JavaScript", level: 85, icon: TbBrandJavascript, description: "Dynamic and interactive features" },
    { name: "React", level: 80, icon: FaReact , description: "Component-based architecture" },
    { name: "Tailwind CSS", level: 88, icon: BiLogoTailwindCss, description: "Utility-first CSS framework" },
    { name: "Firebase", level: 85, icon: SiFirebase, description: "“Backend-as-a-Service Platform" },
    { name: "Redux", level: 70, icon: SiRedux , description: "State Management for redux" }
  ];

  return (
    <section id="skills" className="py-20">
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
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Skill Cards */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ staggerChildren: 0.2 }}
          className="flex flex-wrap justify-center gap-8"
        >
          {skills.map((skill) => (
            <motion.div 
              key={skill.name}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-[48%] lg:w-[30%] bg-card border border-border rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-center ">
                <div className="text-4xl mb-4 ">{<skill.icon className="mx-auto gradient-primary rounded-md "/>}</div>
                <h3 className="text-2xl font-bold mb-2">{skill.name}</h3>
                <p className="text-muted-foreground mb-6">{skill.description}</p>
                
                {/* Progress Bar with animation */}
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.8, ease: "easeOut" }}
                  viewport={{ once: false }}
                  className="gradient-primary h-3 rounded-full"
                />
                <span className="text-sm font-medium text-primary">{skill.level}%</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Currently Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 to-orange-500/10 rounded-xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-gradient">Currently Exploring</span>
            </h3>
            <p className="text-muted-foreground text-lg">
              Backend Development, Node.js, and Full-Stack Architecture
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
