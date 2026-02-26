/**
 * Content slides — presentation-content/slide-content.md
 * Slide 1: Bìa + North Star
 * Slide 2: Agenda
 */
import { ContentSlideLayout } from './ContentSlideLayout'
import { SlideLayout } from './SlideLayout'
import { SlideHeader } from './SlideHeader'
import { SlideFooter } from './SlideFooter'
import { VIDEOS } from '../constants/videos'

const whiteAlpha = (a: number) => `rgba(255,255,255,${a})`

/** Slide 1 — Bìa + North Star */
export function Slide1() {
  return (
    <SlideLayout
      videoSrc={VIDEOS[0]}
      header={<SlideHeader center="Pitch Deck" right="Trang 001" />}
      footer={<SlideFooter single="ClawFriend GTM Plan · Feb 2026" />}
      scrollable={false}
      mainClassName="justify-center"
    >
      <div style={{ marginTop: '-2%' }} className="flex flex-col gap-[2%]">
        <h1
          className="text-white font-bold tracking-[-0.02em] leading-[1.1]"
          style={{ fontSize: 'clamp(36px, 5.5vw, 80px)' }}
        >
          ClawFriend — GTM Plan Tháng Đầu
        </h1>
        <p
          className="text-white/90"
          style={{ fontSize: 'clamp(20px, 2.5vw, 40px)' }}
        >
          Web3 AI Agent Platform trên BSC
        </p>
        <p
          className="text-white/75"
          style={{ fontSize: 'clamp(15px, 1.5vw, 24px)' }}
        >
          Phân tích: Competitive Landscape · Skill Research · Distribution Plan
        </p>
        <blockquote
          className="border-l-4 pl-4 py-2 mt-[1%]"
          style={{
            borderColor: 'rgba(210,255,85,0.5)',
            fontSize: 'clamp(18px, 1.8vw, 28px)',
            color: whiteAlpha(0.9),
          }}
        >
          Làm thế nào để 1.000 user đầu tiên biết đến, sign up và dùng ClawFriend trong tháng đầu với $10K budget?
        </blockquote>
        <p
          className="text-white/55 italic mt-[0.5%]"
          style={{ fontSize: 'clamp(14px, 1.3vw, 20px)' }}
        >
          Tư duy Biz Dev — lập GTM plan, không phải investor đi tìm market gap.
        </p>
      </div>
    </SlideLayout>
  )
}

const lime = '#d2ff55'

const section1Badge = (
  <span
    className="self-start rounded-full px-3 py-1 font-semibold shrink-0"
    style={{ fontSize: 'clamp(12px, 1.1vw, 16px)', background: 'rgba(210,255,85,0.15)', color: lime, border: '1px solid rgba(210,255,85,0.35)' }}
  >
    Section 1 — Competitive Landscape
  </span>
)

const section2Badge = (
  <span
    className="self-start rounded-full px-3 py-1 font-semibold shrink-0"
    style={{ fontSize: 'clamp(12px, 1.1vw, 16px)', background: 'rgba(210,255,85,0.15)', color: lime, border: '1px solid rgba(210,255,85,0.35)' }}
  >
    Section 2 — Skill Research
  </span>
)

const section3Badge = (
  <span
    className="self-start rounded-full px-3 py-1 font-semibold shrink-0"
    style={{ fontSize: 'clamp(12px, 1.1vw, 16px)', background: 'rgba(210,255,85,0.15)', color: lime, border: '1px solid rgba(210,255,85,0.35)' }}
  >
    Section 3 — Distribution Plan
  </span>
)

/** Slide 2 — Agenda (theo slide-content.md) */
export function Slide2() {
  const items: { title: string; desc: string }[] = [
    { title: 'Bối cảnh thị trường', desc: 'ai đang dẫn đầu, vấn đề là gì' },
    { title: 'Competitive Landscape', desc: 'đối thủ trực tiếp và bài học từ thất bại' },
    { title: 'Skill Research', desc: '5 skill nên có ngay tháng đầu' },
    { title: 'Distribution Plan', desc: '$10K để lấy ~1.000 signup' },
  ]

  return (
    <ContentSlideLayout
      videoIndex={1}
      pageLabel="Trang 002"
      footer="ClawFriend GTM Plan"
    >
      <div className="glass flex flex-col gap-5 flex-1 rounded-xl p-6">
        <h2
          className="text-white font-bold tracking-[-0.02em] shrink-0"
          style={{ fontSize: 'clamp(26px, 2.8vw, 48px)' }}
        >
          Agenda
        </h2>
        {items.map(({ title, desc }, i) => (
          <div key={i} className="flex gap-4 items-baseline">
            <span
              className="shrink-0 font-bold tabular-nums"
              style={{ fontSize: 'clamp(22px, 2.5vw, 40px)', color: lime }}
            >
              {i + 1}.
            </span>
            <p
              className="text-white/95 leading-snug"
              style={{ fontSize: 'clamp(17px, 1.6vw, 28px)' }}
            >
              <span className="font-semibold text-white">{title}</span>
              <span className="text-white/70"> — {desc}</span>
            </p>
          </div>
        ))}
      </div>
    </ContentSlideLayout>
  )
}

/** Slide 3 — Giai đoạn thị trường */
export function Slide3() {
  const proofs = [
    { platform: 'Virtuals Protocol', value: '$4.18M', label: 'phí Q1/2025', source: 'DeFiLlama' },
    { platform: 'GPT Store', value: '50K+', label: 'GPTs, hàng triệu user', source: 'OpenAI' },
    { platform: 'friend.tech (peak)', value: '$19.67M', label: 'phí Sep 2023', source: 'DeFiLlama' },
    { platform: 'Moltbook', value: '1M+', label: 'agents, 1.5M users trong 4 ngày', source: 'CNBC Feb 2026' },
  ]

  return (
    <ContentSlideLayout
      videoIndex={2}
      pageLabel="Trang 003"
      footer="Section 1 — Competitive Landscape"
    >
      <div className="glass flex flex-col gap-5 flex-1 rounded-xl p-6">
        {section1Badge}
        <div>
          <h2 className="text-white font-bold" style={{ fontSize: 'clamp(26px, 2.8vw, 48px)' }}>
            Giai đoạn thị trường
          </h2>
          <p className="text-white/80 mt-1" style={{ fontSize: 'clamp(20px, 2vw, 34px)', color: lime }}>
            Nascent → Early Growth
          </p>
        </div>
        <p className="text-white/90 leading-relaxed" style={{ fontSize: 'clamp(16px, 1.5vw, 24px)' }}>
          Thị trường AI agent economy có demand thực nhưng chưa platform nào giữ user bền vững.
        </p>
        <div>
          <p className="text-white/70 font-semibold mb-3" style={{ fontSize: 'clamp(15px, 1.3vw, 20px)' }}>
            Bằng chứng demand:
          </p>
          <div className="grid grid-cols-2 gap-3">
            {proofs.map(({ platform, value, label, source }) => (
              <div
                key={platform}
                className="glass rounded-lg p-3 flex flex-col gap-1"
              >
                <span className="text-white font-semibold" style={{ fontSize: 'clamp(15px, 1.3vw, 20px)' }}>
                  {platform}
                </span>
                <span className="text-white/90" style={{ fontSize: 'clamp(15px, 1.3vw, 20px)' }}>
                  {value} {label}
                </span>
                <span className="text-white/45" style={{ fontSize: 'clamp(11px, 1vw, 15px)' }}>[{source}]</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ContentSlideLayout>
  )
}

/** Slide 4 — Ai đang dẫn đầu từng segment? */
export function Slide4() {
  const rows = [
    { segment: 'AI agent social', leader: 'Moltbook', metrics: '1M+ agents', issue: 'Zero economic layer' },
    { segment: 'AI agent tokenization', leader: 'Virtuals', metrics: 'Peak $4.18M/Q', issue: '-97% revenue decline' },
    { segment: 'Bonding curve', leader: 'friend.tech', metrics: 'Peak $19.67M/mo', issue: 'Dead — $0 hiện tại' },
    { segment: 'Skill marketplace', leader: 'GPT Store', metrics: '50K+ GPTs', issue: '99% creators earn $0' },
    { segment: 'BSC AI agent', leader: 'Không ai', metrics: '—', issue: 'Thị trường bỏ ngỏ' },
  ]

  return (
    <ContentSlideLayout
      videoIndex={3}
      pageLabel="Trang 004"
      footer="Section 1 — Competitive Landscape"
    >
      <div className="glass flex flex-col gap-4 flex-1 rounded-xl p-6 overflow-auto">
        {section1Badge}
        <h2 className="text-white font-bold shrink-0" style={{ fontSize: 'clamp(24px, 2.6vw, 42px)' }}>
          Ai đang dẫn đầu từng segment?
        </h2>
        <div className="flex-1 min-h-0 overflow-auto">
          <table className="w-full" style={{ fontSize: 'clamp(14px, 1.25vw, 20px)' }}>
            <thead>
              <tr className="text-left text-white/60 border-b border-white/10">
                <th className="pb-2 pr-3 font-semibold">Segment</th>
                <th className="pb-2 pr-3 font-semibold">Leader</th>
                <th className="pb-2 pr-3 font-semibold">Metrics</th>
                <th className="pb-2 font-semibold">Vấn đề</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(({ segment, leader, metrics, issue }, i) => (
                <tr key={i} className={`border-b border-white/5 ${i === 4 ? 'bg-white/[0.03]' : ''}`}>
                  <td className="py-2.5 pr-3 text-white/90">{segment}</td>
                  <td className={`py-2.5 pr-3 font-medium ${i === 4 ? 'text-lime font-semibold' : 'text-white'}`}>{leader}</td>
                  <td className="py-2.5 pr-3 text-white/80">{metrics}</td>
                  <td className={`py-2.5 ${i === 4 ? 'text-lime font-semibold' : 'text-white/70'}`}>{issue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-white/80 shrink-0 pt-1" style={{ fontSize: 'clamp(15px, 1.35vw, 20px)' }}>
          <span className="font-semibold text-white">Pattern:</span> Không platform nào combine bonding curve + skill market + social stream.
        </p>
      </div>
    </ContentSlideLayout>
  )
}

/** Slide 5 — Ma trận so sánh đối thủ */
export function Slide5() {
  const rows = [
    { platform: 'ClawFriend', bc: 'Có 5%+5%', skill: 'Có', social: 'Có BSC', fee: 'Có 5% mọi trade', status: 'Active' },
    { platform: 'Cooker.club', bc: 'Có 1% (DAO)', skill: 'Không', social: 'Có BSC', fee: 'Không $0', status: 'Stalled' },
    { platform: 'Moltbook', bc: 'Không', skill: 'Không', social: 'Có 1M+', fee: 'Không', status: 'No economy' },
    { platform: 'Virtuals', bc: 'Có', skill: 'Không', social: 'Không', fee: '40% → $0', status: '-97%' },
    { platform: 'friend.tech', bc: 'Có 5%+5%', skill: 'Không', social: 'Không', fee: 'Có 5%', status: 'Dead' },
    { platform: 'GPT Store', bc: 'Không', skill: 'Có 50K', social: 'Không', fee: 'Opaque', status: '99% earn $0' },
  ]

  return (
    <ContentSlideLayout videoIndex={4} pageLabel="Trang 005" footer="Section 1 — Competitive Landscape">
      <div className="glass flex flex-col gap-3 flex-1 rounded-xl p-6 overflow-auto">
        {section1Badge}
        <h2 className="text-white font-bold shrink-0" style={{ fontSize: 'clamp(24px, 2.6vw, 42px)' }}>
          Ma trận so sánh đối thủ
        </h2>
        <div className="flex-1 min-h-0 overflow-auto">
          <table className="w-full" style={{ fontSize: 'clamp(13px, 1.2vw, 18px)' }}>
            <thead>
              <tr className="text-left text-white/60 border-b border-white/10">
                <th className="pb-2 pr-2 font-semibold">Platform</th>
                <th className="pb-2 pr-2 font-semibold">Bonding Curve</th>
                <th className="pb-2 pr-2 font-semibold">Skill Market</th>
                <th className="pb-2 pr-2 font-semibold">Social</th>
                <th className="pb-2 pr-2 font-semibold">Creator Fee</th>
                <th className="pb-2 font-semibold">Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.platform} className={`border-b border-white/5 ${i === 0 ? 'bg-white/[0.04]' : ''}`}>
                  <td className={`py-2 pr-2 font-medium ${i === 0 ? 'text-lime' : 'text-white/90'}`}>{r.platform}</td>
                  <td className="py-2 pr-2 text-white/80">{r.bc}</td>
                  <td className="py-2 pr-2 text-white/80">{r.skill}</td>
                  <td className="py-2 pr-2 text-white/80">{r.social}</td>
                  <td className="py-2 pr-2 text-white/80">{r.fee}</td>
                  <td className="py-2 text-white/70">{r.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-lime font-semibold shrink-0 pt-1" style={{ fontSize: 'clamp(15px, 1.35vw, 20px)' }}>
          ClawFriend là platform đầu tiên trên BSC combine đủ 3 layer.
        </p>
      </div>
    </ContentSlideLayout>
  )
}

/** Slide 6 — Bài học friend.tech — Tại sao ClawFriend khác? */
export function Slide6() {
  return (
    <ContentSlideLayout videoIndex={5} pageLabel="Trang 006" footer="Section 1 — Competitive Landscape">
      <div className="glass flex flex-col gap-4 flex-1 rounded-xl p-6 overflow-auto">
        {section1Badge}
        <div>
          <h2 className="text-white font-bold" style={{ fontSize: 'clamp(22px, 2.4vw, 38px)' }}>
            Bài học friend.tech — Tại sao ClawFriend khác?
          </h2>
          <p className="text-white/80 mt-1" style={{ fontSize: 'clamp(16px, 1.5vw, 22px)' }}>
            friend.tech: cùng fee 5%+5%, peak $19.67M/mo → dead trong 3 tháng.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 flex-1 min-h-0">
          <div className="glass rounded-lg p-4 flex flex-col gap-2">
            <p className="text-white/60 font-semibold uppercase" style={{ fontSize: 'clamp(12px, 1.1vw, 16px)' }}>Root cause</p>
            <p className="text-white/90 leading-relaxed" style={{ fontSize: 'clamp(15px, 1.35vw, 20px)' }}>
              Key = quyền chat creator. Creator dump xong → key mất utility → volume = 0.
            </p>
          </div>
          <div className="glass rounded-lg p-4 flex flex-col gap-2">
            <p className="text-lime font-semibold uppercase" style={{ fontSize: 'clamp(12px, 1.1vw, 16px)' }}>Tại sao ClawFriend tránh được</p>
            <ul className="text-white/90 space-y-1.5" style={{ fontSize: 'clamp(15px, 1.35vw, 20px)' }}>
              <li>• <span className="font-medium">Skill Market</span> tạo utility độc lập</li>
              <li>• <span className="font-medium">Agent autonomous</span> — không cần human online</li>
              <li>• <span className="font-medium">Quadratic curve + 10% round-trip</span> — math không khuyến khích dump</li>
            </ul>
          </div>
        </div>
      </div>
    </ContentSlideLayout>
  )
}

/** Slide 7 — ClawFriend thắng ở đâu */
export function Slide7() {
  const points = [
    { title: 'Creator economics tốt nhất', desc: '5% perpetual fee trực tiếp mỗi trade. $10K daily volume = creator earn $500/ngày = $15K/tháng passive' },
    { title: 'BSC = đúng thị trường', desc: 'PancakeSwap 500K+ daily users, retail DeFi' },
    { title: 'OpenClaw ecosystem', desc: '135K+ GitHub stars, pipeline sẵn — npx clawhub install clawfriend' },
  ]

  return (
    <ContentSlideLayout videoIndex={0} pageLabel="Trang 007" footer="Section 1 — Competitive Landscape">
      <div className="glass flex flex-col gap-4 flex-1 rounded-xl p-6">
        {section1Badge}
        <h2 className="text-white font-bold shrink-0" style={{ fontSize: 'clamp(24px, 2.6vw, 42px)' }}>
          ClawFriend thắng ở đâu
        </h2>
        <div className="flex flex-col gap-3 flex-1">
          {points.map(({ title, desc }, i) => (
            <div key={i} className="glass rounded-lg p-4 flex flex-col gap-1">
              <span className="text-lime font-semibold" style={{ fontSize: 'clamp(17px, 1.5vw, 24px)' }}>
                {i + 1}. {title}
              </span>
              <span className="text-white/80" style={{ fontSize: 'clamp(15px, 1.35vw, 20px)' }}>{desc}</span>
            </div>
          ))}
        </div>
      </div>
    </ContentSlideLayout>
  )
}

/** Slide 8 — ClawFriend thua ở đâu (honest) */
export function Slide8() {
  const points = [
    'Scale gap vs Moltbook — 1M+ agents vs early stage',
    'Friction cao hơn — BNB gas + Twitter verification',
    'Skill Market trống lúc launch — Risk #1. Cần populate trước launch.',
  ]

  return (
    <ContentSlideLayout videoIndex={1} pageLabel="Trang 008" footer="Section 1 — Competitive Landscape">
      <div className="glass flex flex-col gap-4 flex-1 rounded-xl p-6">
        {section1Badge}
        <h2 className="text-white font-bold shrink-0" style={{ fontSize: 'clamp(24px, 2.6vw, 42px)' }}>
          ClawFriend thua ở đâu (honest)
        </h2>
        <ul className="flex flex-col gap-2 flex-1">
          {points.map((p, i) => (
            <li key={i} className="glass rounded-lg p-3 flex gap-2 items-start">
              <span className="text-lime font-bold shrink-0" style={{ fontSize: 'clamp(15px, 1.35vw, 20px)' }}>{i + 1}.</span>
              <span className="text-white/90" style={{ fontSize: 'clamp(15px, 1.35vw, 20px)' }}>{p}</span>
            </li>
          ))}
        </ul>
        <div
          className="rounded-lg p-3 shrink-0"
          style={{ background: 'rgba(210,255,85,0.1)', border: '1px solid rgba(210,255,85,0.3)', fontSize: 'clamp(15px, 1.35vw, 20px)' }}
        >
          <span className="font-semibold text-lime">Action:</span>
          <span className="text-white/90 ml-1"> Populate Skill Market với 10+ quality skills trước khi launch.</span>
        </div>
      </div>
    </ContentSlideLayout>
  )
}

/** Slide 9 — Skill Market — 5 skill tháng đầu */
export function Slide9() {
  const skills = [
    { skill: 'BSC Smart Money Tracker', user: 'Swing trader $10K–100K', alt: 'Nansen $69+/mo', value: 'Real-time vs delay 15 phút' },
    { skill: 'BSC Token Safety Scanner', user: 'Degen trader BSC', alt: '$39/mo (3 tool)', value: 'Full analysis vs basic score' },
    { skill: 'PancakeSwap Yield Optimizer', user: 'DeFi farmer $5K–500K', alt: 'Beefy 2% yield', value: 'Alert vs trích phần trăm' },
    { skill: 'BSC Airdrop Intelligence', user: 'Airdrop farmer', alt: 'Không có tool BSC', value: 'Eligibility real-time' },
    { skill: 'BSC Social Alpha Scanner', user: 'Token speculator', alt: 'LunarCrush $72/mo', value: 'BSC-native sentiment' },
  ]

  return (
    <ContentSlideLayout videoIndex={2} pageLabel="Trang 009" footer="Section 2 — Skill Research">
      <div className="glass flex flex-col gap-4 flex-1 rounded-xl p-6 overflow-auto">
        {section2Badge}
        <h2 className="text-white font-bold shrink-0" style={{ fontSize: 'clamp(24px, 2.6vw, 42px)' }}>
          Skill Market — 5 skill tháng đầu
        </h2>
        <div className="flex-1 min-h-0 overflow-auto">
          <table className="w-full" style={{ fontSize: 'clamp(13px, 1.2vw, 18px)' }}>
            <thead>
              <tr className="text-left text-white/60 border-b border-white/10">
                <th className="pb-2 pr-2 font-semibold">#</th>
                <th className="pb-2 pr-2 font-semibold">Skill</th>
                <th className="pb-2 pr-2 font-semibold">Target user</th>
                <th className="pb-2 pr-2 font-semibold">Alternative hiện tại</th>
                <th className="pb-2 font-semibold">Holder-gated value</th>
              </tr>
            </thead>
            <tbody>
              {skills.map((s, i) => (
                <tr key={i} className="border-b border-white/5">
                  <td className="py-2 pr-2 text-lime font-semibold">{i + 1}</td>
                  <td className="py-2 pr-2 text-white font-medium">{s.skill}</td>
                  <td className="py-2 pr-2 text-white/85">{s.user}</td>
                  <td className="py-2 pr-2 text-white/75">{s.alt}</td>
                  <td className="py-2 text-white/85">{s.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-white/80 shrink-0 pt-1" style={{ fontSize: 'clamp(15px, 1.35vw, 20px)' }}>
          <span className="font-semibold text-white">Thứ tự launch:</span>{' '}
          #2 trước (infra dùng lại) → #1, #4 → #3 → #5.
        </p>
      </div>
    </ContentSlideLayout>
  )
}

/** Slide 10 — Bằng chứng demand — Skill */
export function Slide10() {
  const proofs = [
    { skill: 'Smart Money', data: '80K+ search "whale alert crypto"/tháng; @lookonchain 1.2M followers' },
    { skill: 'Token Safety', data: '40K search "BSC rug check"/tháng; Token Sniffer 1M+ scan/tháng' },
    { skill: 'Yield', data: 'Beefy mất 97% TVL BSC ($300M→$10M) — user rời vì phí cao' },
    { skill: 'Airdrop', data: '$4.5B phân phối 2025; 45% eligible miss claim; ~$484/user/năm bỏ lỡ' },
    { skill: 'Social Alpha', data: 'LunarCrush $72/mo nhưng BSC <10% coverage' },
  ]

  return (
    <ContentSlideLayout videoIndex={3} pageLabel="Trang 010" footer="Section 2 — Skill Research">
      <div className="glass flex flex-col gap-4 flex-1 rounded-xl p-6 overflow-auto">
        {section2Badge}
        <h2 className="text-white font-bold shrink-0" style={{ fontSize: 'clamp(24px, 2.6vw, 42px)' }}>
          Bằng chứng demand — Skill
        </h2>
        <ul className="flex flex-col gap-3 flex-1">
          {proofs.map(({ skill, data }, i) => (
            <li key={i} className="glass rounded-lg p-3 flex gap-3 items-start">
              <span className="text-lime font-semibold shrink-0" style={{ fontSize: 'clamp(15px, 1.3vw, 20px)' }}>
                {skill}:
              </span>
              <span className="text-white/90 leading-relaxed" style={{ fontSize: 'clamp(15px, 1.35vw, 20px)' }}>{data}</span>
            </li>
          ))}
        </ul>
        <p className="text-white/55 shrink-0" style={{ fontSize: 'clamp(12px, 1.1vw, 16px)' }}>
          Nguồn: Nghiên cứu Perplexity S1–S10, DeFiLlama, skill-research.md
        </p>
      </div>
    </ContentSlideLayout>
  )
}

/** Slide 11 — Flywheel Holder-Gated */
export function Slide11() {
  const steps = [
    'Skill public hữu ích',
    'User tìm agent',
    'Mua share để real-time',
    'Creator earn 5% fee',
    'Đầu tư data tốt hơn',
  ]

  return (
    <ContentSlideLayout videoIndex={4} pageLabel="Trang 011" footer="Section 2 — Skill Research">
      <div className="glass flex flex-col gap-4 flex-1 rounded-xl p-6">
        {section2Badge}
        <h2 className="text-white font-bold shrink-0" style={{ fontSize: 'clamp(24px, 2.6vw, 42px)' }}>
          Flywheel Holder-Gated
        </h2>
        <div className="flex items-center justify-center gap-2 flex-wrap py-4">
          {steps.map((s, i) => (
            <span key={i} className="flex items-center gap-2">
              <span
                className="rounded-full px-3 py-1.5 font-medium"
                style={{ fontSize: 'clamp(15px, 1.35vw, 20px)', background: 'rgba(210,255,85,0.15)', color: lime, border: '1px solid rgba(210,255,85,0.4)' }}
              >
                {s}
              </span>
              {i < steps.length - 1 && (
                <span className="text-white/40 font-light" style={{ fontSize: 'clamp(18px, 1.6vw, 26px)' }}>→</span>
              )}
            </span>
          ))}
        </div>
        <div
          className="rounded-lg p-4 shrink-0"
          style={{ background: 'rgba(210,255,85,0.08)', border: '1px solid rgba(210,255,85,0.25)', fontSize: 'clamp(15px, 1.35vw, 20px)' }}
        >
          <span className="font-semibold text-lime">Nguyên tắc:</span>
          <span className="text-white/90 ml-1">
            {' '}
            Public tier phải thực sự hữu ích — không cắt xén ép upgrade.
          </span>
        </div>
      </div>
    </ContentSlideLayout>
  )
}

/** Slide 12 — Phân bổ ngân sách — $10.000 */
export function Slide12() {
  const rows = [
    { channel: 'Twitter/X Paid Ads', type: 'Paid', budget: '$4.000', signups: '~80', cac: '$50' },
    { channel: 'Telegram KOL + Groups', type: 'Paid', budget: '$3.500', signups: '~325', cac: '$10.77' },
    { channel: 'Social Stream + Bot', type: 'Organic', budget: '$0', signups: '~200', cac: '$0' },
    { channel: 'Technical Content', type: 'Organic', budget: '$0', signups: '~200', cac: '$0' },
    { channel: 'BSC Partnership + Referral', type: 'Hybrid', budget: '$2.000', signups: '~150', cac: '~$13' },
    { channel: 'Reserve', type: '—', budget: '$500', signups: '—', cac: '—' },
  ]

  return (
    <ContentSlideLayout videoIndex={5} pageLabel="Trang 012" footer="Section 3 — Distribution Plan">
      <div className="glass flex flex-col gap-3 flex-1 rounded-xl p-6 overflow-auto">
        {section3Badge}
        <h2 className="text-white font-bold shrink-0" style={{ fontSize: 'clamp(24px, 2.6vw, 42px)' }}>
          Phân bổ ngân sách — $10.000
        </h2>
        <div className="flex-1 min-h-0 overflow-auto">
          <table className="w-full" style={{ fontSize: 'clamp(13px, 1.2vw, 18px)' }}>
            <thead>
              <tr className="text-left text-white/60 border-b border-white/10">
                <th className="pb-2 pr-2 font-semibold">Kênh</th>
                <th className="pb-2 pr-2 font-semibold">Loại</th>
                <th className="pb-2 pr-2 font-semibold">Budget</th>
                <th className="pb-2 pr-2 font-semibold">Est. Signups</th>
                <th className="pb-2 font-semibold">CAC</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className={`border-b border-white/5 ${i === 5 ? 'bg-white/[0.03]' : ''}`}>
                  <td className="py-2 pr-2 text-white/90 font-medium">{r.channel}</td>
                  <td className="py-2 pr-2 text-white/80">{r.type}</td>
                  <td className="py-2 pr-2 text-white/80">{r.budget}</td>
                  <td className="py-2 pr-2 text-white/80">{r.signups}</td>
                  <td className="py-2 text-white/80">{r.cac}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-lime font-semibold shrink-0 pt-1" style={{ fontSize: 'clamp(15px, 1.35vw, 20px)' }}>
          Tổng: $10.000 → ~955 signups · Blended CAC $10.47
        </p>
      </div>
    </ContentSlideLayout>
  )
}
