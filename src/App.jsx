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
    <div className="relative font-sans text-zinc-100 bg-[#0c0d0e] selection:bg-amber-400 selection:text-zinc-950 min-h-screen">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-amber-400 origin-left z-[100]"
        style={{ scaleX }}
      />


      <Navbar />

      <main id="main-content">
        <Home />
      </main>

      <Footer />
    </div>
  );

}

export default App;
