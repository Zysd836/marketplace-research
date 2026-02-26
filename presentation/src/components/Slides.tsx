/**
 * Content slides — presentation-content/slide-content.md
 * Slide 1: Bìa + North Star
 * Slide 2: Agenda
 */
import { BarChart3, Target, Zap, Rocket, DollarSign, Layers, Github, TrendingUp, ShieldCheck, Wallet, Gift, Users, Megaphone, Download, Bot, Sparkles, Search, FileText } from 'lucide-react'
import { ContentSlideLayout } from './ContentSlideLayout'
import { SlideLayout } from './SlideLayout'
import { SlideHeader } from './SlideHeader'
import { SlideFooter } from './SlideFooter'
import { VIDEOS } from '../constants/videos'

/** Slide 1 — Bìa (content từ CoverSlide) */
export function Slide1() {
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

const lime = '#d2ff55'

/** Slide 2 — Agenda (theo slide-content.md) */
const agendaItems: { icon: JSX.Element; title: string; desc: string }[] = [
  { icon: <BarChart3 size={32} strokeWidth={2} />, title: 'Bối cảnh thị trường', desc: 'Ai đang dẫn đầu, vấn đề cốt lõi là gì?' },
  { icon: <Target size={32} strokeWidth={2} />, title: 'Competitive Landscape', desc: 'Đối thủ trực tiếp và bài học từ thất bại' },
  { icon: <Zap size={32} strokeWidth={2} />, title: 'Skill Research', desc: '5 skill thiết yếu nên có ngay tháng đầu' },
  { icon: <Rocket size={32} strokeWidth={2} />, title: 'Distribution Plan', desc: 'Chiến lược $10K budget để lấy ~1.000 signup' },
  { icon: <Sparkles size={32} strokeWidth={2} />, title: 'AI Showcase', desc: 'Research workflow — tư duy có hệ thống với Claude + Perplexity' },
]

export function Slide2() {
  return (
    <ContentSlideLayout
      videoIndex={1}
      pageLabel="Trang 002"
      footer="ClawFriend GTM Plan"
    >
      <div className="flex flex-col gap-5 flex-1 rounded-xl p-6">
        <h2
          className="text-white font-bold tracking-[-0.02em] shrink-0"
          style={{ fontSize: 'clamp(30px, 3.2vw, 54px)' }}
        >
          Agenda
        </h2>
        <div className="flex-1 flex justify-center items-center">
          <div className="grid grid-cols-2 gap-6 items-start">
            {agendaItems.map(({ icon, title, desc }, i) => (
              <div
                key={i}
                className="glass flex gap-4 items-start p-4 rounded-lg"
              >
                <span className="shrink-0 mt-0.5" style={{ color: lime }}>
                  {icon}
                </span>
                <div>
                  <p className="font-semibold text-white" style={{ fontSize: 'clamp(20px, 1.8vw, 30px)' }}>
                    {title}
                  </p>
                  <p className="text-white/70 leading-snug" style={{ fontSize: 'clamp(16px, 1.45vw, 24px)' }}>
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
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
      <div className="flex flex-col gap-5 flex-1 rounded-xl p-6">
        <div>
          <h2 className="text-white font-bold" style={{ fontSize: 'clamp(30px, 3.2vw, 54px)' }}>
            Giai đoạn thị trường
          </h2>
          <p className="text-white/80 mt-1" style={{ fontSize: 'clamp(24px, 2.4vw, 40px)', color: lime }}>
            Nascent → Early Growth
          </p>
        </div>
        <p className="text-white/90 leading-relaxed" style={{ fontSize: 'clamp(19px, 1.8vw, 28px)' }}>
          Thị trường AI agent economy có demand thực nhưng chưa platform nào giữ user bền vững.
        </p>
        <div>
          <p className="text-white/70 font-semibold mb-3" style={{ fontSize: 'clamp(18px, 1.55vw, 24px)' }}>
            Bằng chứng demand:
          </p>
          <div className="grid grid-cols-2 gap-3 items-start">
            {proofs.map(({ platform, value, label, source }) => (
              <div
                key={platform}
                className="glass rounded-lg p-3 flex flex-col gap-1"
              >
                <span className="text-white font-semibold" style={{ fontSize: 'clamp(18px, 1.55vw, 24px)' }}>
                  {platform}
                </span>
                <span className="text-white/90" style={{ fontSize: 'clamp(18px, 1.55vw, 24px)' }}>
                  {value} {label}
                </span>
                <span className="text-white/45" style={{ fontSize: 'clamp(15px, 1.4vw, 22px)' }}>[{source}]</span>
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
      <div className="flex flex-col gap-4 flex-1 rounded-xl p-6 overflow-auto">
        <h2 className="text-white font-bold shrink-0" style={{ fontSize: 'clamp(28px, 3vw, 48px)' }}>
          Ai đang dẫn đầu từng segment?
        </h2>
        <div className="glass min-h-0 overflow-auto rounded-lg p-4">
          <table className="w-full" style={{ fontSize: 'clamp(16px, 1.5vw, 24px)' }}>
            <thead>
              <tr className="text-left border-b" style={{ color: lime, background: 'rgba(210,255,85,0.12)', borderColor: 'rgba(210,255,85,0.35)' }}>
                <th className="pl-4 py-3 pr-4 font-semibold">Segment</th>
                <th className="py-3 pr-4 font-semibold">Leader</th>
                <th className="py-3 pr-4 font-semibold">Metrics</th>
                <th className="py-3 font-semibold">Vấn đề</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(({ segment, leader, metrics, issue }, i) => (
                <tr key={i} className={`border-b border-white/5 ${i === 4 ? 'bg-white/[0.03]' : ''}`}>
                  <td className="py-3.5 pr-4 pl-4 text-white/90">{segment}</td>
                  <td className={`py-3.5 pr-4 font-medium ${i === 4 ? 'text-lime font-semibold' : 'text-white'}`}>{leader}</td>
                  <td className="py-3.5 pr-4 text-white/80">{metrics}</td>
                  <td className={`py-3.5 pr-4 ${i === 4 ? 'text-lime font-semibold' : 'text-white/70'}`}>{issue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-white/80 shrink-0 pt-1" style={{ fontSize: 'clamp(18px, 1.6vw, 24px)' }}>
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
      <div className="flex flex-col gap-3 flex-1 rounded-xl p-6 overflow-auto">
        <h2 className="text-white font-bold shrink-0" style={{ fontSize: 'clamp(28px, 3vw, 48px)' }}>
          Ma trận so sánh đối thủ
        </h2>
        <div className="glass min-h-0 overflow-auto rounded-lg p-4">
          <table className="w-full" style={{ fontSize: 'clamp(15px, 1.4vw, 22px)' }}>
            <thead>
              <tr className="text-left border-b" style={{ color: lime, background: 'rgba(210,255,85,0.12)', borderColor: 'rgba(210,255,85,0.35)' }}>
                <th className="pl-4 py-3 pr-4 font-semibold">Platform</th>
                <th className="py-3 pr-4 font-semibold">Bonding Curve</th>
                <th className="py-3 pr-4 font-semibold">Skill Market</th>
                <th className="py-3 pr-4 font-semibold">Social</th>
                <th className="py-3 pr-4 font-semibold">Creator Fee</th>
                <th className="py-3 font-semibold">Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.platform} className={`border-b border-white/5 ${i === 0 ? 'bg-white/[0.04]' : ''}`}>
                  <td className={`py-3 pr-4 pl-4 font-medium ${i === 0 ? 'text-lime' : 'text-white/90'}`}>{r.platform}</td>
                  <td className="py-3 pr-4 text-white/80">{r.bc}</td>
                  <td className="py-3 pr-4 text-white/80">{r.skill}</td>
                  <td className="py-3 pr-4 text-white/80">{r.social}</td>
                  <td className="py-3 pr-4 text-white/80">{r.fee}</td>
                  <td className="py-3 pr-4 text-white/70">{r.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-lime font-semibold shrink-0 pt-1" style={{ fontSize: 'clamp(18px, 1.6vw, 24px)' }}>
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
      <div className="flex gap-6 shrink-0 rounded-xl p-6 items-stretch">
        <div className="flex flex-col gap-4 flex-1 min-w-0 w-1/2 min-h-0">
          <div>
            <h2 className="text-white font-bold" style={{ fontSize: 'clamp(26px, 2.8vw, 44px)' }}>
              Bài học friend.tech — Tại sao ClawFriend khác?
            </h2>
            <p className="text-white/80 mt-1" style={{ fontSize: 'clamp(19px, 1.8vw, 26px)' }}>
              friend.tech: cùng fee 5%+5%, peak $19.67M/mo → dead trong 3 tháng.
            </p>
          </div>
          <div className="glass rounded-lg p-4 flex flex-col gap-4">
            <div>
              <p className="text-white/60 font-semibold uppercase" style={{ fontSize: 'clamp(16px, 1.5vw, 22px)' }}>Root cause</p>
              <p className="text-white/90 leading-relaxed mt-1" style={{ fontSize: 'clamp(18px, 1.6vw, 24px)' }}>
                Key = quyền chat creator. Creator dump xong → key mất utility → volume = 0.
              </p>
            </div>
            <div>
              <p className="text-lime font-semibold uppercase" style={{ fontSize: 'clamp(16px, 1.5vw, 22px)' }}>Tại sao ClawFriend tránh được</p>
              <ul className="text-white/90 space-y-1.5 mt-1" style={{ fontSize: 'clamp(18px, 1.6vw, 24px)' }}>
                <li>• <span className="font-medium">Skill Market</span> tạo utility độc lập</li>
                <li>• <span className="font-medium">Agent autonomous</span> — không cần human online</li>
                <li>• <span className="font-medium">Quadratic curve + 10% round-trip</span> — math không khuyến khích dump</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 w-1/2 min-h-0 rounded-xl overflow-hidden flex">
          <img
            src="https://pixelplex.io/wp-content/uploads/2025/09/1600x700_Agentic-AI-in-Healthcare-min.jpg"
            alt="Agentic AI"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </ContentSlideLayout>
  )
}

/** Slide 7 — ClawFriend thắng ở đâu */
const slide7Cards = [
  {
    icon: <DollarSign size={32} strokeWidth={2} />,
    title: 'Creator Economics',
    desc: '5% perpetual fee trực tiếp mỗi trade. $10K daily volume = creator earn $500/ngày = $15K/tháng passive. Tốt nhất thị trường hiện nay.',
  },
  {
    icon: <Layers size={32} strokeWidth={2} />,
    title: 'BSC = Đúng thị trường',
    desc: 'PancakeSwap có 500K+ daily users. Môi trường DeFi sôi động nhất cho retail, chưa có đối thủ AI agent platform nào khai thác.',
  },
  {
    icon: <Github size={32} strokeWidth={2} />,
    title: 'OpenClaw Ecosystem',
    desc: (
      <>
        Tận dụng 135K+ GitHub stars. Pipeline dev sẵn sàng với{' '}
        <code className="px-1.5 py-0.5 rounded bg-white/10 text-lime" style={{ fontSize: 'clamp(16px, 1.5vw, 22px)' }}>
          npx clawhub install clawfriend
        </code>{' '}
        để deploy nhanh chóng.
      </>
    ),
  },
]

export function Slide7() {
  return (
    <ContentSlideLayout videoIndex={0} pageLabel="Trang 007" footer="Section 1 — Competitive Landscape">
      <div className="flex flex-col gap-5 flex-1 rounded-xl p-6">
        <h2 className="text-white font-bold shrink-0" style={{ fontSize: 'clamp(28px, 3vw, 48px)' }}>
          ClawFriend thắng ở đâu
        </h2>
        <div className="grid grid-cols-3 gap-4 items-stretch w-full">
          {slide7Cards.map(({ icon, title, desc }, i) => (
            <div key={i} className="glass rounded-lg p-5 flex flex-col gap-3">
              <span className="shrink-0" style={{ color: lime }}>{icon}</span>
              <h3 className="text-lime font-semibold shrink-0" style={{ fontSize: 'clamp(20px, 1.8vw, 28px)' }}>
                {title}
              </h3>
              <span className="text-white/80 leading-relaxed" style={{ fontSize: 'clamp(16px, 1.5vw, 22px)' }}>
                {desc}
              </span>
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
    'Skill Market chưa có "lý do quay lại" — Risk #1. Đã build nhưng thiếu skill chất lượng.',
  ]

  return (
    <ContentSlideLayout videoIndex={1} pageLabel="Trang 008" footer="Section 1 — Competitive Landscape">
      <div className="flex flex-col gap-4 rounded-xl p-6">
        <h2 className="text-white font-bold shrink-0" style={{ fontSize: 'clamp(28px, 3vw, 48px)' }}>
          ClawFriend thua ở đâu (honest)
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 flex-1 min-h-0">
          <div className="glass rounded-xl p-4 flex-1 flex flex-col min-w-0 justify-center">
            <h3 className="text-lime font-semibold mb-2 shrink-0" style={{ fontSize: 'clamp(19px, 1.8vw, 26px)' }}>
              Gaps & Frictions
            </h3>
            <ul className="flex flex-col gap-2 flex-1 justify-center w-full">
              {points.map((p, i) => (
                <li key={i} className="rounded-lg p-3 flex gap-2 items-start">
                  <span className="text-lime font-bold shrink-0" style={{ fontSize: 'clamp(18px, 1.6vw, 24px)' }}>{i + 1}.</span>
                  <span className="text-white/90" style={{ fontSize: 'clamp(18px, 1.6vw, 24px)' }}>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="glass rounded-xl p-4 shrink-0 border border-[rgba(210,255,85,0.35)] flex flex-col min-w-0 sm:max-w-[40%] items-center justify-center text-center">
            <h3 className="text-lime font-semibold mb-2" style={{ fontSize: 'clamp(19px, 1.8vw, 26px)' }}>
              Action Plan
            </h3>
            <p className="text-white/90" style={{ fontSize: 'clamp(18px, 1.6vw, 24px)' }}>
              Thêm 10+ skill chất lượng vào Skill Market trước khi launch.
            </p>
          </div>
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
      <div className="flex flex-col gap-4 flex-1 rounded-xl p-6 overflow-auto">
        <h2 className="text-white font-bold shrink-0" style={{ fontSize: 'clamp(28px, 3vw, 48px)' }}>
          Skill Market — 5 skill tháng đầu
        </h2>
        <div className="glass min-h-0 overflow-auto rounded-lg p-4">
          <table className="w-full" style={{ fontSize: 'clamp(15px, 1.4vw, 22px)' }}>
            <thead>
              <tr className="text-left border-b" style={{ color: lime, background: 'rgba(210,255,85,0.12)', borderColor: 'rgba(210,255,85,0.35)' }}>
                <th className="pl-4 py-3 pr-4 font-semibold">#</th>
                <th className="py-3 pr-4 font-semibold">Skill</th>
                <th className="py-3 pr-4 font-semibold">Target user</th>
                <th className="py-3 pr-4 font-semibold">Alternative hiện tại</th>
                <th className="py-3 font-semibold">Holder-gated value</th>
              </tr>
            </thead>
            <tbody>
              {skills.map((s, i) => (
                <tr key={i} className="border-b border-white/5">
                  <td className="py-3 pr-4 pl-4 text-lime font-semibold">{i + 1}</td>
                  <td className="py-3 pr-4 text-white font-medium">{s.skill}</td>
                  <td className="py-3 pr-4 text-white/85">{s.user}</td>
                  <td className="py-3 pr-4 text-white/75">{s.alt}</td>
                  <td className="py-3 pr-4 text-white/85">{s.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-white/80 shrink-0 pt-1" style={{ fontSize: 'clamp(18px, 1.6vw, 24px)' }}>
          <span className="font-semibold text-white">Thứ tự launch:</span>{' '}
          #2 trước (infra dùng lại) → #1, #4 → #3 → #5.
        </p>
      </div>
    </ContentSlideLayout>
  )
}

const proofIcons: Record<string, JSX.Element> = {
  'Smart Money': <TrendingUp size={20} strokeWidth={2} />,
  'Token Safety': <ShieldCheck size={20} strokeWidth={2} />,
  'Yield': <Wallet size={20} strokeWidth={2} />,
  'Airdrop': <Gift size={20} strokeWidth={2} />,
  'Social Alpha': <Users size={20} strokeWidth={2} />,
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
      <div className="flex gap-6 min-h-0 flex-col lg:flex-row">
        <div className="glass rounded-xl flex flex-col gap-2 flex-1 min-w-0 overflow-auto p-4">
          <h2 className="text-white font-bold shrink-0" style={{ fontSize: 'clamp(24px, 2.6vw, 40px)' }}>
            Bằng chứng demand — Skill
          </h2>
          <ul className="flex flex-col gap-2">
            {proofs.map(({ skill, data }, i) => (
              <li key={i} className="py-1.5 flex gap-2 items-start">
                <span className="text-lime shrink-0 mt-0.5">{proofIcons[skill]}</span>
                <div className="flex flex-col gap-0.5 min-w-0">
                  <span className="text-lime font-semibold" style={{ fontSize: 'clamp(15px, 1.4vw, 20px)' }}>
                    {skill}:
                  </span>
                  <span className="text-white/90 leading-snug" style={{ fontSize: 'clamp(15px, 1.4vw, 20px)' }}>{data}</span>
                </div>
              </li>
            ))}
          </ul>
          <p className="text-white/55 shrink-0 text-sm">
            Nguồn: Nghiên cứu Perplexity S1–S10, DeFiLlama, skill-research.md
          </p>
        </div>
        <div className="hidden lg:block flex-1 min-w-0 min-h-[200px] rounded-xl overflow-hidden">
          <img
            src="https://png.pngtree.com/thumb_back/fw800/background/20251108/pngtree-modern-data-visualization-of-financial-growth-featuring-glowing-bar-charts-and-image_19917738.webp"
            alt="Data visualization"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </ContentSlideLayout>
  )
}

/** Slide 11 — Flywheel Holder-Gated */
export function Slide11() {
  const steps = [
    {
      title: 'Skill public hữu ích',
      desc: 'User trải nghiệm giá trị miễn phí trước khi upgrade — thấy chất lượng, không bị ép mua.',
    },
    {
      title: 'User tìm agent',
      desc: 'Browse Skill Market, discover agents có skill phù hợp — demand kéo supply.',
    },
    {
      title: 'Mua share để real-time',
      desc: 'Holder-gated: chỉ share holders access real-time data; free tier có delay hoặc limited.',
    },
    {
      title: 'Creator earn 5% fee',
      desc: 'Mỗi trade creator nhận 5% perpetual — incentive mạnh để publish skill chất lượng.',
    },
    {
      title: 'Đầu tư data tốt hơn',
      desc: 'Thu nhập → creator đầu tư data & cải thiện skill → hấp dẫn hơn → quay lại bước 1.',
    },
  ]

  return (
    <ContentSlideLayout videoIndex={4} pageLabel="Trang 011" footer="Section 2 — Skill Research">
      <div className="flex gap-6 rounded-xl overflow-hidden min-h-0">
        <div className="glass rounded-xl p-5 flex flex-col gap-3 w-1/2 min-w-0 overflow-auto border border-white/10">
          <h2 className="text-white font-bold shrink-0" style={{ fontSize: 'clamp(24px, 2.6vw, 40px)' }}>
            Flywheel Holder-Gated
          </h2>
          <ul className="flex flex-col gap-2">
            {steps.map(({ title, desc }, i) => (
              <li key={i} className="flex gap-2.5 items-start py-1.5 border-b border-white/5 last:border-0">
                <span
                  className="text-lime font-bold shrink-0 rounded-full w-5 h-5 flex items-center justify-center text-xs"
                  style={{ background: 'rgba(210,255,85,0.15)' }}
                >
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <span className="text-lime font-semibold" style={{ fontSize: 'clamp(14px, 1.3vw, 18px)' }}>{title}.</span>
                  <span className="text-white/85 ml-1 leading-relaxed" style={{ fontSize: 'clamp(14px, 1.3vw, 18px)' }}>{desc}</span>
                </div>
              </li>
            ))}
          </ul>
          <div
            className="rounded-lg p-3 shrink-0 bg-white/5 border border-[rgba(210,255,85,0.25)]"
            style={{ fontSize: 'clamp(14px, 1.3vw, 18px)' }}
          >
            <span className="font-semibold text-lime">Nguyên tắc:</span>
            <span className="text-white/90 ml-1">
              {' '}
              Public tier phải thực sự hữu ích — không cắt xén ép upgrade.
            </span>
          </div>
        </div>
        <div className="hidden lg:block w-1/2 shrink-0 rounded-xl overflow-hidden">
          <img
            src="https://media.istockphoto.com/id/1170113588/vector/ui-hud-screen-tech-system-innovation-concept-background-template-vector-illustration.jpg?s=612x612&w=0&k=20&c=MzLhuMTVjinE8VVXW0F_vp1J0PoHY_8R6qs22IC9vyA="
            alt="Tech HUD system innovation"
            className="w-full h-full object-cover"
          />
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
      <div className="flex flex-col gap-3 flex-1 min-h-0 rounded-xl p-6 overflow-auto">
        <h2 className="text-white font-bold shrink-0" style={{ fontSize: 'clamp(28px, 3vw, 48px)' }}>
          Phân bổ ngân sách — $10.000
        </h2>
        <div className="glass flex-1 min-h-0 overflow-auto rounded-lg p-4">
          <table className="w-full" style={{ fontSize: 'clamp(15px, 1.4vw, 22px)' }}>
            <thead>
              <tr className="text-left border-b" style={{ color: lime, background: 'rgba(210,255,85,0.12)', borderColor: 'rgba(210,255,85,0.35)' }}>
                <th className="pl-4 py-3 pr-4 font-semibold">Kênh</th>
                <th className="py-3 pr-4 font-semibold">Loại</th>
                <th className="py-3 pr-4 font-semibold">Budget</th>
                <th className="py-3 pr-4 font-semibold">Est. Signups</th>
                <th className="py-3 font-semibold">CAC</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className={`border-b border-white/5 ${i === 5 ? 'bg-white/[0.03]' : ''}`}>
                  <td className="py-3 pr-4 pl-4 text-white/90 font-medium">{r.channel}</td>
                  <td className="py-3 pr-4 text-white/80">{r.type}</td>
                  <td className="py-3 pr-4 text-white/80">{r.budget}</td>
                  <td className="py-3 pr-4 text-white/80">{r.signups}</td>
                  <td className="py-3 pr-4 text-white/80">{r.cac}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-lime font-semibold shrink-0 pt-1" style={{ fontSize: 'clamp(18px, 1.6vw, 24px)' }}>
          Tổng: $10.000 → ~955 signups · Blended CAC $10.47
        </p>
      </div>
    </ContentSlideLayout>
  )
}

/** Slide 13 — 5 kênh acquisition chi tiết */
const slide13Channels = [
  { icon: <Megaphone size={20} strokeWidth={2} />, title: 'Twitter Ads', desc: 'Target @PancakeSwap, @lookonchain, @ai16zdao; CPC $1, CVR 2%' },
  { icon: <Users size={20} strokeWidth={2} />, title: 'Telegram', desc: 'BSCSignalsOfficial (120K), BSCArmyCalls (80K); intent cao, CVR 5%' },
  { icon: <Zap size={20} strokeWidth={2} />, title: 'Social Stream', desc: '6 skill output tự động post; @ClawFriendBot 3 scan free/ngày' },
  { icon: <BarChart3 size={20} strokeWidth={2} />, title: 'Content', desc: 'BinanceSquare + X thread; r/CryptoMoonShots, r/defi seeding' },
  { icon: <Gift size={20} strokeWidth={2} />, title: 'Partnership', desc: 'OpenClaw builders, GoPlus, Referral $10 BNB/signup' },
]

export function Slide13() {
  return (
    <ContentSlideLayout videoIndex={0} pageLabel="Trang 013" footer="Section 3 — Distribution Plan">
      <div className="flex flex-col gap-3 flex-1 min-h-0 rounded-xl p-4 sm:p-5">
        <h2 className="text-white font-bold shrink-0" style={{ fontSize: 'clamp(24px, 2.6vw, 42px)' }}>
          5 kênh acquisition chi tiết
        </h2>
        <div className="flex flex-col gap-2 overflow-auto">
          {slide13Channels.map(({ icon, title, desc }, i) => (
            <div key={i} className="glass rounded-lg p-3 flex gap-3">
              <span className="shrink-0 mt-0.5" style={{ color: lime }}>{icon}</span>
              <div className="min-w-0">
                <p className="font-semibold text-white" style={{ fontSize: 'clamp(15px, 1.4vw, 20px)' }}>{title}</p>
                <p className="text-white/75 leading-snug" style={{ fontSize: 'clamp(14px, 1.25vw, 18px)' }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ContentSlideLayout>
  )
}

/** Slide 14 — Unit economics — Trả lời BGK */
export function Slide14() {
  const rows = [
    { line: '$4K Twitter', calc: '4K clicks → CVR 2% = 80 signups' },
    { line: '$3.5K Telegram', calc: '430K reach → CTR 1.5% → CVR 5% = 325 signups' },
    { line: '$0 Organic (Bot+Social)', calc: '~200 signups' },
    { line: '$0 Content/Community', calc: '~200 signups' },
    { line: '$2K Referral', calc: '$10 BNB/signup = 150+ signups' },
  ]

  return (
    <ContentSlideLayout videoIndex={1} pageLabel="Trang 014" footer="Section 3 — Distribution Plan">
      <div className="flex flex-col gap-3 flex-1 min-h-0 rounded-xl p-4 sm:p-5 overflow-auto">
        <h2 className="text-white font-bold text-center shrink-0" style={{ fontSize: 'clamp(26px, 2.9vw, 48px)' }}>
          "$10K có đủ 1.000 user không?"
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 flex-1 min-h-0">
          {/* Cột trái 50% */}
          <div className="flex flex-col gap-3 min-w-0">
            <div className="shrink-0">
              <span className="text-lime font-bold" style={{ fontSize: 'clamp(42px, 4.6vw, 74px)' }}>955</span>
              <p className="text-white/70 uppercase tracking-wider mt-0.5" style={{ fontSize: 'clamp(13px, 1.2vw, 17px)' }}>Est. Signups</p>
            </div>
            <hr className="border-t border-white/20 my-1" />
            <p className="text-white/90 font-medium shrink-0" style={{ fontSize: 'clamp(15px, 1.4vw, 20px)' }}>
              Unit Economics Conservative
            </p>
            <div className="flex-1 min-h-0" />
            <p className="text-lime font-semibold shrink-0 pt-2" style={{ fontSize: 'clamp(15px, 1.4vw, 20px)' }}>
              Blended CAC = $10.47. Không tính viral.
            </p>
          </div>

          {/* Cột phải 50% */}
          <div className="glass rounded-lg p-4 flex flex-col gap-2 min-h-0 overflow-auto">
            {rows.map((r, i) => (
              <div key={i} className="border-b border-white/5 pb-2 last:border-0 last:pb-0">
                <p className="text-white font-medium" style={{ fontSize: 'clamp(16px, 1.5vw, 22px)' }}>{r.line}</p>
                <p className="text-white/80 mt-0.5" style={{ fontSize: 'clamp(13px, 1.2vw, 17px)' }}>{r.calc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ContentSlideLayout>
  )
}

/** Slide 15 — Timeline tháng 1 — Tuần 1 */
export function Slide15() {
  const preLaunch = [
    'Setup Twitter, Telegram, UTM',
    'DM 5 anchor creators + top 20 OpenClaw builders',
    'Apply BNB Chain MVB, contact GoPlus',
  ]
  const week1 = [
    'Launch Twitter Ads variant A (video demo Skill #2)',
    'Book BSCSignalsOfficial + BSCArmyCalls',
    'Publish BinanceSquare #1 + X thread #1',
    'Deploy @ClawFriendBot',
  ]

  return (
    <ContentSlideLayout videoIndex={2} pageLabel="Trang 015" footer="Section 3 — Distribution Plan">
      <div className="flex flex-col gap-3 flex-1 min-h-0 rounded-xl p-4 sm:p-5 overflow-auto">
        <h2 className="text-white font-bold shrink-0" style={{ fontSize: 'clamp(24px, 2.6vw, 42px)' }}>
          Timeline tháng 1 — Tuần 1
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="glass rounded-lg p-3">
            <h3 className="text-lime font-semibold mb-2" style={{ fontSize: 'clamp(15px, 1.4vw, 20px)' }}>
              Ngày 1–2 (Pre-launch)
            </h3>
            <ul className="space-y-1.5">
              {preLaunch.map((item, i) => (
                <li key={i} className="flex gap-2 items-start">
                  <span className="text-lime shrink-0">•</span>
                  <span className="text-white/85" style={{ fontSize: 'clamp(14px, 1.25vw, 18px)' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="glass rounded-lg p-3">
            <h3 className="text-lime font-semibold mb-2" style={{ fontSize: 'clamp(15px, 1.4vw, 20px)' }}>
              Tuần 1
            </h3>
            <ul className="space-y-1.5">
              {week1.map((item, i) => (
                <li key={i} className="flex gap-2 items-start">
                  <span className="text-lime shrink-0">•</span>
                  <span className="text-white/85" style={{ fontSize: 'clamp(14px, 1.25vw, 18px)' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </ContentSlideLayout>
  )
}

/** Slide 16 — Timeline tháng 1 — Scale & Optimize (bubble, alternate above/below) */
export function Slide16() {
  const bubbles = [
    { week: 'Tuần 1', phase: 'Launch', content: 'Ads, Telegram booking, deploy Bot, Content seeding.' },
    { week: 'Tuần 2', phase: 'Optimize', content: 'Pause ad kém, scale ad thắng. Launch BSCWhalePumps & Post Rug Pull Case.' },
    { week: 'Tuần 3', phase: 'Scale & PR', content: 'Tăng 50% budget. 2+ anchor creators publish skill, tung chiến dịch PR GoPlus.' },
    { week: 'Tuần 4', phase: 'Review', content: 'Đánh giá metrics. Publish "30 ngày dữ liệu thực". Activate Referral bounty.' },
  ]
  const positions = ['bottom', 'top', 'bottom', 'top'] as const

  return (
    <ContentSlideLayout videoIndex={3} pageLabel="Trang 016" footer="Section 3 — Distribution Plan">
      <div className="flex flex-col flex-1 min-h-0 rounded-xl p-4 sm:p-5 overflow-x-hidden overflow-y-auto">
        <h2 className="text-white font-bold shrink-0 mb-4" style={{ fontSize: 'clamp(24px, 2.6vw, 42px)' }}>
          Timeline tháng 1 — Scale & Optimize
        </h2>
        <div className="relative flex-1 min-h-[280px] sm:min-h-[320px] overflow-x-hidden">
          {/* Rail line */}
          <div className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 rounded-full" style={{ background: 'rgba(210,255,85,0.4)' }} />
          {bubbles.map(({ week, phase, content }, i) => {
            const isTop = positions[i] === 'top'
            const leftPct = 15 + (i / (bubbles.length - 1)) * 70
            return (
              <div
                key={i}
                className="absolute flex flex-col items-center -translate-x-1/2"
                style={{ left: `${leftPct}%`, top: '50%' }}
              >
                {/* Dot */}
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center font-bold z-10 shrink-0"
                  style={{ background: 'rgba(210,255,85,0.95)', color: '#0a0e12', fontSize: 12 }}
                >
                  {i + 1}
                </div>
                {/* Bubble */}
                <div
                  className="glass absolute w-[clamp(110px,16vw,165px)] rounded-2xl p-3 flex flex-col gap-1.5 border-[rgba(210,255,85,0.25)]"
                  style={isTop ? { bottom: '100%', marginBottom: 12 } : { top: '100%', marginTop: 12 }}
                >
                  <div className="flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0" style={{ background: 'rgba(210,255,85,0.9)', color: '#0a0e12' }}>{i + 1}</span>
                    <span className="text-white/90 font-semibold" style={{ fontSize: 'clamp(13px, 1.2vw, 17px)' }}>{week}</span>
                  </div>
                  <h3 className="text-lime font-bold" style={{ fontSize: 'clamp(16px, 1.5vw, 22px)' }}>{phase}</h3>
                  <p className="text-white/85 leading-snug" style={{ fontSize: 'clamp(12px, 1.1vw, 15px)' }}>{content}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </ContentSlideLayout>
  )
}

/** Slide 17 — Anchor Creator Recruitment */
export function Slide17() {
  const profiles = [
    { desc: 'Operator t.me/BSCSignalsOfficial (120K)', note: 'đang curation miễn phí' },
    { desc: 'BSC whale tracker Twitter 50K–200K followers', note: '' },
    { desc: 'DeFi dev đang build tool BSC', note: '' },
  ]
  const incentives = [
    'Platform rebate 5% protocol fee 3 tháng',
    'Founding Creator badge',
    'Featured placement',
  ]

  return (
    <ContentSlideLayout videoIndex={4} pageLabel="Trang 017" footer="Section 3 — Distribution Plan">
      <div className="flex flex-col gap-3 flex-1 min-h-0 rounded-xl p-4 sm:p-5">
        <div className="shrink-0">
          <h2 className="text-white font-bold" style={{ fontSize: 'clamp(24px, 2.6vw, 42px)' }}>
            Anchor Creator Recruitment
          </h2>
          <p className="text-white/80 mt-0.5" style={{ fontSize: 'clamp(16px, 1.5vw, 22px)' }}>
            5 creators × 20K followers = 100K potential, $0 CAC
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="glass rounded-lg p-3">
            <h3 className="text-lime font-semibold mb-2" style={{ fontSize: 'clamp(15px, 1.4vw, 20px)' }}>
              Profile lý tưởng
            </h3>
            <ul className="space-y-1.5">
              {profiles.map((p, i) => (
                <li key={i} className="flex flex-col gap-0.5">
                  <span className="text-white/90" style={{ fontSize: 'clamp(14px, 1.25vw, 18px)' }}>{p.desc}</span>
                  {p.note && <span className="text-white/55" style={{ fontSize: 'clamp(12px, 1.1vw, 15px)' }}>{p.note}</span>}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass rounded-lg p-3 border border-[rgba(210,255,85,0.35)]">
            <h3 className="text-lime font-semibold mb-2" style={{ fontSize: 'clamp(15px, 1.4vw, 20px)' }}>
              Incentive
            </h3>
            <ul className="space-y-1.5">
              {incentives.map((item, i) => (
                <li key={i} className="flex gap-2 items-start">
                  <span className="text-lime shrink-0">✓</span>
                  <span className="text-white/85" style={{ fontSize: 'clamp(14px, 1.25vw, 18px)' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </ContentSlideLayout>
  )
}

/** Slide 18 — Metrics Dashboard — Target tháng 1 */
export function Slide18() {
  const cardClass = 'glass rounded-lg p-5 flex flex-col gap-3 items-center text-center border border-white/5'
  const kpiClass = 'text-white/65'
  const targetClass = 'text-lime font-bold'
  const sz = {
    title: 'clamp(30px, 3.2vw, 50px)',
    target: 'clamp(30px, 2.8vw, 44px)',
    kpi: 'clamp(21px, 2.1vw, 30px)',
    desc: 'clamp(16px, 1.6vw, 24px)',
    footer: 'clamp(16px, 1.5vw, 21px)',
  }

  return (
    <ContentSlideLayout videoIndex={5} pageLabel="Trang 018" footer="Section 3 — Distribution Plan">
      <div className="flex flex-col gap-4 min-h-0 rounded-xl p-4 sm:p-5">
        <h2 className="text-white font-bold shrink-0" style={{ fontSize: sz.title }}>
          Metrics Dashboard — Target Tháng 1
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 min-h-0">
          {/* Cột 1: Mục tiêu chính */}
          <div className={cardClass}>
            <Users className="text-lime shrink-0" size={36} strokeWidth={1.5} />
            <span className={targetClass} style={{ fontSize: sz.target }}>~955</span>
            <span className={kpiClass} style={{ fontSize: sz.kpi }}>Total Signups</span>
            <span className="text-white/50" style={{ fontSize: sz.desc }}>Mục tiêu chính từ $10K Budget</span>
          </div>
          {/* Cột 2: CAC */}
          <div className={cardClass}>
            <DollarSign className="text-lime shrink-0" size={36} strokeWidth={1.5} />
            <span className={targetClass} style={{ fontSize: sz.target }}>≤$20</span>
            <span className={kpiClass} style={{ fontSize: sz.kpi }}>Paid CAC</span>
            <span className="text-white/50" style={{ fontSize: sz.desc }}>Duy trì chi phí trên các kênh Paid Ads</span>
          </div>
          {/* Cột 3: Skill & Creators */}
          <div className={cardClass}>
            <Download className="text-lime shrink-0" size={36} strokeWidth={1.5} />
            <span className={targetClass} style={{ fontSize: sz.target }}>500+</span>
            <span className={kpiClass} style={{ fontSize: sz.kpi }}>Skill Installs</span>
            <span className="text-white/80" style={{ fontSize: sz.desc }}>20+ Creators / 1.000+ Bot Users</span>
          </div>
        </div>
        <p className="text-white/50 italic text-center shrink-0 mt-auto pt-2" style={{ fontSize: sz.footer }}>
          * Target 400+ Organic signups & 2.000+ Twitter Followers.
        </p>
      </div>
    </ContentSlideLayout>
  )
}

/** Slide 20 — AI Showcase: Công cụ & Pipeline */
export function Slide20AIShowcase() {
  const tools = [
    { icon: <Bot size={24} strokeWidth={2} />, name: 'Claude (Sonnet 4.6)', role: 'Tư duy chiến lược, thiết kế framework, tổng hợp insight' },
    { icon: <Search size={24} strokeWidth={2} />, name: 'Perplexity', role: 'Web search có nguồn — data thực, không hallucinate' },
  ]
  const pipeline = ['Claude thiết kế framework', 'Perplexity search theo prompt', 'Claude tổng hợp deliverable']

  return (
    <ContentSlideLayout videoIndex={4} pageLabel="Phụ lục — AI Showcase" footer="ai-showcase/README.md">
      <div className="flex flex-col gap-4 flex-1 rounded-xl p-6">
        <h2 className="text-white font-bold shrink-0" style={{ fontSize: 'clamp(28px, 3vw, 48px)' }}>
          <span className="inline-flex items-center gap-2">
            <Sparkles className="text-lime" size={32} strokeWidth={2} />
            AI Research Workflow
          </span>
        </h2>
        <p className="text-white/80 shrink-0" style={{ fontSize: 'clamp(17px, 1.6vw, 24px)' }}>
          Dùng AI để <strong className="text-white">tư duy có hệ thống</strong>, không phải hỏi và copy.
        </p>
        <div className="grid grid-cols-2 gap-4 flex-1 min-h-0">
          <div className="glass rounded-lg p-4 flex flex-col gap-3">
            <h3 className="text-lime font-semibold" style={{ fontSize: 'clamp(18px, 1.6vw, 24px)' }}>Công cụ</h3>
            {tools.map((t, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="shrink-0 mt-0.5" style={{ color: lime }}>{t.icon}</span>
                <div>
                  <p className="text-white font-medium" style={{ fontSize: 'clamp(15px, 1.4vw, 20px)' }}>{t.name}</p>
                  <p className="text-white/75 text-sm leading-snug">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="glass rounded-lg p-4 flex flex-col gap-3">
            <h3 className="text-lime font-semibold" style={{ fontSize: 'clamp(18px, 1.6vw, 24px)' }}>Pipeline</h3>
            <div className="flex items-center gap-2 flex-wrap">
              {pipeline.map((step, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  <span
                    className="px-2.5 py-1 rounded-lg bg-white/5 border border-[rgba(210,255,85,0.3)] font-medium"
                    style={{ fontSize: 'clamp(14px, 1.3vw, 18px)', color: lime }}
                  >
                    {step}
                  </span>
                  {i < pipeline.length - 1 && <span className="text-white/40">→</span>}
                </span>
              ))}
            </div>
            <p className="text-white/60 text-sm mt-auto">
              Claude viết prompt → Perplexity execute → Claude synthesize
            </p>
          </div>
        </div>
      </div>
    </ContentSlideLayout>
  )
}

/** Slide 21 — AI Showcase: Research Flow */
export function Slide21AIShowcase() {
  const flows = [
    { phase: 'Phase 1', desc: '4 prompt theo module (Skill, Bonding Curve, Social, BSC)' },
    { phase: 'Phase 2', desc: 'Deep dive 5 đối thủ — business model mechanics' },
    { phase: 'Skill Research', desc: '7 prompt theo pain point cluster' },
  ]
  const findings = [
    { platform: 'Cooker.club', note: 'BSC, bonding curve, creator 0% fee → stalled' },
    { platform: 'Moltbook', note: '1M+ agents, OpenClaw, zero economic layer' },
    { platform: 'GPT Store', note: '99% creators earn $0 — validate ClawFriend model' },
  ]

  return (
    <ContentSlideLayout videoIndex={5} pageLabel="Phụ lục — AI Showcase" footer="ai-showcase/README.md">
      <div className="flex flex-col gap-4 flex-1 rounded-xl p-6 overflow-auto">
        <h2 className="text-white font-bold shrink-0" style={{ fontSize: 'clamp(24px, 2.6vw, 40px)' }}>
          Research Flow & Findings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1 min-h-0">
          <div className="glass rounded-lg p-4">
            <h3 className="text-lime font-semibold mb-2" style={{ fontSize: 'clamp(16px, 1.5vw, 22px)' }}>Flow</h3>
            <ul className="space-y-2">
              {flows.map((f, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-lime font-bold shrink-0">{i + 1}.</span>
                  <div>
                    <span className="text-white font-medium">{f.phase}</span>
                    <span className="text-white/80"> — {f.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="glass rounded-lg p-4">
            <h3 className="text-lime font-semibold mb-2" style={{ fontSize: 'clamp(16px, 1.5vw, 22px)' }}>Key findings</h3>
            <ul className="space-y-2">
              {findings.map((f, i) => (
                <li key={i} className="flex flex-col gap-0.5">
                  <span className="text-white font-medium">{f.platform}</span>
                  <span className="text-white/75 text-sm">{f.note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </ContentSlideLayout>
  )
}

/** Slide 22 — AI Showcase: Nguyên tắc prompting */
export function Slide22AIShowcase() {
  const principles = [
    { bad: 'Find competitors of ClawFriend', good: 'I\'m building a platform where creators earn 5% perpetual fee...' },
    { rule: 'Claude viết prompt → Perplexity execute', note: 'Không dùng Claude search trực tiếp' },
    { rule: 'Phase: Discovery trước, Deep dive sau', note: 'Tránh bỏ sót đối thủ như Cooker.club' },
    { rule: 'Verify số liệu nhạy cảm', note: 'Cross-check nhiều nguồn, tool verify (Cooker.club down)' },
    { rule: 'CLAUDE.md = project collaborator có memory', note: 'Không cần prompt context mỗi lần' },
  ]

  return (
    <ContentSlideLayout videoIndex={0} pageLabel="Phụ lục — AI Showcase" footer="ai-showcase/README.md">
      <div className="flex flex-col gap-4 flex-1 rounded-xl p-6 overflow-auto">
        <h2 className="text-white font-bold shrink-0" style={{ fontSize: 'clamp(24px, 2.6vw, 40px)' }}>
          Nguyên tắc prompting hiệu quả
        </h2>
        <div className="glass rounded-lg p-4 flex flex-col gap-3 flex-1 min-h-0 overflow-auto">
          <div className="flex flex-col gap-2 border-b border-white/10 pb-3">
            <p className="text-white/60 text-sm font-semibold uppercase">Prompt theo vấn đề, không theo tên</p>
            <div className="flex flex-col gap-1.5">
              <p className="text-red-400/90 text-sm">❌ {principles[0].bad}</p>
              <p className="text-lime text-sm">✅ {principles[0].good}</p>
            </div>
          </div>
          {principles.slice(1).map((p, i) => (
            <div key={i} className="flex flex-col gap-0.5">
              <span className="text-lime font-medium" style={{ fontSize: 'clamp(14px, 1.3vw, 18px)' }}>{p.rule}</span>
              <span className="text-white/70 text-sm">{p.note}</span>
            </div>
          ))}
        </div>
        <p className="text-white/50 shrink-0 text-sm flex items-center gap-2">
          <FileText size={14} />
          Chi tiết: ai-showcase/README.md
        </p>
      </div>
    </ContentSlideLayout>
  )
}
