"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUp, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      )
    },
    {
      name: "Instagram",
      url: "https://instagram.com",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      )
    },
    {
      name: "Facebook",
      url: "https://facebook.com",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M22 12c0-5.523-4.477-10-10-10s-10 4.477-10 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54v-2.891h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.771l-.443 2.891h-2.328v6.987c4.781-.75 8.438-4.887 8.438-9.878z" />
        </svg>
      )
    },
    {
      name: "YouTube",
      url: "https://youtube.com",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.163c-.272-1.022-1.074-1.826-2.097-2.099C19.558 3.5 12 3.5 12 3.5s-7.558 0-9.402.564C.756 4.337.054 5.141.026 6.163 0 8.01 0 12 0 12s0 3.99.026 5.837c.272 1.022 1.074 1.826 2.097 2.099C4.442 20.5 12 20.5 12 20.5s7.558 0 9.402-.564c1.022-.273 1.825-1.077 2.097-2.099C24 15.99 24 12 24 12s0-3.99-.026-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      )
    }
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Programs", path: "/programs" },
    { name: "Industries", path: "/industries" },
    { name: "Testimonials", path: "/industries#testimonials" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <footer className="relative bg-brand-navy-dark text-gray-400 border-t border-white/5 pt-16 pb-8 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-white/5">
          {/* Brand Info */}
          <div className="col-span-12 md:col-span-4 flex flex-col space-y-4">
            <Link href="/" className="inline-block max-w-[200px]">
              <Image
                src="/logo.png"
                alt="N-DO'ABLE Logo"
                width={200}
                height={46}
                className="object-contain w-[180px] h-8 brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-gray-400 mt-2 max-w-sm leading-relaxed">
              Advocating excellence in organizational learning and empowering professionals through modern leadership, technology-driven future skills, and adventure-based learning.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-gold hover:border-brand-gold/40 hover:bg-brand-navy transition-all duration-300 shadow-sm"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-6 md:col-span-4 md:pl-12 flex flex-col space-y-4">
            <h3 className="text-white font-semibold text-sm tracking-widest uppercase">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-sm text-gray-400 hover:text-brand-gold transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information Preview */}
          <div className="col-span-6 md:col-span-4 flex flex-col space-y-4">
            <h3 className="text-white font-semibold text-sm tracking-widest uppercase">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin size={18} className="text-brand-gold shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  279, Dr. Ambedkar Road, Velandipalayam, Coimbatore - 641 025, Tamilnadu - India.
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={18} className="text-brand-gold shrink-0" />
                <span>+91 9751133577</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={18} className="text-brand-gold shrink-0" />
                <a href="mailto:info@ndoableconsultancy.com" className="hover:text-brand-gold transition-colors">
                  info@ndoableconsultancy.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {currentYear} N-DO'ABLE – A Pinnacle Consultancy. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-brand-gold transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-brand-gold transition-colors">Terms of Service</Link>
            <button
              onClick={handleScrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 hover:bg-brand-gold hover:text-brand-navy border border-white/10 rounded transition-all duration-300"
            >
              Back to top <ArrowUp size={12} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
