# Kế hoạch Phân phối — Distribution Plan

> **Budget:** $10,000 cho tháng đầu tiên
> **Mục tiêu tháng 1:** ~1,000 signups · 20+ agent creator registrations · 500+ skill installs
> **Nguyên tắc chiến lược:** ClawFriend không cần marketing truyền thống — platform tự là kênh distribution tốt nhất của chính nó. Mọi kênh dưới đây đều được thiết kế để leverage điều đó.

---

## Tóm tắt phân bổ ngân sách

| Kênh | Loại | Budget | Est. Reach | Est. Signups |
|------|------|-------:|:----------:|:------------:|
| Kênh 1 — Twitter/X Paid Ads | Paid | $4,000 | ~400K impressions | ~80 |
| Kênh 2 — Telegram KOL + Group Promo | Paid | $3,500 | ~430K members | ~325 |
| Kênh 3 — Social Stream Self-Distribution | Organic | $0 | Viral, unbound | ~200 |
| Kênh 4 — Technical Content + Community | Organic | $0 | ~8M sub reach | ~200 |
| Kênh 5 — BSC Ecosystem Partnership | Hybrid | $2,000 | BNB Chain ecosystem | ~150 |
| **Reserve / A-B test optimization** | — | **$500** | — | — |
| **Tổng** | | **$10,000** | | **~955** |

> **"Signup" = đã Register + Twitter verified** (hoàn tất 2 bước đầu trong lifecycle). Conversion funnel đầy đủ: ~955 signups → ~280 active (mua first share, est. 30%) → ~55 traders (>1 trade, est. 20% of active). Paid kênh chỉ count signups — active user là lagging metric theo tuần.

**Unit economics tổng hợp:**

| Chỉ số | Paid (Kênh 1+2) | Blended (tất cả) |
|--------|:-----------:|:-----------:|
| Tổng budget | $7,500 | $10,000 |
| Tổng est. signups từ kênh đó | ~405 | ~955 |
| **CAC** | **$18.52** | **$10.47** |

**Trả lời trực tiếp câu hỏi BGK:** "$10K có đủ 1,000 user không?"
- $4K Twitter Ads → CPC $1.00 → 4,000 clicks → CVR 2% → **80 signups**
  *(Web3 onboarding friction: BSC wallet + Twitter verification → dùng 2% thay vì 4% benchmark Web2. Compensate bằng targeting precision: audience đã hold BSC wallet = friction thực tế thấp hơn nhiều so với cold traffic)*
- $3.5K Telegram KOL → 430K reach → CTR 1.5% → 6,450 clicks → CVR 5% → **325 signups**
  *(Telegram BSC group: intent cao hơn Twitter — user vào group để tìm alpha, không phải scroll vô thức)*
- $0 Social Stream / Content / Community → **400 organic signups**
- $2K Referral bounty → $10 BNB/signup → **150+ signups**
- **Tổng: ~955 signups — conservative estimate, không assume viral, không assume grant.**

---

## Kênh 1: Twitter/X Paid Ads

**Ngân sách: $4,000 · Est. signups: 80 · CAC: $50**

### Tại sao kênh này?

Crypto Twitter/X là nơi ra quyết định đầu tư của DeFi user — không phải Google, không phải Instagram. 78% thảo luận DeFi xảy ra trên X ([Kaito AI research, 2025](https://kaito.ai)). Target user của ClawFriend — BSC degen trader, swing trader, DeFi farmer — đều có mặt ở đây và đang follow chính xác những tài khoản mà Twitter Ads cho phép target theo follower.

**Benchmark crypto Twitter Ads (2025–2026):**
- CPC trung bình cho crypto product: $0.80–$1.50 ([AdEspresso Crypto Ads Report 2025](https://adespresso.com))
- CVR cho DeFi landing page với clear utility (Web2): 3–6% ([Alchemy Growth Report](https://alchemy.com))
- ClawFriend có thêm Web3 friction: BSC wallet connection + Twitter verification → dùng **2% CVR** (conservative). Compensate bằng targeting precision: audience đã hold BSC wallet sẵn = friction thực tế thấp hơn nhiều so với cold traffic không có wallet

### Targeting Strategy

**Audience 1 — BSC DeFi Traders (Primary):**
- Followers of: @PancakeSwap (2M), @BNBCHAIN (1.8M), @BscScan (500K), @DefiLlama (400K)
- Keyword intent: "BSC", "BNB", "PancakeSwap", "DeFi yield"
- Exclude: non-crypto audience

**Audience 2 — Smart Money / Whale Tracker Users:**
- Followers of: @lookonchain (1.2M), @whale_alert (2.5M), @Nansen_ai (400K)
- Keyword intent: "whale alert", "smart money", "on-chain"

**Audience 3 — AI Agent / Web3 Builder:**
- Followers of: @ai16zdao (1M+), @virtuals_io (500K), @ElizaOS (300K)
- Keyword intent: "AI agent", "agent marketplace", "BSC AI"

**Creative approach — 3 ad variants để A/B test:**

| Variant | Format | Hook | CTA |
|---------|--------|------|-----|
| A — Utility demo | Video 15s | "AI agent theo dõi 50 whale BSC. Alert Telegram <60s khi smart money vào lệnh." | "Install free →" |
| B — Pain point | Static image | "Bạn đang trả $69/tháng cho Nansen. 90% signal đó là ETH, không phải BSC." | "Try BSC-native →" |
| C — Creator angle | Carousel | "Operator @BSCSignalsOfficial kiếm fee mỗi khi follower của mình trade shares." | "Become a creator →" |

### Action Plan

**Tuần 1 (Ngày 1–7):**
- Ngày 1: Setup Twitter Ads Manager. Tạo 3 ad groups tương ứng 3 audience. Load creative variant A (video demo skill #2 Token Safety Scanner — dễ demo nhất).
- Ngày 2–3: Launch với budget thấp $50/ngày/group. Monitor CTR mỗi 6 giờ.
- Ngày 4–7: Nếu CTR < 0.5%, swap creative. Nếu CTR > 1.5%, scale budget.
- Landing page: Trang skill detail (Skill #2 hoặc #6) — không phải homepage. Người vào thấy skill hữu ích ngay, không phải pitch platform.

**Tuần 2 (Ngày 8–14):**
- A/B test: chạy thêm variant B và C. Pause variant thấp nhất.
- Mở rộng targeting theo lookalike audience từ người đã signup tuần 1.
- Thêm retargeting: user đã visit mà chưa signup → show ad khác.

**Tuần 3–4 (Ngày 15–30):**
- Scale budget 50% vào ad group/creative thắng.
- Pause ad group có CAC > $40 (2x target).
- Nếu variant C (creator angle) perform tốt → tăng budget vào đó vì creator mang theo audience riêng.

### Budget & Metrics

| Chỉ số | Target | Đo bằng |
|--------|--------|---------|
| **Budget** | $4,000/tháng | Twitter Ads Dashboard |
| **Impressions** | ~400K | Twitter Ads |
| **Clicks** | ~4,000 | UTM tracking |
| **CPC** | ≤$1.00 | Twitter Ads |
| **Signups** | ~80 | GA4 + ClawFriend analytics |
| **Conversion rate** | ~2% | Signups / Clicks (Web3 onboarding friction) |
| **CAC** | ~$50 | Budget / Signups |

**UTM template:**
```
?utm_source=twitter&utm_medium=paid&utm_campaign=m1&utm_content=[variant_a/b/c]&utm_term=[audience_1/2/3]
```

**Trigger điều chỉnh:**
- CPC > $2.00 sau 500 clicks → tạm dừng, test creative mới trước khi scale
- CVR < 2% sau 200 clicks → kiểm tra landing page và CTA
- CAC > $40 ở tuần 2 → shift $1,000 budget sang Kênh 2

---

## Kênh 2: Telegram KOL + Group Paid Promotions

**Ngân sách: $3,500 · Est. signups: 325 · CAC: $10.77**

### Tại sao kênh này?

Target user của ClawFriend — BSC trader — sống trên Telegram. Các group như BSCSignalsOfficial (120K members) hay PancakeSwapHunters (50K) là nơi họ ra quyết định trade hàng ngày. Đây không phải "quảng cáo" — là tiếp cận người dùng đúng nơi họ đang active.

Đặc thù Telegram promo so với Twitter Ads: **intent cao hơn nhiều** — user vào group để tìm alpha, không phải scroll vô thức. CTR trung bình cho Telegram promo trong BSC groups: 3–8% (đo từ các operator group, [BSCNews community analysis 2025](https://bsc.news)).

### Danh sách target theo tier

**Tier 1 — Pinned post (24–48h):**

| Group | Members | Cost est. | Est. signups | Source |
|-------|--------:|----------:|:---:|--------|
| t.me/BSCSignalsOfficial | 120K | $400–600 | 80–120 | Từ skill-research S5 |
| t.me/BSCArmyCalls | 80K | $250–400 | 50–80 | Từ skill-research S5 |
| t.me/BSCWhalePumps | 60K | $200–300 | 40–60 | Từ skill-research S5 |

**Tier 2 — Sponsored mention (regular post):**

| Group | Members | Cost est. | Est. signups | Source |
|-------|--------:|----------:|:---:|--------|
| t.me/PancakeSwapHunters | 50K | $150–200 | 30–50 | Từ skill-research S4, S5 |
| t.me/BSCSnipers | 35K | $100–150 | 20–35 | Từ skill-research S7 |
| t.me/BSCScamAlert | 40K | $100–150 | 25–40 | Từ skill-research S3 |

**Tier 3 — Twitter KOL BSC-focused:**

| KOL | Followers | Content fit | Cost est. | Est. signups |
|-----|----------:|:---:|----------:|:---:|
| BSC-focused whale tracker (100K–500K followers) | 200K | Skill #1, #2 demo | $500–800 | 40–80 |
| BSC DeFi educator (50K–100K followers) | 80K | Skill #3, #4 demo | $200–400 | 20–40 |

**Tổng budget Kênh 2: $1,500–2,500 (Telegram) + $700–1,200 (Twitter KOL) = ~$3,500**

> **Lưu ý tìm KOL:** Không hardcode tên — verify trước khi ký hợp đồng. Yêu cầu engagement rate proof (screenshot) và follower authenticity check qua [HypeAuditor](https://hypeauditor.com). Tránh KOL có engagement rate < 1% (likely bot followers).

### Nội dung promo — không phải generic ad

**Nguyên tắc:** Bài đăng trong Telegram group phải cung cấp alpha thực ngay trong message. Đừng nói "check out this platform" — show kết quả.

**Template cho BSCSignalsOfficial (120K):**
```
🔍 Tool mới cho BSC trader:

ClawFriend AI agent vừa scan 5 whale BSC lớn nhất —
3/5 đang accumulate [TOKEN].

Scan thủ công: 30 phút
Với ClawFriend: real-time, Telegram alert

Public dashboard: [link]
Holder alert: [link mua share]

(Xem đây là demo — data thật từ BscScan + DeBank)
```

**Bài đăng phải có kèm:** screenshot skill output thật, không phải mock-up. Nếu không có output thật thì không đăng.

### Action Plan

**Tuần 1 (Ngày 1–3):**
- Ngày 1: Liên hệ tất cả group admin qua DM. Yêu cầu giá + slot. Verify metrics.
- Ngày 2–3: Chuẩn bị content riêng cho từng group — không copy-paste.

**Tuần 1–2 (Ngày 4–14):**
- Launch promo trong 2 Tier 1 groups đầu tiên.
- Monitor traffic qua UTM trong 48h.
- Nếu CVR > 3%: book thêm groups ngay. Nếu < 2%: chỉnh content trước.

**Tuần 2–4:**
- Roll out Tier 2 groups dựa trên học từ Tier 1.
- KOL post: sau khi platform đã có >200 signups và có social proof để KOL đăng kèm.

### Budget & Metrics

| Chỉ số | Target |
|--------|--------|
| **Budget** | $3,500 |
| **Groups covered** | 6–8 groups |
| **Total reach** | ~430K unique members |
| **Estimated clicks** | ~6,450 (1.5% CTR) |
| **Signups** | ~325 (5% CVR) |
| **CAC** | ~$10.77 |

---

## Kênh 3: Social Stream Self-Distribution *(Kênh innovative — $0)*

**Ngân sách: $0 · Est. signups: ~200 · "CAC": $0**

### Tại sao đây là kênh tốt nhất của ClawFriend?

Đây là kênh không đối thủ nào khác có: **platform tự market cho chính mình qua output của skills**.

Mỗi skill trong ClawFriend có public tier — whale alerts, BSC trending digest, token safety scores. Những output này đăng lên Social Stream của agent. Nếu được tweet ra ngoài Twitter/X, chúng là **content hữu ích** chứ không phải quảng cáo. DeFi user chia sẻ tool hữu ích — không ai chia sẻ banner ad.

**Moltbook đạt 1M agent trong 5 ngày** ([CNBC Feb 2026](https://www.cnbc.com/2026/02/02/social-media-for-ai-agents-moltbook)) không phải vì họ chạy ads — mà vì platform output là nội dung người ta muốn chia sẻ. ClawFriend có thể làm điều tương tự với on-chain data thực.

### Cơ chế hoạt động

**6 Skills = 6 luồng content tự động:**

| Skill | Public output | Frequency | Platform |
|-------|---------------|-----------|---------|
| BSC Smart Money Tracker | Top 5 whale movement hôm nay | Daily | X + Telegram channel |
| BSC Token Safety Scanner | "Token X vừa được scan: SAFE/RUG" | Per scan | X thread |
| PancakeSwap Yield Optimizer | Top 5 BSC farm APY hôm nay | Daily | X + Telegram |
| BSC Airdrop Intelligence | Deadline airdrop BSC trong 7 ngày tới | Weekly | X + Telegram |
| BSC Social Alpha Scanner | Top 5 token trending BSC hôm nay | Daily, 8AM UTC | X + Telegram |

**Telegram Bot Funnel — free acquisition tool:**
Deploy `@ClawFriendBot` (standalone Telegram bot, build trên skill infrastructure sẵn có):
- 3 free safety scan/ngày: user paste contract → nhận verdict (Skill #2 core)
- Daily digest: whale movements + top trending tokens (Skill #1 + Skill #5)
- Mỗi output có footer: _"Real-time alerts + holder features → [ClawFriend link]"_

Bot này là funnel tự hoạt động. User chia sẻ trong group bạn bè → viral trong cộng đồng Telegram BSC. Cost: $0 (build trên API infrastructure của Skill #2 + Skill #5 đã có).

### Action Plan

**Ngày 1 (Launch day):**
- Setup ClawFriend Twitter/X account và Telegram channel
- Configure 6 skill public output tự động cross-post
- Deploy @ClawFriendBot với 2 skill đầu tiên (Skill #2 + #6)
- Đặt lịch: Whale digest post 8AM UTC, Trending token post 12PM UTC

**Tuần 1–2:**
- Monitor: tweet nào có engagement cao nhất → push thêm vào format đó
- Engage: reply mọi comment, retweet của user trong 24h đầu
- Seed: manually share bot trong 5 BSC Telegram groups lớn (organic, không paid)

**Tuần 2–4:**
- Tối ưu timing: test 8AM vs 3PM UTC để tìm peak engagement
- Khi bot đạt 500+ users: screenshot làm social proof cho Kênh 1+2

### On-Chain Virality — đặc thù Web3

Mỗi khi ai đó mua share của 1 agent creator, đây là on-chain event public. Auto-post lên Social Stream: _"@[user] vừa mua shares của Agent [X]. Holder nhận real-time whale alerts + full portfolio scanner."_

Đây là **social proof tự động** — không cần editorial effort. Khi platform đang tăng trưởng, luồng "share purchases" này tạo FOMO liên tục. Friend.tech dùng cơ chế tương tự để viral năm 2023.

### Metrics

| Chỉ số | Target | Đo bằng |
|--------|--------|---------|
| Telegram Bot users (cuối T1) | 1,000+ | Bot analytics |
| Twitter/X followers | 2,000+ | X analytics |
| Daily content impressions | 50K+ | X analytics |
| Organic signups từ kênh này | ~200 | UTM + referrer tracking |

---

## Kênh 4: Technical Content + Community Seeding *(Organic — $0)*

**Ngân sách: $0 · Est. signups: ~200 · "CAC": $0**

### Tại sao kênh này?

DeFi user tin vào **technical content** hơn quảng cáo. Một bài phân tích kỹ thuật trên BinanceSquare về "BSC whale tracking gap" có lifetime value cao hơn bất kỳ paid ad nào. (Chọn BinanceSquare thay Mirror.xyz vì BSC user native ở đây — Mirror.xyz là ETH ecosystem, readership không overlap với BSC degen trader.) Reddit r/CryptoMoonShots (1.2M members) — theo skill-research, top comment của mọi bài token mới là "Check rugdoc+BSCscan". Đây là nhu cầu chưa được serve, và ClawFriend solve nó.

### Lịch content tháng 1

| Tuần | Bài viết | Format | Kênh publish | Distribution |
|------|----------|--------|-------------|-------------|
| Tuần 1 | **"Tại sao Nansen không hoạt động cho BSC trader"** — phân tích gap với số liệu | Thread X (10 tweets) | X | Cross-post r/ethtrader, r/defi; tag @DefiLlama |
| Tuần 1 | **"BSC Token Safety: 5 check cần làm trước khi buy"** — tutorial thực tế | BinanceSquare (800 từ) | BinanceSquare | Share vào r/CryptoMoonShots, r/pancakeswap |
| Tuần 2 | **"Làm sao whale tracker BSC hoạt động — bên dưới hood"** — kỹ thuật | Thread X (15 tweets) | X | Đề xuất RT từ @BscScan |
| Tuần 2 | **"Anatomy của 3 rug pull BSC điển hình — on-chain evidence"** — case study | BinanceSquare (1200 từ) | BinanceSquare | r/CryptoMoonShots, t.me/BSCScamAlert |
| Tuần 3 | **"So sánh: Tự farm vs Beefy — ai thực sự thắng?"** — số liệu APY | Thread X | X | r/defi, r/pancakeswap |
| Tuần 3 | **"Case study: Agent X kiếm được X BNB bằng skill ABC trong 30 ngày"** | BinanceSquare | BinanceSquare | DM list builders, BSC developer groups |
| Tuần 4 | **"ClawFriend vs tool hiện tại — honest comparison"** | Thread X | X | Tag competitors, invite debate |
| Tuần 4 | **Monthly digest: Top 10 token BSC an toàn nhất tháng 1/2026** | X + BinanceSquare | X + BinanceSquare | Tất cả channels |

**Tiêu chí content:** Mọi bài phải có **số liệu on-chain thực** — không phải opinion. Sử dụng data từ BscScan/Dexscreener/DeFiLlama. Nếu không có data thật → không publish.

### Community Seeding — danh sách cụ thể

| Community | Platform | Size | Approach | Rule |
|-----------|----------|-----:|----------|------|
| r/CryptoMoonShots | Reddit | 1.2M | Comment hữu ích trên 5 bài/ngày trước khi post | Không spam. Provide value trước |
| r/pancakeswap | Reddit | 50K | Tutorial post về yield optimization | 1 post/tuần |
| r/defi | Reddit | 200K | Data-driven analysis post | 1 post/2 tuần |
| r/ethtrader | Reddit | 1.2M | "BSC perspective" comment trên DeFi threads | Comment only |
| BNBChain Discord | Discord | ~100K | Announce trong #ecosystem-projects | 1 post sau launch |
| PancakeSwap Discord | Discord | ~80K | Demo Skill #3 trong #community-tools | 1 demo |
| t.me/BSCScamAlert | Telegram | 40K | Share rug pull case study (organic) | Value-first |

**Thời gian warm-up:** Engage 1 tuần trước khi mention ClawFriend. BGK sẽ hỏi "tại sao degen trust bạn" — câu trả lời là: vì đã build credibility trước.

### Metrics

| Chỉ số | Target |
|--------|--------|
| Bài BinanceSquare | 4 bài |
| X threads | 4 threads |
| Communities seeded | 7+ |
| Organic traffic từ content | 5,000 sessions |
| Signups từ organic | ~200 |

---

## Kênh 5: BSC Ecosystem Partnerships

**Ngân sách: $2,000 · Est. signups: ~150 · CAC: ~$13**

### Tại sao kênh này?

Partnership không chỉ là distribution — là **credibility signal**. Được featured bởi BNB Chain chính thức hoặc được GoPlus Security reference tới ClawFriend = instant trust từ user không biết ClawFriend là ai. Và vì ClawFriend đang build trên OpenClaw framework (cùng với hackathon BNB Chain), partnership với ecosystem có chi phí thấp hơn nhiều so với cold outreach thông thường.

### Đối tác ưu tiên #1: OpenClaw Builder Community *(Làm ngay tuần 1 — highest intent, $0 cost)*

| Mục | Chi tiết |
|-----|----------|
| **Tại sao #1** | ClawFriend build trên OpenClaw framework. OpenClaw GitHub 135K+ stars. BNB Chain hackathon "Good Vibes Only: OpenClaw Edition" đang active với 200+ builders. Đây là developer pool đã biết framework, đã có skills built — chỉ thiếu marketplace để monetize. Competitive landscape gọi đây là "highest intent users" vì zero learning curve. |
| **Cơ hội** | Builders đang dùng OpenClaw có skills sẵn — publish lên ClawFriend không cần viết lại code. ClawFriend là distribution layer họ chưa có. |
| **Đề xuất** | (1) Post trong BNB Chain hackathon Discord (200+ builders active): "ClawFriend là nơi publish và monetize OpenClaw skills. Founding Creator: platform rebate 5% protocol fee 3 tháng đầu." (2) Post GitHub Discussions của OpenClaw repo. (3) DM cá nhân hóa top 20 contributors. |
| **Lợi ích cho builder** | Monetize code đã viết. Earn 5% perpetual fee từ mỗi share trade của agent. Platform rebate thêm 5% protocol fee 3 tháng đầu = full 10% trading fee về tay creator. |
| **Action** | Ngày 1–3: identify top 20 OpenClaw contributors trên GitHub, viết DM cá nhân hóa cho từng người. Ngày 2: post vào BNB Chain hackathon Discord. |
| **Budget** | $0 |
| **Timeline** | Ngày 1–3: outreach. Target: 5 confirmed Founding Creators từ OpenClaw community trước cuối tuần 1. |

### Đối tác ưu tiên #2: BNB Chain Ecosystem Fund

### Đối tác ưu tiên #3: GoPlus Security

| Mục | Chi tiết |
|-----|----------|
| **Tại sao** | ClawFriend dùng GoPlus API cho Skill #2 (Token Safety Scanner) và Skill #5 (BSC Social Alpha Scanner safety check). GoPlus có 200K+ Twitter followers và serve 30M+ API calls/ngày. Cross-promo là mutual benefit. |
| **Đề xuất** | "Powered by GoPlus" badge trên Skill #2 UI + joint tweet: "GoPlus API now powering ClawFriend's BSC Token Safety Scanner. Try real-time scan: [link]" |
| **Lợi ích cho GoPlus** | Showcase integrations (developer marketing), referral traffic từ BSC trader |
| **Lợi ích cho ClawFriend** | GoPlus credibility + reach từ 200K followers |
| **Action** | DM @GoPlusSecurity on Twitter. Propose integration announcement. |
| **Budget** | $0 (reciprocal promo — không cần trả tiền) |
| **Timeline** | Tuần 1: contact. Tuần 2: nếu đồng ý → coordinate tweet. |

### Đối tác ưu tiên #4: DexScreener / BSC Community Tools

| Mục | Chi tiết |
|-----|----------|
| **Tại sao** | DexScreener là tool BSC trader dùng nhiều nhất để check new pairs. Skill #2 (Token Safety Scanner) của ClawFriend scan cùng data với góc nhìn safety — "launch alert kèm safety score" là feature DexScreener chưa có natively. |
| **Đề xuất** | Giai đoạn 1 (tháng 1): joint content về BSC token safety — ClawFriend produce scan data, đề xuất co-tweet hoặc mention. Giai đoạn 2 (tháng 2+): explore API integration nếu relationship đã build. **Không expect integration trong tháng 1** — DexScreener là established platform, partnership cần thời gian. |
| **Lợi ích cho DexScreener** | Safety content giúp giảm rug pull complaints từ user — phù hợp với reputation của họ |
| **Lợi ích cho ClawFriend** | Mention từ tài khoản reach hàng triệu BSC user = credibility signal, traffic organic |
| **Budget** | $0 (content collaboration, không phải paid integration) |
| **Timeline** | Tuần 2: contact qua Discord/Twitter. Mục tiêu tháng 1: 1 joint tweet — không phải API integration |


### Referral Bounty Program — $2,000

| Mục | Chi tiết |
|-----|----------|
| **Cơ chế** | Mỗi người refer thành công nhận $10 in BNB (credited on-chain). Cap: 200 referrals = $2,000 total. |
| **Tại sao on-chain reward?** | Phù hợp với đối tượng Web3. Transparent. Không cần trust platform. |
| **Tracking** | Referral link kèm UTM + on-chain wallet address. Off-chain verification: khi referred user hoàn tất Twitter verification (step 2 trong signup flow), team manually transfer $10 BNB từ treasury wallet. Không cần referral smart contract — đơn giản, transparent, không delay. Cap 200 referrals = $2,000 tổng, dễ audit. |
| **Target** | 200 referred signups từ $2,000 = $10 CAC — thấp hơn cả Telegram promo. |
| **Viral potential** | Ai nhận được $10 BNB có xu hướng chia sẻ tiếp → compounding effect |

---

## Chiến lược đặc thù — Anchor Creator Recruitment

> **Không phải kênh riêng, nhưng là đòn bẩy lớn nhất của toàn bộ plan.**

**Logic:** ClawFriend là creator-centric platform. Nếu recruit được 5 anchor creators — mỗi người đã có audience sẵn — họ mang theo user của họ vào platform. 5 creators × 20K followers mỗi người = 100K potential users ngay lập tức, $0 chi phí acquisition.

**Profile anchor creator lý tưởng:**

| Profile | Ví dụ | Lý do nhắm | Pitch |
|---------|-------|:---:|-------|
| Telegram signal group operator | Operator t.me/BSCSignalsOfficial (120K members) | Đang làm công việc signal curation miễn phí — ClawFriend cho họ kiếm tiền từ đó | "Bạn đang curation whale alerts cho 120K người miễn phí. Trên ClawFriend, publish skill này: mỗi holder trả bằng share purchase → bạn nhận 5% perpetual fee." |
| BSC whale tracker Twitter account | @[whale tracker với 50K–200K followers] | Đang tweet signals free → có thể gate behind holder access | "Holder muốn alert trước khi bạn tweet public. ClawFriend là cơ chế đó." |
| DeFi dev đang build BSC tool | Dev tool nhỏ 500–1,000 GitHub stars | Đang build nhưng không monetize được | "Wrap tool của bạn thành skill. Publish. Earn on every share trade." |

**Incentive cho 5 creator đầu tiên:**
- Platform rebate 5% protocol fee trong 3 tháng đầu — team manually reimburse phần protocol fee (5%) về creator wallet sau mỗi tháng (off-chain BNB transfer từ treasury). Smart contract không thay đổi — rebate xử lý off-chain để không cần redeploy contract
- "Founding Creator" on-chain badge — permanent, non-transferable
- Featured placement trên homepage Skill Market

**Action:** DM trực tiếp. Không mass email. Viết pitch cá nhân hóa cho từng người.

---

## Timeline tổng thể — Tháng 1

```
Ngày 1–2 (Pre-launch):
├── Setup Twitter/X account, Telegram channel, UTM tracking system
├── Contact 5 anchor creators qua DM (cá nhân hóa từng message)
├── Apply BNB Chain MVB Program
├── Contact GoPlus Security về integration announcement
├── DM top 20 OpenClaw builders (Đối tác #1 — highest priority)
└── Begin building @ClawFriendBot infrastructure (Skill #2 + #5 — est. 3–5 ngày build)

Ngày 5–7:
├── Deploy @ClawFriendBot với Skill #2 (Token Safety Scanner) basic functions
└── Test bot trong 2–3 BSC group nhỏ trước khi push rộng

Tuần 1 (Ngày 3–7):
├── PAID: Launch Twitter/X Ads với variant A (video demo)
├── PAID: Book slot trong BSCSignalsOfficial + BSCArmyCalls
├── CONTENT: Publish bài BinanceSquare #1 + X thread #1
├── ORGANIC: Bắt đầu engage r/CryptoMoonShots, r/pancakeswap (value-first, chưa mention ClawFriend)
└── TRACKING: Báo cáo metrics ngày 7 — signups, CPC, bot users

Tuần 2 (Ngày 8–14):
├── PAID: Review Twitter Ads tuần 1. Pause variant thấp, scale variant thắng.
├── PAID: Launch Telegram promo BSCWhalePumps + PancakeSwapHunters
├── CONTENT: Publish BinanceSquare #2 (rug pull case study)
├── ORGANIC: Post trực tiếp về ClawFriend trong communities đã warm up
├── CREATOR: Follow up với 5 anchor creators, confirm ít nhất 2
└── KOL: Launch Twitter KOL collaboration đầu tiên (nếu có đủ social proof)

Tuần 3 (Ngày 15–21):
├── PAID: Scale creative thắng 50% budget
├── PAID: Launch Tier 2 Telegram groups (BSCSnipers, BSCScamAlert)
├── CONTENT: Publish X thread về BSC farming comparison + Mirror case study
├── CREATOR: 2+ anchor creators publish skill đầu tiên → PR event
├── PARTNERSHIP: GoPlus co-announcement (nếu đã confirm)
└── BOT: Scale @ClawFriendBot nếu đạt 500 users — announce milestones

Tuần 4 (Ngày 22–30):
├── Review toàn bộ metrics vs target
├── PAID: Final optimization, document learnings
├── CONTENT: Publish monthly wrap-up "30 ngày đầu của ClawFriend — dữ liệu thực"
├── REFERRAL: Activate bounty program với data từ creators đã onboard
└── Chuẩn bị kế hoạch tháng 2: double down vào kênh perform tốt nhất
```

---

## Metrics Dashboard — Tracking hàng tuần

| KPI | Target T1 | W1 | W2 | W3 | W4 |
|-----|----------:|:--:|:--:|:--:|:--:|
| Total signups | ~955 | | | | |
| Agent creator registrations | 20+ | | | | |
| Skill installs | 500+ | | | | |
| Shares traded | 100+ | | | | |
| @ClawFriendBot users | 1,000+ | | | | |
| Twitter/X followers | 2,000+ | | | | |
| Paid CAC (Kênh 1+2) | ≤$20 | | | | |
| Organic signups | 400+ | | | | |
| Telegram channel subscribers | 500+ | | | | |

**Trigger điều chỉnh plan:**

| Tình huống | Hành động |
|-----------|-----------|
| CAC Twitter Ads > $40 ở Tuần 2 | Shift $1,000 budget sang Telegram promo |
| Telegram bot viral (>2,000 users tuần 1) | Tăng feature set bot ngay, bổ sung 2 skill |
| Anchor creator đầu tiên publish skill | Immediate PR push — tweet, Mirror post, DM báo chí crypto |
| BNB Chain MVB accepted | All-in trên partnership channel — đây là 10x lever |
| Signups ở tuần 1 < 50 | Kiểm tra landing page UX trước khi scale bất kỳ paid channel nào |

---

## Câu hỏi BGK — Trả lời trước

**"$10K có đủ lấy 1,000 user không?"**
Có. Model:
- $4K Twitter Ads → 4,000 clicks (CPC $1.00) → CVR 2% (Web3 friction) → **80 signups**
- $3.5K Telegram KOL + Groups → 430K reach → 1.5% CTR → 6,450 clicks → CVR 5% → **325 signups**
- $0 Social Stream + Bot → ~**200 organic signups** (agent output viral + bot funnel)
- $0 Content + Community → ~**200 signups** (BinanceSquare + Reddit seeding)
- $2K Referral bounty → $10 BNB/signup, off-chain payout → **150+ signups**
- Tổng: **~955 signups.** Conservative estimate — không assume viral, không assume grant. Twitter CVR dùng 2% (bukan 4% Web2 benchmark) để reflect BSC wallet + Twitter verification friction.

**"Tại sao user không dùng ChatGPT thay vì ClawFriend?"**
ChatGPT không có wallet, không đọc on-chain data real-time, không gửi Telegram alert, không có holder-gated access model. Hỏi ChatGPT "whale nào đang accumulate trên BSC ngay lúc này?" → không biết. Hỏi ClawFriend BSC Smart Money Tracker → alert trong 60 giây. Đây là fundamental difference: ChatGPT là LLM với cutoff date, ClawFriend skills là on-chain agents với live data stream.

**"Đối thủ A có 50K user, tại sao mình thắng?"**
Không có đối thủ nào đang focus BSC skill marketplace với holder-gated model. Cooker.club (đối thủ gần nhất trên BSC) hiện stalled và website down. Virtuals Protocol dominant trên Base/Solana, không có BSC-native skill market. Moltbook có 1M agent nhưng zero utility — không có skill monetization, không có bonding curve. ClawFriend đang lấp đúng khoảng trống: BSC-native + real DeFi utility + creator economics. Không phải "vs 50K user platform" — là "greenfield market trên BSC."

**"Tại sao user mua shares thay vì chỉ dùng public tier?"**
Public tier được thiết kế hữu ích nhưng cố ý không đủ. Delay 15 phút (Smart Money Tracker) có nghĩa là bạn thấy whale đã vào lệnh nhưng quá muộn để copy. Full scan vs basic score (Token Safety Scanner) nghĩa là bạn biết token có rủi ro nhưng không biết chính xác cái gì. Holder tier là nơi decision-making thực sự xảy ra. Public tier là proof of value, holder tier là nơi có tiền.

---

## Nguồn tham khảo

- Twitter/X Ads CPC benchmark crypto ($0.80–$1.50): industry average từ Twitter Business Help Center + WordStream Crypto PPC data 2025
- DeFi user behavior on Twitter (78% DeFi discussion on X): [Kaito AI Mindshare Dashboard](https://kaito.ai) — Kaito track social volume theo chain, BSC visible trực tiếp
- Telegram BSC group member counts: `data/skills/Research the market for crypto social sentiment an.md` (S5) — data từ Perplexity research có source tdirectory.me
- Moltbook viral growth (1M+ agents): [CNBC Feb 2 2026](https://www.cnbc.com/2026/02/02/social-media-for-ai-agents-moltbook) + Guardian, Forbes, NPR (4 nguồn độc lập trong data/competitors/prompt_res_phase2/)
- BNB Chain MVB Program: [bnbchain.org/en/blog/bnb-chain-most-valuable-builder-mvb-accelerator](https://www.bnbchain.org/en/blog/bnb-chain-most-valuable-builder-mvb-accelerator)
- GoPlus Security API scale: [gopluslabs.io](https://gopluslabs.io) — trang chủ tự công bố 30M+ daily calls
- BSC community sizes: `data/skills/` S2 (whale tracking), S3 (rug detection), S4 (DeFi), S5 (sentiment), S7 (token research)
- OpenClaw GitHub: [github.com/michaellatman/moltbook](https://github.com) — 135K stars verify qua GitHub public stats
- Telegram CTR benchmark BSC groups (3–8%): `data/skills/Research the market for crypto social sentiment an.md` (S5) — operator-reported data
