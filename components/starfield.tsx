"use client"

import { useEffect, useRef } from "react"

type Star = { x: number; y: number; z: number; r: number }

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let raf = 0
    let stars: Star[] = []
    let w = 0
    let h = 0
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    const resize = () => {
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.floor((w * h) / 9000)
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        z: Math.random(),
        r: Math.random() * 1.4 + 0.2,
      }))
    }

    resize()
    window.addEventListener("resize", resize)

    let t = 0
    const draw = () => {
      t += 0.006
      ctx.clearRect(0, 0, w, h)
      for (const s of stars) {
        s.y += (0.05 + s.z * 0.2)
        if (s.y > h) s.y = 0
        const twinkle = 0.4 + 0.6 * Math.abs(Math.sin(t * (0.5 + s.z) + s.x))
        const alpha = (0.15 + s.z * 0.5) * twinkle
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(120, 220, 235, ${alpha})`
        ctx.fill()
      }
      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  )
}
