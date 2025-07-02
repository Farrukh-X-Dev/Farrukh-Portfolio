
import { GraduationCap, Award, User } from 'lucide-react';

const About = () => {
  const certifications = [
    { name: 'HTML & CSS', provider: 'Great Learning Academy', count: 2 },
    { name: 'CSS & JavaScript', provider: 'SoloLearn', count: 2 },
    { name: 'JavaScript', provider: 'Simplilearn', count: 1 },
    { name: 'Full-Stack Development', provider: 'BitDegree', count: 1 },
  ];

  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating digital experiences that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="fade-in-up">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                  <User className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold">My Journey</h3>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm Farrukh Noman, a creative and hardworking student with an insatiable passion for 
                digital website development. My journey in tech began with curiosity and has evolved 
                into a dedicated pursuit of front-end excellence. I believe in the power of clean code, 
                intuitive design, and continuous learning.
              </p>
            </div>

            <div className="fade-in-up stagger-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-card border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">Currently Pursuing</h4>
                  <p className="text-muted-foreground">Diploma + Intermediate Education</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-green-500 mb-2">Completed</h4>
                  <p className="text-muted-foreground">Matriculation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Certifications */}
          <div className="fade-in-up stagger-2">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                <Award className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold">Certifications</h3>
            </div>

            <div className="grid gap-6">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-lg p-6 card-hover"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-lg">{cert.name}</h4>
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {cert.count} certificate{cert.count > 1 ? 's' : ''}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{cert.provider}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-orange-500/10 rounded-lg border border-primary/20">
              <h4 className="font-bold text-lg mb-2 text-primary">Total Achievements</h4>
              <p className="text-muted-foreground">
                <span className="font-bold text-2xl text-gradient">6 Certifications</span> from leading online platforms
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
