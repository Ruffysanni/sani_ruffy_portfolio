import React from "react";

import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Code2,
  Database,
  BrainCircuit,
  ExternalLink,
} from "lucide-react";

const projects = [
  {
    title: "Credit Risk Investigation",
    category: "AI & Backend",
    description:
      "A modular service concept to help analysts review lending applications, policy requirements and financial evidence.",
    tags: ["Python", "FastAPI", "PostgreSQL", "Microsoft Azure"],
    tone: "peach",
    number: "01",
    // liveUrl: "https://your-credit-risk-app.netlify.app",
    githubUrl: "https://github.com/tag-ecosystemai/c1-navigators-project-3",
  },
  {
    title: "Local Study Assistant",
    category: "AI & Education",
    description:
      "A learning assistant concept for summarising study notes and generating questions grounded in uploaded materials.",
    tags: ["React", "FastAPI", "Ollama"],
    tone: "lavender",
    number: "02",
    // liveUrl: "https://your-credit-risk-app.netlify.app",
    // githubUrl: "https://github.com/Ruffysanni/your-credit-risk-repo",
  },
  {
    title: "Customer Insights",
    category: "Data Analytics",
    description:
      "An analytics workflow exploring customer data, preparing useful features and presenting findings in a clear format.",
    tags: ["Python", "SQL", "Power BI"],
    tone: "mint",
    number: "03",
    liveUrl: "https://customer-intelligence-classifier-fiwfa769tbpcymodkn3x9f.streamlit.app/",
    // githubUrl: "https://github.com/Ruffysanni/your-credit-risk-repo",
  },
];
const skills = [
  ["Python", "Programming"],
  ["SQL", "Data"],
  ["React", "Frontend"],
  ["FastAPI", "Backend"],
  ["PostgreSQL", "Data"],
  ["Machine Learning", "AI & Data"],
  ["RAG & LLMs", "AI & Data"],
  ["Power BI", "Analytics"],
  ["Git & GitHub", "Tools"],
  ["Java / Spring Boot", "Backend"],
  ["C# / ASP.NET Core", "Backend"],
  ["Pandas", "Data"],
];

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Contact", "#contact"],
  ];
  return (
    <header className="header">
      <a className="logo" href="#home">
        <span className="logo-symbol">s.</span>
        <span>
          Sanni Rufai<span className="logo-dot">/</span>
        </span>
      </a>
      <button
        className="menu-button"
        aria-label="Toggle menu"
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
      <nav className={open ? "nav nav-open" : "nav"}>
        {links.map(([name, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {name}
          </a>
        ))}
        <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>
          Let's have a conversation <ArrowUpRight size={15} />
        </a>
      </nav>
    </header>
  );
}
function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className={`project-art ${project.tone}`}>
        <span className="art-number">{project.number} / SELECTED WORK</span>
        <div className="art-shape">
          <span>{project.number}</span>
        </div>
        <span className="art-category">{project.category}</span>
      </div>
      <div className="project-content">
        <div className="project-title-row">
          <h3>{project.title}</h3>
          <ArrowUpRight size={20} />
        </div>
        <p>{project.description}</p>
        <div className="tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
export default function App() {
  const [filter, setFilter] = useState("All");
  const categories = [
    "All",
    "Programming",
    "Backend",
    "Data",
    "AI & Data",
    "Analytics",
    "Frontend",
    "Tools",
  ];
  const visibleSkills =
    filter === "All" ? skills : skills.filter((s) => s[1] === filter);
  return (
    <>
      <Header />
      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="availability">
              <span /> OPEN TO INTERESTING OPPORTUNITIES
            </div>
            <h1>
              Building useful things
              <br />
              with <em>data & code.</em>
            </h1>
            <p className="hero-description">
              I'm a data and software professional who enjoys turning complex
              problems into practical, thoughtful digital solutions.
            </p>
            <div className="hero-buttons">
              <a className="button primary" href="#projects">
                Explore my work <ArrowDownRight size={17} />
              </a>
              <a className="button secondary" href="#contact">
                Get in touch
              </a>
            </div>
            <div className="hero-links">
              <a href="https://github.com/Ruffysanni" target="_blank" rel="noreferrer">
                <Github size={17} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/sanni-rufai/" target="_blank" rel="noreferrer">
                <Linkedin size={17} /> LinkedIn
              </a>
            </div>
          </div>
          <div className="hero-art" aria-label="Abstract illustration">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-card card-back">
              <Code2 size={20} />
              <span>Thoughtful code</span>
            </div>
            <div className="art-card card-front">
              <div className="avatar">
                SR<span>.</span>
              </div>
              <span className="card-kicker">CURIOUS BY NATURE</span>
              <strong>
                Learn. Build.
                <br />
                Improve.
              </strong>
              <div className="card-footer">
                DATA <i>×</i> SOFTWARE
              </div>
            </div>
            <div className="art-bubble bubble-top">
              <BrainCircuit size={21} />
            </div>
            <div className="art-bubble bubble-bottom">
              <Database size={20} />
            </div>
            <div className="art-caption">
              CREATIVITY MEETS LOGIC <ArrowDownRight size={15} />
            </div>
          </div>
        </section>
        <section className="about section" id="about">
          <div className="section-label">
            01 <span>ABOUT</span>
          </div>
          <div className="about-main">
            <h2>
              Curiosity is where
              <br />
              good work <em>begins.</em>
            </h2>
            <div className="about-text">
              <p>
                I like understanding how things work, asking better questions
                and creating solutions that are useful beyond the screen.
              </p>
              <p>
                My interests span data analysis, machine learning, AI
                applications and backend development. I value clear thinking,
                maintainable code and technology that solves a real problem.
              </p>
              <div className="about-facts">
                <div>
                  <strong>01</strong>
                  <span>
                    Understand
                    <br />
                    the problem
                  </span>
                </div>
                <div>
                  <strong>02</strong>
                  <span>
                    Build with
                    <br />
                    intention
                  </span>
                </div>
                <div>
                  <strong>03</strong>
                  <span>
                    Learn and
                    <br />
                    iterate
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="skills section" id="skills">
          <div className="section-label">
            02 <span>TOOLKIT</span>
          </div>
          <div className="section-heading">
            <h2>
              Tools I work <em>with.</em>
            </h2>
            <p>
              A growing toolkit for exploring data, building applications and
              delivering clear insights.
            </p>
          </div>
          <div className="filters">
            {categories.map((c) => (
              <button
                key={c}
                className={filter === c ? "filter active" : "filter"}
                onClick={() => setFilter(c)}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="skills-grid">
            {visibleSkills.map(([name, group]) => (
              <div className="skill" key={name}>
                <span className="skill-mark">
                  <Code2 size={17} />
                </span>
                <span>{name}</span>
                <small>{group}</small>
              </div>
            ))}
          </div>
        </section>
        <section className="projects section" id="projects">
          <div className="section-label">
            03 <span>SELECTED WORK</span>
          </div>
          <div className="section-heading">
            <h2>
              Made with a <em>purpose.</em>
            </h2>
            <p>
              A few examples of the kinds of problems I enjoy working on.
              Replace these summaries with your verified project details before
              publishing.
            </p>
          </div>
          <div className="projects-grid">
            {projects.map((p) => (
              <ProjectCard key={p.number} project={p} />
            ))}
          </div>
          <a
            className="text-link"
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            More on GitHub <ArrowUpRight size={16} />
          </a>
        </section>
        <section className="contact section" id="contact">
          <div className="section-label">
            04 <span>CONTACT</span>
          </div>
          <div className="contact-inner">
            <div>
              <p className="contact-kicker">HAVE A PROJECT IN MIND?</p>
              <h2>
                Let's make
                <br />
                something <em>matter.</em>
              </h2>
            </div>
            <div className="contact-copy">
              <p>
                I'm always happy to connect with people working on meaningful
                ideas, data projects and useful software.
              </p>
              <a className="contact-email" href="mailto:hello@example.com">
                sruffy07@gmail.com <ArrowUpRight size={18} />
              </a>
              <div className="contact-socials">
                <a href="https://github.com/Ruffysanni" target="_blank" rel="noreferrer">
                  <Github size={17} /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/sanni-rufai/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin size={17} /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <a className="logo" href="#home">
          <span className="logo-symbol">s.</span>
          <span>
            Sanni Rufai<span className="logo-dot">/</span>
          </span>
        </a>
        <span>Designed with care · Built with React</span>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </>
  );
}
