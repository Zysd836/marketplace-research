import { Logo } from './Logo'

const textStyle = { fontSize: 'clamp(12px, 1.05vw, 20px)' }

interface SlideHeaderProps {
  /** Left slot; default Logo */
  left?: React.ReactNode
  /** Center slot (e.g. "Pitch Deck") */
  center?: React.ReactNode
  /** Right slot (e.g. page "Trang 002") */
  right?: React.ReactNode
  /** Shorter padding for cover */
  compact?: boolean
}

export function SlideHeader({
  left,
  center,
  right,
  compact = false,
}: SlideHeaderProps) {
  return (
    <header
      className={`flex items-center justify-between shrink-0 px-[4%] ${compact ? 'pt-[3%]' : 'pt-[3%] pb-[2%]'}`}
    >
      {left ?? <Logo />}
      {center != null && (
        <span className="text-white/80" style={textStyle}>
          {center}
        </span>
      )}
      {right != null && (
        <span className="text-white/80 tabular-nums" style={textStyle}>
          {right}
        </span>
      )}
    </header>
  )
}
