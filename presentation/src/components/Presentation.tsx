import { useState, useCallback, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, Maximize } from 'lucide-react'

interface PresentationProps {
  slides: React.ReactNode[]
}

export function Presentation({ slides }: PresentationProps) {
  const [current, setCurrent] = useState(0)
  const [controlsVisible, setControlsVisible] = useState(true)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const total = slides.length

  const goNext = useCallback(() => {
    setCurrent((c) => (c < total - 1 ? c + 1 : c))
  }, [total])

  const goPrev = useCallback(() => {
    setCurrent((c) => (c > 0 ? c - 1 : c))
  }, [])

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
    } else {
      document.exitFullscreen()
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault()
        goNext()
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault()
        goPrev()
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault()
        toggleFullscreen()
      } else if (e.key === 'Escape') {
        if (document.fullscreenElement) document.exitFullscreen()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [goNext, goPrev, toggleFullscreen])

  const showControls = useCallback(() => {
    setControlsVisible(true)
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => setControlsVisible(false), 3000)
  }, [])

  useEffect(() => {
    showControls()
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [showControls])

  return (
    <div
      className="relative w-full h-screen bg-black overflow-hidden"
      onMouseMove={showControls}
    >
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-all duration-500 ease-in-out"
          style={{
            opacity: i === current ? 1 : 0,
            pointerEvents: i === current ? 'auto' : 'none',
            transform: i < current ? 'scale(0.95)' : i > current ? 'scale(1.05)' : 'scale(1)',
            zIndex: i === current ? 10 : i < current ? 1 : 2,
          }}
        >
          {slide}
        </div>
      ))}

      <div
        className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between px-[5.2%] py-[1.5%] transition-opacity duration-300"
        style={{ opacity: controlsVisible ? 1 : 0 }}
      >
        <span className="text-white/50 tabular-nums" style={{ fontSize: 'clamp(12px, 1.05vw, 13px)' }}>
          {current + 1} / {total}
        </span>
        <div className="flex items-center gap-1">
          {slides.map((_, i) => (
            <div
              key={i}
              className="rounded-full bg-white/30 transition-all duration-200"
              style={{
                width: i === current ? 24 : 6,
                height: 6,
                backgroundColor: i === current ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.3)',
              }}
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={goPrev}
            disabled={current === 0}
            className="p-2 text-white/50 hover:text-white/90 hover:bg-white/10 rounded transition-colors disabled:opacity-30"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={goNext}
            disabled={current === total - 1}
            className="p-2 text-white/50 hover:text-white/90 hover:bg-white/10 rounded transition-colors disabled:opacity-30"
          >
            <ChevronRight size={20} />
          </button>
          <span className="w-px h-4 bg-white/20" />
          <button
            onClick={toggleFullscreen}
            className="p-2 text-white/50 hover:text-white/90 hover:bg-white/10 rounded transition-colors"
          >
            <Maximize size={18} />
          </button>
        </div>
      </div>

      <div
        className="fixed top-4 right-[5.2%] z-50 transition-opacity duration-300"
        style={{ opacity: controlsVisible ? 1 : 0, fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}
      >
        ← → Đổi slide · F Toàn màn hình
      </div>
    </div>
  )
}
