/* ===========================================================
   madeeasy — weight journal
   Real logged data, calculations, rendering, charts, log form
   =========================================================== */

// ---------------------------------------------------------------
// Config
// ---------------------------------------------------------------
const KCAL_PER_KG = 7700;
const GOAL_WEIGHT = 62.0;
const HEIGHT_CM = 157;
const START_WEIGHT = 71.3;
const SAFE_KG_PER_WEEK = 0.6;
const EAT_SHARE_OF_DEFICIT = 0.35;
const BURN_SHARE_OF_DEFICIT = 0.65;
const USER_NAME = 'Riti';

// ---------------------------------------------------------------
// Data — 79 days logged from the paper calendars, Jun 8 – Aug 25 2026
// ---------------------------------------------------------------
let DATA = [{"date": "2026-06-08", "breakfast": 290, "lunch": 300, "dinner": 480, "snacks": 1070, "eaten": 2140, "exerciseBurn": 250, "burned": 1828, "net": 312, "weight": 71.3, "vacay": false}, {"date": "2026-06-09", "breakfast": 320, "lunch": 650, "dinner": 380, "snacks": 330, "eaten": 1680, "exerciseBurn": 200, "burned": 1010, "net": 670, "weight": null, "vacay": false}, {"date": "2026-06-10", "breakfast": 230, "lunch": 750, "dinner": 760, "snacks": 270, "eaten": 2010, "exerciseBurn": 300, "burned": 1802, "net": 208, "weight": null, "vacay": false}, {"date": "2026-06-11", "breakfast": 240, "lunch": 490, "dinner": 780, "snacks": 0, "eaten": 1510, "exerciseBurn": 325, "burned": 1420, "net": 90, "weight": null, "vacay": false}, {"date": "2026-06-12", "breakfast": 370, "lunch": 250, "dinner": 770, "snacks": 360, "eaten": 1750, "exerciseBurn": 150, "burned": 1125, "net": 625, "weight": null, "vacay": false}, {"date": "2026-06-13", "breakfast": 230, "lunch": 750, "dinner": 710, "snacks": 200, "eaten": 1890, "exerciseBurn": 275, "burned": 1803, "net": 87, "weight": null, "vacay": false}, {"date": "2026-06-14", "breakfast": 280, "lunch": 800, "dinner": 540, "snacks": 180, "eaten": 1800, "exerciseBurn": 250, "burned": 1771, "net": 29, "weight": null, "vacay": false}, {"date": "2026-06-15", "breakfast": 600, "lunch": 500, "dinner": 810, "snacks": 990, "eaten": 2410, "exerciseBurn": null, "burned": 1705, "net": 705, "weight": 70.9, "vacay": false}, {"date": "2026-06-16", "breakfast": 230, "lunch": 530, "dinner": 510, "snacks": 130, "eaten": 1400, "exerciseBurn": null, "burned": 1688, "net": -288, "weight": null, "vacay": false}, {"date": "2026-06-17", "breakfast": 340, "lunch": 600, "dinner": 550, "snacks": 385, "eaten": 1875, "exerciseBurn": null, "burned": 1710, "net": 165, "weight": null, "vacay": false}, {"date": "2026-06-18", "breakfast": 90, "lunch": 450, "dinner": 410, "snacks": 480, "eaten": 1430, "exerciseBurn": null, "burned": 1510, "net": -80, "weight": null, "vacay": false}, {"date": "2026-06-19", "breakfast": 320, "lunch": 500, "dinner": 300, "snacks": 430, "eaten": 1550, "exerciseBurn": null, "burned": 1442, "net": 108, "weight": null, "vacay": false}, {"date": "2026-06-20", "breakfast": 450, "lunch": 810, "dinner": 0, "snacks": 140, "eaten": 1400, "exerciseBurn": null, "burned": 1840, "net": -440, "weight": null, "vacay": false}, {"date": "2026-06-21", "breakfast": 750, "lunch": 250, "dinner": 520, "snacks": 160, "eaten": 1680, "exerciseBurn": null, "burned": 1830, "net": -150, "weight": null, "vacay": false}, {"date": "2026-06-22", "breakfast": 290, "lunch": 650, "dinner": 350, "snacks": 480, "eaten": 1970, "exerciseBurn": null, "burned": 1716, "net": 254, "weight": 70.5, "vacay": false}, {"date": "2026-06-23", "breakfast": 420, "lunch": 600, "dinner": 270, "snacks": 300, "eaten": 1590, "exerciseBurn": null, "burned": 1708, "net": -118, "weight": null, "vacay": false}, {"date": "2026-06-24", "breakfast": 400, "lunch": 320, "dinner": 720, "snacks": 260, "eaten": 1700, "exerciseBurn": null, "burned": 1618, "net": 82, "weight": null, "vacay": false}, {"date": "2026-06-25", "breakfast": 230, "lunch": 540, "dinner": 840, "snacks": 90, "eaten": 1700, "exerciseBurn": null, "burned": 1774, "net": -74, "weight": null, "vacay": false}, {"date": "2026-06-26", "breakfast": 380, "lunch": 680, "dinner": 640, "snacks": 780, "eaten": 2680, "exerciseBurn": null, "burned": 1800, "net": 880, "weight": null, "vacay": true}, {"date": "2026-06-27", "breakfast": 800, "lunch": 410, "dinner": 700, "snacks": 1210, "eaten": 3120, "exerciseBurn": null, "burned": 2085, "net": 1035, "weight": null, "vacay": true}, {"date": "2026-06-28", "breakfast": 960, "lunch": 790, "dinner": 700, "snacks": 130, "eaten": 2530, "exerciseBurn": null, "burned": 1596, "net": 934, "weight": null, "vacay": true}, {"date": "2026-06-29", "breakfast": 110, "lunch": 650, "dinner": 420, "snacks": 570, "eaten": 1750, "exerciseBurn": null, "burned": 1666, "net": 84, "weight": 71.6, "vacay": false}, {"date": "2026-06-30", "breakfast": 180, "lunch": 530, "dinner": 650, "snacks": 100, "eaten": 1540, "exerciseBurn": null, "burned": 1887, "net": -347, "weight": null, "vacay": false}, {"date": "2026-07-01", "breakfast": 430, "lunch": 470, "dinner": 680, "snacks": 240, "eaten": 1820, "exerciseBurn": null, "burned": 1046, "net": 774, "weight": null, "vacay": false}, {"date": "2026-07-02", "breakfast": 180, "lunch": 520, "dinner": 900, "snacks": 270, "eaten": 1870, "exerciseBurn": null, "burned": 1795, "net": 75, "weight": null, "vacay": false}, {"date": "2026-07-03", "breakfast": 725, "lunch": 650, "dinner": 650, "snacks": 25, "eaten": 2050, "exerciseBurn": null, "burned": 1657, "net": 393, "weight": null, "vacay": false}, {"date": "2026-07-04", "breakfast": 400, "lunch": 500, "dinner": 560, "snacks": 580, "eaten": 2040, "exerciseBurn": null, "burned": 1761, "net": 279, "weight": null, "vacay": false}, {"date": "2026-07-05", "breakfast": 240, "lunch": 510, "dinner": 845, "snacks": 120, "eaten": 1715, "exerciseBurn": null, "burned": 2099, "net": -384, "weight": null, "vacay": false}, {"date": "2026-07-06", "breakfast": 370, "lunch": 600, "dinner": 430, "snacks": 120, "eaten": 1520, "exerciseBurn": null, "burned": 1563, "net": -43, "weight": 70.65, "vacay": false}, {"date": "2026-07-07", "breakfast": 300, "lunch": 600, "dinner": 600, "snacks": 620, "eaten": 2120, "exerciseBurn": null, "burned": 1689, "net": 431, "weight": null, "vacay": false}, {"date": "2026-07-08", "breakfast": 310, "lunch": 410, "dinner": 570, "snacks": 500, "eaten": 1790, "exerciseBurn": null, "burned": 1839, "net": -49, "weight": null, "vacay": false}, {"date": "2026-07-09", "breakfast": 240, "lunch": 700, "dinner": 350, "snacks": 695, "eaten": 1965, "exerciseBurn": null, "burned": 1844, "net": 121, "weight": null, "vacay": false}, {"date": "2026-07-10", "breakfast": 330, "lunch": 600, "dinner": 620, "snacks": 60, "eaten": 1610, "exerciseBurn": null, "burned": 1494, "net": 116, "weight": null, "vacay": false}, {"date": "2026-07-11", "breakfast": 350, "lunch": 450, "dinner": 600, "snacks": 0, "eaten": 1400, "exerciseBurn": null, "burned": 1585, "net": -185, "weight": null, "vacay": false}, {"date": "2026-07-12", "breakfast": 490, "lunch": 0, "dinner": 850, "snacks": 300, "eaten": 1640, "exerciseBurn": null, "burned": 1700, "net": -60, "weight": null, "vacay": false}, {"date": "2026-07-13", "breakfast": 390, "lunch": 600, "dinner": 730, "snacks": 650, "eaten": 2370, "exerciseBurn": null, "burned": 1846, "net": 524, "weight": 70.9, "vacay": false}, {"date": "2026-07-14", "breakfast": 250, "lunch": 500, "dinner": 450, "snacks": 450, "eaten": 1650, "exerciseBurn": null, "burned": 1645, "net": 5, "weight": null, "vacay": false}, {"date": "2026-07-15", "breakfast": 490, "lunch": 450, "dinner": 600, "snacks": 330, "eaten": 1870, "exerciseBurn": null, "burned": 1379, "net": 491, "weight": null, "vacay": false}, {"date": "2026-07-16", "breakfast": 560, "lunch": 300, "dinner": 700, "snacks": 290, "eaten": 1850, "exerciseBurn": null, "burned": 1398, "net": 452, "weight": null, "vacay": false}, {"date": "2026-07-17", "breakfast": 355, "lunch": 700, "dinner": 680, "snacks": 195, "eaten": 2030, "exerciseBurn": null, "burned": 1759, "net": 271, "weight": null, "vacay": false}, {"date": "2026-07-18", "breakfast": 220, "lunch": 280, "dinner": 500, "snacks": 230, "eaten": 1230, "exerciseBurn": null, "burned": 1668, "net": -438, "weight": null, "vacay": false}, {"date": "2026-07-19", "breakfast": 0, "lunch": 700, "dinner": 650, "snacks": 275, "eaten": 1625, "exerciseBurn": null, "burned": 1793, "net": -168, "weight": null, "vacay": false}, {"date": "2026-07-20", "breakfast": 215, "lunch": 500, "dinner": 570, "snacks": 590, "eaten": 1875, "exerciseBurn": null, "burned": 1763, "net": 112, "weight": 70.4, "vacay": false}, {"date": "2026-07-21", "breakfast": 415, "lunch": 400, "dinner": 590, "snacks": 30, "eaten": 1435, "exerciseBurn": null, "burned": 1816, "net": -381, "weight": null, "vacay": false}, {"date": "2026-07-22", "breakfast": 180, "lunch": 640, "dinner": 660, "snacks": 175, "eaten": 1655, "exerciseBurn": null, "burned": 1651, "net": 4, "weight": null, "vacay": false}, {"date": "2026-07-23", "breakfast": 180, "lunch": 430, "dinner": 570, "snacks": 190, "eaten": 1370, "exerciseBurn": null, "burned": 1772, "net": -402, "weight": null, "vacay": false}, {"date": "2026-07-24", "breakfast": 300, "lunch": 340, "dinner": 890, "snacks": 0, "eaten": 1530, "exerciseBurn": null, "burned": 1700, "net": -170, "weight": null, "vacay": false}, {"date": "2026-07-25", "breakfast": 420, "lunch": 240, "dinner": 805, "snacks": 375, "eaten": 1890, "exerciseBurn": null, "burned": 1693, "net": 197, "weight": null, "vacay": false}, {"date": "2026-07-26", "breakfast": 0, "lunch": 550, "dinner": 975, "snacks": 0, "eaten": 1525, "exerciseBurn": null, "burned": 1816, "net": -291, "weight": null, "vacay": false}, {"date": "2026-07-27", "breakfast": 180, "lunch": 850, "dinner": 650, "snacks": 380, "eaten": 2060, "exerciseBurn": null, "burned": 1573, "net": 487, "weight": 70.8, "vacay": false}, {"date": "2026-07-28", "breakfast": 180, "lunch": 650, "dinner": 1150, "snacks": 0, "eaten": 1980, "exerciseBurn": null, "burned": 1848, "net": 132, "weight": null, "vacay": false}, {"date": "2026-07-29", "breakfast": 0, "lunch": 600, "dinner": 450, "snacks": 650, "eaten": 1700, "exerciseBurn": null, "burned": 1886, "net": -186, "weight": null, "vacay": false}, {"date": "2026-07-30", "breakfast": 0, "lunch": 350, "dinner": 750, "snacks": 250, "eaten": 1350, "exerciseBurn": null, "burned": 1750, "net": -400, "weight": null, "vacay": false}, {"date": "2026-07-31", "breakfast": 0, "lunch": 700, "dinner": 300, "snacks": 700, "eaten": 1700, "exerciseBurn": null, "burned": 2021, "net": -321, "weight": null, "vacay": false}, {"date": "2026-08-01", "breakfast": 750, "lunch": 0, "dinner": 650, "snacks": 350, "eaten": 1750, "exerciseBurn": null, "burned": 2647, "net": -897, "weight": null, "vacay": false}, {"date": "2026-08-02", "breakfast": 750, "lunch": 0, "dinner": 750, "snacks": 0, "eaten": 1500, "exerciseBurn": null, "burned": 1931, "net": -431, "weight": null, "vacay": false}, {"date": "2026-08-03", "breakfast": 250, "lunch": 480, "dinner": 680, "snacks": 0, "eaten": 1418, "exerciseBurn": null, "burned": 1856, "net": -438, "weight": 70.8, "vacay": false}, {"date": "2026-08-04", "breakfast": 180, "lunch": 800, "dinner": 870, "snacks": 80, "eaten": 1950, "exerciseBurn": null, "burned": 2114, "net": -164, "weight": null, "vacay": false}, {"date": "2026-08-05", "breakfast": 440, "lunch": 830, "dinner": 240, "snacks": 0, "eaten": 1510, "exerciseBurn": null, "burned": 1950, "net": -440, "weight": null, "vacay": false}, {"date": "2026-08-06", "breakfast": 250, "lunch": 680, "dinner": 487, "snacks": 500, "eaten": 1920, "exerciseBurn": null, "burned": 2091, "net": -171, "weight": null, "vacay": false}, {"date": "2026-08-07", "breakfast": 250, "lunch": 650, "dinner": 600, "snacks": 275, "eaten": 1775, "exerciseBurn": null, "burned": 2091, "net": -316, "weight": null, "vacay": false}, {"date": "2026-08-08", "breakfast": 0, "lunch": 850, "dinner": 500, "snacks": 0, "eaten": 1350, "exerciseBurn": null, "burned": 1650, "net": -300, "weight": null, "vacay": false}, {"date": "2026-08-09", "breakfast": 600, "lunch": 0, "dinner": 890, "snacks": 400, "eaten": 1890, "exerciseBurn": null, "burned": 1806, "net": 84, "weight": null, "vacay": false}, {"date": "2026-08-10", "breakfast": 250, "lunch": 500, "dinner": 450, "snacks": 540, "eaten": 1740, "exerciseBurn": null, "burned": 1830, "net": -90, "weight": 71.0, "vacay": false}, {"date": "2026-08-11", "breakfast": 0, "lunch": 800, "dinner": 1250, "snacks": 0, "eaten": 2050, "exerciseBurn": null, "burned": 1700, "net": 350, "weight": null, "vacay": false}, {"date": "2026-08-12", "breakfast": 100, "lunch": 650, "dinner": 900, "snacks": 450, "eaten": 2100, "exerciseBurn": null, "burned": 1700, "net": 400, "weight": null, "vacay": false}, {"date": "2026-08-13", "breakfast": 200, "lunch": 500, "dinner": 500, "snacks": 500, "eaten": 1700, "exerciseBurn": null, "burned": 1650, "net": 50, "weight": null, "vacay": false}, {"date": "2026-08-14", "breakfast": 180, "lunch": 500, "dinner": 500, "snacks": 150, "eaten": 1330, "exerciseBurn": null, "burned": 1922, "net": -592, "weight": null, "vacay": false}, {"date": "2026-08-15", "breakfast": 300, "lunch": 300, "dinner": 1700, "snacks": 0, "eaten": 2300, "exerciseBurn": null, "burned": 1997, "net": 303, "weight": null, "vacay": false}, {"date": "2026-08-16", "breakfast": 250, "lunch": 780, "dinner": 500, "snacks": 180, "eaten": 1710, "exerciseBurn": null, "burned": 1818, "net": -108, "weight": null, "vacay": false}, {"date": "2026-08-17", "breakfast": 250, "lunch": 500, "dinner": 750, "snacks": 690, "eaten": 2190, "exerciseBurn": null, "burned": 1770, "net": 420, "weight": 71.3, "vacay": false}, {"date": "2026-08-18", "breakfast": 300, "lunch": 500, "dinner": 600, "snacks": 180, "eaten": 1580, "exerciseBurn": null, "burned": 1739, "net": -159, "weight": null, "vacay": false}, {"date": "2026-08-19", "breakfast": 80, "lunch": 600, "dinner": 500, "snacks": 830, "eaten": 2010, "exerciseBurn": null, "burned": 1923, "net": 87, "weight": null, "vacay": false}, {"date": "2026-08-20", "breakfast": 490, "lunch": 500, "dinner": 750, "snacks": 0, "eaten": 1740, "exerciseBurn": null, "burned": 1856, "net": -116, "weight": null, "vacay": false}, {"date": "2026-08-21", "breakfast": 0, "lunch": 500, "dinner": 450, "snacks": 430, "eaten": 1380, "exerciseBurn": null, "burned": 1053, "net": 327, "weight": null, "vacay": false}, {"date": "2026-08-22", "breakfast": 0, "lunch": 550, "dinner": 600, "snacks": 70, "eaten": 1220, "exerciseBurn": null, "burned": 1011, "net": 209, "weight": null, "vacay": false}, {"date": "2026-08-23", "breakfast": 0, "lunch": 250, "dinner": 850, "snacks": 360, "eaten": 1460, "exerciseBurn": null, "burned": 1902, "net": -442, "weight": null, "vacay": false}, {"date": "2026-08-24", "breakfast": 120, "lunch": 600, "dinner": 550, "snacks": 630, "eaten": 1900, "exerciseBurn": null, "burned": 1643, "net": 257, "weight": 71.2, "vacay": false}, {"date": "2026-08-25", "breakfast": 355, "lunch": null, "dinner": null, "snacks": null, "eaten": null, "exerciseBurn": null, "burned": null, "net": null, "weight": null, "vacay": false}];

// ---------------------------------------------------------------
// Small helpers
// ---------------------------------------------------------------
function fmt(n, d = 0) { return n === null || n === undefined || isNaN(n) ? '—' : Number(n).toFixed(d); }
function fmtSigned(n, d = 0) { if (n === null || n === undefined || isNaN(n)) return '—'; const v = Number(n).toFixed(d); return n > 0 ? '+' + v : v; }
function parseDate(s) { return new Date(s + 'T00:00:00'); }
function clamp01(x) { return Math.max(0, Math.min(1, x)); }
function isDark() { return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches; }

function sumMeals(r) {
  const parts = [r.breakfast, r.lunch, r.dinner, r.snacks];
  if (parts.every(p => p == null)) return null;
  return parts.reduce((a, b) => a + (b || 0), 0);
}

function latestWeight() {
  for (let i = DATA.length - 1; i >= 0; i--) { if (DATA[i].weight != null) return { w: DATA[i].weight, d: DATA[i].date }; }
  return { w: START_WEIGHT, d: DATA[0].date };
}

function avgExclVacay(field) {
  const vals = DATA.filter(r => !r.vacay && r[field] != null).map(r => r[field]);
  if (!vals.length) return null;
  return vals.reduce((a, b) => a + b, 0) / vals.length;
}

// last N *valid* (non-null) values for a field, most recent first in DATA order
function recentValid(field, count, exclVacay = true) {
  const valid = DATA.filter(r => (!exclVacay || !r.vacay) && r[field] != null);
  return valid.slice(-count);
}
function recentAvg(field, count, exclVacay = true) {
  const slice = recentValid(field, count, exclVacay);
  if (!slice.length) return null;
  return slice.reduce((a, r) => a + r[field], 0) / slice.length;
}

// ---------------------------------------------------------------
// Chart color tokens (theme-aware)
// ---------------------------------------------------------------
function chartColors() {
  return isDark()
    ? { eaten: '#A83F88', burned: '#409552', net: '#2D86C8', weight: '#9469BF', goal: '#B56D00', good: '#409552', bad: '#A83F88', grid: 'rgba(255,255,255,.08)', tick: '#B6AFC6' }
    : { eaten: '#E54B5F', burned: '#6DBE7B', net: '#1868A0', weight: '#7A4FA3', goal: '#C97F1A', good: '#6DBE7B', bad: '#E54B5F', grid: 'rgba(38,34,52,.06)', tick: '#6E6780' };
}

// ---------------------------------------------------------------
// Computed targets (35% eat-less / 65% burn-more split)
// ---------------------------------------------------------------
function computeTargets() {
  const { w: curW } = latestWeight();
  const toGo = curW - GOAL_WEIGHT;
  const avgEaten = avgExclVacay('eaten');
  const avgBurned = avgExclVacay('burned');
  const avgDeficit = (avgEaten != null && avgBurned != null) ? (avgBurned - avgEaten) : null;

  const dailyDeficitNeeded = SAFE_KG_PER_WEEK * KCAL_PER_KG / 7;
  const baseEaten = avgEaten != null ? avgEaten : 1800;
  const baseBurned = avgBurned != null ? avgBurned : 1800;
  const targetEatDaily = baseEaten - EAT_SHARE_OF_DEFICIT * dailyDeficitNeeded;
  const targetBurnDaily = baseBurned + BURN_SHARE_OF_DEFICIT * dailyDeficitNeeded;
  const weeksAtSafePace = toGo / SAFE_KG_PER_WEEK;

  return { curW, toGo, avgEaten, avgBurned, avgDeficit, dailyDeficitNeeded, targetEatDaily, targetBurnDaily, weeksAtSafePace };
}

// ---------------------------------------------------------------
// Streak — consecutive most-recent days with any meal logged
// ---------------------------------------------------------------
function computeStreak() {
  let streak = 0;
  for (let i = DATA.length - 1; i >= 0; i--) {
    if (sumMeals(DATA[i]) != null) streak++; else break;
  }
  return streak;
}

// ---------------------------------------------------------------
// Aggregation for trend charts
// ---------------------------------------------------------------
function aggregate(range) {
  if (range === 'day') {
    return DATA.map(r => ({ label: r.date.slice(5), eaten: r.eaten, burned: r.burned, net: r.net, weight: r.weight }));
  }
  const buckets = {};
  DATA.forEach(r => {
    const dt = parseDate(r.date);
    let key;
    if (range === 'week') {
      const monday = new Date(dt); monday.setDate(dt.getDate() - ((dt.getDay() + 6) % 7));
      key = monday.toISOString().slice(5, 10);
    } else {
      key = r.date.slice(0, 7);
    }
    if (!buckets[key]) buckets[key] = { eaten: [], burned: [], weight: null };
    if (!r.vacay) {
      if (r.eaten != null) buckets[key].eaten.push(r.eaten);
      if (r.burned != null) buckets[key].burned.push(r.burned);
    }
    if (r.weight != null) buckets[key].weight = r.weight;
  });
  const avg = a => a.length ? a.reduce((x, y) => x + y, 0) / a.length : null;
  return Object.keys(buckets).sort().map(k => {
    const b = buckets[k];
    const e = avg(b.eaten), bnd = avg(b.burned);
    return { label: k, eaten: e, burned: bnd, net: (e != null && bnd != null) ? e - bnd : null, weight: b.weight };
  });
}

// ---------------------------------------------------------------
// DOM refs & chart instances
// ---------------------------------------------------------------
const charts = {};
function destroyChart(key) { if (charts[key]) { charts[key].destroy(); delete charts[key]; } }

// ---------------------------------------------------------------
// Render: greeting + date chip
// ---------------------------------------------------------------
function renderGreeting() {
  const today = DATA[DATA.length - 1];
  document.getElementById('greeting').textContent = `Hi ${USER_NAME}! 👋`;
  const streak = computeStreak();
  document.getElementById('greetingSub').textContent =
    streak > 1 ? `You're on a ${streak}-day streak — let's make today count.` : `Let's make today count.`;

  const d = parseDate(today.date);
  const label = d.toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' });
  document.getElementById('dateChipLabel').textContent = label;
}

// ---------------------------------------------------------------
// Render: hero weight card + sparkline
// ---------------------------------------------------------------
function renderHeroWeight() {
  const { w: curW, d: curD } = latestWeight();
  document.getElementById('heroWeightVal').textContent = fmt(curW, 1);

  const weighed = DATA.filter(r => r.weight != null);
  const prev = weighed.length > 1 ? weighed[weighed.length - 2].weight : null;
  const deltaEl = document.getElementById('heroWeightDelta');
  if (prev != null) {
    const delta = curW - prev;
    const arrow = delta <= 0 ? '↓' : '↑';
    deltaEl.textContent = `${arrow} ${fmt(Math.abs(delta), 1)} kg vs last check-in`;
  } else {
    deltaEl.textContent = `Starting weight ${fmt(START_WEIGHT, 1)} kg`;
  }

  const last30 = weighed.slice(-10); // sparse weigh-ins → show the last 10 logged
  const labels = last30.map(r => r.date.slice(5));
  const vals = last30.map(r => r.weight);

  destroyChart('hero');
  const ctx = document.getElementById('heroSparkChart');
  charts.hero = new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [{
        data: vals, borderColor: '#fff', borderWidth: 2.5,
        backgroundColor: 'rgba(255,255,255,.18)', fill: true,
        tension: .35, pointRadius: 0, pointHoverRadius: 4,
        pointBackgroundColor: '#fff', spanGaps: true
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => `${c.formattedValue} kg` } } },
      scales: {
        x: { ticks: { color: 'rgba(255,255,255,.75)', font: { size: 10 } }, grid: { display: false } },
        y: { display: false }
      }
    }
  });
}

// ---------------------------------------------------------------
// Render: 4 stat cards + mini sparklines
// ---------------------------------------------------------------
function miniBarChart(canvasId, values, color) {
  destroyChart(canvasId);
  const ctx = document.getElementById(canvasId);
  charts[canvasId] = new Chart(ctx, {
    type: 'bar',
    data: { labels: values.map((_, i) => i), datasets: [{ data: values, backgroundColor: color, borderRadius: 3, maxBarThickness: 10 }] },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { enabled: false } },
      scales: { x: { display: false }, y: { display: false, beginAtZero: true } }
    }
  });
}

function renderStatCards() {
  const cc = chartColors();
  const today = DATA[DATA.length - 1];
  const eatenToday = sumMeals(today);
  const burnedToday = today.burned;
  const netToday = (eatenToday != null && burnedToday != null) ? (eatenToday - burnedToday) : null;
  const weekDeficit = recentAvg('net', 7); // avg eaten-burned, negative = deficit

  document.getElementById('statBurnedVal').textContent = burnedToday != null ? fmt(burnedToday, 0) : '—';
  document.getElementById('statEatenVal').textContent = eatenToday != null ? fmt(eatenToday, 0) : '—';
  document.getElementById('statNetVal').textContent = netToday != null ? fmtSigned(netToday, 0) : '—';
  document.getElementById('statNetSub').textContent = netToday == null ? 'Today' : (netToday <= 0 ? 'Deficit today' : 'Surplus today');
  document.getElementById('statDeficitVal').textContent = weekDeficit != null ? fmtSigned(weekDeficit, 0) : '—';

  miniBarChart('statBurnedSpark', recentValid('burned', 7, false).map(r => r.burned), cc.burned);
  miniBarChart('statEatenSpark', recentValid('eaten', 7, false).map(r => r.eaten), cc.eaten);
  const netSeries = recentValid('net', 7, false).map(r => r.net);
  miniBarChart('statNetSpark', netSeries, cc.net);
  miniBarChart('statDeficitSpark', netSeries, netSeries.length && netSeries[netSeries.length - 1] <= 0 ? cc.good : cc.bad);
}

// ---------------------------------------------------------------
// Render: My Targets (real per-day/week/month eat+burn targets)
// ---------------------------------------------------------------
function renderTargets() {
  const t = computeTargets();
  const today = DATA[DATA.length - 1];
  const eatenToday = sumMeals(today) ?? 0;
  const weekEaten = recentAvg('eaten', 7) ?? 0;
  const monthEaten = recentAvg('eaten', 30) ?? 0;
  const lostSoFar = START_WEIGHT - t.curW;
  const totalToLose = START_WEIGHT - GOAL_WEIGHT;

  const cards = [
    {
      accent: 'var(--teal)', period: 'Per day', title: 'Daily target',
      rows: [['Eat around', fmt(t.targetEatDaily, 0) + ' kcal'], ['Burn around', fmt(t.targetBurnDaily, 0) + ' kcal'], ['Target deficit', fmt(t.dailyDeficitNeeded, 0) + ' kcal']],
      pct: clamp01(eatenToday / t.targetEatDaily), foot: `Today: ${fmt(eatenToday, 0)} / ${fmt(t.targetEatDaily, 0)} kcal eaten`
    },
    {
      accent: 'var(--pink)', period: 'Per week', title: 'Weekly target',
      rows: [['Eat around', fmt(t.targetEatDaily * 7, 0) + ' kcal'], ['Burn around', fmt(t.targetBurnDaily * 7, 0) + ' kcal'], ['Weight loss', SAFE_KG_PER_WEEK.toFixed(1) + ' kg']],
      pct: clamp01(weekEaten / t.targetEatDaily), foot: `This week avg: ${fmt(weekEaten, 0)} / ${fmt(t.targetEatDaily, 0)} kcal/day`
    },
    {
      accent: 'var(--orange)', period: 'Per month (≈30d)', title: 'Monthly target',
      rows: [['Eat around', fmt(t.targetEatDaily * 30, 0) + ' kcal'], ['Burn around', fmt(t.targetBurnDaily * 30, 0) + ' kcal'], ['Weight loss', fmt(SAFE_KG_PER_WEEK * 30 / 7, 1) + ' kg']],
      pct: clamp01(monthEaten / t.targetEatDaily), foot: `This month avg: ${fmt(monthEaten, 0)} / ${fmt(t.targetEatDaily, 0)} kcal/day`
    },
    {
      accent: 'var(--green)', period: 'At this pace', title: 'To goal',
      rows: [['Weeks to goal', fmt(t.weeksAtSafePace, 1)], ['Current BMI', fmt(t.curW / ((HEIGHT_CM / 100) ** 2), 1)], ['Goal BMI', fmt(GOAL_WEIGHT / ((HEIGHT_CM / 100) ** 2), 1)]],
      pct: clamp01(lostSoFar / totalToLose), foot: `${fmt(t.toGo, 1)} kg to go`
    }
  ];

  document.getElementById('targetsGrid').innerHTML = cards.map(c => `
    <div class="target-card" style="--accent:${c.accent}">
      <div class="t-period">${c.period}</div>
      <div class="t-title">${c.title}</div>
      ${c.rows.map(r => `<div class="target-row"><span>${r[0]}</span><span>${r[1]}</span></div>`).join('')}
      <div class="target-bar-track"><div class="target-bar-fill" style="width:${(c.pct * 100).toFixed(0)}%"></div></div>
      <div class="target-foot"><span>${c.foot}</span><span>${(c.pct * 100).toFixed(0)}%</span></div>
    </div>
  `).join('');
}

// ---------------------------------------------------------------
// Render: streak card
// ---------------------------------------------------------------
function renderStreak() {
  const streak = computeStreak();
  document.getElementById('streakVal').textContent = streak;
  const sub = document.getElementById('streakSub');
  sub.textContent = streak === 0 ? 'Log today to start a streak!' : streak < 3 ? 'Keep it going!' : streak < 7 ? "You're building momentum!" : "You're on fire! 🔥";

  const CIRC = 2 * Math.PI * 34;
  const pct = clamp01(streak / 21);
  const ring = document.getElementById('streakRing');
  ring.style.strokeDasharray = CIRC.toFixed(1);
  ring.style.strokeDashoffset = (CIRC * (1 - pct)).toFixed(1);

  const N = 14;
  const last = DATA.slice(-N);
  document.getElementById('streakDots').innerHTML = last.map(r =>
    `<span class="streak-dot ${sumMeals(r) != null ? 'on' : ''}"></span>`
  ).join('');
}

// ---------------------------------------------------------------
// Render: today's summary bars
// ---------------------------------------------------------------
function renderTodaySummary() {
  const t = computeTargets();
  const today = DATA[DATA.length - 1];
  const eatenToday = sumMeals(today);
  const burnedToday = today.burned;
  const netToday = (eatenToday != null && burnedToday != null) ? eatenToday - burnedToday : null;
  const weightProgress = clamp01((START_WEIGHT - t.curW) / (START_WEIGHT - GOAL_WEIGHT));

  const rows = [
    { icon: 'flame', label: 'Calories', val: `${eatenToday != null ? fmt(eatenToday, 0) : 0} / ${fmt(t.targetEatDaily, 0)} kcal`, pct: clamp01((eatenToday || 0) / t.targetEatDaily), color: 'var(--pink)' },
    { icon: 'flame', label: 'Burned', val: `${burnedToday != null ? fmt(burnedToday, 0) : 0} / ${fmt(t.targetBurnDaily, 0)} kcal`, pct: clamp01((burnedToday || 0) / t.targetBurnDaily), color: 'var(--green)' },
    { icon: 'chart', label: 'Deficit', val: netToday != null ? `${fmtSigned(netToday, 0)} / ${fmtSigned(-t.dailyDeficitNeeded, 0)} kcal` : `— / ${fmtSigned(-t.dailyDeficitNeeded, 0)} kcal`, pct: netToday != null ? clamp01(Math.max(0, -netToday) / t.dailyDeficitNeeded) : 0, color: 'var(--orange)' },
    { icon: 'heart', label: 'Weight to goal', val: `${fmt(t.toGo, 1)} kg left`, pct: weightProgress, color: 'var(--teal)' }
  ];

  document.getElementById('summaryRows').innerHTML = rows.map(r => `
    <div class="summary-row">
      <div class="summary-row-top"><span class="s-label">${r.label}</span><span class="s-val">${r.val}</span></div>
      <div class="summary-bar-track"><div class="summary-bar-fill" style="width:${(r.pct * 100).toFixed(0)}%;background:${r.color}"></div></div>
    </div>
  `).join('');
}

// ---------------------------------------------------------------
// Render: recent log table
// ---------------------------------------------------------------
let showAllLog = false;
function noteEmoji(net) {
  if (net == null) return '·';
  if (net <= -100) return '😊';
  if (net <= 0) return '🙂';
  if (net <= 150) return '😐';
  return '😕';
}
function renderRecentLog() {
  const rows = DATA.slice().reverse();
  const shown = showAllLog ? rows : rows.slice(0, 6);
  document.getElementById('recentLogBody').innerHTML = shown.map(r => {
    const eaten = r.eaten ?? sumMeals(r);
    const netCls = r.net == null ? '' : (r.net <= 0 ? 'net-good' : 'net-bad');
    return `<tr>
      <td>${r.date.slice(5)}${r.vacay ? ' 🏖' : ''}</td>
      <td>${eaten != null ? fmt(eaten, 0) : '—'}</td>
      <td>${r.burned != null ? fmt(r.burned, 0) : '—'}</td>
      <td class="${netCls}">${r.net != null ? fmtSigned(r.net, 0) : '—'}</td>
      <td class="note">${noteEmoji(r.net)}</td>
    </tr>`;
  }).join('');
  document.getElementById('viewAllBtn').textContent = showAllLog ? 'Show less' : 'View all';
}

// ---------------------------------------------------------------
// Render: weight trend chart
// ---------------------------------------------------------------
let weightRange = 'day';
function renderWeightTrendChart() {
  const cc = chartColors();
  const agg = aggregate(weightRange);
  const labels = agg.map(r => r.label);

  destroyChart('weightTrend');
  charts.weightTrend = new Chart(document.getElementById('weightTrendChart'), {
    type: 'line',
    data: {
      labels,
      datasets: [
        { label: 'Weight (kg)', data: agg.map(r => r.weight), spanGaps: true, borderColor: cc.weight, backgroundColor: cc.weight + '22', tension: .3, pointRadius: 3, fill: true },
        { label: 'Goal', data: labels.map(() => GOAL_WEIGHT), borderColor: cc.goal, borderDash: [6, 4], pointRadius: 0 }
      ]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { position: 'bottom', labels: { color: cc.tick, usePointStyle: true, boxHeight: 7 } } },
      scales: {
        x: { ticks: { color: cc.tick, font: { size: 10 } }, grid: { display: false } },
        y: { ticks: { color: cc.tick }, grid: { color: cc.grid }, title: { display: true, text: 'kg', color: cc.tick } }
      }
    }
  });
}

// ---------------------------------------------------------------
// Render: calories overview chart (eaten / burned / net)
// ---------------------------------------------------------------
let calRange = 'day';
function renderCalOverviewChart() {
  const cc = chartColors();
  const agg = aggregate(calRange);
  const labels = agg.map(r => r.label);

  destroyChart('calOverview');
  charts.calOverview = new Chart(document.getElementById('calOverviewChart'), {
    type: 'bar',
    data: {
      labels,
      datasets: [
        { label: 'Eaten', data: agg.map(r => r.eaten), backgroundColor: cc.eaten, borderRadius: 4, maxBarThickness: 22 },
        { label: 'Burned', data: agg.map(r => r.burned), backgroundColor: cc.burned, borderRadius: 4, maxBarThickness: 22 },
        { label: 'Net', data: agg.map(r => r.net), backgroundColor: cc.net, borderRadius: 4, maxBarThickness: 22 }
      ]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { position: 'bottom', labels: { color: cc.tick, usePointStyle: true, boxHeight: 7 } } },
      scales: {
        x: { ticks: { color: cc.tick, font: { size: 10 } }, grid: { display: false } },
        y: { ticks: { color: cc.tick }, grid: { color: cc.grid }, title: { display: true, text: 'kcal', color: cc.tick } }
      }
    }
  });
}

// ---------------------------------------------------------------
// Master render
// ---------------------------------------------------------------
function renderAll() {
  DATA.sort((a, b) => a.date < b.date ? -1 : 1);
  renderGreeting();
  renderHeroWeight();
  renderStatCards();
  renderTargets();
  renderStreak();
  renderTodaySummary();
  renderRecentLog();
  renderWeightTrendChart();
  renderCalOverviewChart();
  updateLogDefaultDate();
}

// ---------------------------------------------------------------
// View switching (Dashboard <-> Log Meal)
// ---------------------------------------------------------------
function switchView(view) {
  document.querySelectorAll('.view').forEach(v => { v.hidden = v.dataset.view !== view; });
  document.querySelectorAll('[data-nav]').forEach(el => {
    if (el.classList.contains('is-disabled')) return;
    el.classList.toggle('active', el.dataset.nav === view);
  });
  window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
}

function wireNav() {
  document.querySelectorAll('[data-nav]:not(.is-disabled)').forEach(el => {
    el.addEventListener('click', () => switchView(el.dataset.view));
  });
  document.getElementById('logBackBtn').addEventListener('click', () => switchView('dashboard'));
  document.getElementById('logSaveBtn').addEventListener('click', () => document.getElementById('logForm').requestSubmit());
}

// ---------------------------------------------------------------
// Chart range toggles
// ---------------------------------------------------------------
function wireToggle(containerId, onChange) {
  document.getElementById(containerId).addEventListener('click', e => {
    if (e.target.tagName !== 'BUTTON') return;
    document.querySelectorAll(`#${containerId} button`).forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    onChange(e.target.dataset.range);
  });
}

// ---------------------------------------------------------------
// Log Meal form
// ---------------------------------------------------------------
function updateLogDefaultDate() {
  const dateInput = document.getElementById('f_date');
  if (dateInput && !dateInput.value) dateInput.value = DATA[DATA.length - 1].date;
}

function updateLogTotal() {
  const b = parseFloat(document.getElementById('f_b').value) || 0;
  const l = parseFloat(document.getElementById('f_l').value) || 0;
  const d = parseFloat(document.getElementById('f_d').value) || 0;
  const s = parseFloat(document.getElementById('f_s').value) || 0;
  document.getElementById('logTotalVal').textContent = `${b + l + d + s} kcal`;
}

function showToast() {
  const toast = document.getElementById('logToast');
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 1800);
}

function wireLogForm() {
  ['f_b', 'f_l', 'f_d', 'f_s'].forEach(id => document.getElementById(id).addEventListener('input', updateLogTotal));

  document.getElementById('logForm').addEventListener('submit', e => {
    e.preventDefault();
    const date = document.getElementById('f_date').value;
    if (!date) return;
    const b = parseFloat(document.getElementById('f_b').value) || 0;
    const l = parseFloat(document.getElementById('f_l').value) || 0;
    const d = parseFloat(document.getElementById('f_d').value) || 0;
    const s = parseFloat(document.getElementById('f_s').value) || 0;
    const eaten = b + l + d + s;

    const idx = DATA.findIndex(r => r.date === date);
    if (idx >= 0) {
      DATA[idx] = { ...DATA[idx], breakfast: b, lunch: l, dinner: d, snacks: s, eaten,
        net: DATA[idx].burned != null ? eaten - DATA[idx].burned : null };
    } else {
      DATA.push({ date, breakfast: b, lunch: l, dinner: d, snacks: s, eaten, exerciseBurn: null, burned: null, net: null, weight: null, vacay: false });
    }

    e.target.reset();
    document.getElementById('logTotalVal').textContent = '0 kcal';
    renderAll();
    showToast();
    setTimeout(() => switchView('dashboard'), 650);
  });
}

// ---------------------------------------------------------------
// Init
// ---------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  wireNav();
  wireLogForm();
  wireToggle('weightRangeToggle', r => { weightRange = r; renderWeightTrendChart(); });
  wireToggle('calRangeToggle', r => { calRange = r; renderCalOverviewChart(); });
  document.getElementById('viewAllBtn').addEventListener('click', () => { showAllLog = !showAllLog; renderRecentLog(); });

  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      renderStatCards(); renderWeightTrendChart(); renderCalOverviewChart();
    });
  }

  renderAll();
});
