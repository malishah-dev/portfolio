import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [isMobileFlipped, setIsMobileFlipped] = useState(false);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 700px)");
    let previousScrollY = window.scrollY;

    const handleScroll = () => {
      if (!mobileQuery.matches) {
        return;
      }

      const currentScrollY = window.scrollY;

      if (currentScrollY === previousScrollY) {
        return;
      }

      setIsMobileFlipped(currentScrollY > previousScrollY);
      previousScrollY = currentScrollY;
    };

    const handleViewportChange = () => {
      if (!mobileQuery.matches) {
        setIsMobileFlipped(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    mobileQuery.addEventListener("change", handleViewportChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      mobileQuery.removeEventListener("change", handleViewportChange);
    };
  }, []);

  const skills = [
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "Tailwind CSS",
    "AWS",
    "Python",
    "C / C++",
    "REST APIs",
    "DSA",
  ];

  const projects = [
    {
      number: "01",
      type: "Product platform",
      title: "Notes Seller",
      href: "https://github.com/malishah-dev/Notes-seller",
      description:
        "A focused platform for free and paid PDFs, with secure file handling and a user experience built around easy discovery.",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      number: "02",
      type: "Utility product",
      title: "PDF Conversion Tool",
      href: "https://github.com/malishah-dev/file-converter",
      description:
        "A practical conversion workflow that transforms PDFs into multiple formats while keeping accuracy and efficiency at the center.",
      tags: ["Python", "APIs", "Automation"],
    },
    {
      number: "03",
      type: "AI-powered tool",
      title: "Image Background Remover",
      href: "https://github.com/malishah-dev/Ai-image-background-remover",
      description:
        "An AI-assisted image utility for automated background removal, designed to deliver clean results with minimal effort.",
      tags: ["AI", "Python", "Image processing"],
    },
  ];

  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="monogram" href="#top" aria-label="Muhammad Ali Shah home">
          MAS<span>.</span>
        </a>
        <div className="nav-links">
          <a href="#work">Selected work</a>
          <a href="#about">About</a>
          <a className="nav-contact" href="#contact">
            Let's talk <span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>
      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> Available for select projects
          </p>
          <h1>
            Building digital
            <br />
            <em>experiences</em>
            <br />
            that move work forward.
          </h1>
          <p className="hero-intro">
            I&apos;m Muhammad Ali Shah, a full-stack developer turning
            thoughtful ideas into fast, scalable products.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">
              Explore my work <span aria-hidden="true">↓</span>
            </a>
            <a className="text-link" href="mailto:mshah123451@gmail.com">
              mshah123451@gmail.com <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <div className="hero-aside" aria-label="Profile details">
          <div
            className={`portrait-flip${isMobileFlipped ? " mobile-flipped" : ""}`}
            tabIndex="0"
            role="button"
            aria-label="Reveal Muhammad Ali Shah's developer profile"
          >
            <div className="portrait-card">
              <div className="portrait-face portrait-front" aria-hidden="true">
                M
              </div>
              <div className="portrait-face portrait-back">
                <strong>MAS</strong>
                <span>
                  FULL-STACK
                  <br />
                  DEVELOPER
                </span>
                <small>REACT · NODE · AWS</small>
              </div>
            </div>
          </div>
          <div className="hero-note">
            <span>01</span>
            <p>
              From first sketch
              <br />
              to final deploy.
            </p>
          </div>
        </div>
      </section>

      <section className="signal-bar">
        <div className="shell signal-grid">
          <p>
            Based in <strong>Pakistan</strong>
          </p>
          <p>
            Focus <strong>MERN / Cloud</strong>
          </p>
          <p>
            Currently <strong>BS Software Engineering</strong>
          </p>
        </div>
      </section>

      <section className="work shell section" id="work">
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <p className="section-index">02 / 04</p>
        </div>
        <div className="projects">
          {projects.map((project) => (
            <a
              className="project"
              key={project.number}
              href={project.href}
              target="_blank"
              rel="noreferrer"
            >
              <div className="project-number">{project.number}</div>
              <div className="project-content">
                <p className="project-type">{project.type}</p>
                <h2>{project.title}</h2>
                <p className="project-description">{project.description}</p>
                <div className="tag-list">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <span className="project-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="about section" id="about">
        <div className="shell about-grid">
          <div className="section-heading">
            <p className="eyebrow">The short version</p>
            <p className="section-index">03 / 04</p>
          </div>
          <div>
            <h2 className="about-title">
              A developer who cares about the details <em>and</em> the bigger
              picture.
            </h2>
            <p className="about-copy">
              Passionate and results-driven, I bring ideas to life across the
              stack. I care about clean architecture, clear communication, and
              products that feel simple to use even when the problems behind
              them are complex.
            </p>
            <p className="about-copy">
              Beyond the interface, I work with APIs, databases, AWS deployment,
              and the systems that help a product grow with confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="capabilities shell section">
        <div className="section-heading">
          <p className="eyebrow">Tools of the trade</p>
          <p className="section-index">04 / 04</p>
        </div>
        <div className="skills-wrap">
          {skills.map((skill) => (
            <span className="skill" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="contact shell" id="contact">
        <p className="eyebrow">Have a project in mind?</p>
        <h2>
          Let&apos;s make something
          <br />
          <em>worth remembering.</em>
        </h2>
        <div className="contact-links">
          <a
            className="button button-light"
            href="mailto:mshah123451@gmail.com"
          >
            Start a conversation <span aria-hidden="true">↗</span>
          </a>
          <a href="https://wa.me/923322158358" target="_blank" rel="noreferrer">
            WhatsApp <span aria-hidden="true">↗</span>
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-ali-shah-411b8a36b"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
          <a
            href="https://www.facebook.com/share/19GqU4z9Je/"
            target="_blank"
            rel="noreferrer"
          >
            Facebook <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <footer className="footer shell">
        <span>© 2026 Muhammad Ali Shah</span>
        <a
          href="https://github.com/malishah-dev"
          target="_blank"
          rel="noreferrer"
        >
          github.com/malishah-dev ↗
        </a>
        <span>Designed & built with intention.</span>
      </footer>
    </main>
  );
}

export default App;
