# Data — Nguồn số liệu

> Tập hợp tất cả raw data, số liệu đã verify, và nguồn tham khảo.
> Mọi con số trong deliverable phải có thể trace về file này.

---

## Cấu trúc thư mục

```
data/
├── README.md               ← file này
├── competitors/            ← số liệu từng đối thủ
│   ├── virtuals-protocol.md
│   ├── friend-tech.md
│   ├── ai16z-eliza.md
│   └── ...
├── skills/                 ← demand data cho từng skill
│   ├── skill-01-[tên].md
│   └── ...
└── market/                 ← tổng quan thị trường
    └── market-overview.md
```

---

## Nguồn data ưu tiên

### On-chain data (tin cậy nhất)
- **Dune Analytics:** https://dune.com — query on-chain transaction, volume, users
- **DefiLlama:** https://defillama.com — TVL, protocol stats
- **BSCScan:** https://bscscan.com — ClawFriend contract activity
- **Etherscan:** https://etherscan.io — competitor on-chain data

### Social & Community data
- **Twitter/X Analytics:** follower count, engagement rate
- **GitHub:** repository stars, contributors, commit activity
- **Reddit:** post count, upvotes, community size

### Search demand data
- **Google Keyword Planner:** search volume / tháng
- **Ahrefs / Ubersuggest:** keyword difficulty, trend
- **Google Trends:** xu hướng tìm kiếm theo thời gian

### Product & Market data
- **Product Hunt:** upvotes, reviews, launch date
- **CoinGecko / CoinMarketCap:** token market cap, volume
- **Crunchbase / Pitchbook:** funding rounds

---

## Log số liệu đã verify

| Số liệu | Giá trị | Nguồn | Ngày verify | Dùng trong |
|---------|---------|-------|-------------|------------|
| _[TODO]_ | _[TODO]_ | _[link]_ | _[ngày]_ | competitive-landscape.md |
| _[TODO]_ | _[TODO]_ | _[link]_ | _[ngày]_ | skill-research.md |
| _[TODO]_ | _[TODO]_ | _[link]_ | _[ngày]_ | distribution-plan.md |

---

## Lưu ý

- Đặt file screenshot số liệu vào thư mục con tương ứng
- Format tên file: `[source]-[metric]-[date].png` (ví dụ: `dune-virtuals-volume-24feb.png`)
- Số liệu từ AI **phải** verify bằng nguồn gốc trước khi đưa vào deliverable
