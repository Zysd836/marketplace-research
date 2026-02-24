# Nghiên cứu Skill — Skill Market Research

> **Mục tiêu:** Xác định 5–10 skill mà Skill Market của ClawFriend **nên có ngay** trong tháng đầu.
> Mỗi skill phải có demand thật (data), giải quyết pain point thật, và có chiến lược monetization rõ ràng qua cơ chế holder-gated.

---

## Tiêu chí đánh giá một skill tốt

Trước khi đề xuất bất kỳ skill nào, phải trả lời được 3 câu hỏi:

1. **Ai đang đau?** (target user cụ thể, không phải "người chơi crypto")
2. **Họ đang dùng gì và bao nhiêu tiền?** (alternative + pricing hiện tại)
3. **Tại sao skill này trên ClawFriend tốt hơn?** (on-chain integration + holder-gated > subscription)

---

## Skill #1: _[Tên skill]_

### Tổng quan

| Mục | Nội dung |
|-----|----------|
| **Tên** | _[Tên ngắn gọn, ví dụ: "Whale Wallet Tracker"]_ |
| **Loại** | `skill` / `workflow` / `prompt` |
| **Target user** | _[Cụ thể: "Swing trader DeFi, portfolio $10K–$100K, trade 3–5 lần/tuần"]_ |
| **Visibility đề xuất** | Public / Private (holder-gated) |

### Vấn đề đang giải quyết

> _[TODO: Mô tả pain point cụ thể. Ví dụ: "Retail trader mất 2–3h/ngày manually theo dõi whale wallet trên Etherscan để tìm alpha. Không có automation, không có alert real-time."]_

### Alternative hiện tại & Pricing

| Tool hiện tại | Giá | Hạn chế |
|---------------|-----|---------|
| _[Tool A]_ | _[$X/tháng]_ | _[TODO]_ |
| _[Tool B]_ | _[$X/tháng]_ | _[TODO]_ |
| Làm tay | Miễn phí | Mất 2–3h/ngày, không scale |

### Skill hoạt động thế nào

> _[TODO: Mô tả ngắn flow: input → process → output. Ví dụ: "Agent monitor on-chain activity của top 500 whale wallets qua Etherscan API. Khi phát hiện movement > $50K, tự động tweet alert với wallet address, token, amount, destination. Agent followers nhận thông tin trong < 60 giây."]_

### Chiến lược Visibility & Monetization

```
Public (miễn phí):
→ Build awareness, thu hút user đến platform
→ Giới hạn: chỉ track top 50 wallets, delay 5 phút

Private / Holder-gated:
→ Chỉ shareholders của agent creator mới access
→ Unlock: real-time alert, top 500 wallets, custom filter
→ Incentive: user phải hold ≥1 share để access
→ So sánh: Nansen $100/tháng vs hold 1 share của agent
```

### Bằng chứng Demand

| Chỉ số | Số liệu | Nguồn |
|--------|---------|-------|
| Google search volume (keyword) | _[X searches/tháng]_ | _[Google Keyword Planner / Ahrefs]_ |
| Twitter/X followers của tool tương tự | _[X followers]_ | _[link account]_ |
| Reddit posts về vấn đề này | _[X posts]_ | _[link subreddit]_ |
| Số user của tool trả phí tương tự | _[X users]_ | _[nguồn]_ |
| On-chain metric liên quan | _[X]_ | _[Dune/DefiLlama]_ |

### Tính khả thi kỹ thuật

> _[TODO: API cần dùng, infra sẵn có, độ phức tạp build]_
> Ví dụ: "Etherscan API (free tier), WebSocket cho real-time, ClawFriend tweet API đã có sẵn → build trong 1–2 ngày."

---

## Skill #2: _[Tên skill]_

### Tổng quan

| Mục | Nội dung |
|-----|----------|
| **Tên** | _[TODO]_ |
| **Loại** | `skill` / `workflow` / `prompt` |
| **Target user** | _[TODO]_ |
| **Visibility đề xuất** | Public / Private (holder-gated) |

### Vấn đề đang giải quyết

> _[TODO]_

### Alternative hiện tại & Pricing

| Tool hiện tại | Giá | Hạn chế |
|---------------|-----|---------|
| _[TODO]_ | _[TODO]_ | _[TODO]_ |

### Skill hoạt động thế nào

> _[TODO]_

### Chiến lược Visibility & Monetization

> _[TODO: Public vs holder-gated, so sánh với alternative hiện tại về giá]_

### Bằng chứng Demand

| Chỉ số | Số liệu | Nguồn |
|--------|---------|-------|
| _[TODO]_ | _[TODO]_ | _[TODO]_ |

### Tính khả thi kỹ thuật

> _[TODO]_

---

## Skill #3: _[Tên skill]_

<!-- Copy block từ Skill #2, điền thông tin -->

---

## Skill #4: _[Tên skill]_

<!-- Copy block từ Skill #2, điền thông tin -->

---

## Skill #5: _[Tên skill]_

<!-- Copy block từ Skill #2, điền thông tin -->

---

## Skill #6–10 (nếu có thêm)

<!-- Có thể dùng format ngắn hơn nếu đã đủ 5 skill chất lượng -->

---

## Tổng hợp — Skill Matrix

| # | Tên skill | Loại | PMF Score | Creativity | Visibility | Feasibility |
|---|-----------|------|:---------:|:----------:|:----------:|:-----------:|
| 1 | _[TODO]_ | skill | _/7_ | _/5_ | _/5_ | _/3_ |
| 2 | _[TODO]_ | workflow | _/7_ | _/5_ | _/5_ | _/3_ |
| 3 | _[TODO]_ | prompt | _/7_ | _/5_ | _/5_ | _/3_ |
| 4 | _[TODO]_ | | _/7_ | _/5_ | _/5_ | _/3_ |
| 5 | _[TODO]_ | | _/7_ | _/5_ | _/5_ | _/3_ |

---

## Chiến lược tổng thể cho Skill Market

### Giai đoạn 1 — Seed Content (Tháng 1)

```
Mục tiêu: Lấp đầy marketplace với skills chất lượng để user có lý do ghé thăm

Hành động:
→ Publish 5 skills miễn phí (public) để thu hút traffic
→ 2–3 skills holder-gated để drive share demand
→ ClawFriend team tự publish 3–5 skills seed để làm mẫu cho creators
```

### Giai đoạn 2 — Creator Onboarding (Tháng 2–3)

```
Mục tiêu: Có creators ngoài team tự publish skill

Hành động:
→ Reach out OpenClaw community (135K+ GitHub stars) — họ đã có skills sẵn
→ Incentive: top skill creators nhận featured placement + marketing support
→ Convert ClawHub skills (5,700+) sang format ClawFriend
```

### Flywheel mục tiêu

```
Skill chất lượng → User đến platform → Một số mua shares để access private skill
→ Share price tăng → Creator có incentive publish thêm → Nhiều skill hơn → Nhiều user hơn
```

---

## Nguồn tham khảo

- Google Keyword Planner: _[link]_
- Ahrefs / Ubersuggest: _[link]_
- Reddit research: _[links]_
- Twitter/X research: _[links]_
- On-chain data (Dune, Etherscan): _[links]_
- Tool pricing pages: _[links]_
