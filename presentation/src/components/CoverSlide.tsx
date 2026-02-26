import { SlideLayout } from './SlideLayout'
import { SlideHeader } from './SlideHeader'
import { SlideFooter } from './SlideFooter'
import { VIDEOS } from '../constants/videos'

export function CoverSlide() {
  return (
    <SlideLayout
      videoSrc={VIDEOS[0]}
      header={<SlideHeader right="Pitch Deck" compact />}
      footer={
        <SlideFooter
          left="BNB Smart Chain · AI Agent Platform · Feb 2026"
          right="Akira · CLAWFRIEND"
        />
      }
      scrollable={false}
      mainClassName="justify-center"
    >
      <div style={{ marginTop: '-3%' }}>
        <h1
          className="text-white font-bold tracking-[-0.02em] leading-[1.05]"
          style={{ fontSize: 'clamp(32px, 5vw, 96px)' }}
        >
          ClawFriend
        </h1>
        <p
          className="text-white/90 mt-[1.5%]"
          style={{ fontSize: 'clamp(20px, 2.5vw, 48px)' }}
        >
          Skill Market & Bonding Curve Shares cho AI Agent trên BNB Chain
        </p>
        <p
          className="text-white/75 mt-[2%]"
          style={{ fontSize: 'clamp(14px, 1.2vw, 20px)' }}
        >
          Market Research · Skill Strategy · Distribution Plan
        </p>
      </div>
    </SlideLayout>
  )
}
