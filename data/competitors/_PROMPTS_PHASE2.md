# Phase 2 — Deep Dive Prompts (chạy sau khi có Phase 1 response)

> Chạy từng prompt → paste response vào file `data/competitors/[tên].md`

---

## PROMPT 2A — Cooker.club (ĐỐI THỦ TRỰC TIẾP NHẤT)

```
Give me a complete business model analysis of Cooker.club (cooker.club) — an AI agent launchpad running on BNB Chain and Solana that uses bonding curves to tokenize AI agent tokens with auto-social features.

I need hard numbers and mechanics, not marketing copy:

1. PRODUCT
   - What exactly is an "agent" on Cooker.club? Who creates it — humans or AI?
   - What does the agent actually do autonomously? (auto-tweet, auto-trade, content generation?)
   - What is the "C2E" (Create to Earn) model — how does it work in practice?
   - Is there any skill or capability marketplace, or just agent token trading?

2. FEE STRUCTURE (exact numbers)
   - Bonding curve trading fee: what % total, and how is it split (creator vs platform vs DAO)?
   - Launch/creation fee: what does it cost to launch an agent?
   - What are the "block rewards" mentioned — where do they come from, how distributed?
   - Graduation threshold: at what market cap does agent graduate to PancakeSwap/Raydium?

3. CREATOR ECONOMICS
   - How much does an agent creator earn per $1,000 of trading volume?
   - After graduation to DEX, does the creator still earn? How?
   - What incentivizes a creator to keep the agent active after launch?

4. TRACTION (with sources — on-chain data preferred)
   - How many agents have been launched? How many are active?
   - What is total trading volume? Daily volume?
   - Token price and market cap if applicable
   - Any on-chain data from BSCScan or DeFi Llama?

5. COMPETITIVE POSITION vs ClawFriend
   - Does Cooker.club have a skill marketplace? Can humans buy/sell AI capabilities?
   - Does it have holder-gated content (access requires holding token)?
   - What is the on-chain identity mechanism for agents?
   - What is missing from Cooker.club that ClawFriend has?

Source priority: on-chain data, official docs, Binance Square posts, BSCScan.
```

---

## PROMPT 2B — Moltbook (COMPETITOR: Social Stream module)

```
Give me a complete analysis of Moltbook (moltbook.ai) — the AI-only social network that launched in January 2026 and reached 32,000 agents and 1.5M users rapidly, covered by CNBC and Ars Technica.

1. PRODUCT MECHANICS
   - What exactly happens on Moltbook? Who/what creates the agents?
   - Are agents fully autonomous or human-configured?
   - What do agents post about? What determines their content?
   - Can agents interact with each other autonomously?
   - Is there any Web3/on-chain component, or is it purely Web2?

2. BUSINESS MODEL
   - How does Moltbook make money? Is there a subscription, ads, marketplace?
   - What is "freemium skills/plugins" — what can be paid for?
   - Do agent creators earn anything? If so, how much and from what?
   - What does a user pay to create or use an agent?

3. GROWTH
   - Timeline: when did it launch, how fast did it reach 32K agents / 1.5M users?
   - What drove the viral growth?
   - What is the retention like — are users coming back?
   - What is the current status (Feb 2026)?

4. KEY DIFFERENCE vs ClawFriend Social Stream
   - Does Moltbook have token/shares trading? Any economic layer?
   - Can agents earn money independently?
   - Is there a skill marketplace?
   - What does Moltbook do better than ClawFriend's social layer?
   - What does ClawFriend have that Moltbook doesn't?

Source: CNBC article (Feb 2, 2026), Ars Technica, NBCNews coverage, Washington Times.
```

---

## PROMPT 2C — GPT Store (BENCHMARK: Skill Market economics)

```
Give me a detailed analysis of OpenAI's GPT Store (chatgpt.com/gpts) as a skill/agent marketplace — specifically the creator economics and business model.

I need this as a benchmark to compare against a Web3 skill marketplace I'm building.

1. CREATOR ECONOMICS (actual numbers)
   - What is the revenue share: 70% creator / 30% OpenAI — is this confirmed or estimated?
   - What thresholds must a creator hit before earning? (minimum usage, minimum payout)
   - How does OpenAI calculate "usage" for revenue share — per message? per session? per user?
   - What do top GPT creators actually earn per month? Any public cases?
   - What does an average GPT creator earn? Is most revenue concentrated in top 1%?

2. MARKETPLACE MECHANICS
   - How many GPTs are in the store? How many creators?
   - What is the total GMV or revenue flowing through the store?
   - How does discovery work — how does a new GPT get found?
   - What determines a GPT's ranking/visibility?

3. CREATOR PAIN POINTS (what's broken)
   - Why do many creators complain about GPT Store earnings?
   - What are the biggest gaps/frustrations for GPT creators monetizing their work?
   - What would make a creator choose a different platform over GPT Store?

4. IMPLICATIONS FOR WEB3 SKILL MARKETPLACE
   - What does GPT Store prove about demand for AI skill marketplaces?
   - Where does the 70/30 split fall short for creators?
   - How does holder-gated access (requiring token ownership) compare to OpenAI's subscription model for creator earnings?

Source: OpenAI official announcements, creator community posts, public revenue reports.
```

---

## PROMPT 2D — Mint Club (BENCHMARK: Bonding curve infrastructure)

```
Give me a business model analysis of Mint Club (mint.club) — a bonding curve token/NFT creation platform on Ethereum, Polygon, Base, and other chains.

1. WHAT MINT CLUB ACTUALLY IS
   - What can be created on Mint Club — ERC20 tokens, NFTs, or both?
   - Who are the typical users — developers, creators, businesses?
   - What use cases are people actually using it for? (content access, tool access, community tokens)

2. FEE STRUCTURE
   - What does it cost to create a token/NFT on Mint Club?
   - What royalty % does the creator set? What is the typical range?
   - Does Mint Club take a platform cut on top of creator royalties? What %?
   - How are royalties paid — on every trade, or only on mint/burn?

3. TRACTION
   - How many tokens/NFTs have been created?
   - What is total trading volume?
   - Is there active usage or mostly abandoned tokens?

4. KEY QUESTION: Why isn't Mint Club dominant if it's flexible?
   - What's missing that prevents Mint Club from being the go-to bonding curve platform?
   - Does it have any AI functionality or skill marketplace?
   - Does it have holder-gated content features?

5. RELEVANCE TO CLAWFRIEND
   - Could Mint Club expand to become a ClawFriend competitor if it added AI agents?
   - What does Mint Club's customizable royalty model teach about bonding curve design?
```

---

## PROMPT 2E — BNB Chain AI Agent Ecosystem (CONTEXT)

```
Give me a detailed overview of BNB Chain's official AI agent ecosystem as of February 2026.

I need to understand the landscape that ClawFriend is launching into on BSC:

1. BNB CHAIN AI AGENT SOLUTION
   - What is the official BNB Chain AI Agent Solution (bnbchain.org/en/solutions/ai-agent)?
   - What does BAP-578 enable? What are "tradable NFT agents"?
   - What is ERC-8004? What does verifiable identity for AI agents mean on-chain?
   - Which of the 58 projects in the ecosystem are most active/funded?

2. DIN (Decentralized AI Network)
   - What exactly is DIN? Who built it and what does it do?
   - What is "RAG, LLMOps, AIGC monetization" in practice?
   - How does DIN relate to other BSC AI projects?
   - What did they raise $8M for?

3. THE 58 PROJECTS
   - Which projects in BNB Chain's AI agent ecosystem have the most traction?
   - Are any of them building what ClawFriend is building (skill marketplace + bonding curve)?
   - Who are the serious players vs vaporware?

4. OFFICIAL BNB CHAIN STANCE
   - Is BNB Chain actively supporting AI agent projects with grants or technical support?
   - What is BNB Chain's 2026 roadmap for AI agents?
   - Does BNB Chain plan to build its own agent registry or marketplace that could compete with ClawFriend?

Source: bnbchain.org, chainwire.org, blockeden.xyz BAP-578 article, BNB Chain tech roadmap 2026.
```

---

## THỨ TỰ CHẠY

| Priority | Prompt | Vì sao |
|----------|--------|--------|
| 🔴 NGAY | 2A — Cooker.club | Đối thủ trực tiếp nhất — cùng BSC, cùng bonding curve AI agent |
| 🔴 NGAY | 2B — Moltbook | Competitor Social Stream, đang grow viral |
| 🟠 SAU | 2C — GPT Store | Benchmark số liệu Skill Market |
| 🟡 SAU | 2E — BNB Ecosystem | Context BSC landscape |
| 🟢 NẾU CÒN GIỜ | 2D — Mint Club | Benchmark bonding curve infrastructure |

**Sau khi có response 2A + 2B → báo lại, tôi tổng hợp competitive-landscape.md.**
