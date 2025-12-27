import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { services } from '../../data/services';
import './Services.css';

export default function Services() {
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="services" className="services section" ref={sectionRef}>
      <motion.div
        className="services-header"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span className="section-label">Services</span>
        <h2 className="section-heading">What I Do</h2>
      </motion.div>

      <div className="services-grid">
        {services.map((service, index) => (
          <motion.article
            key={service.id}
            className="service-card"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
          >
            <span className="service-number">{service.number}</span>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-desc">{service.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
