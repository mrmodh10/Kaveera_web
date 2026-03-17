import React, { useEffect, useRef, useState } from "react";
import "./PrivacyPolicy.css";

const PHONE = "+1 (586) 219-1370";
const EMAIL = "admin@kaveeracreations.com";

const PrivacyPolicy: React.FC = () => {
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
            <button className="nav-link" onClick={() => scrollToSection("overview")}>
              Overview
            </button>
            <button className="nav-link" onClick={() => scrollToSection("data-collection")}>
              Data Collection
            </button>
            <button className="nav-link" onClick={() => scrollToSection("data-usage")}>
              Data Usage
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
          <button className="nav-link" onClick={() => scrollToSection("overview")}>
            Overview
          </button>
          <button className="nav-link" onClick={() => scrollToSection("data-collection")}>
            Data Collection
          </button>
          <button className="nav-link" onClick={() => scrollToSection("data-usage")}>
            Data Usage
          </button>
          <button className="nav-btn" onClick={() => scrollToSection("contact")}>
            Contact Us
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-container">
          <div className="hero-badge">Privacy & Data Protection</div>
          <h1 id="hero-title" className="hero-title">
            Privacy Policy
          </h1>
          <p className="hero-description">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>

          <div className="scroll-indicator" aria-hidden>
            <span style={{ fontSize: "2rem", color: "#2563eb" }}>↓</span>
          </div>
        </div>
      </section>

      <main className="container">
        {/* Overview */}
        <section id="overview">
          <div className="about-card">
            <h2 className="section-title">Overview</h2>
            <div className="divider" />
            <p className="about-text">
              At Kaveera Creations LLC, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. By using our services, you agree to the collection and use of information in accordance with this policy.
            </p>
          </div>
        </section>

        {/* Data Collection */}
        <section id="data-collection">
          <h2 className="section-title">Information We Collect</h2>
          <p className="section-subtitle">We collect information to provide better services</p>
          <div className="services-grid">
            <article className="service-card" aria-labelledby="dc1">
              <div className="service-icon" aria-hidden>
                <span className="icon">📧</span>
              </div>
              <h3 id="dc1" className="service-title">
                Contact Information
              </h3>
              <p className="service-description">
                Email addresses and phone numbers provided when you contact us or subscribe to our services.
              </p>
            </article>

            <article className="service-card" aria-labelledby="dc2">
              <div className="service-icon" aria-hidden>
                <span className="icon">🌐</span>
              </div>
              <h3 id="dc2" className="service-title">
                Usage Data
              </h3>
              <p className="service-description">
                Information about how you access and use our website, including IP addresses and browser information.
              </p>
            </article>

            <article className="service-card" aria-labelledby="dc3">
              <div className="service-icon" aria-hidden>
                <span className="icon">💬</span>
              </div>
              <h3 id="dc3" className="service-title">
                Communications
              </h3>
              <p className="service-description">
                Messages and inquiries you send to us through our contact forms or email.
              </p>
            </article>
          </div>
        </section>

        {/* Data Usage */}
        <section id="data-usage">
          <div className="features-card">
            <h2 className="section-title">How We Use Your Information</h2>
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-number">01</div>
                <h3 className="feature-title">Service Delivery</h3>
                <p className="feature-description">To provide and maintain our services</p>
              </div>
              <div className="feature-item">
                <div className="feature-number">02</div>
                <h3 className="feature-title">Communication</h3>
                <p className="feature-description">To respond to your inquiries and provide support</p>
              </div>
              <div className="feature-item">
                <div className="feature-number">03</div>
                <h3 className="feature-title">Improvement</h3>
                <p className="feature-description">To analyze usage and improve our services</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact">
          <div className="contact-card">
            <h2 className="contact-title">Questions About Privacy?</h2>
            <p className="contact-subtitle">If you have any questions about this Privacy Policy, please contact us.</p>

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

            <p className="contact-subtitle">We are committed to protecting your privacy and ensuring transparency.</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <div className="footer-container">
          <div className="footer-brand">
            <div className="nav-logo">KC</div>
            <span className="nav-title" style={{ color: "white" }}>
              Kaveera Creations LLC
            </span>
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

export default PrivacyPolicy;