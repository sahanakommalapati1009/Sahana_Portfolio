import { useEffect, useState } from 'react';
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
  const [simliLoaded, setSimliLoaded] = useState(false);

  useEffect(() => {
    // Check if Simli script is loaded
    const checkSimliLoaded = () => {
      if (window.customElements && window.customElements.get('simli-widget')) {
        setSimliLoaded(true);
        console.log('Simli widget is ready');
      } else {
        console.log('Waiting for Simli script to load...');
        setTimeout(checkSimliLoaded, 100);
      }
    };
    
    // Start checking after a small delay
    setTimeout(checkSimliLoaded, 500);
  }, []);

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
      
      {/* AI Assistant Widget - Only render when Simli is loaded */}
      {simliLoaded && (
        <div className="fixed bottom-6 right-6 z-50" style={{maxWidth: '120px', maxHeight: '120px'}}>
          <simli-widget 
            token="gAAAAABokUlio9WwWZYgsSpD2Y6V0KQyAv1VDXxrczKHvc8bjfaWO47WuGWZ3yPoh26QywA0hyqvoImvnOHWsKuadSwgKpOafdI3DaG43myz63stda20Cb80tXdpBkOdNtSEIDx36J4FjzK06ZhXPuVrtesOtwe-LNEwVXP_4FKxTJx2VDhxkFUUdXIRBsjl1Jh1aS7z-DE16bDXIS-Q5Lpisjxkipl4_g2whDQEbqijGiDH0nJ1kijvUJf5bURcGI5w3IE-tMVrywnGSDxA-xh17Dr8IiawJ35Ucj4vSsYYNaVh7poaFBJ0isYg7_z4Ih7jnkHCUpT9yo4KI5QPBPhSDDqeL7xM4Nqs-hlDLF69LgLj9P3XH-GS4e1wSZUcd0z_qTz75F22C9vcsKNLHxtnHpQE_bQ-mA==" 
            agentid="b653438c-1a85-4a3a-9b57-e301299f2d00" 
            position="right" 
            customimage="https://i.postimg.cc/mrfmWhG7/sales-agent-1cell.jpg"
            customtext="Talk to AI Assistant"
            autostart="false"
            showcontrols="true"
          ></simli-widget>
        </div>
      )}
    </div>
  );
};

export default Index;
