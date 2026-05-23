"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ShieldCheck } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Programs", path: "/programs" },
    { name: "Industries", path: "/industries" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-brand-navy-dark/85 backdrop-blur-md py-3 border-b border-white/5 shadow-lg"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative overflow-hidden max-w-[220px] sm:max-w-[280px]">
                <Image
                  src="/logo.png"
                  alt="N-DO'ABLE Logo"
                  width={260}
                  height={60}
                  className="object-contain w-[220px] sm:w-[260px] h-10 sm:h-12 brightness-0 invert"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    href={link.path}
                    className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors ${
                      isActive ? "text-brand-gold" : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavBorder"
                        className="absolute bottom-0 left-4 right-4 h-0.5 bg-brand-gold"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden md:block">
              <Link
                href="/contact"
                className="relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold tracking-wide text-brand-navy bg-gradient-to-r from-brand-gold via-brand-gold-accent to-brand-gold-warm rounded overflow-hidden group shadow-md transition-all duration-300 hover:shadow-brand-gold/20"
              >
                <span className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:animate-shine" />
                <span className="relative flex items-center gap-1.5 font-bold">
                  Consultation
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none transition-colors"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-brand-navy-dark/95 border-b border-white/5 backdrop-blur-lg overflow-hidden"
            >
              <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3">
                {navLinks.map((link) => {
                  const isActive = pathname === link.path;
                  return (
                    <Link
                      key={link.name}
                      href={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 rounded-md text-base font-medium transition-colors ${
                        isActive
                          ? "bg-brand-navy text-brand-gold border-l-2 border-brand-gold"
                          : "text-gray-300 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
                <div className="pt-4 px-4">
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="flex w-full items-center justify-center px-4 py-3 text-center text-sm font-bold text-brand-navy bg-brand-gold rounded shadow-md"
                  >
                    Book a Consultation
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
