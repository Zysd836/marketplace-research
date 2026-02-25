# Perplexity Prompts — Skill Research

> **Mục tiêu:** Tìm 5–10 skills có demand thực cho BSC/crypto users, có bằng chứng bằng số.
> **Không brainstorm ý tưởng chung chung.** Mỗi skill phải có: existing paid tool validate demand + search volume/community signal.
>
> **Cách dùng:** Chạy từng prompt → paste response vào `data/skills/[tên].md`

---

## PROMPT S1 — BSC DeFi user pain points (rộng)

```
I'm building a skill marketplace for AI agents focused on BSC (BNB Smart Chain)
users. BSC users are 80%+ retail traders, Asia-dominant, primarily DeFi-focused
(PancakeSwap, Venus, Alpaca). Many are active on Telegram, Twitter/X.

What are the top 10 most painful, time-consuming, or expensive problems that
BSC/crypto retail traders face daily that currently require:
(a) manual effort (checking websites, copy-pasting data), OR
(b) expensive paid subscriptions ($20+/month), OR
(c) technical skills most retail users don't have

For each pain point:
1. Describe exactly what the user currently has to do manually
2. How much time does it cost per day/week?
3. What existing paid tool solves this? What does it cost?
4. How many users are paying for solutions? (any public data)
5. What subreddits, Telegram groups, or Twitter accounts are centered around this pain?

Focus on: on-chain analytics, wallet tracking, DeFi alerts, token research,
rug pull detection, yield farming, airdrop tracking, smart money signals.

Give me real pain points with evidence, not generic crypto problems.
```

---

## PROMPT S2 — On-chain intelligence tools (whale tracking, smart money)

```
Research the market for on-chain intelligence and whale tracking tools in crypto.

I want to build an AI agent skill that monitors on-chain activity and sends
automated alerts when significant wallet movements happen on BSC.

Tell me:
1. What tools currently exist for whale/smart money tracking?
   List each with: URL, price, features, number of users/subscribers
   Include: Nansen, Arkham, Lookonchain, Whale Alert, DeBank, Zerion, others

2. What are users paying for these tools? (exact pricing tiers)

3. What is the search volume for keywords like:
   "whale wallet tracker", "smart money crypto", "on-chain analytics",
   "whale alert crypto" — monthly search volume if available

4. Evidence of demand:
   - Twitter/X accounts tracking whales: follower counts
   - Subreddits discussing whale movements: subscriber count, post frequency
   - Telegram groups for whale alerts: member counts

5. What do existing tools NOT do well?
   What complaints do users have about Nansen, Arkham, Whale Alert?
   (Check Reddit, Twitter, Product Hunt reviews)

6. What would a BSC-specific whale tracker need to do that existing tools don't?
```

---

## PROMPT S3 — Rug pull & scam detection

```
Research the market for crypto rug pull detection and token security tools,
specifically for BSC (BNB Smart Chain) where rug pulls are extremely common.

1. What tools exist for detecting potential rug pulls and scam tokens?
   List each with: URL, price, features, user base
   Include: Token Sniffer, RugDoc, De.Fi (formerly ApeO'Clock), GoPlus Security,
   Honeypot.is, BSCheck, DexTools, others

2. Pricing: what do retail users pay for security tools?

3. Scale of the problem:
   - How many rug pulls happen on BSC monthly/annually? (any data)
   - How much money is lost to rug pulls on BSC? (any reported figures)
   - How many tokens are flagged as honeypots/scams on BSC?

4. Community evidence of demand:
   - r/CryptoMoonShots, r/CryptoCurrency — how often do people post about rug pulls?
   - BSC-specific communities discussing scam detection
   - Twitter/X: accounts dedicated to exposing BSC scams (follower counts)

5. What's broken about current solutions?
   - False positives/negatives in existing scanners
   - Limitations of current audit tools for retail users
   - What do users wish existed that doesn't?
```

---

## PROMPT S4 — DeFi portfolio automation & yield optimization

```
Research the market for DeFi portfolio management and yield optimization tools,
specifically for BSC users on PancakeSwap, Venus, Alpaca Finance.

1. What tools help users automate DeFi operations?
   (auto-compound, rebalance, harvest rewards, move funds between protocols)
   List each with URL, price, features, TVL managed or user count

2. What are the most common DeFi tasks users do manually today?
   - How often? Daily? Weekly?
   - What is the cost in time or missed yield?

3. Pricing benchmarks:
   - What do yield aggregators charge? (Yearn, Beefy, AutoFarm fee %)
   - What do portfolio trackers charge? (DeBank, Zapper, Zerion)
   - What do users pay for DeFi automation tools?

4. Search & community evidence:
   - Search volume for "auto compound BSC", "yield farming automation",
     "DeFi portfolio manager"
   - Reddit/Telegram: how many users discuss manual yield farming frustrations?
   - Twitter: accounts teaching DeFi automation (follower count)

5. What specific BSC DeFi operations are most painful to do manually?
   Which ones have highest ROI if automated?
```

---

## PROMPT S5 — Crypto sentiment & social signal analysis

```
Research the market for crypto social sentiment analysis and trading signal tools.

I want to build an AI agent skill that monitors Twitter/X, Reddit, Telegram
for sentiment signals about specific tokens/projects and generates alerts
when significant sentiment shifts occur.

1. Existing tools:
   List tools that do crypto sentiment analysis with: URL, price, user base
   Include: LunarCrush, Santiment, The TIE, Messari, Kaito AI, others

2. Pricing:
   - What do retail users pay for sentiment data? (exact tiers)
   - What do professional traders pay?

3. Demand evidence:
   - Search volume: "crypto sentiment analysis", "social media crypto signals",
     "twitter crypto alpha" — monthly searches
   - How many followers do top crypto signal Telegram channels have?
   - How many subscribers do crypto signal subreddits have?

4. What's the outcome when users act on sentiment signals?
   Any public data on alpha from social signals?

5. BSC/BNB specific angle:
   - Is there sentiment analysis specific to BSC tokens?
   - What Telegram groups exist specifically for BSC token alpha?
   - How many members in top BSC trading signal groups?
```

---

## PROMPT S6 — Airdrop & token opportunity tracking

```
Research the market for crypto airdrop tracking and early opportunity discovery.

1. What tools help users track and claim airdrops?
   List with URL, price, user base:
   Include: Earni.fi, AirdropAlert, DeFiLlama airdrops page, Rabby wallet,
   CoinMarketCap airdrops, others

2. How big is the airdrop economy?
   - Total value distributed via airdrops in 2024-2025 (any estimates)
   - Average value per qualifying airdrop for active DeFi users
   - How many users participate in airdrop farming?

3. Pain points:
   - What manual work is involved in tracking and claiming airdrops?
   - How much time do "airdrop farmers" spend weekly?
   - What do users miss because they didn't know about an airdrop in time?

4. Community evidence:
   - Search volume: "crypto airdrop", "BSC airdrop", "free crypto airdrop"
   - r/airdrop subscriber count and post frequency
   - Twitter accounts specifically for airdrop alerts (follower counts)
   - Telegram airdrop groups: member counts

5. What would make airdrop tracking dramatically better?
   What do users complain about with current solutions?
```

---

## PROMPT S7 — Token research & fundamental analysis (BSC-specific)

```
Research what retail crypto traders on BSC need when evaluating new tokens
before buying — what information do they need and how do they currently get it?

1. What is a typical retail BSC trader's research process when finding a new token?
   Walk me through step by step what they manually check:
   - Contract verification (where?)
   - Liquidity lock status (how?)
   - Team/developer wallet (how?)
   - Token distribution/holder concentration (where?)
   - Trading volume authenticity (wash trading?)
   - Social media/community health (how?)

2. Tools they currently use:
   For each tool: URL, price (free vs paid), what it shows
   Include: DexScreener, DEXTools, Bubble Maps, Token Sniffer, BSCScan,
   CoinGecko, CoinMarketCap, Team Finance, PinkSale

3. Time cost:
   How long does thorough token research take manually?
   How many tokens does an active retail trader evaluate per week?

4. Demand evidence:
   - YouTube channels teaching "how to research crypto tokens" (subscriber counts)
   - r/CryptoMoonShots posts asking for token reviews (frequency)
   - "BSC token analysis", "how to find safe tokens BSC" search volume

5. What would an AI agent that does all token research automatically be worth?
   What existing paid tools price this research at?
```

---

## THỨ TỰ ƯU TIÊN

| Priority | Prompt | Lý do |
|----------|--------|-------|
| 🔴 P0 | S1 — BSC pain points | Discovery rộng trước, tìm pain point thực |
| 🔴 P0 | S2 — Whale tracking | Demand lớn nhất, existing paid tools rõ nhất |
| 🔴 P0 | S3 — Rug detection | BSC-specific, pain acute, community mạnh |
| 🟠 P1 | S7 — Token research | Directly related to BSC retail user behavior |
| 🟠 P1 | S5 — Sentiment | Broad market, existing paid tools validate |
| 🟡 P2 | S4 — DeFi automation | DeFi-native, cao hơn về kỹ thuật |
| 🟡 P2 | S6 — Airdrop | Demand tốt nhưng seasonality cao |

**Sau khi có response → paste vào `data/skills/[tên-prompt].md` → báo lại.**
