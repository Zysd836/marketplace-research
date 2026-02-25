# Competitive Landscape — ClawFriend

> **Cập nhật:** 25/02/2026
> **Phương pháp:** Research theo user journey (user đang ở đâu, đang trả gì, tại sao switch) — không phải market gap analysis
> **Nguồn dữ liệu:** DeFiLlama · Token Terminal · Reddit · CNBC · Forbes · Guardian · on-chain data

---

## 1. Bối cảnh thị trường

### Giai đoạn thị trường: Nascent → Early Growth

Thị trường AI agent economy đang ở **cuối giai đoạn nascent, bước vào early growth** — có demand thực nhưng chưa có dominant platform nào giữ được user bền vững.

**Bằng chứng demand (số liệu thực):**
1. **AI agent tokenization** — Virtuals Protocol: $4.18M phí Q1/2025, từ 0 lên hàng trăm agents trong vài tháng [[DeFiLlama]](https://defillama.com/protocol/virtuals-protocol)
2. **AI skill marketplace** — GPT Store: 50K+ GPTs, hàng triệu user tìm kiếm AI capabilities, ra mắt Jan 2024 [[OpenAI]](https://openai.com/index/introducing-the-gpt-store/)
3. **Bonding curve creator economy** — friend.tech: $19.67M phí tháng 9/2023, 50K daily users trong vài tuần [[DeFiLlama]](https://defillama.com/protocol/friend.tech)
4. **AI-only social** — Moltbook: 1M+ agents, 1.5M users trong 4 ngày sau launch Jan 2026 [[CNBC]](https://www.cnbc.com/2026/02/02/social-media-for-ai-agents-moltbook.html)

**Ai đang dẫn đầu từng segment:**

| Segment | Leader hiện tại | Metrics | Vấn đề |
|---|---|---|---|
| AI agent social | Moltbook | 1M+ agents, 1.5M users | Zero economic layer, no retention |
| AI agent tokenization | Virtuals Protocol | Peak $4.18M/Q | -97% revenue decline |
| Bonding curve social | friend.tech (peak) | Peak $19.67M/mo | Dead — $0 hiện tại |
| AI skill marketplace | GPT Store | 50K+ GPTs | 99% creators earn $0 |
| BSC AI agent | Không ai | — | Cooker stalled, thị trường bỏ ngỏ |

**Có chỗ cho người mới không?**
Có — và cụ thể là BSC AI agent với full 3-layer model. Mỗi leader hiện tại chỉ có 1 layer, và đều đang gặp vấn đề retention vì thiếu utility. Không platform nào combine bonding curve + skill marketplace + social stream.

**Vấn đề chung của tất cả:** Không platform nào giữ được user sau hype ban đầu — vì thiếu utility layer.

---

## 2. Đối thủ trực tiếp

### 2.1 Cooker.club — Closest competitor trên BSC

| | |
|---|---|
| **URL** | cooker.club *(website unreachable Feb 2026)* |
| **Chain** | BNB Chain + Solana |
| **Trạng thái** | Stalled — <100 agents launched, website down |
| **Overlap module** | Shares Trading + Social Stream |

**Cooker.club là gì:**
Launchpad tokenize AI "virtual idols" bằng bonding curve trên BSC. Agent auto-generate AI music/content. Có C2E (Create-to-Earn) model: creator nhận 10% block rewards sau khi agent graduate lên PancakeSwap.

**Fee structure:**
- Bonding curve: 1% toàn bộ về platform DAO — creator **không nhận** trading fee
- Launch fee: 0.005 BNB (~$3)
- Graduation threshold: ~24 BNB buy volume (~$14K) + 1.5 BNB fee
- Block rewards: 75 $COOK/block (3s interval) — 10% đến creator, 90% đến holders

**Creator economics thực tế:**
Creator không nhận % từ trading. Thu nhập chỉ đến từ block rewards — nhưng chỉ sau graduation ($14K buy volume), và phụ thuộc vào $COOK price. Với <100 agents và website stalled, hầu hết creators chưa graduation. [[Gate.io]](https://www.gate.ac/news/detail/10708730) · [[Binance Square]](https://www.binance.com/en-ZA/square/post/22727546758426)

**Tại sao user rời Cooker:**
- Creator không earn từ trading — thu nhập hoàn toàn phụ thuộc vào $COOK token speculation
- Không có skill marketplace → không có utility để giữ holder sau initial purchase
- Website down tháng 2/2026 → team abandon, user mất trust

**ClawFriend thắng Cooker ở đâu:**
- Creator fee: **5% mỗi trade trực tiếp vào creator wallet** vs Cooker creator earn $0 từ trading
- Skill Market tạo utility layer — holder có lý do giữ shares để access private skills
- Platform active vs Cooker stalled

**ClawFriend học gì từ Cooker:**
Graduation mechanism (cần $14K buy volume trước khi creator earn) tạo dead weight loss — hầu hết creators không bao giờ đến graduation. ClawFriend đúng khi cho creator earn ngay từ share đầu tiên.

---

### 2.2 Moltbook — Competitor cho Social Stream module

| | |
|---|---|
| **URL** | moltbook.ai |
| **Chain** | Web2 — không có on-chain component |
| **Scale** | 1M+ agents, 1.5M+ users (Feb 2026) |
| **Overlap module** | Social Stream |
| **Nguồn** | [CNBC](https://www.cnbc.com/2026/02/02/social-media-for-ai-agents-moltbook.html) · [Forbes](https://www.forbes.com/sites/guneyyildiz/2026/01/31/inside-moltbook-the-social-network-where-14-million-ai-agents-talk-and-humans-just-watch/) · [Guardian](https://www.theguardian.com/technology/2026/feb/02/moltbook-ai-agents-social-media-site-bots-artificial-intelligence) |

**Moltbook là gì:**
Reddit-style social network dành riêng cho AI agents — launched Jan 28, 2026. Humans chỉ observe. Agents (powered bởi OpenClaw/ChatGPT) tự post, reply, vote không cần human input. 200+ communities (submolts).

**Traction:**
- 10K+ agents trong 48h đầu
- 1M+ agents, 1.5M+ users vào Feb 1, 2026
- Viral drivers: Karpathy tweet, bizarre AI behavior (agent "religions", human rebellion plots), zero-cost to observe
- Retention: Plateauing sau initial viral wave — novelty fades [[NBC News]](https://www.nbcnews.com/tech/tech-news/ai-agents-social-media-platform-moltbook-rcna256738)

**Business model:**
Freemium — basic agent free, premium plugins ~$5-20/mo (ước tính). **Không có economic layer cho agents hay creators.**

**Tại sao user rời Moltbook:** Agents không earn được gì. Sau khi novelty hết, không có economic incentive để quay lại. Platform là entertainment, không phải productive economy.

**ClawFriend thắng Moltbook ở đâu:**
- Economic layer: creator earn 5% perpetual, holders earn từ share appreciation (Moltbook: không có)
- Skill Market: agents có utility, không chỉ entertainment
- On-chain identity: verifiable track record, ownership thực sự

**ClawFriend thua Moltbook ở đâu (honest assessment):**
- Scale: 1M+ agents vs ClawFriend early stage — gap thực sự, cần thừa nhận
- Barrier to entry: Moltbook free vs ClawFriend cần BNB gas + Twitter verification
- Moltbook phù hợp mainstream hơn; ClawFriend phù hợp crypto-native users

---

### 2.3 GPT Store — Benchmark cho Skill Market economics

| | |
|---|---|
| **URL** | [chatgpt.com/gpts](https://chatgpt.com/gpts) |
| **Loại** | Web2 skill/agent marketplace |
| **Scale** | 50K+ GPTs, 10K+ active creators |
| **Overlap module** | Skill Market |
| **Nguồn** | [OpenAI](https://openai.com/index/introducing-the-gpt-store/) · [thegptshop.online](https://www.thegptshop.online/blog/openai-gpt-store-revenue-sharing) · [Reddit r/GPTStore](https://www.reddit.com/r/GPTStore/comments/19b5zdw/openais_gpt_store_revenue_sharing_model/) |

**GPT Store là gì:**
Marketplace cho phép bất kỳ ai publish Custom GPT (prompts, workflows, plugins via actions). OpenAI ra mắt Jan 2024, bắt đầu revenue sharing Q1 2024 cho creators US.

**Creator economics thực tế:**
- Revenue split: **không có con số cố định** — OpenAI tính theo "engagement" (opaque, không công bố formula)
- Threshold để earn: cần ChatGPT Pro ($200/mo), US-based, minimum 25 conversations/week per GPT
- Top creators: $2K-10K/tháng cho viral GPTs với 50K+ uses
- **Median creator: $0-50/quarter** — 99% creators earn gần như $0
- Payout: quarterly via Stripe, minimum $100

**Điểm mạnh của GPT Store:**
- Distribution: tiếp cận 200M+ ChatGPT users ngay lập tức
- Zero barrier to create: không cần code, không cần wallet
- Brand trust: OpenAI backing

**Điểm yếu (từ creator community):**
> *"No formula, lottery feel — most GPTs get <100 uses"*
> — r/GPTStore

- Discovery hoàn toàn do algorithm — creator không control
- Creator không own GPT của mình (OpenAI có thể delist bất cứ lúc nào)
- Không có secondary market, không có speculation upside
- Geographic limit (US-only cho revenue)
- Quarterly payout = creator phải chờ 3 tháng mới nhận tiền

**ClawFriend thắng GPT Store ở đâu (với crypto-native user):**
- Creator ownership thực sự: skills = creator's IP, shares tradeable
- Transparent economics: 5% mỗi trade, instant, on-chain — không phải "engagement metric" bí ẩn
- Holder-gated access tạo speculation upside mà GPT Store không có
- Creator earn ngay từ share 1, không phải chờ quarterly

**ClawFriend thua GPT Store ở đâu:**
- Reach: 200M users vs crypto-native segment nhỏ hơn nhiều
- Barrier to entry: cần wallet + BNB vs chỉ cần ChatGPT account
- Brand: OpenAI vs unknown platform với crypto stigma

**ClawFriend học gì từ GPT Store:**
Discovery là tử huyệt — 99% creators earn $0 vì không ai tìm thấy GPT của họ. Holder-gated model giải quyết điều này: holder có economic incentive để promote skill của creator mà họ hold shares.

---

### 2.4 Mint Club — Bonding curve infrastructure benchmark

| | |
|---|---|
| **URL** | [mint.club](https://mint.club) |
| **Chain** | Ethereum, Polygon, Base, BNB Chain, Arbitrum, Optimism, Avalanche |
| **Scale** | 5,400+ tokens/NFTs tạo (3,100 ERC20, 2,300 NFTs) |
| **Overlap module** | Shares Trading (bonding curve mechanics) |
| **Nguồn** | [gate.com](https://www.gate.com/learn/articles/what-is-mint-club-all-you-need-to-know-about-mint/5651) · [mint.club docs](https://docs.mint.club/mt) |

**Mint Club là gì:**
No-code platform tạo token/NFT với customizable bonding curve. Creator tự set royalty % (0-10%), platform charge 0.5-1%. Multi-chain, không cần code. Dùng cho community tokens, content access passes, meme tokens.

**Fee structure:**
- Creator royalty: tự set 0-10% (typical 2-5%)
- Platform cut: 0.5-1% trên mọi trade
- Royalties paid: on every mint/burn/trade (perpetual)

**Traction:**
- 5,400+ tokens/NFTs tạo trên 16+ chains
- Trading volume: mostly <$1M lifetime per token, daily platform-wide ~$100K (ước tính)
- **80%+ tokens abandoned post-hype** — active token rất ít [[gate.com]](https://www.gate.com/learn/articles/what-is-mint-club-all-you-need-to-know-about-mint/5651)

**Tại sao Mint Club không dominant dù flexible:**
- Không có AI functionality hoặc skill marketplace
- Không có holder-gated content built-in
- Không có social/viral mechanics (không có trending page, discovery kém)
- Quá generalist → không serve tốt bất kỳ use case cụ thể nào

**ClawFriend học gì từ Mint Club:**
Creator-set royalty (0-10% tùy chọn) vs fixed 5% của ClawFriend — Mint Club chứng minh flexibility về fee có thể thu hút creators. Tuy nhiên Mint Club cũng chứng minh: flexibility không đủ nếu không có utility và community.

---

## 3. Bài học thị trường

*Hai platform dưới đây không phải đối thủ trực tiếp (khác chain, khác user segment). Nhưng cả hai đã test model gần với ClawFriend và fail — phân tích để tránh lặp lại lỗi.*

### 3.1 friend.tech — Bonding curve không có utility → Dead trong 3 tháng

**Tại sao đây là bài học quan trọng nhất:** friend.tech là platform DUY NHẤT có cùng fee structure với ClawFriend (5% creator + 5% platform, perpetual). BGK chắc chắn sẽ hỏi: *"friend.tech làm y hệt mà fail, tại sao ClawFriend thắng?"*

| Metric | Số liệu | Nguồn |
|---|---|---|
| Peak monthly fees | $19.67M (Sep 2023) | [DeFiLlama](https://defillama.com/protocol/friend.tech) |
| Peak daily transactions | 539,810 (Sep 13, 2023) | [Bankless Times](https://www.banklesstimes.com/news/2023/12/08/the-end-of-friendtech-what-comes-after-the-hype/) |
| Peak daily active users | ~50K | [Bankless Times](https://www.banklesstimes.com/news/2023/12/08/the-end-of-friendtech-what-comes-after-the-hype/) |
| 3 tháng sau peak | -99% transactions | [CryptoSlate](https://cryptoslate.com/friend-tech-goes-from-viral-success-to-virtual-ghost-town/) |
| Hiện tại | $0 daily revenue | [DeFiLlama](https://defillama.com/protocol/friend.tech) |

**Decline timeline:**

| Tháng | Monthly Fees | % Giảm từ peak |
|---|---|---|
| Sep 2023 | $19.67M | — (peak) |
| Oct 2023 | ~$9.83M | -50% |
| Nov 2023 | $2.42M | -88% |
| Dec 2023 | $0.2M | -99% |

**Root cause (từ Reddit, không phải speculation):**

> *"Influencers profit by buying their own shares and burning them... six figures in a few days of doing essentially nothing"*
> — r/ethtrader [[nguồn]](https://www.reddit.com/r/ethtrader/comments/15xyk0r/friendtech_retail_always_loses_this_is_why/)

> *"Platform is incredibly buggy... mechanics set up to destroy retail"*
> — r/ethtrader

**Bản chất failure:** Creator tokenize social capital (key = quyền chat với creator). Khi creator dump shares xong → không còn incentive duy trì quality content → key mất utility → buyers mất tiền → trust = 0 → volume = 0.

**Tại sao ClawFriend tránh được:**
- **Skill Market tạo utility độc lập với creator activity** — agent có skills tốt thì holder có lý do giữ shares, dù creator im lặng
- **Agent hoạt động autonomous** — agent không cần human creator online để có giá trị (khác hoàn toàn với "creator key" của friend.tech)
- **Quadratic curve + 10% round-trip fee** — math không khuyến khích dump, favors long-term holders

---

### 3.2 Virtuals Protocol — AI agent tokenization không có skill marketplace → Revenue giảm 97%

| Metric | Số liệu | Nguồn |
|---|---|---|
| Peak quarterly revenue | $4.18M (Q1 2025) | [DeFiLlama](https://defillama.com/protocol/virtuals-protocol) |
| Q3 2025 revenue | $142K | [DeFiLlama](https://defillama.com/protocol/virtuals-protocol) |
| Hiện tại (daily) | $3,549 (-97% từ peak) | [DeFiLlama](https://defillama.com/protocol/virtuals-protocol) |
| $VIRTUAL price | $1.56 (từ ATH $5.07, -69%) | [CoinMarketCap](https://coinmarketcap.com/currencies/virtual-protocol/) |
| Creator fee | 40% SubDAO fees | [mpost.io](https://mpost.io/virtuals-protocol-announces-new-fee-distribution-model-allocating-40-of-subdao-revenue-to-creator-wallets/) |

**Creator economics thực tế:**
30-day platform revenue: $158K → 40% creator share = ~$63K chia cho tất cả creators. Median creator: ~$0-1K/month.

**User feedback:**
> *"Pure trash... far-fetched use-cases, promise of easy 10x"*

Thread "Is VP dead?" active trên r/VirtualsProtocol [[nguồn]](https://www.reddit.com/r/VirtualsProtocol/comments/1is8r8q/is_vp_dead/)

**Bản chất failure:** Virtuals tokenize AI agents nhưng không có utility layer. Agent token = pure speculation. Khi AI agent hype qua → trading volume giảm → creator income = 0 → creator bỏ platform.

**Điều Virtuals thiếu mà ClawFriend có:**
- Skill Market: holder có lý do giữ token (access premium skills)
- Holder-gated content: exclusive value cho shareholders
- Social Stream: agents build reputation và network, tạo ongoing value
- BSC deployment: retail DeFi user base lớn hơn Base nhiều

---

## 4. Bối cảnh người dùng

*DeFi power users — persona #2 của ClawFriend — đang trả $75-200/mo cho analytics và đang không hài lòng.*

| Tool | Giá | Pain point | Switch trigger |
|---|---|---|---|
| **Dune Analytics** | $75/mo (tăng từ $49) | Credit system: complex queries bị overage charges, queue waits. Chính Dune thừa nhận: *"simpler queries overcharged, complex queries undercharged"* [[dune.com/blog]](https://dune.com/blog/credits-changing) | Unlimited queries, no credit-based billing |
| **Nansen** | $100+/mo [[Capterra]](https://www.capterra.com/p/267701/Nansen/) | *"Super expensive... what does it really offer over Etherscan?"* / *"Why did Nansen sit back and let Arkham steal their spot?"* — r/CryptoMarkets [[nguồn]](https://www.reddit.com/r/CryptoMarkets/comments/15ow72c/why_did_nansen_just_sit_back_and_let_arkham_steal/) | Faster updates, real-time execution, lower cost |

**Key insight cho Skill Market positioning:**
DeFi user sẵn sàng trả $75-200/mo cho analytics. Holder-gated skill (VD: Whale Wallet Tracker) có thể capture phần ngân sách này — user hold 1 share thay vì trả subscription, và share có thể resell còn subscription thì không.

**Security concern thực từ DeFi users về AI agents:**
> *"What permissions does the agent have? Can it be revoked instantly?"*
> — r/defi [[nguồn]](https://www.reddit.com/r/defi/comments/1r4ii1y/ai_agents_in_defi_genuine_efficiency_or_just/)

→ ClawFriend đã có answer: instant key revocation (`POST /v1/agents/me/regenerate-key`). Cần communicate rõ trên landing page.

---

## 5. Ma trận so sánh

| Platform | Bonding Curve | Skill Market | Social Stream | On-chain Identity | Creator Perpetual Fee | Trạng thái |
|---|---|---|---|---|---|---|
| **ClawFriend** | ✅ 5%+5% | ✅ Public + Holder-gated | ✅ BSC | ✅ BSC | ✅ 5% mọi trade | Active |
| **Cooker.club** | ✅ 1% (DAO only) | ❌ | ✅ BSC | ✅ BSC | ❌ Creator earn $0 | Stalled |
| **Moltbook** | ❌ | ❌ | ✅ Web2, 1M+ agents | ❌ | ❌ | Active nhưng no economy |
| **Virtuals Protocol** | ✅ | ❌ | ❌ | ✅ Base | ✅ 40% (đang về $0) | Declining -97% |
| **friend.tech** | ✅ 5%+5% | ❌ | ❌ | ✅ Base | ✅ 5% | Dead — $0 daily |
| **GPT Store** | ❌ | ✅ 50K+ GPTs | ❌ | ❌ | ~20-30%, opaque | Active, 99% creators earn $0 |

**Pattern rõ ràng:** Platform nào thiếu bất kỳ 1 trong 3 layer (bonding curve + skill market + social) đều không sustain được. ClawFriend là platform đầu tiên trên BSC combine đủ cả 3.

---

## 6. Kết luận và positioning

### Thắng ở đâu

**1. Creator economics tốt nhất trong category**
5% perpetual fee vào wallet creator trực tiếp mỗi trade. So sánh:
- Cooker: creator earn $0 từ trading
- Virtuals: creator earn 40% SubDAO nhưng đang về $0 vì volume collapse
- GPT Store: median creator earn $0-50/quarter
- **ClawFriend $10K daily volume = creator earn $500/ngày = $15K/tháng passive**

**2. BSC = đúng thị trường**
PancakeSwap 500K+ daily users, 80%+ BSC users là retail DeFi traders — đây chính xác là persona DeFi Power User của ClawFriend. Virtuals trên Base có user base nhỏ hơn nhiều cho retail DeFi.

**3. OpenClaw ecosystem = built-in pipeline**
- OpenClaw: 135K+ GitHub stars, acqui-hired by OpenAI ~$1B+
- ClawHub: 5,700+ community skills đã tồn tại
- Developers đang build OpenClaw agents = direct pipeline: `npx clawhub@latest install clawfriend`

### Thua ở đâu (honest)

**1. Scale gap so với Moltbook** — 1M+ agents vs early stage. Sẽ mất thời gian để đuổi kịp về social layer scale.

**2. Friction cao hơn** — BNB gas + Twitter verification. Phù hợp crypto-native, không phải mainstream. Không nên cố fight Moltbook ở mainstream — focus vào crypto-native segment.

**3. Skill Market trống lúc launch** — Đây là risk #1. Marketplace trống = không có lý do để hold shares = lặp lại lỗi của Virtuals và Cooker. Cần populate trước launch.

### Action items từ phân tích này

| Ưu tiên | Action | Căn cứ |
|---|---|---|
| 🔴 Trước launch | Populate Skill Market với 10+ quality skills | Marketplace trống = Virtuals/Cooker failure mode |
| 🔴 Trước launch | Communicate rõ instant key revocation trên landing | DeFi user concern: *"Can it be revoked?"* — ClawFriend có answer, cần show |
| 🟠 Tuần 1 | Reach OpenClaw developer community | 135K GitHub stars, zero cost, highest intent users |
| 🟠 Tuần 1 | Đặt ClawFriend trong narrative "Virtuals but with utility" | User đang tìm Virtuals alternative — capture intent đó |
| 🟡 Tháng 1 | Target Dune/Nansen frustrated users | $75-200/mo budget, frustrated, actively looking for alternative |

---

*Risk thực nhất của ClawFriend không phải competition — Cooker stalled, Virtuals declining. Risk thực là việc populate Skill Market với content đủ chất lượng để giữ early holders qua giai đoạn trước khi organic growth bắt đầu.*
