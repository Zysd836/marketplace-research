import { Presentation } from './components/Presentation'
import { CoverSlide } from './components/CoverSlide'
import {
  Slide1,  Slide2,  Slide3,  Slide4,  Slide5,  Slide6,  Slide7,
  Slide8,  Slide9,  Slide10, Slide11, Slide12, Slide13, Slide14,
  Slide15, Slide16, Slide17, Slide18, Slide19, Slide20, Slide21,
  Slide22, Slide23, Slide24, Slide25, Slide26, Slide27, Slide28,
} from './components/Slides'

export default function App() {
  return (
    <Presentation
      slides={[
        <CoverSlide key="cover" />,          // 00 — Title

        // ── Section 1: Competitive Landscape ──
        <Slide1  key="s1"  />,               // 01 — JOIN/LEAVE 4 competitors
        <Slide2  key="s2"  />,               // 02 — Speculation → volume collapse
        <Slide3  key="s3"  />,               // 03 — AI builder: no monetization
        <Slide4  key="s4"  />,               // 04 — Paid analytics gap
        <Slide5  key="s5"  />,               // 05 — Bài học chiến lược
        <Slide6  key="s6"  />,               // 06 — 0 incumbent segment
        <Slide7  key="s7"  />,               // 07 — What We're Bad At
        <Slide8  key="s8"  />,               // 08 — Mitigation Plan
        <Slide9  key="s9"  />,               // 09 — So What? (Sec 1)

        // ── Section 2: Skill Market Strategy ──
        <Slide10 key="s10" />,               // 10 — Demand proof trước
        <Slide11 key="s11" />,               // 11 — Skill #1: Smart Money Tracker
        <Slide12 key="s12" />,               // 12 — Skill #2: Token Safety Scanner
        <Slide13 key="s13" />,               // 13 — Skill #3: Yield Optimizer
        <Slide14 key="s14" />,               // 14 — Skill #4: Airdrop Intelligence
        <Slide15 key="s15" />,               // 15 — Skill #5: Social Alpha Scanner
        <Slide16 key="s16" />,               // 16 — Monetization Flywheel
        <Slide17 key="s17" />,               // 17 — vs ChatGPT
        <Slide18 key="s18" />,               // 18 — So What? (Sec 2)

        // ── Section 3: Distribution Plan ──
        <Slide19 key="s19" />,               // 19 — $10K → ~955 Signups table
        <Slide20 key="s20" />,               // 20 — Twitter Ads
        <Slide21 key="s21" />,               // 21 — Telegram KOL
        <Slide22 key="s22" />,               // 22 — BSC Partnership + Referral
        <Slide23 key="s23" />,               // 23 — Organic: Social Stream
        <Slide24 key="s24" />,               // 24 — Organic: Technical Content
        <Slide25 key="s25" />,               // 25 — Intern Test
        <Slide26 key="s26" />,               // 26 — First user tomorrow
        <Slide27 key="s27" />,               // 27 — Risk & Adjustment
        <Slide28 key="s28" />,               // 28 — So What? (Final)
      ]}
    />
  )
}
