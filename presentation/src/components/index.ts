/**
 * Slide primitives — reuse for new slides.
 *
 * - SlideLayout: video bg + glass card + optional header/footer + main (children)
 * - SlideHeader: Logo left, optional center/right (e.g. "Pitch Deck", pageLabel)
 * - SlideFooter: left/right or single (right-aligned line)
 * - ContentSlideLayout: full content slide (videoIndex, pageLabel, title, footer, children)
 *
 * Thêm slide mới: trong Slides.tsx export function SlideN() {
 *   return <ContentSlideLayout videoIndex={...} pageLabel="Trang 0NN" title="..." footer="...">...</ContentSlideLayout>
 * } rồi đăng ký trong App.tsx.
 */

export { VideoBackground } from './VideoBackground'
export { SlideLayout } from './SlideLayout'
export { SlideHeader } from './SlideHeader'
export { SlideFooter } from './SlideFooter'
export { ContentSlideLayout } from './ContentSlideLayout'
export { Logo } from './Logo'
export { Presentation } from './Presentation'
