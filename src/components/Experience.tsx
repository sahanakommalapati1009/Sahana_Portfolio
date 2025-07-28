import { MapPin, Calendar, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Data Science Intern",
      company: "1Cell.Ai",
      period: "Jun 2025 – Present",
      location: "Remote",
      description: "Working on cutting-edge AI solutions for healthcare data analysis and predictive modeling.",
      technologies: ["Next.js", "React.js", "Express.js", "Python", "TensorFlow"],
      achievements: [
        "Developing ML models for healthcare data analysis",
        "Building responsive web applications for data visualization",
        "Implementing API integrations for real-time data processing"
      ]
    },
    {
      title: "Data Science Intern",
      company: "Vision Square INC",
      period: "Aug 2024 – Jan 2025",
      location: "Buffalo, NY",
      description: "Built GenAI-powered detection systems and created comprehensive data visualization dashboards.",
      technologies: ["LangChain", "FAISS", "OpenAI", "Power BI", "Python", "RAG"],
      achievements: [
        "Built GenAI-powered detection systems using LangChain and FAISS",
        "Integrated OpenAI APIs for intelligent document processing",
        "Created interactive dashboards with Power BI for stakeholder reporting",
        "Implemented RAG (Retrieval-Augmented Generation) pipelines"
      ]
    },
    {
      title: "Data Scientist",
      company: "Advanced Structures India",
      period: "Aug 2021 – Jun 2023",
      location: "Bangalore, India",
      description: "Developed ML models for construction project risk prediction and created simulation systems.",
      technologies: ["XGBoost", "SHAP", "GCP", "Power BI", "Python", "SQL"],
      achievements: [
        "Developed ML models for delay risk prediction using XGBoost",
        "Implemented SHAP for model explainability and feature importance",
        "Created simulation modeling systems with GCP integration",
        "Built comprehensive reporting dashboards with Power BI",
        "Achieved 85% accuracy in project delay prediction models"
      ]
    },
    {
      title: "Software Engineer Intern",
      company: "Crewscale",
      period: "Jan 2021 – Jun 2021",
      location: "Remote",
      description: "Focused on API integration, performance testing, and software development lifecycle.",
      technologies: ["JavaScript", "Node.js", "REST APIs", "Testing Frameworks"],
      achievements: [
        "Integrated third-party APIs for enhanced application functionality",
        "Conducted comprehensive performance testing and optimization",
        "Collaborated on full-stack development projects",
        "Improved API response times by 30% through optimization"
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Work <span className="tech-gradient bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1 tech-gradient mx-auto rounded-full"></div>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="card-tech">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground">
                      {exp.title}
                    </h3>
                    <p className="text-xl text-primary font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col lg:items-end mt-2 lg:mt-0">
                    <div className="flex items-center space-x-1 text-muted-foreground">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-muted-foreground mt-1">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">
                  {exp.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-2 text-foreground">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start space-x-2">
                        <ExternalLink size={16} className="text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2 text-foreground">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;