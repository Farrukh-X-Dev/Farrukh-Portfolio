
import { Code, Palette, Smartphone, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code size={32} />,
      title: 'Front-End Web Development',
      description: 'Creating modern, responsive websites using the latest technologies like React, HTML5, CSS3, and JavaScript.',
      features: ['Responsive Design', 'Modern JavaScript', 'Component Architecture', 'Performance Optimization']
    },
    {
      icon: <Palette size={32} />,
      title: 'UI/UX Design Implementation',
      description: 'Transforming design concepts into pixel-perfect, interactive user interfaces with attention to detail.',
      features: ['Pixel Perfect Design', 'Interactive Elements', 'User Experience Focus', 'Cross-browser Compatibility']
    },
    {
      icon: <Smartphone size={32} />,
      title: 'Responsive Web Design',
      description: 'Ensuring your website looks and functions perfectly across all devices and screen sizes.',
      features: ['Mobile-First Approach', 'Flexible Layouts', 'Touch-Friendly Interface', 'Fast Loading Times']
    },
    {
      icon: <Zap size={32} />,
      title: 'Basic Backend Integration',
      description: 'Connecting front-end applications with APIs and implementing basic backend logic for dynamic functionality.',
      features: ['API Integration', 'Data Management', 'Form Handling', 'Authentication Systems']
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive web development solutions to bring your ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className={`bg-card border border-border rounded-xl p-8 card-hover fade-in-up stagger-${index + 1}`}
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center text-white flex-shrink-0">
                  {service.icon}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
     </div>
    </section>
  );
};

export default Services;
