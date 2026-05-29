"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Solutions", path: "/programs" },
    { name: "Resources", path: "/industries" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <style>{`
        /* Desktop: show nav links & CTA, hide hamburger */
        .nav-desktop-links { display: flex; }
        .nav-cta-desktop   { display: block; }
        .nav-hamburger     { display: none; }

        @media (max-width: 1023px) {
          .nav-desktop-links { display: none; }
          .nav-cta-desktop   { display: none; }
          .nav-hamburger     { display: flex; }
        }
      `}</style>

      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 50,
          backgroundColor: "#ffffff",
          boxShadow: scrolled
            ? "0 2px 16px rgba(26,43,94,0.10)"
            : "0 1px 4px rgba(26,43,94,0.06)",
          transition: "box-shadow 0.3s ease",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 72,
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none", flexShrink: 0 }}>
            <Image
              src="/logo.png"
              alt="N-DOBLE Logo"
              width={170}
              height={44}
              style={{ objectFit: "contain", height: 40, width: "auto" }}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="nav-desktop-links"
            style={{ alignItems: "center", gap: 2 }}
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  style={{
                    padding: "8px 14px",
                    fontSize: 14,
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? "#c9a227" : "#1a2b5e",
                    textDecoration: "none",
                    borderRadius: 4,
                    transition: "color 0.2s ease",
                    position: "relative",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) (e.currentTarget as HTMLElement).style.color = "#c9a227";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) (e.currentTarget as HTMLElement).style.color = "#1a2b5e";
                  }}
                >
                  {link.name}
                  {isActive && (
                    <span
                      style={{
                        position: "absolute",
                        bottom: 2,
                        left: 14,
                        right: 14,
                        height: 2,
                        background: "#c9a227",
                        borderRadius: 2,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button — Desktop */}
          <div className="nav-cta-desktop">
            <Link
              href="/contact"
              style={{
                display: "inline-block",
                padding: "10px 22px",
                background: "#c9a227",
                color: "#ffffff",
                fontWeight: 700,
                fontSize: 14,
                borderRadius: 4,
                textDecoration: "none",
                transition: "all 0.3s ease",
                whiteSpace: "nowrap",
                minHeight: 44,
                lineHeight: "24px",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#e8b830";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#c9a227";
              }}
            >
              Let&apos;s Connect
            </Link>
          </div>

          {/* Hamburger — Mobile */}
          <button
            className="nav-hamburger"
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#1a2b5e",
              padding: 8,
              alignItems: "center",
              justifyContent: "center",
              minWidth: 44,
              minHeight: 44,
              borderRadius: 4,
            }}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer — full screen overlay */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 40,
            backgroundColor: "#ffffff",
            paddingTop: 80,
            display: "flex",
            flexDirection: "column",
            overflowY: "auto",
          }}
        >
          <nav
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "8px 24px",
              flex: 1,
            }}
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  style={{
                    padding: "16px 4px",
                    fontSize: 17,
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? "#c9a227" : "#1a2b5e",
                    textDecoration: "none",
                    borderBottom: "1px solid #e8edf5",
                    display: "flex",
                    alignItems: "center",
                    minHeight: 56,
                  }}
                >
                  {link.name}
                  {isActive && (
                    <span
                      style={{
                        marginLeft: "auto",
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: "#c9a227",
                        flexShrink: 0,
                      }}
                    />
                  )}
                </Link>
              );
            })}

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              style={{
                marginTop: 24,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "16px",
                background: "#c9a227",
                color: "#ffffff",
                fontWeight: 700,
                fontSize: 16,
                borderRadius: 6,
                textDecoration: "none",
                minHeight: 52,
              }}
            >
              Let&apos;s Connect
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
