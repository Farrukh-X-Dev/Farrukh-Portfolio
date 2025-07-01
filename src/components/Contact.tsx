
import { useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's collaborate and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="fade-in-up">
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground text-lg mb-8">
                I'm always excited to discuss new projects and opportunities. 
                Whether you have a question or just want to say hi, I'll do my best to get back to you!
              </p>
            </div>

            <div className="space-y-6">
              <div className="fade-in-up stagger-1 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-muted-foreground">farrukhnoman@email.com</p>
                </div>
              </div>

              <div className="fade-in-up stagger-2 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="fade-in-up stagger-3 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-muted-foreground">Available for remote work</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="fade-in-up stagger-4">
              <h4 className="font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Farrukh-X-Dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-110"
                >
                  <Github size={20} />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="fade-in-up stagger-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none transition-all duration-300"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full gradient-primary text-white py-4 rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
