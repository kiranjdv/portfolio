import { useState, useEffect } from "react";
import {
  Github,
  ExternalLink,
  Mail,
  Linkedin,
  Menu,
  X,
  ArrowUpRight,
  Phone,
  MapPin,
  GraduationCap,
  Award,
  Check,
  Copy,
  Code2,
  Database,
  Cpu,
  Layers,
  Sparkles,
  BookOpen,
  MessageCircle,
  Send,
  ShieldCheck,
  Clock,
} from "lucide-react";

const NAV_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education & Certs", href: "#education" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

interface Project {
  id: number;
  name: string;
  category: string;
  tagline: string;
  description: string;
  highlights: string[];
  tech: string[];
  image: string;
  github: string;
  live: string;
  badge?: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    name: "IronLog",
    category: "Full Stack & PWA",
    tagline: "Offline-First Fitness Tracker Application",
    badge: "Featured PWA",
    description:
      "A high-performance progressive web application that lets users log gym workouts without internet connectivity, featuring automatic cloud synchronization as soon as connection is restored.",
    highlights: [
      "Built an offline-first fitness tracker that lets users log gym workouts without internet connectivity",
      "Implemented automatic cloud synchronization when the device reconnects to the internet",
      "Developed Dashboard, Workout Planner, Body Measurements, and Analytics modules to track workout progress",
      "Added CSV export for data backup and migration across devices",
      "Designed a responsive, mobile-friendly interface using reusable React components",
      "Deployed the application on Vercel and managed source code with Git and GitHub",
    ],
    tech: ["React", "TypeScript", "PWA", "IndexedDB", "Git", "GitHub", "Vercel"],
    image:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=900&auto=format&fit=crop&q=80",
    github: "https://github.com/kiranjdv/IronLog",
    live: "https://vercel.com",
  },
  {
    id: 2,
    name: "Heart Disease Prediction System",
    category: "Machine Learning & Python",
    tagline: "Clinical ML Pipeline & Diagnostic Web Application",
    badge: "Machine Learning",
    description:
      "A clinical machine learning system predicting the presence of heart disease from 13 clinical features using the UCI dataset, complete with a Flask web app and automated PDF diagnostic reports.",
    highlights: [
      "Built a model to predict heart disease from 13 clinical features (UCI dataset, 303 patients)",
      "Compared six algorithms using ROC-AUC, recall, and 5-fold cross-validation; selected KNN (ROC-AUC 0.89, recall 0.91)",
      "Developed a Flask web app that returns predictions and generates a PDF diagnostic report",
    ],
    tech: ["Python", "scikit-learn", "pandas", "Flask"],
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&auto=format&fit=crop&q=80",
    github: "https://github.com/kiranjdv/HDPS",
    live: "#",
  },
  {
    id: 3,
    name: "Student Management System",
    category: "Full Stack & Web Application",
    tagline: "CRUD Academic Records Portal",
    badge: "Full-Stack CRUD",
    description:
      "A full-stack CRUD web application engineered to manage student records efficiently, with robust search queries, data validation, and persistent PostgreSQL storage.",
    highlights: [
      "Built a CRUD-based web application to manage student records",
      "Implemented add, update, delete, and search functionality",
      "Connected the application to PostgreSQL for persistent data storage",
    ],
    tech: ["Python", "Flask", "PostgreSQL", "HTML", "CSS", "Jinja2"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&auto=format&fit=crop&q=80",
    github: "https://github.com/kiranjdv/StudentMngtSys",
    live: "#",
  },
];

const SKILL_CATEGORIES = [
  {
    name: "Languages",
    icon: Code2,
    skills: ["JavaScript", "TypeScript", "Python", "SQL", "HTML", "CSS"],
  },
  {
    name: "Frameworks & Libraries",
    icon: Layers,
    skills: ["React", "Tailwind CSS", "Flask", "scikit-learn", "pandas"],
  },
  {
    name: "Databases",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "MongoDB", "IndexedDB"],
  },
  {
    name: "Tools & Platforms",
    icon: Sparkles,
    skills: ["Git", "GitHub", "VS Code", "Vercel", "REST APIs"],
  },
  {
    name: "Core Concepts",
    icon: Cpu,
    skills: [
      "Responsive Web Design",
      "Machine Learning",
      "Progressive Web Apps (PWA)",
      "CRUD Operations",
      "Object-Oriented Programming (OOP)",
      "Version Control",
      "Debugging & Problem Solving",
    ],
  },
];

interface Certification {
  id: string;
  name: string;
  badgeTitle: string;
  issuer: string;
  issueDate: string;
  hours?: string;
  description: string;
  skillsCovered: string[];
  credlyUrl?: string;
  verified: boolean;
}

const CERTIFICATIONS: Certification[] = [
  {
    id: "aws-ml",
    name: "AWS Academy Graduate - Machine Learning Foundations",
    badgeTitle: "Machine Learning Foundations",
    issuer: "AWS Academy",
    issueDate: "Oct 2026",
    hours: "20 hours completed",
    description:
      "Completed a hands-on training program covering machine learning fundamentals, data preparation, model training, and evaluation techniques.",
    skillsCovered: [
      "Machine Learning Fundamentals",
      "Data Preparation",
      "Model Training",
      "Evaluation Techniques",
      "AWS AI/ML Services",
    ],
    credlyUrl: "https://www.credly.com/go/pX8AVAqF",
    verified: true,
  },
  {
    id: "aws-cloud",
    name: "AWS Academy Graduate - Cloud Foundations",
    badgeTitle: "Cloud Foundations",
    issuer: "AWS Academy",
    issueDate: "Oct 2025",
    hours: "20 hours completed",
    description:
      "Completed a hands-on program covering troubleshooting, networking, system administration, and security fundamentals.",
    skillsCovered: [
      "Cloud Architecture",
      "System Administration",
      "Networking",
      "Cloud Security",
      "Troubleshooting",
    ],
    credlyUrl: "https://www.credly.com/go/liL5WR3L",
    verified: true,
  },
];

const STATS = [
  { label: "CGPI (BE IT)", value: "7.60" },
  { label: "Expected Graduation", value: "2027" },
  { label: "Key Projects", value: "3" },
  { label: "AWS Certifications", value: "2 Badges" },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category.includes(selectedCategory));

  return (
    <div
      className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground"
      style={{ fontFamily: "'Onest', sans-serif" }}
    >
      {/* ── NAV ── */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => scrollTo("#hero")}
            className="flex items-center gap-2 group text-left cursor-pointer"
          >
            <span
              className="text-base font-bold tracking-[0.18em] text-foreground/80 group-hover:text-primary transition-colors"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              KIRAN<span className="text-primary">.</span>J
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=kj018173@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm bg-primary text-primary-foreground font-semibold px-4 py-2 hover:bg-primary/90 transition-all shadow-sm"
              style={{ borderRadius: "var(--radius)" }}
            >
              <Mail size={14} />
              Contact Me
            </a>
          </div>

          <button
            className="md:hidden text-foreground/80 hover:text-foreground p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-card/95 backdrop-blur-md border-b border-border px-6 pb-6 pt-3 flex flex-col gap-3">
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="text-left text-base text-muted-foreground hover:text-foreground transition-colors py-1.5"
              >
                {l.label}
              </button>
            ))}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=kj018173@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="self-start inline-flex items-center gap-2 text-sm bg-primary text-primary-foreground px-4 py-2 font-semibold mt-2"
              style={{ borderRadius: "var(--radius)" }}
            >
              <Mail size={14} />
              kj018173@gmail.com
            </a>
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section
        id="hero"
        className="relative min-h-[92vh] flex flex-col justify-end pb-16 pt-32 px-6 max-w-6xl mx-auto"
      >
        {/* Subtle background glow effect */}
        <div
          className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10"
          aria-hidden="true"
        />

        <div className="mb-6 flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/80 border border-border rounded-full">
            <span
              className="w-2 h-2 rounded-full bg-primary"
              style={{ animation: "pulse 2s infinite" }}
            />
            <span
              className="text-xs text-muted-foreground tracking-[0.14em] uppercase"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Available for Internships & Roles
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
            <MapPin size={13} className="text-primary" />
            <span>Mumbai, India</span>
          </div>
        </div>

        <h1
          className="font-black leading-[0.88] tracking-tight mb-8 uppercase"
          style={{ fontSize: "clamp(3.8rem, 11vw, 10.5rem)" }}
        >
          Kiran
          <br />
          Jadhav
          <span className="text-primary">.</span>
        </h1>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-xl space-y-3">
            <p className="text-lg md:text-xl font-medium text-foreground/90">
              Information Technology Engineering Student · Front-End & Full-Stack Developer
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Information Technology engineering student with a strong foundation in front-end web development. Experienced in building responsive, user-friendly web applications using{" "}
              <span className="text-foreground font-semibold">React, TypeScript, JavaScript, Tailwind CSS</span>, and REST APIs, with back-end and machine learning experience in{" "}
              <span className="text-foreground font-semibold">Python, Flask, scikit-learn</span>, and SQL databases.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <button
              onClick={() => scrollTo("#projects")}
              className="inline-flex items-center justify-center gap-2 text-sm border border-border px-5 py-3 hover:border-primary/50 hover:text-primary transition-colors cursor-pointer"
              style={{ borderRadius: "var(--radius)" }}
            >
              View Projects
              <ArrowUpRight size={15} />
            </button>

            <button
              onClick={() => scrollTo("#contact")}
              className="inline-flex items-center justify-center gap-2 text-sm bg-primary text-primary-foreground px-5 py-3 font-semibold hover:bg-primary/90 transition-all cursor-pointer shadow-md"
              style={{ borderRadius: "var(--radius)" }}
            >
              Get in Touch
            </button>
          </div>
        </div>

        {/* Quick contact / social bar */}
        <div className="flex flex-wrap items-center gap-6 mt-12 pt-6 border-t border-border/80">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=kj018173@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            <Mail size={13} className="text-primary" />
            kj018173@gmail.com
          </a>
          <a
            href="tel:+919321897756"
            className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            <Phone size={13} className="text-primary" />
            +91 9321897756
          </a>
          <a
            href="https://github.com/kiranjdv"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors ml-auto"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            <Github size={13} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/kiran-jadhav-24b701374"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            <Linkedin size={13} />
            LinkedIn
          </a>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="border-y border-border bg-card/40 py-8 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="text-3xl lg:text-4xl font-black text-primary tracking-tight">
                {stat.value}
              </span>
              <span
                className="text-xs text-muted-foreground mt-1 uppercase tracking-[0.12em]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <SectionLabel number="01" title="Projects & Work" />

          {/* Category filter pills */}
          <div className="flex flex-wrap gap-2">
            {["All", "Full Stack", "Machine Learning"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs px-3 py-1.5 transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground font-semibold"
                    : "bg-secondary text-muted-foreground hover:text-foreground border border-border"
                }`}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  borderRadius: "var(--radius)",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {filteredProjects.map((p) => (
            <article
              key={p.id}
              className="group bg-card border border-border overflow-hidden hover:border-primary/40 transition-all duration-300 flex flex-col justify-between"
              style={{ borderRadius: "var(--radius)" }}
            >
              <div>
                {/* Project Image Banner */}
                <div className="relative overflow-hidden bg-muted h-48 border-b border-border/50">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-background/40" />

                  {p.badge && (
                    <span
                      className="absolute top-3 left-3 text-[11px] font-semibold bg-background/90 text-primary border border-primary/30 px-2 py-0.5 backdrop-blur-sm"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        borderRadius: "var(--radius)",
                      }}
                    >
                      {p.badge}
                    </span>
                  )}
                </div>

                <div className="p-6 pb-2">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <span
                        className="text-xs text-primary font-medium tracking-wide uppercase"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        {p.category}
                      </span>
                      <h3 className="text-xl font-bold mt-1 leading-snug group-hover:text-primary transition-colors">
                        {p.name}
                      </h3>
                    </div>

                    <div className="flex gap-2.5 shrink-0 pt-1">
                      {p.github !== "#" && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noreferrer"
                          className="text-muted-foreground hover:text-foreground transition-colors p-1"
                          aria-label={`${p.name} GitHub Repository`}
                          title="GitHub Repository"
                        >
                          <Github size={17} />
                        </a>
                      )}
                      {p.live !== "#" && (
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noreferrer"
                          className="text-muted-foreground hover:text-foreground transition-colors p-1"
                          aria-label={`${p.name} Live Demo`}
                          title="Live Demo"
                        >
                          <ExternalLink size={17} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-xs font-semibold text-foreground/80 mb-3">{p.tagline}</p>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {p.description}
                  </p>

                  {/* Highlights from resume */}
                  <div className="space-y-1.5 mb-5 pt-3 border-t border-border/60">
                    <span
                      className="text-[11px] text-muted-foreground font-semibold uppercase tracking-wider block mb-1"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      Key Features:
                    </span>
                    {p.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-foreground/85">
                        <span className="text-primary mt-0.5">›</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tech stack tags */}
              <div className="p-6 pt-0 mt-auto">
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/50">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] text-muted-foreground bg-secondary/80 border border-border px-2 py-0.5"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        borderRadius: "var(--radius)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="py-24 px-6 max-w-6xl mx-auto border-t border-border">
        <SectionLabel number="02" title="Technical Skills" />
        <p className="text-muted-foreground -mt-6 mb-12 max-w-2xl text-sm">
          Core technical competencies and tools practiced across coursework, hands-on projects,
          and continuous learning.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.name}
                className="bg-card border border-border p-6 hover:border-primary/30 transition-colors"
                style={{ borderRadius: "var(--radius)" }}
              >
                <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-border/70">
                  <div className="p-2 bg-primary/10 text-primary rounded">
                    <Icon size={18} />
                  </div>
                  <h3
                    className="text-xs text-foreground font-bold tracking-[0.14em] uppercase"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {cat.name}
                  </h3>
                </div>

                <ul className="space-y-2.5">
                  {cat.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2.5 text-sm text-foreground/80 hover:text-foreground transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── EDUCATION & CERTIFICATIONS ── */}
      <section id="education" className="py-24 px-6 max-w-6xl mx-auto border-t border-border">
        <SectionLabel number="03" title="Education & Credentials" />
        <p className="text-muted-foreground -mt-6 mb-12 max-w-2xl text-sm">
          Formal undergraduate engineering program alongside verified cloud and machine learning certifications.
        </p>

        {/* Formal Education Card */}
        <div className="mb-8">
          <div
            className="bg-card border border-border p-7 sm:p-8 hover:border-primary/40 transition-colors"
            style={{ borderRadius: "var(--radius)" }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
              <div className="flex items-center gap-3.5">
                <div className="p-3 bg-primary/10 text-primary rounded-lg shrink-0">
                  <GraduationCap size={26} />
                </div>
                <div>
                  <span
                    className="text-xs text-muted-foreground uppercase tracking-wider block"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    Bachelor of Engineering (B.E.)
                  </span>
                  <h3 className="text-2xl font-bold">Mumbai University</h3>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto">
                <span
                  className="text-xs font-semibold px-3 py-1 bg-secondary text-primary border border-primary/25"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    borderRadius: "var(--radius)",
                  }}
                >
                  CGPI: 7.60
                </span>
                <span
                  className="text-xs font-semibold px-3 py-1 bg-secondary/80 text-muted-foreground border border-border"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    borderRadius: "var(--radius)",
                  }}
                >
                  Aug 2023 – May 2027
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-lg font-semibold text-foreground/90">
                Bachelor of Engineering in Information Technology
              </p>
              <p
                className="text-xs text-muted-foreground"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Mumbai, Maharashtra, India
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-4xl">
                Pursuing Information Technology engineering at Mumbai University. Building strong competency in
                data structures, algorithms, object-oriented programming, relational databases, web architecture,
                and machine learning fundamentals.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-border/70 flex items-center justify-between">
              <span
                className="text-xs text-muted-foreground"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Status: In Progress · Expected May 2027
              </span>
              <div className="flex items-center gap-2 text-xs text-primary font-medium">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span>Currently Enrolled</span>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Sub-heading & Grid */}
        <div className="mt-10">
          <div className="flex items-center justify-between mb-6">
            <h3
              className="text-xs text-primary font-bold tracking-[0.14em] uppercase"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              AWS Academy Certifications & Badges
            </h3>
            <span
              className="text-xs text-muted-foreground"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              2 Verified Credentials
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.id}
                className="bg-card border border-border p-7 flex flex-col justify-between hover:border-primary/40 transition-colors"
                style={{ borderRadius: "var(--radius)" }}
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-primary/10 text-primary rounded">
                        <Award size={22} />
                      </div>
                      <div>
                        <span
                          className="text-xs text-muted-foreground uppercase tracking-wider block"
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          {cert.issuer}
                        </span>
                        <h4 className="text-lg font-bold leading-snug mt-0.5">
                          {cert.name}
                        </h4>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span
                      className="text-xs font-semibold px-2.5 py-1 bg-secondary text-primary border border-primary/20"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        borderRadius: "var(--radius)",
                      }}
                    >
                      {cert.issueDate}
                    </span>
                    {cert.hours && (
                      <span
                        className="inline-flex items-center gap-1 text-xs px-2.5 py-1 bg-secondary text-muted-foreground border border-border"
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          borderRadius: "var(--radius)",
                        }}
                      >
                        <Clock size={12} className="text-primary" />
                        {cert.hours}
                      </span>
                    )}
                    <span
                      className="inline-flex items-center gap-1 text-xs px-2.5 py-1 bg-primary/10 text-primary border border-primary/20"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        borderRadius: "var(--radius)",
                      }}
                    >
                      <Sparkles size={12} />
                      {cert.badgeTitle}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {cert.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {cert.skillsCovered.map((s) => (
                      <span
                        key={s}
                        className="text-[11px] text-muted-foreground bg-secondary/80 border border-border px-2 py-0.5"
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          borderRadius: "var(--radius)",
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border/70 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-primary font-medium">
                    <ShieldCheck size={15} />
                    <span>Verified Credential</span>
                  </div>

                  {cert.credlyUrl ? (
                    <a
                      href={cert.credlyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-foreground bg-primary/10 hover:bg-primary border border-primary/30 px-3 py-1.5 rounded transition-all"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      <span>Verify on Credly</span>
                      <ExternalLink size={13} />
                    </a>
                  ) : (
                    <span
                      className="text-xs text-muted-foreground"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      AWS Academy Completed
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ME ── */}
      <section id="about" className="py-24 px-6 max-w-6xl mx-auto border-t border-border">
        <SectionLabel number="04" title="About Me" />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-5 text-muted-foreground leading-relaxed text-[0.95rem]">
            <p>
              Hello! I am{" "}
              <strong className="text-foreground font-semibold">Kiran Dipak Jadhav</strong>, an
              Information Technology Engineering student at Mumbai University, based in Mumbai, India.
            </p>
            <p>
              I specialize in front-end and full-stack web engineering, crafting clean, responsive,
              and reliable user interfaces. I love building practical projects that solve real
              problems — from offline-first Progressive Web Apps like{" "}
              <span className="text-foreground font-medium">IronLog</span> that cache workouts
              locally and sync seamlessly to the cloud, to clinical machine learning diagnostic
              pipelines and full-stack PostgreSQL academic record systems.
            </p>
            <p>
              My toolkit spans across{" "}
              <span className="text-foreground font-medium">
                React, TypeScript, Tailwind CSS, Python, scikit-learn, pandas, Flask, and PostgreSQL
              </span>
              . I emphasize writing structured, maintainable code, adopting object-oriented
              design, and staying on top of modern web development trends.
            </p>
            <p>
              Currently seeking frontend or full-stack software development internships and
              collaborative opportunities where I can apply my skills, learn from experienced
              teams, and build impactful software.
            </p>
          </div>

          <div className="space-y-4">
            <div
              className="bg-card border border-border p-6"
              style={{ borderRadius: "var(--radius)" }}
            >
              <h4
                className="text-xs text-primary font-semibold tracking-wider uppercase mb-4"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Quick Facts & Contact
              </h4>
              <ul className="space-y-3.5 text-sm">
                <li className="flex items-center justify-between py-1 border-b border-border/50">
                  <span className="text-muted-foreground">Location</span>
                  <span className="font-medium text-foreground">Mumbai, Maharashtra, India</span>
                </li>
                <li className="flex items-center justify-between py-1 border-b border-border/50">
                  <span className="text-muted-foreground">University</span>
                  <span className="font-medium text-foreground">Mumbai University (BE IT)</span>
                </li>
                <li className="flex items-center justify-between py-1 border-b border-border/50">
                  <span className="text-muted-foreground">Academic Score</span>
                  <span className="font-medium text-primary">CGPI 7.60 / 10.0</span>
                </li>
                <li className="flex items-center justify-between py-1 border-b border-border/50">
                  <span className="text-muted-foreground">Certifications</span>
                  <span className="font-medium text-foreground">2x AWS Academy (Cloud & ML)</span>
                </li>
                <li className="flex items-center justify-between py-1 border-b border-border/50">
                  <span className="text-muted-foreground">Email</span>
                  <button
                    onClick={() => copyToClipboard("kj018173@gmail.com", "email")}
                    className="inline-flex items-center gap-1.5 font-medium text-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    <span>kj018173@gmail.com</span>
                    {copiedEmail ? <Check size={14} className="text-primary" /> : <Copy size={14} />}
                  </button>
                </li>
                <li className="flex items-center justify-between py-1">
                  <span className="text-muted-foreground">Phone</span>
                  <button
                    onClick={() => copyToClipboard("+919321897756", "phone")}
                    className="inline-flex items-center gap-1.5 font-medium text-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    <span>+91 9321897756</span>
                    {copiedPhone ? <Check size={14} className="text-primary" /> : <Copy size={14} />}
                  </button>
                </li>
              </ul>
            </div>

            <div
              className="bg-card border border-border p-6 flex items-center justify-between"
              style={{ borderRadius: "var(--radius)" }}
            >
              <div>
                <span
                  className="text-xs text-muted-foreground uppercase tracking-wider block"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Availability
                </span>
                <span className="text-sm font-semibold text-foreground">
                  Open to Summer Internships & Roles
                </span>
              </div>
              <a
                href="#contact"
                className="text-xs text-primary font-bold hover:underline inline-flex items-center gap-1"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Inquire <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24 px-6 max-w-6xl mx-auto border-t border-border">
        <SectionLabel number="05" title="Get In Touch" />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Whether you have an internship opportunity, a project collaboration, or just want to
              connect and talk tech, I’d love to hear from you!
            </p>

            <div className="space-y-4">
              <div
                className="bg-card border border-border p-5 flex items-center justify-between"
                style={{ borderRadius: "var(--radius)" }}
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 bg-primary/10 text-primary rounded">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span
                      className="text-xs text-muted-foreground uppercase tracking-wider block"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      Email
                    </span>
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=kj018173@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                      className="text-base font-bold text-foreground hover:text-primary transition-colors"
                    >
                      kj018173@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard("kj018173@gmail.com", "email")}
                  className="p-2 hover:bg-secondary text-muted-foreground hover:text-primary transition-colors rounded"
                  title="Copy email address"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check size={18} className="text-primary" /> : <Copy size={18} />}
                </button>
              </div>

              <div
                className="bg-card border border-border p-5 flex items-center justify-between"
                style={{ borderRadius: "var(--radius)" }}
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 bg-primary/10 text-primary rounded">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span
                      className="text-xs text-muted-foreground uppercase tracking-wider block"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      Phone
                    </span>
                    <a
                      href="tel:+919321897756"
                      className="text-base font-bold text-foreground hover:text-primary transition-colors"
                    >
                      +91 9321897756
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard("+919321897756", "phone")}
                  className="p-2 hover:bg-secondary text-muted-foreground hover:text-primary transition-colors rounded"
                  title="Copy phone number"
                  aria-label="Copy phone"
                >
                  {copiedPhone ? <Check size={18} className="text-primary" /> : <Copy size={18} />}
                </button>
              </div>

              <div
                className="bg-card border border-border p-5 flex items-center justify-between"
                style={{ borderRadius: "var(--radius)" }}
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 bg-primary/10 text-primary rounded">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <span
                      className="text-xs text-muted-foreground uppercase tracking-wider block"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      WhatsApp
                    </span>
                    <a
                      href="https://wa.me/919321897756?text=Hi%20Kiran%2C%20I%20saw%20your%20portfolio%20and%20wanted%20to%20connect!"
                      target="_blank"
                      rel="noreferrer"
                      className="text-base font-bold text-foreground hover:text-primary transition-colors"
                    >
                      +91 9321897756
                    </a>
                  </div>
                </div>

                <a
                  href="https://wa.me/919321897756?text=Hi%20Kiran%2C%20I%20saw%20your%20portfolio%20and%20wanted%20to%20connect!"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 text-xs bg-secondary text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground font-semibold transition-colors rounded"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Chat
                </a>
              </div>

              <div
                className="bg-card border border-border p-5 flex items-center gap-3.5"
                style={{ borderRadius: "var(--radius)" }}
              >
                <div className="p-2.5 bg-primary/10 text-primary rounded">
                  <MapPin size={20} />
                </div>
                <div>
                  <span
                    className="text-xs text-muted-foreground uppercase tracking-wider block"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    Location
                  </span>
                  <span className="text-base font-bold text-foreground">
                    Mumbai, Maharashtra, India
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <a
                href="https://github.com/kiranjdv"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm bg-secondary border border-border px-4 py-2.5 hover:border-primary/50 hover:text-primary transition-colors"
                style={{ borderRadius: "var(--radius)" }}
              >
                <Github size={16} />
                GitHub Profile
              </a>
              <a
                href="https://www.linkedin.com/in/kiran-jadhav-24b701374"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm bg-secondary border border-border px-4 py-2.5 hover:border-primary/50 hover:text-primary transition-colors"
                style={{ borderRadius: "var(--radius)" }}
              >
                <Linkedin size={16} />
                LinkedIn Profile
              </a>
            </div>
          </div>

          {/* Quick contact / direct mail card */}
          <div
            className="bg-card border border-border p-8"
            style={{ borderRadius: "var(--radius)" }}
          >
            <h3 className="text-xl font-bold mb-2">Send a Message</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Compose your message below and choose your preferred way to send it directly to Kiran.
            </p>

            <form
              id="contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const subject = encodeURIComponent(
                  (form.elements.namedItem("subject") as HTMLInputElement)?.value || "Portfolio Inquiry"
                );
                const message = encodeURIComponent(
                  (form.elements.namedItem("message") as HTMLTextAreaElement)?.value || ""
                );
                window.location.href = `mailto:kj018173@gmail.com?subject=${subject}&body=${message}`;
              }}
              className="space-y-4"
            >
              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs uppercase tracking-wider text-muted-foreground mb-2"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Internship opportunity / Project collaboration"
                  className="w-full bg-secondary border border-border px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                  style={{ borderRadius: "var(--radius)" }}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs uppercase tracking-wider text-muted-foreground mb-2"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Hi Kiran, I came across your portfolio and would love to connect regarding..."
                  className="w-full bg-secondary border border-border px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  style={{ borderRadius: "var(--radius)" }}
                  required
                />
              </div>

              <div className="grid grid-cols-3 gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    const form = document.querySelector("#contact-form") as HTMLFormElement;
                    const subject = encodeURIComponent(
                      (form?.elements.namedItem("subject") as HTMLInputElement)?.value || "Portfolio Inquiry"
                    );
                    const message = encodeURIComponent(
                      (form?.elements.namedItem("message") as HTMLTextAreaElement)?.value || ""
                    );
                    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=kj018173@gmail.com&su=${subject}&body=${message}`;
                    window.open(gmailUrl, "_blank");
                  }}
                  className="inline-flex items-center justify-center gap-1.5 text-xs sm:text-sm bg-primary text-primary-foreground font-semibold h-10 px-3 hover:bg-primary/90 transition-all cursor-pointer shadow-sm whitespace-nowrap"
                  style={{ borderRadius: "var(--radius)" }}
                  title="Compose in Gmail Web"
                >
                  <Send size={14} />
                  <span>Gmail</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    const form = document.querySelector("#contact-form") as HTMLFormElement;
                    const message = encodeURIComponent(
                      (form?.elements.namedItem("message") as HTMLTextAreaElement)?.value || "Hi Kiran, I saw your portfolio and wanted to connect!"
                    );
                    window.open(`https://wa.me/919321897756?text=${message}`, "_blank");
                  }}
                  className="inline-flex items-center justify-center gap-1.5 text-xs sm:text-sm bg-secondary text-foreground hover:text-primary border border-border hover:border-primary/40 font-semibold h-10 px-3 transition-all cursor-pointer whitespace-nowrap"
                  style={{ borderRadius: "var(--radius)" }}
                  title="Chat directly on WhatsApp"
                >
                  <MessageCircle size={14} />
                  <span>WhatsApp</span>
                </button>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-1.5 text-xs sm:text-sm bg-secondary text-foreground hover:text-primary border border-border hover:border-primary/40 font-semibold h-10 px-3 transition-all cursor-pointer whitespace-nowrap"
                  style={{ borderRadius: "var(--radius)" }}
                  title="Open in your default desktop mail app (Outlook, Windows Mail)"
                >
                  <Mail size={14} />
                  <span>Mail App</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-border py-10 px-6 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <span
            className="text-xs text-muted-foreground"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            © 2026 Kiran Dipak Jadhav. All rights reserved.
          </span>
        </div>

        <div className="flex items-center gap-6">
          <button
            onClick={() => scrollTo("#hero")}
            className="text-xs text-muted-foreground hover:text-primary transition-colors cursor-pointer"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Back to Top ↑
          </button>
          <span
            className="text-xs text-muted-foreground/60"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            React · TypeScript · Tailwind CSS
          </span>
        </div>
      </footer>
    </div>
  );
}

function SectionLabel({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-baseline gap-4 mb-4">
      <span
        className="text-xs text-primary font-bold tracking-[0.18em]"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        {number} /
      </span>
      <h2 className="text-3xl font-black tracking-tight uppercase">{title}</h2>
    </div>
  );
}
