import { Presentation } from './components/Presentation'
import {
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide7,
  Slide8,
  Slide9,
  Slide10,
  Slide11,
  Slide12,
  Slide13,
  Slide15,
  Slide16,
  Slide17,
  Slide18,
  Slide20AIShowcase,
  Slide21AIShowcase,
  Slide22AIShowcase,
} from './components/Slides'

export default function App() {
  return (
    <Presentation
      slides={[
        <Slide1 key="s1" />,
        <Slide2 key="s2" />,
        <Slide3 key="s3" />,
        <Slide4 key="s4" />,
        <Slide5 key="s5" />,
        <Slide7 key="s7" />,
        <Slide8 key="s8" />,
        <Slide9 key="s9" />,
        <Slide10 key="s10" />,
        <Slide11 key="s11" />,
        <Slide12 key="s12" />,
        <Slide13 key="s13" />,
        <Slide15 key="s15" />,
        <Slide16 key="s16" />,
        <Slide17 key="s17" />,
        <Slide18 key="s18" />,
        <Slide20AIShowcase key="ai1" />,
        <Slide21AIShowcase key="ai2" />,
        <Slide22AIShowcase key="ai3" />,
      ]}
    />
  )
}
