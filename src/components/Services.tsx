import { BarChart3, Brain, Database, Globe, Code, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <BarChart3 size={32} />,
      title: "Data Analysis",
      description: "Transform raw data into actionable insights through comprehensive statistical analysis, data visualization, and pattern recognition.",
      features: ["Statistical Analysis", "Data Visualization", "Trend Analysis", "Reporting"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Brain size={32} />,
      title: "ML Model Development",
      description: "Build robust machine learning models for classification, regression, clustering, and prediction tasks with high accuracy and scalability.",
      features: ["Predictive Modeling", "Classification", "Regression Analysis", "Model Optimization"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Zap size={32} />,
      title: "GenAI Solutions",
      description: "Develop cutting-edge generative AI applications using LangChain, OpenAI, and advanced NLP techniques for intelligent automation.",
      features: ["RAG Systems", "Chatbots", "Document Processing", "Content Generation"],
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Database size={32} />,
      title: "Dashboard Creation",
      description: "Design interactive dashboards and business intelligence solutions using Power BI, Tableau, and custom web applications.",
      features: ["Interactive Dashboards", "KPI Monitoring", "Real-time Analytics", "Custom Reports"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Globe size={32} />,
      title: "Web Development",
      description: "Build modern, responsive web applications using React, Next.js, and full-stack technologies with focus on user experience.",
      features: ["React Applications", "API Development", "Database Design", "Cloud Deployment"],
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      icon: <Code size={32} />,
      title: "Consultation & Training",
      description: "Provide expert consultation on data science projects and conduct training sessions on ML, AI, and data analysis techniques.",
      features: ["Project Consultation", "Technical Training", "Code Review", "Best Practices"],
      gradient: "from-red-500 to-pink-500"
    }
  ];

  return (
    <section id="services" className="section-padding bg-darker-surface">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="tech-gradient bg-clip-text text-transparent">Services</span>
          </h2>
          <div className="w-24 h-1 tech-gradient mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            I offer comprehensive data science and development services to help businesses 
            leverage the power of data and AI for growth and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card-tech group relative overflow-hidden">
              {/* Background gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <div className="relative">
                {/* Service Icon */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Service Features */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`}></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Hover effect */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="card-tech inline-block">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how I can help you transform your data into valuable insights and solutions.
            </p>
            <a
              href="#contact"
              className="btn-tech inline-flex items-center space-x-2"
            >
              <span>Get Started</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;