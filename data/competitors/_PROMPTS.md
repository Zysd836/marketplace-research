# Perplexity Prompts — Competitive Landscape Research

> **Mục tiêu:** Tìm đối thủ thực sự của ClawFriend theo từng module sản phẩm, không dùng danh sách có sẵn.
> **Cách dùng:** Chạy tuần tự Phase 1 trước → paste response vào file tương ứng → chạy Phase 2.

---

## PHASE 1 — DISCOVERY: Tìm đối thủ theo module

### PROMPT 1A — Skill Market competitors

```
I'm building a marketplace where AI agent creators can publish and sell reusable AI skills (prompts, workflows, tool integrations, automation scripts). Buyers can browse, download, and integrate these skills into their own AI agents. There are two access tiers: free/public skills and premium skills that require holding the creator's token to access.

Find me every existing platform — Web3 or Web2 — where developers/creators can publish AI capabilities (skills, plugins, tools, agents, prompts, workflows) and earn revenue when others use them.

For each platform found, I need:
1. Platform name + URL
2. What exactly can be listed/sold (prompts? plugins? full agents? workflows?)
3. How does the creator earn money? (revenue share %, flat fee, subscription cut, token model)
4. How does the buyer pay? (subscription, per-use, one-time purchase, token)
5. The platform's take rate (what % the platform keeps)
6. Number of listings/creators/buyers if publicly available
7. Monthly revenue or GMV if available
8. Main user segment (developers? businesses? consumers?)

Include: GPT store, Claude plugins, open-source registries, Web3 agent marketplaces, LangChain hub, any prompt marketplaces, anything relevant.
```

---

### PROMPT 1B — Shares Trading / Bonding Curve competitors

```
I'm building a platform where each AI agent has tradeable shares using a bonding curve mechanism. Share price increases automatically as more people buy. The agent creator earns a 5% fee on every trade perpetually. The platform also earns 5% on every trade. No external liquidity pool needed — the bonding curve IS the market.

Find me every platform — crypto/Web3 — that uses bonding curve mechanics to tokenize non-memecoin assets. Specifically platforms where:
- The underlying asset has some utility or productive output (not pure speculation)
- Creators earn ongoing revenue from trading activity
- There is some form of "quality signal" beyond just price

For each platform found:
1. Platform name + URL + chain
2. What is being tokenized (creator shares? agent tokens? content access?)
3. Exact fee structure: who pays what % to whom on each trade
4. How does the creator earn? Is it perpetual or one-time?
5. What determines the value of the token beyond speculation?
6. Trading volume and revenue numbers if available
7. What is the graduation/migration mechanism if any?
8. Is the creator incentivized to keep building after launch?
```

---

### PROMPT 1C — AI Agent Social + On-chain Identity competitors

```
I'm building a platform where AI agents have autonomous social presence — they tweet, reply, follow, and build reputation publicly. Each agent has an on-chain identity on BNB Smart Chain with verifiable history of all its actions. Humans can follow agents, agents can collaborate with other agents.

Find me every platform where AI agents:
- Have their own social media presence (post content autonomously)
- Have on-chain identity or verifiable history
- Can earn money or generate revenue independently
- Can interact with other agents autonomously

For each platform:
1. Platform name + URL + chain
2. How does the agent's identity work? (wallet, NFT, token, username)
3. Does the agent post content autonomously or is it human-controlled?
4. What does the agent do that generates value? (trading, content, services)
5. How does the agent's reputation get built and measured?
6. Revenue model: how does the platform make money from agent activity?
7. User/agent count and activity metrics if available
```

---

### PROMPT 1D — BSC Ecosystem scan

```
What AI agent platforms, AI marketplaces, or bonding curve launchpads currently exist on BNB Smart Chain (BSC)?

I need to know:
1. Is there any AI agent platform already on BSC? Name them with URLs and current status
2. Is there any skill or capability marketplace on BSC?
3. Are there any bonding curve platforms on BSC besides meme launchpads?
4. What are the largest non-memecoin applications on BSC by TVL or daily users in 2025?
5. Has Virtuals Protocol, any major AI agent platform, or any skill marketplace announced BSC expansion plans?
6. What is the BSC developer and user demographic — retail vs institutional, DeFi focus, geographic distribution?

Source: DeFi Llama, BSCScan data, official announcements.
```

---

## PHASE 2 — DEEP DIVE: Business model analysis per competitor

> Chạy prompt này cho từng đối thủ tìm được ở Phase 1. Thay [PLATFORM NAME] bằng tên thực.

### PROMPT 2 — Per-competitor deep dive (template)

```
Give me a complete business model analysis of [PLATFORM NAME] ([URL if known]).

I need to understand how money actually flows through this platform:

1. REVENUE MODEL
   - What are all the fees this platform charges? Exact percentages and amounts.
   - Who pays these fees — buyers, sellers, or both?
   - Is revenue one-time or recurring?
   - What is the platform's estimated monthly/annual revenue? Source?

2. CREATOR/SELLER ECONOMICS
   - How much does a creator actually earn per $1,000 of activity on their listing?
   - Is creator income active (per transaction) or passive (recurring)?
   - What does a successful creator on this platform look like in numbers?
   - What incentivizes a creator to keep their listing active and improving?

3. BUYER ECONOMICS
   - What does a buyer pay for access? One-time, subscription, per-use?
   - What is the buyer's alternative if this platform didn't exist? What do they pay there?
   - What drives repeat purchase behavior?

4. GROWTH MECHANICS
   - What brings new creators to the platform?
   - What brings new buyers to the platform?
   - Is there a network effect? Does the platform get better as more people join?

5. TRACTION (with sources)
   - Number of active listings/creators/buyers
   - GMV or revenue numbers
   - Growth rate if available

6. SUSTAINABILITY ASSESSMENT
   - Is this business model profitable or subsidized by token/VC?
   - What would kill this model?
   - What is working well that ClawFriend should learn from?
   - What is failing that ClawFriend should avoid?
```

---

## PHASE 3 — MARKET CONTEXT

### PROMPT 3A — Market stage analysis

```
Analyze the current state (February 2026) of the AI agent economy in Web3/crypto:

1. MARKET STAGE: Is this market nascent, growing, or maturing?
   - What is the total market size (TVL, volume, users) across all AI agent platforms?
   - What was the growth rate in 2024 vs 2025?
   - Are early leaders consolidating or is the market still fragmented?

2. REVENUE LEADERS: Which platforms are generating the most real revenue (not token price)?
   - List top 5 by actual protocol revenue in 2025
   - Source: Token Terminal, DeFi Llama, official reports

3. FAILURE PATTERNS: What AI agent or related platforms have failed in 2024-2025?
   - What were the common causes of failure?
   - What does this tell us about what the market needs vs what doesn't work?

4. WHAT USERS ACTUALLY WANT: Based on adoption data, what features or mechanics have real traction?
   - What do users pay for consistently?
   - What sounds good in theory but users don't actually use?

5. GAPS: What obvious use case does NOT have a dominant platform yet?
```

### PROMPT 3B — Creator economy benchmarks

```
In crypto/Web3 platforms with creator monetization, what are the benchmark numbers I should know?

1. What is a typical creator take rate across different platform types?
   - Content platforms (Mirror, Paragraph)
   - NFT marketplaces (OpenSea, Blur, Magic Eden)
   - Social token platforms
   - AI agent platforms

2. For bonding curve platforms specifically:
   - What % of launched tokens/agents actually generate meaningful revenue for creators?
   - What is a "successful" creator's monthly earnings on the best platforms?
   - What is the typical user retention curve after initial launch?

3. For skill/plugin marketplaces:
   - GPT Store: how much do top creators earn? Average creators?
   - What is the conversion rate from free to paid in typical plugin/skill marketplaces?

Give me real numbers with sources, not estimates.
```

---

## THỨ TỰ CHẠY & FILE LƯU

| Thứ tự | Prompt | Lưu response vào |
|--------|--------|-----------------|
| 1 | 1A — Skill Market | `data/competitors/skill-market-competitors.md` |
| 2 | 1B — Bonding Curve | `data/competitors/bonding-curve-competitors.md` |
| 3 | 1C — AI Agent Social | `data/competitors/ai-agent-social-competitors.md` |
| 4 | 1D — BSC Ecosystem | `data/competitors/bsc-ecosystem.md` |
| 5 | 3A — Market Stage | `data/competitors/market-context.md` |
| 6 | 3B — Creator benchmarks | `data/competitors/creator-benchmarks.md` |
| 7 | 2 — Per competitor (x N) | `data/competitors/[name].md` |

**Sau khi có đủ response → báo lại, tôi sẽ tổng hợp thành competitive-landscape.md.**
