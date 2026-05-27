"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import { CheckCircle, Eye, Target } from "lucide-react";

export default function About() {
  const specializations = [
    { text: "Corporate training solutions" },
    { text: "Leadership transformation" },
    { text: "Behavioral and soft skills development" },
    { text: "Technology-driven learning" },
    { text: "Organizational growth strategies" },
    { text: "Experiential and outbound learning" },
  ];

  const whyChooseUs = [
    {
      title: "Industry-relevant training modules",
      desc: "Our curriculums are continually updated to address contemporary business needs.",
    },
    {
      title: "Customized corporate solutions",
      desc: "Every training framework is custom tailored to align with your organization's goals.",
    },
    {
      title: "Experienced trainers & facilitators",
      desc: "Workshops are led by seasoned executive facilitators and subject-matter experts.",
    },
    {
      title: "Practical and experiential learning",
      desc: "Interactive outbound, classroom, and workshop methodologies ensure real skill transfer.",
    },
    {
      title: "AI & future-tech integrated programs",
      desc: "We weave digital fluency and AI utility awareness into workforce development.",
    },
    {
      title: "Measurable business impact",
      desc: "Our solutions are focused on generating visible improvements in leadership and productivity.",
    },
  ];

  return (
    <PageWrapper>
      <div style={{ background: "#f4f7fc", padding: "48px 0 0" }}>
        {/* Page Header */}
        <div style={{ textAlign: "center", padding: "0 24px 48px" }}>
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
            A Pinnacle Consultancy
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
            Who We Are
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

      {/* Section 1: Who We Are */}
      <section style={{ background: "#ffffff", padding: "56px 24px" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 56,
            alignItems: "center",
          }}
          className="about-who-grid"
        >
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p
              style={{
                fontSize: 17,
                color: "#1a2b5e",
                fontWeight: 600,
                lineHeight: 1.7,
                borderLeft: "4px solid #c9a227",
                paddingLeft: 20,
                marginBottom: 28,
              }}
            >
              "N-DO'ABLE – A Pinnacle Consultancy is a modern Learning &
              Development consulting company dedicated to building future-ready
              organizations and empowered professionals."
            </p>

            <h3
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "#c9a227",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: 16,
              }}
            >
              We specialize in:
            </h3>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 10,
              }}
              className="spec-grid"
            >
              {specializations.map((spec) => (
                <div
                  key={spec.text}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    background: "#f4f7fc",
                    border: "1px solid #e2e8f0",
                    borderRadius: 6,
                    padding: "10px 14px",
                  }}
                >
                  <CheckCircle size={16} color="#c9a227" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: 13.5, color: "#374151", fontWeight: 500 }}>
                    {spec.text}
                  </span>
                </div>
              ))}
            </div>

            <p
              style={{
                fontSize: 14.5,
                color: "#6b7280",
                fontStyle: "italic",
                lineHeight: 1.7,
                marginTop: 24,
              }}
            >
              "Our programs are designed to bridge the gap between talent
              potential and business performance."
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
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
              alt="Workshop"
              fill
              style={{ objectFit: "cover" }}
            />
          </motion.div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .about-who-grid { grid-template-columns: 1fr !important; }
            .spec-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* Section 2: Vision & Mission */}
      <section style={{ background: "#f4f7fc", padding: "56px 24px" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 28,
          }}
          className="vm-grid"
        >
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              background: "#1a2b5e",
              borderRadius: 10,
              padding: "36px 32px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 20,
                right: 20,
                opacity: 0.08,
              }}
            >
              <Eye size={60} color="#c9a227" />
            </div>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 10,
                background: "rgba(201,162,39,0.15)",
                border: "1px solid rgba(201,162,39,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 20,
              }}
            >
              <Eye size={24} color="#c9a227" />
            </div>
            <h2
              style={{
                fontSize: 22,
                fontWeight: 800,
                color: "#ffffff",
                marginBottom: 14,
                fontFamily: "var(--font-heading)",
              }}
            >
              Our Vision
            </h2>
            <p style={{ fontSize: 14.5, color: "rgba(255,255,255,0.8)", lineHeight: 1.75 }}>
              "To become a trusted partner in transforming individuals and
              organizations through impactful learning experiences."
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: 10,
              padding: "36px 32px",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 4px 16px rgba(26,43,94,0.07)",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 20,
                right: 20,
                opacity: 0.06,
              }}
            >
              <Target size={60} color="#1a2b5e" />
            </div>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 10,
                background: "rgba(26,43,94,0.07)",
                border: "1px solid rgba(26,43,94,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 20,
              }}
            >
              <Target size={24} color="#1a2b5e" />
            </div>
            <h2
              style={{
                fontSize: 22,
                fontWeight: 800,
                color: "#1a2b5e",
                marginBottom: 14,
                fontFamily: "var(--font-heading)",
              }}
            >
              Our Mission
            </h2>
            <p style={{ fontSize: 14.5, color: "#4b5563", lineHeight: 1.75 }}>
              "To advocate excellence in organizational learning by delivering
              innovative, practical, and engaging development solutions."
            </p>
          </motion.div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .vm-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* Section 3: Why Choose Us */}
      <section style={{ background: "#ffffff", padding: "56px 24px 72px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <h2
              style={{
                fontSize: "clamp(22px, 3vw, 32px)",
                fontWeight: 800,
                color: "#1a2b5e",
                fontFamily: "var(--font-heading)",
                marginBottom: 10,
              }}
            >
              Why Choose Us
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
              gap: 22,
            }}
            className="why-grid"
          >
            {whyChooseUs.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                style={{
                  background: "#f4f7fc",
                  border: "1px solid #e2e8f0",
                  borderRadius: 8,
                  padding: "28px 24px",
                  transition: "all 0.3s ease",
                }}
                whileHover={{
                  y: -4,
                  boxShadow: "0 8px 24px rgba(26,43,94,0.10)",
                }}
              >
                <div
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: "50%",
                    background: "rgba(201,162,39,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#c9a227",
                    fontWeight: 800,
                    fontSize: 14,
                    marginBottom: 16,
                  }}
                >
                  {idx + 1}
                </div>
                <h3
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: "#1a2b5e",
                    marginBottom: 8,
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: 13.5, color: "#4b5563", lineHeight: 1.65 }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) {
            .why-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (max-width: 540px) {
            .why-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>
    </PageWrapper>
  );
}
