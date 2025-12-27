import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import './About.css';

export default function About() {
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="about" className="about section" ref={sectionRef}>
      <div className="about-container">
        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="about-label">About</span>
          <h2 className="about-heading">
            Bridging Global Brands to China's Digital Ecosystem
          </h2>
          <p className="about-text">
            With over two decades of experience navigating China's rapidly
            evolving digital landscape, I help international brands establish
            authentic connections with Chinese consumers through strategic
            marketing, localized content, and data-driven campaigns across
            WeChat, Xiaohongshu, Douyin, and beyond.
          </p>
        </motion.div>
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: 30 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img src="/images/daniel-photo.jpg" alt="Daniel Xing" />
        </motion.div>
      </div>
    </section>
  );
}
