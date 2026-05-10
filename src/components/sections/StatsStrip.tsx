"use client";
export default function StatsStrip() {
  const stats = [
    { val: "100+", label: "Videos Edited" },
    { val: "High", label: "Retention Focus" },
    { val: "Consistent", label: "Client Satisfaction" },
    { val: "Fast", label: "Turnaround" },
  ];

  return (
    <div className="w-full border-y border-white/5 bg-white/[0.01] backdrop-blur-sm py-12">
      <div className="container mx-auto px-6 flex flex-wrap justify-between gap-8">
        {stats.map((s, i) => (
          <div key={i} className="flex flex-col">
            <span className="text-4xl font-bold text-white tracking-tighter">{s.val}</span>
            <span className="text-xs uppercase tracking-widest text-secondaryText font-medium">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}