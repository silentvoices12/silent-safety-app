"use client";
import { useState } from "react";

export default function Diary() {
  const [entries, setEntries] = useState<{date: string, text: string}[]>([]);
  const [text, setText] = useState("");
  const [saved, setSaved] = useState(false);

  const save = () => {
    if (!text.trim()) return;
    const newEntry = {
      date: new Date().toLocaleDateString("en-GB", { weekday: "long", year: "numeric", month: "long", day: "numeric" }),
      text: text.trim()
    };
    setEntries(prev => [newEntry, ...prev]);
    setText("");
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-950 to-purple-900 text-white">
      <header className="flex justify-between items-center px-8 py-6">
        <a href="/" className="text-2xl font-bold tracking-tight">💙 Silent Safety</a>
        <a href="/emergency" className="bg-red-600 hover:bg-red-500 px-4 py-2 rounded-full text-sm font-semibold transition">🆘 Emergency</a>
      </header>

      <section className="max-w-2xl mx-auto px-8 py-10">
        <div className="text-center mb-10">
          <div className="text-6xl mb-4">📔</div>
          <h2 className="text-4xl font-bold mb-3">My Diary</h2>
          <p className="text-purple-200">A safe, private space to write your thoughts. Nobody else can see this.</p>
        </div>

        <div className="bg-purple-800 rounded-2xl p-6 mb-8">
          <p className="font-bold mb-3">Write today's entry</p>
          <textarea value={text} onChange={e => setText(e.target.value)}
            placeholder="How are you feeling? What happened today? What are you grateful for?"
            className="w-full bg-purple-700 rounded-xl p-4 text-white placeholder-purple-400 resize-none h-40 focus:outline-none focus:ring-2 focus:ring-purple-400 mb-4" />
          <button onClick={save} disabled={!text.trim()}
            className="w-full bg-purple-500 hover:bg-purple-400 disabled:opacity-50 py-3 rounded-full font-bold transition">
            {saved ? "✓ Saved!" : "Save Entry"}
          </button>
        </div>

        {entries.length > 0 && (
          <div>
            <h3 className="text-xl font-bold mb-4">Previous Entries</h3>
            <div className="grid gap-4">
              {entries.map((entry, i) => (
                <div key={i} className="bg-purple-800 rounded-2xl p-6">
                  <p className="text-purple-300 text-sm mb-2">{entry.date}</p>
                  <p className="text-white whitespace-pre-wrap">{entry.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {entries.length === 0 && (
          <div className="text-center text-purple-300 py-8">
            <p>No entries yet. Write your first one above! 💙</p>
          </div>
        )}
      </section>

      <footer className="text-center text-purple-300 py-8 text-sm">
        <a href="/" className="hover:text-white transition">← Back to Silent Safety</a>
      </footer>
    </main>
  );
}