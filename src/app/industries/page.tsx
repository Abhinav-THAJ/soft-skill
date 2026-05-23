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
  Quote
} from "lucide-react";

export default function Industries() {
  const industriesList = [
    {
      name: "IT & Technology",
      icon: <Laptop className="text-brand-gold" size={24} />,
      desc: "Providing AI adaptability, digital transformation mindsets, and agile leadership programs for rapid-scale tech environments."
    },
    {
      name: "Manufacturing",
      icon: <Factory className="text-brand-gold" size={24} />,
      desc: "Delivering core operational life skills, safety coordination behavioral training, and supervisor leadership workshops."
    },
    {
      name: "Retail",
      icon: <ShoppingBag className="text-brand-gold" size={24} />,
      desc: "Empowering retail frontlines and store managers through sales effectiveness and customer service relationship management."
    },
    {
      name: "Healthcare",
      icon: <HeartPulse className="text-brand-gold" size={24} />,
      desc: "Improving medical team communication, stress management, conflict resolution, and patient-centric empathy frameworks."
    },
    {
      name: "Education",
      icon: <GraduationCap className="text-brand-gold" size={24} />,
      desc: "Designing campus-to-corporate readiness modules, interview preparation, and teacher leadership development programs."
    },
    {
      name: "Banking & Finance",
      icon: <Landmark className="text-brand-gold" size={24} />,
      desc: "Developing executive presence, strategic decision-making matrices, and high-trust relationship management for financial leaders."
    },
    {
      name: "Hospitality",
      icon: <UtensilsCrossed className="text-brand-gold" size={24} />,
      desc: "Driving service excellence, advanced hospitality soft skills, verbal communication, and customer satisfaction methodologies."
    },
    {
      name: "Automobile",
      icon: <Car className="text-brand-gold" size={24} />,
      desc: "Enhancing shopfloor team collaboration, performance acceleration, negotiation skills, and technical adaptability."
    },
    {
      name: "Startups & SMEs",
      icon: <Briefcase className="text-brand-gold" size={24} />,
      desc: "Scaling flat structures through team-building activities, emotional intelligence training, and dynamic founder alignment retreats."
    }
  ];

  const testimonialsList = [
    {
      quote: "N-DO'ABLE transformed our leadership culture through highly engaging workshops.",
      author: "Chief Human Resources Officer",
      industry: "Enterprise Technology"
    },
    {
      quote: "Their AI readiness sessions gave our employees practical insights into future workplace trends.",
      author: "Operations Director",
      industry: "Advanced Manufacturing"
    },
    {
      quote: "Excellent trainers, energetic sessions, and measurable impact on team performance.",
      author: "Vice President of Talent",
      industry: "Financial Services"
    }
  ];

  return (
    <PageWrapper>
      {/* Background radial effects */}
      <div className="absolute top-[15%] right-[-5%] w-[400px] h-[400px] bg-brand-gold/5 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[30%] left-[-5%] w-[400px] h-[400px] bg-brand-blue/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase text-brand-gold font-bold tracking-widest"
          >
            Targeted Sectors
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold tracking-tight text-white mt-3 font-heading"
          >
            Industries We Serve
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-16 h-1 bg-brand-gold mx-auto mt-4"
          />
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-28">
          {industriesList.map((ind, idx) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="glass-card-blue p-8 rounded-2xl flex flex-col justify-between h-full group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center group-hover:bg-brand-blue/20 transition-all duration-300">
                  {ind.icon}
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-brand-gold transition-colors duration-300 font-heading">
                  {ind.name}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {ind.desc}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center text-xs font-semibold text-brand-gold-warm">
                Custom Tailored Solutions Available
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div id="testimonials" className="border-t border-white/5 pt-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs uppercase text-brand-gold font-bold tracking-widest">Client Success Stories</p>
            <h2 className="text-3xl font-bold tracking-tight text-white font-heading mt-2">Testimonials</h2>
            <div className="w-16 h-1 bg-brand-gold mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonialsList.map((test, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="glass-card-gold p-8 rounded-2xl relative flex flex-col justify-between bg-brand-navy-dark"
              >
                <div className="absolute top-6 right-8 text-brand-gold/5 pointer-events-none">
                  <Quote size={50} className="fill-current" />
                </div>
                <div className="space-y-4 relative z-10">
                  <div className="flex text-brand-gold gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} className="fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-300 italic leading-relaxed">
                    “{test.quote}”
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-white/5 relative z-10">
                  <h4 className="text-sm font-bold text-white">{test.author}</h4>
                  <p className="text-xs text-brand-gold-warm">{test.industry}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </PageWrapper>
  );
}
