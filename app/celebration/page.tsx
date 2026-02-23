"use client";
import { useState } from "react";

const wins = [
  "I didn't give in today 💪",
  "I asked for help 🤝",
  "I went to a meeting 🙌",
  "I called someone instead of using 📞",
  "I used the craving cooler 🧊",
  "I ate a proper meal 🍽️",
  "I exercised today 🏃",
  "I got out of bed 🌅",
  "I was honest with someone 💙",
  "I meditated or breathed deeply 🧘",
  "I wrote in my diary 📔",
  "I helped someone else today 🤲",
  "I celebrated a milestone 🏆",
  "I slept well 😴",
  "I said no to something harmful 🛑",
];

const messages = [
  "Every single day in recovery is a triumph. You should be incredibly proud.",
  "You are braver than you believe and stronger than you know.",
  "Progress is progress no matter how small. Keep going.",
  "You are not alone. Millions of people are walking this path with you.",
  "The fact that you are here, trying, is everything.",
  "Recovery is not linear. Every step forward counts.",
  "You deserve a life you love. Keep building it one day at a time.",
  "Today you chose yourself. That is everything.",
];

export default function Celebration() {
  const [selected, setSelected] = useState<number[]>([]);
  const [celebrated, setCelebrated] = useState(false);
  const [message, setMessage] = useState("");

  const toggle = (i: number) => {
    setSelected(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]);
  };

  const celebrate = () => {
    const random = messages[Math.floor(Math.random() * messages.length)];
    setMessage(random);
    setCelebrated(true);
  };

  if (celebrated) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-yellow-900 to-yellow-800 text-white flex flex-col items-center justify-center px-8 text-center">
        <div className="text-8xl mb-6 animate-bounce">🎉</div>
        <h2 className="text-4xl font-bold mb-6">You are amazing!</h2>
        <div className="bg-yellow-700 rounded-2xl p-8 max-w-lg mb-8">
          <p className="text-xl font-medium mb-6">{message}</p>
          <div className="text-left">
            <p className="text-yellow-200 text-sm mb-3">Today you:</p>
            {selected.map(i => (
              <p key={i} className="text-yellow-100 mb-1">✓ {wins[i]}</p>
            ))}
          </div>
        </div>
        <div className="flex gap-4 flex-wrap justify-center">
          <a href="/milestone" className="bg-yellow-600 hover:bg-yellow-500 px-6 py-3 rounded-full font-semibold transition">🏆 Get a Certificate</a>
          <button onClick={() => { setCelebrated(false); setSelected([]); }}
            className="bg-yellow-800 hover:bg-yellow-700 px-6 py-3 rounded-full font-semibold transition">🔄 Start Again</button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-950 to-yellow-900 text-white">
      <header className="flex justify-between items-center px-8 py-6">
        <a href="/" className="text-2xl font-bold tracking-tight">💙 Silent Safety</a>
        <a href="/emergency" className="bg-red-600 hover:bg-red-500 px-4 py-2 rounded-full text-sm font-semibold transition">🆘 Emergency</a>
      </header>

      <section className="max-w-2xl mx-auto px-8 py-10">
        <div className="text-center mb-10">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-4xl font-bold mb-3">Celebration Page</h2>
          <p className="text-yellow-200">Tick everything you achieved today — big or small. Every single one matters.</p>
        </div>

        <div className="grid gap-3 mb-8">
          {wins.map((win, i) => (
            <button key={i} onClick={() => toggle(i)}
              className={`flex items-center gap-4 p-4 rounded-xl transition text-left w-full ${selected.includes(i) ? "bg-yellow-600" : "bg-yellow-800 hover:bg-yellow-700"}`}>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition ${selected.includes(i) ? "bg-yellow-400 border-yellow-400" : "border-yellow-400"}`}>
                {selected.includes(i) && <span className="text-yellow-900 text-xs font-bold">✓</span>}
              </div>
              <p className="font-medium">{win}</p>
            </button>
          ))}
        </div>

        <button onClick={celebrate} disabled={selected.length === 0}
          className="w-full bg-yellow-500 hover:bg-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed py-4 rounded-full font-bold text-lg transition">
          🎉 Celebrate My Wins!
        </button>
      </section>

      <footer className="text-center text-yellow-300 py-8 text-sm">
        <a href="/" className="hover:text-white transition">← Back to Silent Safety</a>
      </footer>
    </main>
  );
}