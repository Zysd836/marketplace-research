import { SlideLayout } from './SlideLayout'
import { SlideHeader } from './SlideHeader'
import { SlideFooter } from './SlideFooter'
import { VIDEOS } from '../constants/videos'

interface ContentSlideLayoutProps {
  videoIndex: number
  pageLabel: string
  title?: React.ReactNode
  footer?: React.ReactNode
  children: React.ReactNode
  scrollable?: boolean
}

export function ContentSlideLayout({
  videoIndex,
  pageLabel,
  title,
  footer,
  children,
  scrollable = true,
}: ContentSlideLayoutProps) {
  const videoSrc = VIDEOS[videoIndex % VIDEOS.length]
  return (
    <SlideLayout
      videoSrc={videoSrc}
      header={
        <SlideHeader center="Pitch Deck" right={pageLabel} />
      }
      footer={footer != null ? <SlideFooter single={footer} /> : undefined}
      scrollable={scrollable}
    >
      {title != null && (
        <h2
          className="text-white font-bold tracking-[-0.02em] leading-tight shrink-0 mb-[2%]"
          style={{ fontSize: 'clamp(18px, 2vw, 36px)' }}
        >
          {title}
        </h2>
      )}
      <div className="text-white/90 leading-[1.5] space-y-1">{children}</div>
    </SlideLayout>
  )
}
