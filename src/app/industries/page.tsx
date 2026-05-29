"use client";

import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import {
  Laptop,
  Factory,
  ShoppingBag,
  HeartPulse,
  GraduationCap,
  Landmark,
  UtensilsCrossed,
  Car,
  Briefcase,
  Star,
  Quote,
} from "lucide-react";

export default function Industries() {
  const industriesList = [
    {
      name: "IT & Technology",
      icon: <Laptop size={24} color="#c9a227" />,
      desc: "Providing AI adaptability, digital transformation mindsets, and agile leadership programs for rapid-scale tech environments.",
    },
    {
      name: "Manufacturing",
      icon: <Factory size={24} color="#c9a227" />,
      desc: "Delivering core operational life skills, safety coordination behavioral training, and supervisor leadership workshops.",
    },
    {
      name: "Retail",
      icon: <ShoppingBag size={24} color="#c9a227" />,
      desc: "Empowering retail frontlines and store managers through sales effectiveness and customer service relationship management.",
    },
    {
      name: "Healthcare",
      icon: <HeartPulse size={24} color="#c9a227" />,
      desc: "Improving medical team communication, stress management, conflict resolution, and patient-centric empathy frameworks.",
    },
    {
      name: "Education",
      icon: <GraduationCap size={24} color="#c9a227" />,
      desc: "Designing campus-to-corporate readiness modules, interview preparation, and teacher leadership development programs.",
    },
    {
      name: "Banking & Finance",
      icon: <Landmark size={24} color="#c9a227" />,
      desc: "Developing executive presence, strategic decision-making matrices, and high-trust relationship management for financial leaders.",
    },
    {
      name: "Hospitality",
      icon: <UtensilsCrossed size={24} color="#c9a227" />,
      desc: "Driving service excellence, advanced hospitality soft skills, verbal communication, and customer satisfaction methodologies.",
    },
    {
      name: "Automobile",
      icon: <Car size={24} color="#c9a227" />,
      desc: "Enhancing shopfloor team collaboration, performance acceleration, negotiation skills, and technical adaptability.",
    },
    {
      name: "Startups & SMEs",
      icon: <Briefcase size={24} color="#c9a227" />,
      desc: "Scaling flat structures through team-building activities, emotional intelligence training, and dynamic founder alignment retreats.",
    },
  ];

  const testimonialsList = [
    {
      quote:
        "N-DO'ABLE transformed our leadership culture through highly engaging workshops.",
      author: "Chief Human Resources Officer",
      industry: "Enterprise Technology",
    },
    {
      quote:
        "Their AI readiness sessions gave our employees practical insights into future workplace trends.",
      author: "Operations Director",
      industry: "Advanced Manufacturing",
    },
    {
      quote:
        "Excellent trainers, energetic sessions, and measurable impact on team performance.",
      author: "Vice President of Talent",
      industry: "Financial Services",
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
            Targeted Sectors
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
            Industries We Serve
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

      {/* Industries Grid */}
      <section style={{ background: "#ffffff", padding: "56px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 22,
            }}
            className="industries-grid"
          >
            {industriesList.map((ind, idx) => (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                style={{
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: 8,
                  padding: "28px 22px",
                  boxShadow: "0 2px 8px rgba(26,43,94,0.05)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "all 0.3s ease",
                }}
                whileHover={{
                  y: -4,
                  borderColor: "#c9a227",
                  boxShadow: "0 10px 28px rgba(26,43,94,0.10)",
                }}
              >
                <div>
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 10,
                      background: "rgba(201,162,39,0.09)",
                      border: "1px solid rgba(201,162,39,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 16,
                    }}
                  >
                    {ind.icon}
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
                    {ind.name}
                  </h3>
                  <p
                    style={{
                      fontSize: 13.5,
                      color: "#4b5563",
                      lineHeight: 1.65,
                    }}
                  >
                    {ind.desc}
                  </p>
                </div>
                <p
                  style={{
                    marginTop: 18,
                    paddingTop: 12,
                    borderTop: "1px solid #e2e8f0",
                    fontSize: 12,
                    color: "#c9a227",
                    fontWeight: 600,
                  }}
                >
                  Custom Tailored Solutions Available
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        style={{ background: "#f4f7fc", padding: "56px 24px 72px" }}
      >
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
              Client Success Stories
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
              Testimonials
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
              gap: 24,
            }}
            className="testimonials-grid"
          >
            {testimonialsList.map((test, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                style={{
                  background: "#1a2b5e",
                  borderRadius: 10,
                  padding: "32px 28px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Quote icon bg */}
                <div
                  style={{
                    position: "absolute",
                    top: 16,
                    right: 20,
                    opacity: 0.07,
                  }}
                >
                  <Quote size={50} color="#c9a227" />
                </div>

                {/* Stars */}
                <div
                  style={{
                    display: "flex",
                    gap: 3,
                    marginBottom: 16,
                  }}
                >
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} color="#c9a227" fill="#c9a227" />
                  ))}
                </div>

                <p
                  style={{
                    fontSize: 14.5,
                    color: "rgba(255,255,255,0.85)",
                    fontStyle: "italic",
                    lineHeight: 1.7,
                    marginBottom: 24,
                  }}
                >
                  "{test.quote}"
                </p>

                <div
                  style={{
                    paddingTop: 16,
                    borderTop: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  <p
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      color: "#ffffff",
                      marginBottom: 3,
                    }}
                  >
                    {test.author}
                  </p>
                  <p style={{ fontSize: 12, color: "#c9a227" }}>
                    {test.industry}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
