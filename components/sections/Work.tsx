"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { SPRING_SMOOTH, SPRING_SNAPPY, clipRevealVariants, EASE_OUT_EXPO } from "@/lib/animation"
import ProjectPanel from "@/components/ui/ProjectPanel"

const PROJECTS = [
  {
    index: 0,
    name: "Nepal Dashboard",
    description: "A real-time data visualization platform for Nepal's economic and social indicators. Built to make public data actually readable.",
    stack: ["Next.js", "TypeScript", "D3.js", "PostgreSQL"],
    live: "https://nepal-dashboard.vercel.app",
    github: "https://github.com/saurav856/nepal-dashboard",
    image: "/images/projects/nepal-dashboard.png",
    accent: "#3B8BEB",
  },
  {
    index: 1,
    name: "MLOps Pipeline",
    description: "End-to-end machine learning pipeline with automated training, evaluation, and deployment. CI/CD for models.",
    stack: ["Python", "FastAPI", "Docker", "PostgreSQL"],
    live: null,
    github: "https://github.com/saurav856/mlops-pipeline",
    image: "/images/projects/mlops.png",
    accent: "#E63329",
  },
  {
    index: 2,
    name: "AI News Scraper",
    description: "Intelligent news aggregator that scrapes, summarizes, and categorizes articles using LLMs. No more doomscrolling.",
    stack: ["Python", "FastAPI", "OpenAI", "Redis"],
    live: null,
    github: "https://github.com/saurav856/ai-news-scraper",
    image: "/images/projects/news-scraper.png",
    accent: "#28C840",
  },
  {
    index: 3,
    name: "TheAlgorithms",
    description: "Open source contribution — implemented and optimized sorting algorithms in Java. Merged into the main repo.",
    stack: ["Java", "Open Source", "Algorithms"],
    live: "https://the-algorithms.com",
    github: "https://github.com/TheAlgorithms/Java",
    image: "/images/projects/algorithms.png",
    accent: "#F5A623",
  },
]

function WorkHeadline() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <div
      ref={ref}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        padding: "80px 80px 40px",
        pointerEvents: "none",
      }}
    >
      <div style={{ overflow: "hidden" }}>
        <motion.h2
          initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
          animate={isInView ? { clipPath: "inset(0% 0% 0% 0%)" } : {}}
          transition={{ duration: 0.9, ease: EASE_OUT_EXPO }}
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(64px, 10vw, 120px)",
            color: "var(--color-text-primary)",
            letterSpacing: "-0.04em",
            lineHeight: 0.95,
            margin: 0,
          }}
        >
          Work.
        </motion.h2>
      </div>
    </div>
  )
}

export default function Work() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef })

  // Per-panel Y transforms — slides in from top
  const panel2Y = useTransform(scrollYProgress, [0.15, 0.4], ["100%", "0%"])
  const panel3Y = useTransform(scrollYProgress, [0.4, 0.65], ["100%", "0%"])
  const panel4Y = useTransform(scrollYProgress, [0.65, 0.9], ["100%", "0%"])

  const panelTransforms = [null, panel2Y, panel3Y, panel4Y]

  return (
    <section id="work" style={{ width: "100%" }}>
      {/* Scroll container — total height = panels × 100vh + header */}
      <div
        ref={containerRef}
        style={{ height: `${PROJECTS.length * 100 + 20}vh`, position: "relative" }}
      >
        {/* Sticky wrapper — holds all panels stacked */}
        <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden" }}>

          {PROJECTS.map((project, i) => {
            const yTransform = panelTransforms[i]
            return (
              <motion.div
                key={project.index}
                style={{
                  position: "absolute",
                  inset: 0,
                  y: yTransform ?? "0%",
                  zIndex: i + 1,
                }}
              >
                <ProjectPanel project={project} isFirst={i === 0} />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}