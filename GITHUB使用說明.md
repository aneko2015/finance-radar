# Finance Radar Lite — GitHub 使用說明

## 網站網址

```
https://aneko2015.github.io/finance-radar/
```

手機或電腦直接打開此網址即可使用。

---

## 更新網站內容

每次修改完檔案後，在 PowerShell 執行以下指令：

```powershell
cd "C:\Users\aneko_wang\OneDrive\桌面\lightweight-finance-radar"
git add .
git commit -m "更新說明"
git push
```

> 把 `"更新說明"` 換成這次改了什麼，例如 `"新增六月資料"` 或 `"修改樣式"`。

推上去後約 **1-2 分鐘**，網站自動更新。

---

## 注意事項

- 資料存在**瀏覽器的 localStorage**，每台裝置的資料是獨立的，不會自動同步。
- Repository 必須保持 **Public**，GitHub Pages 才能正常運作。
- GitHub Token 有效期限為 **90 天**，到期後需要重新建立。

---

## 重新建立 GitHub Token（Token 到期時）

1. 前往 [github.com/settings/tokens/new](https://github.com/settings/tokens/new)
2. **Note** 填入任意名稱，例如：`finance-radar`
3. **Expiration** 選 `90 days`
4. 勾選 **repo**
5. 點 **Generate token** 並複製 Token
6. 下次 `git push` 時輸入：
   - **Username**：`aneko2015`
   - **Password**：貼上新的 Token

---

## 相關連結

- GitHub Repository：[github.com/aneko2015/finance-radar](https://github.com/aneko2015/finance-radar)
- GitHub Pages 設定：Repository → Settings → Pages
