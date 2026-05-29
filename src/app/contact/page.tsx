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
  Smartphone,
} from "lucide-react";

const inputStyle = {
  width: "100%",
  padding: "11px 14px 11px 40px",
  border: "1.5px solid #d1d5db",
  borderRadius: 6,
  fontSize: 14,
  color: "#1a2b5e",
  background: "#ffffff",
  outline: "none",
  boxSizing: "border-box" as const,
  transition: "border-color 0.2s ease",
};

const labelStyle = {
  display: "block",
  fontSize: 11,
  fontWeight: 700,
  textTransform: "uppercase" as const,
  letterSpacing: "0.1em",
  color: "#4b5563",
  marginBottom: 7,
};

const iconWrapStyle = {
  position: "absolute" as const,
  left: 12,
  top: "50%",
  transform: "translateY(-50%)",
};

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    emailAddress: "",
    phoneNumber: "",
    trainingRequirement: "",
    message: "",
  });

  const [formState, setFormState] = useState<"idle" | "submitting" | "success">(
    "idle"
  );

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");

    const mailtoSubject = `N-DO'ABLE Consultancy Inquiry - ${formData.trainingRequirement}`;
    const mailtoBody =
      `Dear N-DO'ABLE Team,\n\n` +
      `Full Name: ${formData.fullName}\n` +
      `Company Name: ${formData.companyName || "N/A"}\n` +
      `Email: ${formData.emailAddress}\n` +
      `Phone: ${formData.phoneNumber}\n` +
      `Training Area: ${formData.trainingRequirement}\n\n` +
      `Message:\n${formData.message}`;

    const web3FormsKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (web3FormsKey && web3FormsKey !== "YOUR_WEB3FORMS_ACCESS_KEY") {
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: web3FormsKey,
            name: formData.fullName,
            email: formData.emailAddress,
            subject: `New Inquiry: ${formData.trainingRequirement}`,
            message: mailtoBody,
          }),
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
            message: "",
          });
          return;
        }
      } catch (err) {
        console.error(err);
      }
    }

    window.location.href = `mailto:info@ndoableconsultancy.com?subject=${encodeURIComponent(mailtoSubject)}&body=${encodeURIComponent(mailtoBody)}`;
    setTimeout(() => {
      setFormState("success");
      setFormData({
        fullName: "",
        companyName: "",
        emailAddress: "",
        phoneNumber: "",
        trainingRequirement: "",
        message: "",
      });
    }, 1000);
  };

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
            Connect With Us
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
            Get In Touch
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

      {/* Content */}
      <section style={{ background: "#ffffff", padding: "56px 24px 72px" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1.6fr",
            gap: 48,
          }}
          className="contact-grid"
        >
          {/* Left: Info Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {/* Corporate Office */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{
                background: "#f4f7fc",
                border: "1px solid #e2e8f0",
                borderRadius: 10,
                padding: "24px 22px",
              }}
            >
              <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 10,
                    background: "rgba(201,162,39,0.1)",
                    border: "1px solid rgba(201,162,39,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <MapPin size={22} color="#c9a227" />
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: "#1a2b5e",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: 8,
                    }}
                  >
                    Corporate Office
                  </h3>
                  <p style={{ fontSize: 13.5, color: "#4b5563", lineHeight: 1.7 }}>
                    N-DO'ABLE – A Pinnacle Consultancy<br />
                    279, Dr. Ambedkar Road<br />
                    Velandipalayam,<br />
                    Coimbatore - 641 025<br />
                    Tamilnadu - India.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                background: "#1a2b5e",
                borderRadius: 10,
                padding: "24px 22px",
              }}
            >
              <h3
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#ffffff",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: 18,
                }}
              >
                Contact Information
              </h3>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                }}
              >
                <li style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <Phone size={16} color="#c9a227" />
                  <span style={{ fontSize: 13.5, color: "rgba(255,255,255,0.85)" }}>
                    +91 9751133577
                  </span>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <Mail size={16} color="#c9a227" />
                  <a
                    href="mailto:info@ndoableconsultancy.com"
                    style={{
                      fontSize: 13.5,
                      color: "rgba(255,255,255,0.85)",
                      textDecoration: "none",
                    }}
                  >
                    info@ndoableconsultancy.com
                  </a>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <Globe size={16} color="#c9a227" />
                  <a
                    href="http://www.ndoableconsultancy.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: 13.5,
                      color: "rgba(255,255,255,0.85)",
                      textDecoration: "none",
                    }}
                  >
                    www.ndoableconsultancy.com
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
              style={{
                background: "#f4f7fc",
                border: "1px solid #e2e8f0",
                borderRadius: 10,
                padding: "24px 22px",
              }}
            >
              <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 10,
                    background: "rgba(26,43,94,0.07)",
                    border: "1px solid rgba(26,43,94,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Clock size={22} color="#1a2b5e" />
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: "#1a2b5e",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: 8,
                    }}
                  >
                    Business Hours
                  </h3>
                  <p style={{ fontSize: 13.5, color: "#4b5563", lineHeight: 1.7 }}>
                    Monday – Friday: 9:00 AM – 6:00 PM<br />
                    Saturday: 9:00 AM – 1:00 PM
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              background: "#f4f7fc",
              border: "1px solid #e2e8f0",
              borderRadius: 12,
              padding: "36px 32px",
              boxShadow: "0 4px 20px rgba(26,43,94,0.07)",
            }}
          >
            <h3
              style={{
                fontSize: 22,
                fontWeight: 800,
                color: "#1a2b5e",
                marginBottom: 24,
                fontFamily: "var(--font-heading)",
              }}
            >
              Send an Inquiry
            </h3>

            <AnimatePresence mode="wait">
              {formState === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    padding: "48px 0",
                    gap: 16,
                  }}
                >
                  <div
                    style={{
                      width: 64,
                      height: 64,
                      borderRadius: "50%",
                      background: "rgba(201,162,39,0.1)",
                      border: "1px solid rgba(201,162,39,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <CheckCircle size={36} color="#c9a227" />
                  </div>
                  <h4
                    style={{
                      fontSize: 20,
                      fontWeight: 800,
                      color: "#1a2b5e",
                    }}
                  >
                    Inquiry Sent Successfully
                  </h4>
                  <p style={{ fontSize: 14, color: "#4b5563", maxWidth: 320 }}>
                    Thank you for contacting N-DO'ABLE. Our team will get back
                    to you shortly.
                  </p>
                  <button
                    onClick={() => setFormState("idle")}
                    style={{
                      padding: "10px 24px",
                      background: "#1a2b5e",
                      color: "#ffffff",
                      border: "none",
                      borderRadius: 6,
                      fontSize: 13,
                      fontWeight: 700,
                      cursor: "pointer",
                    }}
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
                  style={{ display: "flex", flexDirection: "column", gap: 20 }}
                >
                  <div
                    style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
                    className="form-row"
                  >
                    {/* Full Name */}
                    <div>
                      <label htmlFor="fullName" style={labelStyle}>
                        Full Name *
                      </label>
                      <div style={{ position: "relative" }}>
                        <span style={iconWrapStyle}>
                          <User size={15} color="#9ca3af" />
                        </span>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          required
                          placeholder="John Doe"
                          style={inputStyle}
                        />
                      </div>
                    </div>
                    {/* Company Name */}
                    <div>
                      <label htmlFor="companyName" style={labelStyle}>
                        Company Name
                      </label>
                      <div style={{ position: "relative" }}>
                        <span style={iconWrapStyle}>
                          <Building size={15} color="#9ca3af" />
                        </span>
                        <input
                          type="text"
                          id="companyName"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          placeholder="Your Company"
                          style={inputStyle}
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
                    className="form-row"
                  >
                    {/* Email */}
                    <div>
                      <label htmlFor="emailAddress" style={labelStyle}>
                        Email Address *
                      </label>
                      <div style={{ position: "relative" }}>
                        <span style={iconWrapStyle}>
                          <Mail size={15} color="#9ca3af" />
                        </span>
                        <input
                          type="email"
                          id="emailAddress"
                          name="emailAddress"
                          value={formData.emailAddress}
                          onChange={handleInputChange}
                          required
                          placeholder="john@company.com"
                          style={inputStyle}
                        />
                      </div>
                    </div>
                    {/* Phone */}
                    <div>
                      <label htmlFor="phoneNumber" style={labelStyle}>
                        Phone Number *
                      </label>
                      <div style={{ position: "relative" }}>
                        <span style={iconWrapStyle}>
                          <Smartphone size={15} color="#9ca3af" />
                        </span>
                        <input
                          type="tel"
                          id="phoneNumber"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleInputChange}
                          required
                          placeholder="+91 XXXXX XXXXX"
                          style={inputStyle}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Training Requirement */}
                  <div>
                    <label htmlFor="trainingRequirement" style={labelStyle}>
                      Training Requirement *
                    </label>
                    <select
                      id="trainingRequirement"
                      name="trainingRequirement"
                      value={formData.trainingRequirement}
                      onChange={handleInputChange}
                      required
                      style={{
                        ...inputStyle,
                        paddingLeft: 14,
                        color: formData.trainingRequirement
                          ? "#1a2b5e"
                          : "#9ca3af",
                      }}
                    >
                      <option value="" disabled>
                        Select a Capability Area
                      </option>
                      <option value="Leadership & Management Development">
                        Leadership & Management Development
                      </option>
                      <option value="AI & Future-Tech Awareness">
                        AI & Future-Tech Awareness
                      </option>
                      <option value="Corporate Life Skills">
                        Corporate Life Skills
                      </option>
                      <option value="Outbound & Adventure Learning">
                        Outbound & Adventure Learning
                      </option>
                      <option value="Team Building Workshops">
                        Team Building Workshops
                      </option>
                      <option value="Sales & Customer Service Training">
                        Sales & Customer Service Training
                      </option>
                      <option value="Campus to Corporate Programs">
                        Campus to Corporate Programs
                      </option>
                      <option value="Other L&D Requirement">
                        Other L&D Requirement
                      </option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" style={labelStyle}>
                      Message *
                    </label>
                    <div style={{ position: "relative" }}>
                      <span
                        style={{ ...iconWrapStyle, top: 14, transform: "none" }}
                      >
                        <MessageSquare size={15} color="#9ca3af" />
                      </span>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        placeholder="Please provide details about your team sizes, desired formats, and outcomes..."
                        style={{
                          ...inputStyle,
                          resize: "none",
                          paddingTop: 12,
                        }}
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={formState === "submitting"}
                    style={{
                      padding: "14px 24px",
                      background: "#c9a227",
                      color: "#ffffff",
                      border: "none",
                      borderRadius: 6,
                      fontSize: 15,
                      fontWeight: 700,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      opacity: formState === "submitting" ? 0.6 : 1,
                      transition: "background 0.3s ease",
                    }}
                  >
                    {formState === "submitting" ? "Sending..." : "Request a Consultation"}
                    {formState !== "submitting" && <Send size={16} />}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}
