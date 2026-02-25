# AI Showcase — Research Workflow

> Ghi lại toàn bộ workflow AI đã dùng để research competitive landscape.
> Mục đích: show BGK cách dùng AI không phải để "hỏi và copy" mà để **tư duy có hệ thống**.

---

## Công cụ đã dùng

| Tool | Vai trò |
|------|---------|
| **Claude (Sonnet 4.6)** | Tư duy chiến lược, thiết kế research framework, tổng hợp raw data thành insight |
| **Perplexity** | Web search có nguồn — lấy data thực từ internet, không hallucinate |

**Tại sao dùng 2 tool thay vì 1?**
Claude giỏi tư duy và tổng hợp nhưng knowledge cutoff August 2025. Perplexity search web real-time nhưng không giỏi strategic synthesis. Kết hợp hai tool theo pipeline: Claude thiết kế → Perplexity execute → Claude tổng hợp.

---

## Pipeline tổng thể

```
[Claude]                    [Perplexity]               [Claude]
Thiết kế                    Execute                    Synthesize
research          →         search theo                →  thành
framework                   prompt đã viết                deliverable
(CLAUDE.md +                (Phase 1 + 2)
prompt set)
```

---

## Flow 1 — Setup: Dùng Claude để thiết lập groundrules

**Vấn đề gốc:** Version đầu của competitive-landscape.md dùng danh sách đối thủ từ guidebook (ví dụ minh họa) và phân tích theo features thay vì business model. Ban Giám khảo phản hồi: *"nhìn vào bản chất business model để tìm đối thủ."*

**Prompt gửi cho Claude:**
```
tất cả các sample trong guildbook chỉ có tính chất ví dụ, không đúng
Ban giám khảo đã phản hồi: nhìn vào bản chất business modal để tìm đối thủ
Bây giờ làm lại từ đầu từ competitive, tạo prompt để research trên perflexity,
tôi sẽ đẩy response cho bro vào @competitors
```

**Claude làm gì:**
1. Đọc lại toàn bộ CLAWFRIEND_SPEC.md và GUIDEBOOK để hiểu product và tiêu chí
2. Xác định ClawFriend có 3 module có thể bị cạnh tranh (Shares Trading / Skill Market / Social Stream)
3. Tạo CLAUDE.md — file project rules để giữ mọi output bám sát tiêu chí BGK
4. Viết bộ 11 prompt Perplexity ban đầu

**Prompt tinh chỉnh tiếp theo:**
```
tìm đối thủ dựa trên sản phẩm của mình chứ, tìm cái ngta ko tìm để làm gì
```

→ Claude điều chỉnh: không tìm "đối thủ lạ cho khác biệt" mà tìm đối thủ **đúng** theo từng module sản phẩm thực.

```
ghi nhớ không dùng các gợi ý trong guild book, đó là ví dụ thôi
```

→ Claude cập nhật CLAUDE.md với rule rõ ràng: tên trong guidebook là ví dụ minh họa, không phải danh sách đối thủ.

**Output của Flow 1:**
- [CLAUDE.md](../CLAUDE.md) — project rules, checklist, chiến lược điểm cao
- [data/competitors/_PROMPTS.md](../data/competitors/_PROMPTS.md) — bộ prompt Perplexity Phase 1
- [data/competitors/_PROMPTS_PHASE2.md](../data/competitors/_PROMPTS_PHASE2.md) — bộ prompt Phase 2

---

## Flow 2 — Phase 1: Discovery bằng Perplexity (tìm đối thủ theo module)

**Tại sao không hỏi "top competitors của ClawFriend là ai?"**
Câu hỏi đó sẽ trả về danh sách generic. Thay vào đó, Claude thiết kế 4 prompt riêng biệt — mỗi prompt mô tả **một module cụ thể của ClawFriend** và hỏi ai đang làm điều tương tự.

**4 prompt Perplexity (Phase 1):**

**1A — Skill Market:**
```
I'm building a marketplace where AI agent creators can publish and sell reusable
AI skills. Buyers browse, download, integrate. Two tiers: free/public and premium
requiring holding creator's token.

Find every platform — Web3 or Web2 — where creators can publish AI capabilities
and earn revenue. For each: exact fee structure, creator earnings model, take rate,
number of listings, monthly revenue if available...
```

**1B — Bonding Curve:**
```
I'm building a platform where each AI agent has tradeable shares via bonding curve.
5% fee to platform + 5% perpetual fee to creator on every trade. No external
liquidity pool needed.

Find every Web3 platform using bonding curves to tokenize non-memecoin assets where:
- Underlying asset has utility/productive output
- Creators earn ongoing revenue from trading activity...
```

**1C — AI Agent Social:**
```
I'm building a platform where AI agents have autonomous social presence — tweet,
reply, follow, build reputation. Each agent has on-chain identity with verifiable
history.

Find every platform where AI agents: have their own social media presence,
have on-chain identity, can earn money independently, can interact autonomously...
```

**1D — BSC Ecosystem scan:**
```
What AI agent platforms, AI marketplaces, or bonding curve launchpads currently
exist on BNB Smart Chain?
```

**Kết quả Phase 1 — Những đối thủ không ai ngờ:**

| Phát hiện | Từ prompt | Ý nghĩa |
|-----------|-----------|---------|
| **Cooker.club** | 1B + 1C + 1D | Trên BSC, bonding curve AI agent token, auto-tweet — đối thủ trực tiếp nhất chưa ai biết |
| **Moltbook** | 1C | Ra mắt Jan 2026, **1M+ agents**, powered bởi OpenClaw (cùng framework ClawFriend) |
| **GPT Store creator pain points** | 1A | 99% creators earn $0 — validates ClawFriend's creator model |
| **BNB Chain 58-project ecosystem** | 1D | BNB Chain đang build infrastructure (ERC-8004, BAP-578) = tailwind |
| **BSC gap xác nhận** | 1D | Không có skill marketplace nào trên BSC |

---

## Flow 3 — Phase 2: Deep dive từng đối thủ

Sau Phase 1, Claude đọc toàn bộ 4 response → identify top 5 cần deep-dive → viết 5 prompt riêng cho từng đối thủ.

**Prompt Claude nhận để quyết định prioritize:**
*(không có prompt rõ ràng — Claude tự phân tích 4 file response và tự generate Phase 2 prompts)*

**Cách Claude thiết kế Phase 2 prompts:**
Mỗi prompt Phase 2 tập trung vào **business model mechanics**, không phải features:

```
Give me a complete business model analysis of [PLATFORM].

I need to understand how money actually flows:
1. REVENUE MODEL — all fees, exact percentages, who pays what
2. CREATOR ECONOMICS — how much does creator earn per $1,000 activity?
3. BUYER ECONOMICS — what does buyer pay, what's the alternative?
4. GROWTH MECHANICS — what brings new creators? new buyers? network effects?
5. TRACTION — real numbers with sources
6. SUSTAINABILITY — profitable or subsidized? what would kill this model?
```

**Findings quan trọng từ Phase 2:**

**Cooker.club — đối thủ BSC stalled:**
- Creator nhận **0% trading fee** → toàn bộ về DAO
- Graduation threshold ~$14K buy volume = cao, chưa đạt được với <100 agents
- Website **unreachable Feb 2026** — xác nhận bởi Claude verify tool
- Bài học: Bonding curve mà creator không earn trading fee = không có lý do build

**Moltbook — scale mà không có economics:**
- 1M+ agents trong <2 tuần (nguồn: CNBC, Guardian, Forbes, NPR, NYT)
- Agents powered by **OpenClaw** — cùng framework với ClawFriend
- **Zero economic layer** — không token, không trading, creator earn $0
- Plateau bắt đầu từ Feb 2026

**GPT Store — benchmark creator economics thực tế:**
- Revenue share KHÔNG phải 70/30 (đó là số đồn) — thực ra là opaque engagement metric
- **99% creators earn $0** — chỉ top 1% kiếm được tiền
- Quarterly payout, min $100, cần ChatGPT Pro $200/tháng để qualify
- Chứng minh: centralized platforms không thể giải quyết creator economics

**BNB Chain ecosystem — tailwind không phải headwind:**
- ERC-8004 + BAP-578 = on-chain identity standards ClawFriend có thể plug vào
- BNB Chain **không build marketplace cạnh tranh** — chỉ build agent registry infrastructure
- "Good Vibes Only: OpenClaw Edition" hackathon — 200+ builders dùng đúng framework của ClawFriend

---

## Flow 4 — Synthesis: Claude tổng hợp thành competitive-landscape.md

**Prompt:**
```
đã có đẩy đủ response phase 2 @prompt_res_phase2, bro có thể research nếu
gì chưa chắc chắn
```

**Claude làm gì:**
1. Đọc đồng thời 5 file Phase 2 response
2. Verify Cooker.club status bằng tool riêng (xác nhận website down)
3. Cross-reference data points không chắc chắn
4. Viết lại competitive-landscape.md với structure mới:
   - Phân tích theo module (không phải theo alphabet)
   - Mỗi đối thủ có: cơ chế, fee structure, creator economics, traction (có nguồn), điểm yếu cốt lõi, bài học cụ thể
   - Gap analysis dựa trên số liệu thực
   - Kết luận thành thật về cả điểm thắng lẫn điểm thua

---

## Nguyên tắc prompting hiệu quả — Rút ra từ quá trình này

### 1. Prompt theo vấn đề cụ thể, không phải theo tên

❌ Không hiệu quả:
```
Find competitors of ClawFriend
```

✅ Hiệu quả:
```
I'm building a platform where creators earn 5% perpetual fee on every share trade.
Find every Web3 platform where creators earn ongoing revenue from trading activity
of assets they created.
```

**Lý do:** Câu hỏi đầu trả về danh sách generic. Câu hỏi sau buộc AI tìm theo business model → tìm ra Cooker.club và Mint Club mà câu hỏi đầu không tìm được.

### 2. Dùng Claude thiết kế prompt cho Perplexity, không dùng Claude search trực tiếp

Claude giỏi tư duy framework, biết cần hỏi gì và hỏi như thế nào.
Perplexity giỏi search web real-time với nguồn cụ thể.

Pipeline: **Claude viết prompt → Perplexity execute → Claude tổng hợp**

### 3. Phase research: Discovery trước, Deep dive sau

Phase 1: Hỏi rộng để biết landscape → tìm được Cooker.club, Moltbook
Phase 2: Hỏi sâu từng đối thủ tìm được → hiểu business model thực sự

Nếu deep dive ngay từ đầu vào danh sách có sẵn = bỏ sót Cooker.club (đối thủ BSC quan trọng nhất).

### 4. Verify số liệu nhạy cảm

| Số liệu | Verify bằng cách nào |
|---------|---------------------|
| Moltbook 1M+ agents | Cross-check: CNBC + Guardian + Forbes + NPR (4 nguồn độc lập) |
| GPT Store 70/30 split | Phát hiện là sai — thực ra opaque; nguồn: OpenAI official + Reddit creator community |
| Cooker.club active/dead | Claude verify tool — website ECONNREFUSED = xác nhận stalled |
| BSC user demographics | Binance Square post có nguồn BSCScan |

### 5. CLAUDE.md — Dùng AI như một project collaborator có memory

Thay vì prompt lại context mỗi lần, tạo CLAUDE.md một lần với:
- Product context
- Rules bắt buộc
- Tiêu chí chấm điểm
- Chiến lược điểm cao

→ Claude tự đọc file này đầu mỗi conversation, không cần nhắc lại.

---

## Files generated trong quá trình này

```
data/competitors/
├── _PROMPTS.md                          ← Phase 1 prompts (Claude viết)
├── _PROMPTS_PHASE2.md                   ← Phase 2 prompts (Claude viết)
├── [Phase 1 responses]                  ← 4 files từ Perplexity
└── prompt_res_phase2/
    ├── Cooker.club analysis.md          ← Perplexity response
    ├── Moltbook analysis.md             ← Perplexity response
    ├── GPT Store analysis.md            ← Perplexity response
    ├── Mint Club analysis.md            ← Perplexity response
    └── BNB Chain ecosystem.md           ← Perplexity response

competitive-landscape.md                ← Final output (Claude synthesize)
CLAUDE.md                               ← Project rules (Claude maintain)
```
