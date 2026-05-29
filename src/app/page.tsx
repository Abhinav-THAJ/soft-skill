"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import {
  ArrowRight,
  Users,
  Cpu,
  Compass,
  Target,
  Layers,
  Monitor,
  Zap,
} from "lucide-react";

/* ─── DATA ─────────────────────────────────────────────── */

const featureStrip = [
  {
    icon: <Users size={28} color="#ffffff" />,
    title: "# Corporate Life Skills",
    desc: "Building essential teamwork skills to thrive in the modern workplace.",
  },
  {
    icon: <Cpu size={28} color="#c9a227" />,
    title: "# Trending Tech Savvy",
    desc: "Building future-ready skills for a digital world.",
  },
  {
    icon: <Compass size={28} color="#ffffff" />,
    title: "# Outbound & Adventure",
    desc: "Experiential learning that builds excellence and leadership.",
  },
];

const solutions = [
  {
    icon: <Target size={30} color="#c9a227" />,
    title: "Learning Strategy",
    desc: "Align learning objectives with business goals for improved and measurable results.",
    link: "/services",
  },
  {
    icon: <Layers size={30} color="#c9a227" />,
    title: "Capability Development",
    desc: "Build critical skills and competencies for improved performance.",
    link: "/services",
  },
  {
    icon: <Monitor size={30} color="#c9a227" />,
    title: "Digital Learning",
    desc: "Leverage technology to deliver engaging and accessible learning.",
    link: "/services",
  },
  {
    icon: <Zap size={30} color="#c9a227" />,
    title: "Experiential Learning",
    desc: "Transform learners through immersive and adventure-based programs.",
    link: "/services",
  },
];

/* ─── COMPONENT ─────────────────────────────────────────── */

export default function Home() {
  return (
    <PageWrapper>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section
        style={{
          background: "#f4f7fc",
          paddingTop: 0,
          paddingBottom: 0,
          position: "relative",
          overflow: "hidden",
          minHeight: 480,
        }}
      >
        <div
          className="hero-grid"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "48px 24px 0",
            display: "grid",
            gap: 48,
            alignItems: "center",
          }}
        >
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            style={{ paddingBottom: 48 }}
          >
            {/* Gold accent bar */}
            <div
              style={{
                width: 40,
                height: 4,
                background: "#c9a227",
                borderRadius: 2,
                marginBottom: 20,
              }}
            />

            <h1
              style={{
                fontSize: "clamp(26px, 4vw, 46px)",
                fontWeight: 800,
                color: "#1a2b5e",
                lineHeight: 1.2,
                marginBottom: 20,
                fontFamily: "var(--font-heading)",
              }}
            >
              Advocating Excellence{" "}
              <span style={{ display: "block" }}>
                in Organizational L&amp;D.
              </span>
            </h1>

            <p
              style={{
                fontSize: 15,
                color: "#4b5563",
                lineHeight: 1.75,
                maxWidth: 480,
                marginBottom: 32,
              }}
            >
              We partner with organizations to design, deliver, and drive
              impactful learning solutions that build capability, inspire
              performance, and create lasting impact.
            </p>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link
                href="/services"
                style={{
                  display: "inline-block",
                  padding: "12px 26px",
                  background: "#1a2b5e",
                  color: "#ffffff",
                  fontWeight: 700,
                  fontSize: 14,
                  borderRadius: 4,
                  textDecoration: "none",
                  transition: "background 0.3s ease",
                  minHeight: 44,
                  lineHeight: "20px",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.background = "#1e3a6e")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.background = "#1a2b5e")
                }
              >
                Explore Our Services
              </Link>
              <Link
                href="/about"
                style={{
                  display: "inline-block",
                  padding: "12px 26px",
                  background: "transparent",
                  color: "#1a2b5e",
                  fontWeight: 700,
                  fontSize: 14,
                  borderRadius: 4,
                  textDecoration: "none",
                  border: "1.5px solid #1a2b5e",
                  transition: "all 0.3s ease",
                  minHeight: 44,
                  lineHeight: "20px",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#1a2b5e";
                  (e.currentTarget as HTMLElement).style.color = "#ffffff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                  (e.currentTarget as HTMLElement).style.color = "#1a2b5e";
                }}
              >
                About Us
              </Link>
            </div>
          </motion.div>

          {/* Right: Image — hidden on mobile via CSS class */}
          <motion.div
            className="hero-image-col"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            style={{ position: "relative", alignSelf: "flex-end" }}
          >
            <div
              style={{
                borderRadius: "8px 8px 0 0",
                overflow: "hidden",
                height: 380,
                position: "relative",
              }}
            >
              <Image
                src="/images/hero_banner.png"
                alt="Leadership and organizational excellence"
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FEATURE STRIP ───────────────────────────────────── */}
      <section style={{ background: "#1a2b5e", padding: "0" }}>
        <div
          className="feature-grid"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
            display: "grid",
            gap: 0,
          }}
        >
          {featureStrip.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                padding: "32px 28px",
                borderRight: i < 2 ? "1px solid rgba(255,255,255,0.1)" : "none",
                display: "flex",
                gap: 18,
                alignItems: "flex-start",
                background: i === 1 ? "#1e3a6e" : "transparent",
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </div>
              <div>
                <h3
                  style={{
                    color: "#c9a227",
                    fontSize: 15,
                    fontWeight: 700,
                    marginBottom: 6,
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 13, lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── ABOUT US ─────────────────────────────────────────── */}
      <section style={{ padding: "72px 24px", background: "#ffffff" }}>
        <div
          className="about-grid"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gap: 60,
            alignItems: "center",
          }}
        >
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ position: "relative" }}
          >
            <div
              style={{
                borderRadius: 8,
                overflow: "hidden",
                height: 380,
                position: "relative",
                boxShadow: "0 12px 40px rgba(26,43,94,0.15)",
              }}
            >
              <Image
                src="/images/about_workshop.png"
                alt="About N-DOBLE workshop"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            {/* Floating badge */}
            <div
              style={{
                position: "absolute",
                bottom: 24,
                right: -24,
                background: "#1a2b5e",
                color: "#ffffff",
                borderRadius: 8,
                padding: "18px 20px",
                boxShadow: "0 8px 24px rgba(26,43,94,0.3)",
                maxWidth: 160,
                textAlign: "center",
              }}
            >
              <Image
                src="/logo.png"
                alt="N-DOBLE"
                width={110}
                height={30}
                style={{ objectFit: "contain", filter: "brightness(0) invert(1)", marginBottom: 8 }}
              />
              <p style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", lineHeight: 1.4 }}>
                A Pinnacle Consultancy
              </p>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: "#c9a227",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                marginBottom: 8,
              }}
            >
              About Us
            </p>
            <h2
              style={{
                fontSize: "clamp(22px, 3vw, 34px)",
                fontWeight: 800,
                color: "#1a2b5e",
                lineHeight: 1.25,
                marginBottom: 6,
                fontFamily: "var(--font-heading)",
              }}
            >
              Your Partner in Building Capability and Culture
            </h2>
            <div
              style={{
                width: 44,
                height: 3,
                background: "#c9a227",
                borderRadius: 2,
                marginBottom: 20,
              }}
            />
            <p style={{ fontSize: 14.5, color: "#4b5563", lineHeight: 1.8, marginBottom: 16 }}>
              N-DOBLE – A Pinnacle Consultancy is a learning and development
              consultancy dedicated to helping organizations unleash potential and
              achieve business results. We blend proven methodologies, innovative
              solutions, and experiential learning to create meaningful
              organizational transformation.
            </p>
            <Link
              href="/about"
              style={{
                display: "inline-block",
                padding: "11px 26px",
                background: "#c9a227",
                color: "#ffffff",
                fontWeight: 700,
                fontSize: 14,
                borderRadius: 4,
                textDecoration: "none",
                marginTop: 8,
                transition: "background 0.3s ease",
                minHeight: 44,
                lineHeight: "22px",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.background = "#e8b830")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.background = "#c9a227")
              }
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── SOLUTIONS ────────────────────────────────────────── */}
      <section style={{ padding: "72px 24px", background: "#f4f7fc" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: "#c9a227",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                marginBottom: 8,
              }}
            >
              Our Services
            </p>
            <h2
              style={{
                fontSize: "clamp(22px, 3vw, 34px)",
                fontWeight: 800,
                color: "#1a2b5e",
                fontFamily: "var(--font-heading)",
                marginBottom: 6,
              }}
            >
              Solutions That Drive Impact
            </h2>
            <div
              style={{
                width: 44,
                height: 3,
                background: "#c9a227",
                borderRadius: 2,
                margin: "0 auto",
              }}
            />
          </div>

          {/* Cards */}
          <div
            className="solutions-grid"
            style={{
              display: "grid",
              gap: 24,
            }}
          >
            {solutions.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  background: "#ffffff",
                  borderRadius: 8,
                  padding: "32px 24px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 2px 8px rgba(26,43,94,0.06)",
                  transition: "all 0.3s ease",
                }}
                whileHover={{
                  y: -6,
                  boxShadow: "0 12px 32px rgba(26,43,94,0.12)",
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: "rgba(201,162,39,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 20,
                  }}
                >
                  {s.icon}
                </div>
                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: "#1a2b5e",
                    marginBottom: 10,
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  {s.title}
                </h3>
                <p style={{ fontSize: 13.5, color: "#6b7280", lineHeight: 1.65, marginBottom: 16 }}>
                  {s.desc}
                </p>
                <Link
                  href={s.link}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4,
                    fontSize: 13,
                    fontWeight: 700,
                    color: "#c9a227",
                    textDecoration: "none",
                  }}
                >
                  Read More <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────── */}
      <section
        style={{
          background: "linear-gradient(135deg, #1a2b5e 0%, #1e3a6e 100%)",
          padding: "60px 24px",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 32,
            flexWrap: "wrap",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              style={{
                fontSize: "clamp(20px, 3vw, 30px)",
                fontWeight: 800,
                color: "#ffffff",
                marginBottom: 8,
                fontFamily: "var(--font-heading)",
              }}
            >
              Ready to Elevate Your Organization?
            </h2>
            <p style={{ fontSize: 14.5, color: "rgba(255,255,255,0.75)", maxWidth: 520 }}>
              Let&apos;s collaborate to create learning journeys that inspire
              performance and drive results.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <Link
              href="/contact"
              style={{
                display: "inline-block",
                padding: "13px 32px",
                background: "#c9a227",
                color: "#ffffff",
                fontWeight: 800,
                fontSize: 15,
                borderRadius: 4,
                textDecoration: "none",
                transition: "background 0.3s ease",
                whiteSpace: "nowrap",
                minHeight: 44,
                lineHeight: "20px",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.background = "#e8b830")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.background = "#c9a227")
              }
            >
              Let&apos;s Connect
            </Link>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}
