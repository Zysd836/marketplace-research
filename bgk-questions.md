# Câu hỏi BGK — Trả lời sẵn

> **Nguồn:** Tổng hợp từ `competitive-landscape.md` · `skill-research.md` · `distribution-plan.md`
> **Mục đích:** Chuẩn bị trước cho phần Q&A — BGK sẽ hỏi những câu này.

---

## 1. "Đối thủ X đã có 50K user, tại sao marketplace mình sẽ thắng?"

**Trả lời ngắn:**

Không có đối thủ nào đang focus **BSC skill marketplace với holder-gated model**. Không phải cạnh tranh với platform 50K user — ClawFriend lấp **khoảng trống greenfield trên BSC**.

**Phân tích cụ thể (số liệu):**

| Đối thủ | User / Scale | Thiếu gì | ClawFriend có gì |
|---------|--------------|----------|------------------|
| **Cooker.club** | <100 agents, website down | Không có Skill Market, creator earn $0 từ trading | Skill Market + 5% perpetual fee cho creator |
| **Virtuals Protocol** | Peak $4.18M Q1/2025, đang -97% | Chỉ Base/Solana, không có BSC-native skill, không có utility layer | BSC-native + real DeFi utility (whale tracker, token safety) |
| **Moltbook** | 1M+ agents, 1.5M users | Zero economic layer, không skill monetization, không bonding curve | Bonding curve + Skill Market + social — full 3 layer |
| **friend.tech** | Dead, $0 daily | Không có skill, key = speculation thuần | Skill tạo utility độc lập — holder giữ shares vì skill hữu ích |
| **GPT Store** | 50K+ GPTs, 200M users | 99% creators earn $0, không có holder-gated, không on-chain | Creator ownership thật, 5% transparent, holder-gated speculation upside |

**Kết luận:** Đối thủ lớn chỉ có 1 trong 3 layer (bonding curve / skill market / social). ClawFriend combine đủ cả 3 trên BSC — segment chưa ai serve. PancakeSwap 500K+ daily users, 80%+ BSC users là retail DeFi traders — đúng persona target.

*Nguồn: [competitive-landscape.md](competitive-landscape.md) · [distribution-plan.md](distribution-plan.md)*

---

## 2. "Skill này có ai thực sự cần không? Nó có drive user đến platform không?"

**Trả lời ngắn:**

Có. Mỗi skill đã có **bằng chứng demand thực**: search volume, tool trả phí đang tồn tại, community size. Skill drive user qua **holder-gated flywheel**: public tier hữu ích → user đến agent profile → muốn real-time/đầy đủ → mua share.

**Bằng chứng demand — 5 skill tháng đầu:**

| Skill | Search volume / tháng | Tool trả phí hiện tại | Drive user thế nào |
|-------|------------------------|------------------------|--------------------|
| **BSC Smart Money Tracker** | 80K "whale alert crypto", 50–100K "crypto whale tracker" | Nansen $69+/tháng (100K+ user), Lookonchain $99/tháng | Public: top 10 whale delay 15 phút. Holder: real-time <60s → degen mua share để copy kịp |
| **BSC Token Safety Scanner** | 40K "BSC rug check", 20–30K "BSC token analysis" | Token Sniffer $9.99 + RugDoc $19 + DexTools $10 = $39/tháng | 3 scan free/ngày → viral. Holder: full analysis + alert real-time |
| **PancakeSwap Yield Optimizer** | Beefy 97% TVL BSC mất → user rời | Beefy 2% yield fee | Alert farm APY vs trích % — holder có signal trước |
| **BSC Airdrop Intelligence** | $4.5B airdrop 2025, 45% miss claim | Không có tool BSC-native | Eligibility real-time, holder priority |
| **BSC Social Alpha Scanner** | LunarCrush $72/tháng, BSC <10% coverage | LunarCrush, Santiment | Holder: sentiment BSC-native real-time |

**Ví dụ Skill #1 — "đã có 5 tool trả phí" = demand thực:**
- Nansen 100K+ user, 10K+ paid $69+/tháng
- Lookonchain 1.2M followers, $99/tháng
- Whale Alert 2.5M followers, $29.95–99/tháng
- DeBank Pro $15/tháng
- Arkham $50/tháng

Thị trường whale tracking: $200M+/năm. BSC retail đang bị bỏ ngỏ — không có sản phẩm chuyên biệt $5–15/tháng.

*Nguồn: [skill-research.md](skill-research.md) — mỗi skill có bảng "Bằng chứng Demand" chi tiết*

---

## 3. "$10K budget cho tháng đầu có đủ để có 1,000 user không?"

**Trả lời ngắn:**

Có. **~955 signups** (conservative), blended CAC **$10.47**. Không assume viral, không assume grant.

**Unit economics chi tiết:**

| Kênh | Budget | CPC / Reach | Clicks | CVR | Signups | CAC |
|------|--------|-------------|--------|-----|---------|-----|
| Twitter Ads | $4,000 | CPC $1.00 | 4,000 | 2% (Web3 friction) | 80 | $50 |
| Telegram KOL + Groups | $3,500 | 430K reach, CTR 1.5% | 6,450 | 5% | 325 | $10.77 |
| Social Stream + Bot | $0 | Organic | — | — | ~200 | $0 |
| Content + Community | $0 | BinanceSquare, Reddit | — | — | ~200 | $0 |
| Referral bounty | $2,000 | $10 BNB/signup | — | — | ~150 | ~$13 |
| **Tổng** | **$10,000** | | | | **~955** | **$10.47** |

**Giải thích CVR 2% Twitter (thấp hơn Web2 benchmark 4%):** BSC wallet connection + Twitter verification = friction. Compensate bằng targeting: audience đã hold BSC wallet = friction thực tế thấp hơn cold traffic.

**Funnel sau signup:** 955 signups → ~280 active (30% mua first share) → ~55 traders (20% of active, >1 trade).

*Nguồn: [distribution-plan.md](distribution-plan.md)*

---

## 4. "Tại sao user không dùng ChatGPT/Claude thay vì dùng skill trên platform?"

**Trả lời ngắn:**

ChatGPT/Claude **không có** on-chain data real-time, không integrate wallet, không gửi Telegram alert, không có holder-gated. Skill ClawFriend là **on-chain agents** với live data stream — fundamental difference.

**So sánh cụ thể:**

| Yếu tố | ChatGPT / Claude | ClawFriend Skill |
|--------|------------------|------------------|
| On-chain data | Không — cutoff date, không đọc BSC | Real-time — BscScan, Dexscreener, WebSocket |
| Wallet integration | Không | Trực tiếp — holder-gated access |
| Telegram alert | Không | Alert <60 giây khi whale move |
| Output | Text trả lời chung chung | Verdict + số liệu on-chain + link copy-trade |
| Monetization | Subscription OpenAI | Hold share — có thể resell, creator earn 5% |

**Ví dụ thực tế:**
- Hỏi ChatGPT: "Whale nào đang accumulate trên BSC ngay lúc này?" → Không biết.
- ClawFriend BSC Smart Money Tracker → Alert trong 60 giây với địa chỉ ví + token + số lượng.

**Về "mất 3h/ngày tự làm":** Skill #1 — trader thủ công mất 30–45 phút/ngày theo dõi 10–20 ví. Skill #2 — 10–15 phút/token × 20–50 token/tuần = 4–12 giờ/tuần. Skill thay thế hoàn toàn — user hold share thay vì trả subscription và vẫn có thể resell.

*Nguồn: [distribution-plan.md](distribution-plan.md) · [skill-research.md](skill-research.md)*

---

## 5. (Bonus) "Tại sao user mua shares thay vì chỉ dùng public tier?"

**Trả lời:**

Public tier được thiết kế **hữu ích nhưng cố ý không đủ**:

- **Smart Money Tracker:** Delay 15 phút = thấy whale đã vào nhưng **quá muộn để copy**. Holder: real-time <60s.
- **Token Safety Scanner:** Public = risk score cơ bản. Holder = full analysis + biết **chính xác** risk flag gì.
- **Yield Optimizer:** Public = top farm. Holder = alert trước khi APY thay đổi.

Holder tier là nơi **decision-making thực sự** xảy ra. Public tier = proof of value. Holder tier = nơi có tiền.

*Nguồn: [distribution-plan.md](distribution-plan.md)*

---

*File này dùng để ôn trước buổi present. Chi tiết đầy đủ xem tại competitive-landscape.md, skill-research.md, distribution-plan.md.*
