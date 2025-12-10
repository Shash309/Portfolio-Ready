import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import TerminalLoader from './components/TerminalLoader';
import MatrixRain from './components/MatrixRain';
import { ToastProvider } from './components/ToastContainer';

function App() {
  const [loading, setLoading] = useState(true);

  // --------------------------------------------------
  // ✅ Smooth Marquee Browser Tab Title (Paused on Inactive)
  // --------------------------------------------------
  useEffect(() => {
    const baseTitle = '  •  shashwat@dev | portfolio  •  ';
    let position = 0;
    let interval: number | null = null;

    // Set a default title to prevent empty tab
    document.title = baseTitle;

    const start = () => {
      if (interval !== null) return;
      interval = window.setInterval(() => {
        document.title =
          baseTitle.slice(position) + baseTitle.slice(0, position);
        position = (position + 1) % baseTitle.length;
      }, 180);
    };

    const stop = () => {
      if (interval !== null) {
        clearInterval(interval);
        interval = null;
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden) stop();
      else start();
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    start();

    return () => {
      stop();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // --------------------------------------------------

  // Loader logic
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <TerminalLoader />;
  }

  return (
    <ToastProvider>
      <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9] relative overflow-x-hidden">

        {/* 🟢 Only ONE background animation for consistency */}
        <MatrixRain />

        {/* Foreground content */}
        <div className="relative z-10">
          <Header />
          <main className="relative">
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
          </main>
        </div>

      </div>
    </ToastProvider>
  );
}

export default App;
