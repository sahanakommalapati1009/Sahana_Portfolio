import { Code, Database, Brain, Wrench, Cloud, GitBranch } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: <Code size={20} />,
      skills: ["Python", "SQL", "JavaScript", "HTML/CSS", "R", "Java"]
    },
    {
      title: "Frameworks",
      icon: <Brain size={20} />,
      skills: ["React.js", "Next.js", "TensorFlow", "PyTorch", "FastAPI", "Streamlit"]
    },
    {
      title: "Data Science",
      icon: <Database size={20} />,
      skills: ["Machine Learning", "NLP", "GenAI", "LangChain", "XGBoost", "Scikit-learn"]
    },
    {
      title: "Tools",
      icon: <Wrench size={20} />,
      skills: ["Power BI", "Tableau", "Docker", "Git", "VS Code", "Jupyter"]
    },
    {
      title: "Cloud & DB",
      icon: <Cloud size={20} />,
      skills: ["AWS", "GCP", "Azure", "PostgreSQL", "MongoDB", "Firebase"]
    },
    {
      title: "DevOps",
      icon: <GitBranch size={20} />,
      skills: ["CI/CD", "REST APIs", "Microservices", "Agile", "GitHub"]
    }
  ];

  const coreCompetencies = [
    "Machine Learning", "Natural Language Processing", "Generative AI",
    "Data Visualization", "Full-Stack Development", "Cloud Computing"
  ];

  return (
    <section id="skills" className="section-padding bg-darker-surface">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-3">
            Technical <span className="tech-gradient bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-20 h-1 tech-gradient mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="card-tech group p-4">
              <div className="flex items-center space-x-2 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {category.icon}
                </div>
                <h3 className="text-sm font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-1">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="text-xs px-2 py-1 rounded-md bg-secondary/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Core Competencies */}
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-6 text-foreground">
            Core Competencies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {coreCompetencies.map((competency, index) => (
              <div
                key={index}
                className="px-4 py-2 text-sm rounded-full border border-primary/20 bg-primary/5 text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
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