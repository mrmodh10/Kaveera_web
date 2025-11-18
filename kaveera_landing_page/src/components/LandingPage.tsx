import React, { useEffect, useRef, useState } from "react";
import "./LandingPage.css";

const PHONE = "+1 (586) 219-1370";
const EMAIL = "admin@kaveeracreations.com";

const LandingPage: React.FC = () => {
  const [mobileActive, setMobileActive] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const navRef = useRef<HTMLElement | null>(null);

  // Smooth scroll to section by id
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileActive(false);
    }
  };

  // Close mobile menu on outside click & Escape
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node) &&
        navRef.current &&
        !navRef.current.contains(e.target as Node)
      ) {
        setMobileActive(false);
      }
    }
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setMobileActive(false);
    }
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div className="kaveera-root">
      <nav ref={navRef} className="nav">
        <div className="nav-container">
          <div className="nav-brand">
            <div className="nav-logo">KC</div>
            <span className="nav-title">Kaveera Creations</span>
          </div>

          <div className="nav-menu" id="navMenu" aria-hidden={mobileActive ? "false" : "true"}>
            <button className="nav-link" onClick={() => scrollToSection("about")}>
              About
            </button>
            <button className="nav-link" onClick={() => scrollToSection("services")}>
              Services
            </button>
            <button className="nav-link" onClick={() => scrollToSection("initiatives")}>
              Projects
            </button>
            <button className="nav-btn" onClick={() => scrollToSection("contact")}>
              Contact Us
            </button>
          </div>

          <button
            aria-label="Toggle menu"
            className="mobile-menu-btn"
            onClick={() => setMobileActive((s) => !s)}
            aria-expanded={mobileActive}
            aria-controls="mobileMenu"
          >
            ☰
          </button>
        </div>

        <div
          ref={mobileMenuRef}
          id="mobileMenu"
          className={`mobile-menu ${mobileActive ? "active" : ""}`}
          role="menu"
        >
          <button className="nav-link" onClick={() => scrollToSection("about")}>
            About
          </button>
          <button className="nav-link" onClick={() => scrollToSection("services")}>
            Services
          </button>
          <button className="nav-link" onClick={() => scrollToSection("initiatives")}>
            Projects
          </button>
          <button className="nav-btn" onClick={() => scrollToSection("contact")}>
            Contact Us
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-container">
          <div className="hero-badge">Est. 2021 | Michigan-Registered LLC</div>
          <h1 id="hero-title" className="hero-title">
            Innovating Simple,
            <br />
            <span className="hero-gradient">Scalable Digital Solutions</span>
          </h1>
          <p className="hero-description">
            We build intuitive mobile apps, web platforms, and digital experiences that transform how
            businesses and communities operate.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => scrollToSection("services")}>
              Explore Our Services →
            </button>
            <button className="btn-secondary" onClick={() => scrollToSection("contact")}>
              Get In Touch
            </button>
          </div>

          <div className="scroll-indicator" aria-hidden>
            <span style={{ fontSize: "2rem", color: "#2563eb" }}>↓</span>
          </div>
        </div>
      </section>

      <main className="container">
        {/* About */}
        <section id="about">
          <div className="about-card">
            <h2 className="section-title">About Us</h2>
            <div className="divider" />
            <p className="about-text">
              Kaveera Creations LLC was founded in 2021 with a vision to create intuitive digital products and
              deliver high-quality technology services. We focus on mobile app development, web platforms, e-commerce
              solutions, and digital automation. Our mission is to design technology that improves everyday
              experiences for consumers and businesses.
            </p>
          </div>
        </section>

        {/* Services */}
        <section id="services">
          <h2 className="section-title">What We Do</h2>
          <p className="section-subtitle">Comprehensive digital solutions tailored to your needs</p>
          <div className="services-grid">
            <article className="service-card" aria-labelledby="svc1">
              <div className="service-icon" aria-hidden>
                <span className="icon">📱</span>
              </div>
              <h3 id="svc1" className="service-title">
                Mobile App Development
              </h3>
              <p className="service-description">
                iOS, Android, and Cross-Platform solutions built with cutting-edge technology
              </p>
            </article>

            <article className="service-card" aria-labelledby="svc2">
              <div className="service-icon" aria-hidden>
                <span className="icon">🌐</span>
              </div>
              <h3 id="svc2" className="service-title">
                Web & Platform Engineering
              </h3>
              <p className="service-description">Scalable web applications and platforms designed for growth</p>
            </article>

            <article className="service-card" aria-labelledby="svc3">
              <div className="service-icon" aria-hidden>
                <span className="icon">✨</span>
              </div>
              <h3 id="svc3" className="service-title">
                Product Strategy & UX
              </h3>
              <p className="service-description">User-centered design and strategic consultation for digital success</p>
            </article>

            <article className="service-card" aria-labelledby="svc4">
              <div className="service-icon" aria-hidden>
                <span className="icon">🛒</span>
              </div>
              <h3 id="svc4" className="service-title">
                E-commerce Solutions
              </h3>
              <p className="service-description">Digital commerce integrations that drive sales and engagement</p>
            </article>

            <article className="service-card" aria-labelledby="svc5">
              <div className="service-icon" aria-hidden>
                <span className="icon">💻</span>
              </div>
              <h3 id="svc5" className="service-title">
                Custom Software Development
              </h3>
              <p className="service-description">Tailored IT services and solutions for unique business challenges</p>
            </article>

            <article className="service-card" aria-labelledby="svc6">
              <div className="service-icon" aria-hidden>
                <span className="icon">🤖</span>
              </div>
              <h3 id="svc6" className="service-title">
                AI-Assisted Experiences
              </h3>
              <p className="service-description">Modern intelligent applications powered by artificial intelligence</p>
            </article>
          </div>
        </section>

        {/* Initiatives */}
        <section id="initiatives">
          <div className="initiatives-card">
            <div className="initiatives-bg initiatives-bg-1" />
            <div className="initiatives-bg initiatives-bg-2" />
            <div className="initiatives-content">
              <h2 className="section-title" style={{ color: "white" }}>
                Current Initiatives
              </h2>
              <div className="divider" style={{ background: "white" }} />
              <div className="project-card">
                <h3 className="project-title">🏘️ HOA Digital Management Platform</h3>
                <p className="project-description">
                  A modern mobile solution for community announcements, payments, maintenance requests, and resident
                  engagement. Currently in development and launching pilot testing in 2025.
                </p>
                <div className="project-tags">
                  <span className="project-tag">Mobile-First</span>
                  <span className="project-tag">Community Management</span>
                  <span className="project-tag">Digital Payments</span>
                  <span className="project-tag">Launching 2025</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section>
          <div className="features-card">
            <h2 className="section-title">Why Choose Us</h2>
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-number">19+</div>
                <h3 className="feature-title">Years of Expertise</h3>
                <p className="feature-description">Industry-leading experience behind our leadership team</p>
              </div>
              <div className="feature-item">
                <div className="feature-number">100%</div>
                <h3 className="feature-title">Client Focused</h3>
                <p className="feature-description">Strong product management, engineering, and UX capabilities</p>
              </div>
              <div className="feature-item">
                <div className="feature-number">∞</div>
                <h3 className="feature-title">Scalable Solutions</h3>
                <p className="feature-description">Experience building platforms for growth and success</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact">
          <div className="contact-card">
            <h2 className="contact-title">Let's Build Something Great</h2>
            <p className="contact-subtitle">Ready to transform your digital presence? Get in touch with us today.</p>

            <div className="contact-grid">
              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <p className="contact-label">Email Us</p>
                <p className="contact-info">
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </p>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <p className="contact-label">Located In</p>
                <p className="contact-info">Michigan, USA</p>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <p className="contact-label">Call</p>
                <p className="contact-info">
                  <a href={`tel:+15862191370`}>{PHONE}</a>
                </p>
              </div>
            </div>

            <p className="contact-subtitle">Business inquiries welcome — we're here to help bring your vision to life.</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <div className="footer-container">
          <div>
            <div className="footer-brand">
              <div className="nav-logo">KC</div>
              <span className="nav-title" style={{ color: "white" }}>
                Kaveera Creations LLC
              </span>
            </div>
            <p className="footer-subtext">Innovating since 2021</p>
          </div>
          <div className="footer-info">
            <p className="footer-text">© 2025 Kaveera Creations LLC. All rights reserved.</p>
            <p className="footer-subtext">Michigan-Registered Technology Company</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;