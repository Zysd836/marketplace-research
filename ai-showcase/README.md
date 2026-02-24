# AI Showcase — Research Workflow

> Ghi lại các prompt + công cụ AI đã dùng trong quá trình research.

---

## Công cụ đã dùng

| Tool | Dùng cho |
|------|----------|
| Claude (Sonnet 4.6) | Research đối thủ, phân tích gap, viết competitive analysis |
| Web Search (built-in) | Fact-check số liệu, tìm stats thực tế từ nguồn gốc |

---

## Prompt #1 — Research 5 đối thủ hàng đầu

**Tool:** Claude + Web Search

**Prompt:**
```
Research 5 top competitors for ClawFriend (a Web3 AI agent platform on BSC
with bonding curve share trading + skill marketplace + social layer).

For each competitor, find REAL data (not guesses):
1. Platform name + URL
2. Chain/network
3. Number of agents/users/services (real numbers)
4. Trading volume or TVL or revenue (real numbers with source)
5. Fee structure / monetization model
6. Key features
7. What they do NOT have (gaps vs ClawFriend)

Research these 5 specifically:
1. Virtuals Protocol (virtuals.io) - AI agent tokenization on Base
2. friend.tech - bonding curve social, now dead
3. ElizaOS / ai16z (elizaos.github.io) - AI agent framework
4. Pump.fun (pump.fun) - bonding curve token launchpad on Solana
5. SingularityNET (singularitynet.io) - decentralized AI marketplace

For each, search web for recent stats (2024-2026).
Return all data with sources (URLs).
```

**Insight rút ra:**
- Virtuals Protocol: 18K+ agents, $8B DEX volume — biggest competitor nhưng không có BSC và không có skill marketplace cho humans
- friend.tech: dead project nhưng cực kỳ valuable làm case study — cùng fee model (5%+5%) nhưng zero utility → sụp đổ
- ElizaOS: 17K GitHub stars = distribution channel sẵn có, không phải chỉ là đối thủ
- Pump.fun: $834M revenue bằng bonding curve nhưng 0% về creator — ClawFriend làm tốt hơn hẳn
- SingularityNET: 70 services sau 7 năm = bài học về execution kém dù concept đúng

**Verify bằng tay:**
- Virtuals stats → [PRNewswire](https://www.prnewswire.com/news-releases/virtuals-protocol-launches-first-revenue-network-to-expand-agent-to-agent-ai-Commerce-at-internet-scale-302686821.html) + [Messari](https://messari.io/report/understanding-virtuals-protocol-a-comprehensive-overview)
- friend.tech → [DL News](https://www.dlnews.com/articles/defi/friend-tech-shuts-down-after-revenue-and-users-plummet/) + [CryptoSlate](https://cryptoslate.com/generating-only-21-in-revenue-in-30-days-friendtech-relinquishes-control-of-contracts/)
- ElizaOS → [GitHub repo trực tiếp](https://github.com/elizaOS/eliza) — stars/forks đếm được
- Pump.fun → [Blockworks](https://blockworks.co/news/pumpdotfun-fee-model) + [CoinMarketCap Academy](https://coinmarketcap.com/academy/article/pumpfun-dominates-solana-network-responsible-for-70percent-of-token-launches-and-56percent-of-transactions)
- SingularityNET → [Dev Portal](https://dev.singularitynet.io/docs/products/AIMarketplace/) + [Annual Report 2024](https://medium.com/singularitynet/singularitynet-annual-report-2024-advancing-beneficial-agi-and-decentralized-ai-e2ea838edaf7)

---

## Prompt #2 — Gap analysis & positioning

**Tool:** Claude

**Prompt:**
```
Dựa trên data của 5 đối thủ trên, phân tích:
1. Gap nào trên thị trường chưa ai lấp?
2. ClawFriend thắng ở đâu, thua ở đâu (thành thật)?
3. Moat bền vững là gì?
4. Segment cụ thể nên đánh vào đầu tiên?
```

**Insight rút ra:**
- Gap #1: Không ai có bonding curve + autonomous agents + skill marketplace trong 1 platform
- Gap #2: BSC hoàn toàn trống — 70M+ wallets, 0 AI agent economy
- Gap #3: Creator economy — Pump.fun 0%, ElizaOS $0, chỉ ClawFriend có 5% perpetual
- Segment đầu tiên: OpenClaw/ElizaOS developers đang cần monetize skills

---

## Bài học từ quá trình dùng AI

1. **AI hallucinate số liệu** — đặc biệt market size và user count. Mọi con số đều phải verify từ nguồn gốc trước khi dùng
2. **Prompt tốt = kết quả tốt** — yêu cầu "real numbers with source" thay vì chỉ hỏi "stats" cho output tốt hơn nhiều
3. **Cross-verify bằng nhiều nguồn** — Messari, CoinDesk, GitHub, DeFiLlama là nguồn đáng tin nhất cho Web3 data
4. **AI giỏi synthesis** — phân tích gap và positioning từ raw data là việc AI làm rất tốt, tiết kiệm đáng kể thời gian
