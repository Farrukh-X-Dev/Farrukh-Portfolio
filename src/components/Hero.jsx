import { ArrowRight, Download, Github, Linkedin } from 'lucide-react';
import image from '../assets/Headshot.jpeg'
import { motion } from "framer-motion";

const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 1.2,   // slower
      delay, 
      ease: "easeInOut" // smooth curve
    } 
  }
});

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-secondary"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-orange-500/10"></div>
      
      {/* Floating Circles */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/20 float-animation"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 rounded-full bg-orange-500/20 float-animation" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-1/2 left-20 w-12 h-12 rounded-full bg-primary/10 float-animation" style={{ animationDelay: '1.5s' }}></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            
            <motion.h1
              variants={fadeInUp(0)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Hello, I'm <span className="text-gradient">Farrukh</span>
            </motion.h1>
            
            <motion.h2
              variants={fadeInUp(0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="text-2xl lg:text-3xl text-muted-foreground mb-6 font-light"
            >
              Front-End Developer | <span className="text-primary">Passionate Learner</span> | <span className="text-orange-500">Problem Solver</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp(0.6)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="text-lg text-muted-foreground mb-8 max-w-2xl"
            >
              A creative and hardworking teenager passionate about digital website development. 
              I'm eager to apply my development knowledge and strong communication skills 
              to help clients and companies build clean and effective web experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp(0.9)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <button
                onClick={() => scrollToSection('#projects')}
                className="gradient-primary text-white px-8 py-4 rounded-full font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                View Projects <ArrowRight size={20} />
              </button>
              <button
                onClick={() => scrollToSection('#contact')}
                className="border-2 border-primary text-primary px-8 py-4 rounded-full font-medium hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Contact Me <Download size={20} />
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={fadeInUp(1.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="flex justify-center lg:justify-start gap-4"
            >
              <a
                href="https://github.com/Farrukh-X-Dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 hover:gradient-primary rounded-full bg-muted flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/farrukh-noman/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:gradient-primary transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
            </motion.div>
          </div>

          {/* Right Content - Profile Image */}
          <motion.div
            variants={fadeInUp(0.6)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="lg:w-1/2 flex justify-center"
          >
            <div className="relative">
              <div className="w-82 h-82 rounded-full gradient-primary p-1">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <div className="w-80 h-80 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-6xl font-bold text-gradient">
                    <img src={image} alt="FN" className='object-cover object-[center_25%] w-full h-full rounded-full '/>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-primary animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-orange-500 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
