import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 transition-colors duration-200">
      <Navbar />
      
      {/* Hero Section */}
      <About />


      {/* Skills Section */}
       <Skills />

      {/* Projects Section */}
      <Projects />


      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}
