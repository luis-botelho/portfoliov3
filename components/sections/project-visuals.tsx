"use client"

import { motion } from "motion/react"

export function SonarVisual() {
  return (
    <div className="relative grid h-full w-full place-items-center overflow-hidden">
      <div className="grid-backdrop absolute inset-0 opacity-40" />
      <div className="relative aspect-square w-[70%] max-w-[16rem]">
        {[0.9, 0.66, 0.42].map((s, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-primary/25"
            style={{ inset: `${(1 - s) * 50}%` }}
          />
        ))}
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="animate-pulse-ring absolute inset-0 rounded-full border border-primary/50"
            style={{ animationDelay: `${i}s` }}
          />
        ))}
        {/* sweep */}
        <div className="absolute inset-0 overflow-hidden rounded-full">
          <div className="animate-sweep h-full w-full origin-center">
            <div className="absolute left-1/2 top-0 h-1/2 w-1/2 origin-bottom-left [background:conic-gradient(from_0deg,transparent,color-mix(in_oklch,var(--glow)_45%,transparent))]" />
          </div>
        </div>
        {/* anchor point */}
        <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_16px_var(--glow)]" />
        {[
          { top: "34%", left: "60%" },
          { top: "62%", left: "40%" },
        ].map((b, i) => (
          <span
            key={i}
            className="absolute h-2 w-2 animate-blink rounded-full bg-primary"
            style={{ top: b.top, left: b.left }}
          />
        ))}
      </div>
      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground">
        Sonar // Ancoragem estável
      </p>
    </div>
  )
}

const nodes = [
  { x: 22, y: 30 },
  { x: 50, y: 18 },
  { x: 78, y: 34 },
  { x: 32, y: 62 },
  { x: 68, y: 66 },
  { x: 50, y: 48 },
]

const links: [number, number][] = [
  [5, 0],
  [5, 1],
  [5, 2],
  [5, 3],
  [5, 4],
  [0, 1],
  [1, 2],
  [3, 4],
]

export function NeuralVisual() {
  return (
    <div className="relative grid h-full w-full place-items-center overflow-hidden">
      <div className="grid-backdrop absolute inset-0 opacity-40" />
      <svg
        viewBox="0 0 100 100"
        className="h-[80%] w-[80%] max-w-[18rem]"
        aria-hidden="true"
      >
        {links.map(([a, b], i) => (
          <motion.line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="var(--glow)"
            strokeWidth={0.4}
            strokeOpacity={0.4}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
          />
        ))}
        {nodes.map((n, i) => (
          <g key={i}>
            <motion.circle
              cx={n.x}
              cy={n.y}
              r={i === 5 ? 3.2 : 2}
              fill="var(--glow)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 + i * 0.08 }}
              style={{ transformOrigin: `${n.x}px ${n.y}px` }}
            />
            <motion.circle
              cx={n.x}
              cy={n.y}
              r={i === 5 ? 3.2 : 2}
              fill="none"
              stroke="var(--glow)"
              strokeWidth={0.5}
              animate={{ r: [i === 5 ? 3.2 : 2, i === 5 ? 6 : 4], opacity: [0.6, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.25 }}
            />
          </g>
        ))}
      </svg>
      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground">
        Rede Neural // Mentoria adaptativa
      </p>
    </div>
  )
}
