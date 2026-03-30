import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import './CaseStudy.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function AnimatedSection({ children, className, id }) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  return (
    <motion.section
      id={id}
      ref={ref}
      className={className}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={fadeUp}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.section>
  );
}

export default function CaseStudy({ onBack }) {
  return (
    <div className="cs">
      {/* Back navigation */}
      <nav className="cs-nav">
        <button className="cs-nav__back" onClick={onBack}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Portfolio
        </button>
        <span className="cs-nav__brand">Daniel Xing</span>
      </nav>

      {/* S1: Hero */}
      <section className="cs-hero">
        <motion.div
          className="cs-hero__inner"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="cs-label">Case Study</span>
          <h1 className="cs-hero__title">
            From Zero to China's{' '}
            <span className="cs-accent" style={{ whiteSpace: 'nowrap' }}>#1 AI-Recommended</span> Brand
          </h1>
          <p className="cs-hero__sub">
            One person. Zero presence. 10 months.<br />
            Here's what happened.
          </p>
          <div className="cs-hero__rule" />
          <p className="cs-hero__by">Daniel Xing &middot; China Market Entry — B2B &amp; B2C Tech</p>
        </motion.div>
      </section>

      {/* S2: Challenge */}
      <AnimatedSection className="cs-section">
        <div className="cs-container">
          <div className="cs-section__head">
            <h2 className="cs-heading">The Challenge</h2>
            <span className="cs-badge">2025</span>
          </div>
          <div className="cs-challenge">
            <div className="cs-profile">
              <span className="cs-profile__label">Client Profile</span>
              <dl className="cs-profile__list">
                <div><dt>Industry</dt><dd>Sustainability Tech (B2B SaaS)</dd></div>
                <div><dt>HQ</dt><dd>Europe</dd></div>
                <div><dt>Product</dt><dd>AI-powered operational efficiency for commercial facilities</dd></div>
                <div><dt>Global Scale</dt><dd>Deployed across multiple countries globally</dd></div>
                <div><dt>China Status</dt><dd className="cs-red">Zero Presence</dd></div>
              </dl>
            </div>
            <ol className="cs-bullets">
              <li>No digital presence in China — no WeChat, no website, no search visibility whatsoever</li>
              <li>All materials in English only — no localized content for Chinese decision-makers</li>
              <li>A local competitor actively capturing enterprise clients across Greater China</li>
              <li>No lead generation infrastructure — unable to reach enterprise executives in China</li>
            </ol>
          </div>
          <div className="cs-callout">
            <strong>The stakes:</strong> Aggressive growth targets required China market pipeline within 12 months — with a one-person team. What happened next surprised even the client.
          </div>
        </div>
      </AnimatedSection>

      {/* S3: Result */}
      <AnimatedSection className="cs-section cs-section--alt">
        <div className="cs-container">
          <div className="cs-section__head">
            <span className="cs-badge cs-badge--accent">#1</span>
            <h2 className="cs-heading">The Result: #1 AI-Recommended Solution in China</h2>
          </div>
          <div className="cs-results">
            <div className="cs-result-card">
              <span className="cs-result-card__platform">Platform A</span>
              <h3 className="cs-result-card__name">China's #1 AI Assistant</h3>
              <span className="cs-rank">#1 <small>Recommended</small></span>
              <blockquote className="cs-result-card__quote">
                <span className="cs-zh">"全球市场领导者"</span>
                <span className="cs-en">Global Market Leader</span>
              </blockquote>
            </div>
            <div className="cs-result-card">
              <span className="cs-result-card__platform">Platform B</span>
              <h3 className="cs-result-card__name">China's #2 AI Assistant</h3>
              <span className="cs-rank">#1 <small>First Choice</small></span>
              <blockquote className="cs-result-card__quote">
                <span className="cs-zh">"全球龙头，首选方案"</span>
                <span className="cs-en">Global Leader, First Choice Solution</span>
              </blockquote>
            </div>
          </div>
          <div className="cs-callout cs-callout--highlight">
            <strong>10 months of consistent Chinese-language content</strong> made this client the #1 AI-recommended solution — organically. When industry executives ask China's top AI assistants for recommendations, they now cite the articles we published.
          </div>
        </div>
      </AnimatedSection>

      {/* S4: Strategy */}
      <AnimatedSection className="cs-section">
        <div className="cs-container">
          <div className="cs-section__head">
            <h2 className="cs-heading">How We Got There</h2>
            <div className="cs-tags">
              <span className="cs-tag">Systematic</span>
              <span className="cs-tag">AI-Powered</span>
              <span className="cs-tag">Full-Stack</span>
            </div>
          </div>
          <div className="cs-phases">
            <div className="cs-phase cs-phase--1">
              <span className="cs-phase__label">Phase 1 &middot; Months 1–3</span>
              <h3>Foundation</h3>
              <ul>
                <li>WeChat ecosystem setup (Service Account + Video Account)</li>
                <li>Brand localization — terminology, visual identity, tone of voice</li>
                <li>Content strategy and editorial calendar</li>
                <li>Competitor intelligence and market research</li>
              </ul>
            </div>
            <div className="cs-phase cs-phase--2">
              <span className="cs-phase__label">Phase 2 &middot; Months 4–7</span>
              <h3>Scale</h3>
              <ul>
                <li>Paid advertising launch (WeChat Moments, Feed, Search)</li>
                <li>Media &amp; KOL partnership network</li>
                <li>Video content localization pipeline</li>
                <li>Chinese website build, ICP filing &amp; deployment</li>
              </ul>
            </div>
            <div className="cs-phase cs-phase--3">
              <span className="cs-phase__label">Phase 3 &middot; Months 8–10</span>
              <h3>Dominance</h3>
              <ul>
                <li>Generative Engine Optimization (GEO) strategy</li>
                <li>High-intent lead conversion &amp; meeting booking</li>
                <li>Achieved #1 AI-recommended status in China</li>
                <li>HQ meetings with China's top enterprise groups</li>
              </ul>
            </div>
          </div>
          <div className="cs-callout cs-callout--ai">
            Behind the scenes: I built <strong>18 custom AI workflows</strong> with Claude Code — not as a tech demo, but because one person literally cannot do 6 people's work otherwise. Every workflow is documented and transferable to client teams.
          </div>
        </div>
      </AnimatedSection>

      {/* S5: Growth */}
      <AnimatedSection className="cs-section cs-section--alt">
        <div className="cs-container">
          <div className="cs-section__head">
            <h2 className="cs-heading">Growth Engine</h2>
            <div className="cs-tags">
              <span className="cs-tag">Content</span>
              <span className="cs-tag">Advertising</span>
              <span className="cs-tag">Partnerships</span>
            </div>
          </div>
          <div className="cs-kpis">
            <div className="cs-kpi">
              <span className="cs-kpi__label">WeChat Audience</span>
              <span className="cs-kpi__value">0 → 800+</span>
              <p>Targeted B2B audience: enterprise executives, operations directors, sustainability leads.</p>
            </div>
            <div className="cs-kpi">
              <span className="cs-kpi__label">Lead Generation</span>
              <span className="cs-kpi__value">100+</span>
              <p>From paid advertising + KOL partnerships, optimized through weekly A/B testing.</p>
            </div>
            <div className="cs-kpi">
              <span className="cs-kpi__label">Sales Pipeline</span>
              <span className="cs-kpi__value">Active</span>
              <p>Multiple meetings booked with tier-1 enterprise group decision-makers, including HQ-level meetings.</p>
            </div>
          </div>
          <div className="cs-transform">
            <h3>The Transformation</h3>
            <table className="cs-transform__table">
              <thead>
                <tr><th></th><th className="cs-red">2025</th><th></th><th className="cs-green">2026</th></tr>
              </thead>
              <tbody>
                <tr><td>WeChat</td><td className="cs-red">None</td><td className="cs-arrow">→</td><td className="cs-green">800+</td></tr>
                <tr><td>Website</td><td className="cs-red">None</td><td className="cs-arrow">→</td><td className="cs-green">Live</td></tr>
                <tr><td>Leads</td><td className="cs-red">Zero</td><td className="cs-arrow">→</td><td className="cs-green">100+</td></tr>
                <tr><td>Pipeline</td><td className="cs-red">None</td><td className="cs-arrow">→</td><td className="cs-green">Active</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </AnimatedSection>

      {/* S6: AI Advantage */}
      <AnimatedSection className="cs-section">
        <div className="cs-container">
          <div className="cs-section__head">
            <h2 className="cs-heading">The AI Advantage</h2>
            <span className="cs-tag">How One Person Did All of This</span>
          </div>
          <div className="cs-advantage">
            <div className="cs-compare">
              <div className="cs-compare__old">
                <h4>Traditional Agency</h4>
                <ul>
                  <li>Content Writer</li>
                  <li>Translator</li>
                  <li>Video Editor</li>
                  <li>Web Developer</li>
                  <li>Ad Specialist</li>
                  <li>Designer</li>
                  <li>Data Analyst</li>
                </ul>
                <p className="cs-compare__total">= 6–7 person team</p>
              </div>
              <div className="cs-compare__new">
                <h4>AI-Powered Approach</h4>
                <ul>
                  <li>1 Cross-functional Strategist</li>
                  <li>18 Custom AI Workflows</li>
                  <li>Documented &amp; transferable</li>
                </ul>
                <p className="cs-compare__total cs-compare__total--green">= Same output, fraction of the cost</p>
              </div>
            </div>
            <div className="cs-workflows">
              <h4 className="cs-workflows__title">Workflow Examples</h4>
              <div className="cs-workflow">
                <div className="cs-workflow__info">
                  <h5>Content Creation</h5>
                  <p>Chinese article drafts with terminology checks and WeChat HTML formatting</p>
                </div>
                <span className="cs-workflow__time">3hrs → 30min</span>
              </div>
              <div className="cs-workflow">
                <div className="cs-workflow__info">
                  <h5>Video Localization</h5>
                  <p>English audio → Chinese subtitles via Whisper AI, edited and published</p>
                </div>
                <span className="cs-workflow__time">3–5 days → same day</span>
              </div>
              <div className="cs-workflow">
                <div className="cs-workflow__info">
                  <h5>Website Development</h5>
                  <p>Chinese website built, deployed, and iterated — design, code, content, hosting</p>
                </div>
                <span className="cs-workflow__time">Weeks → days</span>
              </div>
              <div className="cs-workflow">
                <div className="cs-workflow__info">
                  <h5>Executive Reporting</h5>
                  <p>Cross-channel analytics compiled into presentations for global HQ &amp; regional leadership</p>
                </div>
                <span className="cs-workflow__time">2 days → 2 hours</span>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* S7: Scorecard */}
      <AnimatedSection className="cs-section cs-section--alt">
        <div className="cs-container">
          <div className="cs-section__head">
            <h2 className="cs-heading">10-Month Scorecard</h2>
            <span className="cs-badge">2025 – 2026</span>
          </div>
          <div className="cs-scorecard">
            <div className="cs-score">
              <span className="cs-score__num">800+</span>
              <span className="cs-score__label">WeChat Followers<br />(from zero)</span>
            </div>
            <div className="cs-score">
              <span className="cs-score__num">#1</span>
              <span className="cs-score__label">AI Search Ranking<br />in China</span>
            </div>
            <div className="cs-score">
              <span className="cs-score__num">100+</span>
              <span className="cs-score__label">Leads<br />Generated</span>
            </div>
            <div className="cs-score">
              <span className="cs-score__num">1</span>
              <span className="cs-score__label">Person. Full-Stack<br />Delivery.</span>
            </div>
            <div className="cs-score">
              <span className="cs-score__num">18</span>
              <span className="cs-score__label">Custom AI<br />Workflows Built</span>
            </div>
            <div className="cs-score">
              <span className="cs-score__num">Live</span>
              <span className="cs-score__label">Chinese Website<br />Built &amp; Hosted in China</span>
            </div>
          </div>
          <p className="cs-scorecard__footer">
            All delivered by <strong>a single consultant — no agency, no outsourcing, no team</strong>.
          </p>
        </div>
      </AnimatedSection>

      {/* S8: CTA */}
      <section className="cs-cta">
        <div className="cs-container cs-cta__inner">
          <div className="cs-cta__left">
            <h2 className="cs-cta__title">
              Your China Market <span className="cs-accent">Is Waiting</span>.
            </h2>
            <ul className="cs-cta__list">
              <li><strong>Systematic market entry</strong> — from zero to full digital presence, not ad-hoc campaigns</li>
              <li><strong>AI-powered execution</strong> — agency output with freelancer agility and cost</li>
              <li><strong>Measurable pipeline</strong> — real leads and meetings, not just brand awareness</li>
            </ul>
          </div>
          <div className="cs-cta__card">
            <h3>Daniel Xing</h3>
            <span className="cs-cta__role">AI-Driven China Market Expert</span>
            <div className="cs-cta__contact">
              <span>danielxing.cn@gmail.com</span>
              <span>danielxing.com</span>
            </div>
            <a
              href="https://cal.com/danielxing/30min"
              className="cs-cta__btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Your Free 30-Min China Market Audit
            </a>
            <ul className="cs-cta__checks">
              <li>Your current China digital visibility score</li>
              <li>3 quick-win opportunities for your industry</li>
              <li>Realistic timeline and budget estimate</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
