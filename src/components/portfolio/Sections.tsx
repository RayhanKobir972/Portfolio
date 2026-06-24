import { motion, useInView, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Download,
  Github,
  Linkedin,
  Twitter,
  Dribbble,
  MessageCircle,
  Code2,
  Zap,
  Briefcase,
  Star,
  Trophy,
  Smile,
  Send,
  Loader2,
  CheckCircle2,
  PenTool,
  Palette,
  ShoppingBag,
  Gauge,
  Wrench,
  Globe,
  Quote,
  ArrowUp,
} from "lucide-react";
import profile from "@/assets/profile.jpg";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";

const goTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */
export function Hero() {
  return (
    <section
      id="home"
      className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 px-4 sm:px-6"
    >
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for Freelance
          </div>

          <h1 className="mt-6 font-display font-bold leading-[1.05] text-[clamp(2.25rem,7vw,4.5rem)]">
            Hi, I'm <br />
            <span className="text-gradient">Md. Rayhan Kobir</span>
          </h1>
          <p className="mt-5 text-lg sm:text-xl font-semibold text-foreground">
            WordPress Developer{" "}
            <span className="text-muted-foreground font-normal">&</span>{" "}
            UI/UX Designer
          </p>
          <p className="mt-4 max-w-lg text-base text-muted-foreground leading-relaxed">
            I craft modern, responsive WordPress websites and beautiful user
            interfaces that drive real results — fast, accessible, and built to
            convert.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => goTo("projects")}
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_40px_-8px_rgba(6,182,212,0.7)] transition-transform hover:-translate-y-0.5"
            >
              View My Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => goTo("contact")}
              className="group inline-flex items-center gap-2 rounded-xl glass px-6 py-3.5 text-sm font-semibold text-foreground border border-white/10 hover:border-[var(--accent-cyan)]/40 transition-colors"
            >
              <MessageCircle className="h-4 w-4 text-[var(--accent-cyan)]" />
              Contact Me
            </button>
          </div>

          <div className="mt-10">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
              Follow me on
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Github, href: "https://github.com" },
                { Icon: Linkedin, href: "https://linkedin.com" },
                { Icon: Dribbble, href: "https://dribbble.com" },
                { Icon: Twitter, href: "https://twitter.com" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="grid place-items-center h-10 w-10 rounded-xl glass border border-white/5 text-muted-foreground hover:text-[var(--accent-cyan-hover)] hover:border-[var(--accent-cyan)]/40 hover:-translate-y-0.5 transition-all"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="relative h-[460px] sm:h-[540px] flex items-center justify-center"
        >
          {/* Glow ring */}
          <div className="absolute inset-0 grid place-items-center">
            <div className="h-[380px] w-[380px] sm:h-[440px] sm:w-[440px] rounded-full bg-gradient-primary opacity-30 blur-3xl animate-pulse-glow" />
          </div>
          <div className="absolute inset-0 grid place-items-center">
            <div className="relative h-[340px] w-[340px] sm:h-[400px] sm:w-[400px] rounded-full">
              <div className="absolute inset-0 rounded-full border border-[var(--accent-cyan)]/30 animate-spin-slow" style={{ boxShadow: "inset 0 0 60px rgba(6,182,212,0.15)" }} />
              <div className="absolute inset-3 rounded-full border border-white/5" />
              <div className="absolute -inset-2 rounded-full border border-dashed border-white/10 animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "30s" }} />
            </div>
          </div>

          <img
            src={profile}
            alt="Rayhan Ahmed portrait"
            width={1024}
            height={1024}
            className="relative z-10 h-[380px] w-[380px] sm:h-[440px] sm:w-[440px] object-cover rounded-full"
            style={{ maskImage: "radial-gradient(circle, black 70%, transparent 100%)" }}
          />

          {/* Floating cards */}
          <FloatCard
            className="top-4 -right-2 sm:right-4"
            delay={0.4}
            icon={<Briefcase className="h-4 w-4 text-[var(--accent-cyan)]" />}
            title="5+"
            subtitle="Years of Experience"
          />
          <FloatCard
            className="bottom-12 -left-2 sm:left-4"
            delay={0.6}
            icon={<Code2 className="h-4 w-4 text-[var(--accent-cyan)]" />}
            title="Clean Code"
            subtitle="Scalable Solutions"
          />
          <FloatCard
            className="bottom-2 right-2 sm:right-10"
            delay={0.8}
            icon={<Zap className="h-4 w-4 text-[var(--accent-cyan)]" />}
            title="Fast"
            subtitle="Performance"
          />
        </motion.div>
      </div>
    </section>
  );
}

function FloatCard({
  className,
  delay,
  icon,
  title,
  subtitle,
}: {
  className?: string;
  delay: number;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={`absolute z-20 ${className}`}
    >
      <div className="glass rounded-2xl border border-white/10 px-4 py-3 min-w-[160px] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)] animate-float-y" style={{ animationDelay: `${delay}s` }}>
        <div className="flex items-center gap-3">
          <div className="grid place-items-center h-8 w-8 rounded-lg bg-white/5 border border-white/10">
            {icon}
          </div>
          <div>
            <div className="text-sm font-semibold text-foreground leading-none">{title}</div>
            <div className="mt-1 text-[11px] text-muted-foreground">{subtitle}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Stats                                                               */
/* ------------------------------------------------------------------ */
const stats = [
  { icon: Smile, value: "50+", label: "Happy Clients" },
  { icon: Briefcase, value: "120+", label: "Projects Completed" },
  { icon: Trophy, value: "5+", label: "Years Experience" },
  { icon: Star, value: "10+", label: "Awards Received" },
];

export function Stats() {
  return (
    <section className="px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="glass rounded-3xl border border-white/5 p-6 sm:p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex items-center gap-4"
            >
              <div className="grid place-items-center h-12 w-12 rounded-2xl bg-gradient-primary/10 border border-[var(--accent-cyan)]/20" style={{ background: "rgba(6,182,212,0.08)" }}>
                <s.icon className="h-5 w-5 text-[var(--accent-cyan)]" />
              </div>
              <div>
                <div className="font-display text-2xl sm:text-3xl font-bold text-foreground">{s.value}</div>
                <div className="text-xs text-muted-foreground">{s.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section header                                                      */
/* ------------------------------------------------------------------ */
function SectionHeader({ eyebrow, title, desc }: { eyebrow: string; title: React.ReactNode; desc?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl"
    >
      <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent-cyan)] font-semibold">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
        {title}
      </h2>
      {desc && <p className="mt-4 text-muted-foreground">{desc}</p>}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* About                                                               */
/* ------------------------------------------------------------------ */
export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <SectionHeader
            eyebrow="About Me"
            title={<>Crafting digital experiences that <span className="text-gradient">inspire.</span></>}
          />
          <p className="mt-6 text-muted-foreground leading-relaxed max-w-lg">
            I'm a passionate WordPress developer and UI/UX designer with a sharp
            eye for detail and a love for creating seamless digital
            experiences. I combine creativity and technology to build websites
            that are fast, responsive, and genuinely user-friendly.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-lg">
            Over the last five years I've shipped 120+ projects for startups,
            agencies, and growing businesses — from luxury real-estate
            platforms to high-conversion WooCommerce stores.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); goTo("contact"); }}
              className="inline-flex items-center gap-2 rounded-xl glass border border-white/10 px-5 py-3 text-sm font-medium hover:border-[var(--accent-cyan)]/40 hover:-translate-y-0.5 transition-all"
            >
              <Download className="h-4 w-4 text-[var(--accent-cyan)]" /> Download Resume
            </a>
            <button
              onClick={() => goTo("experience")}
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              More About Me <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass rounded-3xl border border-white/5 p-6 sm:p-8 space-y-4"
        >
          {[
            { icon: Smile, label: "Name", value: "Rayhan Ahmed" },
            { icon: Mail, label: "Email", value: "hello@rayhan.dev" },
            { icon: MapPin, label: "Location", value: "Dhaka, Bangladesh" },
            { icon: Briefcase, label: "Experience", value: "5+ Years (WordPress, UI/UX)" },
            { icon: Globe, label: "Availability", value: "Open to freelance & contract" },
          ].map((row) => (
            <div key={row.label} className="flex items-center gap-4 p-3 rounded-2xl border border-white/5 bg-white/[0.02]">
              <div className="grid place-items-center h-10 w-10 rounded-xl bg-[rgba(6,182,212,0.1)] border border-[var(--accent-cyan)]/20">
                <row.icon className="h-4 w-4 text-[var(--accent-cyan)]" />
              </div>
              <div className="min-w-0">
                <div className="text-xs text-muted-foreground">{row.label}</div>
                <div className="text-sm font-medium text-foreground truncate">{row.value}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Skills                                                              */
/* ------------------------------------------------------------------ */
const skills = [
  { name: "WordPress", value: 95 },
  { name: "WooCommerce", value: 92 },
  { name: "Elementor", value: 94 },
  { name: "PHP", value: 88 },
  { name: "JavaScript", value: 86 },
  { name: "React", value: 82 },
  { name: "Next.js", value: 78 },
  { name: "Figma", value: 93 },
  { name: "Photoshop", value: 85 },
  { name: "Illustrator", value: 80 },
];

const tools = [
  "WordPress", "WooCommerce", "Elementor", "Figma",
  "Photoshop", "Illustrator", "VS Code", "Git",
];

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="My Skills"
          title={<>Tools & technologies <br className="hidden sm:block" /> I work with daily.</>}
          desc="A curated stack refined over years of shipping production-ready websites."
        />

        <div className="mt-14 grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="space-y-5">
            {skills.map((s, i) => (
              <SkillBar key={s.name} {...s} delay={i * 0.05} />
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {tools.map((t, i) => (
              <motion.div
                key={t}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                whileHover={{ y: -6, rotate: -2 }}
                className="glass rounded-2xl border border-white/5 p-5 flex flex-col items-center gap-3 hover:border-[var(--accent-cyan)]/40 transition-colors"
              >
                <div className="grid place-items-center h-12 w-12 rounded-xl bg-gradient-primary/20 border border-[var(--accent-cyan)]/20" style={{ background: "rgba(6,182,212,0.08)" }}>
                  <span className="font-display font-bold text-[var(--accent-cyan-hover)]">
                    {t.slice(0, 2).toUpperCase()}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground text-center">{t}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillBar({ name, value, delay }: { name: string; value: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <div ref={ref}>
      <div className="flex items-baseline justify-between mb-2">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs text-muted-foreground tabular-nums">{value}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${value}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{
            background: "linear-gradient(90deg,#06b6d4,#3b82f6)",
            boxShadow: "0 0 16px rgba(6,182,212,0.6)",
          }}
        />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */
const services = [
  { icon: Globe, title: "Web Development", desc: "Fast, accessible websites built with modern best practices and clean code." },
  { icon: PenTool, title: "WordPress Development", desc: "Custom themes, plugins, and bespoke WP solutions that scale." },
  { icon: Palette, title: "UI/UX Design", desc: "Interfaces that feel intentional — pixel-perfect, on-brand, and conversion-driven." },
  { icon: ShoppingBag, title: "WooCommerce", desc: "High-performance stores with optimised checkouts and product pages." },
  { icon: Gauge, title: "Performance Optimization", desc: "Core Web Vitals tuning, caching, and image pipelines for lightning-fast loads." },
  { icon: Wrench, title: "Website Maintenance", desc: "Updates, backups, monitoring, and ongoing improvements." },
];

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Services"
          title={<>End-to-end services for <span className="text-gradient">modern brands.</span></>}
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.55 }}
              whileHover={{ y: -6 }}
              className="group gradient-border glass rounded-3xl p-6 border border-white/5 hover:border-[var(--accent-cyan)]/30 transition-colors"
            >
              <div className="grid place-items-center h-12 w-12 rounded-2xl bg-gradient-primary text-white shadow-[0_0_30px_-8px_rgba(6,182,212,0.7)] group-hover:rotate-6 transition-transform">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <div className="mt-5 inline-flex items-center gap-1 text-xs text-[var(--accent-cyan)] opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Projects                                                            */
/* ------------------------------------------------------------------ */
const projects = [
  {
    img: p1,
    title: "Luxury Real Estate",
    desc: "Modern real-estate website with custom listings and advanced filtering.",
    tags: ["WordPress", "Elementor", "ACF"],
    demo: "https://example.com",
    repo: "https://github.com",
  },
  {
    img: p2,
    title: "Digital Agency",
    desc: "Creative agency site with smooth animations and interactive UI.",
    tags: ["WordPress", "PHP", "JavaScript"],
    demo: "https://example.com",
    repo: "https://github.com",
  },
  {
    img: p3,
    title: "eCommerce Store",
    desc: "Custom WooCommerce store with modern design and optimised performance.",
    tags: ["WooCommerce", "WordPress", "UI/UX"],
    demo: "https://example.com",
    repo: "https://github.com",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <SectionHeader
            eyebrow="Featured Projects"
            title={<>Selected work from <span className="text-gradient">recent years.</span></>}
          />
          <a href="#" className="inline-flex items-center gap-1 text-sm text-[var(--accent-cyan)] hover:text-[var(--accent-cyan-hover)]">
            View all projects <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} {...p} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  img, title, desc, tags, demo, repo, delay,
}: typeof projects[number] & { delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useTransform(useSpring(my, { stiffness: 150, damping: 15 }), [-0.5, 0.5], [6, -6]);
  const ry = useTransform(useSpring(mx, { stiffness: 150, damping: 15 }), [-0.5, 0.5], [-6, 6]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onMouseLeave={() => { mx.set(0); my.set(0); }}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
      className="group relative glass rounded-3xl border border-white/5 overflow-hidden hover:border-[var(--accent-cyan)]/40 transition-colors"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={img}
          alt={title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/40 to-transparent" />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-tr from-[var(--accent-cyan)]/20 via-transparent to-[var(--accent-blue)]/20" />
        <a
          href={demo}
          target="_blank"
          rel="noreferrer"
          aria-label={`${title} live demo`}
          className="absolute top-4 right-4 grid place-items-center h-10 w-10 rounded-full glass border border-white/10 text-[var(--accent-cyan)] hover:bg-gradient-primary hover:text-white transition-all"
        >
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-1.5">
          {tags.map((t) => (
            <span key={t} className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-muted-foreground">
              {t}
            </span>
          ))}
        </div>
        <h3 className="mt-4 text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
        <div className="mt-5 flex items-center gap-3">
          <a href={demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--accent-cyan)] hover:text-[var(--accent-cyan-hover)]">
            Live Demo <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <span className="h-3 w-px bg-white/10" />
          <a href={repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground">
            <Github className="h-3.5 w-3.5" /> GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Experience timeline                                                 */
/* ------------------------------------------------------------------ */
const experience = [
  { year: "2024", role: "Senior WordPress Developer", company: "Freelance / Remote", desc: "Leading bespoke WordPress builds for global brands and agencies." },
  { year: "2022", role: "UI/UX Designer & Developer", company: "Pixelhaus Studio", desc: "Designed and shipped 40+ websites across SaaS, agency, and e-commerce." },
  { year: "2020", role: "WordPress Developer", company: "Codepath Agency", desc: "Built custom themes and high-performance WooCommerce stores." },
  { year: "2019", role: "Front-end Developer", company: "Bluewave", desc: "Started professional career building responsive marketing sites." },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Experience"
          title={<>A timeline of <span className="text-gradient">craft & growth.</span></>}
        />

        <div className="mt-14 relative">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent-cyan)]/60 via-white/10 to-transparent -translate-x-px" />
          <div className="space-y-10">
            {experience.map((e, i) => (
              <motion.div
                key={e.year + e.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className={`relative flex flex-col sm:flex-row items-start gap-6 ${
                  i % 2 === 1 ? "sm:flex-row-reverse" : ""
                }`}
              >
                <div className="hidden sm:block w-1/2" />
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-2 z-10">
                  <div className="h-4 w-4 rounded-full bg-gradient-primary shadow-[0_0_20px_rgba(6,182,212,0.8)] ring-4 ring-[#09090b]" />
                </div>
                <div className="pl-12 sm:pl-0 sm:w-1/2 sm:px-8">
                  <div className="glass rounded-2xl border border-white/5 p-5 hover:border-[var(--accent-cyan)]/30 transition-colors">
                    <span className="text-xs font-semibold text-[var(--accent-cyan)]">{e.year}</span>
                    <h3 className="mt-1 text-lg font-semibold">{e.role}</h3>
                    <p className="text-sm text-muted-foreground">{e.company}</p>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Testimonials                                                        */
/* ------------------------------------------------------------------ */
const testimonials = [
  { name: "John Doe", role: "CEO, Tech Solutions", text: "Rayhan delivered an exceptional website that exceeded our expectations. Highly recommended!" },
  { name: "Sarah Smith", role: "Founder, Digital Agency", text: "Professional, creative, and always on time. Working with Rayhan was a great experience." },
  { name: "Michael Brown", role: "Marketing Manager", text: "The design and performance of our website improved drastically. Amazing work!" },
  { name: "Emily Carter", role: "Product Lead, Loom", text: "A rare blend of design taste and engineering rigour. We'd hire him again in a heartbeat." },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="What Clients Say"
          title={<>Trusted by founders, <br className="hidden sm:block" /> agencies, and growing teams.</>}
        />

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {testimonials.slice(0, 3).map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="glass rounded-3xl border border-white/5 p-6 hover:border-[var(--accent-cyan)]/30 transition-colors"
            >
              <Quote className="h-6 w-6 text-[var(--accent-cyan)]" />
              <p className="mt-4 text-sm text-foreground/90 leading-relaxed">{t.text}</p>
              <div className="mt-5 flex items-center gap-1 text-[var(--accent-cyan)]">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="h-10 w-10 rounded-full bg-gradient-primary grid place-items-center text-sm font-semibold text-white">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured slider */}
        <div className="mt-10 glass rounded-3xl border border-white/5 p-8 sm:p-10 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-gradient-primary opacity-20 blur-3xl" />
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <Quote className="h-8 w-8 text-[var(--accent-cyan)]" />
            <p className="mt-4 text-lg sm:text-xl font-display leading-relaxed text-foreground">
              "{testimonials[i].text}"
            </p>
            <div className="mt-5 text-sm">
              <span className="font-semibold">{testimonials[i].name}</span>
              <span className="text-muted-foreground"> — {testimonials[i].role}</span>
            </div>
          </motion.div>
          <div className="mt-6 flex gap-2">
            {testimonials.map((_, k) => (
              <button
                key={k}
                onClick={() => setI(k)}
                className={`h-1.5 rounded-full transition-all ${
                  k === i ? "w-8 bg-gradient-primary" : "w-3 bg-white/15"
                }`}
                aria-label={`Show testimonial ${k + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Contact                                                             */
/* ------------------------------------------------------------------ */
export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok">("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Required";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = "Invalid email";
    if (!form.message.trim()) errs.message = "Required";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setStatus("loading");
    setTimeout(() => {
      setStatus("ok");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Let's Work Together"
          title={<>Have a project in mind? <span className="text-gradient">Let's talk.</span></>}
        />

        <div className="mt-12 grid lg:grid-cols-5 gap-6">
          {/* Info */}
          <div className="lg:col-span-2 space-y-4">
            {[
              { icon: Mail, label: "Email", value: "hello@rayhan.dev", href: "mailto:hello@rayhan.dev" },
              { icon: Phone, label: "Phone", value: "+880 123 456 7890", href: "tel:+8801234567890" },
              { icon: MapPin, label: "Location", value: "Dhaka, Bangladesh" },
            ].map((row) => (
              <a
                key={row.label}
                href={row.href ?? "#"}
                className="block glass rounded-2xl border border-white/5 p-5 hover:border-[var(--accent-cyan)]/40 hover:-translate-y-0.5 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="grid place-items-center h-11 w-11 rounded-xl bg-gradient-primary text-white shadow-[0_0_30px_-10px_rgba(6,182,212,0.6)]">
                    <row.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">{row.label}</div>
                    <div className="text-sm font-medium">{row.value}</div>
                  </div>
                </div>
              </a>
            ))}
            <div className="glass rounded-2xl border border-white/5 p-5">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-75 animate-ping" />
                  <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Available for freelance projects
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                I'm currently accepting new projects and collaborations for the
                next quarter.
              </p>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={submit}
            className="lg:col-span-3 glass rounded-3xl border border-white/5 p-6 sm:p-8 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field
                label="Your Name"
                value={form.name}
                error={errors.name}
                onChange={(v) => setForm({ ...form, name: v })}
              />
              <Field
                label="Your Email"
                type="email"
                value={form.email}
                error={errors.email}
                onChange={(v) => setForm({ ...form, email: v })}
              />
            </div>
            <Field
              label="Subject"
              value={form.subject}
              onChange={(v) => setForm({ ...form, subject: v })}
            />
            <div>
              <label className="block text-xs text-muted-foreground mb-2">Your Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                className="w-full rounded-2xl bg-white/[0.03] border border-white/10 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-[var(--accent-cyan)]/60 focus:ring-2 focus:ring-[var(--accent-cyan)]/20 transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
              {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 text-sm font-semibold text-white shadow-[0_0_40px_-8px_rgba(6,182,212,0.6)] hover:-translate-y-0.5 transition-transform disabled:opacity-70"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                </>
              ) : status === "ok" ? (
                <>
                  <CheckCircle2 className="h-4 w-4" /> Message sent
                </>
              ) : (
                <>
                  Send Message
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label, value, onChange, type = "text", error,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  error?: string;
}) {
  return (
    <div>
      <label className="block text-xs text-muted-foreground mb-2">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-2xl bg-white/[0.03] border border-white/10 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-[var(--accent-cyan)]/60 focus:ring-2 focus:ring-[var(--accent-cyan)]/20 transition-colors"
        placeholder={label}
      />
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */
export function Footer() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <footer className="px-4 sm:px-6 pb-10">
      <div className="mx-auto max-w-7xl pt-10 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display text-xl font-bold tracking-tight"
        >
          Rayhan<span className="text-gradient">.</span>
        </button>
        <div className="flex items-center gap-3">
          {[Github, Linkedin, Dribbble, Twitter].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="grid place-items-center h-9 w-9 rounded-xl glass border border-white/5 text-muted-foreground hover:text-[var(--accent-cyan-hover)] hover:border-[var(--accent-cyan)]/40 transition-all"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Rayhan Ahmed. All rights reserved.
        </p>
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-40 grid place-items-center h-12 w-12 rounded-2xl bg-gradient-primary text-white shadow-[0_0_30px_-8px_rgba(6,182,212,0.7)] transition-all ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
}