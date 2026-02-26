import { VideoBackground } from './VideoBackground'
import { SlideHeader } from './SlideHeader'
import { SlideFooter } from './SlideFooter'

interface SlideLayoutProps {
  /** Video source URL (or use videoIndex with getVideoSrc elsewhere) */
  videoSrc: string
  /** Optional header; use SlideHeader for consistent look */
  header?: React.ReactNode
  /** Optional footer; use SlideFooter for consistent look */
  footer?: React.ReactNode
  /** Main content (title + body) */
  children: React.ReactNode
  /** Extra class for main area */
  mainClassName?: string
  /** Allow main to scroll when content overflows */
  scrollable?: boolean
}

export function SlideLayout({
  videoSrc,
  header,
  footer,
  children,
  mainClassName = '',
  scrollable = true,
}: SlideLayoutProps) {
  return (
    <div className="relative w-full h-full">
      <VideoBackground src={videoSrc} />
      <div className="relative z-10 flex flex-col h-full px-[5.2%] pt-[4%] pb-[5%]">
        {header}
        <main
          className={`flex-1 min-h-0 flex flex-col w-full max-w-[95vw] sm:max-w-[1480px] px-[2%] sm:px-[4%] mx-auto pb-[3%] ${scrollable ? 'overflow-auto' : ''} ${mainClassName}`}
          style={{ fontSize: 'clamp(11px, 1vw, 14px)' }}
        >
          {children}
        </main>
        {footer}
      </div>
    </div>
  )
}

export { SlideHeader, SlideFooter }
