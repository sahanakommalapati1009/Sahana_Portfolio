import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Services />
      <Contact />
      <Footer />
      
      {/* AI Assistant Widget */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2">
        <div className="bg-card/90 backdrop-blur-sm border border-border rounded-lg px-3 py-2 shadow-lg">
          <p className="text-sm font-medium text-foreground flex items-center space-x-2">
            <span>🤖</span>
            <span>Talk to AI Assistant</span>
          </p>
        </div>
        <simli-widget 
          token="gAAAAABojymJDBSiYYY7dwGCBjoRG_1aqJr08QqliB0bBliglDM3F339A2jBrGI6Iq_yCNAJQfvFkdg0JcmqTfEzqcA9kSznMto5B8mPgvPVT1_ux8QK3jQYDruzoJD9DrY4EQKgUzP5evHeERbXk-6IeXVCfK8rz95oGIA0TFV1_3Ub8Yw1tMpn1acoYjywm1ymHMRPRaTN0akcSvHP3hf0RNPxmGyIBjgAmavItvlllb2ME1-MNZd3fl0WCQM1z2JT1vsDXew91eDng_HOVEOwwy1kpI3BhJvYepMNdBAunIqtVEaRh18FpsHYLpgMlIvEfH6jxxfA84tYEPGiK-u1TMRCcF5d0SuG6IhOPZenI_wWYUi8kvj1e7yuJTHw3s4iRfaOK1QB__1rZ-4ORLv3rxhXI_tOPg==" 
          agentid="cec374fa-2f4e-429a-be4b-4315b643b2d8" 
          position="right" 
          customimage="" 
          customtext="talk to ai assistant"
        ></simli-widget>
      </div>
    </div>
  );
};

export default Index;
