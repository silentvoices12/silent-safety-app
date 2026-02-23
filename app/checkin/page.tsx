"use client";
import { useState } from "react";

const moods = ["😭", "😢", "😐", "🙂", "😄"];
const moodLabels = ["Really Struggling", "Not Great", "OK", "Pretty Good", "Amazing"];

export default function CheckIn() {
  const [mood, setMood] = useState<number | null>(null);
  const [energy, setEnergy] = useState(5);
  const [note, setNote] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const submit = () => {
    if (mood === null) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-green-950 to-green-900 text-white flex flex-col items-center justify-center px-8 text-center">
        <div className="text-7xl mb-6">{moods[mood!]}</div>
        <h2 className="text-4xl font-bold mb-4">Check-in complete! 💙</h2>
        <p className="text-green-200 text-lg max-w-md mb-8">Thank you for showing up today. That takes strength. Every day you check in is a victory.</p>
        <div className="bg-green-800 rounded-2xl p-6 max-w-md w-full mb-8 text-left">
          <p className="text-green-200 text-sm mb-1">Today's mood</p>
          <p className="text-2xl font-bold">{moods[mood!]} {moodLabels[mood!]}</p>
          <p className="text-green-200 text-sm mt-3 mb-1">Energy level</p>
          <p className="text-2xl font-bold">{energy}/10</p>
          {note && <>
            <p className="text-green-200 text-sm mt-3 mb-1">Your note</p>
            <p className="font-medium">{note}</p>
          </>}
        </div>
        <div className="flex gap-4">
          <a href="/craving-cooler" className="bg-teal-600 hover:bg-teal-500 px-6 py-3 rounded-full transition text-sm font-semibold">🧊 Craving Cooler</a>
          <a href="/" className="bg-green-700 hover:bg-green-600 px-6 py-3 rounded-full transition text-sm font-semibold">🏠 Home</a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-950 to-green-900 text-white">
      <header className="flex justify-between items-center px-8 py-6">
        <a href="/" className="text-2xl font-bold tracking-tight">💙 Silent Safety</a>
        <a href="/emergency" className="bg-red-600 hover:bg-red-500 px-4 py-2 rounded-full text-sm font-semibold transition">🆘 Emergency</a>
      </header>

      <section className="max-w-lg mx-auto px-8 py-10">
        <div className="text-center mb-10">
          <div className="text-6xl mb-4">📋</div>
          <h2 className="text-4xl font-bold mb-3">Daily Check-in</h2>
          <p className="text-green-200">How are you doing today? Be honest — this is just for you.</p>
        </div>

        <div className="bg-green-800 rounded-2xl p-6 mb-6">
          <p className="font-bold mb-4">How are you feeling right now?</p>
          <div className="flex justify-between">
            {moods.map((m, i) => (
              <button key={i} onClick={() => setMood(i)}
                className={`text-4xl p-2 rounded-xl transition ${mood === i ? "bg-green-600 scale-125" : "hover:bg-green-700"}`}>
                {m}
              </button>
            ))}
          </div>
          {mood !== null && <p className="text-center text-green-200 mt-3 text-sm">{moodLabels[mood]}</p>}
        </div>

        <div className="bg-green-800 rounded-2xl p-6 mb-6">
          <p className="font-bold mb-4">Energy level today</p>
          <input type="range" min="1" max="10" value={energy}
            onChange={e => setEnergy(Number(e.target.value))}
            className="w-full accent-green-400 mb-2" />
          <p className="text-center text-3xl font-bold text-green-300">{energy}/10</p>
        </div>

        <div className="bg-green-800 rounded-2xl p-6 mb-8">
          <p className="font-bold mb-3">Anything you want to note? (optional)</p>
          <textarea value={note} onChange={e => setNote(e.target.value)}
            placeholder="How was today? What helped? What was hard?"
            className="w-full bg-green-700 rounded-xl p-4 text-white placeholder-green-400 resize-none h-28 focus:outline-none focus:ring-2 focus:ring-green-400" />
        </div>

        <button onClick={submit} disabled={mood === null}
          className="w-full bg-green-500 hover:bg-green-400 disabled:opacity-50 disabled:cursor-not-allowed py-4 rounded-full font-bold text-lg transition">
          Complete Today's Check-in ✓
        </button>
      </section>

      <footer className="text-center text-green-300 py-8 text-sm">
        <a href="/" className="hover:text-white transition">← Back to Silent Safety</a>
      </footer>
    </main>
  );
}