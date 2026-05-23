"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import {
  BookOpen,
  ArrowRight,
  TrendingUp,
  Brain,
  Compass,
  Users,
  Award,
  Zap,
  Star,
  Quote,
  CheckCircle,
  Briefcase,
  ChevronRight
} from "lucide-react";

export default function Home() {
  const coreFocusList = [
    { name: "Corporate Life Skills", icon: <Brain className="text-brand-gold" size={24} /> },
    { name: "Leadership & Management Development", icon: <TrendingUp className="text-brand-gold" size={24} /> },
    { name: "AI & Future-Tech Awareness", icon: <Zap className="text-brand-gold" size={24} /> },
    { name: "Employee Engagement Programs", icon: <Users className="text-brand-gold" size={24} /> },
    { name: "Outbound & Adventure Learning", icon: <Compass className="text-brand-gold" size={24} /> },
    { name: "Sales & Customer Excellence", icon: <Briefcase className="text-brand-gold" size={24} /> },
    { name: "Team Building Workshops", icon: <Award className="text-brand-gold" size={24} /> },
    { name: "Campus to Corporate Programs", icon: <BookOpen className="text-brand-gold" size={24} /> }
  ];

  const whyChooseUsList = [
    { text: "Industry-relevant training modules" },
    { text: "Customized corporate solutions" },
    { text: "Experienced trainers & facilitators" },
    { text: "Practical and experiential learning" },
    { text: "AI & future-tech integrated programs" },
    { text: "Measurable business impact" }
  ];

  const featuredPrograms = [
    {
      title: "Pinnacle Leadership Series",
      desc: "A transformational leadership journey for managers and senior executives.",
      tag: "Executive",
      link: "/programs#pinnacle-leadership"
    },
    {
      title: "Future Ready Workforce Program",
      desc: "Building digital adaptability, innovation, and AI readiness.",
      tag: "Technology & Future Skills",
      link: "/programs#future-ready"
    },
    {
      title: "Outbound Leadership Camp",
      desc: "Adventure-based experiential learning for leadership and team development.",
      tag: "Experiential",
      link: "/programs#outbound-learning"
    }
  ];

  const industries = [
    "IT & Technology",
    "Manufacturing",
    "Retail",
    "Healthcare",
    "Education",
    "Banking & Finance",
    "Hospitality",
    "Automobile",
    "Startups & SMEs"
  ];

  const testimonials = [
    {
      quote: "N-DO'ABLE transformed our leadership culture through highly engaging workshops.",
      author: "Senior Vice President",
      company: "Leading Tech Firm"
    },
    {
      quote: "Their AI readiness sessions gave our employees practical insights into future workplace trends.",
      author: "Director of HR",
      company: "Global Manufacturing Group"
    }
  ];

  return (
    <PageWrapper>
      {/* Background grid + decorative light effects */}
      <div className="absolute top-0 left-0 w-full h-[120vh] bg-grid-overlay opacity-30 pointer-events-none z-0" />
      <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-blue/10 blur-[150px] pointer-events-none z-0" />
      <div className="absolute top-[40%] right-[-10%] w-[45%] h-[45%] rounded-full bg-brand-gold/5 blur-[150px] pointer-events-none z-0" />

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wider text-brand-gold uppercase w-fit"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
              Advocating Excellence in Organizational L&D
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight font-heading"
            >
              N-DO'ABLE – <br className="hidden sm:inline" />
              <span className="text-gradient-gold">“A Pinnacle Consultancy”</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-300 max-w-xl leading-relaxed"
            >
              We take you through a Life’s Learning Adventure of Empowering organizations and professionals through transformational learning, leadership development, future-ready skills, and experiential training solutions.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <Link
                href="/programs"
                className="px-6 py-3 font-semibold text-brand-navy bg-gradient-to-r from-brand-gold to-brand-gold-accent rounded-lg hover:shadow-lg hover:shadow-brand-gold/20 hover:scale-[1.02] transition-all duration-300"
              >
                Explore Programs
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg hover:border-brand-gold/40 hover:scale-[1.02] transition-all duration-300"
              >
                Book a Consultation
              </Link>
              <Link
                href="/contact?type=corporate"
                className="px-6 py-3 font-semibold text-brand-gold-accent bg-brand-blue/20 hover:bg-brand-blue/35 border border-brand-blue rounded-lg hover:scale-[1.02] transition-all duration-300"
              >
                Corporate Training Inquiry
              </Link>
            </motion.div>
          </div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/20 to-brand-gold/15 rounded-2xl blur-lg pointer-events-none" />
            <div className="relative border border-white/10 rounded-2xl overflow-hidden aspect-[4/3] bg-brand-navy glow-blue shadow-2xl">
              <Image
                src="/images/hero_consultancy.png"
                alt="Executive leadership consulting"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark via-transparent to-transparent opacity-60" />
              {/* Floating premium badge */}
              <div className="absolute bottom-4 left-4 right-4 glass-panel border border-white/10 p-4 rounded-xl flex items-center justify-between">
                <div>
                  <p className="text-xs text-brand-gold uppercase tracking-wider font-bold">Pinnacle Executive Training</p>
                  <p className="text-sm font-semibold text-white">Shaping Future Leaders</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center">
                  <Award size={18} className="text-brand-gold" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Focus Section */}
      <section className="relative z-10 py-16 bg-brand-navy-dark/40 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-white font-heading">
              Our Core <span className="text-gradient-gold">Focus</span>
            </h2>
            <div className="w-16 h-1 bg-brand-gold mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreFocusList.map((focus, index) => (
              <motion.div
                key={focus.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="glass-card-blue p-6 rounded-xl flex flex-col justify-between h-full group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center group-hover:bg-brand-blue/20 transition-all duration-300">
                    {focus.icon}
                  </div>
                  <h3 className="font-semibold text-white text-base leading-snug group-hover:text-brand-gold transition-colors duration-300">
                    {focus.name}
                  </h3>
                </div>
                <div className="mt-6 flex items-center text-xs font-semibold text-brand-gold opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                  Learn more <ChevronRight size={14} className="ml-1" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us & Doc Visual */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative order-last lg:order-first">
              <div className="absolute inset-0 bg-brand-gold/5 rounded-2xl blur-lg pointer-events-none" />
              <div className="relative border border-white/10 rounded-2xl overflow-hidden aspect-[4/3] bg-brand-navy shadow-2xl">
                <Image
                  src="/images/about_workshop.png"
                  alt="Corporate workshop learning"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy-dark via-transparent to-transparent opacity-40" />
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col space-y-6">
              <div className="space-y-2">
                <p className="text-xs uppercase text-brand-gold font-bold tracking-widest">Transformative Advantage</p>
                <h2 className="text-3xl font-bold tracking-tight text-white font-heading">Why Choose Us</h2>
                <div className="w-12 h-1 bg-brand-gold mt-2" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {whyChooseUsList.map((item, idx) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    className="flex items-center gap-3 p-3.5 rounded-lg bg-white/5 border border-white/5 hover:border-brand-gold/10 transition-colors"
                  >
                    <CheckCircle className="text-brand-gold shrink-0" size={20} />
                    <span className="text-sm font-medium text-gray-200">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs Section */}
      <section className="relative z-10 py-20 bg-brand-navy-dark/40 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end text-center sm:text-left mb-12">
            <div className="space-y-2">
              <p className="text-xs uppercase text-brand-gold font-bold tracking-widest">Curated Curriculums</p>
              <h2 className="text-3xl font-bold tracking-tight text-white font-heading">Featured Programs</h2>
              <div className="w-12 h-1 bg-brand-gold mt-2 mx-auto sm:mx-0" />
            </div>
            <Link
              href="/programs"
              className="group flex items-center text-sm font-bold text-brand-gold-accent hover:text-brand-gold mt-4 sm:mt-0 transition-colors"
            >
              View all programs
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPrograms.map((prog, index) => (
              <motion.div
                key={prog.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card-gold p-8 rounded-xl flex flex-col justify-between h-full group"
              >
                <div className="space-y-4">
                  <span className="px-2.5 py-1 text-xs font-semibold bg-brand-gold/10 border border-brand-gold/30 text-brand-gold rounded-full">
                    {prog.tag}
                  </span>
                  <h3 className="text-xl font-bold text-white group-hover:text-brand-gold transition-colors duration-300 font-heading">
                    {prog.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{prog.desc}</p>
                </div>
                <div className="mt-8 pt-4 border-t border-white/5">
                  <Link
                    href={prog.link}
                    className="inline-flex items-center text-xs font-bold text-white group-hover:text-brand-gold tracking-wider uppercase transition-colors"
                  >
                    Explore program details
                    <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs uppercase text-brand-gold font-bold tracking-widest">Global Sectors</p>
            <h2 className="text-3xl font-bold tracking-tight text-white font-heading mt-2">
              Industries Served
            </h2>
            <div className="w-16 h-1 bg-brand-gold mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-4 text-center">
            {industries.map((ind, idx) => (
              <motion.div
                key={ind}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-brand-gold/25 hover:bg-brand-navy/30 transition-all duration-300 flex items-center justify-center h-24 shadow-sm group"
              >
                <span className="text-xs sm:text-sm font-semibold text-gray-300 group-hover:text-brand-gold transition-colors duration-300">
                  {ind}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Preview Section */}
      <section className="relative z-10 py-20 bg-brand-navy-dark/40 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs uppercase text-brand-gold font-bold tracking-widest">Client Feedback</p>
            <h2 className="text-3xl font-bold tracking-tight text-white font-heading mt-2">
              Testimonials
            </h2>
            <div className="w-16 h-1 bg-brand-gold mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((test, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative bg-brand-navy/40 border border-white/5 p-8 rounded-2xl flex flex-col justify-between shadow-xl"
              >
                <div className="absolute top-6 right-8 text-brand-gold/10">
                  <Quote size={56} className="fill-current" />
                </div>
                <div className="space-y-4 relative z-10">
                  <div className="flex text-brand-gold gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-current" />
                    ))}
                  </div>
                  <p className="text-base text-gray-300 italic leading-relaxed">
                    “{test.quote}”
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-white/5 relative z-10 flex flex-col">
                  <span className="font-bold text-white text-sm">{test.author}</span>
                  <span className="text-xs text-brand-gold-warm">{test.company}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Consultation CTA */}
      <section className="relative z-10 py-24 overflow-hidden border-t border-white/5">
        {/* Background glow in center */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-blue/10 to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-heading">
              Ready to Transform Your <span className="text-gradient-gold">Organization?</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Empower your teams with the next level of corporate performance, future skills, and leadership transformation. Connect with N-DO'ABLE experts today.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 font-bold text-brand-navy bg-gradient-to-r from-brand-gold to-brand-gold-accent hover:from-brand-gold-accent hover:to-brand-gold rounded-lg hover:shadow-lg hover:shadow-brand-gold/30 hover:scale-[1.03] transition-all duration-300 flex items-center gap-2"
              >
                Request a Consultation
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 font-bold text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg hover:border-brand-gold/40 transition-all duration-300"
              >
                Explore L&D Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}
