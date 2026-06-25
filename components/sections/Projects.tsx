"use client"

import { HoverExpand, type HoverExpandItem } from "@/components/unlumen-ui/hover-expand"

const projects: (HoverExpandItem & { tags: string[]; link: string })[] = [
  {
    label: "Himalayan Hawala",
    sublabel: "ML · Forex",
    description: "Forex rate prediction for remittance corridors",
    image: "/images/projects/himalayan-hawala-1.png",
    tags: ["Python", "FastAPI", "XGBoost"],
    link: "https://github.com/iamsauravgc",
  },
  {
    label: "Economic Dashboard",
    sublabel: "Data Viz",
    description: "Economic indicators visualization platform",
    image: "/images/projects/economic-dashboard.png",
    tags: ["React", "D3.js", "FastAPI"],
    link: "https://github.com/iamsauravgc",
  },
  {
    label: "Paper Recommender",
    sublabel: "NLP",
    description: "ArXiv papers mapped by semantic similarity",
    image: "/images/projects/paper-recommend.png",
    tags: ["Python", "NLP", "Transformers"],
    link: "https://github.com/iamsauravgc",
  },
  {
    label: "Credit Risk Predictor",
    sublabel: "MLOps",
    description: "ML pipeline with production drift monitoring",
    image: "/images/projects/credit-risk-predictor.png",
    tags: ["XGBoost", "Airflow", "Docker"],
    link: "https://github.com/iamsauravgc",
  },
]

export default function Projects() {
  const items: HoverExpandItem[] = projects.map((p) => ({
    label: p.label,
    sublabel: p.sublabel,
    description: p.description,
    image: p.image,
    imageAlt: p.label,
  }))

  return (
    <section
      id="projects"
      style={{
        padding: "clamp(80px, 12vh, 140px) clamp(24px, 6vw, 80px)",
        background: "var(--color-bg)",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "clamp(13px, 1.4vw, 16px)",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            color: "var(--color-accent)",
            fontWeight: 500,
          }}
        >
          selected projects
        </span>

        <div style={{ marginTop: "48px" }}>
          <HoverExpand
            items={items}
            className="projects-hover-expand"
            collapsedHeight={68}
            expandedHeight={380}
          />
        </div>

        <div style={{ marginTop: "40px", textAlign: "center" }}>
          <a
            href="https://github.com/iamsauravgc"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="link"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "14px",
              color: "var(--color-text-secondary)",
              textDecoration: "none",
              borderBottom: "1px solid var(--color-border-strong)",
              paddingBottom: "2px",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--color-accent)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--color-text-secondary)"
            }}
          >
            view all projects →
          </a>
        </div>
      </div>
    </section>
  )
}
