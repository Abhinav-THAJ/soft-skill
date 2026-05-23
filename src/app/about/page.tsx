"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import { Eye, Target, CheckCircle, Shield, Award, Users } from "lucide-react";

export default function About() {
  const specializations = [
    { text: "Corporate training solutions" },
    { text: "Leadership transformation" },
    { text: "Behavioral and soft skills development" },
    { text: "Technology-driven learning" },
    { text: "Organizational growth strategies" },
    { text: "Experiential and outbound learning" }
  ];

  const whyChooseUs = [
    {
      title: "Industry-relevant training modules",
      desc: "Our curriculums are continually updated to address contemporary business needs."
    },
    {
      title: "Customized corporate solutions",
      desc: "Every training framework is custom tailored to align with your organization's goals."
    },
    {
      title: "Experienced trainers & facilitators",
      desc: "Workshops are led by seasoned executive facilitators and subject-matter experts."
    },
    {
      title: "Practical and experiential learning",
      desc: "Interactive outbound, classroom, and workshop methodologies ensure real skill transfer."
    },
    {
      title: "AI & future-tech integrated programs",
      desc: "We weave digital fluency and AI utility awareness into workforce development."
    },
    {
      title: "Measurable business impact",
      desc: "Our solutions are focused on generating visible improvements in leadership and productivity."
    }
  ];

  return (
    <PageWrapper>
      {/* Background decoration */}
      <div className="absolute top-[20%] right-[10%] w-[350px] h-[350px] rounded-full bg-brand-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase text-brand-gold font-bold tracking-widest"
          >
            A Pinnacle Consultancy
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold tracking-tight text-white mt-3 font-heading"
          >
            Who We Are
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-16 h-1 bg-brand-gold mx-auto mt-4"
          />
        </div>

        {/* Section 1: Who We Are & Specialization */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xl text-white font-medium leading-relaxed border-l-4 border-brand-gold pl-6"
            >
              “N-DO'ABLE – A Pinnacle Consultancy is a modern Learning & Development consulting company dedicated to building future-ready organizations and empowered professionals.”
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4 pt-4"
            >
              <h3 className="text-lg font-bold text-brand-gold uppercase tracking-wider">We specialize in:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {specializations.map((spec) => (
                  <div key={spec.text} className="flex items-center gap-3 bg-white/5 border border-white/5 px-4 py-3 rounded-lg hover:border-brand-blue/20 transition-colors">
                    <CheckCircle className="text-brand-gold shrink-0" size={18} />
                    <span className="text-sm font-medium text-gray-200">{spec.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base text-gray-300 italic pt-4"
            >
              “Our programs are designed to bridge the gap between talent potential and business performance.”
            </motion.p>
          </div>

          {/* Visual Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute inset-0 bg-brand-blue/20 rounded-2xl blur-lg pointer-events-none" />
            <div className="relative border border-white/10 rounded-2xl overflow-hidden aspect-[4/3] bg-brand-navy shadow-2xl">
              <Image
                src="/images/about_workshop.png"
                alt="Leadership mentoring and team collaboration"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/80 via-transparent to-transparent opacity-60" />
            </div>
          </motion.div>
        </div>

        {/* Section 2: Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card-gold p-8 rounded-2xl relative overflow-hidden group"
          >
            <div className="absolute top-6 right-6 text-brand-gold/10 group-hover:scale-110 transition-transform duration-300">
              <Eye size={48} />
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center">
                <Eye className="text-brand-gold" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white font-heading">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed text-base">
                “To become a trusted partner in transforming individuals and organizations through impactful learning experiences.”
              </p>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card-blue p-8 rounded-2xl relative overflow-hidden group"
          >
            <div className="absolute top-6 right-6 text-brand-blue/20 group-hover:scale-110 transition-transform duration-300">
              <Target size={48} />
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center">
                <Target className="text-brand-blue" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white font-heading">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed text-base">
                “To advocate excellence in organizational learning by delivering innovative, practical, and engaging development solutions.”
              </p>
            </div>
          </motion.div>
        </div>

        {/* Section 3: Why Choose Us (Detailed) */}
        <div className="border-t border-white/5 pt-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white font-heading">Why Choose Us</h2>
            <div className="w-16 h-1 bg-brand-gold mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="p-6 rounded-xl bg-white/5 border border-white/5 hover:border-brand-gold/20 hover:bg-brand-navy/35 transition-all duration-300 group"
              >
                <div className="w-8 h-8 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold font-bold text-sm mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-gold transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </PageWrapper>
  );
}
