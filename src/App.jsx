import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import { motion, useScroll, useSpring } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative font-sans text-slate-900 bg-slate-50 selection:bg-primary-200 selection:text-primary-900">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary-600 origin-left z-[100]"
        style={{ scaleX }}
      />

      <Navbar />

      <main>
        <Home />
      </main>

      <Footer />
    </div>
  );
}

export default App;
