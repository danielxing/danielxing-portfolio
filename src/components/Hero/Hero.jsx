import { motion } from 'framer-motion';
import './Hero.css';

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          {/* Name */}
          <h1 className="hero__name">
            <motion.span
              className="hero__name-line"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Daniel
            </motion.span>
            <motion.span
              className="hero__name-line hero__name-line--italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Xing
            </motion.span>
          </h1>

          {/* Divider */}
          <div className="hero__divider"></div>

          {/* Tagline */}
          <motion.p
            className="hero__tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Your Trusted Partner for China Success — <span className="hero__tagline-accent">AI-Powered</span>
          </motion.p>

          {/* Stats */}
          <motion.div
            className="hero__stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="hero__stat">20+ Years</span>
            <span className="hero__stat-divider">/</span>
            <span className="hero__stat">150+ Projects</span>
            <span className="hero__stat-divider">/</span>
            <span className="hero__stat">$10M+ Value</span>
          </motion.div>

          {/* CTA */}
          <motion.button
            className="hero__cta"
            onClick={() => scrollToSection('portfolio')}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Explore Work
            <span className="hero__cta-arrow">&rarr;</span>
          </motion.button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="hero__scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 2.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="hero__scroll-line"></div>
      </motion.div>
    </section>
  );
}
