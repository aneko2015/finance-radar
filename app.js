const storageKey = "finance-radar-lite:2026-05";

const defaultData = {
  "selectedMonth": "2026-05",
  "cashflow": [
    {
      "month": "2026-01",
      "income": 103968,
      "fixed": 26638,
      "card": 56865,
      "extra": 1500
    },
    {
      "month": "2026-02",
      "income": 223414,
      "fixed": 25922,
      "card": 53632,
      "extra": 48300
    },
    {
      "month": "2026-03",
      "income": 99164,
      "fixed": 24799,
      "card": 60363,
      "extra": 8090
    },
    {
      "month": "2026-04",
      "income": 305085,
      "fixed": 24638,
      "card": 74351,
      "extra": 22211
    },
    {
      "month": "2026-05",
      "income": 140472,
      "fixed": 28317,
      "card": 46797,
      "extra": 61421
    },
    {
      "month": "2026-06",
      "income": 0,
      "fixed": 0,
      "card": 0,
      "extra": 0
    },
    {
      "month": "2026-07",
      "income": 0,
      "fixed": 0,
      "card": 0,
      "extra": 0
    }
  ],
  "income": [
    {
      "type": "公司",
      "project": "2026一月",
      "date": "2026-01-05",
      "gross": 61781,
      "taxRate": 0,
      "status": "已入帳"
    },
    {
      "type": "公司",
      "project": "2026二月",
      "date": "2026-02-05",
      "gross": 62426,
      "taxRate": 0,
      "status": "已入帳"
    },
    {
      "type": "公司",
      "project": "2025年終",
      "date": "2026-02-05",
      "gross": 129864,
      "taxRate": 0.05,
      "status": "已入帳"
    },
    {
      "type": "公司",
      "project": "2026三月",
      "date": "2026-03-05",
      "gross": 62426,
      "taxRate": 0,
      "status": "已入帳"
    },
    {
      "type": "公司",
      "project": "2026四月",
      "date": "2026-04-05",
      "gross": 63947,
      "taxRate": 0,
      "status": "已入帳"
    },
    {
      "type": "公司",
      "project": "2026補薪",
      "date": "2026-04-05",
      "gross": 5130,
      "taxRate": 0,
      "status": "已入帳"
    },
    {
      "type": "公司",
      "project": "2025考核",
      "date": "2026-04-05",
      "gross": 190000,
      "taxRate": 0.05,
      "status": "已入帳"
    },
    {
      "type": "公司",
      "project": "2026文化",
      "date": "2026-04-30",
      "gross": 20000,
      "taxRate": 0,
      "status": "已入帳"
    },
    {
      "type": "公司",
      "project": "2026五月",
      "date": "2026-05-05",
      "gross": 62426,
      "taxRate": 0,
      "status": "已入帳"
    },
    {
      "type": "外包",
      "project": "2025八月",
      "date": "2026-01-20",
      "gross": 48000,
      "taxRate": 0.1211,
      "status": "已入帳"
    },
    {
      "type": "外包",
      "project": "2025九月",
      "date": "2026-02-20",
      "gross": 42800,
      "taxRate": 0.1211,
      "status": "已入帳"
    },
    {
      "type": "外包",
      "project": "2025十月",
      "date": "2026-03-20",
      "gross": 41800,
      "taxRate": 0.1211,
      "status": "已入帳"
    },
    {
      "type": "外包",
      "project": "2025十一月",
      "date": "2026-04-20",
      "gross": 40400,
      "taxRate": 0.1211,
      "status": "已入帳"
    },
    {
      "type": "外包",
      "project": "2025十二月",
      "date": "2026-05-20",
      "gross": 88800,
      "taxRate": 0.1211,
      "status": "已入帳"
    }
  ],
  "pools": [
    {
      "name": "醫美整形",
      "budget": 180000,
      "used": 0,
      "color": "#9f6b6b"
    },
    {
      "name": "日常美容",
      "budget": 40000,
      "used": 0,
      "color": "#c49292"
    },
    {
      "name": "旅遊",
      "budget": 100000,
      "used": 0,
      "color": "#3b556d"
    },
    {
      "name": "人情",
      "budget": 50000,
      "used": 0,
      "color": "#b08d57"
    },
    {
      "name": "設備",
      "budget": 40000,
      "used": 0,
      "color": "#6b8f71"
    },
    {
      "name": "娛樂",
      "budget": 30000,
      "used": 0,
      "color": "#a46eaf"
    },
    {
      "name": "寵物",
      "budget": 30000,
      "used": 0,
      "color": "#7a9e7e"
    },
    {
      "name": "稅務",
      "budget": 15000,
      "used": 0,
      "color": "#888888"
    },
    {
      "name": "現金雜支",
      "budget": 20000,
      "used": 0,
      "color": "#525252"
    }
  ],
  "expenses": [
    {
      "date": "2026/01/01",
      "item": "鼻子整形",
      "pool": "醫美整形",
      "amount": 120000,
      "card": true
    },
    {
      "date": "2026/02/01",
      "item": "媽媽紅包",
      "pool": "人情",
      "amount": 12000,
      "card": false
    },
    {
      "date": "2026/02/01",
      "item": "弟妹紅包",
      "pool": "人情",
      "amount": 6000,
      "card": false
    },
    {
      "date": "2026/02/01",
      "item": "大姊生日",
      "pool": "人情",
      "amount": 10000,
      "card": false
    },
    {
      "date": "2026/02/01",
      "item": "軒軒生日",
      "pool": "人情",
      "amount": 2000,
      "card": false
    },
    {
      "date": "2026/02/01",
      "item": "嘴唇紋綉",
      "pool": "醫美整形",
      "amount": 16800,
      "card": false
    },
    {
      "date": "2026/03/01",
      "item": "漂染頭髮",
      "pool": "日常美容",
      "amount": 6590,
      "card": false
    },
    {
      "date": "2026/03/01",
      "item": "海飛秀",
      "pool": "日常美容",
      "amount": 6600,
      "card": true
    },
    {
      "date": "2026/03/01",
      "item": "水光針",
      "pool": "醫美整形",
      "amount": 9888,
      "card": true
    },
    {
      "date": "2026/04/01",
      "item": "居家整聊",
      "pool": "設備",
      "amount": 8400,
      "card": false
    },
    {
      "date": "2026/04/01",
      "item": "補色洗髮",
      "pool": "日常美容",
      "amount": 1600,
      "card": false
    },
    {
      "date": "2026/04/01",
      "item": "日料餐廳",
      "pool": "娛樂",
      "amount": 3500,
      "card": false
    },
    {
      "date": "2026/04/01",
      "item": "清酒酒吧",
      "pool": "娛樂",
      "amount": 1911,
      "card": false
    },
    {
      "date": "2026/04/01",
      "item": "稅金",
      "pool": "稅務",
      "amount": 800,
      "card": false
    },
    {
      "date": "2026/04/01",
      "item": "稅金",
      "pool": "稅務",
      "amount": 4500,
      "card": false
    },
    {
      "date": "2026/05/01",
      "item": "靖雅生日",
      "pool": "人情",
      "amount": 1780,
      "card": true
    },
    {
      "date": "2026/05/01",
      "item": "承翰生日",
      "pool": "人情",
      "amount": 4000,
      "card": false
    },
    {
      "date": "2026/05/01",
      "item": "小喔住院",
      "pool": "寵物",
      "amount": 17800,
      "card": false
    },
    {
      "date": "2026/05/01",
      "item": "小喔出院",
      "pool": "寵物",
      "amount": 36930,
      "card": false
    },
    {
      "date": "2026/05/01",
      "item": "龍潭聚餐",
      "pool": "娛樂",
      "amount": 1191,
      "card": false
    },
    {
      "date": "2026/05/01",
      "item": "恆美學",
      "pool": "醫美整形",
      "amount": 26680,
      "card": true
    },
    {
      "date": "2026/04/01",
      "item": "加拿大之旅",
      "pool": "旅遊",
      "amount": 40000,
      "card": true
    },
    {
      "date": "2026/01/01",
      "item": "現金雜支",
      "pool": "現金雜支",
      "amount": 1500,
      "card": false
    },
    {
      "date": "2026/02/01",
      "item": "現金雜支",
      "pool": "現金雜支",
      "amount": 1500,
      "card": false
    },
    {
      "date": "2026/03/01",
      "item": "現金雜支",
      "pool": "現金雜支",
      "amount": 1500,
      "card": false
    },
    {
      "date": "2026/04/01",
      "item": "現金雜支",
      "pool": "現金雜支",
      "amount": 1500,
      "card": false
    },
    {
      "date": "2026/05/01",
      "item": "現金雜支",
      "pool": "現金雜支",
      "amount": 1500,
      "card": false
    }
  ],
  "assets": [
    {
      "account": "第一數位",
      "type": "現金",
      "amount": 120000
    },
    {
      "account": "將來數位",
      "type": "現金",
      "amount": 300000
    },
    {
      "account": "永豐大戶",
      "type": "現金",
      "amount": 300000
    },
    {
      "account": "國泰薪轉",
      "type": "現金",
      "amount": 300000
    },
    {
      "account": "股票部位",
      "type": "股票投資",
      "amount": 400000
    },
    {
      "account": "加幣投資",
      "type": "外幣投資",
      "amount": 328000
    },
    {
      "account": "酩響日料",
      "type": "店面投資",
      "amount": 750000
    }
  ],
  "mortgage": {
    "payment": 19000,
    "rentOffset": 10000,
    "familyShare": 4500
  },
  "fixedEssential": [
    { "name": "房租",   "amount": 10000 },
    { "name": "電信網路", "amount": 1203 },
    { "name": "水電瓦斯", "amount": 979 },
    { "name": "保單",   "amount": 8710 },
    { "name": "房貸",   "amount": 4830 },
    { "name": "伙食",   "amount": 19500 }
  ],
  "fixedSub": [
    { "name": "Google One-AN",  "amount": 75 },
    { "name": "Google One-DP",  "amount": 275 },
    { "name": "ChatGPT",        "amount": 690 },
    { "name": "FoodPanda",      "amount": 119 },
    { "name": "TickTick",       "amount": 73 },
    { "name": "Craft",          "amount": 249 },
    { "name": "Steps",          "amount": 0 },
    { "name": "國際特赦組織",   "amount": 1800 },
    { "name": "健身工廠",       "amount": 1288 },
    { "name": "Claude",         "amount": 690 }
  ]
};

let state = loadState();

const formatter = new Intl.NumberFormat("zh-TW", {
  style: "currency",
  currency: "TWD",
  maximumFractionDigits: 0,
});

const $ = (selector) => document.querySelector(selector);

function money(value) {
  return formatter.format(Number(value) || 0);
}

function numberValue(value) {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : 0;
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    if (saved && Array.isArray(saved.cashflow)) {
      if (!saved.fixedEssential) saved.fixedEssential = structuredClone(defaultData.fixedEssential);
      if (!saved.fixedSub)       saved.fixedSub       = structuredClone(defaultData.fixedSub);
      return saved;
    }
    return structuredClone(defaultData);
  } catch {
    return structuredClone(defaultData);
  }
}

let saveToastTimer = null;

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
  const toast = $("#saveToast");
  toast.classList.add("visible");
  clearTimeout(saveToastTimer);
  saveToastTimer = setTimeout(() => toast.classList.remove("visible"), 1800);
}

function currentCashflow() {
  return (
    state.cashflow.find((row) => row.month === state.selectedMonth) ||
    state.cashflow[state.cashflow.length - 1]
  );
}

function cashflowBalance(row) {
  return row.income - row.fixed - row.card - row.extra;
}

function sameMonth(date, month) {
  return String(date).replaceAll("/", "-").startsWith(month);
}

function render() {
  syncDerivedData();
  renderMonthSelect();
  renderOverview();
  renderFixed();
  renderCashflow();
  renderIncome();
  renderSpending();
  renderAssets();
  renderMortgage();
  saveState();
}

function syncDerivedData() {
  const incomeByMonth = new Map();
  for (const row of state.income) {
    const month = String(row.date).replaceAll("/", "-").slice(0, 7);
    const net = row.gross * (1 - row.taxRate);
    incomeByMonth.set(month, (incomeByMonth.get(month) || 0) + net);
  }

  const cashExtraByMonth = new Map();
  for (const expense of state.expenses) {
    if (expense.card) continue;
    const month = String(expense.date).replaceAll("/", "-").slice(0, 7);
    cashExtraByMonth.set(month, (cashExtraByMonth.get(month) || 0) + expense.amount);
  }

  for (const row of state.cashflow) {
    if (incomeByMonth.has(row.month)) row.income = Math.round(incomeByMonth.get(row.month));
    row.extra = cashExtraByMonth.get(row.month) || row.extra || 0;
  }

  for (const pool of state.pools) {
    pool.used = state.expenses
      .filter((expense) => expense.pool === pool.name)
      .reduce((sum, expense) => sum + expense.amount, 0);
  }
}

function renderMonthSelect() {
  const select = $("#monthSelect");
  select.innerHTML = state.cashflow
    .map((row) => `<option value="${row.month}">${row.month}</option>`)
    .join("");
  select.value = state.selectedMonth;
}

function renderOverview() {
  const row = currentCashflow();
  const balance = cashflowBalance(row);

  $("#metricIncome").textContent = money(row.income);
  $("#metricFixed").textContent = money(row.fixed);
  $("#metricCard").textContent = money(row.card);
  $("#metricBalance").textContent = money(balance);
  $("#metricBalance").className = balance < 0 ? "danger" : "";

  const pendingIncome = state.income
    .filter((item) => item.status === "未入帳")
    .reduce((sum, item) => sum + item.gross * (1 - item.taxRate), 0);
  const selectedExpenses = state.expenses.filter((item) => sameMonth(item.date, state.selectedMonth));
  const selectedExpenseTotal = selectedExpenses.reduce((sum, item) => sum + item.amount, 0);
  const tightPools = state.pools.filter((pool) => pool.budget > 0 && pool.used / pool.budget >= 0.75);

  const attention = [
    { label: "未入帳收入", value: money(pendingIncome), tone: pendingIncome > 0 ? "warning" : "" },
    { label: "本月大額支出", value: `${selectedExpenses.length} 筆 / ${money(selectedExpenseTotal)}` },
    ...tightPools.map((pool) => ({
      label: `${pool.name} 預算使用偏高`,
      value: `${Math.round((pool.used / pool.budget) * 100)}%`,
      tone: "warning",
    })),
  ];

  $("#attentionCount").textContent = String(attention.length);
  $("#attentionList").innerHTML = attention
    .map(
      (item) => `
        <div class="attention-item">
          <span>${item.label}</span>
          <strong class="${item.tone || ""}">${item.value}</strong>
        </div>
      `
    )
    .join("");

  const assetsByType = groupAssets();
  const assetTotal = assetsByType.reduce((sum, item) => sum + item.amount, 0);
  $("#assetTotal").textContent = money(assetTotal);
  $("#assetBars").innerHTML = assetsByType
    .slice(0, 5)
    .map((item) => {
      const percent = assetTotal > 0 ? (item.amount / assetTotal) * 100 : 0;
      return `
        <div class="bar-row">
          <div class="bar-meta">
            <span>${item.type}</span>
            <strong>${money(item.amount)}</strong>
          </div>
          <div class="bar-track"><div class="bar-fill" style="width:${percent}%"></div></div>
        </div>
      `;
    })
    .join("");
}

function renderCashflow() {
  $("#cashflowRows").innerHTML = state.cashflow
    .map(
      (row, index) => `
        <tr>
          <td><input class="table-input" type="month" value="${row.month}" data-cash="${index}" data-field="month"></td>
          <td><input class="table-input number" type="number" min="0" step="500" value="${row.income}" data-cash="${index}" data-field="income"></td>
          <td><input class="table-input number" type="number" min="0" step="500" value="${row.fixed}" data-cash="${index}" data-field="fixed"></td>
          <td><input class="table-input number" type="number" min="0" step="500" value="${row.card}" data-cash="${index}" data-field="card"></td>
          <td><input class="table-input number" type="number" min="0" step="500" value="${row.extra}" data-cash="${index}" data-field="extra"></td>
          <td><strong class="${cashflowBalance(row) < 0 ? "danger" : ""}">${money(cashflowBalance(row))}</strong></td>
        </tr>
      `
    )
    .join("");
}

function renderIncome() {
  const filtered = state.income
    .map((row, index) => ({ row, index }))
    .filter(({ row }) => sameMonth(row.date, state.selectedMonth));
  const last = filtered.length - 1;

  if (filtered.length === 0) {
    $("#incomeRows").innerHTML = `<tr><td colspan="8" style="text-align:center;color:var(--muted);padding:24px 0">這個月還沒有收入紀錄。</td></tr>`;
    return;
  }

  $("#incomeRows").innerHTML = filtered
    .map(({ row, index }, i) => {
      const net = row.gross * (1 - row.taxRate);
      const type = row.type ?? "公司";
      return `
        <tr>
          <td>
            <select class="table-input" data-income="${index}" data-field="type">
              <option ${type === "公司" ? "selected" : ""}>公司</option>
              <option ${type === "外包" ? "selected" : ""}>外包</option>
              <option ${type === "額外" ? "selected" : ""}>額外</option>
            </select>
          </td>
          <td><input class="table-input" value="${row.project}" data-income="${index}" data-field="project"></td>
          <td><input class="table-input" type="date" value="${String(row.date).replaceAll("/", "-")}" data-income="${index}" data-field="date"></td>
          <td><input class="table-input number" type="number" min="0" step="500" value="${row.gross}" data-income="${index}" data-field="gross"></td>
          <td><input class="table-input number" type="number" min="0" max="100" step="1" value="${row.taxRate * 100}" data-income="${index}" data-field="taxRate"></td>
          <td><strong>${money(net)}</strong></td>
          <td>
            <select class="table-input" data-income="${index}" data-field="status">
              <option ${row.status === "已入帳" ? "selected" : ""}>已入帳</option>
              <option ${row.status === "未入帳" ? "selected" : ""}>未入帳</option>
            </select>
          </td>
          <td>
            <div class="action-cell">
              <button class="row-btn" data-income-action="up" data-income-index="${index}" ${i === 0 ? "disabled" : ""} title="上移">↑</button>
              <button class="row-btn" data-income-action="down" data-income-index="${index}" ${i === last ? "disabled" : ""} title="下移">↓</button>
              <button class="row-btn danger" data-income-action="delete" data-income-index="${index}" title="刪除">✕</button>
            </div>
          </td>
        </tr>
      `;
    })
    .join("");
}

function renderSpending() {
  const selectedExpenses = state.expenses
    .map((item, index) => ({ item, index }))
    .filter(({ item }) => sameMonth(item.date, state.selectedMonth));
  const selectedExpenseTotal = selectedExpenses.reduce((sum, { item }) => sum + item.amount, 0);
  $("#expenseTotal").textContent = money(selectedExpenseTotal);

  $("#poolList").innerHTML = state.pools
    .map((pool, index) => {
      const rawPct = pool.budget > 0 ? (pool.used / pool.budget) * 100 : 0;
      const barPct = Math.min(rawPct, 100);
      const pctTone = rawPct >= 100 ? "danger" : rawPct >= 75 ? "warning" : "muted";
      return `
        <div class="pool-row">
          <span class="pool-dot" style="background:${pool.color}"></span>
          <input class="table-input pool-name" value="${pool.name}" data-pool="${index}" data-field="name">
          <div class="pool-bar-wrap">
            <div class="bar-track"><div class="bar-fill" style="width:${barPct}%; background:${pool.color}"></div></div>
          </div>
          <span class="pool-stat">已用 ${money(pool.used)}</span>
          <input class="table-input number pool-budget" type="number" min="0" step="500" value="${pool.budget}" data-pool="${index}" data-field="budget">
          <span class="pool-pct ${pctTone}">${Math.round(rawPct)}%</span>
        </div>
      `;
    })
    .join("");

  const quarterCap = 150000;
  const currentQtr = Math.floor((parseInt(state.selectedMonth.split("-")[1]) - 1) / 3);
  const quarters = [
    { label: "Q1 1–3月", months: ["01", "02", "03"] },
    { label: "Q2 4–6月", months: ["04", "05", "06"] },
    { label: "Q3 7–9月", months: ["07", "08", "09"] },
    { label: "Q4 10–12月", months: ["10", "11", "12"] },
  ].map((q, qi) => {
    const spent = state.expenses
      .filter((e) => q.months.includes(String(e.date).replaceAll("/", "-").slice(5, 7)))
      .reduce((sum, e) => sum + e.amount, 0);
    const rawPct = (spent / quarterCap) * 100;
    const barPct = Math.min(rawPct, 100);
    const tone = spent >= quarterCap ? "danger" : spent >= quarterCap * 0.85 ? "warning" : "";
    return { ...q, spent, rawPct, barPct, tone, isCurrent: qi === currentQtr };
  });
  const annualCap = quarterCap * 4;
  const annualSpent = quarters.reduce((sum, q) => sum + q.spent, 0);
  const annualPct = Math.round((annualSpent / annualCap) * 100);
  const annualRemaining = annualCap - annualSpent;
  const annualTone = annualRemaining < 0 ? "danger" : annualPct >= 85 ? "warning" : "";

  $("#poolCapSummary").innerHTML = `
    <div class="pool-cap-quarters">
      <p class="pool-cap-title">每季大型支出上限 ${money(quarterCap)}</p>
      ${quarters.map((q) => `
        <div class="pool-cap-qrow${q.isCurrent ? " is-current-q" : ""}">
          <span class="pool-cap-qlabel">${q.label}</span>
          <div class="bar-track" style="flex:1">
            <div class="bar-fill${q.tone ? " bar-" + q.tone : ""}" style="width:${q.barPct}%"></div>
          </div>
          <span class="pool-cap-pct ${q.tone}">${Math.round(q.rawPct)}%</span>
          <strong class="${q.tone}">${money(q.spent)}</strong>
        </div>
      `).join("")}
      <p class="pool-cap-annual-note ${annualTone}">
        全年花費 ${annualPct}%・${annualRemaining >= 0 ? "剩餘 " + money(annualRemaining) + " 可使用" : "已超出 " + money(-annualRemaining)}
      </p>
    </div>
  `;

  const poolOptions = state.pools.map((p) => p.name);

  $("#expenseRows").innerHTML =
    selectedExpenses.length === 0
      ? `<p class="brand-subtitle">這個月還沒有大額支出。</p>`
      : selectedExpenses
          .map(
            ({ item: expense, index }) => `
              <div class="expense-edit-item">
                <div class="expense-row-top">
                  <input class="table-input expense-name" value="${expense.item.replace(/"/g, '&quot;')}" data-expense="${index}" data-field="item" placeholder="名稱">
                  <input class="table-input number expense-amount" type="number" min="0" step="500" value="${expense.amount}" data-expense="${index}" data-field="amount">
                  <button class="row-btn danger" data-expense-del="${index}" title="刪除">✕</button>
                </div>
                <div class="expense-row-bottom">
                  <input class="table-input expense-date" type="date" value="${String(expense.date).replaceAll("/", "-")}" data-expense="${index}" data-field="date">
                  <select class="table-input expense-pool" data-expense="${index}" data-field="pool">
                    ${poolOptions.map((p) => `<option ${p === expense.pool ? "selected" : ""}>${p}</option>`).join("")}
                  </select>
                  <label class="card-check">
                    <input type="checkbox" data-expense="${index}" data-field="card" ${expense.card ? "checked" : ""}> 刷卡
                  </label>
                </div>
              </div>
            `
          )
          .join("");
}

function renderAssets() {
  $("#assetRows").innerHTML = state.assets
    .map(
      (asset, index) => `
        <tr>
          <td><input class="table-input" value="${asset.account}" data-asset="${index}" data-field="account"></td>
          <td><input class="table-input" value="${asset.type}" data-asset="${index}" data-field="type"></td>
          <td><input class="table-input number" type="number" min="0" step="500" value="${asset.amount}" data-asset="${index}" data-field="amount"></td>
        </tr>
      `
    )
    .join("");
}

function renderFixed() {
  function renderGroup(items, containerId, groupKey) {
    $(containerId).innerHTML = items.map((item, i) => `
      <div class="fixed-item">
        <input class="table-input fixed-name" type="text"
               value="${item.name.replace(/&/g,'&amp;').replace(/"/g,'&quot;')}"
               data-fgroup="${groupKey}" data-fi="${i}" data-field="name" />
        <input class="table-input number fixed-amount" type="number" min="0" step="100"
               value="${item.amount}" data-fgroup="${groupKey}" data-fi="${i}" data-field="amount" />
        <button class="row-btn danger" data-fgroup="${groupKey}" data-fdel="${i}" title="刪除">✕</button>
      </div>
    `).join('');
    return items.reduce((s, item) => s + (item.amount || 0), 0);
  }

  const eTotal = renderGroup(state.fixedEssential, '#essentialList', 'ess');
  const sTotal = renderGroup(state.fixedSub, '#subList', 'sub');
  $('#fixedEssentialTotal').textContent = money(eTotal);
  $('#fixedSubTotal').textContent = money(sTotal);
  $('#fixedGrandTotal').textContent = money(eTotal + sTotal);
}

function renderMortgage() {
  $("#mortgagePayment").value = state.mortgage.payment;
  $("#rentOffset").value = state.mortgage.rentOffset;
  $("#familyShare").value = state.mortgage.familyShare;
  const burden = Math.max(
    state.mortgage.payment - state.mortgage.rentOffset - state.mortgage.familyShare,
    0
  );
  $("#mortgageBurden").textContent = money(burden);
}

function groupAssets() {
  const map = new Map();
  for (const asset of state.assets) {
    map.set(asset.type, (map.get(asset.type) || 0) + asset.amount);
  }
  return Array.from(map, ([type, amount]) => ({ type, amount })).sort(
    (a, b) => b.amount - a.amount
  );
}

function nextMonth(month) {
  const [year, rawMonth] = month.split("-").map(Number);
  const date = new Date(year, rawMonth, 1);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
}

document.addEventListener("click", (event) => {
  const btn = event.target.closest("[data-income-action]");
  if (!btn) return;

  const index = Number(btn.dataset.incomeIndex);
  const action = btn.dataset.incomeAction;

  if (action === "delete") {
    state.income.splice(index, 1);
    render();
  } else if (action === "up" && index > 0) {
    [state.income[index - 1], state.income[index]] = [state.income[index], state.income[index - 1]];
    render();
  } else if (action === "down" && index < state.income.length - 1) {
    [state.income[index], state.income[index + 1]] = [state.income[index + 1], state.income[index]];
    render();
  }
});

document.addEventListener("change", (event) => {
  const target = event.target;

  if (target.id === "monthSelect") {
    state.selectedMonth = target.value;
    render();
  }

  if (target.dataset.cash) {
    const row = state.cashflow[Number(target.dataset.cash)];
    const field = target.dataset.field;
    const oldMonth = row.month;
    row[field] = field === "month" ? target.value : numberValue(target.value);
    if (field === "month" && state.selectedMonth === oldMonth) state.selectedMonth = target.value;
    render();
  }

  if (target.dataset.income) {
    const row = state.income[Number(target.dataset.income)];
    const field = target.dataset.field;
    row[field] =
      field === "gross" ? numberValue(target.value) : field === "taxRate" ? numberValue(target.value) / 100 : target.value;
    render();
  }

  if (target.dataset.pool) {
    const row = state.pools[Number(target.dataset.pool)];
    const oldName = row.name;
    const field = target.dataset.field;
    row[field] = field === "budget" ? numberValue(target.value) : target.value;
    if (field === "name") {
      state.expenses.forEach((expense) => {
        if (expense.pool === oldName) expense.pool = row.name;
      });
    }
    render();
  }

  if (target.dataset.expense !== undefined) {
    const row = state.expenses[Number(target.dataset.expense)];
    const field = target.dataset.field;
    if (field === "amount") row.amount = numberValue(target.value);
    else if (field === "card") row.card = target.checked;
    else if (field === "date") row.date = target.value.replaceAll("-", "/");
    else row[field] = target.value;
    render();
  }

  if (target.dataset.fgroup) {
    const arr = target.dataset.fgroup === 'ess' ? state.fixedEssential : state.fixedSub;
    const i = Number(target.dataset.fi);
    arr[i][target.dataset.field] = target.dataset.field === 'amount' ? numberValue(target.value) : target.value;
    renderFixed();
    saveState();
  }

  if (target.dataset.asset) {
    const row = state.assets[Number(target.dataset.asset)];
    const field = target.dataset.field;
    row[field] = field === "amount" ? numberValue(target.value) : target.value;
    render();
  }
});

$("#mortgagePayment").addEventListener("input", (event) => {
  state.mortgage.payment = numberValue(event.target.value);
  render();
});

$("#rentOffset").addEventListener("input", (event) => {
  state.mortgage.rentOffset = numberValue(event.target.value);
  render();
});

$("#familyShare").addEventListener("input", (event) => {
  state.mortgage.familyShare = numberValue(event.target.value);
  render();
});

document.addEventListener("click", (event) => {
  const btn = event.target.closest("[data-fdel]");
  if (!btn) return;
  const arr = btn.dataset.fgroup === "ess" ? state.fixedEssential : state.fixedSub;
  arr.splice(Number(btn.dataset.fdel), 1);
  renderFixed();
  saveState();
});

document.addEventListener("click", (event) => {
  const btn = event.target.closest("[data-expense-del]");
  if (!btn) return;
  state.expenses.splice(Number(btn.dataset.expenseDel), 1);
  render();
});

const suggestedBudgets = {
  "醫美整形": 150000,
  "日常美容":  50000,
  "旅遊":     120000,
  "人情":      60000,
  "設備":      30000,
  "娛樂":      50000,
  "寵物":      80000,
  "稅務":      20000,
  "現金雜支":  40000,
};

$("#applyBudgetBtn").addEventListener("click", () => {
  if (!confirm("套用建議配額？這只會更新各池子的預算上限，不影響支出紀錄。")) return;
  state.pools.forEach((pool) => {
    if (suggestedBudgets[pool.name] !== undefined) pool.budget = suggestedBudgets[pool.name];
  });
  render();
});

$("#addEssentialBtn").addEventListener("click", () => {
  state.fixedEssential.push({ name: "新項目", amount: 0 });
  renderFixed();
  saveState();
});

$("#addSubBtn").addEventListener("click", () => {
  state.fixedSub.push({ name: "新項目", amount: 0 });
  renderFixed();
  saveState();
});

$("#addMonthBtn").addEventListener("click", () => {
  const last = state.cashflow[state.cashflow.length - 1];
  const month = nextMonth(last.month);
  state.cashflow.push({ month, income: 0, fixed: last.fixed, card: 0, extra: 0 });
  state.selectedMonth = month;
  render();
});

$("#addIncomeBtn").addEventListener("click", () => {
  state.income.push({
    type: "外包",
    project: "新專案",
    date: `${state.selectedMonth}-01`,
    gross: 0,
    taxRate: 0.1,
    status: "未入帳",
  });
  render();
});

$("#addPoolBtn").addEventListener("click", () => {
  state.pools.push({ name: "新預算", budget: 0, used: 0, color: "#2f6654" });
  render();
});

$("#addExpenseBtn").addEventListener("click", () => {
  state.expenses.push({
    date: `${state.selectedMonth.replace("-", "/")}/01`,
    item: "新支出",
    pool: state.pools[0]?.name || "未分類",
    amount: 0,
    card: false,
  });
  render();
});

$("#addAssetBtn").addEventListener("click", () => {
  state.assets.push({ account: "新資產", type: "現金", amount: 0 });
  render();
});

$("#exportBtn").addEventListener("click", () => {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `finance-radar-lite-${state.selectedMonth}.json`;
  link.click();
  URL.revokeObjectURL(url);
});

$("#importBtn").addEventListener("click", () => $("#importFile").click());

$("#importFile").addEventListener("change", async (event) => {
  const file = event.target.files?.[0];
  if (!file) return;

  try {
    const imported = JSON.parse(await file.text());
    if (!Array.isArray(imported.cashflow)) throw new Error("invalid payload");
    state = imported;
    render();
  } catch {
    alert("匯入失敗，請確認 JSON 格式是否正確。");
  } finally {
    event.target.value = "";
  }
});

$("#resetBtn").addEventListener("click", () => {
  if (!confirm("確定要重置輕量版示範資料？")) return;
  state = structuredClone(defaultData);
  render();
});

render();

const navLinks = document.querySelectorAll(".nav-link");

const nav = document.querySelector(".nav");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => link.classList.remove("active"));
      const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
      if (active) {
        active.classList.add("active");
        // On mobile (horizontal nav), scroll active item into view
        if (nav && window.innerWidth <= 980) {
          active.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
        }
      }
    });
  },
  { rootMargin: "0px 0px -85% 0px" }
);

document.querySelectorAll("section[id]").forEach((s) => sectionObserver.observe(s));

// Hide nav fade mask when scrolled to the end
if (nav) {
  nav.addEventListener("scroll", () => {
    const atEnd = nav.scrollLeft + nav.clientWidth >= nav.scrollWidth - 4;
    nav.style.setProperty(
      "-webkit-mask-image",
      atEnd ? "none" : "linear-gradient(to right, black calc(100% - 40px), transparent 100%)"
    );
    nav.style.setProperty(
      "mask-image",
      atEnd ? "none" : "linear-gradient(to right, black calc(100% - 40px), transparent 100%)"
    );
  }, { passive: true });
}
