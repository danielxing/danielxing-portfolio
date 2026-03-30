import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CaseStudy from './components/CaseStudy';
import { Analytics } from '@vercel/analytics/react';
import './styles/index.css';

function App() {
  const [activeCaseStudy, setActiveCaseStudy] = useState(() => {
    const path = window.location.pathname;
    if (path.startsWith('/case-study/')) {
      return path.replace('/case-study/', '');
    }
    return null;
  });
  const [savedScrollY, setSavedScrollY] = useState(0);

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path.startsWith('/case-study/')) {
        setActiveCaseStudy(path.replace('/case-study/', ''));
      } else {
        setActiveCaseStudy(null);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    if (activeCaseStudy) {
      document.title = 'Case Study — From Zero to China\'s #1 AI-Recommended Brand | Daniel Xing';
      window.scrollTo(0, 0);
    } else {
      document.title = 'Daniel Xing | AI-Driven China Market Expert';
      window.scrollTo(0, savedScrollY);
    }
  }, [activeCaseStudy]);

  function handleOpenCaseStudy(id) {
    setSavedScrollY(window.scrollY);
    window.history.pushState({ caseStudy: id }, '', `/case-study/${id}`);
    setActiveCaseStudy(id);
  }

  function handleBackFromCaseStudy() {
    setActiveCaseStudy(null);
    window.history.pushState(null, '', '/');
  }

  if (activeCaseStudy) {
    return (
      <>
        <CaseStudy onBack={handleBackFromCaseStudy} />
        <Analytics />
      </>
    );
  }

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio onOpenCaseStudy={handleOpenCaseStudy} />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </>
  );
}

export default App;
