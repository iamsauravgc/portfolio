"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import BentoCard from "@/components/ui/BentoCard"
import Marquee from "@/components/ui/Marquee"
import Clock from "@/components/ui/Clock"
import { staggerContainer } from "@/lib/animation"

export default function WhoAmI() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section-about"
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 60px",
        position: "relative",
      }}
    >
      <div style={{ width: "100%", maxWidth: "1000px" }}>
        <p style={{
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          color: "var(--color-accent)",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          marginBottom: "28px",
        }}>
          whoami
        </p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
            alignItems: "start",
          }}
        >
          {/* Big bio card */}
          <BentoCard colSpan={2}>
            <p style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "clamp(24px, 3vw, 36px)",
              color: "var(--color-text-primary)",
              letterSpacing: "-0.01em",
              lineHeight: 1.15,
              margin: 0,
            }}>
              CS student from Kathmandu.
            </p>
            <p style={{
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              fontSize: "clamp(20px, 2.5vw, 30px)",
              color: "var(--color-accent)",
              letterSpacing: "-0.01em",
              lineHeight: 1.15,
              margin: "8px 0 0",
            }}>
              I build things and make them look good.
            </p>
          </BentoCard>

          {/* Currently listening */}
          <BentoCard colSpan={1}>
            <p style={{
              fontFamily: "var(--font-mono)",
              fontSize: "9px",
              color: "var(--color-text-muted)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}>
              <span style={{ color: "var(--color-accent)" }}>●</span> listenin&apos;
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <div style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                overflow: "hidden",
                flexShrink: 0,
                position: "relative",
              }}>
                <Image
                  src="/images/vinyl.png"
                  alt="Vinyl"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="48px"
                />
              </div>
              <div>
                <p style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 500,
                  fontSize: "14px",
                  color: "var(--color-text-primary)",
                  margin: 0,
                  lineHeight: 1.3,
                }}>
                  Frank Ocean
                </p>
                <p style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 400,
                  fontSize: "13px",
                  color: "var(--color-text-muted)",
                  margin: 0,
                  fontStyle: "italic",
                }}>
                  Blonde
                </p>
              </div>
            </div>
          </BentoCard>

          {/* Daily driver */}
          <BentoCard colSpan={1}>
            <p style={{
              fontFamily: "var(--font-mono)",
              fontSize: "9px",
              color: "var(--color-text-muted)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}>
              daily driver
            </p>
            <div style={{
              position: "relative",
              width: "100%",
              height: "80px",
            }}>
              <Image
                src="/images/nothing.png"
                alt="Nothing Phone 3a"
                fill
                style={{ objectFit: "contain", objectPosition: "left center" }}
                sizes="200px"
              />
            </div>
          </BentoCard>

          {/* Location */}
          <BentoCard colSpan={1}>
            <p style={{
              fontFamily: "var(--font-mono)",
              fontSize: "9px",
              color: "var(--color-text-muted)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}>
              location
            </p>
            <p style={{
              fontFamily: "var(--font-body)",
              fontWeight: 500,
              fontSize: "16px",
              color: "var(--color-text-primary)",
              margin: 0,
              lineHeight: 1.4,
            }}>
              Kathmandu, Nepal
            </p>
            <p style={{
              fontFamily: "var(--font-mono)",
              fontWeight: 400,
              fontSize: "12px",
              color: "var(--color-text-muted)",
              margin: "4px 0 0",
            }}>
              <Clock />
            </p>
          </BentoCard>

          {/* Fun fact */}
          <BentoCard colSpan={1}>
            <p style={{
              fontFamily: "var(--font-mono)",
              fontSize: "9px",
              color: "var(--color-text-muted)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}>
              fun fact
            </p>
            <p style={{
              fontFamily: "var(--font-body)",
              fontWeight: 400,
              fontSize: "14px",
              color: "var(--color-text-secondary)",
              margin: 0,
              lineHeight: 1.5,
            }}>
              Ask me about the best momo spot in KTM.
            </p>
          </BentoCard>

          {/* Tech stack — full width */}
          <BentoCard colSpan={3} style={{ marginTop: "8px" }}>
            <p style={{
              fontFamily: "var(--font-mono)",
              fontSize: "9px",
              color: "var(--color-text-muted)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}>
              tools I trust
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <Marquee speed={25} direction="left">
                {LANGUAGES.map((t) => (
                  <TechItem key={t.name} tech={t} />
                ))}
              </Marquee>
              <Marquee speed={30} direction="right">
                {TOOLS.map((t) => (
                  <TechItem key={t.name} tech={t} />
                ))}
              </Marquee>
            </div>
          </BentoCard>
        </motion.div>
      </div>
    </section>
  )
}

/* ── Tech data ── */

interface Tech {
  name: string
  icon: React.ReactNode
}

const LANGUAGES: Tech[] = [
  { name: "TypeScript", icon: <TSSvg /> },
  { name: "Python", icon: <PythonSvg /> },
  { name: "JavaScript", icon: <JSSvg /> },
  { name: "Rust", icon: <RustSvg /> },
  { name: "SQL", icon: <SQLSvg /> },
]

const TOOLS: Tech[] = [
  { name: "Next.js", icon: <NextSvg /> },
  { name: "React", icon: <ReactSvg /> },
  { name: "Tailwind", icon: <TailwindSvg /> },
  { name: "FastAPI", icon: <FastAPISvg /> },
  { name: "Docker", icon: <DockerSvg /> },
  { name: "Figma", icon: <FigmaSvg /> },
  { name: "PostgreSQL", icon: <PostgresSvg /> },
  { name: "Git", icon: <GitSvg /> },
]

function TechItem({ tech }: { tech: Tech }) {
  return (
    <div
      title={tech.name}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        padding: "8px 16px",
        borderRadius: "12px",
        border: "1px solid var(--color-border)",
        background: "var(--color-bg)",
        cursor: "default",
        userSelect: "none",
        transition: "all 0.2s ease",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget
        el.style.borderColor = "var(--color-accent)"
        el.style.background = "rgba(181, 101, 74, 0.06)"
        el.style.transform = "translateY(-2px)"
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget
        el.style.borderColor = "var(--color-border)"
        el.style.background = "var(--color-bg)"
        el.style.transform = "translateY(0)"
      }}
    >
      <span style={{ width: "24px", height: "24px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        {tech.icon}
      </span>
      <span style={{
        fontFamily: "var(--font-body)",
        fontWeight: 400,
        fontSize: "13px",
        color: "var(--color-text-secondary)",
        whiteSpace: "nowrap",
      }}>
        {tech.name}
      </span>
    </div>
  )
}

/* ── SVG Icons ── */

function TSSvg() {
  return (
    <svg viewBox="0 0 24 24" fill="#3178C6" width="20" height="20">
      <rect width="24" height="24" rx="2" />
      <text x="3" y="18" fontFamily="Arial" fontWeight="bold" fontSize="15" fill="white">TS</text>
    </svg>
  )
}

function PythonSvg() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20">
      <path d="M11.9 0C6.4 0 6.7 2.3 6.7 2.3l0 2.4h5.3v0.7H4.6S0 5 0 10.5s1.8 4.7 1.8 4.7h3.3v-2.3s-0.1-2.3 2.3-2.3h5.4s2.2 0 2.2-2.1V2.9S16.8 0 11.9 0zM10.1 2.1c0.5 0 0.9 0.4 0.9 0.9s-0.4 0.9-0.9 0.9-0.9-0.4-0.9-0.9 0.4-0.9 0.9-0.9z" fill="#3776AB"/>
      <path d="M12.1 24c5.5 0 5.2-2.3 5.2-2.3v-2.4H12v-0.7h7.5s4.5 0.3 4.5-5.2-1.8-4.7-1.8-4.7h-3.3v2.3s0.1 2.3-2.3 2.3H11s-2.2 0-2.2 2.1v3.6s-0.3 4.7 4.6 4.7h-0.3zM13.9 21.9c-0.5 0-0.9-0.4-0.9-0.9s0.4-0.9 0.9-0.9 0.9 0.4 0.9 0.9-0.4 0.9-0.9 0.9z" fill="#FFD43B"/>
    </svg>
  )
}

function JSSvg() {
  return (
    <svg viewBox="0 0 24 24" fill="#F7DF1E" width="20" height="20">
      <rect width="24" height="24" rx="2" />
      <text x="2" y="18" fontFamily="Arial" fontWeight="bold" fontSize="15" fill="black">JS</text>
    </svg>
  )
}

function RustSvg() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20">
      <circle cx="12" cy="12" r="11" fill="#DEA584" stroke="#4C2C1A" strokeWidth="1" />
      <circle cx="12" cy="12" r="6" fill="none" stroke="#4C2C1A" strokeWidth="1" />
      <line x1="12" y1="1" x2="12" y2="5" stroke="#4C2C1A" strokeWidth="1.5" />
      <line x1="12" y1="19" x2="12" y2="23" stroke="#4C2C1A" strokeWidth="1.5" />
      <line x1="1" y1="12" x2="5" y2="12" stroke="#4C2C1A" strokeWidth="1.5" />
      <line x1="19" y1="12" x2="23" y2="12" stroke="#4C2C1A" strokeWidth="1.5" />
      <text x="8" y="15" fontFamily="Arial" fontWeight="bold" fontSize="9" fill="#4C2C1A">R</text>
    </svg>
  )
}

function SQLSvg() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20">
      <ellipse cx="12" cy="5" rx="9" ry="3" fill="none" stroke="#336791" strokeWidth="1.5" />
      <path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5" fill="none" stroke="#336791" strokeWidth="1.5" />
      <line x1="3" y1="12" x2="21" y2="12" stroke="#336791" strokeWidth="1.5" />
      <line x1="3" y1="17" x2="21" y2="17" stroke="#336791" strokeWidth="1.5" />
    </svg>
  )
}

function NextSvg() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20">
      <circle cx="12" cy="12" r="11" fill="#000" />
      <text x="4" y="16" fontFamily="Arial" fontWeight="bold" fontSize="8" fill="white">N</text>
      <path d="M17 6l-5 12" stroke="white" strokeWidth="2" fill="none" />
    </svg>
  )
}

function ReactSvg() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20">
      <ellipse cx="12" cy="12" rx="6" ry="2.5" fill="none" stroke="#61DAFB" strokeWidth="1.5" />
      <ellipse cx="12" cy="12" rx="6" ry="2.5" fill="none" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="6" ry="2.5" fill="none" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(-60 12 12)" />
      <circle cx="12" cy="12" r="1.5" fill="#61DAFB" />
    </svg>
  )
}

function TailwindSvg() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20">
      <path d="M12 5c-3.5 0-5.7 1.8-6.5 5.3 1.3-1.8 2.8-2.4 4.5-2 1 .2 1.7.8 2.5 1.6 1.2 1.2 2.6 2.6 5.7 2.6 3.5 0 5.7-1.8 6.5-5.3-1.3 1.8-2.8 2.4-4.5 2-1-.2-1.7-.8-2.5-1.6C17.4 6.2 16 4.8 12.9 4.8 12.6 4.5 12.3 5 12 5zM5.5 12c-3.5 0-5.7 1.8-6.5 5.3 1.3-1.8 2.8-2.4 4.5-2 1 .2 1.7.8 2.5 1.6 1.2 1.2 2.6 2.6 5.7 2.6 3.5 0 5.7-1.8 6.5-5.3-1.3 1.8-2.8 2.4-4.5 2-1-.2-1.7-.8-2.5-1.6-1.2-1.2-2.6-2.6-5.7-2.6z" fill="#06B6D4" />
    </svg>
  )
}

function FastAPISvg() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20">
      <circle cx="12" cy="12" r="11" fill="#009688" />
      <polygon points="13.5,3 7,13 11.5,13 10.5,21 18,11 13,11" fill="white" />
    </svg>
  )
}

function DockerSvg() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20">
      <rect x="2" y="10" width="3" height="3" rx="0.5" fill="#2496ED" />
      <rect x="6" y="10" width="3" height="3" rx="0.5" fill="#2496ED" />
      <rect x="10" y="10" width="3" height="3" rx="0.5" fill="#2496ED" />
      <rect x="6" y="6" width="3" height="3" rx="0.5" fill="#2496ED" />
      <rect x="10" y="6" width="3" height="3" rx="0.5" fill="#2496ED" />
      <rect x="14" y="10" width="3" height="3" rx="0.5" fill="#2496ED" />
      <path d="M2 13.5c0 3 1.5 5.5 5.5 5.5 4 0 5.5-2 5.5-3.5 0-1-1-1-1-1H3s-1 0-1-1z" fill="#2496ED" />
      <path d="M19 10c-1-2-3-3-4-3 0 0 0 2 1 3 0 0 1 1 3 1 1 0 0-1 0-1z" fill="#2496ED" />
    </svg>
  )
}

function FigmaSvg() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20">
      <ellipse cx="12" cy="6" rx="4" ry="4" fill="#F24E1E" />
      <rect x="8" y="6" width="4" height="4" fill="#FF7262" />
      <ellipse cx="8" cy="12" rx="4" ry="4" fill="#A259FF" />
      <rect x="8" y="12" width="4" height="4" fill="#FF7262" />
      <ellipse cx="12" cy="18" rx="4" ry="4" fill="#0ACF83" />
      <rect x="12" y="6" width="4" height="8" fill="#F24E1E" />
    </svg>
  )
}

function PostgresSvg() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20">
      <path d="M12 2C7.2 2 4 4.5 4 8c0 2 1.2 3.8 3 5 0 3 1 5 2.5 6.5 0.5 0.5 1 0.5 1.5 0 0.4-0.5 1-1.5 1.3-2.7l0.7 0.3c1 0.4 2.5 0.5 3.5 0 1.5-0.8 1-2.5 0.5-3.5-0.3-0.6-0.8-1.2-1-2-0.3-1.3 0.5-2.5 1.5-3.5S20 7 20 6c0-1-0.8-2.5-2.8-3.5C15.5 1.5 13.8 2 12 2z" fill="#336791" />
      <ellipse cx="10.5" cy="7.5" rx="1" ry="1.5" fill="#E2E8F0" />
      <ellipse cx="14" cy="7.5" rx="1" ry="1.5" fill="#E2E8F0" />
      <path d="M9 9c0.5 0.5 1 1 1.5 1.5" stroke="#336791" strokeWidth="0.8" fill="none" />
    </svg>
  )
}

function GitSvg() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20">
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" fill="#F05032" />
      <path d="M10 8l4 4-4 4" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="10" cy="8" r="1" fill="#F05032" stroke="white" strokeWidth="1" />
      <circle cx="10" cy="16" r="1" fill="#F05032" stroke="white" strokeWidth="1" />
      <circle cx="14" cy="12" r="1" fill="#F05032" stroke="white" strokeWidth="1" />
    </svg>
  )
}
