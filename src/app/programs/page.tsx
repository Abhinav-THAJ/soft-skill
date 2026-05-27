"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import { Check } from "lucide-react";

export default function Programs() {
  const signaturePrograms = [
    {
      id: "pinnacle-leadership",
      title: "Pinnacle Leadership Series",
      desc: "A transformational leadership journey for managers and senior executives.",
      image: "/images/hero_consultancy.png",
      tag: "Executive Development",
    },
    {
      id: "future-ready",
      title: "Future Ready Workforce Program",
      desc: "Building digital adaptability, innovation, and AI readiness.",
      image: "/images/ai_readiness.png",
      tag: "Technology & AI",
    },
    {
      id: "life-skills",
      title: "N-DO'ABLE Life Skills Academy",
      desc: "Practical life and workplace skills for professionals and students.",
      image: "/images/life_skills.png",
      tag: "Essential Capabilities",
    },
    {
      id: "team-accelerator",
      title: "High-Performance Team Accelerator",
      desc: "Interactive workshops designed to improve collaboration and productivity.",
      image: "/images/about_workshop.png",
      tag: "Team Synergy",
    },
    {
      id: "outbound-learning",
      title: "Outbound Leadership Camp",
      desc: "Adventure-based experiential learning for leadership and team development.",
      image: "/images/outbound_camp.png",
      tag: "Experiential Outing",
    },
    {
      id: "women-leadership",
      title: "Women Leadership Empowerment Program",
      desc: "Supporting women professionals in leadership growth and career advancement.",
      image: "/images/women_mentoring.png",
      tag: "Career & Inclusion",
    },
  ];

  const formats = [
    {
      name: "Classroom Training",
      desc: "Structured, face-to-face interactive learning sessions.",
    },
    {
      name: "Virtual Learning",
      desc: "Interactive remote modules accessible from anywhere globally.",
    },
    {
      name: "Hybrid Workshops",
      desc: "A custom mix of synchronous virtual and classroom experiences.",
    },
    {
      name: "Outdoor Experiential Learning",
      desc: "Adventure-focused challenges building teamwork & grit.",
    },
    {
      name: "Executive Coaching",
      desc: "Targeted capability building for high-potential business heads.",
    },
    {
      name: "One-on-One Mentoring",
      desc: "Tailored career and capability advisory for senior talent.",
    },
  ];

  return (
    <PageWrapper>
      {/* Header */}
      <div style={{ background: "#f4f7fc", padding: "48px 24px 48px" }}>
        <div style={{ textAlign: "center" }}>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: "#c9a227",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              marginBottom: 10,
            }}
          >
            Exclusive Offerings
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 800,
              color: "#1a2b5e",
              fontFamily: "var(--font-heading)",
              marginBottom: 12,
            }}
          >
            Signature Programs
          </motion.h1>
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
      </div>

      {/* Programs Grid */}
      <section style={{ background: "#ffffff", padding: "56px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 24,
            }}
            className="programs-grid"
          >
            {signaturePrograms.map((prog, idx) => (
              <motion.div
                key={prog.id}
                id={prog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                style={{
                  borderRadius: 10,
                  overflow: "hidden",
                  border: "1px solid #e2e8f0",
                  background: "#ffffff",
                  boxShadow: "0 2px 8px rgba(26,43,94,0.06)",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.3s ease",
                }}
                whileHover={{
                  y: -6,
                  boxShadow: "0 12px 32px rgba(26,43,94,0.12)",
                }}
              >
                {/* Image */}
                <div
                  style={{
                    position: "relative",
                    height: 200,
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={prog.image}
                    alt={prog.title}
                    fill
                    style={{
                      objectFit: "cover",
                      transition: "transform 0.5s ease",
                    }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      top: 14,
                      left: 14,
                      background: "#c9a227",
                      color: "#ffffff",
                      fontSize: 11,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      padding: "4px 10px",
                      borderRadius: 4,
                    }}
                  >
                    {prog.tag}
                  </span>
                </div>

                {/* Content */}
                <div
                  style={{
                    padding: "24px 22px",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#1a2b5e",
                        marginBottom: 8,
                        fontFamily: "var(--font-heading)",
                      }}
                    >
                      {prog.title}
                    </h3>
                    <p
                      style={{
                        fontSize: 13.5,
                        color: "#6b7280",
                        lineHeight: 1.6,
                      }}
                    >
                      {prog.desc}
                    </p>
                  </div>
                  <div
                    style={{
                      marginTop: 20,
                      paddingTop: 14,
                      borderTop: "1px solid #e2e8f0",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span style={{ fontSize: 12, color: "#c9a227", fontWeight: 600 }}>
                      Transformational Curriculum
                    </span>
                    <a
                      href={`/contact?program=${encodeURIComponent(prog.title)}`}
                      style={{
                        fontSize: 12,
                        fontWeight: 700,
                        color: "#1a2b5e",
                        textDecoration: "none",
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                      }}
                    >
                      Enquire →
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) {
            .programs-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (max-width: 540px) {
            .programs-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* Training Formats */}
      <section style={{ background: "#f4f7fc", padding: "56px 24px 72px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
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
              Flexible Delivery Options
            </p>
            <h2
              style={{
                fontSize: "clamp(22px, 3vw, 32px)",
                fontWeight: 800,
                color: "#1a2b5e",
                fontFamily: "var(--font-heading)",
                marginBottom: 10,
              }}
            >
              Training Formats
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

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 20,
            }}
            className="formats-grid"
          >
            {formats.map((fmt, idx) => (
              <motion.div
                key={fmt.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                style={{
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: 8,
                  padding: "22px 20px",
                  display: "flex",
                  gap: 14,
                  alignItems: "flex-start",
                  boxShadow: "0 2px 8px rgba(26,43,94,0.05)",
                }}
                whileHover={{
                  y: -3,
                  boxShadow: "0 8px 20px rgba(26,43,94,0.10)",
                }}
              >
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 8,
                    background: "rgba(201,162,39,0.1)",
                    border: "1px solid rgba(201,162,39,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Check size={18} color="#c9a227" />
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: 14.5,
                      fontWeight: 700,
                      color: "#1a2b5e",
                      marginBottom: 6,
                    }}
                  >
                    {fmt.name}
                  </h3>
                  <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.6 }}>
                    {fmt.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) {
            .formats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (max-width: 540px) {
            .formats-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>
    </PageWrapper>
  );
}
