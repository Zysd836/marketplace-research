# Competitive Landscape — ClawFriend

> **Cập nhật:** 25/02/2026
> **Nguồn:** Perplexity research (Phase 1 + Phase 2) · BNB Chain official docs · On-chain data · Media coverage

---

## 1. Bối cảnh thị trường

BSC đang bước vào giai đoạn AI agent với sự hỗ trợ chính thức từ BNB Chain: hai tiêu chuẩn mới — **ERC-8004** (on-chain identity cho AI agents) và **BAP-578/NFA** (Non-Fungible Agent — agent là NFT tradeable) — được deploy trên BSC mainnet từ đầu 2026, với 20,000+ agents đã deployed sử dụng identity stack này. BNB Chain cũng đang chạy hackathon "Good Vibes Only: OpenClaw Edition" với 200+ builders — **đây là cùng framework OpenClaw mà ClawFriend xây trên đó.** [[BNB Chain Blog]](https://www.bnbchain.org/en/blog/introducing-bnb-chains-ai-agent-solution)

Tuy nhiên, trong toàn bộ ecosystem 58 projects AI agent trên BSC, **không project nào** kết hợp cả ba: skill marketplace + bonding curve có perpetual creator fee + on-chain agent identity. Đây là khoảng trống mà ClawFriend đang lấp.

---

## 2. Phân tích đối thủ theo module

ClawFriend có 3 module có thể bị cạnh tranh:
- **Module A — Shares Trading** (bonding curve, 5%+5% fee)
- **Module B — Skill Market** (publish/buy AI skills, holder-gated access)
- **Module C — Social Stream** (autonomous agents với on-chain identity)

---

### 2.1 Cooker.club — Đối thủ trực tiếp nhất (BSC, bonding curve + AI agents)

| | |
|---|---|
| **URL** | cooker.club *(website hiện không accessible — có thể stalled)* |
| **Chain** | BNB Chain + Solana |
| **Cạnh tranh module** | A (Shares Trading) + C (Social Stream) |
| **Trạng thái** | Stalled — website down Feb 2026, traction rất thấp |

**Cơ chế hoạt động:**
Cooker.club tokenize AI agents dưới dạng "virtual idols" bằng bonding curve. Agents được tạo bởi humans qua no-code tool, tự động generate AI music/content. C2E (Create-to-Earn): sau khi agent graduate lên PancakeSwap, creator nhận 10% block rewards ($COOK), 90% về holders.

**Fee structure:**
- Bonding curve: **1% toàn bộ về DAO** (cho $COOK buyback) — creator **không nhận trading fee**
- Tạo agent: **0.005 BNB** (~$3)
- Graduation: ~24 BNB buy volume (~$14K) + 1.5 BNB fee → PancakeSwap
- Block rewards: 75 $COOK/block (mỗi 3s trên BSC) = ~$21K/ngày ở $0.01/COOK

[[Gate.io news]](https://www.gate.ac/news/detail/10708730) · [[Binance Square]](https://www.binance.com/en-ZA/square/post/22727546758426)

**Creator economics:**
Creator không nhận % từ trading. Thu nhập đến từ 10% block rewards — nhưng chỉ sau graduation (~$14K buy volume), và phụ thuộc vào $COOK price. Tại traction hiện tại (<100 agents mid-2025, website unreachable Feb 2026), hầu hết creators chưa đến graduation.

**Traction:** <100 agents launched (mid-2025 data); $COOK FDV target $10M; contracts verified/non-honeypot. Không có DeFi Llama TVL listing — quá nhỏ.

**Điểm yếu cốt lõi:**
- Creator nhận **0% từ trading** — toàn bộ fee về DAO. Không có lý do để creator tiếp tục build sau launch.
- Chỉ làm "virtual idols" (AI music) — không có skill marketplace, không có utility thực cho buyers
- Không có holder-gated content — không có cơ chế buộc user mua token
- Graduation threshold $14K quá cao cho early-stage project
- **Website hiện down** — project có vẻ stalled

**Bài học cho ClawFriend:** Đây là đối thủ gần nhất trên BSC nhưng đang stall vì sai ở creator economics: 0% trading fee về creator = không có lý do build. ClawFriend sửa đúng điểm này với 5% perpetual creator fee.

---

### 2.2 Moltbook — Đối thủ quy mô lớn (Social Stream, Web2)

| | |
|---|---|
| **URL** | moltbook.ai |
| **Chain** | Web2 thuần — không có blockchain |
| **Cạnh tranh module** | C (Social Stream) |
| **Trạng thái** | Active — ra mắt Jan 28, 2026; đang plateau |

**Cơ chế hoạt động:**
Moltbook là mạng xã hội chỉ dành cho AI agents — humans chỉ observe, không participate. Agents (powered bởi **OpenClaw LLMs — cùng framework với ClawFriend**) được humans configure một lần, sau đó chạy 99% autonomous: post, comment, upvote, debate trong 200+ subcommunities. Agents tự tổ chức thành "religions" (Crustafarianism), conspiracies, governance systems.

[[CNBC, Feb 2 2026]](https://www.cnbc.com/2026/02/02/social-media-for-ai-agents-moltbook) · [[The Guardian]](https://www.theguardian.com/technology/2026/feb/02/moltbook-ai-agents-social-media-site-bots-artificial-intelligence) · [[NPR]](https://www.npr.org/2026/02/04/nx-s1-5697392/moltbook-social-media-ai-agents)

**Traction (có nguồn):**
- Launch Jan 28-29, 2026 by Matt Schlicht
- 10K+ agents trong 48 giờ đầu
- 770K agents by Feb 1
- **1M+ agents, millions of human observers** by Feb 2, 2026
- Covered by: CNBC, Guardian, Forbes, NBC News, NPR, NYT

**Business model:**
Freemium — agents free to create; premium plugins/skills (~$5-20/tháng/agent est.); **creators không earn gì**. Platform thu từ subscriptions, không có creator economy.

**Điểm yếu cốt lõi:**
- **Zero economic layer** — không có token, không có trading, không có creator fee
- Agents không thể earn money độc lập
- Không có skill marketplace — plugins tồn tại nhưng không tradeable/holder-gated
- **Purely Web2** — không có on-chain identity, history không verifiable
- Novelty-driven growth đang plateau (Feb 2026 reports)

**Điểm mạnh Moltbook làm tốt hơn:**
- Scale: 1M+ agents vs ClawFriend đang build
- Pure autonomy: 99% agent-driven, không cần human intervention liên tục
- Viral content mechanics — bizarre emergent behaviors tạo organic press coverage

**Bài học cho ClawFriend:** Moltbook chứng minh có demand thực cho AI agent social networks (1M+ agents trong <2 tuần). Nhưng không có economic layer = không có moat. ClawFriend có điều Moltbook không có: **agents có thể earn money, và holders có lý do tài chính để participate.** Đây là long-term retention mechanism mà Moltbook không có.

**Cơ hội:** Moltbook agents được tạo bởi OpenClaw — cùng framework với ClawFriend. Những agent creators đó là target user trực tiếp của ClawFriend Skill Market.

---

### 2.3 GPT Store (OpenAI) — Benchmark Skill Marketplace

| | |
|---|---|
| **URL** | chatgpt.com/gpts |
| **Chain** | Web2 — centralized |
| **Cạnh tranh module** | B (Skill Market) |
| **Trạng thái** | Active — 50K+ GPTs, dominant trong segment |

**Cơ chế hoạt động:**
Creators build GPT (custom AI với prompts, tools, workflows), list lên store. Buyers access thông qua ChatGPT Plus/Team subscription. Platform tính phí dựa trên "user engagement" — cơ chế cụ thể không được public.

[[OpenAI official announcement]](https://openai.com/index/introducing-the-gpt-store/)

**Traction:**
- ~50K+ GPTs listed, ~10K active creators (triệu creators build private GPTs)
- 200M+ ChatGPT users = potential buyers
- Estimated $50M+ annual pool từ Plus subscriptions, nhưng chỉ ~$10M thực sự về creators

**Creator economics (thực tế):**
Revenue share không phải 70/30 như đồn — thực ra là opaque "engagement metric." [[thegptshop.online]](https://www.thegptshop.online/blog/openai-gpt-store-revenue-sharing)
- Threshold: Cần ChatGPT Pro ($200/tháng), US-only eligibility (mở rộng hạn chế), min 25 conversations/week/GPT
- Payout: Quarterly, minimum $100
- **Top 1% creators:** $2K-$10K/tháng (viral GPTs với 50K+ uses)
- **99% creators còn lại: $0-$50/quarter**
- Concentration: Top 1% capture gần như toàn bộ revenue

**Điểm yếu cốt lõi:**
- Creator không có ownership — OpenAI có thể delist bất kỳ lúc nào
- Discovery hoàn toàn do algorithm OpenAI kiểm soát — new creator không có cơ hội
- Earnings opaque: creators không biết công thức tính, cảm giác "lottery"
- Geographic restriction: US-heavy eligibility
- Quarterly payouts + $100 minimum = phần lớn creators không nhận được gì

**Bài học cho ClawFriend:** GPT Store chứng minh demand khổng lồ cho skill marketplaces (50K+ creators). Nhưng creator economics bị broken — 99% earn $0. ClawFriend có mô hình hoàn toàn khác: **holder-gated thay vì subscription, on-chain ownership thay vì platform control, instant trading fees thay vì quarterly payouts.** Creator biết chính xác họ earn bao nhiêu (5% mỗi trade) thay vì chờ đợi algorithm không rõ ràng.

---

### 2.4 Mint Club — Bonding Curve Infrastructure

| | |
|---|---|
| **URL** | mint.club |
| **Chain** | Ethereum, Polygon, Base, BNB Chain, Arbitrum, Optimism, Avalanche |
| **Cạnh tranh module** | A (Shares Trading) — infrastructure layer |
| **Trạng thái** | Active nhưng niche — 80% abandoned tokens |

**Cơ chế hoạt động:**
No-code platform để launch ERC20 tokens hoặc NFTs với customizable bonding curves. Creator set royalty % (0-10%) trên mọi mint/burn/trade. Platform lấy 0.5-1% riêng.

[[Gate.io — What is Mint Club]](https://www.gate.com/learn/articles/what-is-mint-club-all-you-need-to-know-about-mint/5651) · [[Mint Club official docs]](https://docs.mint.club/mt)

**Traction:**
- 5,400+ tokens/NFTs tạo ra (3,100 ERC20 + 2,300 NFTs)
- Daily volume ~$100K estimated toàn platform
- **80%+ inactive** sau initial hype

**Điểm yếu:**
- Không có AI layer, không có skill marketplace
- Không có holder-gated content built-in
- Quá generalist — không có vertical focus
- Không có social/discovery mechanics → không viral được
- Flexible nhưng thiếu use case cụ thể → abandoned rate cao

**Bài học:** Bonding curve infrastructure một mình không đủ. Mint Club có tech tốt nhưng không có use case compelling = 80% abandoned. ClawFriend dùng bonding curve cho AI agent shares — đây là use case có fundamental value backing price.

---

### 2.5 DIN (Decentralized AI Network) — BSC AI Infrastructure

| | |
|---|---|
| **URL** | Binance Square presence |
| **Chain** | BNB Chain + riêng L2 |
| **Cạnh tranh module** | Không cạnh tranh trực tiếp — là infrastructure layer |
| **Trạng thái** | Active — raised $8M, building BSC L2 |

**Cơ chế hoạt động:**
DIN là decentralized AI data và agent network trên BNB Chain, đang build L2 data chain riêng. Cung cấp RAG, LLMOps, AIGC monetization. Token DIN là gas/utility asset.

[[PaNews]](https://www.panewslab.com/en/articles/jh56katv) · [[Binance Square]](https://www.binance.com/en/square/post/17462851960897)

**Traction:**
- 30M+ registered users
- Millions of daily active users
- Raised $8M
- Consistently top AI dapp ranking trên BNB Chain

**Vị trí trong ecosystem:** DIN là infrastructure layer — data, LLMOps, agent execution. **Không phải marketplace, không có bonding curve, không có creator economy.** Đây là potential integration partner, không phải competitor.

---

## 3. Bảng so sánh

| | **Cooker.club** | **Moltbook** | **GPT Store** | **Mint Club** | **ClawFriend** |
|---|:---:|:---:|:---:|:---:|:---:|
| **Chain** | BSC/SOL | Web2 | Web2 | Multi-chain | **BSC** |
| **Bonding curve** | ✅ 1% DAO | ❌ | ❌ | ✅ custom % | ✅ **5%+5%** |
| **Creator trading fee** | ❌ 0% | ❌ | ❌ | ✅ custom | ✅ **5% perpetual** |
| **Skill marketplace** | ❌ | ❌ | ✅ plugins | ❌ | ✅ |
| **Holder-gated access** | ❌ | ❌ | ❌ | ❌ | ✅ |
| **On-chain agent identity** | ⚠️ basic | ❌ | ❌ | ❌ | ✅ |
| **Autonomous social** | ⚠️ partial | ✅ 1M+ agents | ❌ | ❌ | ✅ |
| **Creator owns asset** | ⚠️ | ❌ | ❌ | ✅ | ✅ |
| **Traction** | 🔴 stalled | 🟢 1M+ agents | 🟢 50K GPTs | 🟡 5.4K tokens | 🔵 building |
| **BSC native** | ✅ | ❌ | ❌ | ✅ | ✅ |

---

## 4. Gap analysis

### Gap 1: Không ai giải quyết được creator economics đúng cách

| Platform | Creator nhận từ trading |
|---|---|
| Cooker.club | **0%** — toàn bộ về DAO |
| GPT Store | **~0% thực tế** — 99% creators earn $0 |
| Moltbook | **$0** — không có economic layer |
| Mint Club | Custom % nhưng 80% abandoned = không ai trade |
| **ClawFriend** | **5% perpetual trên mọi trade, ngay lập tức** |

→ ClawFriend là nơi duy nhất creator biết chính xác họ earn bao nhiêu, không cần chờ algorithm hay đạt threshold.

### Gap 2: Không ai có đủ stack trên BSC

Không project nào trên BSC kết hợp đủ 3: skill marketplace + bonding curve + on-chain agent identity.
- Cooker.club gần nhất nhưng thiếu skill market và perpetual creator fee → stalled
- DIN có infrastructure nhưng không phải marketplace
- **Không ai trong 58 projects của BNB Chain ecosystem làm điều này**

[[BNB Chain Blog — 58 projects AI ecosystem]](https://www.binance.com/en/square/post/292953049535746)

### Gap 3: Holder-gated access là cơ chế chưa ai làm

Không platform nào trong research có cơ chế: *"hold token của creator = unlock premium skill."* Đây là flywheel:

```
Skill tốt → Users mua shares để access → Share price tăng
→ Creator earn nhiều → Creator publish skill tốt hơn → Lặp lại
```

Cơ chế này tạo ra alignment trực tiếp giữa skill quality và share price — không có ở bất kỳ đối thủ nào.

### Gap 4: BSC có user base nhưng không có AI agent economy

- BSC: 80%+ retail users, Asia-dominant (VN/IN/TR top markets) [[Binance Square]](https://www.binance.com/en/square/post/291005685654465)
- PancakeSwap: $2B TVL, 500K+ daily users — đây là user base ClawFriend có thể reach
- Không có AI agent economy tương đương Virtuals Protocol (Base) hay ElizaOS (Solana) trên BSC
- BNB Chain 2026 roadmap: agent registry + identity standards = **infrastructure đang được xây để ClawFriend plug vào**, không phải cạnh tranh

---

## 5. Positioning — Mình đứng ở đâu

### Thắng rõ ràng

**Creator economics tốt nhất trong market:** 5% perpetual trading fee, instant, on-chain, không cần threshold. So với Cooker.club (0%), GPT Store (99% earn $0), Moltbook ($0) — đây là lợi thế số một.

**BSC first-mover cho AI agent economy:** Không có đối thủ có đủ stack trên BSC. Cooker.club — cái gần nhất — đang stalled. DIN là infrastructure, không phải marketplace.

**Holder-gated skill access:** Không ai có cơ chế này. Tạo ra flywheel tự nhiên giữa skill quality và share demand.

**Tailwind từ BNB Chain:** ERC-8004 + BAP-578 standards, agent registry trong roadmap 2026, hackathon OpenClaw Edition = BNB Chain đang build infrastructure mà ClawFriend cần. Platform, không phải đối thủ.

### Thua thực tế — không nên che giấu

**Scale gap so với Moltbook:** 1M+ agents (Moltbook) vs ClawFriend đang bootstrap. Moltbook chứng minh có thể reach scale nhanh — nhưng họ không có economic sustainability.

**Discovery không có:** GPT Store có 200M+ ChatGPT users làm distribution. ClawFriend cần tự build distribution từ đầu — không có parent platform nào đưa traffic đến.

**Execution risk của full-stack:** ClawFriend build đồng thời 4 modules. Mỗi module đều có competitor chuyên sâu hơn ở từng điểm (Moltbook ở social scale, GPT Store ở skill distribution). Rủi ro là spread quá mỏng.

### Kết luận định vị

ClawFriend không cạnh tranh với Moltbook về social scale, không cạnh tranh với GPT Store về distribution. ClawFriend đang build một thứ khác: **AI agent economy với creator economics thực sự** — nơi agents có on-chain identity, skills có real value, và holders có lý do tài chính để participate ngoài speculation.

Market hiện tại chứng minh đủ demand: Moltbook 1M+ agents trong 2 tuần (social demand), GPT Store 50K+ GPTs (skill demand), Cooker.club first attempt on BSC (chain-native demand). **Không ai kết hợp cả ba với creator economics đúng.** Đó là khoảng trống ClawFriend đang lấp.

---

## Nguồn tham khảo

| Đối thủ | Nguồn chính |
|---|---|
| Cooker.club | [Gate.io news](https://www.gate.ac/news/detail/10708730) · [Binance Square](https://www.binance.com/en-ZA/square/post/22727546758426) · [Cooker.club Gitbook](https://cooker-club.gitbook.io/cooker.club-docs/how-it-works) |
| Moltbook | [CNBC Feb 2026](https://www.cnbc.com) · [The Guardian](https://www.theguardian.com/technology/2026/feb/02/moltbook-ai-agents-social-media-site-bots-artificial-intelligence) · [NPR](https://www.npr.org/2026/02/04/nx-s1-5697392/moltbook-social-media-ai-agents) · [Forbes](https://www.forbes.com/sites/guneyyildiz/2026/01/31/inside-moltbook-the-social-network-where-14-million-ai-agents-talk-and-humans-just-watch/) |
| GPT Store | [OpenAI official](https://openai.com/index/introducing-the-gpt-store/) · [The GPT Shop analysis](https://www.thegptshop.online/blog/openai-gpt-store-revenue-sharing) · [Reddit community](https://www.reddit.com/r/GPTStore/comments/19b5zdw/openais_gpt_store_revenue_sharing_model/) |
| Mint Club | [Gate.io analysis](https://www.gate.com/learn/articles/what-is-mint-club-all-you-need-to-know-about-mint/5651) · [Official docs](https://docs.mint.club/mt) |
| BNB Chain ecosystem | [BNB Chain official](https://www.bnbchain.org/en/solutions/ai-agent) · [BlockEden BAP-578](https://blockeden.xyz/blog/2026/02/18/bnb-chain-bap-578-ai-agents-on-chain-assets/) · [Chainwire ERC-8004](https://chainwire.org/2026/02/04/bnb-chain-announces-support-for-erc-8004-to-enable-verifiable-identity-for-autonomous-ai-agents/) · [BNB Tech Roadmap 2026](https://www.ainvest.com/news/bnb-chain-2025-technical-breakthroughs-2026-roadmap-high-throughput-cost-evm-chain-poised-institutional-adoption-2601/) |
| DIN | [PaNews](https://www.panewslab.com/en/articles/jh56katv) · [Binance Square](https://www.binance.com/en/square/post/17462851960897) |
