/**
 * Content slides 2–12. Thêm slide mới:
 * 1. Export function SlideN() { return <ContentSlideLayout videoIndex={...} pageLabel="Trang 0NN" title="..." footer="...">...</ContentSlideLayout> }
 * 2. Trong App.tsx thêm <SlideN key="N" /> vào mảng slides.
 */
import { ContentSlideLayout } from './ContentSlideLayout'

const bullet = 'list-disc list-inside pl-0 space-y-1 text-white/90'

// Accent pill badge
function Badge({ children, accent = false }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <span
      className="inline-block rounded-full px-2 py-0.5 text-xs font-medium"
      style={{
        background: accent
          ? 'linear-gradient(135deg,rgba(210,255,85,0.22),rgba(210,255,85,0.08))'
          : 'rgba(255,255,255,0.12)',
        border: accent ? '1px solid rgba(210,255,85,0.35)' : '1px solid rgba(255,255,255,0.18)',
        color: accent ? '#d2ff55' : 'rgba(255,255,255,0.85)',
      }}
    >
      {children}
    </span>
  )
}

// Big stat number block
function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="glass rounded-xl px-[4%] py-[3%] flex flex-col gap-1">
      <span className="text-white font-bold leading-none" style={{ fontSize: 'clamp(24px, 3vw, 56px)' }}>
        {value}
      </span>
      <span className="text-white/65" style={{ fontSize: 'clamp(10px, 0.95vw, 14px)' }}>
        {label}
      </span>
    </div>
  )
}

// Section label
function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-semibold text-white/90 mb-1.5" style={{ fontSize: 'clamp(12px, 1.1vw, 17px)' }}>
      {children}
    </p>
  )
}

// Arrow connector used in flywheel
function Arrow() {
  return <span className="text-white/40 shrink-0">→</span>
}

export function Slide2() {
  return (
    <ContentSlideLayout videoIndex={1} pageLabel="Trang 002" title="Vì sao BSC. Vì sao bây giờ." footer="Bối cảnh thị trường">
      <div className="grid grid-cols-3 gap-[3%] mb-[3%]">
        <Stat value="58" label="dự án AI Agent BNB Chain (2/2026)" />
        <Stat value="20K+" label="agent đã deploy trên BSC (Q1/2026)" />
        <Stat value="$8M" label="gọi vốn hạ tầng DIN — Series A, 2025" />
      </div>
      <div className="grid grid-cols-2 gap-[3%]">
        <div className="glass rounded-xl p-[3%]">
          <Label>Hồ sơ retail BSC</Label>
          <ul className={bullet} style={{ fontSize: 'clamp(11px, 1vw, 15px)' }}>
            <li>80%+ retail trader</li>
            <li>Tập trung ở châu Á: Việt Nam, Ấn Độ, Thổ Nhĩ Kỳ</li>
            <li>Quyết định đầu tư trong Telegram group</li>
            <li>Sống trên DeFi: PancakeSwap, Venus, Alpaca</li>
            <li>Tốn 4–12 giờ/tuần để research thủ công</li>
          </ul>
        </div>
        <div className="glass rounded-xl p-[3%]">
          <Label>Hạ tầng đã sẵn sàng</Label>
          <p className="text-white/85" style={{ fontSize: 'clamp(11px, 1vw, 15px)' }}>
            BNB Chain ra mắt <span className="text-white font-medium">ERC-8004</span> (on-chain agent identity) và{' '}
            <span className="text-white font-medium">BAP-578</span> (agent dưới dạng NFT) — ClawFriend tích hợp trực tiếp.
          </p>
          <p className="mt-3 text-white/60 italic" style={{ fontSize: 'clamp(10px, 0.9vw, 13px)' }}>
            "Tiền đã vào. Hạ tầng đã có. Thứ còn thiếu là marketplace thực sự trả tiền cho creator."
          </p>
        </div>
      </div>
    </ContentSlideLayout>
  )
}

export function Slide3() {
  const rows = [
    { name: 'Cooker.club', fee: '0%', bsc: 'Native', ai: 'Có', status: 'Chết (Feb 2026)' },
    { name: 'Moltbook', fee: '$0', bsc: 'Web2', ai: 'Có', status: '1M agents, không economics' },
    { name: 'GPT Store', fee: 'Không minh bạch', bsc: 'Không', ai: 'Có', status: '50K GPTs, 99% kiếm $0' },
    { name: 'Mint Club', fee: '0% trading', bsc: 'Native', ai: 'Không', status: '80% abandoned' },
    { name: 'DIN Infra', fee: 'N/A', bsc: 'Native', ai: 'Có', status: 'Hạ tầng' },
  ]
  return (
    <ContentSlideLayout videoIndex={2} pageLabel="Trang 003" title="Bản đồ cạnh tranh" footer="Chưa ai làm đúng cách">
      <p className="text-white/60 mb-[2%] -mt-[1%]" style={{ fontSize: 'clamp(10px, 0.9vw, 13px)' }}>
        Phân tích theo module kinh doanh — không theo category sản phẩm
      </p>
      <table className="w-full border-collapse text-left mb-[3%]" style={{ fontSize: 'clamp(10px, 0.95vw, 14px)' }}>
        <thead>
          <tr className="border-b border-white/20">
            <th className="py-1.5 pr-3 text-white/70 font-medium w-28">Nền tảng</th>
            <th className="py-1.5 pr-3 text-white/70 font-medium w-28">Phí creator</th>
            <th className="py-1.5 pr-3 text-white/70 font-medium w-20">BSC</th>
            <th className="py-1.5 pr-3 text-white/70 font-medium w-20">AI Layer</th>
            <th className="py-1.5 text-white/70 font-medium">Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.name} className="border-b border-white/10">
              <td className="py-1.5 pr-3 font-medium text-white/90">{r.name}</td>
              <td className="py-1.5 pr-3 text-white/70">{r.fee}</td>
              <td className="py-1.5 pr-3 text-white/70">{r.bsc}</td>
              <td className="py-1.5 pr-3 text-white/70">{r.ai}</td>
              <td className="py-1.5 text-white/70">{r.status}</td>
            </tr>
          ))}
          <tr>
            <td className="py-1.5 pr-3 font-bold text-white">ClawFriend</td>
            <td className="py-1.5 pr-3"><Badge accent>5% vĩnh viễn</Badge></td>
            <td className="py-1.5 pr-3 text-white font-medium">BSC-first</td>
            <td className="py-1.5 pr-3 text-white font-medium">Có</td>
            <td className="py-1.5"><Badge accent>Launching</Badge></td>
          </tr>
        </tbody>
      </table>
      <div className="glass rounded-xl px-[3%] py-[2%] flex items-center gap-[3%]" style={{ fontSize: 'clamp(11px, 1vw, 15px)' }}>
        <span className="text-white/60">Pattern chung của tất cả đối thủ:</span>
        <Badge>Không BSC focus</Badge>
        <Badge>Không AI layer</Badge>
        <Badge>Không creator economics</Badge>
        <span className="ml-auto text-white font-medium">ClawFriend có đủ cả 3.</span>
      </div>
    </ContentSlideLayout>
  )
}

export function Slide4() {
  return (
    <ContentSlideLayout videoIndex={3} pageLabel="Trang 004" title="Phân tích sâu đối thủ" footer="Competitor Analysis">
      <div className="grid grid-cols-2 gap-[3%] mb-[3%]">
        <div className="glass rounded-xl p-[3%]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-white font-semibold" style={{ fontSize: 'clamp(13px, 1.2vw, 18px)' }}>Cooker.club</span>
            <Badge>Chết — 2/2026</Badge>
          </div>
          <ul className={bullet} style={{ fontSize: 'clamp(11px, 1vw, 15px)' }}>
            <li>BSC + Solana, bonding curve AI agent token</li>
            <li>Dưới 100 agent giữa 2025; website sập hoàn toàn</li>
          </ul>
          <div className="mt-3 glass rounded-lg px-3 py-2" style={{ fontSize: 'clamp(10px, 0.95vw, 14px)' }}>
            <span className="text-white/60">Nguyên nhân → </span>
            <span className="text-white/90">Creator nhận 0% phí. Không có lý do để build. Flywheel không chạy.</span>
          </div>
        </div>
        <div className="glass rounded-xl p-[3%]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-white font-semibold" style={{ fontSize: 'clamp(13px, 1.2vw, 18px)' }}>Moltbook</span>
            <Badge>1M agent — đi ngang</Badge>
          </div>
          <ul className={bullet} style={{ fontSize: 'clamp(11px, 1vw, 15px)' }}>
            <li>Web2 only, chạy trên OpenClaw</li>
            <li>1M+ agent trong 5 ngày (CNBC, 1/2026)</li>
          </ul>
          <div className="mt-3 glass rounded-lg px-3 py-2" style={{ fontSize: 'clamp(10px, 0.95vw, 14px)' }}>
            <span className="text-white/60">Nguyên nhân → </span>
            <span className="text-white/90">Creator kiếm $0. Viral nhưng không sticky — distribution không bền vì không có economics.</span>
          </div>
        </div>
      </div>
      <div className="glass rounded-xl p-[3%]">
        <Label>Rủi ro của ClawFriend — không giấu</Label>
        <div className="grid grid-cols-3 gap-[3%]" style={{ fontSize: 'clamp(11px, 1vw, 15px)' }}>
          <div>
            <p className="text-white font-medium mb-0.5">Quy mô</p>
            <p className="text-white/75">Moltbook 1M agent, GPT Store 50K+ GPTs — ClawFriend bắt đầu từ không</p>
          </div>
          <div>
            <p className="text-white font-medium mb-0.5">Phân phối</p>
            <p className="text-white/75">Cần chiến lược content mạnh và anchor creator ngay tháng 1</p>
          </div>
          <div>
            <p className="text-white font-medium mb-0.5">Thực thi</p>
            <p className="text-white/75">3 module đồng nghĩa độ phức tạp cao hơn đáng kể so với single-product</p>
          </div>
        </div>
      </div>
    </ContentSlideLayout>
  )
}

export function Slide5() {
  const pains = [
    { name: 'Whale / smart money', evidence: 'Nansen 69–999$/tháng, thiên ETH' },
    { name: 'Rug token detection', evidence: '2.000–5.000 rug/tháng trên BSC' },
    { name: 'Yield farming', evidence: 'Beefy Finance — 300M+ TVL BSC' },
    { name: 'Airdrop tracking', evidence: '4,5 tỷ USD phân bổ 2025 — 70% không claim' },
    { name: 'Social sentiment', evidence: 'LunarCrush 72$/tháng, dưới 10% coverage BSC' },
    { name: 'Token launch detection', evidence: '100–200 cặp BSC mới mỗi ngày' },
    { name: 'Portfolio tracking', evidence: '45–60 phút/ngày, hoàn toàn thủ công' },
  ]
  return (
    <ContentSlideLayout videoIndex={4} pageLabel="Trang 007" title="Nghiên cứu Skill" footer="Skill Research">
      <div className="glass rounded-xl px-[3%] py-[2%] mb-[3%] flex items-center gap-[4%]" style={{ fontSize: 'clamp(12px, 1.05vw, 16px)' }}>
        <span className="text-white/75">Vấn đề:</span>
        <span className="text-white font-medium">Trader BSC tốn 4–12 giờ/tuần để research thủ công</span>
        <Arrow />
        <span className="text-white/85">10–15 phút/token × 20–50 token/tuần</span>
      </div>
      <div className="grid grid-cols-3 gap-[3%] mb-[3%]">
        <div className="glass rounded-xl p-[3%] col-span-1">
          <Label>Tiêu chí chọn skill</Label>
          <ul className={bullet} style={{ fontSize: 'clamp(11px, 1vw, 15px)' }}>
            <li>Có tool trả phí chứng minh demand</li>
            <li>Có khoảng trống trên BSC</li>
            <li>Build được bằng public API</li>
          </ul>
        </div>
        <div className="glass rounded-xl p-[3%] col-span-2">
          <Label>7 pain clusters</Label>
          <div className="grid grid-cols-1 gap-y-1" style={{ fontSize: 'clamp(10px, 0.95vw, 14px)' }}>
            {pains.map((p, i) => (
              <div key={i} className="flex items-baseline gap-2 border-b border-white/10 last:border-0 pb-1 last:pb-0">
                <span className="text-white/50 shrink-0 tabular-nums">{i + 1}.</span>
                <span className="text-white/90 shrink-0">{p.name}</span>
                <span className="text-white/50 mx-1">—</span>
                <span className="text-white/70">{p.evidence}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ContentSlideLayout>
  )
}

export function Slide6() {
  return (
    <ContentSlideLayout videoIndex={0} pageLabel="Trang 008" title="Top 3 Skill — Demand có thể đếm được" footer="Top 3 Skills">
      <div className="space-y-[2.5%]">
        {/* Skill 1 */}
        <div className="glass rounded-xl p-[2.5%]">
          <div className="flex items-start justify-between gap-4 mb-1.5">
            <span className="text-white font-semibold" style={{ fontSize: 'clamp(12px, 1.15vw, 18px)' }}>
              #1 — BSC Token Safety Scanner
            </span>
            <Badge accent>Ưu tiên cao nhất</Badge>
          </div>
          <p className="text-white/75 mb-2" style={{ fontSize: 'clamp(10px, 0.9vw, 14px)' }}>
            2 giây AI vs 10–15 phút thủ công · Công cụ hiện tại: TokenSniffer + RugDoc + DexTools = <strong className="text-white/90">39$/tháng</strong>, rời rạc
          </p>
          <div className="flex flex-wrap gap-2" style={{ fontSize: 'clamp(9px, 0.85vw, 12px)' }}>
            <Badge>Token Sniffer 1M+ quét/tháng</Badge>
            <Badge>r/CryptoMoonShots 1,2M sub</Badge>
            <Badge>@RugCheckerBSC 120K follower</Badge>
            <Badge>Search "BSC rug check" 40K/tháng</Badge>
          </div>
          <p className="text-white/65 mt-1.5" style={{ fontSize: 'clamp(10px, 0.9vw, 13px)' }}>
            Model: Public 3 scan free/ngày → Holder: full analysis + Telegram alert tức thì
          </p>
        </div>
        {/* Skill 2 */}
        <div className="glass rounded-xl p-[2.5%]">
          <div className="flex items-start justify-between gap-4 mb-1.5">
            <span className="text-white font-semibold" style={{ fontSize: 'clamp(12px, 1.15vw, 18px)' }}>
              #2 — BSC Smart Money Tracker
            </span>
            <Badge>Thị trường lớn nhất</Badge>
          </div>
          <p className="text-white/75 mb-2" style={{ fontSize: 'clamp(10px, 0.9vw, 14px)' }}>
            Whale alert dưới 60 giây vs 30–45 phút thủ công/ngày · Nansen: <strong className="text-white/90">69–999$/tháng</strong>, 90% signal là ETH
          </p>
          <div className="flex flex-wrap gap-2" style={{ fontSize: 'clamp(9px, 0.85vw, 12px)' }}>
            <Badge>@WhaleAlert 2,5M Twitter</Badge>
            <Badge>@lookonchain 1,2M (BSC-focused)</Badge>
            <Badge>t.me/BSCWhaleCalls 25K</Badge>
            <Badge>Search "whale alert" 80K/tháng</Badge>
          </div>
          <p className="text-white/65 mt-1.5" style={{ fontSize: 'clamp(10px, 0.9vw, 13px)' }}>
            Model: Public top 10 whale delay 15 phút → Holder: real-time + custom 50 ví
          </p>
        </div>
        {/* Skill 3 */}
        <div className="glass rounded-xl p-[2.5%]">
          <div className="flex items-start justify-between gap-4 mb-1.5">
            <span className="text-white font-semibold" style={{ fontSize: 'clamp(12px, 1.15vw, 18px)' }}>
              #3 — Token Launch Intelligence
            </span>
            <Badge>Viral potential</Badge>
          </div>
          <p className="text-white/75 mb-2" style={{ fontSize: 'clamp(10px, 0.9vw, 14px)' }}>
            Cặp mới + quét an toàn trong 60 giây · 100–200 cặp BSC mới/ngày · Tái dùng engine #1 — chỉ 2–3 ngày build thêm
          </p>
          <div className="flex flex-wrap gap-2" style={{ fontSize: 'clamp(9px, 0.85vw, 12px)' }}>
            <Badge>t.me/BSCSnipers 35K thành viên</Badge>
            <Badge>r/CryptoMoonShots: top comment = "Check rugdoc trước"</Badge>
            <Badge>Maestro + TokenSniffer = 40$/tháng, tách rời</Badge>
          </div>
          <p className="text-white/65 mt-1.5" style={{ fontSize: 'clamp(10px, 0.9vw, 13px)' }}>
            Model: Public feed + điểm cơ bản → Holder: Telegram tức thì + full analysis
          </p>
        </div>
      </div>
    </ContentSlideLayout>
  )
}

export function Slide7() {
  const matrix = [
    { name: 'Token Safety Scanner', pain: 'Nghiêm trọng', market: '1M+ quét/tháng', gap: 'Mạnh', effort: 'Dễ' },
    { name: 'Smart Money Tracker', pain: 'Cao', market: 'Market $200M+', gap: 'Mạnh', effort: 'Trung bình' },
    { name: 'Token Launch Intelligence', pain: 'Nghiêm trọng', market: 'Cộng đồng 1,2M', gap: 'Mạnh', effort: 'Dễ (tái #1)' },
    { name: 'Airdrop Intelligence', pain: 'Cao', market: '4,5 tỷ USD/năm', gap: 'Rất cao', effort: 'Trung bình' },
    { name: 'Yield Optimizer', pain: 'Trung bình', market: '300M+ TVL BSC', gap: 'Trung bình', effort: 'Dễ' },
    { name: 'Social Alpha Scanner', pain: 'Trung bình', market: 'Market $100M+', gap: 'Rất cao', effort: 'Khó' },
  ]
  return (
    <ContentSlideLayout videoIndex={1} pageLabel="Trang 010" title="Holder Flywheel" footer="Skills Matrix">
      <table className="w-full border-collapse text-left mb-[3%]" style={{ fontSize: 'clamp(10px, 0.92vw, 14px)' }}>
        <thead>
          <tr className="border-b border-white/20">
            {['Skill', 'Pain', 'Thị trường', 'Khe hở BSC', 'Build'].map(h => (
              <th key={h} className="py-2 pr-4 text-white/60 font-medium">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {matrix.map((r, i) => (
            <tr key={i} className={`border-b border-white/10 ${i < 3 ? 'text-white/90' : 'text-white/65'}`}>
              <td className="py-2 pr-4 font-medium">{r.name}</td>
              <td className="py-2 pr-4">{r.pain}</td>
              <td className="py-2 pr-4">{r.market}</td>
              <td className="py-2 pr-4">{r.gap}</td>
              <td className="py-2">{r.effort}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Flywheel */}
      <div className="glass rounded-xl px-[3%] py-[2.5%] mb-[3%]">
        <Label>Vòng quay Holder-Gated</Label>
        <div className="flex items-center gap-2 flex-wrap" style={{ fontSize: 'clamp(11px, 1vw, 15px)' }}>
          <span className="text-white/90">Output public chất lượng</span>
          <Arrow />
          <span className="text-white/90">BSC degens mua share</span>
          <Arrow />
          <span className="text-white/90">Creator kiếm 5%</span>
          <Arrow />
          <span className="text-white/90">Đầu tư data tốt hơn</span>
          <Arrow />
          <span className="text-white/90">Signal mạnh hơn</span>
          <Arrow />
          <Badge accent>Loop</Badge>
        </div>
      </div>
      {/* Comparison */}
      <div className="grid grid-cols-2 gap-[3%]">
        <div className="glass rounded-xl p-[2.5%]" style={{ fontSize: 'clamp(11px, 1vw, 15px)' }}>
          <p className="text-white/60 mb-1">Subscription (LunarCrush)</p>
          <p className="text-white/85">Trả 72$/tháng <Arrow /> hủy <Arrow /> quan hệ về 0$</p>
        </div>
        <div className="glass rounded-xl p-[2.5%]" style={{ fontSize: 'clamp(11px, 1vw, 15px)' }}>
          <p className="text-white font-medium mb-1">Holder-gated (ClawFriend)</p>
          <p className="text-white/85">Mua 1 share <Arrow /> access mãi mãi <Arrow /> share giữ giá trị <Arrow /> creator kiếm vĩnh viễn</p>
        </div>
      </div>
    </ContentSlideLayout>
  )
}

export function Slide8() {
  return (
    <ContentSlideLayout videoIndex={2} pageLabel="Trang 011" title="Kế hoạch phân phối" footer="Distribution Plan">
      <p className="text-white/60 -mt-[1%] mb-[2%]" style={{ fontSize: 'clamp(11px, 1vw, 14px)' }}>
        10.000 USD · Tháng 1 · Mục tiêu: 1.035 đăng ký
      </p>
      <div className="grid grid-cols-3 gap-[3%] mb-[3%]">
        <Stat value="$9.66" label="CAC blended" />
        <Stat value="$15.46" label="CAC kênh trả phí" />
        <Stat value="1.035" label="đăng ký ước tính (bảo thủ)" />
      </div>
      <table className="w-full border-collapse text-left mb-[2%]" style={{ fontSize: 'clamp(11px, 1vw, 15px)' }}>
        <thead>
          <tr className="border-b border-white/20">
            <th className="py-1.5 pr-3 text-white/60 font-medium">Kênh</th>
            <th className="py-1.5 pr-3 text-white/60 font-medium w-24">Ngân sách</th>
            <th className="py-1.5 pr-3 text-white/60 font-medium w-16">Tỷ lệ</th>
            <th className="py-1.5 text-white/60 font-medium w-24">Ước đăng ký</th>
          </tr>
        </thead>
        <tbody className="text-white/85">
          <tr className="border-b border-white/10"><td className="py-1 pr-3">Twitter/X Paid Ads</td><td>4.000 USD</td><td>40%</td><td>160</td></tr>
          <tr className="border-b border-white/10"><td className="py-1 pr-3">Telegram KOL + Groups</td><td>3.500 USD</td><td>35%</td><td>325</td></tr>
          <tr className="border-b border-white/10"><td className="py-1 pr-3">Social Stream — tự phân phối</td><td className="text-white/50">0 USD</td><td>—</td><td>200</td></tr>
          <tr className="border-b border-white/10"><td className="py-1 pr-3">Content + Cộng đồng</td><td className="text-white/50">0 USD</td><td>—</td><td>200</td></tr>
          <tr className="border-b border-white/10"><td className="py-1 pr-3">Đối tác BSC Ecosystem</td><td>2.000 USD</td><td>20%</td><td>150</td></tr>
          <tr><td className="py-1 pr-3 text-white/50">Dự phòng / A-B test</td><td className="text-white/50">500 USD</td><td className="text-white/50">5%</td><td className="text-white/50">—</td></tr>
        </tbody>
      </table>
      <p className="text-white/50" style={{ fontSize: 'clamp(10px, 0.88vw, 13px)' }}>
        4K Twitter → CPC $1 → CVR 4% → 160 · 3,5K Telegram → 430K reach → CTR 1,5% → CVR 5% → 325 · Referral 2K ($10/đăng ký) → 150+. Không giả định viral, không giả định grant.
      </p>
    </ContentSlideLayout>
  )
}

export function Slide9() {
  return (
    <ContentSlideLayout videoIndex={3} pageLabel="Trang 012" title="3 kênh chính" footer="Channels">
      <div className="space-y-[2.5%]">
        <div className="glass rounded-xl p-[2.5%]">
          <div className="flex items-center gap-3 mb-1.5">
            <span className="text-white font-semibold" style={{ fontSize: 'clamp(12px, 1.1vw, 17px)' }}>Telegram KOL + Groups</span>
            <Badge accent>CAC $10.77 — thấp nhất</Badge>
            <span className="text-white/50 ml-auto">3.500 USD · 325 đăng ký</span>
          </div>
          <p className="text-white/75 mb-1.5" style={{ fontSize: 'clamp(10px, 0.92vw, 14px)' }}>
            Nhóm mục tiêu: BSCSignalsOfficial 120K · BSCArmyCalls 80K · BSCWhalePumps 60K · PancakeSwapHunters 50K
          </p>
          <p className="text-white/55" style={{ fontSize: 'clamp(10px, 0.88vw, 13px)' }}>
            Nguyên tắc bắt buộc: Mỗi message phải mang alpha thực. Người dùng BSC Telegram nhận ra quảng cáo trong 0,5 giây và bỏ qua ngay.
          </p>
        </div>
        <div className="glass rounded-xl p-[2.5%]">
          <div className="flex items-center gap-3 mb-1.5">
            <span className="text-white font-semibold" style={{ fontSize: 'clamp(12px, 1.1vw, 17px)' }}>Twitter/X Ads</span>
            <span className="text-white/50 ml-auto">4.000 USD · 160 đăng ký · CAC $25</span>
          </div>
          <div className="grid grid-cols-2 gap-[3%]" style={{ fontSize: 'clamp(10px, 0.92vw, 14px)' }}>
            <div>
              <p className="text-white/60 mb-1">Audience (theo follower):</p>
              <p className="text-white/80">PancakeSwap 2M · BNBChain 1,8M · WhaleAlert 2,5M · ai16z 1M+</p>
            </div>
            <div>
              <p className="text-white/60 mb-1">3 creative A/B/C:</p>
              <p className="text-white/80">A: Demo utility · B: "Bạn trả 69$ cho Nansen. 90% là ETH." · C: Creator economics</p>
              <p className="text-white/50 mt-1">Kill trigger: CPC {'>'} $2 sau 500 click → đổi creative ngay</p>
            </div>
          </div>
        </div>
        <div className="glass rounded-xl p-[2.5%]">
          <div className="flex items-center gap-3 mb-1.5">
            <span className="text-white font-semibold" style={{ fontSize: 'clamp(12px, 1.1vw, 17px)' }}>Social Stream — Tự phân phối</span>
            <Badge accent>$0 · ROI vô hạn</Badge>
            <span className="text-white/50 ml-auto">200 organic</span>
          </div>
          <p className="text-white/75 mb-1.5" style={{ fontSize: 'clamp(10px, 0.92vw, 14px)' }}>
            Kênh không đối thủ nào có — platform tự marketing qua output hàng ngày của skill.
          </p>
          <div className="flex flex-wrap gap-x-3 gap-y-1" style={{ fontSize: 'clamp(9px, 0.85vw, 12px)' }}>
            {['Whale digest hàng ngày', 'Per-scan safety → thread X', 'APY farming', 'Airdrop deadlines', 'BSC trending', 'Token launch feed Telegram'].map(s => (
              <Badge key={s}>{s}</Badge>
            ))}
          </div>
        </div>
      </div>
    </ContentSlideLayout>
  )
}

export function Slide10() {
  return (
    <ContentSlideLayout videoIndex={4} pageLabel="Trang 014" title="Anchor Creators + Timeline" footer="Go-to-Market">
      <div className="glass rounded-xl px-[3%] py-[2%] mb-[3%] flex items-center gap-3" style={{ fontSize: 'clamp(12px, 1.05vw, 16px)' }}>
        <span className="text-white font-bold" style={{ fontSize: 'clamp(20px, 2vw, 36px)' }}>5</span>
        <span className="text-white/80">creator đúng người</span>
        <Arrow />
        <span className="text-white font-bold" style={{ fontSize: 'clamp(20px, 2vw, 36px)' }}>100K</span>
        <span className="text-white/80">user tiềm năng</span>
        <Arrow />
        <Badge accent>$0 acquisition</Badge>
      </div>
      <div className="grid grid-cols-3 gap-[3%] mb-[3%]">
        {[
          {
            title: 'Telegram signal operator',
            desc: 't.me/BSCSignalsOfficial — 120K thành viên, curation miễn phí, kiếm $0',
            pitch: '5% phí vĩnh viễn mỗi giao dịch share từ chính community của họ',
          },
          {
            title: 'BSC whale tracker',
            desc: '50K–200K follower, tweet signal miễn phí mỗi ngày',
            pitch: 'Gate real-time alerts sau holder access — ClawFriend lo toàn bộ hạ tầng',
          },
          {
            title: 'Builder OpenClaw',
            desc: 'OpenClaw 135K GitHub stars · 200+ builder hackathon BNB Chain',
            pitch: 'Wrap skill sẵn có, publish, kiếm trên mỗi giao dịch share từ đây về sau',
          },
        ].map(c => (
          <div key={c.title} className="glass rounded-xl p-[3%] flex flex-col" style={{ fontSize: 'clamp(10px, 0.92vw, 14px)' }}>
            <p className="text-white font-semibold mb-1" style={{ fontSize: 'clamp(11px, 1vw, 15px)' }}>{c.title}</p>
            <p className="text-white/65 mb-2">{c.desc}</p>
            <div className="mt-auto glass rounded-lg px-2 py-1.5">
              <span className="text-white/50">Pitch: </span>
              <span className="text-white/85">{c.pitch}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="glass rounded-xl px-[3%] py-[2%]">
        <Label>Timeline Tháng 1</Label>
        <div className="grid grid-cols-4 gap-[2%]" style={{ fontSize: 'clamp(10px, 0.88vw, 13px)' }}>
          {[
            { week: 'Tuần 1', tasks: 'Deploy @ClawFriendBot · Twitter Ads (A) · Book BSCSignalsOfficial · Apply MVB · Liên hệ OpenClaw' },
            { week: 'Tuần 2', tasks: 'A/B test ads · Telegram Tier 2 · Mirror + Reddit · Xác nhận 2 anchor creator' },
            { week: 'Tuần 3', tasks: 'Scale winning +50% · Anchor creator #1 publish + PR · Co-announce GoPlus' },
            { week: 'Tuần 4', tasks: 'Review vs targets · Wrap-up content · Kích hoạt referral · Kế hoạch tháng 2' },
          ].map(w => (
            <div key={w.week}>
              <p className="text-white font-medium mb-1">{w.week}</p>
              <p className="text-white/70">{w.tasks}</p>
            </div>
          ))}
        </div>
      </div>
    </ContentSlideLayout>
  )
}

export function Slide11() {
  return (
    <ContentSlideLayout videoIndex={0} pageLabel="Trang 015" title="AI Showcase — Pipeline nghiên cứu" footer="AI Showcase">
      <div className="glass rounded-xl px-[3%] py-[2.5%] mb-[3%]">
        <div className="flex items-center gap-[4%]" style={{ fontSize: 'clamp(13px, 1.2vw, 20px)' }}>
          <div className="text-center">
            <p className="text-white font-bold">CLAUDE</p>
            <p className="text-white/55 text-xs mt-0.5">Framework · CLAUDE.md · Prompt</p>
          </div>
          <Arrow />
          <div className="text-center">
            <p className="text-white font-bold">PERPLEXITY</p>
            <p className="text-white/55 text-xs mt-0.5">Web real-time · Data có nguồn</p>
          </div>
          <Arrow />
          <div className="text-center">
            <p className="text-white font-bold">CLAUDE</p>
            <p className="text-white/55 text-xs mt-0.5">Tổng hợp · Phân tích · Deliverable</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-[3%] mb-[3%]">
        <div className="glass rounded-xl p-[3%]">
          <Label>3 phát hiện không thể tìm bằng Google thông thường</Label>
          <div className="space-y-2" style={{ fontSize: 'clamp(10px, 0.92vw, 14px)' }}>
            <div className="border-b border-white/10 pb-2">
              <p className="text-white/90 font-medium">Cooker.club — đối thủ BSC trực tiếp</p>
              <p className="text-white/65">Tìm bằng prompt theo module, không phải prompt "tìm competitor". Verify ECONNREFUSED 2/2026 = đình trệ.</p>
            </div>
            <div className="border-b border-white/10 pb-2">
              <p className="text-white/90 font-medium">Moltbook 1M+ agent trong 5 ngày</p>
              <p className="text-white/65">Xác thực 4 nguồn độc lập: CNBC · Guardian · Forbes · NPR. OpenClaw = builder target của ClawFriend.</p>
            </div>
            <div>
              <p className="text-white/90 font-medium">Không có tool sentiment BSC quy mô</p>
              <p className="text-white/65">LunarCrush cover BSC dưới 10% dù 72$/tháng. BSCSignalsOfficial 120K thành viên — kiếm $0 → anchor creator.</p>
            </div>
          </div>
        </div>
        <div className="glass rounded-xl p-[3%]">
          <Label>Nguyên tắc prompt chất lượng</Label>
          <div className="space-y-2" style={{ fontSize: 'clamp(10px, 0.92vw, 14px)' }}>
            <div className="glass rounded-lg p-2">
              <p className="text-white/50 mb-1">Prompt kém</p>
              <p className="text-white/75 italic">"Find competitors of ClawFriend"</p>
              <p className="text-white/50">→ danh sách generic, không dùng được</p>
            </div>
            <div className="glass rounded-lg p-2" style={{ border: '1px solid rgba(210,255,85,0.2)' }}>
              <p className="text-white/50 mb-1">Prompt tốt</p>
              <p className="text-white/85 italic">"Find platforms where creators earn ongoing revenue from trading of assets they created"</p>
              <p className="text-white/65">→ tìm ra Cooker.club + Mint Club</p>
            </div>
            <p className="text-white/65 text-center">7 prompt tập trung &gt; 1 prompt rộng</p>
          </div>
        </div>
      </div>
    </ContentSlideLayout>
  )
}

export function Slide12() {
  const qas = [
    {
      q: 'Đối thủ X có 50K user — tại sao ClawFriend thắng?',
      a: 'Không đối thủ nào đang làm BSC skill marketplace + holder-gated economics. Cooker.club sập 2/2026. Moltbook 1M agent nhưng creator kiếm $0. Virtuals Protocol mạnh trên Base/Solana, không có BSC strategy. ClawFriend: BSC-native + DeFi utility thực + creator economics thực.',
    },
    {
      q: '$10.000 có đủ lấy 1.000 user không?',
      a: '4K Twitter → 160 · 3,5K Telegram → 325 · $0 Social Stream → 200 · $0 Content → 200 · 2K referral → 150+. Tổng ~1.035. Bảo thủ. Không tính viral. Không tính grant.',
    },
    {
      q: 'Tại sao không dùng ChatGPT thay vì ClawFriend?',
      a: 'ChatGPT không đọc on-chain data real-time. Không wallet integration. Không Telegram alert tự động. Không holder-gated model. Smart Money Tracker alert dưới 60 giây — ChatGPT không thể làm điều này.',
    },
    {
      q: 'Tại sao user mua share thay vì chỉ dùng public tier?',
      a: 'Public tier hữu ích nhưng cố ý không đủ để ra quyết định. Smart Money: delay 15 phút = quá muộn copy trade. Safety Scanner: điểm cơ bản = biết risk, chưa đủ vào lệnh. Holder tier = nơi decision-making thực sự. Public = chứng minh giá trị. Holder = monetize giá trị đó.',
    },
  ]
  return (
    <ContentSlideLayout videoIndex={1} pageLabel="Trang 016" title="Q&A — Sẵn sàng phản biện" footer="Q&A Ready">
      <div className="space-y-[2%]">
        {qas.map((qa, i) => (
          <div key={i} className="glass rounded-xl p-[2.5%]">
            <p className="text-white font-semibold mb-1" style={{ fontSize: 'clamp(11px, 1vw, 15px)' }}>
              {qa.q}
            </p>
            <p className="text-white/80" style={{ fontSize: 'clamp(10px, 0.92vw, 14px)' }}>
              {qa.a}
            </p>
          </div>
        ))}
      </div>
      <div
        className="mt-[2.5%] rounded-xl px-[3%] py-[2%] text-center"
        style={{
          background: 'linear-gradient(135deg,rgba(210,255,85,0.12),rgba(210,255,85,0.04))',
          border: '1px solid rgba(210,255,85,0.25)',
        }}
      >
        <p className="text-white font-semibold" style={{ fontSize: 'clamp(12px, 1.1vw, 17px)' }}>
          ClawFriend = duy nhất trên BSC có creator economics + skill marketplace + bonding curve + social stream
        </p>
        <p className="text-white/60 mt-1" style={{ fontSize: 'clamp(10px, 0.9vw, 14px)' }}>
          Không phải first-mover. Là first-mover trả tiền cho creator.
        </p>
      </div>
    </ContentSlideLayout>
  )
}

// ─── NEW SLIDES 13–16 ───────────────────────────────────────────────────────

export function Slide13() {
  const creatorRows = [
    { platform: 'Cooker.club', fee: '0% — all to DAO' },
    { platform: 'GPT Store', fee: '~0% in practice — 99% earn $0' },
    { platform: 'Moltbook', fee: '$0 — no economic layer' },
    { platform: 'Mint Club', fee: 'Custom %, 80% abandoned' },
  ]
  return (
    <ContentSlideLayout videoIndex={0} pageLabel="Trang 005" title="Three Gaps No Competitor Fills" footer="Competitive Gap Analysis">
      <div className="grid grid-cols-3 gap-[3%] h-full">
        {/* Gap 1 */}
        <div className="glass rounded-xl p-[3%] flex flex-col">
          <Label>Gap 1 — Creator Economics</Label>
          <table className="w-full border-collapse mt-1" style={{ fontSize: 'clamp(10px, 0.9vw, 13px)' }}>
            <tbody>
              {creatorRows.map(r => (
                <tr key={r.platform} className="border-b border-white/10">
                  <td className="py-1 pr-2 text-white/80 font-medium">{r.platform}</td>
                  <td className="py-1 text-white/50">{r.fee}</td>
                </tr>
              ))}
              <tr>
                <td className="pt-2 pr-2 font-bold text-white">ClawFriend</td>
                <td className="pt-2"><Badge accent>5% perpetual, on-chain</Badge></td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Gap 2 */}
        <div className="glass rounded-xl p-[3%] flex flex-col gap-3">
          <Label>Gap 2 — No Full Stack on BSC</Label>
          <p className="text-white/80" style={{ fontSize: 'clamp(11px, 1vw, 15px)' }}>
            Among <span className="text-white font-bold">58</span> AI agent projects on BNB Chain,{' '}
            <span className="text-white font-bold">zero</span> combine:
          </p>
          <div className="space-y-2" style={{ fontSize: 'clamp(10px, 0.9vw, 14px)' }}>
            {['Skill marketplace', 'Bonding curve', 'On-chain agent identity'].map(item => (
              <div key={item} className="flex items-center gap-2">
                <span className="text-white/40">◆</span>
                <span className="text-white/85">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-white/40 text-xs mt-auto">Source: BNB Chain 58 projects list</p>
        </div>
        {/* Gap 3 */}
        <div className="glass rounded-xl p-[3%] flex flex-col">
          <Label>Gap 3 — Holder-Gated Access</Label>
          <p className="text-white/65 mb-3" style={{ fontSize: 'clamp(10px, 0.88vw, 13px)' }}>
            No platform has: <em>"hold creator's token = unlock premium skill"</em>
          </p>
          <div className="glass rounded-lg px-3 py-2 mt-auto space-y-1.5" style={{ fontSize: 'clamp(10px, 0.9vw, 14px)' }}>
            <div className="flex items-center gap-2 text-white/80"><span>Great skill</span><Arrow /></div>
            <div className="flex items-center gap-2 text-white/80"><span>Buy shares to access</span><Arrow /></div>
            <div className="flex items-center gap-2 text-white/80"><span>Price rises → Creator earns</span><Arrow /></div>
            <div className="flex items-center gap-2 text-white/80"><span>Better skills published</span><Arrow /></div>
            <Badge accent>Repeat</Badge>
          </div>
        </div>
      </div>
    </ContentSlideLayout>
  )
}

export function Slide14() {
  return (
    <ContentSlideLayout videoIndex={1} pageLabel="Trang 006" title="ClawFriend Positioning" footer="Where We Win, Where We Lose">
      <div className="grid grid-cols-2 gap-[3%] mb-[3%]">
        <div className="glass rounded-xl p-[3%]">
          <Label>Where we clearly win</Label>
          <table className="w-full border-collapse mt-1" style={{ fontSize: 'clamp(10px, 0.92vw, 14px)' }}>
            <tbody>
              {[
                ['Best creator economics', '5% perpetual, instant, no threshold — vs Cooker 0%, GPT Store 99% earn $0'],
                ['BSC first-mover', 'No competitor has the full stack on BSC'],
                ['Holder-gated skill access', 'Unique flywheel, no precedent in market'],
                ['BNB Chain tailwind', 'ERC-8004 + BAP-578 live, 2026 agent registry roadmap'],
              ].map(([adv, why]) => (
                <tr key={adv} className="border-b border-white/10 last:border-0">
                  <td className="py-1.5 pr-3 font-medium text-white whitespace-nowrap align-top">{adv}</td>
                  <td className="py-1.5 text-white/60">{why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="glass rounded-xl p-[3%]">
          <Label>Where we're honest about losing</Label>
          <table className="w-full border-collapse mt-1" style={{ fontSize: 'clamp(10px, 0.92vw, 14px)' }}>
            <tbody>
              {[
                ['Scale gap vs Moltbook', '1M+ agents vs ClawFriend bootstrapping'],
                ['No distribution parent', 'GPT Store has 200M+ ChatGPT users. We build from zero.'],
                ['Full-stack execution risk', '4 modules simultaneously. Each has a deeper specialist.'],
              ].map(([dis, reality]) => (
                <tr key={dis} className="border-b border-white/10 last:border-0">
                  <td className="py-1.5 pr-3 font-medium text-white/80 whitespace-nowrap align-top">{dis}</td>
                  <td className="py-1.5 text-white/55">{reality}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div
        className="rounded-xl px-[3%] py-[2.5%]"
        style={{
          background: 'linear-gradient(135deg,rgba(210,255,85,0.1),rgba(210,255,85,0.03))',
          border: '1px solid rgba(210,255,85,0.2)',
        }}
      >
        <p className="text-white/60 mb-1" style={{ fontSize: 'clamp(10px, 0.9vw, 13px)' }}>Positioning statement</p>
        <p className="text-white font-medium" style={{ fontSize: 'clamp(12px, 1.1vw, 18px)' }}>
          Not competing with Moltbook on social scale, nor GPT Store on distribution.
        </p>
        <p className="text-white/80 mt-1" style={{ fontSize: 'clamp(12px, 1.05vw, 17px)' }}>
          Building the one thing none of them have:{' '}
          <span className="text-white font-semibold">an AI agent economy with creator economics that actually work on BSC.</span>
        </p>
      </div>
    </ContentSlideLayout>
  )
}

export function Slide15() {
  return (
    <ContentSlideLayout videoIndex={2} pageLabel="Trang 009" title="Skills #3, #5, #6 — Same Flywheel, Different Entry" footer="Supporting Skills">
      <div className="space-y-[2.5%]">
        <div className="glass rounded-xl p-[2.5%]">
          <div className="flex items-start justify-between gap-4 mb-1.5">
            <span className="text-white font-semibold" style={{ fontSize: 'clamp(12px, 1.1vw, 17px)' }}>
              #3 — PancakeSwap Yield Optimizer
            </span>
            <Badge>Largest existing paying base</Badge>
          </div>
          <p className="text-white/75" style={{ fontSize: 'clamp(10px, 0.9vw, 14px)' }}>
            Beefy Finance BSC TVL: <strong className="text-white">$300M+</strong> — users already paying 0.5–4.5% fee on rewards.
            Manual compounding loses 1–3% APY/yr. On $50K: <strong className="text-white">$500–$1,500/year lost</strong>.
          </p>
          <p className="text-white/55 mt-1" style={{ fontSize: 'clamp(10px, 0.88vw, 13px)' }}>
            ClawFriend model: advisory + alerts — you keep your yield. Beefy takes 2% = ~$1,000/yr on $50K.
          </p>
        </div>
        <div className="glass rounded-xl p-[2.5%]">
          <div className="flex items-start justify-between gap-4 mb-1.5">
            <span className="text-white font-semibold" style={{ fontSize: 'clamp(12px, 1.1vw, 17px)' }}>
              #5 — BSC Social Alpha Scanner
            </span>
            <Badge>Highest viral potential</Badge>
          </div>
          <p className="text-white/75" style={{ fontSize: 'clamp(10px, 0.9vw, 14px)' }}>
            LunarCrush $72/mo · Santiment $49/mo · Kaito $199/mo — all ETH/BTC-first.{' '}
            <strong className="text-white">BSC coverage: &lt;10%.</strong>{' '}
            BSCSignalsOfficial: <strong className="text-white">120K members</strong> getting manual curation for free → operator earns $0 → ClawFriend is the monetization tool.
          </p>
        </div>
        <div className="glass rounded-xl p-[2.5%]">
          <div className="flex items-start justify-between gap-4 mb-1.5">
            <span className="text-white font-semibold" style={{ fontSize: 'clamp(12px, 1.1vw, 17px)' }}>
              #6 — Token Launch Intelligence
            </span>
            <Badge accent>Build: +2–3 days on Skill #2</Badge>
          </div>
          <p className="text-white/75" style={{ fontSize: 'clamp(10px, 0.9vw, 14px)' }}>
            Full pipeline nobody covers: launch detection → instant safety scan → entry signal → Telegram delivery.
            Maestro ($50/mo) + Banana Gun ($30/mo) handle execution, no research. Safety scanners do research, no discovery.
          </p>
          <p className="text-white/55 mt-1" style={{ fontSize: 'clamp(10px, 0.88vw, 13px)' }}>
            Shares Skill #2 engine → build once, ship two products.
          </p>
        </div>
      </div>
    </ContentSlideLayout>
  )
}

export function Slide16() {
  const partnerships = [
    { partner: 'BNB Chain MVB', proposal: 'Apply Most Valuable Builder → if accepted: tweet to 1.8M followers', cost: '$0' },
    { partner: 'GoPlus Security', proposal: '"Powered by GoPlus" badge — ClawFriend uses GoPlus API for Skills #2+#6', cost: '$0 reciprocal' },
    { partner: 'DexScreener', proposal: 'ClawFriend safety score appearing on DexScreener BSC listings', cost: '$0–500' },
    { partner: 'OpenClaw Community', proposal: 'Founding Creator: 0% protocol fee 3 months — 200+ builders in active hackathon', cost: '$0' },
    { partner: 'Referral Bounty', proposal: '$10 in BNB per signup, cap 200', cost: '$2,000' },
  ]
  return (
    <ContentSlideLayout videoIndex={3} pageLabel="Trang 013" title="Organic + Partnership Channels" footer="$0 Organic + $2K Partnerships — ~350 signups">
      <div className="grid grid-cols-2 gap-[3%] mb-[2.5%]">
        <div className="glass rounded-xl p-[3%]">
          <Label>Channel 3 — Social Stream · $0 · ~200 signups</Label>
          <p className="text-white/65 mb-2" style={{ fontSize: 'clamp(10px, 0.88vw, 13px)' }}>
            No competitor can replicate this — platform markets itself through skill output.
          </p>
          <div className="flex flex-wrap gap-1.5 mb-2" style={{ fontSize: 'clamp(9px, 0.82vw, 12px)' }}>
            {['Whale digest daily', 'Per-scan SAFE/RUG thread', 'APY top 5 daily', 'Airdrop deadlines weekly', 'Top 5 BSC trending 8AM UTC', 'Token launch feed'].map(s => (
              <Badge key={s}>{s}</Badge>
            ))}
          </div>
          <p className="text-white/50" style={{ fontSize: 'clamp(9px, 0.85vw, 12px)' }}>
            @ClawFriendBot: 3 free scans/day · every output footer → signup link · Cost $0 · On-chain virality: every share purchase auto-posts (same mechanism as friend.tech 2023)
          </p>
        </div>
        <div className="glass rounded-xl p-[3%]">
          <Label>Channel 4 — Technical Content · $0 · ~200 signups</Label>
          <p className="text-white/65 mb-1.5" style={{ fontSize: 'clamp(10px, 0.88vw, 13px)' }}>
            7 communities: r/CryptoMoonShots (1.2M) · r/defi (200K) · r/pancakeswap (50K) · r/ethtrader (1.2M) · BNBChain Discord · PancakeSwap Discord · t.me/BSCScamAlert (40K)
          </p>
          <div className="space-y-1" style={{ fontSize: 'clamp(9px, 0.85vw, 12px)' }}>
            {[
              "W1: 'Why Nansen doesn't work for BSC' + rug pull tutorial",
              'W2: Whale tracking explainer + on-chain rug anatomy',
              'W3: Farming APY comparison with real data',
              'W4: Honest ClawFriend vs tools (tag competitors)',
            ].map(w => <p key={w} className="text-white/65">{w}</p>)}
          </div>
          <p className="text-white/40 mt-1.5 italic" style={{ fontSize: 'clamp(9px, 0.82vw, 12px)' }}>
            Rule: engage 1 week before mentioning ClawFriend.
          </p>
        </div>
      </div>
      <div className="glass rounded-xl p-[3%]">
        <Label>Channel 5 — BSC Partnerships + Referral · $2,000 · ~150 signups</Label>
        <table className="w-full border-collapse mt-1" style={{ fontSize: 'clamp(9px, 0.88vw, 13px)' }}>
          <tbody>
            {partnerships.map(p => (
              <tr key={p.partner} className="border-b border-white/10 last:border-0">
                <td className="py-1.5 pr-3 font-medium text-white whitespace-nowrap w-36">{p.partner}</td>
                <td className="py-1.5 pr-3 text-white/70">{p.proposal}</td>
                <td className="py-1.5 text-white/50 whitespace-nowrap">{p.cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ContentSlideLayout>
  )
}
