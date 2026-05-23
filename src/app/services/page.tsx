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
  ArrowRight
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
  const [expandedId, setExpandedId] = useState<number | null>(1); // Default first item open

  const servicesData: ServiceItem[] = [
    {
      id: 1,
      title: "Leadership Development",
      desc: "Develop strong, confident, and transformational leaders.",
      icon: <TrendingUp className="text-brand-gold" size={28} />,
      listTitle: "Programs Include:",
      list: [
        "Leadership Essentials",
        "Strategic Thinking",
        "Executive Presence",
        "Decision Making",
        "Emotional Intelligence",
        "Change Management"
      ]
    },
    {
      id: 2,
      title: "Soft Skills & Behavioral Training",
      desc: "Enhance communication and workplace effectiveness.",
      icon: <Brain className="text-brand-gold" size={28} />,
      listTitle: "Programs Include:",
      list: [
        "Communication Skills",
        "Public Speaking",
        "Presentation Skills",
        "Business Etiquette",
        "Time Management",
        "Stress Management",
        "Conflict Resolution"
      ]
    },
    {
      id: 3,
      title: "Sales & Customer Service Training",
      desc: "Drive business growth through customer-centric excellence.",
      icon: <Shield className="text-brand-gold" size={28} />,
      listTitle: "Programs Include:",
      list: [
        "Advanced Sales Techniques",
        "Negotiation Skills",
        "Customer Relationship Management",
        "Service Excellence",
        "Retail Sales Effectiveness"
      ]
    },
    {
      id: 4,
      title: "AI & Future-Tech Readiness",
      desc: "Prepare teams for the digital future.",
      icon: <Cpu className="text-brand-gold" size={28} />,
      listTitle: "Programs Include:",
      list: [
        "AI Awareness for Employees",
        "Prompt Engineering Basics",
        "Digital Transformation Mindset",
        "Workplace Productivity with AI",
        "Future Skills Development"
      ]
    },
    {
      id: 5,
      title: "Team Building & Employee Engagement",
      desc: "Strengthen collaboration and workplace culture.",
      icon: <Users2 className="text-brand-gold" size={28} />,
      listTitle: "Activities Include:",
      list: [
        "Team Bonding Workshops",
        "Outdoor Learning Activities",
        "Adventure-Based Learning",
        "Employee Motivation Sessions",
        "Fun Learning Events"
      ]
    },
    {
      id: 6,
      title: "Campus to Corporate Programs",
      desc: "Help students transition successfully into professional environments.",
      icon: <GraduationCap className="text-brand-gold" size={28} />,
      listTitle: "Topics Include:",
      list: [
        "Interview Skills",
        "Resume Building",
        "Corporate Communication",
        "Workplace Readiness",
        "Confidence Building"
      ]
    }
  ];

  const handleCardClick = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <PageWrapper>
      {/* Background elements */}
      <div className="absolute top-[30%] left-[-5%] w-[400px] h-[400px] rounded-full bg-brand-blue/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-5%] w-[400px] h-[400px] rounded-full bg-brand-gold/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase text-brand-gold font-bold tracking-widest"
          >
            L&D Solutions
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold tracking-tight text-white mt-3 font-heading"
          >
            Corporate Training Services
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-16 h-1 bg-brand-gold mx-auto mt-4"
          />
        </div>

        {/* Services Accordion Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                className={`flex flex-col rounded-2xl border text-left cursor-pointer transition-all duration-300 ${
                  isExpanded
                    ? "bg-brand-navy/60 border-brand-gold glow-gold"
                    : "bg-brand-navy/30 border-white/5 hover:border-brand-blue/50"
                }`}
                onClick={() => handleCardClick(service.id)}
              >
                {/* Card Header */}
                <div className="p-8 flex flex-col justify-between flex-grow">
                  <div className="space-y-4">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-brand-blue/15 border border-brand-blue/30 flex items-center justify-center">
                      {service.icon}
                    </div>
                    {/* Title */}
                    <h3 className="text-xl font-bold text-white font-heading">
                      {service.title}
                    </h3>
                    {/* Description */}
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>

                  {/* Toggle Indicator */}
                  <div className="mt-8 flex items-center justify-between text-xs font-semibold tracking-wider uppercase text-brand-gold">
                    <span>{isExpanded ? "Hide Details" : "View Details"}</span>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={18} />
                    </motion.div>
                  </div>
                </div>

                {/* Accordion Content */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden border-t border-white/5 bg-brand-navy-dark/40 rounded-b-2xl"
                    >
                      <div className="p-8 space-y-4" onClick={(e) => e.stopPropagation()}>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-brand-gold-warm">
                          {service.listTitle}
                        </h4>
                        <ul className="space-y-2.5">
                          {service.list.map((prog) => (
                            <li key={prog} className="flex items-center gap-2.5 text-sm text-gray-300 font-medium">
                              <ArrowRight size={14} className="text-brand-blue shrink-0" />
                              <span>{prog}</span>
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

        {/* Dynamic CTA at the bottom */}
        <div className="mt-20 glass-panel border border-white/5 rounded-2xl p-10 text-center max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-brand-gold/5 blur-[80px] pointer-events-none" />
          <div className="relative z-10 space-y-6">
            <h3 className="text-2xl font-bold text-white font-heading">
              Need a Custom Training Framework?
            </h3>
            <p className="text-sm text-gray-300 max-w-xl mx-auto leading-relaxed">
              We design bespoke training solutions matching your specific workforce size, industry compliance, and operational goals. Contact our consulting team today.
            </p>
            <motion.div whileHover={{ scale: 1.02 }} className="inline-block">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold tracking-wide text-brand-navy bg-brand-gold rounded-lg hover:bg-brand-gold-accent transition-colors"
              >
                Inquire About Services
              </a>
            </motion.div>
          </div>
        </div>

      </div>
    </PageWrapper>
  );
}
