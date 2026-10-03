import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import './style.css';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  {
    title: 'Programming',
    items: ['Python', 'Java', 'JavaScript', 'SQL', 'C', 'C++']
  },
  {
    title: 'Frontend',
    items: ['React.js', 'HTML5', 'CSS3', 'JavaScript']
  },
  {
    title: 'Backend & APIs',
    items: ['FastAPI', 'Node.js', 'REST APIs', 'Data Processing', 'Data Validation']
  },
  {
    title: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Database Design', 'SQL Optimization']
  },
  {
    title: 'Data & Analytics',
    items: ['Pandas', 'NumPy', 'Power BI', 'Data Analysis', 'Data Modeling', 'ETL Concepts']
  },
  {
    title: 'Tools & Cloud',
    items: ['Git', 'GitHub', 'Linux', 'VS Code', 'AWS Cloud']
  }
];

const experience = [
  {
    period: 'SEP 2025 — PRESENT',
    company: 'EOXS',
    role: 'Software Developer',
    text: 'Developed Python-based enterprise applications supporting data processing, workflow automation, database management and business operations. Built REST API integrations, custom modules and backend functionality while optimizing SQL and PostgreSQL operations.'
  },
  {
    period: 'DEC 2024 — AUG 2025',
    company: 'SY ASSOCIATES',
    role: 'Trainee Engineer',
    text: 'Contributed to enterprise software projects involving backend development, database management and workflow automation. Developed features using Java and SQL while supporting debugging, testing and application performance improvements.'
  }
];

const projects = [
  {
    n: '01',
    title: 'DineOps',
    category: 'ENTERPRISE APPLICATION',
    year: '2026',
    image: 'project-dineops.svg',
    desc: 'Restaurant and cloud-kitchen operations platform built around authentication, business workflows, inventory, purchasing, sales and reporting.',
    stack: 'React · FastAPI · PostgreSQL',
    link: 'https://github.com/siddants42/DineOps'
  },
  {
    n: '02',
    title: 'E-Commerce Website',
    category: 'FULL-STACK WEB',
    year: '2024',
    image: 'project-ecommerce.svg',
    desc: 'A responsive shopping experience focused on product discovery, cart flows, API integration and maintainable application structure.',
    stack: 'React · JavaScript · Node.js',
    link: ''
  },
  {
    n: '03',
    title: 'Credit Card Fraud Detection-FRAUDSHIELD',
    category: 'MACHINE LEARNING',
    year: '2024',
    image: 'project-fraud.svg',
    desc: 'A data-driven classification project for preprocessing transactions, exploring patterns and identifying potentially fraudulent activity.',
    stack: 'Python · Pandas · Scikit-learn',
    link: 'https://github.com/siddants42/FRAUDSHIELD'
  },
  {
    n: '04',
    title: 'Movie Recommendation System',
    category: 'DATA + ML',
    year: '2024',
    image: 'project-movies.svg',
    desc: 'A recommendation project using data processing and machine-learning techniques to surface relevant movie suggestions.',
    stack: 'Python · NumPy · Pandas · Scikit-learn',
    link: ''
  }
];

const certifications = [
  [
    'Deloitte Australia',
    'Technology Job Simulation — Forage',
    'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_P6iy73HDvhXnjAhJd_1750670783568_completion_certificate.pdf'
  ],
  [
    'NPTEL · IIT Kharagpur',
    'Database Management Systems (DBMS)',
    'https://nptel.ac.in/noc/E_Certificate/NPTEL23CS41S2456050403114090'
  ],
  [
    'IBM',
    'Python 101 for Data Science',
    'https://courses.cognitiveclass.ai/certificates/402d13d291ca4a29903b46888d042be2'
  ],
  [
    'AWS Academy',
    'Graduate — Cloud Foundations',
    'https://www.credly.com/badges/3b4e9165-8237-44da-a5dd-128fc780d1d3/linked_in_profile'
  ],
  [
    'Cisco',
    'Introduction to Cybersecurity',
    'https://www.credly.com/badges/24f01d55-e126-4656-9056-b67b6356ca5b/linked_in_profile'
  ],
  [
    'Coursera',
    'Object-Oriented Data Structures in C++',
    'https://www.coursera.org/account/accomplishments/verify/SVPG5GXLKQLG'
  ],
  [
    'Cisco',
    'Cybersecurity Essentials',
    'https://www.credly.com/badges/b31aa608-a690-4851-8078-9c60d759c960/linked_in_profile'
  ]
];

const marquee = [
  'PYTHON',
  'POSTGRESQL',
  'FASTAPI',
  'REACT',
  'REST APIS',
  'SOFTWARE DEVELOPMENT',
  'DATABASES',
  'FULL-STACK',
  'BACKEND'
];

function Greeting() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const h = now.getHours();

  let greeting = 'Good night';
  if (h >= 5 && h < 12) greeting = 'Good morning';
  else if (h >= 12 && h < 17) greeting = 'Good afternoon';
  else if (h >= 17 && h < 21) greeting = 'Good evening';

  const day = now.toLocaleDateString('en-IN', { weekday: 'long' });
  const date = now.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });
  const time = now.toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });

  return (
    <div className="hero-greeting">
      <span className="greet-dot" />
      <span className="greet-text">
        {greeting}
        <em>, welcome.</em>
      </span>
      <span className="greet-meta mono">
        {day} · {date} · {time}
      </span>
    </div>
  );
}

function App() {
  const [menu, setMenu] = useState(false);
  const [dark, setDark] = useState(true);
  const [selected, setSelected] = useState(null);

  const cursor = useRef(null);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  }, [dark]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    lenis.on('scroll', ScrollTrigger.update);

    const ctx = gsap.context(() => {
      gsap.from('.hero-greeting,.hero-kicker, .hero-title, .hero-copy, .hero-actions', {
        y: 28,
        opacity: 0,
        duration: 0.8,
        stagger: 0.11,
        ease: 'power3.out'
      });

      gsap.from('.hero-side', {
        x: 45,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.25
      });

      gsap.utils.toArray('.reveal').forEach((el) => {
        gsap.from(el, {
          y: 35,
          opacity: 0,
          duration: 0.75,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 84%',
            once: true
          }
        });
      });

      gsap.utils
        .toArray('.skill-row, .experience-row, .project-card, .cert-row')
        .forEach((el) => {
          gsap.from(el, {
            y: 22,
            opacity: 0,
            duration: 0.55,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 92%',
              once: true
            }
          });
        });

      gsap.to('.marquee-track', {
        xPercent: -50,
        duration: 24,
        repeat: -1,
        ease: 'none'
      });

      gsap.to('.orb', {
        y: -18,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      gsap.to('.code-window', {
        y: -10,
        duration: 3.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      gsap.to('.hero-orbit', {
        rotate: '+=360',
        duration: 20,
        repeat: -1,
        ease: 'none'
      });
    });

    const move = (e) => {
      if (!cursor.current) return;

      cursor.current.style.transform =
        `translate3d(${e.clientX - 5}px, ${e.clientY - 5}px, 0)`;
    };

    window.addEventListener('pointermove', move);

    return () => {
      ctx.revert();
      lenis.destroy();
      window.removeEventListener('pointermove', move);
    };
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    });

    setMenu(false);
  };

  return (
    <div className="site">

      <div className="cursor-dot" ref={cursor} />
      <div className="noise" />

      <header className="nav">

        <button
          className="brand"
          onClick={() => go('home')}
        >
          SIDDHANT<span>°</span>
        </button>

        <nav className={menu ? 'open' : ''}>
          {[
            'about',
            'skills',
            'experience',
            'projects',
            'education',
            'certifications',
            'contact'
          ].map((x) => (
            <button
              key={x}
              onClick={() => go(x)}
            >
              {x}
            </button>
          ))}
        </nav>

        <div className="nav-tools">

          <button onClick={() => setDark(!dark)}>
            {dark ? 'LIGHT' : 'DARK'}
          </button>

          <button
            className="menu-btn"
            onClick={() => setMenu(!menu)}
          >
            MENU
          </button>

        </div>

      </header>

      <main>

        {/* ================= HERO ================= */}

        <section id="home" className="hero wrap">

          <div className="hero-main">
             <Greeting />

            <div className="hero-kicker mono">
              / SOFTWARE DEVELOPER · DELHI
            </div>

            <h1 className="hero-title">
              I build <span className="outline">software</span>
              <br />
              that <span className="accent-word">works.</span>
            </h1>

            <p className="hero-copy">
              Software Developer focused on backend systems, full-stack
              applications, databases and enterprise software. I enjoy
              turning ideas and requirements into software that is useful,
              reliable and easy to work with.
            </p>

            <div className="hero-actions">

              <button
                className="pill primary"
                onClick={() => go('projects')}
              >
                READ MY WORK ↗
              </button>

              <button
                className="pill"
                onClick={() => go('contact')}
              >
                CONTACT ↗
              </button>

            </div>

            <div className="rotating-line">

              <span className="mono">
                CURRENTLY BUILDING
              </span>

              <span className="word-window">

                <span className="word-track">

                  <span>enterprise systems</span>
                  <span>backend APIs</span>
                  <span>data workflows</span>
                  <span>full-stack products</span>
                  <span>software solutions</span>

                </span>

              </span>

            </div>

          </div>

          {/* SOFTWARE ANIMATION */}

          <aside
            className="hero-side hero-visual"
            aria-label="Software development visual"
          >

            <div className="hero-index mono">
              01 — SOFTWARE / SYSTEMS
            </div>

            <div className="hero-orbit orbit-one" />
            <div className="hero-orbit orbit-two" />

            <div className="floating-tech tech-python">
              <span>PY</span>
              Python
            </div>

            <div className="floating-tech tech-react">
              <span>RE</span>
              React
            </div>

            <div className="floating-tech tech-api">
              <span>API</span>
              REST API
            </div>

            <div className="floating-tech tech-db">
              <span>DB</span>
              PostgreSQL
            </div>

            <div className="code-window">

              <div className="window-header">

                <div className="window-dots">
                  <span />
                  <span />
                  <span />
                </div>

                <span className="window-title">
                  siddhant.dev
                </span>

              </div>

              <div className="code-content mono">

                <div>
                  <span className="code-purple">const</span>{' '}
                  <span className="code-blue">
                    developer
                  </span>{' '}
                  = {'{'}
                </div>

                <div className="code-indent">
                  <span className="code-red">name:</span>{' '}
                  <span className="code-green">
                    "Siddhant"
                  </span>,
                </div>

                <div className="code-indent">
                  <span className="code-red">role:</span>{' '}
                  <span className="code-green">
                    "Software Developer"
                  </span>,
                </div>

                <div className="code-indent">
                  <span className="code-red">backend:</span>{' '}
                  <span className="code-green">
                    "Python"
                  </span>,
                </div>

                <div className="code-indent">
                  <span className="code-red">frontend:</span>{' '}
                  <span className="code-green">
                    "React"
                  </span>,
                </div>

                <div className="code-indent">
                  <span className="code-red">database:</span>{' '}
                  <span className="code-green">
                    "PostgreSQL"
                  </span>
                </div>

                <div>{'}'}</div>

                <div className="terminal-line">
                  <span className="terminal-symbol">
                    ›
                  </span>

                  building useful software

                  <span className="typing-cursor" />
                </div>

              </div>

            </div>

            <div className="hero-note">

              <span className="mono">
                BASED IN
              </span>

              <b>
                Delhi, India
              </b>

              <span className="mono">
                OPEN TO
              </span>

              <b>
                Software Developer · Backend · Full Stack
              </b>

            </div>

          </aside>

        </section>

        {/* MARQUEE */}

        <div className="marquee">

          <div className="marquee-track">

            {[...marquee, ...marquee].map((x, i) => (
              <span key={i}>
                {x}
                <i>✦</i>
              </span>
            ))}

          </div>

        </div>

        {/* ABOUT */}

        <section
          id="about"
          className="section wrap reveal"
        >

          <div className="section-label mono">
            02 / ABOUT
          </div>

          <div className="about-editorial">

            <div className="about-photo">

              <img
                src="/assets/siddhant-profile.jpg"
                alt="Siddhant Pathak"
              />

              <span className="mono">
                SIDDHANT PATHAK · DELHI
              </span>

            </div>

            <div className="about-story">

              <h2 className="display">
                Software that is <em>useful</em>,
                reliable and thoughtfully built.
              </h2>

              <p className="lead">
                I enjoy turning ideas and requirements
                into software that solves practical problems.
              </p>

              <p>
                My work sits across backend engineering,
                databases, APIs and full-stack interfaces.
                I like understanding how a system should
                behave, shaping the data behind it, and
                carrying that thinking into a clear user
                experience.
              </p>

              <p>
                My professional experience includes
                enterprise application development at EOXS
                and SY Associates, working with Python,
                SQL, PostgreSQL, Java and business workflows.
              </p>

              <div className="about-meta">

                <span>
                  <b>FOCUS</b>
                  Backend · Full Stack
                </span>

                <span>
                  <b>BASED</b>
                  Delhi, India
                </span>

                <span>
                  <b>OPEN TO</b>
                  Software / Python / Backend roles
                </span>

              </div>

            </div>

          </div>

        </section>

        {/* SKILLS */}

        <section
          id="skills"
          className="section wrap reveal"
        >

          <div className="section-label mono">
            03 / SKILLS
          </div>

          <h2 className="display narrow">
            The tools behind <em>the work.</em>
          </h2>

          <div className="skill-grid">

            {skills.map((group, i) => (

              <div
                className="skill-row"
                key={group.title}
              >

                <span className="skill-no mono">
                  0{i + 1}
                </span>

                <h3>
                  {group.title}
                </h3>

                <div className="skill-list">

                  {group.items.map((item) => (
                    <span key={item}>
                      {item}
                    </span>
                  ))}

                </div>

              </div>

            ))}

          </div>

        </section>

        {/* EXPERIENCE */}

        <section
          id="experience"
          className="section wrap reveal"
        >

          <div className="section-label mono">
            04 / EXPERIENCE
          </div>

          <h2 className="display narrow">
            Where I have <em>worked.</em>
          </h2>

          <div className="experience-list">

            {experience.map((job, i) => (

              <article
                className="experience-row"
                key={job.company}
              >

                <span className="job-no mono">
                  0{i + 1}
                </span>

                <div className="job-company">

                  <h3>
                    {job.company}
                  </h3>

                  <span className="mono">
                    {job.period}
                  </span>

                </div>

                <div className="job-description">

                  <h4>
                    {job.role}
                  </h4>

                  <p>
                    {job.text}
                  </p>

                </div>

                <span className="arrow">
                  ↗
                </span>

              </article>

            ))}

          </div>

        </section>

        {/* PROJECTS */}

        <section
          id="projects"
          className="section wrap reveal"
        >

          <div className="section-label mono">
            05 / SELECTED WORK
          </div>

          <div className="project-heading">

            <h2 className="display">
              Things I have <em>built.</em>
            </h2>

            <p>
              Projects across enterprise software,
              web development and machine learning.
            </p>

          </div>

          <div className="project-list">

            {projects.map((p) => (

              <article
                className="project-card"
                key={p.title}
                onClick={() => setSelected(p)}
              >

                <div className="project-image">

                  <img
                    src={`/assets/${p.image}`}
                    alt=""
                  />

                  <span className="project-no mono">
                    {p.n}
                  </span>

                  <span className="project-year mono">
                    {p.year}
                  </span>

                </div>

                <div className="project-info">

                  <div>

                    <span className="mono category">
                      {p.category}
                    </span>

                    <h3>
                      {p.title}
                    </h3>

                  </div>

                  <span className="arrow">
                    ↗
                  </span>

                </div>

                <p>
                  {p.desc}
                </p>

                <div className="project-stack mono">
                  {p.stack}
                </div>

              </article>

            ))}

          </div>

        </section>

        {/* EDUCATION */}

        <section
          id="education"
          className="section wrap reveal"
        >

          <div className="section-label mono">
            06 / EDUCATION
          </div>

          <div className="education-editorial">

            <div className="mono">
              2020 — 2024
            </div>

            <div>

              <span className="mono">
                SRM INSTITUTE OF SCIENCE AND TECHNOLOGY
              </span>

              <h2>
                B.Tech. Computer Science & Engineering
              </h2>

              <p>
                Ghaziabad, India
              </p>

            </div>

            <div className="grade">

              <span className="mono">
                CGPA
              </span>

              <b>
                8.78
              </b>

            </div>

          </div>

        </section>

        {/* CERTIFICATIONS */}

        <section
          id="certifications"
          className="section wrap reveal"
        >

          <div className="section-label mono">
            07 / CERTIFICATIONS
          </div>

          <h2 className="display narrow">
            Proof of <em>curiosity.</em>
          </h2>

          <div className="cert-list">

           {certifications.map((c, i) => (

  <a
    className="cert-row"
    key={c[1]}
    href={c[2]}
    target="_blank"
    rel="noreferrer"
  >

    <span className="mono">
      0{i + 1}
    </span>

    <span className="mono issuer">
      {c[0]}
    </span>

    <b>
      {c[1]}
    </b>

    <span>
      ↗
    </span>

  </a>

))}

          </div>

        </section>

        {/* CONTACT */}

        <section
          id="contact"
          className="contact-section"
        >

          <div className="wrap">

            <div className="section-label mono">
              08 / CONTACT
            </div>

            <div className="contact-grid">

              <div>

                <h2 className="display">
                  Let's make something <em>useful.</em>
                </h2>

                <p>
                  For software development opportunities,
                  collaborations or simply a conversation
                  about building things.
                </p>

              </div>

              <div className="contact-links">

                <a href="tel:+919336231778">

                  <span className="mono">
                    PHONE
                  </span>

                  +91 93362 31778 ↗

                </a>

                <a href="mailto:siddhantpathak1214@gmail.com">

                  <span className="mono">
                    EMAIL
                  </span>

                  siddhantpathak1214@gmail.com ↗

                </a>

                <a
                  href="https://www.linkedin.com/in/pathak-sid/"
                  target="_blank"
                  rel="noreferrer"
                >

                  <span className="mono">
                    LINKEDIN
                  </span>

                  Connect with me ↗

                </a>

                <a
                  href="https://github.com/siddants42"
                  target="_blank"
                  rel="noreferrer"
                >

                  <span className="mono">
                    GITHUB
                  </span>

                  github.com/siddants42 ↗

                </a>

              </div>

            </div>

            <footer>

              <span>
                © {new Date().getFullYear()} SIDDHANT PATHAK
              </span>

              <span className="mono">
                SOFTWARE · SYSTEMS · SOLUTIONS
              </span>

              <button onClick={() => go('home')}>
                BACK TO TOP ↑
              </button>

            </footer>

          </div>

        </section>

      </main>

      {/* PROJECT MODAL */}

      {selected && (

        <div
          className="modal"
          onClick={() => setSelected(null)}
        >

          <div
            onClick={(e) => e.stopPropagation()}
          >

            <button
              onClick={() => setSelected(null)}
            >
              CLOSE ×
            </button>

            <span className="mono category">
              {selected.category}
            </span>

            <h2>
              {selected.title}
            </h2>

            <p>
              {selected.desc}
            </p>

            <div className="project-stack mono">
              {selected.stack}
            </div>

            {selected.link && (

              <a
                className="pill primary"
                href={selected.link}
                target="_blank"
                rel="noreferrer"
              >
                OPEN PROJECT ↗
              </a>

            )}

          </div>

        </div>

      )}

    </div>
  );
}

export default App;