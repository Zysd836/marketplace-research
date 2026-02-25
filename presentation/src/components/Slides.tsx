/**
 * Content slides 1–28 — presentation-content/slide-content.md
 * Layout: flex-1/h-full grids · p-4/p-5 fixed card padding · gap-3/4
 * Visual: Bar charts · color-coded sections · data-first design
 */
import { ContentSlideLayout } from './ContentSlideLayout'

const lime = '#d2ff55'
const limeAlpha = (a: number) => `rgba(210,255,85,${a})`
const whiteAlpha = (a: number) => `rgba(255,255,255,${a})`

// ── Primitives ───────────────────────────────────────────────────────────────

function Badge({ children, accent = false }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <span
      className="inline-block rounded-full px-2.5 py-0.5 font-semibold"
      style={{
        fontSize: 'clamp(9px, 0.72vw, 11px)',
        background: accent ? limeAlpha(0.15) : whiteAlpha(0.1),
        border: `1px solid ${accent ? limeAlpha(0.4) : whiteAlpha(0.15)}`,
        color: accent ? lime : whiteAlpha(0.8),
      }}
    >
      {children}
    </span>
  )
}

// Horizontal progress bar for data viz
function Bar({ pct, thin = false }: { pct: number; thin?: boolean }) {
  return (
    <div
      className="w-full rounded-full overflow-hidden"
      style={{ height: thin ? 4 : 6, background: whiteAlpha(0.08) }}
    >
      <div
        className="h-full rounded-full"
        style={{ width: `${Math.min(pct, 100)}%`, background: lime }}
      />
    </div>
  )
}

// Small all-caps section label
function Cap({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="font-semibold uppercase tracking-widest"
      style={{ fontSize: 'clamp(8px, 0.65vw, 10px)', color: whiteAlpha(0.38) }}
    >
      {children}
    </p>
  )
}

// Large stat number
function BigNum({
  value,
  label,
  accent = false,
}: {
  value: string
  label: string
  accent?: boolean
}) {
  return (
    <div className="glass rounded-xl p-5 flex flex-col gap-2 flex-1 justify-between">
      <span
        className="font-bold leading-none"
        style={{ fontSize: 'clamp(26px, 3.2vw, 58px)', color: accent ? lime : 'white' }}
      >
        {value}
      </span>
      <span style={{ fontSize: 'clamp(9px, 0.82vw, 13px)', color: whiteAlpha(0.5) }}>
        {label}
      </span>
    </div>
  )
}

// JOIN/LEAVE labeled block inside a card
function JoinLeave({ join, leave }: { join: string; leave: string }) {
  return (
    <div className="flex flex-col gap-2 flex-1">
      <div className="rounded-lg p-3 flex flex-col gap-1" style={{ background: limeAlpha(0.07), border: `1px solid ${limeAlpha(0.18)}` }}>
        <span className="font-bold" style={{ fontSize: 'clamp(8px, 0.65vw, 10px)', color: lime }}>
          JOIN
        </span>
        <p className="text-white/75 leading-snug" style={{ fontSize: 'clamp(10px, 0.9vw, 13px)' }}>
          {join}
        </p>
      </div>
      <div className="rounded-lg p-3 flex flex-col gap-1" style={{ background: whiteAlpha(0.04), border: `1px solid ${whiteAlpha(0.08)}` }}>
        <span className="font-bold" style={{ fontSize: 'clamp(8px, 0.65vw, 10px)', color: whiteAlpha(0.38) }}>
          LEAVE
        </span>
        <p className="leading-snug" style={{ fontSize: 'clamp(10px, 0.9vw, 13px)', color: whiteAlpha(0.45) }}>
          {leave}
        </p>
      </div>
    </div>
  )
}

// ── SECTION 1 — COMPETITIVE LANDSCAPE ───────────────────────────────────────

/** Slide 1 — JOIN/LEAVE 4 competitors */
export function Slide1() {
  const competitors = [
    {
      name: 'Virtuals Protocol',
      join: 'AI token narrative 2024 · trade agent · economic upside ban đầu',
      leave: 'Daily revenue -97% sau peak · thiếu skill utility giữ chân',
    },
    {
      name: 'friend.tech',
      join: 'FOMO KOL + invite-only beta · bonding curve · peak $19.67M/tháng',
      leave: 'Volume -99% sau 3 tháng · không có utility ngoài chat room',
    },
    {
      name: 'GPT Store',
      join: 'OpenAI distribution · 100M+ ChatGPT users sẵn có',
      leave: 'Revenue share mờ nhạt · creator payout rất thấp',
    },
    {
      name: 'Moltbook',
      join: 'Dễ tạo AI agent không cần code · ProductHunt audience',
      leave: 'Không có economic layer hoặc bonding curve upside',
    },
  ]

  return (
    <ContentSlideLayout
      videoIndex={0}
      pageLabel="Trang 001"
      title="Không ai combine Bonding Curve + Skill Marketplace + Autonomous Agent"
      footer="Section 1 of 3 — Competitive Landscape"
    >
      <div className="grid grid-cols-2 grid-rows-2 gap-3 flex-1">
        {competitors.map(({ name, join, leave }) => (
          <div key={name} className="liquid-glass rounded-xl p-5 flex flex-col gap-3">
            <div className="relative z-[1] flex flex-col gap-3 h-full">
              <p className="font-bold text-white" style={{ fontSize: 'clamp(13px, 1.2vw, 18px)' }}>
                {name}
              </p>
              <JoinLeave join={join} leave={leave} />
            </div>
          </div>
        ))}
      </div>
    </ContentSlideLayout>
  )
}

/** Slide 2 — Speculation → volume collapse */
export function Slide2() {
  return (
    <ContentSlideLayout
      videoIndex={1}
      pageLabel="Trang 002"
      title="User join vì speculation — leave vì không có utility giữ giá"
      footer="friend.tech & Virtuals post-mortem"
    >
      <div className="flex flex-col gap-3 flex-1">
        {/* Big stats row */}
        <div className="flex gap-3" style={{ flex: '0 0 auto' }}>
          <BigNum value="$19.67M" label="friend.tech peak revenue / tháng" />
          <BigNum value="-99%" label="Volume sau 3 tháng (DefiLlama)" accent />
          <BigNum value="-97%" label="Virtuals daily revenue sau peak" accent />
        </div>

        {/* Context + insight — fills remaining height */}
        <div className="flex gap-3 flex-1 min-h-0">
          <div className="glass rounded-xl p-4 flex flex-col gap-3 flex-1">
            <Cap>Reddit về friend.tech</Cap>
            <p
              className="italic flex-1"
              style={{ fontSize: 'clamp(11px, 1.05vw, 16px)', color: whiteAlpha(0.65) }}
            >
              "pure speculation" · "no real use-case" · "feels like a casino"
            </p>
            <div
              className="rounded-lg p-3"
              style={{ background: limeAlpha(0.06), border: `1px solid ${limeAlpha(0.15)}` }}
            >
              <p style={{ fontSize: 'clamp(10px, 0.9vw, 14px)', color: whiteAlpha(0.8) }}>
                <span className="font-semibold text-white">Switch trigger: </span>
                Creator cần thu nhập ổn định, không phụ thuộc hype cycle
              </p>
            </div>
          </div>

          <div className="glass rounded-xl p-4 flex flex-col gap-3 flex-1">
            <Cap>Vòng lặp thất bại</Cap>
            {[
              'Volume giảm → giá share giảm',
              'Giá giảm → creator income = 0',
              'Creator income = 0 → creator rời platform',
              'Creator rời → skill xấu → user rời',
            ].map((step, i) => (
              <div key={step} className="flex gap-2.5 items-start">
                <span
                  className="rounded-full w-5 h-5 flex items-center justify-center shrink-0 font-bold"
                  style={{
                    fontSize: '10px',
                    background: whiteAlpha(0.08),
                    color: whiteAlpha(0.45),
                    marginTop: 1,
                  }}
                >
                  {i + 1}
                </span>
                <span style={{ fontSize: 'clamp(10px, 0.92vw, 14px)', color: whiteAlpha(0.68) }}>
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ContentSlideLayout>
  )
}

/** Slide 3 — AI Agent Builders: no monetization layer */
export function Slide3() {
  return (
    <ContentSlideLayout
      videoIndex={2}
      pageLabel="Trang 003"
      title="AI Agent Builders có skill — nhưng không có monetization layer"
      footer="Khoảng trống: Builder cần economic layer"
    >
      <div className="flex flex-col gap-3 flex-1">
        {/* 3 feature cards */}
        <div className="flex gap-3" style={{ flex: '0 0 auto' }}>
          {[
            { label: 'Publish agent', value: 'Free', sub: 'OpenClaw / ElizaOS — no cost', ok: false },
            { label: 'Bonding curve', value: '✗', sub: 'Không upside khi agent nổi tiếng', ok: false },
            { label: 'Holder access', value: '✗', sub: 'Không có recurring incentive', ok: false },
          ].map(({ label, value, sub }) => (
            <div key={label} className="glass rounded-xl p-4 flex flex-col gap-2 flex-1">
              <Cap>{label}</Cap>
              <span
                className="font-bold"
                style={{ fontSize: 'clamp(24px, 2.8vw, 48px)', color: whiteAlpha(0.85) }}
              >
                {value}
              </span>
              <span style={{ fontSize: 'clamp(9px, 0.82vw, 13px)', color: whiteAlpha(0.45) }}>
                {sub}
              </span>
            </div>
          ))}
        </div>

        {/* Current state vs ClawFriend */}
        <div className="flex gap-3 flex-1 min-h-0">
          <div className="glass rounded-xl p-4 flex flex-col gap-2 flex-1">
            <Cap>Monetization hiện tại của builder</Cap>
            <div className="flex-1 flex flex-col gap-2 justify-center">
              {['Donate / tip từ followers', 'Không có gì', 'Grant từ ecosystem fund (hiếm)'].map(
                (item) => (
                  <div key={item} className="flex gap-2 items-center">
                    <span style={{ fontSize: 12, color: whiteAlpha(0.3) }}>·</span>
                    <span style={{ fontSize: 'clamp(10px, 0.92vw, 14px)', color: whiteAlpha(0.55) }}>
                      {item}
                    </span>
                  </div>
                ),
              )}
            </div>
          </div>

          <div
            className="liquid-glass rounded-xl p-4 flex flex-col gap-3 flex-1"
            style={{ border: `1px solid ${limeAlpha(0.25)}` }}
          >
            <div className="relative z-[1] flex flex-col gap-3 h-full">
              <Cap>ClawFriend model</Cap>
              <div className="flex-1 flex flex-col gap-2.5 justify-center">
                {[
                  ['Publish skill', 'Instant bonding curve'],
                  ['5% perpetually', 'Mỗi trade — mãi mãi'],
                  ['Holder-gated', 'Recurring access incentive'],
                ].map(([title, desc]) => (
                  <div key={title} className="flex justify-between items-center gap-3">
                    <span
                      className="font-semibold"
                      style={{ fontSize: 'clamp(10px, 0.92vw, 14px)', color: lime }}
                    >
                      {title}
                    </span>
                    <span
                      style={{ fontSize: 'clamp(10px, 0.88vw, 13px)', color: whiteAlpha(0.65) }}
                    >
                      {desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentSlideLayout>
  )
}

/** Slide 4 — Paid analytics: paying users, no creator upside */
export function Slide4() {
  return (
    <ContentSlideLayout
      videoIndex={3}
      pageLabel="Trang 004"
      title="Paid analytics có paying users — tool owner không share upside"
      footer="Insight: Thay subscription bằng share ownership"
    >
      <div className="flex flex-col gap-3 flex-1">
        <div className="flex gap-3" style={{ flex: '0 0 auto' }}>
          <BigNum value="$99–$999" label="Nansen subscription / month" />
          <BigNum value="~$50" label="Arkham paid tier / month" />
          <BigNum value="$100–200" label="Retail BSC trader chi / tháng" />
        </div>

        <div className="flex gap-3 flex-1 min-h-0">
          <div className="glass rounded-xl p-4 flex flex-col gap-3 flex-1">
            <Cap>User đang trả tiền thật</Cap>
            {[
              { tool: 'Nansen', price: '$150/mo', use: 'Whale tracking, smart money alerts' },
              { tool: 'Arkham', price: '~$50/mo', use: 'Entity labeling, transfer tracking' },
              { tool: 'Dexscreener', price: 'Free', use: 'Token pairs, volume data' },
              { tool: 'Token Sniffer', price: 'Free tier', use: 'Rug check, contract audit' },
            ].map(({ tool, price, use }) => (
              <div
                key={tool}
                className="flex items-center gap-3 rounded-lg p-3"
                style={{ background: whiteAlpha(0.04) }}
              >
                <span
                  className="font-semibold text-white w-24 shrink-0"
                  style={{ fontSize: 'clamp(10px, 0.92vw, 14px)' }}
                >
                  {tool}
                </span>
                <span
                  className="font-bold shrink-0"
                  style={{ fontSize: 'clamp(10px, 0.92vw, 14px)', color: lime }}
                >
                  {price}
                </span>
                <span
                  className="flex-1"
                  style={{ fontSize: 'clamp(9px, 0.82vw, 13px)', color: whiteAlpha(0.5) }}
                >
                  {use}
                </span>
              </div>
            ))}
          </div>

          <div
            className="liquid-glass rounded-xl p-4 flex flex-col gap-3 flex-1"
            style={{ border: `1px solid ${limeAlpha(0.22)}` }}
          >
            <div className="relative z-[1] flex flex-col gap-3 h-full">
              <Cap>Gap: không ai share upside</Cap>
              <div className="flex-1 flex flex-col gap-2.5 justify-center">
                {[
                  'Trả $150/mo → không có ownership khi Nansen grow',
                  'Tool owner giữ 100% value tạo ra bởi community',
                  'Không có flywheel giữa user và creator',
                ].map((item) => (
                  <div key={item} className="flex gap-2 items-start">
                    <span style={{ color: lime, marginTop: 2, flexShrink: 0 }}>→</span>
                    <span style={{ fontSize: 'clamp(10px, 0.92vw, 14px)', color: whiteAlpha(0.72) }}>
                      {item}
                    </span>
                  </div>
                ))}
                <div
                  className="rounded-lg p-3 mt-2"
                  style={{ background: limeAlpha(0.07), border: `1px solid ${limeAlpha(0.18)}` }}
                >
                  <p style={{ fontSize: 'clamp(10px, 0.9vw, 14px)', color: whiteAlpha(0.85) }}>
                    <span style={{ color: lime }} className="font-semibold">ClawFriend: </span>
                    Hold shares thay vì pay subscription — dùng nhiều hơn không tốn thêm
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentSlideLayout>
  )
}

/** Slide 5 — Bài học chiến lược */
export function Slide5() {
  return (
    <ContentSlideLayout
      videoIndex={4}
      pageLabel="Trang 005"
      title="Bài học chiến lược từ thị trường"
    >
      <div className="grid grid-cols-2 gap-3 flex-1">
        {/* Đừng làm */}
        <div className="flex flex-col gap-3">
          <Cap>Đừng làm</Cap>
          {[
            ['friend.tech', 'Pure speculation không đủ giữ user lâu dài'],
            ['Virtuals', 'Tokenization không có utility = pump & dump cycle'],
            ['GPT Store', 'Opaque revenue model giết creator motivation'],
            ['Mint Club', 'Generalist infra thiếu discovery = empty store'],
          ].map(([src, lesson]) => (
            <div
              key={src}
              className="rounded-xl p-4 flex gap-3 items-start flex-1"
              style={{ background: whiteAlpha(0.04), border: `1px solid ${whiteAlpha(0.07)}` }}
            >
              <span
                className="rounded px-2 py-0.5 font-medium shrink-0"
                style={{
                  fontSize: 'clamp(9px, 0.75vw, 11px)',
                  background: whiteAlpha(0.08),
                  color: whiteAlpha(0.45),
                }}
              >
                {src}
              </span>
              <p style={{ fontSize: 'clamp(10px, 0.92vw, 14px)', color: whiteAlpha(0.68) }}>
                {lesson}
              </p>
            </div>
          ))}
        </div>

        {/* ClawFriend giữ lại */}
        <div className="flex flex-col gap-3">
          <Cap>ClawFriend giữ lại</Cap>
          {[
            {
              title: 'Perpetual creator fee',
              desc: '5% mỗi trade — creator earn mãi mãi, không chỉ lúc launch',
              metric: '5%',
            },
            {
              title: 'Holder-gated premium',
              desc: 'Hold shares = access skill tốt hơn · align user & creator interest',
              metric: '🔒',
            },
            {
              title: 'Autonomous skill output',
              desc: 'Real-time on-chain data, không phải chatbot generic',
              metric: '⚡',
            },
          ].map(({ title, desc, metric }) => (
            <div
              key={title}
              className="liquid-glass rounded-xl p-4 flex gap-3 items-start flex-1"
              style={{ border: `1px solid ${limeAlpha(0.2)}` }}
            >
              <div className="relative z-[1] flex gap-3 items-start w-full">
                <span
                  className="rounded-lg w-9 h-9 flex items-center justify-center shrink-0 font-bold"
                  style={{
                    background: limeAlpha(0.15),
                    color: lime,
                    fontSize: 'clamp(11px, 1vw, 15px)',
                  }}
                >
                  {metric}
                </span>
                <div>
                  <p
                    className="font-semibold text-white mb-1"
                    style={{ fontSize: 'clamp(11px, 1vw, 15px)' }}
                  >
                    {title}
                  </p>
                  <p style={{ fontSize: 'clamp(9px, 0.82vw, 13px)', color: whiteAlpha(0.6) }}>
                    {desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ContentSlideLayout>
  )
}

/** Slide 6 — Segment "AI Agent Builders without Monetization" — 0 incumbent */
export function Slide6() {
  return (
    <ContentSlideLayout
      videoIndex={0}
      pageLabel="Trang 006"
      title={`Segment "AI Agent Builders without Monetization" — 0 incumbent`}
      footer="Entry wedge: Publish skill → instant bonding curve"
    >
      <div className="grid grid-cols-2 gap-3 flex-1">
        {/* ICP */}
        <div className="liquid-glass rounded-xl p-5 flex flex-col gap-4">
          <div className="relative z-[1] flex flex-col gap-4 h-full">
            <Cap>ICP chính</Cap>
            <div className="flex-1 flex flex-col gap-3 justify-center">
              {[
                { icon: '🛠', text: 'Dev đã build agent trên OpenClaw / ElizaOS' },
                { icon: '💸', text: 'Không có cách earn từ adoption' },
                { icon: '🚫', text: 'Không muốn build tokenomics riêng' },
              ].map(({ icon, text }) => (
                <div key={text} className="flex gap-3 items-start">
                  <span className="text-lg shrink-0">{icon}</span>
                  <p style={{ fontSize: 'clamp(11px, 1vw, 15px)', color: whiteAlpha(0.8) }}>
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Entry wedge */}
        <div className="flex flex-col gap-3">
          <Cap>Entry wedge</Cap>
          <div
            className="glass rounded-xl p-4 flex flex-col gap-2 flex-1"
          >
            <div className="flex items-center gap-2 mb-1">
              <span
                className="rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs shrink-0"
                style={{ background: limeAlpha(0.2), color: lime }}
              >
                1
              </span>
              <span className="font-semibold text-white" style={{ fontSize: 'clamp(11px, 1vw, 15px)' }}>
                Publish skill
              </span>
            </div>
            <p style={{ fontSize: 'clamp(9px, 0.85vw, 13px)', color: whiteAlpha(0.55) }}>
              Instant bonding curve — không cần setup tokenomics, không cần whitepaper
            </p>
          </div>
          <div
            className="glass rounded-xl p-4 flex flex-col gap-2 flex-1"
          >
            <div className="flex items-center gap-2 mb-1">
              <span
                className="rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs shrink-0"
                style={{ background: limeAlpha(0.2), color: lime }}
              >
                2
              </span>
              <span className="font-semibold text-white" style={{ fontSize: 'clamp(11px, 1vw, 15px)' }}>
                Earn từ share #1
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-bold" style={{ fontSize: 'clamp(28px, 3.5vw, 60px)', color: lime }}>
                5%
              </span>
              <span style={{ fontSize: 'clamp(9px, 0.82vw, 13px)', color: whiteAlpha(0.5) }}>
                perpetual fee mỗi trade — không giới hạn thời gian
              </span>
            </div>
          </div>
          <div
            className="glass rounded-xl p-4 flex flex-col gap-2 flex-1"
          >
            <div className="flex items-center gap-2 mb-1">
              <span
                className="rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs shrink-0"
                style={{ background: limeAlpha(0.2), color: lime }}
              >
                3
              </span>
              <span className="font-semibold text-white" style={{ fontSize: 'clamp(11px, 1vw, 15px)' }}>
                Holder-gated access
              </span>
            </div>
            <p style={{ fontSize: 'clamp(9px, 0.85vw, 13px)', color: whiteAlpha(0.55) }}>
              User phải hold shares để access premium skill → recurring demand → price tăng
            </p>
          </div>
        </div>
      </div>
    </ContentSlideLayout>
  )
}

/** Slide 7 — What We're Bad At */
export function Slide7() {
  const risks = [
    {
      issue: 'Cold start 2-sided liquidity',
      detail:
        'Chicken-and-egg: cần skill tốt để có buyer, cần buyer để creator có incentive publish skill tốt.',
      severity: 'High',
    },
    {
      issue: 'BSC prestige thấp hơn ETH',
      detail:
        'Builder và investor tier cao thường prefer ETH/Solana — harder to attract tier-1 creators ban đầu.',
      severity: 'Medium',
    },
    {
      issue: 'Wallet onboarding friction',
      detail:
        'MetaMask setup + BNB gas + key management — barrier cao hơn Web2 đáng kể với user mới.',
      severity: 'Medium',
    },
  ]

  return (
    <ContentSlideLayout
      videoIndex={1}
      pageLabel="Trang 007"
      title="What We're Bad At"
      footer="Honest assessment — credibility matters"
    >
      <div className="flex flex-col gap-3 flex-1">
        {risks.map(({ issue, detail, severity }) => (
          <div key={issue} className="liquid-glass rounded-xl p-5 flex-1 flex flex-col gap-3">
            <div className="relative z-[1] flex flex-col gap-2 h-full">
              <div className="flex items-center gap-3 justify-between">
                <p
                  className="font-bold text-white"
                  style={{ fontSize: 'clamp(12px, 1.1vw, 17px)' }}
                >
                  {issue}
                </p>
                <span
                  className="rounded-full px-2.5 py-0.5 font-semibold shrink-0"
                  style={{
                    fontSize: 'clamp(8px, 0.68vw, 10px)',
                    background: severity === 'High' ? 'rgba(255,80,80,0.15)' : whiteAlpha(0.08),
                    color: severity === 'High' ? 'rgba(255,120,120,0.9)' : whiteAlpha(0.4),
                  }}
                >
                  {severity} Risk
                </span>
              </div>
              <p
                className="flex-1"
                style={{ fontSize: 'clamp(10px, 0.92vw, 14px)', color: whiteAlpha(0.6) }}
              >
                {detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </ContentSlideLayout>
  )
}

/** Slide 8 — Mitigation Plan */
export function Slide8() {
  return (
    <ContentSlideLayout
      videoIndex={2}
      pageLabel="Trang 008"
      title="Mitigation Plan"
    >
      <div className="grid grid-cols-2 grid-rows-2 gap-3 flex-1">
        {[
          {
            n: '01',
            tactic: 'Anchor 5 founding creators',
            detail: 'Pre-select builders với existing audience → seed demand từ day 1, không cần cold start',
          },
          {
            n: '02',
            tactic: 'Protocol rebate 3 tháng đầu',
            detail: 'Fee rebate cho early creators → giảm chi phí cold start, giữ creator publish tiếp',
          },
          {
            n: '03',
            tactic: 'Seeding initial liquidity',
            detail: 'Team/treasury seed bonding curve ban đầu để price không bắt đầu từ zero',
          },
          {
            n: '04',
            tactic: 'On-chain social proof',
            detail: 'Mỗi trade on-chain = transparent signal → build trust nhanh hơn Web2 platform',
          },
        ].map(({ n, tactic, detail }) => (
          <div
            key={n}
            className="glass rounded-xl p-4 flex flex-col gap-3"
          >
            <div className="flex items-start gap-3">
              <span
                className="font-bold shrink-0"
                style={{ fontSize: 'clamp(22px, 2.5vw, 44px)', color: limeAlpha(0.35) }}
              >
                {n}
              </span>
              <div className="flex flex-col gap-1.5">
                <p
                  className="font-semibold text-white"
                  style={{ fontSize: 'clamp(11px, 1vw, 15px)' }}
                >
                  {tactic}
                </p>
                <p style={{ fontSize: 'clamp(9px, 0.85vw, 13px)', color: whiteAlpha(0.55) }}>
                  {detail}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ContentSlideLayout>
  )
}

/** Slide 9 — So What? (Section 1) */
export function Slide9() {
  return (
    <ContentSlideLayout
      videoIndex={3}
      pageLabel="Trang 009"
      title="So What?"
      footer="Section 1 — Competitive Landscape"
    >
      <div className="flex flex-col gap-4 flex-1 justify-center">
        <div
          className="liquid-glass rounded-2xl p-6"
          style={{ border: `1px solid ${limeAlpha(0.2)}` }}
        >
          <div className="relative z-[1] flex flex-col gap-4">
            <p className="text-white/60" style={{ fontSize: 'clamp(12px, 1.1vw, 17px)' }}>
              Chúng ta không cạnh tranh Nansen hay GPT Store.
            </p>
            <p
              className="font-bold text-white"
              style={{ fontSize: 'clamp(16px, 1.8vw, 30px)' }}
            >
              Chúng ta convert 2 nhóm user chưa được serve:
            </p>
            <div className="flex flex-col gap-3 mt-1">
              {[
                {
                  who: 'AI agent builders',
                  context: 'chưa có monetization — build xong không biết earn thế nào',
                },
                {
                  who: 'BSC DeFi traders',
                  context: 'đang trả $100–200/month cho analytics — không có ownership upside',
                },
              ].map(({ who, context }) => (
                <div
                  key={who}
                  className="flex items-center gap-4 rounded-xl p-4"
                  style={{ background: whiteAlpha(0.05) }}
                >
                  <span style={{ color: lime, fontSize: 'clamp(18px, 2vw, 32px)' }}>→</span>
                  <div>
                    <span
                      className="font-bold text-white"
                      style={{ fontSize: 'clamp(12px, 1.1vw, 17px)' }}
                    >
                      {who}
                    </span>
                    <span
                      className="ml-2"
                      style={{ fontSize: 'clamp(10px, 0.92vw, 14px)', color: whiteAlpha(0.5) }}
                    >
                      {context}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ContentSlideLayout>
  )
}

// ── SECTION 2 — SKILL MARKET STRATEGY ───────────────────────────────────────

/** Slide 10 — Demand proof: bar chart visualization */
export function Slide10() {
  const skills = [
    { name: 'Airdrop Farming', search: '1M+/mo', pct: 100, src: '"crypto airdrop" · Ahrefs', paid: '$0' },
    { name: 'Token Safety Scan', search: '1M+ scan/mo', pct: 100, src: 'Token Sniffer public counter', paid: 'Free tier' },
    { name: 'Whale Tracking', search: '80k/mo', pct: 45, src: '"whale alert crypto" · Ahrefs', paid: '$150/mo' },
    { name: 'Yield Automation', search: '30k/mo', pct: 22, src: '"yield optimizer BSC"', paid: 'Manual' },
    { name: 'Social Alpha Signal', search: '90k/mo', pct: 50, src: '"crypto trading signals" · Ahrefs', paid: '$30–100/mo' },
  ]

  return (
    <ContentSlideLayout
      videoIndex={4}
      pageLabel="Trang 010"
      title="Chỉ build skill có demand trả tiền sẵn"
      footer="Section 2 of 3 — Skill Market Strategy · Demand proof trước, feature sau"
    >
      <div className="flex flex-col gap-2.5 flex-1">
        {/* Header row */}
        <div className="grid gap-3 px-4" style={{ gridTemplateColumns: '1fr 3fr 80px 80px' }}>
          <Cap>Skill</Cap>
          <Cap>Search volume</Cap>
          <Cap>Volume</Cap>
          <Cap>User pays</Cap>
        </div>

        {skills.map(({ name, search, pct, src, paid }) => (
          <div key={name} className="glass rounded-xl p-4 flex-1 flex items-center gap-3">
            <div style={{ flex: 1 }}>
              <p className="font-semibold text-white" style={{ fontSize: 'clamp(11px, 1vw, 15px)' }}>
                {name}
              </p>
              <p style={{ fontSize: 'clamp(9px, 0.78vw, 12px)', color: whiteAlpha(0.4) }}>{src}</p>
            </div>
            <div style={{ flex: 3 }} className="flex flex-col gap-1.5">
              <Bar pct={pct} />
            </div>
            <div style={{ width: 80 }} className="text-right">
              <p
                className="font-bold"
                style={{ fontSize: 'clamp(11px, 1vw, 15px)', color: lime }}
              >
                {search}
              </p>
            </div>
            <div style={{ width: 80 }} className="text-right">
              <span
                className="rounded-full px-2 py-0.5"
                style={{
                  fontSize: 'clamp(8px, 0.72vw, 11px)',
                  background: paid !== '$0' && paid !== 'Free tier' && paid !== 'Manual'
                    ? limeAlpha(0.12)
                    : whiteAlpha(0.06),
                  color: paid !== '$0' && paid !== 'Free tier' && paid !== 'Manual'
                    ? lime
                    : whiteAlpha(0.45),
                }}
              >
                {paid}
              </span>
            </div>
          </div>
        ))}
      </div>
    </ContentSlideLayout>
  )
}

// ── Skill card template ──────────────────────────────────────────────────────

interface SkillProps {
  videoIndex: number
  pageLabel: string
  skillNum: string
  name: string
  demand: { metric: string; src: string; pct: number }[]
  publicTier: string
  holderTier: string
  whyGated: string
  feasibility: string
  footer?: string
}

function SkillSlide({ videoIndex, pageLabel, skillNum, name, demand, publicTier, holderTier, whyGated, feasibility, footer }: SkillProps) {
  return (
    <ContentSlideLayout
      videoIndex={videoIndex}
      pageLabel={pageLabel}
      footer={footer}
      title={<><Badge accent>{skillNum}</Badge>{' '}{name}</>}
    >
      <div className="grid grid-cols-3 gap-3 flex-1">
        {/* Demand */}
        <div className="liquid-glass rounded-xl p-4 flex flex-col gap-3">
          <div className="relative z-[1] flex flex-col gap-3 h-full">
            <Cap>Demand Evidence</Cap>
            <div className="flex flex-col gap-4 flex-1">
              {demand.map(({ metric, src, pct }) => (
                <div key={metric} className="flex flex-col gap-2">
                  <div className="flex justify-between items-baseline">
                    <span
                      className="font-bold text-white"
                      style={{ fontSize: 'clamp(14px, 1.3vw, 20px)' }}
                    >
                      {metric}
                    </span>
                  </div>
                  <Bar pct={pct} thin />
                  <span style={{ fontSize: 'clamp(8px, 0.72vw, 11px)', color: whiteAlpha(0.38) }}>
                    {src}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Monetization */}
        <div className="glass rounded-xl p-4 flex flex-col gap-3">
          <Cap>Monetization</Cap>
          <div className="flex flex-col gap-3 flex-1">
            <div
              className="rounded-lg p-3 flex flex-col gap-1.5"
              style={{ background: whiteAlpha(0.05) }}
            >
              <span style={{ fontSize: 'clamp(8px, 0.68vw, 10px)', color: whiteAlpha(0.38) }}>
                PUBLIC (free)
              </span>
              <p style={{ fontSize: 'clamp(10px, 0.9vw, 14px)', color: whiteAlpha(0.72) }}>
                {publicTier}
              </p>
            </div>

            <div
              className="rounded-lg p-3 flex flex-col gap-1.5 flex-1"
              style={{ background: limeAlpha(0.07), border: `1px solid ${limeAlpha(0.2)}` }}
            >
              <span
                className="font-semibold"
                style={{ fontSize: 'clamp(8px, 0.68vw, 10px)', color: lime }}
              >
                HOLDER-GATED
              </span>
              <p style={{ fontSize: 'clamp(10px, 0.9vw, 14px)', color: whiteAlpha(0.82) }}>
                {holderTier}
              </p>
            </div>

            <div className="mt-auto pt-2 border-t" style={{ borderColor: whiteAlpha(0.07) }}>
              <p style={{ fontSize: 'clamp(9px, 0.78vw, 12px)', color: whiteAlpha(0.38) }}>
                WHY: {whyGated}
              </p>
            </div>
          </div>
        </div>

        {/* Tech */}
        <div className="glass rounded-xl p-4 flex flex-col gap-3">
          <Cap>Tech Stack</Cap>
          <p
            className="flex-1"
            style={{ fontSize: 'clamp(10px, 0.92vw, 14px)', color: whiteAlpha(0.72) }}
          >
            {feasibility}
          </p>
        </div>
      </div>
    </ContentSlideLayout>
  )
}

/** Slide 11 — Skill #1: BSC Smart Money Tracker */
export function Slide11() {
  return (
    <SkillSlide
      videoIndex={0} pageLabel="Trang 011" skillNum="Skill #1" name="BSC Smart Money Tracker"
      demand={[
        { metric: '80k search/month', src: '"whale alert crypto" · Ahrefs', pct: 45 },
        { metric: '1.2M followers', src: '@lookonchain — demand signal', pct: 80 },
      ]}
      publicTier="Top 10 whale moves (delay 30 phút)"
      holderTier="Real-time alert + custom wallet tracking"
      whyGated="Real-time = alpha edge. Public → mất lý do mua share."
      feasibility="BscScan API + WebSocket BSC node"
    />
  )
}

/** Slide 12 — Skill #2: BSC Token Safety Scanner */
export function Slide12() {
  return (
    <SkillSlide
      videoIndex={1} pageLabel="Trang 012" skillNum="Skill #2" name="BSC Token Safety Scanner"
      demand={[
        { metric: '1M+ scan/month', src: 'Token Sniffer public counter', pct: 100 },
        { metric: '40k search/month', src: '"BSC rug check"', pct: 28 },
      ]}
      publicTier="Basic risk score (0–100)"
      holderTier="Full AI verdict + Telegram alert"
      whyGated="Phân tích chi tiết + time advantage → triệt tiêu incentive nếu public."
      feasibility="GoPlus API + BscScan + Dexscreener"
    />
  )
}

/** Slide 13 — Skill #3: PancakeSwap Yield Optimizer */
export function Slide13() {
  return (
    <SkillSlide
      videoIndex={2} pageLabel="Trang 013" skillNum="Skill #3" name="PancakeSwap Yield Optimizer"
      demand={[
        { metric: '~$300M TVL', src: 'Beefy Finance peak trên BSC · DefiLlama', pct: 75 },
        { metric: '1–3% APY lost', src: 'Manual vs optimized rebalancing', pct: 30 },
      ]}
      publicTier="Top APY dashboard (snapshot)"
      holderTier="Personalized alert + rebalance advice"
      whyGated="Alert sớm → tối ưu lợi suất thực. Free = không có economic driver."
      feasibility="PancakeSwap MasterChef read-only API"
    />
  )
}

/** Slide 14 — Skill #4: BSC Airdrop Intelligence */
export function Slide14() {
  return (
    <SkillSlide
      videoIndex={3} pageLabel="Trang 014" skillNum="Skill #4" name="BSC Airdrop Intelligence"
      demand={[
        { metric: '1M+ search/month', src: '"crypto airdrop" · Ahrefs', pct: 100 },
        { metric: '$4.5B distributed', src: 'Major airdrops 2024–2025 · CoinGecko', pct: 85 },
      ]}
      publicTier="Weekly airdrop digest"
      holderTier="Eligibility scan real-time (per wallet)"
      whyGated="Scan ví cá nhân = giá trị trực tiếp → cần economic commitment."
      feasibility="Protocol API + rule-based eligibility logic"
    />
  )
}

/** Slide 15 — Skill #5: BSC Social Alpha Scanner */
export function Slide15() {
  return (
    <SkillSlide
      videoIndex={4} pageLabel="Trang 015" skillNum="Skill #5" name="BSC Social Alpha Scanner"
      demand={[
        { metric: '$30–100/month', src: 'Paid Telegram signal groups BSC', pct: 55 },
        { metric: '90k search/month', src: '"crypto trading signals" · Ahrefs', pct: 50 },
      ]}
      publicTier="Daily trending token summary"
      holderTier="Pre-volume-spike alert + smart money mention"
      whyGated="Tín hiệu sớm = lợi thế giao dịch. Public → triệt tiêu willingness-to-pay."
      feasibility="Twitter API + Dexscreener API"
    />
  )
}

/** Slide 16 — Monetization Flywheel */
export function Slide16() {
  const steps = [
    { n: '01', label: 'Skill tốt', sub: 'Creator publish' },
    { n: '02', label: 'User mua share', sub: 'Để access premium' },
    { n: '03', label: 'Giá tăng', sub: 'Bonding curve' },
    { n: '04', label: 'Creator earn', sub: '5% mỗi trade' },
    { n: '05', label: 'Skill tốt hơn', sub: 'Cycle lặp lại' },
  ]

  return (
    <ContentSlideLayout
      videoIndex={0}
      pageLabel="Trang 016"
      title="Monetization Flywheel"
      footer="Economic alignment giữa creator & holder"
    >
      <div className="flex flex-col gap-4 flex-1 justify-center">
        {/* 5-step chain */}
        <div className="flex items-stretch gap-2">
          {steps.map(({ n, label, sub }, i) => (
            <>
              <div
                key={n}
                className="liquid-glass rounded-xl p-4 flex-1 flex flex-col gap-2"
                style={{ border: i === 3 ? `1px solid ${limeAlpha(0.35)}` : undefined }}
              >
                <div className="relative z-[1]">
                  <p
                    className="font-bold mb-0.5"
                    style={{ fontSize: 'clamp(9px, 0.7vw, 11px)', color: limeAlpha(0.5) }}
                  >
                    {n}
                  </p>
                  <p
                    className="font-bold text-white"
                    style={{ fontSize: 'clamp(12px, 1.1vw, 16px)' }}
                  >
                    {label}
                  </p>
                  <p style={{ fontSize: 'clamp(9px, 0.8vw, 12px)', color: whiteAlpha(0.45) }}>
                    {sub}
                  </p>
                  {i === 3 && (
                    <p
                      className="font-bold mt-1"
                      style={{ fontSize: 'clamp(16px, 1.8vw, 28px)', color: lime }}
                    >
                      5%
                    </p>
                  )}
                </div>
              </div>
              {i < steps.length - 1 && (
                <div
                  key={`arr-${i}`}
                  className="flex items-center shrink-0"
                  style={{ color: limeAlpha(0.6), fontSize: 'clamp(14px, 1.5vw, 22px)' }}
                >
                  →
                </div>
              )}
            </>
          ))}
        </div>

        {/* Loop back */}
        <div
          className="glass rounded-xl p-4 flex items-center gap-4"
        >
          <span style={{ color: lime, fontSize: 'clamp(16px, 1.6vw, 24px)' }}>↻</span>
          <p style={{ fontSize: 'clamp(11px, 1vw, 15px)', color: whiteAlpha(0.7) }}>
            Skill tốt hơn → creator có incentive tiếp tục cải thiện →{' '}
            <span style={{ color: lime }} className="font-semibold">
              loop tự vận hành không cần ads
            </span>
          </p>
        </div>
      </div>
    </ContentSlideLayout>
  )
}

/** Slide 17 — Tại sao không dùng ChatGPT? */
export function Slide17() {
  const rows = [
    { feature: 'On-chain data real-time', chatgpt: false, clawfriend: 'BSC node live' },
    { feature: 'Wallet-linked', chatgpt: false, clawfriend: 'BNB wallet integration' },
    { feature: 'Holder-gated access', chatgpt: false, clawfriend: 'Hold shares = premium' },
    { feature: 'Economic upside creator', chatgpt: false, clawfriend: '5% perpetual fee' },
    { feature: 'Telegram alert', chatgpt: false, clawfriend: 'Push to wallet / TG' },
  ]

  return (
    <ContentSlideLayout
      videoIndex={1}
      pageLabel="Trang 017"
      title="Tại sao không dùng ChatGPT thay vì ClawFriend?"
    >
      <div className="flex flex-col gap-2.5 flex-1">
        {/* Header */}
        <div
          className="grid px-4 gap-3"
          style={{ gridTemplateColumns: '1fr 120px 1fr' }}
        >
          <Cap>Feature</Cap>
          <p className="text-center font-semibold uppercase tracking-widest" style={{ fontSize: 'clamp(8px, 0.65vw, 10px)', color: 'rgba(255,255,255,0.38)' }}>ChatGPT</p>
          <Cap>ClawFriend</Cap>
        </div>

        {/* Rows */}
        {rows.map(({ feature, clawfriend }) => (
          <div
            key={feature}
            className="glass rounded-xl px-4 py-3 grid items-center gap-3 flex-1"
            style={{ gridTemplateColumns: '1fr 120px 1fr' }}
          >
            <p
              className="text-white/75 font-medium"
              style={{ fontSize: 'clamp(10px, 0.92vw, 14px)' }}
            >
              {feature}
            </p>
            <div className="flex justify-center">
              <span
                className="rounded-full w-7 h-7 flex items-center justify-center font-bold"
                style={{
                  background: 'rgba(255,80,80,0.1)',
                  color: 'rgba(255,100,100,0.7)',
                  fontSize: 14,
                }}
              >
                ✗
              </span>
            </div>
            <p style={{ fontSize: 'clamp(10px, 0.92vw, 14px)', color: lime }}>
              {clawfriend}
            </p>
          </div>
        ))}
      </div>
    </ContentSlideLayout>
  )
}

/** Slide 18 — So What? (Section 2) */
export function Slide18() {
  return (
    <ContentSlideLayout
      videoIndex={2}
      pageLabel="Trang 018"
      title="So What?"
      footer="Section 2 — Skill Market Strategy"
    >
      <div className="flex flex-col gap-4 flex-1 justify-center">
        <div
          className="liquid-glass rounded-2xl p-6"
          style={{ border: `1px solid ${limeAlpha(0.2)}` }}
        >
          <div className="relative z-[1] flex flex-col gap-4">
            <p
              className="font-bold text-white"
              style={{ fontSize: 'clamp(15px, 1.6vw, 26px)' }}
            >
              5 skill đầu tiên target BSC trader đang trả tiền thật.
            </p>
            <p style={{ fontSize: 'clamp(11px, 1vw, 16px)', color: whiteAlpha(0.55) }}>
              Không build cho casual AI user. Không build "AI assistant" generic.
            </p>
            <div className="flex gap-2 flex-wrap">
              {[
                'Smart Money Tracker',
                'Token Safety Scanner',
                'Yield Optimizer',
                'Airdrop Intel',
                'Social Alpha',
              ].map((s) => (
                <Badge key={s} accent>
                  {s}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ContentSlideLayout>
  )
}

// ── SECTION 3 — DISTRIBUTION PLAN ───────────────────────────────────────────

/** Slide 19 — $10K budget table + visual bars */
export function Slide19() {
  const rows = [
    { channel: 'Twitter Ads', budget: 4000, signups: 80, cac: '$50' },
    { channel: 'Telegram KOL', budget: 3500, signups: 325, cac: '~$10' },
    { channel: 'BSC Partnership + Referral', budget: 2000, signups: 200, cac: '~$10–13' },
    { channel: 'Organic (Social + Content)', budget: 0, signups: 350, cac: '$0' },
    { channel: 'Reserve', budget: 500, signups: 0, cac: '—' },
  ]
  const total = 10000

  return (
    <ContentSlideLayout
      videoIndex={3}
      pageLabel="Trang 019"
      title="$10K → ~955 Signups"
      footer="Section 3 of 3 — Distribution Plan"
    >
      <div className="flex flex-col gap-3 flex-1">
        {/* Table */}
        <div className="liquid-glass rounded-xl overflow-hidden flex-1">
          <div className="relative z-[1] flex flex-col h-full">
            {/* Header */}
            <div
              className="grid px-5 py-3"
              style={{
                gridTemplateColumns: '1fr 90px 80px 80px 80px',
                borderBottom: `1px solid ${whiteAlpha(0.1)}`,
              }}
            >
              {['Kênh', 'Budget', 'Bar', 'Signups', 'CAC'].map((h) => (
                <Cap key={h}>{h}</Cap>
              ))}
            </div>

            {/* Rows */}
            <div className="flex flex-col flex-1">
              {rows.map(({ channel, budget, signups, cac }) => (
                <div
                  key={channel}
                  className="grid px-5 py-3 items-center flex-1"
                  style={{
                    gridTemplateColumns: '1fr 90px 80px 80px 80px',
                    borderBottom: `1px solid ${whiteAlpha(0.05)}`,
                  }}
                >
                  <p
                    className="text-white/80"
                    style={{ fontSize: 'clamp(10px, 0.92vw, 14px)' }}
                  >
                    {channel}
                  </p>
                  <p
                    className="font-medium text-white"
                    style={{ fontSize: 'clamp(10px, 0.92vw, 14px)' }}
                  >
                    ${budget.toLocaleString()}
                  </p>
                  <div className="pr-3">
                    <Bar pct={budget > 0 ? (budget / total) * 100 : 0} thin />
                  </div>
                  <p
                    className="font-bold"
                    style={{
                      fontSize: 'clamp(11px, 1vw, 15px)',
                      color: signups > 0 ? lime : whiteAlpha(0.3),
                    }}
                  >
                    {signups > 0 ? `~${signups}` : '—'}
                  </p>
                  <p
                    style={{
                      fontSize: 'clamp(10px, 0.88vw, 13px)',
                      color: cac === '$0' ? lime : whiteAlpha(0.55),
                    }}
                  >
                    {cac}
                  </p>
                </div>
              ))}
            </div>

            {/* Total */}
            <div
              className="grid px-5 py-3 items-center"
              style={{
                gridTemplateColumns: '1fr 90px 80px 80px 80px',
                borderTop: `1px solid ${whiteAlpha(0.15)}`,
                background: whiteAlpha(0.04),
              }}
            >
              <p className="font-bold text-white" style={{ fontSize: 'clamp(11px, 1vw, 15px)' }}>
                Total
              </p>
              <p className="font-bold text-white" style={{ fontSize: 'clamp(11px, 1vw, 15px)' }}>
                $10,000
              </p>
              <div />
              <p
                className="font-bold"
                style={{ fontSize: 'clamp(14px, 1.4vw, 22px)', color: lime }}
              >
                ~955
              </p>
              <p style={{ fontSize: 'clamp(9px, 0.82vw, 13px)', color: whiteAlpha(0.4) }}>
                blended ~$10–15
              </p>
            </div>
          </div>
        </div>
      </div>
    </ContentSlideLayout>
  )
}

/** Slide 20 — Paid Channel #1: Twitter Ads */
export function Slide20() {
  return (
    <ContentSlideLayout
      videoIndex={4}
      pageLabel="Trang 020"
      title="Paid Channel #1 — Twitter Ads"
      footer="Budget $4,000 · CAC ~$50 · 80 signups"
    >
      <div className="grid grid-cols-2 gap-3 flex-1">
        {/* Metrics */}
        <div className="flex flex-col gap-3">
          <Cap>Unit Economics</Cap>
          {[
            { label: 'Budget', value: '$4,000' },
            { label: 'CPC target', value: '≤ $1' },
            { label: 'CVR target', value: '2%' },
            { label: 'CAC', value: '~$50' },
            { label: 'Projected signups', value: '80' },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="glass rounded-xl px-4 py-3 flex justify-between items-center flex-1"
            >
              <span style={{ fontSize: 'clamp(10px, 0.9vw, 14px)', color: whiteAlpha(0.55) }}>
                {label}
              </span>
              <span
                className="font-bold text-white"
                style={{ fontSize: 'clamp(12px, 1.1vw, 17px)' }}
              >
                {value}
              </span>
            </div>
          ))}
        </div>

        {/* Audience + creative */}
        <div className="flex flex-col gap-3">
          <Cap>Targeting</Cap>
          <div className="liquid-glass rounded-xl p-4 flex flex-col gap-3 flex-1">
            <div className="relative z-[1] flex flex-col gap-3 h-full">
              {[
                { handle: '@PancakeSwap', desc: 'Followers — DeFi users BSC native' },
                { handle: '@lookonchain', desc: 'Followers — whale watchers, alpha seekers' },
              ].map(({ handle, desc }) => (
                <div
                  key={handle}
                  className="rounded-lg p-3 flex flex-col gap-1"
                  style={{ background: whiteAlpha(0.06) }}
                >
                  <span
                    className="font-bold"
                    style={{ fontSize: 'clamp(12px, 1.1vw, 17px)', color: lime }}
                  >
                    {handle}
                  </span>
                  <span style={{ fontSize: 'clamp(9px, 0.82vw, 13px)', color: whiteAlpha(0.5) }}>
                    {desc}
                  </span>
                </div>
              ))}

              <div className="mt-auto pt-3" style={{ borderTop: `1px solid ${whiteAlpha(0.08)}` }}>
                <Cap>Creative hook</Cap>
                <p
                  className="mt-1.5 italic"
                  style={{ fontSize: 'clamp(10px, 0.9vw, 14px)', color: whiteAlpha(0.65) }}
                >
                  "Track whale moves on BSC — real-time, holder-gated"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentSlideLayout>
  )
}

/** Slide 21 — Paid Channel #2: Telegram KOL */
export function Slide21() {
  const groups = [
    { name: 'BSC Signals Official', members: '~120K' },
    { name: 'Crypto Inner Circle', members: '~85K' },
    { name: 'PancakeSwap Vietnam', members: '~60K' },
    { name: 'BNB Chain Traders', members: '~70K' },
  ]

  return (
    <ContentSlideLayout
      videoIndex={0}
      pageLabel="Trang 021"
      title="Paid Channel #2 — Telegram KOL"
      footer="Budget $3,500 · CAC ~$10 · 325 signups"
    >
      <div className="flex flex-col gap-3 flex-1">
        {/* Groups */}
        <div className="grid grid-cols-2 gap-3" style={{ flex: '0 0 auto' }}>
          {groups.map(({ name, members }) => (
            <div
              key={name}
              className="glass rounded-xl px-4 py-3 flex justify-between items-center"
            >
              <span style={{ fontSize: 'clamp(10px, 0.92vw, 14px)', color: whiteAlpha(0.8) }}>
                {name}
              </span>
              <span
                className="font-bold"
                style={{ fontSize: 'clamp(12px, 1.1vw, 17px)', color: lime }}
              >
                {members}
              </span>
            </div>
          ))}
        </div>

        {/* Funnel metrics */}
        <div className="glass rounded-xl p-4 flex-1 flex flex-col gap-3">
          <Cap>Conversion Funnel</Cap>
          <div className="flex items-end gap-3 flex-1">
            {[
              { label: 'Total reach', value: '430K', pct: 100 },
              { label: '1.5% CTR', value: '6,450', pct: 1.5 },
              { label: '5% CVR', value: '~325', pct: 0.075 },
            ].map(({ label, value, pct }, i) => (
              <div key={label} className="flex-1 flex flex-col gap-2">
                <span style={{ fontSize: 'clamp(9px, 0.78vw, 12px)', color: whiteAlpha(0.4) }}>
                  {label}
                </span>
                <div
                  className="rounded-t-lg w-full"
                  style={{
                    height: `${Math.max(pct * 2, 8)}px`,
                    minHeight: 8,
                    maxHeight: 80,
                    background: i === 2 ? lime : whiteAlpha(0.15),
                  }}
                />
                <span
                  className="font-bold"
                  style={{
                    fontSize: 'clamp(12px, 1.2vw, 18px)',
                    color: i === 2 ? lime : 'white',
                  }}
                >
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ContentSlideLayout>
  )
}

/** Slide 22 — Paid Channel #3: BSC Partnership + Referral */
export function Slide22() {
  return (
    <ContentSlideLayout
      videoIndex={1}
      pageLabel="Trang 022"
      title="Paid Channel #3 — BSC Partnership + Referral"
      footer="Budget $2,000 · CAC ≈ $10–13 · ~150–200 signups"
    >
      <div className="flex flex-col gap-3 flex-1">
        {/* Details */}
        <div className="grid grid-cols-2 gap-3" style={{ flex: '0 0 auto' }}>
          <div className="liquid-glass rounded-xl p-4">
            <div className="relative z-[1] flex flex-col gap-2">
              <Cap>Target</Cap>
              <p className="text-white font-semibold" style={{ fontSize: 'clamp(11px, 1vw, 15px)' }}>
                PancakeSwap Vietnam
              </p>
              <p className="text-white font-semibold" style={{ fontSize: 'clamp(11px, 1vw, 15px)' }}>
                BNB Chain Vietnam community
              </p>
            </div>
          </div>
          <div className="liquid-glass rounded-xl p-4">
            <div className="relative z-[1] flex flex-col gap-2">
              <Cap>Format</Cap>
              <p style={{ fontSize: 'clamp(10px, 0.92vw, 14px)', color: whiteAlpha(0.8) }}>
                Co-branded AMA + exclusive skill whitelist
              </p>
              <p style={{ fontSize: 'clamp(10px, 0.92vw, 14px)', color: lime }} className="font-semibold">
                $10 referral reward / signup
              </p>
            </div>
          </div>
        </div>

        {/* Metrics */}
        <div className="flex gap-3 flex-1">
          {[
            { value: '~5,000', label: 'Active members reach', accent: false },
            { value: '3–4%', label: 'CVR estimate', accent: false },
            { value: '~200', label: 'Projected signups', accent: true },
            { value: '≈ $10–13', label: 'CAC', accent: true },
          ].map(({ value, label, accent }) => (
            <div
              key={label}
              className="glass rounded-xl p-4 flex flex-col gap-2 flex-1 justify-between"
            >
              <span
                className="font-bold"
                style={{
                  fontSize: 'clamp(18px, 2.2vw, 40px)',
                  color: accent ? lime : 'white',
                }}
              >
                {value}
              </span>
              <span style={{ fontSize: 'clamp(9px, 0.82vw, 13px)', color: whiteAlpha(0.45) }}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </ContentSlideLayout>
  )
}

/** Slide 23 — Organic Engine #1: Social Stream */
export function Slide23() {
  return (
    <ContentSlideLayout
      videoIndex={2}
      pageLabel="Trang 023"
      title="Organic Engine #1 — Social Stream"
      footer="$0 budget · ~90 signups/month (compounding)"
    >
      <div className="grid grid-cols-2 gap-3 flex-1">
        {/* Content output */}
        <div className="flex flex-col gap-3">
          <Cap>Daily / Weekly Output</Cap>
          {[
            { item: 'Daily whale digest', freq: 'Daily' },
            { item: 'Trending token report', freq: 'Daily' },
            { item: 'Airdrop reminder', freq: 'Weekly' },
            { item: 'Telegram bot free scan', freq: 'On-demand' },
          ].map(({ item, freq }) => (
            <div
              key={item}
              className="glass rounded-xl px-4 py-3 flex justify-between items-center flex-1"
            >
              <div className="flex gap-2 items-center">
                <span style={{ color: lime, fontSize: 14 }}>→</span>
                <span style={{ fontSize: 'clamp(10px, 0.92vw, 14px)', color: whiteAlpha(0.8) }}>
                  {item}
                </span>
              </div>
              <span
                className="rounded-full px-2 py-0.5"
                style={{
                  fontSize: 'clamp(8px, 0.68vw, 10px)',
                  background: whiteAlpha(0.07),
                  color: whiteAlpha(0.4),
                }}
              >
                {freq}
              </span>
            </div>
          ))}
        </div>

        {/* Projection */}
        <div className="flex flex-col gap-3">
          <Cap>Projection / Month</Cap>
          {[
            { label: 'Posts', value: '30', pct: 100 },
            { label: 'Avg impressions / post', value: '3,000', pct: 60 },
            { label: 'Total impressions', value: '90,000', pct: 90 },
            { label: '2% CTR → visits', value: '1,800', pct: 36 },
            { label: '5% CVR → signups', value: '~90', pct: 18, accent: true },
          ].map(({ label, value, pct, accent }) => (
            <div key={label} className="glass rounded-xl px-4 py-3 flex flex-col gap-1.5 flex-1">
              <div className="flex justify-between items-baseline">
                <span style={{ fontSize: 'clamp(9px, 0.8vw, 12px)', color: whiteAlpha(0.45) }}>
                  {label}
                </span>
                <span
                  className="font-bold"
                  style={{
                    fontSize: 'clamp(11px, 1vw, 15px)',
                    color: accent ? lime : 'white',
                  }}
                >
                  {value}
                </span>
              </div>
              <Bar pct={pct} thin />
            </div>
          ))}
        </div>
      </div>
    </ContentSlideLayout>
  )
}

/** Slide 24 — Organic Engine #2: Technical Content */
export function Slide24() {
  return (
    <ContentSlideLayout
      videoIndex={3}
      pageLabel="Trang 024"
      title="Organic Engine #2 — Technical Content"
      footer="$0 budget · ~60 signups/month (evergreen SEO)"
    >
      <div className="grid grid-cols-2 gap-3 flex-1">
        {/* Content plan */}
        <div className="flex flex-col gap-3">
          <Cap>Content Plan</Cap>
          {[
            { type: '4 X threads', desc: 'Deep-dive skill demos, whale tracking on BSC' },
            { type: '4 BinanceSquare posts', desc: 'BSC native audience, high organic reach' },
            { type: 'Reddit seeding', desc: 'r/BNBChain · r/defi · r/CryptoMarkets' },
            { type: 'Discord demo', desc: 'Builder communities · OpenClaw server' },
          ].map(({ type, desc }) => (
            <div
              key={type}
              className="glass rounded-xl px-4 py-3 flex flex-col gap-1 flex-1"
            >
              <p
                className="font-semibold text-white"
                style={{ fontSize: 'clamp(10px, 0.92vw, 14px)' }}
              >
                {type}
              </p>
              <p style={{ fontSize: 'clamp(9px, 0.8vw, 12px)', color: whiteAlpha(0.45) }}>
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* Projection */}
        <div className="flex flex-col gap-3">
          <Cap>Projection / Month</Cap>
          {[
            { label: 'Long-form posts', value: '8', pct: 40 },
            { label: 'Avg views / post', value: '5,000', pct: 50 },
            { label: 'Total views', value: '40,000', pct: 80 },
            { label: '3% CTR → visits', value: '1,200', pct: 30 },
            { label: '5% CVR → signups', value: '~60', pct: 12, accent: true },
          ].map(({ label, value, pct, accent }) => (
            <div key={label} className="glass rounded-xl px-4 py-3 flex flex-col gap-1.5 flex-1">
              <div className="flex justify-between items-baseline">
                <span style={{ fontSize: 'clamp(9px, 0.8vw, 12px)', color: whiteAlpha(0.45) }}>
                  {label}
                </span>
                <span
                  className="font-bold"
                  style={{
                    fontSize: 'clamp(11px, 1vw, 15px)',
                    color: accent ? lime : 'white',
                  }}
                >
                  {value}
                </span>
              </div>
              <Bar pct={pct} thin />
            </div>
          ))}
        </div>
      </div>
    </ContentSlideLayout>
  )
}

/** Slide 25 — Intern Test: Week by week */
export function Slide25() {
  const weeks = [
    {
      week: 'Week 1',
      role: 'Intern + Marketing Lead',
      tasks: [
        'Tạo Telegram bot via BotFather + Webhook',
        'Liên hệ admin BSC Signals Official',
        'Set Twitter Ads targeting @PancakeSwap',
        'Launch bot · book 2 Telegram promo',
        'Run 3 Twitter ads A/B test',
      ],
    },
    {
      week: 'Week 2',
      role: 'Marketing Lead',
      tasks: [
        'Publish 2 X threads về skill demo',
        'Outreach 20 OpenClaw builders',
        'Launch referral program ($10/signup)',
      ],
    },
    {
      week: 'Week 3–4',
      role: 'All hands',
      tasks: [
        'Scale winning ads channel',
        'Publish creator case study',
        'Secure 1 ecosystem co-tweet',
      ],
    },
  ]

  return (
    <ContentSlideLayout
      videoIndex={4}
      pageLabel="Trang 025"
      title="Intern Test — Execution Ready"
      footer="Intern đọc xong phải biết làm gì ngày mai"
    >
      <div className="grid grid-cols-3 gap-3 flex-1">
        {weeks.map(({ week, role, tasks }) => (
          <div key={week} className="liquid-glass rounded-xl p-4 flex flex-col gap-3">
            <div className="relative z-[1] flex flex-col gap-3 h-full">
              <div>
                <p
                  className="font-bold"
                  style={{ fontSize: 'clamp(12px, 1.1vw, 17px)', color: lime }}
                >
                  {week}
                </p>
                <p style={{ fontSize: 'clamp(9px, 0.78vw, 12px)', color: whiteAlpha(0.38) }}>
                  {role}
                </p>
              </div>
              <div className="flex flex-col gap-2 flex-1">
                {tasks.map((task, i) => (
                  <div key={task} className="flex gap-2.5 items-start">
                    <span
                      className="rounded-full w-4 h-4 flex items-center justify-center shrink-0 font-bold"
                      style={{
                        fontSize: 9,
                        background: whiteAlpha(0.08),
                        color: whiteAlpha(0.4),
                        marginTop: 1,
                      }}
                    >
                      {i + 1}
                    </span>
                    <span
                      style={{ fontSize: 'clamp(9px, 0.85vw, 13px)', color: whiteAlpha(0.72) }}
                    >
                      {task}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </ContentSlideLayout>
  )
}

/** Slide 26 — Where is first user tomorrow? */
export function Slide26() {
  return (
    <ContentSlideLayout
      videoIndex={0}
      pageLabel="Trang 026"
      title="Where is first user tomorrow?"
    >
      <div className="flex flex-col gap-4 flex-1 justify-center">
        <div
          className="liquid-glass rounded-2xl p-6"
          style={{ border: `1px solid ${limeAlpha(0.22)}` }}
        >
          <div className="relative z-[1] flex flex-col gap-5">
            <Cap>Action ngày mai</Cap>
            {[
              {
                step: 'Post demo',
                desc: 'Token Safety Scanner → t.me/BSCSignalsOfficial',
              },
              {
                step: 'CTA',
                desc: '"3 free scan/day via Telegram bot — no wallet needed"',
              },
              {
                step: 'Convert',
                desc: 'Capture Telegram user → nurture → convert sang signup',
              },
            ].map(({ step, desc }) => (
              <div key={step} className="flex items-start gap-4">
                <span
                  className="glass rounded-lg px-3 py-1.5 font-bold shrink-0"
                  style={{ fontSize: 'clamp(9px, 0.8vw, 12px)', color: lime }}
                >
                  {step}
                </span>
                <p
                  className="text-white/80"
                  style={{ fontSize: 'clamp(12px, 1.1vw, 17px)', lineHeight: 1.4 }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ContentSlideLayout>
  )
}

/** Slide 27 — Risk & Adjustment */
export function Slide27() {
  return (
    <ContentSlideLayout
      videoIndex={1}
      pageLabel="Trang 027"
      title="Risk & Adjustment"
    >
      <div className="grid grid-cols-2 gap-3 flex-1">
        <div className="liquid-glass rounded-xl p-5 flex flex-col gap-4">
          <div className="relative z-[1] flex flex-col gap-4 h-full">
            <div>
              <Cap>Scenario A</Cap>
              <p
                className="font-bold text-white mt-1.5"
                style={{ fontSize: 'clamp(13px, 1.2vw, 18px)' }}
              >
                Nếu CVR giảm 50%
              </p>
            </div>
            <div className="flex flex-col gap-2 flex-1">
              {[
                'Shift budget sang Telegram (CAC thấp hơn)',
                'Tăng referral bounty từ $10 → $20',
                'Improve landing page clarity và CTA',
              ].map((item) => (
                <div key={item} className="flex gap-2 items-start">
                  <span style={{ color: lime, marginTop: 2, flexShrink: 0 }}>→</span>
                  <span style={{ fontSize: 'clamp(10px, 0.92vw, 14px)', color: whiteAlpha(0.7) }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="liquid-glass rounded-xl p-5 flex flex-col gap-4">
          <div className="relative z-[1] flex flex-col gap-4 h-full">
            <div>
              <Cap>Scenario B</Cap>
              <p
                className="font-bold text-white mt-1.5"
                style={{ fontSize: 'clamp(13px, 1.2vw, 18px)' }}
              >
                Nếu CAC &gt; $40
              </p>
            </div>
            <div className="flex flex-col gap-2 flex-1">
              {[
                'Pause paid ads ngay lập tức',
                'Double down organic content',
                'Activate 5 founding creators để seed organic growth',
              ].map((item) => (
                <div key={item} className="flex gap-2 items-start">
                  <span style={{ color: lime, marginTop: 2, flexShrink: 0 }}>→</span>
                  <span style={{ fontSize: 'clamp(10px, 0.92vw, 14px)', color: whiteAlpha(0.7) }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ContentSlideLayout>
  )
}

/** Slide 28 — So What? (Final) */
export function Slide28() {
  return (
    <ContentSlideLayout
      videoIndex={2}
      pageLabel="Trang 028"
      title="So What?"
      footer="ClawFriend GTM — End"
    >
      <div className="flex flex-col gap-4 flex-1 justify-center">
        <div className="flex gap-3">
          <BigNum value="CAC ≤ $10–15" label="target blended — paid + organic" />
          <BigNum value="5%" label="creator perpetual fee — retention built-in" accent />
          <BigNum value="~955" label="signups tháng đầu với $10K budget" accent />
        </div>

        <div
          className="liquid-glass rounded-2xl p-6"
          style={{ border: `1px solid ${limeAlpha(0.2)}` }}
        >
          <div className="relative z-[1] flex flex-col gap-3">
            <p
              className="font-bold text-white"
              style={{ fontSize: 'clamp(14px, 1.5vw, 24px)' }}
            >
              Bonding curve + skill utility = growth tự nhiên không phụ thuộc ads
            </p>
            <p style={{ fontSize: 'clamp(11px, 1vw, 16px)', color: whiteAlpha(0.5) }}>
              ClawFriend không chỉ acquire user. Chúng ta build economic loop bền vững.
            </p>
          </div>
        </div>
      </div>
    </ContentSlideLayout>
  )
}
