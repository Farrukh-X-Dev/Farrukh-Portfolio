import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Code, Palette, Smartphone, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code size={32} />,
      title: "Front-End Web Development",
      description:
        "Creating modern, responsive websites using the latest technologies like React, HTML5, CSS3, and JavaScript.",
      features: [
        "Responsive Design",
        "Modern JavaScript",
        "Component Architecture",
        "Performance Optimization",
      ],
    },
    {
      icon: <Palette size={32} />,
      title: "UI/UX Design Implementation",
      description:
        "Transforming design concepts into pixel-perfect, interactive user interfaces with attention to detail.",
      features: [
        "Pixel Perfect Design",
        "Interactive Elements",
        "User Experience Focus",
        "Cross-browser Compatibility",
      ],
    },
    {
      icon: <Smartphone size={32} />,
      title: "Responsive Web Design",
      description:
        "Ensuring your website looks and functions perfectly across all devices and screen sizes.",
      features: [
        "Mobile-First Approach",
        "Flexible Layouts",
        "Touch-Friendly Interface",
        "Fast Loading Times",
      ],
    },
    {
      icon: <Zap size={32} />,
      title: "Basic Backend Integration",
      description:
        "Connecting front-end applications with APIs and implementing basic backend logic for dynamic functionality.",
      features: [
        "API Integration",
        "Data Management",
        "Form Handling",
        "Authentication Systems",
      ],
    },
  ];

  // Card variants
  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="services" className="relative py-20">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <InViewFade>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-center">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-center">
            Comprehensive web development solutions to bring your ideas to life
          </p>
        </InViewFade>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mt-16">
          {services.map((service, i) => (
            <InViewFade key={i} delay={i * 0.2}>
              <div className="bg-card border border-border rounded-xl p-8 shadow-sm hover:shadow-lg transition-all">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center text-white flex-shrink-0">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <motion.ul
                      initial="hidden"
                      animate="visible"
                      variants={{
                        visible: {
                          transition: { staggerChildren: 0.15, delayChildren: 0.2 },
                        },
                      }}
                      className="space-y-2"
                    >
                      {service.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          variants={featureVariants}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                          className="flex items-center gap-3"
                        >
                          <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                </div>
              </div>
            </InViewFade>
          ))}
        </div>
      </div>
    </section>
  );
};

// 🔑 Reusable wrapper with re-trigger support
const InViewFade = ({ children, delay = 0 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden"); // reset when out of view so it replays
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
};

export default Services;
