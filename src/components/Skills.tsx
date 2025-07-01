
const Skills = () => {
  const skills = [
    {
      name: 'HTML',
      level: 95,
      icon: '🌐',
      description: 'Semantic markup and accessibility'
    },
    {
      name: 'CSS',
      level: 90,
      icon: '🎨',
      description: 'Modern styling and animations'
    },
    {
      name: 'JavaScript',
      level: 85,
      icon: '⚡',
      description: 'Dynamic and interactive features'
    },
    {
      name: 'React',
      level: 80,
      icon: '⚛️',
      description: 'Component-based architecture'
    },
    {
      name: 'Tailwind CSS',
      level: 88,
      icon: '🚀',
      description: 'Utility-first CSS framework'
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className={`bg-card border border-border rounded-xl p-8 card-hover fade-in-up stagger-${index + 1}`}
            >
              <div className="text-center">
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{skill.name}</h3>
                <p className="text-muted-foreground mb-6">{skill.description}</p>
                
                {/* Progress Bar */}
                <div className="w-full bg-muted rounded-full h-3 mb-4">
                  <div 
                    className="gradient-primary h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-primary">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>

        {/* Currently Learning Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-orange-500/10 rounded-xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-gradient">Currently Exploring</span>
            </h3>
            <p className="text-muted-foreground text-lg">
              Backend Development, Node.js, and Full-Stack Architecture
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
