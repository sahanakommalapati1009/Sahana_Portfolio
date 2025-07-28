import { ExternalLink, Github, Database, Brain, TrendingUp, Shield } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Amazon Sales Inventory Optimization",
      description: "A comprehensive inventory management system with Streamlit UI and PostgreSQL backend for e-commerce order tracking and optimization.",
      icon: <Database size={32} />,
      technologies: ["Streamlit", "PostgreSQL", "Python", "Pandas", "SQL"],
      features: [
        "Real-time inventory tracking",
        "Automated order management",
        "Sales analytics dashboard",
        "Predictive restocking alerts"
      ],
      github: "https://github.com/sahanakommalapati1009",
      demo: "#",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Women Safety ML Classifier",
      description: "NLP-powered sentiment analysis system for detecting harassment patterns and improving women safety through intelligent text classification.",
      icon: <Shield size={32} />,
      technologies: ["Python", "NLTK", "Scikit-learn", "TensorFlow", "NLP"],
      features: [
        "Harassment pattern detection",
        "Real-time sentiment analysis",
        "Multi-language support",
        "Privacy-focused design"
      ],
      github: "https://github.com/sahanakommalapati1009",
      demo: "#",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "YouTube Financial Forecasting",
      description: "Advanced predictive modeling system using exploratory data analysis and machine learning for YouTube channel revenue forecasting.",
      icon: <TrendingUp size={32} />,
      technologies: ["Python", "Pandas", "Matplotlib", "Scikit-learn", "Seaborn"],
      features: [
        "Revenue prediction models",
        "Subscriber growth analysis",
        "Content performance metrics",
        "Interactive visualizations"
      ],
      github: "https://github.com/sahanakommalapati1009",
      demo: "#",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Housing Price Prediction",
      description: "Ensemble machine learning model achieving 83% R² score on large datasets for accurate housing price predictions.",
      icon: <Brain size={32} />,
      technologies: ["Python", "XGBoost", "Random Forest", "Linear Regression", "Feature Engineering"],
      features: [
        "4-model ensemble approach",
        "83% R² accuracy score",
        "Large dataset processing",
        "Feature importance analysis"
      ],
      github: "https://github.com/sahanakommalapati1009",
      demo: "#",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="tech-gradient bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 tech-gradient mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Explore my portfolio of data science and machine learning projects that showcase 
            my expertise in solving real-world problems with intelligent solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card-tech group relative overflow-hidden">
              {/* Background gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative">
                {/* Project Icon */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${project.gradient} text-white mb-6`}>
                  {project.icon}
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-badge text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-all duration-300 group/link"
                  >
                    <Github size={16} />
                    <span className="text-sm font-medium group-hover/link:text-primary">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group/link"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm font-medium">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/sahanakommalapati1009"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-tech-outline inline-flex items-center space-x-2"
          >
            <Github size={20} />
            <span>View All Projects</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;