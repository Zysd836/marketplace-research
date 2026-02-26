import { Presentation } from './components/Presentation'
import { CoverSlide } from './components/CoverSlide'
import {
  Slide1,
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
} from './components/Slides'

export default function App() {
  return (
    <Presentation
      slides={[
        <CoverSlide key="cover" />,
        <Slide1 key="s1" />,
        <Slide2 key="s2" />,
        <Slide3 key="s3" />,
        <Slide4 key="s4" />,
        <Slide5 key="s5" />,
        <Slide6 key="s6" />,
        <Slide7 key="s7" />,
        <Slide8 key="s8" />,
        <Slide9 key="s9" />,
        <Slide10 key="s10" />,
        <Slide11 key="s11" />,
        <Slide12 key="s12" />,
      ]}
    />
  )
}
