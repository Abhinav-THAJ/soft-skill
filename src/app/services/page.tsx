"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import {
  TrendingUp,
  Brain,
  Shield,
  Cpu,
  Users2,
  GraduationCap,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

interface ServiceItem {
  id: number;
  title: string;
  desc: string;
  icon: React.ReactNode;
  listTitle: string;
  list: string[];
}

export default function Services() {
  const [expandedId, setExpandedId] = useState<number | null>(1);

  const servicesData: ServiceItem[] = [
    {
      id: 1,
      title: "Leadership Development",
      desc: "Develop strong, confident, and transformational leaders.",
      icon: <TrendingUp size={28} color="#c9a227" />,
      listTitle: "Programs Include:",
      list: [
        "Leadership Essentials",
        "Strategic Thinking",
        "Executive Presence",
        "Decision Making",
        "Emotional Intelligence",
        "Change Management",
      ],
    },
    {
      id: 2,
      title: "Soft Skills & Behavioral Training",
      desc: "Enhance communication and workplace effectiveness.",
      icon: <Brain size={28} color="#c9a227" />,
      listTitle: "Programs Include:",
      list: [
        "Communication Skills",
        "Public Speaking",
        "Presentation Skills",
        "Business Etiquette",
        "Time Management",
        "Stress Management",
        "Conflict Resolution",
      ],
    },
    {
      id: 3,
      title: "Sales & Customer Service Training",
      desc: "Drive business growth through customer-centric excellence.",
      icon: <Shield size={28} color="#c9a227" />,
      listTitle: "Programs Include:",
      list: [
        "Advanced Sales Techniques",
        "Negotiation Skills",
        "Customer Relationship Management",
        "Service Excellence",
        "Retail Sales Effectiveness",
      ],
    },
    {
      id: 4,
      title: "AI & Future-Tech Readiness",
      desc: "Prepare teams for the digital future.",
      icon: <Cpu size={28} color="#c9a227" />,
      listTitle: "Programs Include:",
      list: [
        "AI Awareness for Employees",
        "Prompt Engineering Basics",
        "Digital Transformation Mindset",
        "Workplace Productivity with AI",
        "Future Skills Development",
      ],
    },
    {
      id: 5,
      title: "Team Building & Employee Engagement",
      desc: "Strengthen collaboration and workplace culture.",
      icon: <Users2 size={28} color="#c9a227" />,
      listTitle: "Activities Include:",
      list: [
        "Team Bonding Workshops",
        "Outdoor Learning Activities",
        "Adventure-Based Learning",
        "Employee Motivation Sessions",
        "Fun Learning Events",
      ],
    },
    {
      id: 6,
      title: "Campus to Corporate Programs",
      desc: "Help students transition successfully into professional environments.",
      icon: <GraduationCap size={28} color="#c9a227" />,
      listTitle: "Topics Include:",
      list: [
        "Interview Skills",
        "Resume Building",
        "Corporate Communication",
        "Workplace Readiness",
        "Confidence Building",
      ],
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
            L&D Solutions
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
            Corporate Training Services
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

      {/* Services Grid */}
      <section style={{ background: "#ffffff", padding: "56px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 24,
            }}
            className="services-grid"
          >
            {servicesData.map((service, index) => {
              const isExpanded = expandedId === service.id;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  layout
                  onClick={() =>
                    setExpandedId(expandedId === service.id ? null : service.id)
                  }
                  style={{
                    borderRadius: 10,
                    border: isExpanded
                      ? "2px solid #c9a227"
                      : "1px solid #e2e8f0",
                    background: isExpanded ? "#1a2b5e" : "#ffffff",
                    cursor: "pointer",
                    overflow: "hidden",
                    boxShadow: isExpanded
                      ? "0 8px 28px rgba(26,43,94,0.18)"
                      : "0 2px 8px rgba(26,43,94,0.06)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div style={{ padding: "28px 24px" }}>
                    <div
                      style={{
                        width: 52,
                        height: 52,
                        borderRadius: 10,
                        background: isExpanded
                          ? "rgba(201,162,39,0.15)"
                          : "rgba(201,162,39,0.09)",
                        border: "1px solid rgba(201,162,39,0.25)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 18,
                      }}
                    >
                      {service.icon}
                    </div>
                    <h3
                      style={{
                        fontSize: 16,
                        fontWeight: 700,
                        color: isExpanded ? "#ffffff" : "#1a2b5e",
                        marginBottom: 8,
                        fontFamily: "var(--font-heading)",
                      }}
                    >
                      {service.title}
                    </h3>
                    <p
                      style={{
                        fontSize: 13.5,
                        color: isExpanded
                          ? "rgba(255,255,255,0.75)"
                          : "#6b7280",
                        lineHeight: 1.6,
                        marginBottom: 20,
                      }}
                    >
                      {service.desc}
                    </p>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        fontSize: 12,
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        color: "#c9a227",
                      }}
                    >
                      <span>{isExpanded ? "Hide Details" : "View Details"}</span>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown size={18} color="#c9a227" />
                      </motion.div>
                    </div>
                  </div>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{
                          overflow: "hidden",
                          borderTop: "1px solid rgba(255,255,255,0.12)",
                          background: "rgba(0,0,0,0.12)",
                        }}
                      >
                        <div
                          style={{ padding: "20px 24px 24px" }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <p
                            style={{
                              fontSize: 11,
                              fontWeight: 700,
                              textTransform: "uppercase",
                              letterSpacing: "0.1em",
                              color: "#c9a227",
                              marginBottom: 12,
                            }}
                          >
                            {service.listTitle}
                          </p>
                          <ul
                            style={{
                              listStyle: "none",
                              padding: 0,
                              margin: 0,
                              display: "flex",
                              flexDirection: "column",
                              gap: 8,
                            }}
                          >
                            {service.list.map((item) => (
                              <li
                                key={item}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 8,
                                  fontSize: 13.5,
                                  color: "rgba(255,255,255,0.85)",
                                  fontWeight: 500,
                                }}
                              >
                                <ArrowRight size={13} color="#c9a227" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background: "linear-gradient(135deg, #1a2b5e 0%, #1e3a6e 100%)",
          padding: "56px 24px",
        }}
      >
        <div
          style={{
            maxWidth: 800,
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 800,
              color: "#ffffff",
              marginBottom: 14,
              fontFamily: "var(--font-heading)",
            }}
          >
            Need a Custom Training Framework?
          </h3>
          <p
            style={{
              fontSize: 14.5,
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.7,
              marginBottom: 28,
              maxWidth: 540,
              margin: "0 auto 28px",
            }}
          >
            We design bespoke training solutions matching your specific workforce
            size, industry compliance, and operational goals.
          </p>
          <a
            href="/contact"
            style={{
              display: "inline-block",
              padding: "12px 32px",
              background: "#c9a227",
              color: "#ffffff",
              fontWeight: 700,
              fontSize: 15,
              borderRadius: 4,
              textDecoration: "none",
              transition: "background 0.3s ease",
            }}
          >
            Inquire About Services
          </a>
        </div>
      </section>
    </PageWrapper>
  );
}
