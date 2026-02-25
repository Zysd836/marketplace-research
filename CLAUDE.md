# CLAUDE.md — Ground Rules cho ClawFriend Research Project

> Source of truth: `requirement/GUIDEBOOK - FOR TEAM SELLING CLAWFRIEND.docx.md`
> Product spec: `requirement/CLAWFRIEND_SPEC.md`

---

## NORTH STAR QUESTION

> **"Làm thế nào để 1,000 user đầu tiên biết đến, sign up, và dùng ClawFriend trong tháng đầu với $10K budget?"**

Mọi phân tích đối thủ, skill research, và distribution plan đều phải phục vụ câu hỏi này. Đây là tư duy của **trưởng phòng kinh doanh đang lập GTM plan** — không phải tư duy của investor đi tìm market gap.

---

## CONTEXT QUAN TRỌNG

**ClawFriend là gì:** Web3 AI Agent Platform trên BSC — gồm 4 module:
1. **Shares Trading** — bonding curve, 5% protocol fee + 5% creator fee mỗi trade
2. **Skill Market** — browse/publish/buy AI skills, public (free) hoặc private (holder-gated: phải hold shares mới access)
3. **Social Stream** — agents tweet/reply/follow autonomous
4. **Infrastructure Management** — monitor agent performance

**⚠️ Các tên trong guidebook là GỢI Ý TÌM KIẾM, không phải kết quả research:**
friend.tech · Virtuals Protocol · ai16z/ELIZA · ClawHub · SingularityNET

Đây là điểm xuất phát để mở rộng search, không phải danh sách đối thủ hoàn chỉnh. Phải research độc lập:
- Tìm từ nhiều nguồn: Product Hunt, GitHub trending, DeFi Llama, Dune Analytics, Crypto Twitter, Reddit
- Nếu sau khi research thì các tên trên xuất hiện lại = OK, nhưng phải có data thực từ nguồn độc lập
- Mỗi tên trong guidebook là một **hướng tìm kiếm**, không phải câu trả lời

---

## TARGET USER PERSONAS

**Phải biết user là ai trước khi research đối thủ** — nếu không, "đối thủ" chỉ là danh sách platform tồn tại, không phải những kẻ đang cạnh tranh giành user của mình.

| Persona | Mô tả cụ thể | Đang dùng gì / trả bao nhiêu | Pain point thực | Switch trigger |
|---|---|---|---|---|
| **AI Agent Builder** | Dev build agent trên OpenClaw/ElizaOS, có 1–3 agents deployed, muốn monetize | GitHub free, HuggingFace free, không có cơ chế kiếm tiền | Build xong không biết cách earn từ agent | "Publish skill 1 lần, earn perpetually từ mọi user hold shares" |
| **DeFi Power User** | Trader BSC/ETH, portfolio $5K–$50K, trade 3–5x/tuần | Nansen $150/mo, Dexscreener free, Arkham limited free | $100–200/tháng cho analytics, data vẫn delayed | "Hold shares thay vì pay subscription — dùng nhiều hơn không tốn thêm" |
| **Crypto-native Creator** | KOL/content creator có 1K–50K followers, muốn tạo AI persona | Twitter/X, Telegram, không có economic layer | AI persona không có cơ chế earn money autonomously | "Agent của tôi tweet, build audience, và earn — tôi không cần online 24/7" |

---

## 3 DELIVERABLE & YÊU CẦU TỐI THIỂU

### Deliverable 1 — Competitive Landscape (25đ)

**Mục tiêu:** Tìm và phân tích TẤT CẢ Web3 skill marketplace / plugin store / agent marketplace — **từ góc nhìn người bán hàng: user của đối thủ đang ở đâu, đang không hài lòng điều gì, và làm sao mình intercept họ.**

**Checklist cứng — thiếu cái nào = trừ điểm:**
- [ ] Ít nhất **5–10 đối thủ** có link thật, không phải giả định
- [ ] Mỗi đối thủ BẮT BUỘC có: Tên · Link · Mô tả ngắn · ≥2 số liệu thực (user/download/GMV/GitHub stars/on-chain tx) · Cách monetize · Điểm mạnh · Điểm yếu
- [ ] Phân tích tổng thể: thị trường đang ở giai đoạn nào (nascent/growing/mature)? Ai dẫn đầu?
- [ ] Kết luận có số liệu: ClawFriend khác ở đâu, thắng ở đâu, thua ở đâu

**Barem chấm điểm:**
- Chất lượng phân tích đối thủ: 10đ — mỗi đối thủ có nhận xét riêng từ góc nhìn user, không copy mô tả website
- Số liệu & Data thực: 6đ — có nguồn (website, GitHub, on-chain explorer), KHÔNG được ghi "AI cho em"
- So sánh & Insight chiến lược: 5đ — so sánh chain focus, pricing model, gap thị trường
- Kết luận & Định vị: 4đ — segment nào đối thủ bỏ ngỏ, lợi thế cạnh tranh cụ thể

### Deliverable 2 — Skill Research (25đ)

**Mục tiêu:** 5–10 skill nên có trong Skill Market, chứng minh demand thực.

**Checklist cứng — mỗi skill phải có đủ:**
- [ ] Tên skill
- [ ] Target user cụ thể (không được viết "người chơi crypto" chung chung)
- [ ] Problem (họ đang đau gì, mất bao nhiêu thời gian/tiền)
- [ ] Alternative hiện tại (họ đang dùng gì, giá bao nhiêu)
- [ ] Skill giải quyết thế nào
- [ ] Visibility & Monetization: Public hay Private/holder-gated — phải giải thích lý do
- [ ] Bằng chứng demand: search volume / forum posts / Twitter mentions / existing paid tools — PHẢI có nguồn

**Barem chấm điểm (mỗi skill):**
- Product-Market Fit: 7đ — bằng chứng demand thực, drive share purchases
- Sáng tạo & Độc đáo: 5đ — không phải ý tưởng hiển nhiên
- Visibility & Monetization: 5đ — logic public/private có cơ sở, so sánh đối thủ
- Chất lượng Nghiên cứu: 5đ — số liệu có nguồn, đã verify
- Tính khả thi Kỹ thuật: 3đ — build được với tech hiện tại

### Deliverable 3 — Distribution Plan (40đ)

**Mục tiêu:** Kế hoạch cụ thể để thu hút user — intern đọc xong phải biết làm gì ngày mai.

**Budget cứng: $10,000 cho tháng đầu tiên.**

**Checklist cứng:**
- [ ] Ít nhất 3–5 kênh acquisition cụ thể
- [ ] Mỗi kênh có: Tại sao chọn · Action plan chi tiết · Timeline (tuần nào làm gì) · Estimated reach · Cost · Metric đo kết quả
- [ ] Ít nhất 1 kênh organic ($0) và 1 kênh paid
- [ ] Tổng paid channels ≤ $10,000
- [ ] Unit economics cho paid channel: CPC / conversion rate / CAC
- [ ] Bonus: Partnership/collab plan — tên đối tác cụ thể, lợi ích 2 bên

---

## NGUYÊN TẮC TRÌNH BÀY

**Viết như một trưởng phòng kinh doanh đang lập GTM plan** — không phải investor pitch, không phải assignment sinh viên.

Sự khác biệt cụ thể:

| Investor framing ❌ | Biz dev / GTM framing ✅ |
|---|---|
| "Market gap: chưa ai combine 3 module này" | "User Virtuals đang complain X — đây là trigger để họ switch" |
| "ClawFriend unique vì BSC + skill + bonding curve" | "Kênh nào reach được 1,000 user đầu tiên với CAC thấp nhất?" |
| "Thị trường nascent, first mover advantage" | "User đang dùng gì hôm nay? Làm sao mình nằm trong workflow của họ?" |
| Kết luận: "Có cơ hội lớn" | Kết luận: "Tuần sau làm gì, tháng sau expect bao nhiêu signup" |

- **Thẳng thắn, không tâng bốc.** Nếu ClawFriend thua ở điểm nào, nói thẳng. Objectivity = credibility
- Không dùng ngôn ngữ "hype": "revolutionary", "game-changer", "unprecedented"
- Kết luận phải actionable — đọc xong biết làm gì tiếp theo

**Tiêu chí guidebook là minimum bar — không phải ceiling.**

---

## CHIẾN LƯỢC ĐỂ ĐIỂM CAO (không chỉ đủ điểm)

### Competitive Landscape — từ 17/25 lên 23+/25

Điểm cao không đến từ số lượng đối thủ. Đến từ **độ sâu insight từ góc nhìn bán hàng**.

**Research theo đúng thứ tự — Global trước, BSC sau:**

1. **GLOBAL** — Ai đang win AI agent / skill marketplace market toàn cầu? (không giới hạn chain)
2. **BUSINESS MODEL** — Trong số đó, ai dùng bonding curve / perpetual creator fee / skill marketplace?
3. **USER BEHAVIOR** — User của các platform đó đang complain gì? Tại sao họ rời đi? (Reddit, Twitter, forum)
4. **BSC SPECIFIC** — Ai đang có traction trên BSC? Overlap với user profile của mình không? (hỏi sau cùng)

Lý do: ClawFriend cần học từ platform đang thắng globally trước khi lo đối thủ BSC (vốn còn rất nhỏ, dữ liệu hạn chế). Nếu chỉ search BSC → bỏ sót 95% insight quan trọng.

**Câu hỏi đúng khi phân tích đối thủ (tư duy biz dev):**
- ❌ "Đối thủ đang chiếm gap nào?" (investor)
- ✅ "User của đối thủ đang complain gì trên Reddit/Twitter? Tại sao họ rời đi?"
- ✅ "Channel nào đối thủ dùng để acquire user? Mình có thể intercept không?"
- ✅ "Nếu user của platform X switch sang ClawFriend, trigger cụ thể nào khiến họ làm vậy?"
- ✅ "Đối thủ đang charge bao nhiêu? User của họ có thể access ClawFriend với chi phí thấp hơn không?"

**Insight chiến lược thực sự**: không chỉ "điểm mạnh/điểm yếu" mà phải nói được: *tại sao business model của họ bền hay không bền, và ClawFriend học được gì / tránh được gì*

Điểm cộng: dùng on-chain data thực (DeFi Llama, Dune Analytics) để backup số liệu thay vì chỉ dùng press release của đối thủ.

### Skill Research — từ 17/25 lên 23+/25

- **PMF là vua (7đ)**: một skill có search volume 10K/tháng + existing paid tool $100/tháng = BGK tin ngay. Không cần fancy, cần evidence
- **Quantify cơ hội**: "Nansen charge $150/tháng cho whale tracking, có 50K+ user = $7.5M ARR. Skill này có thể capture % nhỏ của market đó thông qua holder-gated model"
- **Holder-gated logic phải có flywheel**: giải thích cụ thể chain reaction: skill tốt → user mua shares để access → price tăng → creator earn nhiều → creator publish skill tốt hơn → lặp lại. BGK chấm cao nhất khi thấy candidate hiểu flywheel này

### Distribution Plan — từ 25/40 lên 36+/40

Đây là phần chiếm 40% — đây là nơi thắng thua thực sự.

- **Unit economics bắt buộc**: mỗi paid channel phải có CPC + conversion rate + CAC + projected users. Không có con số = kế hoạch ý tưởng, không phải kế hoạch thật
- **Kênh phải fit với user personas**: Twitter Ads targeting BSC wallet holders, partnership với OpenClaw community, BSC Station listing — không phải kênh generic
- **Partnership cụ thể**: đừng viết "hợp tác với các dự án Web3". Viết: "Partnership với OpenClaw community (17K GitHub stars) — đề xuất cụ thể: tạo 1-click install từ OpenClaw marketplace vào ClawFriend, lợi ích: họ có skills phong phú hơn, mình có traffic từ developer community họ"
- **Intern test**: đọc lại plan và tự hỏi — intern có thể làm theo ngày mai không? Nếu không → chưa đủ chi tiết

---

## RULES BẮT BUỘC CHO MỌI OUTPUT

### Về số liệu
- **KHÔNG BAO GIỜ** ghi số liệu mà không có nguồn cụ thể (URL, tên website, tên báo cáo)
- Số liệu phải verify được — nếu không chắc, ghi "cần verify" thay vì bịa
- "AI cho em" hay "theo AI" KHÔNG phải nguồn — BGK sẽ trừ điểm

### Về tìm đối thủ
- Phải tìm theo **business model** (cơ chế kiếm tiền), không chỉ theo category sản phẩm
- ClawFriend có 3 revenue stream: bonding curve fee · creator perpetual fee · skill marketplace
- Đối thủ = ai dùng bất kỳ 1 trong 3 cơ chế trên, dù khác ngành, dù khác chain
- Không được viết "chưa ai làm" khi chưa search thật sự
- **Research global trước** — đừng filter BSC từ đầu

### Về phân tích
- Mỗi đối thủ phải có **nhận xét riêng từ góc nhìn user** — tại sao user chọn họ, tại sao user bỏ họ
- Không copy mô tả từ website của đối thủ
- Luôn hỏi: "User của đối thủ này có phải target user của ClawFriend không? Nếu có, làm sao mình win họ?"

### Về kết luận
- Kết luận phải có số liệu + action: "Đối thủ A có X user nhưng chỉ focus Y → ClawFriend intercept bằng cách Z"
- Phải thành thật về điểm yếu của ClawFriend — BGK đánh giá cao tư duy objective

---

## RESEARCH PROMPTS CHO PERPLEXITY/CHATGPT

> Dùng các prompt này để tìm thông tin, sau đó **PHẢI verify từng số liệu** từ nguồn gốc trước khi đưa vào deliverable.

### Prompt A — Tìm đối thủ từ góc user (Global, không filter chain)

```
I'm launching a platform for AI agent creators to monetize their agents through:
1. Bonding curve shares trading (creator earns 5% fee on every trade perpetually)
2. Skill marketplace (creators publish AI skills/prompts/workflows, buyers pay to access)
3. Holder-gated access (only token holders can access premium skills)

My target users are:
- AI agent builders who want to monetize (currently using OpenClaw/ElizaOS/HuggingFace with no monetization)
- DeFi power users spending $100-200/month on analytics tools (Nansen, Arkham)
- Crypto-native creators wanting AI personas with economic layer

Find every platform — Web2 or Web3, any chain — where these users currently are and what they're paying.
For each platform:
1. Platform name + URL
2. Which of my target user types uses this platform?
3. What do they pay? (subscription/token/per-use — exact amounts)
4. What are users complaining about? (Reddit posts, Twitter threads, reviews)
5. What would trigger a user to leave this platform for an alternative?
6. Real traction numbers (users, revenue, volume) with source URLs

Focus on platforms with real users, not just whitepapers.
```

### Prompt B — User pain points research (Reddit/Forum mining)

```
Search Reddit, Crypto Twitter, and forums for complaints and frustrations about these platforms:
- AI agent monetization platforms (Virtuals Protocol, ai16z, Bittensor)
- Crypto analytics subscriptions (Nansen, Arkham, Dune)
- Bonding curve / social token platforms (friend.tech, pump.fun)

For each platform, find:
1. Top complaints from users (direct quotes preferred)
2. What features users wish existed
3. Why users stopped using or considered leaving
4. What alternatives users are switching to and why

Sources: Reddit (r/ethereum, r/defi, r/cryptomarkets), Twitter/X, Discord servers, Product Hunt reviews.
This is for competitive analysis — I need to understand what pain points are unserved.
```

### Prompt C — Bonding curve / creator fee platforms (Business model match)

```
Find every platform that uses bonding curve mechanics where:
- The creator earns a percentage fee on EVERY trade (not just at launch)
- The underlying asset has utility beyond pure speculation
- There is some form of access control tied to token ownership

For each platform:
1. Name + URL + chain
2. Exact fee split: who gets what % per trade
3. Does creator earn perpetually or only at launch?
4. What is the utility of holding the token?
5. Active trading volume (source: on-chain data, DeFiLlama, Dune)
6. Creator earnings: what does a successful creator actually earn per month?
7. What's broken about this model — why do most creators fail?
```

### Prompt D — Skill/Plugin marketplace economics (Web2 + Web3)

```
Give me the real economics of existing skill/plugin/agent marketplaces:

1. GPT Store (OpenAI): How much do top creators earn per month? Average creators?
   What % of creators earn meaningful revenue? What are the top complaints?

2. Hugging Face Hub: Is there any paid model? How do creators monetize?

3. LangChain Hub / LangSmith: Commercial tier? Creator monetization?

4. Any Web3 skill/plugin marketplace with real traction?

For each: revenue split, minimum payout threshold, payment method, creator complaints.
Source: official docs, creator community posts, public revenue reports.
I need this to benchmark pricing for a new Web3 skill marketplace.
```

### Prompt E — BSC-specific acquisition channels

```
For a new Web3 platform launching on BNB Smart Chain targeting DeFi power users and AI agent builders:

1. What are the highest-ROI acquisition channels specifically for BSC ecosystem?
   - Which Telegram groups have 10K+ active BSC users?
   - Which Twitter/X accounts do BSC users follow most?
   - Which BSC-specific launchpads/directories drive the most traffic to new projects?

2. What did successful BSC projects (PancakeSwap, Binance Launchpad projects) do for user acquisition?

3. What is the typical CPC and conversion rate for Twitter Ads targeting crypto users on BSC?

4. Which Web3 KOLs have BSC-focused audiences?

Source: BSC ecosystem reports, project post-mortems, marketing case studies.
```

---

## OUTPUT FORMAT

Mọi deliverable push lên GitHub dưới dạng `.md`. Cấu trúc repo:
```
marketplace-research/
├── README.md
├── competitive-landscape.md     ← Deliverable 1
├── skill-research.md            ← Deliverable 2
├── distribution-plan.md         ← Deliverable 3
├── ai-showcase/
└── data/
    ├── competitors/             ← raw research từ Perplexity/web
    ├── skills/
    └── market/
```

---

## CÂU HỎI BGK SẼ HỎI — chuẩn bị trước

| Câu hỏi | Phải trả lời được |
|---------|-------------------|
| "Đối thủ X có 50K user, tại sao mình thắng?" | User của đối thủ X complain gì? Mình giải quyết được điều đó không? |
| "Skill này có ai thực sự cần không?" | Bằng chứng: search volume, existing paid tools, forum posts |
| "$10K có đủ lấy 1,000 user không?" | Unit economics: CPC · conversion rate · CAC · projected signups |
| "Tại sao user không dùng ChatGPT thay vì skill trên platform?" | Giá trị khác biệt: on-chain data real-time, wallet integration, holder-gated access |
| "User đầu tiên của mình ở đâu? Làm sao tiếp cận họ ngày mai?" | Kênh cụ thể, action cụ thể, không phải "chạy social media" |
