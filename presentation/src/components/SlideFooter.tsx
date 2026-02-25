const textStyle = { fontSize: 'clamp(12px, 1.05vw, 20px)' }

interface SlideFooterProps {
  left?: React.ReactNode
  right?: React.ReactNode
  /** Single right-aligned line (content slides) */
  single?: React.ReactNode
}

export function SlideFooter({ left, right, single }: SlideFooterProps) {
  if (single != null) {
    return (
      <footer className="shrink-0 px-[4%] pt-[2%] pb-[3%] text-right text-white/60" style={textStyle}>
        {single}
      </footer>
    )
  }
  if (left == null && right == null) return null
  return (
    <footer className="flex items-center justify-between shrink-0 px-[4%] pt-[2%] pb-[3%] text-white/60" style={textStyle}>
      {left != null ? <span>{left}</span> : <span />}
      {right != null ? <span>{right}</span> : <span />}
    </footer>
  )
}
