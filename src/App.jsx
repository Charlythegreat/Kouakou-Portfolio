import { useState, useEffect } from 'react';
import './App.css';

// Components
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Set initial dark mode
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

