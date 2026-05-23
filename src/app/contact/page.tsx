"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
  Building,
  User,
  Smartphone
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    emailAddress: "",
    phoneNumber: "",
    trainingRequirement: "",
    message: ""
  });

  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");

    const mailtoSubject = `N-DO'ABLE Consultancy Inquiry - ${formData.trainingRequirement}`;
    const mailtoBody = 
      `Dear N-DO'ABLE Team,\n\n` +
      `I would like to request a consultation with N-DO'ABLE – A Pinnacle Consultancy.\n\n` +
      `Here are my inquiry details:\n` +
      `-----------------------------------------------\n` +
      `Full Name: ${formData.fullName}\n` +
      `Company Name: ${formData.companyName || "N/A"}\n` +
      `Email Address: ${formData.emailAddress}\n` +
      `Phone Number: ${formData.phoneNumber}\n` +
      `Training Area: ${formData.trainingRequirement}\n\n` +
      `Message / Special Instructions:\n` +
      `${formData.message}\n` +
      `-----------------------------------------------\n\n` +
      `Best regards,\n` +
      `${formData.fullName}`;

    const web3FormsKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (web3FormsKey && web3FormsKey !== "YOUR_WEB3FORMS_ACCESS_KEY") {
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({
            access_key: web3FormsKey,
            name: formData.fullName,
            email: formData.emailAddress,
            subject: `New Inquiry: ${formData.trainingRequirement}`,
            from_name: "N-DO'ABLE Website",
            message: 
              `Full Name: ${formData.fullName}\n` +
              `Company Name: ${formData.companyName || "N/A"}\n` +
              `Email Address: ${formData.emailAddress}\n` +
              `Phone Number: ${formData.phoneNumber}\n` +
              `Training Area: ${formData.trainingRequirement}\n\n` +
              `Message:\n${formData.message}`
          })
        });

        const result = await response.json();
        if (result.success) {
          setFormState("success");
          setFormData({
            fullName: "",
            companyName: "",
            emailAddress: "",
            phoneNumber: "",
            trainingRequirement: "",
            message: ""
          });
          return;
        }
      } catch (error) {
        console.error("Web3Forms submission failed, falling back to mailto:", error);
      }
    }

    // Fallback: Open default email client pre-filled
    window.location.href = `mailto:info@ndoableconsultancy.com?subject=${encodeURIComponent(mailtoSubject)}&body=${encodeURIComponent(mailtoBody)}`;

    setTimeout(() => {
      setFormState("success");
      setFormData({
        fullName: "",
        companyName: "",
        emailAddress: "",
        phoneNumber: "",
        trainingRequirement: "",
        message: ""
      });
    }, 1000);
  };

  return (
    <PageWrapper>
      {/* Background decorations */}
      <div className="absolute top-[20%] left-[-5%] w-[350px] h-[350px] bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-5%] w-[350px] h-[350px] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase text-brand-gold font-bold tracking-widest"
          >
            Connect With Us
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold tracking-tight text-white mt-3 font-heading"
          >
            Get In Touch
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-16 h-1 bg-brand-gold mx-auto mt-4"
          />
        </div>

        {/* Contact Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Office Details */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Corporate Office */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card-gold p-8 rounded-2xl space-y-4"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center shrink-0">
                  <MapPin className="text-brand-gold" size={24} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-white uppercase tracking-wider">Corporate Office</h3>
                  <p className="text-sm text-gray-300 leading-relaxed font-medium">
                    N-DO'ABLE – A Pinnacle Consultancy<br />
                    279, Dr. Ambedkar Road<br />
                    Velandipalayam,<br />
                    Coimbatore - 641 025<br />
                    Tamilnadu - India.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-card-blue p-8 rounded-2xl space-y-5"
            >
              <h3 className="text-base font-bold text-white uppercase tracking-wider mb-2">Contact Information</h3>
              <ul className="space-y-4 text-sm font-medium">
                <li className="flex items-center gap-3">
                  <Phone className="text-brand-gold shrink-0" size={18} />
                  <span className="text-gray-300">Phone: +91 9751133577</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="text-brand-gold shrink-0" size={18} />
                  <a href="mailto:info@ndoableconsultancy.com" className="text-gray-300 hover:text-brand-gold transition-colors">
                    Email: info@ndoableconsultancy.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Globe className="text-brand-gold shrink-0" size={18} />
                  <a href="http://www.ndoableconsultancy.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-brand-gold transition-colors">
                    Website: www.ndoableconsultancy.com
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card-blue p-8 rounded-2xl space-y-4"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-blue/15 border border-brand-blue/30 flex items-center justify-center shrink-0">
                  <Clock className="text-brand-gold" size={24} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-white uppercase tracking-wider">Business Hours</h3>
                  <p className="text-sm text-gray-300 leading-relaxed font-medium">
                    Monday – Friday: 9:00 AM – 6:00 PM<br />
                    Saturday: 9:00 AM – 1:00 PM
                  </p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-brand-navy/35 border border-white/5 p-8 sm:p-10 rounded-2xl relative shadow-xl"
            >
              <h3 className="text-2xl font-bold text-white mb-6 font-heading">Send an Inquiry</h3>
              
              <AnimatePresence mode="wait">
                {formState === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center text-center py-12 space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold animate-bounce">
                      <CheckCircle size={36} />
                    </div>
                    <h4 className="text-xl font-bold text-white">Inquiry Sent Successfully</h4>
                    <p className="text-sm text-gray-300 max-w-sm">
                      Thank you for contacting N-DO'ABLE. Our executive consulting team will get back to you shortly.
                    </p>
                    <button
                      onClick={() => setFormState("idle")}
                      className="px-6 py-2 bg-white/5 border border-white/10 rounded-md hover:bg-white/10 text-xs font-semibold tracking-wider text-brand-gold uppercase transition-colors"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Full Name */}
                      <div className="space-y-2">
                        <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-gray-400">
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                          <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            required
                            placeholder="John Doe"
                            className="w-full pl-11 pr-4 py-3 bg-brand-navy-dark/60 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-brand-gold/50 transition-colors"
                          />
                        </div>
                      </div>

                      {/* Company Name */}
                      <div className="space-y-2">
                        <label htmlFor="companyName" className="block text-xs font-bold uppercase tracking-wider text-gray-400">
                          Company Name
                        </label>
                        <div className="relative">
                          <Building className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                          <input
                            type="text"
                            id="companyName"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleInputChange}
                            placeholder="Enter Company"
                            className="w-full pl-11 pr-4 py-3 bg-brand-navy-dark/60 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-brand-gold/50 transition-colors"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Email Address */}
                      <div className="space-y-2">
                        <label htmlFor="emailAddress" className="block text-xs font-bold uppercase tracking-wider text-gray-400">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                          <input
                            type="email"
                            id="emailAddress"
                            name="emailAddress"
                            value={formData.emailAddress}
                            onChange={handleInputChange}
                            required
                            placeholder="john@company.com"
                            className="w-full pl-11 pr-4 py-3 bg-brand-navy-dark/60 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-brand-gold/50 transition-colors"
                          />
                        </div>
                      </div>

                      {/* Phone Number */}
                      <div className="space-y-2">
                        <label htmlFor="phoneNumber" className="block text-xs font-bold uppercase tracking-wider text-gray-400">
                          Phone Number *
                        </label>
                        <div className="relative">
                          <Smartphone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                          <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            required
                            placeholder="+91 XXXXX XXXXX"
                            className="w-full pl-11 pr-4 py-3 bg-brand-navy-dark/60 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-brand-gold/50 transition-colors"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Training Requirement Dropdown */}
                    <div className="space-y-2">
                      <label htmlFor="trainingRequirement" className="block text-xs font-bold uppercase tracking-wider text-gray-400">
                        Training Requirement *
                      </label>
                      <select
                        id="trainingRequirement"
                        name="trainingRequirement"
                        value={formData.trainingRequirement}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-brand-navy-dark/60 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-brand-gold/50 transition-colors"
                      >
                        <option value="" disabled>Select a Capability Area</option>
                        <option value="Leadership & Management Development">Leadership & Management Development</option>
                        <option value="AI & Future-Tech Awareness">AI & Future-Tech Awareness</option>
                        <option value="Corporate Life Skills">Corporate Life Skills</option>
                        <option value="Outbound & Adventure Learning">Outbound & Adventure Learning</option>
                        <option value="Team Building Workshops">Team Building Workshops</option>
                        <option value="Sales & Customer Service Training">Sales & Customer Service Training</option>
                        <option value="Campus to Corporate Programs">Campus to Corporate Programs</option>
                        <option value="Other L&D Requirement">Other L&D Requirement</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-gray-400">
                        Message *
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3.5 top-3.5 text-gray-500" size={16} />
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          placeholder="Please provide details about your team sizes, desired formats, and outcomes..."
                          className="w-full pl-11 pr-4 py-3 bg-brand-navy-dark/60 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-brand-gold/50 transition-colors resize-none"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={formState === "submitting"}
                      className="w-full py-4 text-sm font-semibold tracking-wide text-brand-navy bg-gradient-to-r from-brand-gold via-brand-gold-accent to-brand-gold-warm rounded-lg hover:shadow-lg hover:shadow-brand-gold/20 flex items-center justify-center gap-2 group transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span>{formState === "submitting" ? "Sending..." : "Request a Consultation"}</span>
                      {formState !== "submitting" && (
                        <Send size={15} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>

      </div>
    </PageWrapper>
  );
}
