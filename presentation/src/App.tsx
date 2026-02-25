import { Presentation } from './components/Presentation'
import { CoverSlide } from './components/CoverSlide'
import {
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
  Slide7,
  Slide8,
  Slide9,
  Slide10,
  Slide11,
  Slide12,
  Slide13,
  Slide14,
  Slide15,
  Slide16,
} from './components/Slides'

export default function App() {
  return (
    <Presentation
      slides={[
        <CoverSlide key="1" />,   // 01 — Title
        <Slide2    key="2" />,    // 02 — Market Context
        <Slide3    key="3" />,    // 03 — Competitive Overview
        <Slide4    key="4" />,    // 04 — What Competitors Taught Us
        <Slide13   key="5" />,    // 05 — Three Gaps
        <Slide14   key="6" />,    // 06 — Positioning
        <Slide5    key="7" />,    // 07 — Skill Research
        <Slide6    key="8" />,    // 08 — Top 3 Skills
        <Slide15   key="9" />,    // 09 — Skills #3, #5, #6
        <Slide7    key="10" />,   // 10 — Holder Flywheel
        <Slide8    key="11" />,   // 11 — Distribution Overview
        <Slide9    key="12" />,   // 12 — Paid Channels
        <Slide16   key="13" />,   // 13 — Organic + Partnerships
        <Slide10   key="14" />,   // 14 — Timeline
        <Slide11   key="15" />,   // 15 — AI Showcase
        <Slide12   key="16" />,   // 16 — Q&A Ready
      ]}
    />
  )
}
