"use client"

import { SOCIAL } from "@/lib/constants"

const FOOTER_LINKS = [
  { label: "GitHub", href: SOCIAL.github },
  { label: "LinkedIn", href: SOCIAL.linkedin },
  { label: "Email", href: `mailto:${SOCIAL.email}` },
]

export default function FooterOptionB() {
  return (
    <footer
      style={{
        width: "100%",
        borderTop: "2px solid var(--color-border-strong)",
        padding: "56px 40px 48px",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "32px",
        }}
      >
        {/* Name — large signature hero */}
        <div style={{ textAlign: "center" }}>
          <span
            style={{
              fontFamily: "var(--font-signature)",
              fontSize: "clamp(52px, 10vw, 80px)",
              color: "#1A1613",
              lineHeight: 1,
              display: "block",
            }}
          >
            Saurav G.C.
          </span>
        </div>

        {/* Credit */}
        <div style={{ textAlign: "center", marginTop: "-12px" }}>
          <span
            style={{
              fontFamily: "var(--font-handwritten)",
              fontSize: "17px",
              color: "var(--color-text-muted)",
            }}
          >
            designed &amp; built with ☕️ and Frank Ocean loops
          </span>
        </div>

        {/* Repeating dash divider */}
        <div
          style={{
            textAlign: "center",
            color: "var(--color-border-strong)",
            fontSize: "14px",
            letterSpacing: "8px",
            fontFamily: "var(--font-mono)",
            lineHeight: 1,
            opacity: 0.5,
            userSelect: "none",
          }}
        >
          ─ ─ ─ ─ ─ ─ ─ ─ ─ ─
        </div>

        {/* Links */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "28px",
            flexWrap: "wrap",
          }}
        >
          {FOOTER_LINKS.map((link) => (
            <FooterLink key={link.label} href={link.href} label={link.label} />
          ))}
        </div>

        {/* Lyric with larger wave */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 300,
              fontStyle: "italic",
              fontSize: "clamp(16px, 2.5vw, 20px)",
              color: "var(--color-text-secondary)",
              textAlign: "center",
              margin: 0,
            }}
          >
            <span style={{ fontSize: "24px", lineHeight: 1, marginRight: "4px", display: "inline-block" }}>🌊</span>
            &ldquo;Too weird to live, too rare to die.&rdquo;
          </p>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "var(--color-text-muted)",
              textAlign: "center",
              margin: 0,
              opacity: 0.6,
            }}
          >
            — Frank Ocean
          </p>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, label }: { href: string; label: string }) {
  const isEmail = href.startsWith("mailto:")
  return (
    <a
      href={href}
      target={isEmail ? undefined : "_blank"}
      rel={isEmail ? undefined : "noopener noreferrer"}
      data-cursor="link"
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "13px",
        color: "var(--color-text-secondary)",
        textDecoration: "none",
        cursor: "none",
        transition: "color 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "var(--color-accent2)"
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "var(--color-text-secondary)"
      }}
    >
      {label}
    </a>
  )
}
