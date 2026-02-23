"use client";
import { useState } from "react";

const milestones = [
  { label: "1 Day", days: 1, emoji: "🌱", message: "One day is everything. You did it." },
  { label: "1 Week", days: 7, emoji: "⭐", message: "Seven days of courage. You are incredible." },
  { label: "1 Month", days: 30, emoji: "🌟", message: "30 days. You have changed your life." },
  { label: "3 Months", days: 90, emoji: "🏅", message: "90 days. Your brain is healing. Keep going." },
  { label: "6 Months", days: 180, emoji: "🥇", message: "6 months. You are a warrior." },
  { label: "1 Year", days: 365, emoji: "🏆", message: "One whole year. You are an inspiration to everyone." },
];

export default function Milestone() {
  const [selected, setSelected] = useState<number | null>(null);
  const [name, setName] = useState("");
  const [showCert, setShowCert] = useState(false);

  const milestone = selected !== null ? milestones[selected] : null;

  const print = () => window.print();

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-950 to-blue-900 text-white">
      <header className="flex justify-between items-center px-8 py-6 print:hidden">
        <a href="/" className="text-2xl font-bold tracking-tight">💙 Silent Safety</a>
        <a href="/emergency" className="bg-red-600 hover:bg-red-500 px-4 py-2 rounded-full text-sm font-semibold transition">🆘 Emergency</a>
      </header>

      {!showCert ? (
        <section className="max-w-2xl mx-auto px-8 py-10">
          <div className="text-center mb-10">
            <div className="text-6xl mb-4">🏆</div>
            <h2 className="text-4xl font-bold mb-3">Milestone Certificate</h2>
            <p className="text-blue-200">Choose your milestone and enter your name to download your certificate.</p>
          </div>

          <div className="bg-blue-800 rounded-2xl p-6 mb-6">
            <p className="font-bold mb-4">Your name</p>
            <input value={name} onChange={e => setName(e.target.value)}
              placeholder="Enter your name or nickname"
              className="w-full bg-blue-700 rounded-xl p-4 text-white placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {milestones.map((m, i) => (
              <button key={i} onClick={() => setSelected(i)}
                className={`p-6 rounded-2xl text-center transition ${selected === i ? "bg-blue-500" : "bg-blue-800 hover:bg-blue-700"}`}>
                <div className="text-4xl mb-2">{m.emoji}</div>
                <p className="font-bold">{m.label}</p>
                <p className="text-blue-200 text-xs mt-1">{m.days} days</p>
              </button>
            ))}
          </div>

          <button onClick={() => setShowCert(true)} disabled={!name.trim() || selected === null}
            className="w-full bg-blue-500 hover:bg-blue-400 disabled:opacity-50 disabled:cursor-not-allowed py-4 rounded-full font-bold text-lg transition">
            Generate My Certificate 🏆
          </button>
        </section>
      ) : (
        <section className="max-w-2xl mx-auto px-8 py-10">
          {/* Certificate */}
          <div className="bg-white text-blue-950 rounded-3xl p-10 text-center mb-8 border-8 border-blue-300 shadow-2xl">
            <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4">Silent Safety — Certificate of Achievement</p>
            <div className="text-8xl mb-4">{milestone?.emoji}</div>
            <h2 className="text-3xl font-bold mb-2">This certifies that</h2>
            <p className="text-5xl font-bold text-blue-600 mb-4">{name}</p>
            <h3 className="text-2xl font-bold mb-2">has achieved</h3>
            <p className="text-4xl font-bold text-blue-800 mb-4">{milestone?.label} of Recovery</p>
            <p className="text-blue-500 text-lg mb-6">{milestone?.days} days of strength, courage and commitment</p>
            <p className="text-blue-700 font-medium italic mb-6">"{milestone?.message}"</p>
            <p className="text-blue-400 text-sm">{new Date().toLocaleDateString("en-GB", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</p>
            <div className="mt-6 pt-6 border-t border-blue-200">
              <p className="text-blue-400 text-sm">💙 Silent Safety — Free forever. Built with love.</p>
            </div>
          </div>

          <div className="flex gap-4 justify-center print:hidden">
            <button onClick={print}
              className="bg-blue-500 hover:bg-blue-400 px-8 py-3 rounded-full font-bold transition">
              🖨️ Print / Save as PDF
            </button>
            <button onClick={() => { setShowCert(false); setSelected(null); setName(""); }}
              className="bg-blue-800 hover:bg-blue-700 px-8 py-3 rounded-full font-bold transition">
              ← Start Again
            </button>
          </div>
        </section>
      )}

      <footer className="text-center text-blue-300 py-8 text-sm print:hidden">
        <a href="/" className="hover:text-white transition">← Back to Silent Safety</a>
      </footer>
    </main>
  );
}
```

Save with **Ctrl + S** then run:
```
code app\music\page.tsx