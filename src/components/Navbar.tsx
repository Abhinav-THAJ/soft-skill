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

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Programs", path: "/programs" },
    { name: "Industries", path: "/industries" },
    { name: "Contact", path: "/contact" }
  ];

  const menuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  } as const;

  const linkVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 30 }
  } as const;

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled || isOpen
            ? "bg-brand-navy-dark/95 backdrop-blur-md py-3 border-b border-white/5 shadow-lg"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group relative z-50">
              <div className="relative overflow-hidden max-w-[170px] xs:max-w-[210px] sm:max-w-[260px]">
                <Image
                  src="/logo.png"
                  alt="N-DO'ABLE Logo"
                  width={260}
                  height={60}
                  className="object-contain w-[160px] xs:w-[190px] sm:w-[240px] h-9 sm:h-11 brightness-0 invert transition-transform"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
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
            <div className="hidden lg:block">
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
            <div className="lg:hidden relative z-50">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none transition-colors"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Full-screen Drawer Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 h-screen w-screen bg-brand-navy-dark/98 backdrop-blur-xl z-40 flex flex-col justify-between px-6 pt-28 pb-12 overflow-y-auto"
            >
              {/* Subtle glowing backgrounds in the drawer */}
              <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-brand-blue/10 blur-[120px] rounded-full pointer-events-none" />
              <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none" />

              <div className="flex flex-col space-y-6 max-w-md mx-auto w-full relative z-10">
                {navLinks.map((link) => {
                  const isActive = pathname === link.path;
                  return (
                    <motion.div key={link.name} variants={linkVariants}>
                      <Link
                        href={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`block text-2xl font-bold font-heading tracking-wide transition-colors ${
                          isActive
                            ? "text-brand-gold border-l-4 border-brand-gold pl-4"
                            : "text-gray-300 hover:text-white hover:translate-x-1 transition-transform"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div 
                variants={linkVariants}
                className="max-w-md mx-auto w-full pt-8 border-t border-white/5 relative z-10 space-y-6"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex w-full items-center justify-center py-4 text-center text-base font-bold text-brand-navy bg-gradient-to-r from-brand-gold to-brand-gold-accent rounded-lg shadow-lg"
                >
                  Book a Consultation
                  <ArrowRight size={18} className="ml-2" />
                </Link>
                
                <div className="text-center text-xs text-gray-500 space-y-1">
                  <p>Coimbatore, India • info@ndoableconsultancy.com</p>
                  <p>© {new Date().getFullYear()} N-DO'ABLE. All rights reserved.</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
