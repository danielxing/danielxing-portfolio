import { useState } from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { portfolio } from '../../data/portfolio';
import PDFViewer from '../PDFViewer';
import './Portfolio.css';

export default function Portfolio() {
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [selectedPdf, setSelectedPdf] = useState(null);

  return (
    <section id="portfolio" className="portfolio section" ref={sectionRef}>
      <div className="container">
        <motion.div
          className="portfolio__header"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Work</span>
          <h2 className="section-heading">Selected Projects</h2>
        </motion.div>

        <div className="portfolio__grid">
          {portfolio.map((project, index) => (
            <motion.article
              key={project.id}
              className="portfolio__card"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * (index + 1) }}
            >
              <div className="portfolio__card-header">
                <span className="portfolio__card-category">{project.category}</span>
                <h3 className="portfolio__card-title">{project.title}</h3>
              </div>

              <p className="portfolio__card-description">{project.description}</p>

              {project.pdf && (
                <button
                  className="portfolio__link"
                  onClick={() => setSelectedPdf({ url: project.pdf, title: project.title })}
                >
                  View Case Study
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              )}
            </motion.article>
          ))}
        </div>
      </div>

      {selectedPdf && (
        <PDFViewer
          pdfUrl={selectedPdf.url}
          title={selectedPdf.title}
          onClose={() => setSelectedPdf(null)}
        />
      )}
    </section>
  );
}
