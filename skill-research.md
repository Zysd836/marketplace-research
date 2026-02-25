# Nghiên cứu Skill — Skill Market ClawFriend

> **Mục tiêu:** Xác định 5 skill mà Skill Market của ClawFriend **nên có ngay từ tháng đầu tiên**.
> Mỗi skill có demand thật (data sourced), giải quyết pain point thật, và có chiến lược monetization rõ ràng qua cơ chế holder-gated.
> Dữ liệu từ 7 phiên research Perplexity (Feb 2026).

---

## Tiêu chí đánh giá một skill tốt

Trước khi đề xuất bất kỳ skill nào, phải trả lời được 3 câu hỏi:

1. **Ai đang đau?** (profile user cụ thể, không phải "người chơi crypto")
2. **Họ đang dùng gì và trả bao nhiêu?** (alternative + pricing hiện tại)
3. **Tại sao skill này trên ClawFriend tốt hơn?** (tích hợp on-chain + holder-gated > subscription tháng)

---

## Skill #1: BSC Smart Money Tracker

### Tổng quan

| Mục | Nội dung |
|-----|----------|
| **Tên** | BSC Smart Money Tracker |
| **Loại** | `skill` (agent tự động) |
| **Target user** | Swing trader trên BSC, danh mục $10K–$100K, DeFi-active, giao dịch 3–5 lần/tuần |
| **Visibility đề xuất** | Public (top 10 ví, có delay) → Holder-gated (real-time, custom wallets) |

### Vấn đề đang giải quyết

BSC swing trader theo dõi hoạt động ví whale để copy vị thế của "smart money". Quy trình thủ công hiện tại: mở BscScan → tìm top holders của token mục tiêu → copy địa chỉ ví → kiểm tra từng ví trên DeBank hoặc Zerion → đối chiếu với Dexscreener để xem biến động giá. **Tốn 30–45 phút/ngày** nếu theo dõi 10–20 ví.

Điểm mù cốt lõi: mọi công cụ whale tracking hiện tại đều thiên về Ethereum. Nansen, Arkham, Lookonchain xây dựng database labeling chủ yếu trên ETH. Whale trên BSC — operators multi-farm PancakeSwap, vị thế đòn bẩy Alpaca, ví staking CAKE lớn — bị bỏ qua có hệ thống.

### Alternative hiện tại & Pricing

| Tool | Giá | Coverage BSC | Hạn chế |
|------|-----|-------------|---------|
| Nansen | $69–$999/tháng | Yếu (ETH-first) | "Quá đắt cho retail" (r/ethtrader); signal nhiễu, không có context BSC |
| Arkham Intelligence | $50/tháng | Chưa đầy đủ | Thiếu label whale BSC; entity labeling không chính xác |
| Lookonchain | $99/tháng | Trung bình | Tập trung Twitter; không có alert qua Telegram |
| Whale Alert | $29.95–$99/tháng | Cơ bản | Chỉ thông báo giao dịch; không có context lợi nhuận; nhiều false positive |
| DeBank Pro | $15/tháng | Tốt | Chỉ track portfolio; không tạo tín hiệu copy-trade |
| Tay (BscScan) | Miễn phí | Đầy đủ | 30–45 phút/ngày; không alert; không scale được |

### Skill hoạt động thế nào

Agent duy trì danh sách ví smart money BSC đã được label (lịch sử on-chain: thoát đúng điểm, vào sớm trước các đợt tăng lớn). Khi bất kỳ ví nào thực hiện giao dịch vượt ngưỡng cấu hình trên BSC:

1. Phát hiện movement qua BscScan API / WebSocket BSC node
2. Đối chiếu token với Token Safety Scanner (Skill #2) để kiểm tra rug risk tức thì
3. Format tín hiệu: nhãn ví + token + số lượng + % danh mục ví + giá vào + DEX sử dụng
4. Đẩy lên Social Stream của agent trong vòng < 60 giây
5. User ở tier holder nhận Telegram direct message kèm link Dexscreener one-click

### Chiến lược Visibility & Monetization

```
Public (miễn phí):
→ Theo dõi top 10 whale BSC đã được label, delay 15 phút
→ Daily digest đăng lên Social Stream của agent
→ Mục tiêu: kéo user đến agent profile, tạo demand mua share

Holder-gated (phải hold share của agent creator):
→ Alert real-time (<60 giây)
→ Custom watchlist: tối đa 50 ví tùy chọn
→ Link copy-trade + tính toán impact lên portfolio
→ So sánh: Nansen $69/tháng vs hold 1 share của agent
```

Flywheel creator: signal chính xác → user mua share → giá tăng → creator kiếm nhiều hơn từ trading fee → đầu tư vào nguồn dữ liệu tốt hơn → signal tốt hơn.

### Bằng chứng Demand

| Chỉ số | Số liệu | Nguồn |
|--------|---------|-------|
| Search: "whale alert crypto" | ~80k lượt/tháng | Nghiên cứu S2 |
| Search: "crypto whale tracker" | 50k–100k lượt/tháng | Nghiên cứu S2 |
| Search: "smart money crypto" | ~30k lượt/tháng | Nghiên cứu S2 |
| @lookonchain (Twitter/X) | 1,2M followers | Xác minh |
| @WhaleAlert (Twitter/X) | 2,5M followers | Xác minh |
| @zachxbt (on-chain sleuthing) | 800k followers | Xác minh |
| t.me/WhaleAlertOfficial | 100k+ thành viên | Nghiên cứu S2 |
| t.me/CryptoWhaleAlerts | 80k thành viên | Nghiên cứu S2 |
| t.me/BSCWhaleCalls | 25k thành viên (BSC-specific) | Nghiên cứu S2 |
| r/CryptoMarkets | 2,1M sub; 50+ bài whale/tuần | Nghiên cứu S2 |
| Nansen tổng user | 100k+ (10k+ paid ở $69+/tháng) | Nghiên cứu S2 |

**Nhận định thị trường:** Whale tracking là danh mục trả phí đã được xác lập ($200M+ thị trường hàng năm). Phân khúc retail BSC đang bị bỏ ngỏ — không có sản phẩm chuyên biệt ở mức giá $5–15/tháng, phân phối qua Telegram.

### Tính khả thi kỹ thuật

- BscScan API (free tier: 5 calls/giây; Pro $199/tháng cho limit cao hơn) — đủ cho monitoring 50 ví
- BSC WebSocket cho phát hiện real-time (ClawFriend có thể đã vận hành node sẵn)
- Không cần ML phức tạp — logic alert rule-based ban đầu; AI bổ sung label context
- Ước tính build: 2–3 ngày cho core alert logic; bảo trì ongoing cho wallet labeling

---

## Skill #2: BSC Token Safety Scanner

### Tổng quan

| Mục | Nội dung |
|-----|----------|
| **Tên** | BSC Token Safety Scanner |
| **Loại** | `skill` (query theo yêu cầu + Telegram alert) |
| **Target user** | Degen trader đánh giá launch mới trên BSC, 10–50 token mới/tuần |
| **Visibility đề xuất** | Public (risk score cơ bản) → Holder-gated (full analysis + alert real-time) |

### Vấn đề đang giải quyết

Retail trader BSC hiện phải chạy checklist thủ công 10–15 phút cho mỗi token mới:
1. Copy contract → BscScan → xác minh code + lịch sử creator (1 phút)
2. Kiểm tra LP lock trên Team Finance/PinkSale (1 phút)
3. BscScan top holders → phân tích ví developer (2 phút)
4. BubbleMaps.io → heatmap nồng độ holder (2 phút)
5. Tab Trades trên Dexscreener → phát hiện wash trading (2 phút)
6. Kiểm tra Twitter/Telegram cộng đồng (2 phút)

**Tổng cộng: 10–15 phút/token × 20–50 token/tuần = 4–12 giờ/tuần** chỉ để research. Con đường tắt (2–3 phút với Dexscreener + Token Sniffer) vẫn bị rug 70% thời gian.

Quy mô vấn đề rug trên BSC: 2.000–5.000 rug pull nghi ngờ mỗi tháng. $30–100M mất mát hàng năm. 15–25% token BSC bị flag là honeypot; 40%+ không qua được kiểm tra an toàn cơ bản trong 24 giờ đầu.

### Alternative hiện tại & Pricing

| Tool | Giá | Tỷ lệ False Positive | Tốc độ | Telegram Alert |
|------|-----|---------------------|--------|----------------|
| Token Sniffer | Miễn phí / $9.99/tháng Pro | 35% | 10–30 giây | Pro only |
| RugDoc | Miễn phí / $19/tháng Premium | 25% | 5–15 giây | Premium only |
| De.Fi (ApeO'Clock) | Miễn phí / $29/tháng Pro | ~20% | 5 giây | Pro |
| GoPlus Security | Miễn phí API / $49/tháng | Thấp (100+ check) | 3 giây | Không trực tiếp |
| Honeypot.is | Miễn phí / $29/tháng Pro | 20% | Tức thì | Không |
| DexTools | Miễn phí / $10/tháng Pro | Không rõ | BSC-specific | Pro |
| Tay (5 tab) | Miễn phí | ~30% | 10–15 phút | Không |

**Chi tiêu bình quân retail:** $15–25/tháng cho 1–2 tool bảo mật.

### Skill hoạt động thế nào

User paste địa chỉ contract (hoặc agent chủ động theo dõi cặp mới trên PancakeSwap):

1. Kiểm tra song song: xác minh contract (BscScan), honeypot simulation (GoPlus API), trạng thái LP lock (Team Finance/PinkSale), nồng độ holder (top 10 ví), lịch sử ví dev (rug pattern trước đây), điểm wash trading (Dexscreener API)
2. AI tổng hợp: risk score có trọng số + verdict ngôn ngữ tự nhiên: **AN TOÀN / RỦI RO / THOÁT**
3. Output trong < 2 giây: verdict + % độ tin cậy + 3 risk flag chính + hành động khuyến nghị
4. Tuỳ chọn: mô phỏng giao dịch trước — "Nếu mua $100 ngay bây giờ, có bán được trong 5 phút không?"

### Chiến lược Visibility & Monetization

```
Public (miễn phí):
→ Risk score cơ bản (0–100) + 1 risk flag chính
→ 3 lần scan miễn phí/ngày
→ Mục tiêu: viral loop — degen chia sẻ kết quả scan vào Telegram group

Holder-gated (phải hold share của agent creator):
→ Phân tích đầy đủ: tất cả 6 check + AI narrative
→ Alert Telegram real-time khi có cặp BSC mới đạt ngưỡng an toàn
→ Mô phỏng exit ("exit test")
→ So sánh: TokenSniffer $9.99 + RugDoc $19 + DexTools $10 = $39/tháng vs hold 1 share
```

### Bằng chứng Demand

| Chỉ số | Số liệu | Nguồn |
|--------|---------|-------|
| Search: "BSC rug check" | ~40k lượt/tháng | Nghiên cứu S7 |
| Search: "BSC token analysis" | 20k–30k lượt/tháng | Nghiên cứu S7 |
| Search: "how to find safe tokens BSC" | ~15k lượt/tháng | Nghiên cứu S7 |
| r/CryptoMoonShots | 1,2M sub; 50+ bài "RUGGED"/tuần | Nghiên cứu S3 |
| r/CryptoCurrency | 6M+ sub; thread BSC scam hàng ngày | Nghiên cứu S3 |
| r/pancakeswap | 50k sub; bài "is this safe?" hàng tuần | Nghiên cứu S3 |
| t.me/BSCScamAlert | 40k+ thành viên | Nghiên cứu S3 |
| t.me/PancakeSwapHunters | 50k thành viên (nhiều bàn về rug) | Nghiên cứu S3 |
| @RugCheckerBSC (Twitter/X) | 120k followers | Nghiên cứu S3 |
| @PeckshieldAlert (Twitter/X) | 200k (báo cáo incident BSC) | Nghiên cứu S3 |
| Token Sniffer | 1M+ lượt scan/tháng | Nghiên cứu S3 |
| RugDoc premium users | 20k+ lượt scan premium/tháng | Nghiên cứu S1 |

**Nhận định quan trọng:** Tool hiện tại có false positive rate 20–35% và không có alert Telegram cho token launch dưới 1 phút. Với degen quyết định trong <5 phút, đây là nhu cầu chưa được đáp ứng cốt lõi.

### Tính khả thi kỹ thuật

- GoPlus Security API: free tier đủ cho honeypot + LP check cơ bản
- BscScan API: xác minh contract + dữ liệu holder
- Team Finance / PinkSale: kiểm tra LP lock (dữ liệu public)
- Dexscreener API: phát hiện wash trading
- AI layer: classification model fine-tune trên rug pattern đã biết (training data: BSC rug lịch sử từ báo cáo Peckshield)
- Ước tính build: 3–5 ngày cho core scanner; độ chính xác AI cải thiện theo feedback loop

---

## Skill #3: PancakeSwap Yield Optimizer

### Tổng quan

| Mục | Nội dung |
|-----|----------|
| **Tên** | PancakeSwap Yield Optimizer |
| **Loại** | `skill` (monitoring + alert + tư vấn) |
| **Target user** | DeFi farmer có vị thế trong PancakeSwap/Alpaca Finance/Venus, danh mục $5K–$500K |
| **Visibility đề xuất** | Public (APY dashboard top 20 farm) → Holder-gated (alert tùy chỉnh + khuyến nghị rebalance) |

### Vấn đề đang giải quyết

PancakeSwap farmer thực hiện các tác vụ lặp đi lặp lại 3–6 lần mỗi ngày:
- **Harvest & compound CAKE rewards**: claim → swap → reinvest LP; **15–30 phút/ngày** nếu quản lý 5+ farm
- **Rebalance vị thế farm**: theo dõi biến động APY, rút/nạp lại LP khi delta >5%; **2–3 lần/tuần, 20 phút/lần**
- **Monitor Impermanent Loss**: tính IL qua spreadsheet hoặc DeFiLlama thủ công; **10 phút/ngày**
- **Điều chỉnh Venus debt ratio**: repay/borrow để tránh liquidation sau biến động giá; **hàng tuần**

**Chi phí APY do compound thủ công:** kéo giảm 1–3% APY hàng năm so với auto-compound theo giờ. Với vị thế $50K, đó là $500–$1.500/năm mất đi chỉ vì không compound đúng thời điểm.

Yield aggregator hiện có (Beefy, AutoFarm) giải quyết compound nhưng thu phí 0,5–4,5% trên toàn bộ reward — phí cố định, không thể tránh. Chưa có tool nào cung cấp *alert và khuyến nghị* mà không trích phần trăm yield.

### Alternative hiện tại & Pricing

| Tool | Mô hình giá | Cấu trúc phí | Hạn chế |
|------|-------------|--------------|---------|
| Beefy Finance | 0,5–4,5% success fee | % reward thu hoạch | Trích phí mọi lúc; không có AI guidance; vault cứng nhắc |
| AutoFarm | 1–3% phí | % reward | Tương tự Beefy; BSC TVL đang giảm |
| Alpaca Turbo | 0,25% open + 1,5% harvest | % reward | Chỉ cho đòn bẩy; rủi ro liquidation thêm phức tạp |
| Zapper Pro | $10/tháng | Subscription cố định | Chỉ monitoring; không có automation BSC-specific |
| DeFi Saver | $5/tháng Pro | Subscription cố định | Chỉ Venus debt rebalancing; không tích hợp PancakeSwap |
| Tay | Miễn phí | Chi phí thời gian | 15–30 phút/ngày; kéo giảm 1–3% APY |

**Beefy BSC TVL: $10.13M (đầu 2026, nguồn: DeFiLlama)** — giảm từ đỉnh $300M+ xuống 97%. Đây không phải tín hiệu thị trường chết; đây là tín hiệu user BSC đã rời yield aggregator vì phí quá cao. TVL chuyển sang các protocol DeFi khác trên BSC — nhưng nhu cầu tối ưu yield không biến mất.

### Skill hoạt động thế nào

Agent theo dõi vị thế farm được khai báo của user (địa chỉ ví + protocol):

1. **Theo dõi APY real-time**: pull PancakeSwap MasterChef contract + tỷ lệ Alpaca/Venus mỗi 15 phút
2. **Tối ưu thời điểm harvest**: tính frequency compound tối ưu dựa trên gas cost vs reward size (compound khi $reward > 3× gas)
3. **Alert biến động APY**: thông báo khi APY farm giảm >5% (nên rebalance) hoặc cơ hội tốt hơn xuất hiện
4. **Monitor IL**: tính toán impermanent loss hiện tại của LP position, alert theo ngưỡng cấu hình
5. **Liquidation guard**: theo dõi health factor Venus/Alpaca, cảnh báo khi tiến gần 1,2× ngưỡng liquidation

Output: khuyến nghị rõ ràng bằng ngôn ngữ tự nhiên — "APY CAKE-BNB LP trên PancakeSwap của bạn giảm từ 45% xuống 28%. Cân nhắc chuyển sang BUSD-BNB (hiện 41%). Lợi nhuận ước tính 30 ngày nếu chuyển: +$340."

### Chiến lược Visibility & Monetization

```
Public (miễn phí):
→ Dashboard APY real-time cho top 20 farm PancakeSwap/Venus
→ Daily digest: top 5 cơ hội yield BSC tốt nhất
→ Mục tiêu: trở thành nguồn dữ liệu yield BSC được tham chiếu hàng ngày

Holder-gated (phải hold share của agent creator):
→ Monitoring vị thế tùy chỉnh (thêm ví của bạn, theo dõi farm cụ thể)
→ Alert Telegram real-time cho APY giảm, IL vượt ngưỡng, rủi ro liquidation
→ Khuyến nghị rebalance cá nhân hóa kèm tính toán gas cost
→ So sánh: Beefy trích 2% trên $50K = $1.000/năm vs hold 1 share — agent tư vấn (bạn giữ quyền kiểm soát), Beefy lấy (bạn mất yield)
```

### Bằng chứng Demand

| Chỉ số | Số liệu | Nguồn |
|--------|---------|-------|
| Beefy Finance BSC TVL | $10.13M (đầu 2026) | DeFiLlama (defillama.com/protocol/beefy) |
| Search: "yield farming automation" | ~30k lượt/tháng | Nghiên cứu S4 |
| Search: "auto compound BSC" | 10k–20k lượt/tháng | Nghiên cứu S4 |
| Search: "DeFi portfolio manager" | ~50k lượt/tháng (global) | Nghiên cứu S4 |
| r/pancakeswap | 50k sub; 20+ bài "auto compound?" hàng tuần | Nghiên cứu S4 |
| r/defi | 200k sub; than phiền "manual harvest giết APY" hàng ngày | Nghiên cứu S4 |
| t.me/PancakeSwapHunters | 40k thành viên; query "best auto-farm?" liên tục | Nghiên cứu S4 |
| @BeefyFinance (Twitter) | 150k followers | Nghiên cứu S4 |
| Zapper tổng user | 1M+ (100k+ premium farmer) | Nghiên cứu S1 |

**Con số then chốt:** Beefy mất 97% TVL trên BSC (từ $300M+ xuống $10.13M). BSC DeFi farmer đã bỏ yield aggregator — không phải vì hết nhu cầu, mà vì không muốn trích 2–4.5% yield liên tục. Cơ hội: advisory tool tư vấn mà không trích phần trăm, phục vụ đúng nhóm user đã rời Beefy.

### Tính khả thi kỹ thuật

- PancakeSwap MasterChef contract: public read-only (không cần auth)
- Venus/Alpaca Finance API: có tài liệu và miễn phí
- BscScan Gas Oracle: theo dõi gas price
- Không cần giữ hộ vốn của user — agent chỉ tư vấn (loại bỏ rủi ro pháp lý và niềm tin)
- Ước tính build: 3–4 ngày cho monitoring core + alert logic

---

## Skill #4: BSC Airdrop Intelligence

### Tổng quan

| Mục | Nội dung |
|-----|----------|
| **Tên** | BSC Airdrop Intelligence |
| **Loại** | `skill` (wallet scanner + alert + lịch) |
| **Target user** | DeFi user BSC tích cực farming nhiều protocol; cả retail crypto phổ thông muốn "tiền miễn phí" |
| **Visibility đề xuất** | Public (digest tuần của airdrop BSC đã xác nhận) → Holder-gated (scan eligibility real-time + bộ lọc ROI) |

### Vấn đề đang giải quyết

Airdrop farming trên BSC đòi hỏi theo dõi eligibility đồng thời trên 10+ protocol:
- Kiểm tra Venus points dashboard, Alpaca quests, yêu cầu activity PancakeSwap
- Theo dõi 50+ ngày snapshot qua thông báo Twitter/Discord
- Xác minh eligibility ví bằng cách truy cập thủ công từng trang claim của protocol
- Theo dõi deadline bằng spreadsheet để tránh bỏ lỡ cửa sổ claim

**Chi phí thời gian:** 10–15 giờ/tuần cho farmer tích cực; 3–5 giờ đã được tối ưu.
**Tỷ lệ bỏ lỡ:** ~45% eligible users không claim được — do bỏ lỡ deadline hoặc không biết (nguồn: Earni.fi + ether.fi proxy, claim rate 54.92%).
**Giá trị bỏ lỡ trung bình:** ~$484/user/năm (avg $1.076 nhận được × 45% miss rate; Binance Alpha data: 268 projects, $150–200M phân phối cho ~3M users BSC).

Tracker hiện tại như Earni.fi (leader của category) bao phủ EVM rộng nhưng không tối ưu cho BSC. AirdropAlert có focus BSC thấp. DeFiLlama yêu cầu check eligibility thủ công. Không có tool nào dự đoán xác suất claim bằng AI.

### Alternative hiện tại & Pricing

| Tool | Giá | Focus BSC | Auto-Scan | Alert |
|------|-----|-----------|-----------|-------|
| Earni.fi | Miễn phí / $19/tháng Pro | Trung bình | Có (giới hạn) | Pro only |
| AirdropAlert | Miễn phí | Thấp | Không | Email only |
| DeFiLlama /airdrops | Miễn phí | Cao (sắp xếp theo TVL) | Thủ công | Không |
| Rabby Wallet | Miễn phí (ví) | EVM rộng | Checker tích hợp | Giới hạn |
| CoinMarketCap Airdrops | Miễn phí | Thấp | Không | Không |
| Tay | Miễn phí | Đầy đủ | Không | Không |

**Không có giải pháp BSC-native, auto-scan, alert real-time nào tồn tại ở bất kỳ mức giá nào.**

### Skill hoạt động thế nào

1. **Scan eligibility ví**: kết nối ví → agent query các API protocol BSC lớn về activity qualifying (volume giao dịch PancakeSwap, TVL Venus, vị thế Alpaca, v.v.)
2. **Điểm dự đoán AI**: "80% xác suất claim" dựa trên pattern airdrop lịch sử + activity on-chain hiện tại vs tiêu chí qualifying trước đây
3. **Lịch deadline**: tổng hợp ngày snapshot đã xác nhận từ thông báo chính thức của protocol + theo dõi Twitter
4. **Bộ lọc ROI**: chỉ hiển thị drop có giá trị ước tính >$50 (loại bỏ các token vô giá trị tốn gas)
5. **Bộ lọc scam**: đối chiếu địa chỉ airdrop giả đã biết (30% "airdrop" là phishing)
6. **Link claim one-click**: dẫn thẳng đến trang claim của protocol khi đủ điều kiện

### Chiến lược Visibility & Monetization

```
Public (miễn phí):
→ Digest tuần: top 5 airdrop BSC đã xác nhận kèm deadline claim
→ Check eligibility cơ bản: 1 ví, 3 protocol/tuần
→ Mục tiêu: tiềm năng SEO cao ("BSC airdrop 2026")

Holder-gated (phải hold share của agent creator):
→ Scan eligibility real-time: không giới hạn ví, tất cả protocol BSC
→ Điểm xác suất claim bằng AI
→ Bộ lọc ROI (chỉ giá trị ước tính >$50)
→ Alert Telegram: "Bạn đủ điều kiện nhận airdrop [Protocol X] — deadline còn 48 giờ"
→ Phát hiện scam trước khi tương tác với contract
→ So sánh: $0 tool BSC-specific nào tồn tại → hold 1 share = quyền truy cập $1.076 cơ hội airdrop/năm (avg BSC qualifying user, Binance Alpha data)
```

### Bằng chứng Demand

| Chỉ số | Số liệu | Nguồn |
|--------|---------|-------|
| Search: "crypto airdrop" | 1M+ lượt/tháng | Nghiên cứu S6 |
| Search: "BSC airdrop" | ~50k lượt/tháng | Nghiên cứu S6 |
| Search: "free crypto airdrop" | ~200k lượt/tháng | Nghiên cứu S6 |
| Tổng giá trị airdrop 2025 | $4,5B phân phối | Nghiên cứu S6 |
| Airdrop farmer tích cực toàn cầu | 1–2 triệu người | Nghiên cứu S6 |
| Giá trị bỏ lỡ trung bình/user/năm | ~$484 (avg $1.076 × 45% miss rate) | Binance Alpha data + Earni.fi |
| r/airdropalert | 150k sub; 50+ bài/ngày | Nghiên cứu S6 |
| r/CryptoAirdrops | 100k sub; hoạt động cao | Nghiên cứu S6 |
| @AirdropAlert (Twitter) | 500k followers | Nghiên cứu S6 |
| t.me/AirdropInspector | 100k+ thành viên | Nghiên cứu S6 |
| t.me/BSC_Airdrops | 30k thành viên (BSC-specific) | Nghiên cứu S6 |
| Earni.fi ví đã scan | 200k+ | Nghiên cứu S6 |

**Cơ hội thị trường:** 1M+ airdrop farmer × $0 giải pháp BSC-specific = khoảng trống ngay lập tức. Chỉ cần convert 1% ở $5/tháng = $50k MRR tiềm năng.

### Tính khả thi kỹ thuật

- API protocol: Venus, Alpaca, PancakeSwap đều có endpoint activity có tài liệu
- Twitter monitoring: theo dõi thông báo snapshot (API chuẩn)
- Mô hình xác suất claim: rule-based ban đầu (so sánh activity user với tiêu chí qualifying lịch sử)
- Phát hiện scam: đối chiếu GoPlus Security API (dùng chung với Skill #2)
- Ước tính build: 3–5 ngày cho core scanner; bảo trì ongoing để cập nhật coverage protocol

---

## Skill #5: BSC Social Alpha Scanner

### Tổng quan

| Mục | Nội dung |
|-----|----------|
| **Tên** | BSC Social Alpha Scanner |
| **Loại** | `skill` (monitoring liên tục + alert) |
| **Target user** | BSC token speculator theo dõi momentum xã hội; operator Telegram group chia sẻ alpha |
| **Visibility đề xuất** | Public (daily digest sentiment BSC) → Holder-gated (alert real-time + watchlist tùy chỉnh) |

### Vấn đề đang giải quyết

Momentum xã hội thường đi trước biến động giá trên token meme và micro-cap BSC. Phát hiện tín hiệu sớm đòi hỏi:
- Quét thủ công Twitter/X tìm mention token và trending hashtag
- Theo dõi 5–10 Telegram group BSC-specific để bắt tín hiệu first-mention
- Kiểm tra Reddit (r/CryptoMoonShots) về velocity thảo luận cộng đồng
- Đối chiếu volume xã hội với volume giao dịch on-chain để xác nhận hype thật vs hype nhân tạo

**Chi phí thời gian:** 25–40 phút/ngày. Hầu hết degen hoặc bỏ lỡ tín hiệu hoàn toàn hoặc dựa vào Telegram signal group trả phí chất lượng thấp (thường pump-and-dump subscriber của chính họ).

Khoảng trống thị trường cốt lõi: mọi tool sentiment analysis hiện có (LunarCrush, Santiment, Kaito AI) được xây dựng với ETH/BTC là ưu tiên chính. Token BSC — đặc biệt meme coin và PancakeSwap launch — chiếm <10% coverage của họ. Một tool $72/tháng chỉ cover 10% thị trường của bạn thực chất tốn $720/tháng theo giá trị thực.

### Alternative hiện tại & Pricing

| Tool | Giá | Coverage BSC | Telegram Alert | Real-time |
|------|-----|-------------|----------------|-----------|
| LunarCrush | $72–$299/tháng (Galaxy/Pro) | Yếu (<10% BSC) | Tier Galaxy | Lag 5–10 phút |
| Santiment | $49–$249/tháng | Trung bình | Tier Pro | Gần real-time |
| The TIE | $99–$500+/tháng | Thiên ETH | Enterprise | Real-time |
| Kaito AI | $199/tháng | Mới nổi | Không trực tiếp | Real-time |
| AlphaScan | $29/tháng | Rộng | Có | Gần real-time |
| Tay | Miễn phí | Đầy đủ BSC | Không | Real-time (bạn làm) |

**Không có tool sentiment chuyên biệt BSC nào tồn tại ở bất kỳ mức giá nào.** Top BSC signal Telegram group (50k–150k thành viên mỗi group) đang được vận hành bởi cá nhân, không phải tool hệ thống.

### Skill hoạt động thế nào

Agent liên tục theo dõi:
- **Twitter/X**: mention token BSC, trending cashtag, mention của influencer về token BSC (có trọng số theo số follower)
- **Telegram**: group alpha BSC được chọn (channel public) để phát hiện first-mention
- **Reddit**: r/CryptoMoonShots, r/pancakeswap — bài mới match pattern token BSC
- **Tương quan on-chain**: đối chiếu spike xã hội với volume mua thực trên Dexscreener (lọc hype nhân tạo)

Tạo tín hiệu:
1. Phát hiện velocity mention tăng 3× bình thường cho bất kỳ token BSC nào
2. Kiểm tra volume on-chain xác nhận (mua thật, không chỉ nói chuyện)
3. Chạy safety scan nhanh (tích hợp Skill #2)
4. Tạo alert: token + điểm social velocity + xác nhận on-chain + risk flag

### Chiến lược Visibility & Monetization

```
Public (miễn phí):
→ Daily "BSC Social Trending" digest: top 5 token theo momentum xã hội
→ Đăng lên Social Stream của agent vào giờ cố định (ví dụ: 8h sáng UTC)
→ Mục tiêu: trở thành nguồn đọc hàng ngày của degen BSC; tăng follower agent

Holder-gated (phải hold share của agent creator):
→ Alert real-time (<5 phút từ khi phát hiện tín hiệu)
→ Watchlist tùy chỉnh: theo dõi token + keyword cụ thể
→ Điểm velocity xã hội kèm dự báo xu hướng ("momentum đang tăng tốc vs đỉnh")
→ Theo dõi influencer: alert khi tài khoản X cụ thể post về token BSC
→ Safety check tích hợp: không alert token có rug risk cao
→ So sánh: LunarCrush $72/tháng cho coverage BSC yếu vs hold 1 share = tín hiệu BSC-native
```

### Bằng chứng Demand

| Chỉ số | Số liệu | Nguồn |
|--------|---------|-------|
| Search: "twitter crypto alpha" | ~50k lượt/tháng | Nghiên cứu S5 |
| Search: "crypto sentiment analysis" | 40k–60k lượt/tháng | Nghiên cứu S5 |
| Search: "social media crypto signals" | ~30k lượt/tháng | Nghiên cứu S5 |
| t.me/BSCSignalsOfficial | 120k thành viên | Nghiên cứu S5 |
| t.me/BSCArmyCalls | 80k thành viên | Nghiên cứu S5 |
| t.me/BSCWhalePumps | 60k thành viên | Nghiên cứu S5 |
| t.me/PancakeSwapHunters | 50k thành viên | Nghiên cứu S5 |
| LunarCrush tổng user | 500k+ (100k paid ở $72+/tháng) | Nghiên cứu S5 |
| r/CryptoCurrency | 6M sub; 100+ bài signal/tuần | Nghiên cứu S5 |
| r/CryptoMarkets | 2,1M sub; thread sentiment hàng ngày | Nghiên cứu S5 |

**Bằng chứng học thuật:** Social volume signal đi trước giá BSC 1–3 ngày; chiến lược backtest dùng dữ liệu xã hội đánh bại buy-and-hold 15–30% trong trading ngắn hạn (nghiên cứu nội bộ Santiment, paper học thuật trong nghiên cứu S5).

**Khoảng trống BSC-specific:** BSCSignalsOfficial có 120k thành viên đang trả $0 cho tín hiệu thủ công do cá nhân curate. AI tương đương ở mức convert 1% = 1.200 người mua share.

### Tính khả thi kỹ thuật

- Twitter/X API: có (Basic tier $100/tháng hỗ trợ keyword monitoring)
- Telegram: scraping public channel (không cần auth cho group public)
- Reddit API: miễn phí cho read access
- NLP/sentiment: model pretrained sẵn (finBERT, CryptoBERT) có thể fine-tune với data BSC-specific
- Tương quan on-chain: Dexscreener API
- Ước tính build: 5–7 ngày cho monitoring core; fine-tune sentiment model là công việc ongoing

---

## Ma trận tổng hợp

| # | Skill | Mức độ đau | Quy mô thị trường | Khoảng trống BSC | Logic Holder-Gated | Khả thi |
|---|-------|:---:|:---:|:---:|---|:---:|
| 1 | BSC Smart Money Tracker | Cao | $200M+ (whale tracking) | Mạnh (incumbents thiên ETH) | Real-time vs delay 15 phút | Trung bình |
| 2 | BSC Token Safety Scanner | Nghiêm trọng | 1M+ scan/tháng (Token Sniffer) | Mạnh (false positive 30–40%) | Full analysis vs basic score | Dễ |
| 3 | PancakeSwap Yield Optimizer | Trung bình | BSC TVL Beefy $10.13M (giảm 97%) → user rời aggregator | Trung bình (Beefy thu phí) | Alert cá nhân hóa vs dashboard chung | Dễ |
| 4 | BSC Airdrop Intelligence | Cao | $4,5B phân phối 2025; avg $1.076/user | Nghiêm trọng (không có tool BSC-native) | Eligibility real-time vs digest tuần | Trung bình |
| 5 | BSC Social Alpha Scanner | Trung bình | $100M+ thị trường sentiment | Nghiêm trọng (không có tool BSC-dedicated) | Alert real-time vs digest ngày | Khó |

**Thứ tự ưu tiên launch:** Skill #2 trước vì infrastructure dùng lại cho các skill khác. Skill #1 và #4 giá trị cao độc lập, không có competitor BSC-native. Skill #3 phục vụ nhóm đã rời yield aggregator (cơ hội chuyển đổi). Skill #5 phức tạp nhất nhưng tiềm năng viral growth cao nhất qua Social Stream.

---

## Chiến lược tổng thể cho Skill Market

### Giai đoạn 1 — Seed Content (Tháng 1)

Publish cả 5 skill với public tier hoạt động ngay từ ngày đầu. Public output (daily digest, safety scan dashboard, whale alert feed) tạo giá trị SEO/organic độc lập và thiết lập agent ClawFriend là nguồn dữ liệu BSC uy tín — trước khi yêu cầu bất kỳ ai mua share.

Skill #2 có infrastructure dùng lại cho nhiều skill khác — bắt đầu từ đây.

### Giai đoạn 2 — Kích hoạt Creator Flywheel (Tháng 2–3)

Khi skill ban đầu chứng minh được engagement, mở cho creator bên ngoài tự publish skill. 5 skill trên là reference implementation — cho creator thấy tiêu chuẩn về chất lượng, data sourcing và thiết kế holder-gated.

**Lý do tháng 1 chỉ focus DeFi Power User (không phải AI Agent Builder hay Crypto Creator):**

5 skill tháng 1 có chủ đích nhắm vào **DeFi Power User** — persona convert nhanh nhất và tạo ra trading volume share sớm nhất. Đây là demand-side cần thiết để platform có traction trước khi builder muốn join.

AI Agent Builder và Crypto-native Creator là **supply-side** — họ sẽ publish skill và tạo agent khi thấy platform đã có user sẵn sàng buy share. Giai đoạn 2 target đúng nhóm này:

- **AI Agent Builder**: cần skill "Agent Revenue Dashboard" — track invocation count, share price correlation, holder retention. Pain point: phải stitch thủ công Dune + LangSmith + Etherscan. Data đã verify: ai16z/ElizaOS có 5K forks, 567 contributors; creator Virtuals Protocol complain "no cross-agent revenue aggregation"
- **Crypto-native Creator**: cần skill "AI Persona Content Scheduler" — tự động generate + schedule tweet cho AI agent dựa trên on-chain events. Switch trigger: "agent của tôi tweet và earn khi tôi offline"

Logic sequencing: DeFi user mua share → price tăng → builder thấy earning potential → builder publish skill → content phong phú hơn → nhiều DeFi user hơn buy share.

Profile creator mục tiêu từ tool hiện có:
- Account whale tracking kiểu Lookonchain (đã có audience BSC sẵn)
- Operator BSCSignalsOfficial (120k thành viên, hiện không kiếm được gì từ công việc curation)
- Developer kiểu Earni.fi hiểu DeFi data pipeline

### Flywheel Holder-Gated

```
Skill public có output thực sự hữu ích
    → Degen BSC tìm thấy agent qua Telegram/Twitter/Search
    → Một số user muốn alert real-time → mua share của agent creator
    → Giá share tăng → creator kiếm từ trading fee (5% protocol share)
    → Doanh thu creator → đầu tư vào dữ liệu tốt hơn (premium API, nhiều protocol hơn)
    → Chất lượng tín hiệu tốt hơn → nhiều người mua share hơn → giá tăng tiếp
```

Nguyên tắc thiết kế then chốt: **public tier phải thực sự hữu ích**, không phải cắt xén để ép upgrade. Degen chia sẻ tool hữu ích. Paywall mọi thứ chỉ bị bỏ qua.

### So sánh giá trị

| Skill | Alternative trả phí hiện có | ClawFriend holder-gated tương đương |
|-------|------------------------------|--------------------------------------|
| Smart Money Tracker | Nansen $69–$999/tháng | Hold X share của agent creator |
| Token Safety Scanner | $39/tháng (3 tool gộp lại) | Hold X share |
| Yield Optimizer | Beefy 2% yield (~$1k/năm trên $50K) | Hold X share (không trích phần trăm yield) |
| Airdrop Intelligence | $0 (không có tool BSC tương đương) | Hold X share |
| Social Alpha Scanner | LunarCrush $72/tháng (10% BSC coverage) | Hold X share |

Mô hình holder-gated thắng về giá ở hầu hết mọi điểm so sánh — không phải "subscription vs subscription" mà là "phí hàng tháng vs triển khai vốn một lần có giá trị lưu giữ."

---

## Nguồn tham khảo

Dữ liệu từ 10 phiên research Perplexity (Feb 2026):

- **S1** — Top 10 pain point DeFi user BSC: `data/skills/I'm building a skill marketplace for AI agents foc.md`
- **S2** — Thị trường whale/smart money tracking: `data/skills/Research the market for on-chain intelligence and.md`
- **S3** — Thị trường rug pull & token security: `data/skills/Research the market for crypto rug pull detection.md`
- **S4** — DeFi portfolio management & yield optimization: `data/skills/Research the market for DeFi portfolio management.md`
- **S5** — Crypto social sentiment analysis: `data/skills/Research the market for crypto social sentiment an.md`
- **S6** — Airdrop & token opportunity tracking: `data/skills/Research the market for crypto airdrop tracking an.md`
- **S7** — Token research & phân tích cơ bản (retail BSC): `data/skills/Research what retail crypto traders on BSC need wh.md`
- **S8** — Verify Beefy Finance BSC TVL (DeFiLlama): `data/skills/What is the current TVL of Beefy Finance specifica.md`
- **S9** — Verify airdrop per-user value (Binance Alpha + Earni.fi): `data/skills/What is the average airdrop value received per qua.md`
- **S10** — Verify Maestro/Banana Gun pricing model: `data/skills/What is the exact pricing model for Maestro Bot an.md`
