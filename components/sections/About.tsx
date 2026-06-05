"use client"

import { useRef, useState, useCallback, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { SPRING_SMOOTH } from "@/lib/animation"

const COMMANDS: Record<string, string> = {
  whoami: `saurav g.c.
→ cs student. builder. kathmandu-based.
→ i turn ideas into things you can click.
→ always in "let me try this" mode.`,

  "ls interests/": `music/        ai-ml/        photography/
open-source/  design/       breaking-bad/`,

  "cat stack.txt": `languages  → typescript, python, java
frontend   → next.js, react, tailwind, framer-motion
backend    → node.js, fastapi, postgresql
tools      → git, docker, vercel, figma`,

  help: `available commands:
  whoami          → who is this guy
  ls interests/   → things i care about
  cat stack.txt   → tech i work with
  help            → you're looking at it
  clear           → clean slate`,
}

const AUTOCOMPLETE_KEYS = Object.keys(COMMANDS)

interface HistoryItem {
  cmd: string
  output: string
  displayed: string
  done: boolean
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const [history, setHistory] = useState<HistoryItem[]>([
    { cmd: "", output: 'type "help" to see available commands.', displayed: 'type "help" to see available commands.', done: true },
  ])
  const [input, setInput] = useState("")
  const [cmdHistory, setCmdHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [history])

  const typeOutput = useCallback((output: string, targetIndex: number) => {
    setIsTyping(true)
    let i = 0
    const interval = setInterval(() => {
      i++
      setHistory(prev => {
        const next = [...prev]
        if (next[targetIndex]) {
          next[targetIndex] = {
            ...next[targetIndex],
            displayed: output.slice(0, i),
            done: i >= output.length,
          }
        }
        return next
      })
      if (i >= output.length) {
        clearInterval(interval)
        setIsTyping(false)
      }
    }, 12)
  }, [])

  const handleSubmit = useCallback(() => {
    if (!input.trim() || isTyping) return
    const cmd = input.trim().toLowerCase()
    setInput("")
    setCmdHistory(prev => [cmd, ...prev])
    setHistoryIndex(-1)

    if (cmd === "clear") {
      setHistory([])
      return
    }

    const output = COMMANDS[cmd] ?? `command not found: ${cmd}\ntype "help" for available commands.`
    const newItem: HistoryItem = { cmd, output, displayed: "", done: false }

    setHistory(prev => {
      const next = [...prev, newItem]
      const newIndex = next.length - 1
      setTimeout(() => typeOutput(output, newIndex), 30)
      return next
    })
  }, [input, isTyping, typeOutput])

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter") {
      handleSubmit()
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      const next = Math.min(historyIndex + 1, cmdHistory.length - 1)
      setHistoryIndex(next)
      setInput(cmdHistory[next] ?? "")
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      const next = Math.max(historyIndex - 1, -1)
      setHistoryIndex(next)
      setInput(next === -1 ? "" : cmdHistory[next])
    } else if (e.key === "Tab") {
      e.preventDefault()
      const match = AUTOCOMPLETE_KEYS.find(k => k.startsWith(input))
      if (match) setInput(match)
    }
  }

  // last item done = show new prompt
  const lastDone = history.length === 0 || history[history.length - 1].done

  return (
    <section
      ref={sectionRef}
      id="about"
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 60px",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ delay: 0.1, ...SPRING_SMOOTH }}
        style={{ width: "100%", maxWidth: "820px" }}
      >
        <p style={{
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          color: "var(--color-text-muted)",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          marginBottom: "20px",
        }}>
          01 / about
        </p>

        {/* Terminal */}
        <div
          onClick={() => inputRef.current?.focus()}
          style={{
            backgroundColor: "#1a1814",
            borderRadius: "10px",
            overflow: "hidden",
            fontFamily: "var(--font-mono)",
            fontSize: "13px",
            cursor: "text",
            boxShadow: "0 32px 64px rgba(26,24,20,0.22)",
            border: "1px solid rgba(255,255,255,0.06)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Title bar */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            padding: "14px 18px",
            borderBottom: "1px solid rgba(255,255,255,0.05)",
            backgroundColor: "rgba(0,0,0,0.25)",
            flexShrink: 0,
          }}>
            <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#FF5F57" }} />
            <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#FFBD2E" }} />
            <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#28C840" }} />
            <span style={{
              marginLeft: "auto",
              fontSize: "12px",
              color: "rgba(255,255,255,0.28)",
              letterSpacing: "0.04em",
            }}>
              saurav@ktm — zsh
            </span>
          </div>

          {/* Scrollable content */}
          <div style={{
            padding: "20px",
            overflowY: "auto",
            maxHeight: "480px",
            minHeight: "440px",
            lineHeight: 1.75,
          }}>
            {/* History */}
            {history.map((item, i) => (
              <div key={i} style={{ marginBottom: "6px" }}>
                {/* Command line */}
                {item.cmd && (
                  <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "4px" }}>
                    <span style={{ color: "#28C840", fontSize: "12px", flexShrink: 0 }}>→</span>
                    <span style={{ color: "#3B8BEB" }}>saurav@ktm</span>
                    <span style={{ color: "rgba(255,255,255,0.3)" }}>~</span>
                    <span style={{ color: "rgba(245,240,232,0.9)" }}>{item.cmd}</span>
                  </div>
                )}
                {/* Output */}
                {item.displayed && (
                  <pre style={{
                    margin: "0 0 10px",
                    paddingLeft: item.cmd ? "20px" : "0",
                    whiteSpace: "pre-wrap",
                    color: "rgba(245,240,232,0.65)",
                    fontSize: "13px",
                    fontFamily: "var(--font-mono)",
                  }}>
                    {item.displayed}
                    {!item.done && (
                      <span style={{
                        display: "inline-block",
                        width: "2px",
                        height: "14px",
                        backgroundColor: "#3B8BEB",
                        marginLeft: "2px",
                        verticalAlign: "middle",
                        animation: "blink 1s step-end infinite",
                      }} />
                    )}
                  </pre>
                )}
              </div>
            ))}

            {/* Input prompt — only shown when last item is done typing */}
            {lastDone && (
              <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                <span style={{ color: "#28C840", fontSize: "12px", flexShrink: 0 }}>→</span>
                <span style={{ color: "#3B8BEB" }}>saurav@ktm</span>
                <span style={{ color: "rgba(255,255,255,0.3)" }}>~</span>
                <div style={{ flex: 1, position: "relative" }}>
                  <input
                    ref={inputRef}
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    autoFocus
                    spellCheck={false}
                    autoComplete="off"
                    style={{
                      width: "100%",
                      background: "transparent",
                      border: "none",
                      outline: "none",
                      color: "rgba(245,240,232,0.92)",
                      fontFamily: "var(--font-mono)",
                      fontSize: "13px",
                      caretColor: "#3B8BEB",
                    }}
                  />
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>
        </div>

        <p style={{
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          color: "var(--color-text-muted)",
          marginTop: "12px",
          letterSpacing: "0.06em",
        }}>
          try: whoami · ls interests/ · cat stack.txt · help
        </p>
      </motion.div>
    </section>
  )
}