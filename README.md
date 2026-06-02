# Finance Radar Lite

這是原本 Personal Finance Radar 的輕量、優化版單頁網頁。

## 使用方式

直接用瀏覽器開啟：

```text
index.html
```

不需要 Next.js、不需要安裝套件，也不需要啟動 dev server。

## 主要功能

- 每月現金流總覽：收入、固定支出、信用卡、額外支出、結餘
- 外包收入：總額、稅率、實收、已入帳/未入帳
- 預算池：年度預算、已使用金額、使用比例
- 大額支出：依月份顯示，並同步預算池使用量
- 資產部位：依類型彙總資產分布
- 房貸壓力：月付、租金抵扣、家人分攤、我的月負擔
- JSON 匯出/匯入
- localStorage 自動保存

## 資料儲存

資料會保存在瀏覽器 localStorage：

```text
finance-radar-lite:v1
```

匯出 JSON 可以作為備份，匯入 JSON 可以還原或搬到其他瀏覽器使用。
