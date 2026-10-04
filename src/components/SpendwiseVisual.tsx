// Illustrative finance dashboard (not real data) for the Spendwise project card.
const BARS = [42, 65, 38, 80, 56, 92, 60, 48, 74, 58, 85, 52];
const CATEGORIES = [
  { name: "Groceries", pct: 34, color: "bg-violet-400" },
  { name: "Subscriptions", pct: 22, color: "bg-cyan-400" },
  { name: "Transport", pct: 18, color: "bg-emerald-400" },
];

export function SpendwiseVisual() {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-5 shadow-2xl" aria-hidden>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-slate-400">Spending this year</p>
          <p className="text-2xl font-bold text-white">Monthly overview</p>
        </div>
        <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-medium text-emerald-300">AI insights</span>
      </div>
      <div className="mt-6 flex h-36 items-end gap-2">
        {BARS.map((h, i) => (
          <div
            key={i}
            className="bar-grow flex-1 rounded-t-md bg-gradient-to-t from-violet-600 to-cyan-400"
            style={{ height: `${h}%`, animationDelay: `${i * 70}ms` }}
          />
        ))}
      </div>
      <div className="mt-6 space-y-3">
        {CATEGORIES.map((c) => (
          <div key={c.name}>
            <div className="flex justify-between text-xs text-slate-300">
              <span>{c.name}</span>
              <span>{c.pct}%</span>
            </div>
            <div className="mt-1 h-1.5 rounded-full bg-white/10">
              <div className={`bar-fill h-full rounded-full ${c.color}`} style={{ width: `${c.pct * 2.2}%` }} />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-5 rounded-xl bg-white/5 p-3 text-xs text-slate-300">
        💡 You spent 18% more on subscriptions than last month. 3 recurring payments detected.
      </p>
    </div>
  );
}
