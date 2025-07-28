import { Code, Database, Brain, Wrench, Cloud, GitBranch } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code size={24} />,
      skills: ["Python", "SQL", "JavaScript", "HTML", "CSS", "R", "Java"]
    },
    {
      title: "Frameworks & Libraries",
      icon: <Brain size={24} />,
      skills: ["Streamlit", "Next.js", "React.js", "Express.js", "FastAPI", "Flask", "TensorFlow", "PyTorch"]
    },
    {
      title: "Data Science & ML",
      icon: <Database size={24} />,
      skills: ["Machine Learning", "NLP", "GenAI", "FAISS", "LangChain", "LightGBM", "XGBoost", "SHAP", "Scikit-learn"]
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench size={24} />,
      skills: ["Power BI", "Tableau", "Jupyter", "VS Code", "Docker", "Postman", "Git"]
    },
    {
      title: "Databases & Cloud",
      icon: <Cloud size={24} />,
      skills: ["PostgreSQL", "MongoDB", "MySQL", "AWS", "GCP", "Azure", "Firebase"]
    },
    {
      title: "Development & DevOps",
      icon: <GitBranch size={24} />,
      skills: ["GitHub", "CI/CD", "REST APIs", "Microservices", "Agile", "Scrum"]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-darker-surface">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="tech-gradient bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 tech-gradient mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="card-tech group">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group/skill">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-muted-foreground group-hover/skill:text-foreground transition-colors">
                        {skill}
                      </span>
                    </div>
                    <div className="w-full bg-secondary/30 rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-full tech-gradient rounded-full transition-all duration-1000 ease-out group-hover:w-full"
                        style={{
                          width: `${70 + Math.random() * 30}%`,
                          animationDelay: `${skillIndex * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skill Highlights */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">
            Core Competencies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Machine Learning",
              "Natural Language Processing",
              "Generative AI",
              "Data Visualization",
              "Full-Stack Development",
              "Cloud Computing",
              "MLOps",
              "Deep Learning"
            ].map((competency, index) => (
              <div
                key={index}
                className="px-6 py-3 rounded-full border border-primary/20 bg-primary/5 text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
              >
                {competency}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;