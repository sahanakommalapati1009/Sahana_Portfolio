import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: "M.S. in Data Science",
      school: "University at Buffalo",
      period: "2023–2025",
      gpa: "3.8",
      location: "Buffalo, NY"
    },
    {
      degree: "B.E. in Computer Science",
      school: "Cambridge Institute of Technology",
      period: "2018–2022",
      gpa: "8.6",
      location: "Bangalore, India"
    }
  ];

  return (
    <section id="about" className="section-padding bg-darker-surface">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            About <span className="tech-gradient bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 tech-gradient mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-6">
            <div className="card-tech">
              <h3 className="text-2xl font-semibold mb-4 text-primary">My Journey</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a Data Science graduate from University at Buffalo with 2+ years of industry experience. 
                I've contributed to GenAI and ML applications at startups and corporate firms. Passionate about 
                ethical AI and real-world impact, I currently work as a Data Science Intern at 1Cell.Ai.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                My expertise spans across Natural Language Processing, Machine Learning, Generative AI, and 
                full-stack development. I believe in creating intelligent systems that not only solve complex 
                problems but also make a meaningful difference in people's lives.
              </p>
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6 text-primary">Education</h3>
            {education.map((edu, index) => (
              <div key={index} className="card-tech">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <GraduationCap size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-foreground">
                      {edu.degree}
                    </h4>
                    <p className="text-lg text-primary font-medium">
                      {edu.school}
                    </p>
                    <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>{edu.location}</span>
                      </div>
                      <div className="tech-badge">
                        GPA: {edu.gpa}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mt-16">
          <div className="text-center card-tech">
            <div className="text-3xl font-bold text-primary">2+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center card-tech">
            <div className="text-3xl font-bold text-primary">15+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center card-tech">
            <div className="text-3xl font-bold text-primary">5+</div>
            <div className="text-muted-foreground">Technologies Mastered</div>
          </div>
          <div className="text-center card-tech">
            <div className="text-3xl font-bold text-primary">3.8</div>
            <div className="text-muted-foreground">Current GPA</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;