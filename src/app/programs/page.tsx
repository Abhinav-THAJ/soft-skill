"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import {
  Compass,
  Laptop,
  Users,
  Award,
  ShieldAlert,
  Calendar,
  Layers,
  MapPin,
  Check
} from "lucide-react";

export default function Programs() {
  const signaturePrograms = [
    {
      id: "pinnacle-leadership",
      title: "Pinnacle Leadership Series",
      desc: "A transformational leadership journey for managers and senior executives.",
      image: "/images/hero_consultancy.png",
      tag: "Executive Development"
    },
    {
      id: "future-ready",
      title: "Future Ready Workforce Program",
      desc: "Building digital adaptability, innovation, and AI readiness.",
      image: "/images/ai_readiness.png",
      tag: "Technology & AI"
    },
    {
      id: "life-skills",
      title: "N-DO'ABLE Life Skills Academy",
      desc: "Practical life and workplace skills for professionals and students.",
      image: "/images/life_skills.png",
      tag: "Essential Capabilities"
    },
    {
      id: "team-accelerator",
      title: "High-Performance Team Accelerator",
      desc: "Interactive workshops designed to improve collaboration and productivity.",
      image: "/images/about_workshop.png",
      tag: "Team Synergy"
    },
    {
      id: "outbound-learning",
      title: "Outbound Leadership Camp",
      desc: "Adventure-based experiential learning for leadership and team development.",
      image: "/images/outbound_camp.png",
      tag: "Experiential Outing"
    },
    {
      id: "women-leadership",
      title: "Women Leadership Empowerment Program",
      desc: "Supporting women professionals in leadership growth and career advancement.",
      image: "/images/women_mentoring.png",
      tag: "Career & Inclusion"
    }
  ];

  const formats = [
    { name: "Classroom Training", desc: "Structured, face-to-face interactive learning sessions." },
    { name: "Virtual Learning", desc: "Interactive remote modules accessible from anywhere globally." },
    { name: "Hybrid Workshops", desc: "A custom mix of synchronous virtual and classroom experiences." },
    { name: "Outdoor Experiential Learning", desc: "Adventure-focused challenges building teamwork & grit." },
    { name: "Executive Coaching", desc: "Targeted capability building for high-potential business heads." },
    { name: "One-on-One Mentoring", desc: "Tailored career and capability advisory for senior talent." }
  ];

  return (
    <PageWrapper>
      {/* Background radial effects */}
      <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase text-brand-gold font-bold tracking-widest"
          >
            Exclusive Offerings
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold tracking-tight text-white mt-3 font-heading"
          >
            Signature Programs
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-16 h-1 bg-brand-gold mx-auto mt-4"
          />
        </div>

        {/* Signature Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {signaturePrograms.map((prog, idx) => (
            <motion.div
              key={prog.id}
              id={prog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="glass-card-gold flex flex-col h-full rounded-2xl overflow-hidden group border border-white/5 bg-brand-navy-dark"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-brand-navy-dark">
                <Image
                  src={prog.image}
                  alt={prog.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/90 via-transparent to-transparent opacity-80" />
                <span className="absolute top-4 left-4 px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-brand-gold text-brand-navy rounded-full">
                  {prog.tag}
                </span>
              </div>

              {/* Text Content */}
              <div className="p-8 flex flex-col justify-between flex-grow">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-brand-gold transition-colors duration-300 font-heading">
                    {prog.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {prog.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-brand-gold-warm font-semibold">Transformational Curriculum</span>
                  <a
                    href={`/contact?program=${encodeURIComponent(prog.title)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-gold uppercase tracking-wider hover:underline"
                  >
                    Enquire Now
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Training Formats Section */}
        <div className="border-t border-white/5 pt-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs uppercase text-brand-gold font-bold tracking-widest">Flexible Delivery Options</p>
            <h2 className="text-3xl font-bold tracking-tight text-white font-heading mt-2">Training Formats</h2>
            <div className="w-16 h-1 bg-brand-gold mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {formats.map((format, idx) => (
              <motion.div
                key={format.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="glass-card-blue p-6 rounded-xl border border-brand-blue/20 bg-brand-navy/20 relative overflow-hidden group flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-blue/15 border border-brand-blue/30 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-brand-blue/25 transition-colors">
                  <Check className="text-brand-gold" size={20} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-white group-hover:text-brand-gold transition-colors duration-300">
                    {format.name}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {format.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </PageWrapper>
  );
}
