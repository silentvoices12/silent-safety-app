"use client";
import { useState, useEffect, useRef } from "react";

type Phase = "idle" | "breathing" | "urge-surfing" | "distraction";

const distractions = [
  "🎵 Put on your favourite song and really listen to every word",
  "📞 Call or text someone you trust right now",
  "🚶 Get up and walk around the block — just once",
  "💧 Drink a big glass of cold water slowly",
  "✍️ Write down exactly how you're feeling right now",
  "🧊 Hold an ice cube and focus on the sensation",
  "🎮 Play a simple game on your phone for 10 minutes",
  "🍎 Eat something healthy and focus on the taste",
  "🛁 Have a shower or wash your face with cold water",
  "📺 Put on a funny YouTube video",
  "🧹 Tidy one small area of your home",
  "🐾 Stroke a pet if you have one",
  "🌳 Go outside and look at the sky for 2 minutes",
  "📖 Read one page of a book",
  "🎨 Doodle something — anything — on paper",
];

export default function CravingCooler() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [breathStep, setBreathStep] = useState(0);
  const [breathLabel, setBreathLabel] = useState("Ready?");
  const [urgeSeconds, setUrgeSeconds] = useState(0);
  const [urgeRunning, setUrgeRunning] = useState(false);
  const [distraction, setDistraction] = useState("");
  const [intensity, setIntensity] = useState(5);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Breathing cycle: 4s in, 4s hold, 4s out
  useEffect(() => {
    if (phase !== "breathing") return;
    const steps = [
      { label: "Breathe IN... 🌬️", duration: 4000 },
      { label: "Hold... ✋", duration: 4000 },
      { label: "Breathe OUT... 😮‍💨", duration: 4000 },
    ];
    let i = 0;
    setBreathLabel(steps[0].label);
    const run = () => {
      i = (i + 1) % steps.length;
      setBreathLabel(steps[i].label);
      setBreathStep(i);
    };
    intervalRef.current = setInterval(run, 4000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [phase]);

  // Urge surfing timer
  useEffect(() => {
    if (!urgeRunning) return;
    intervalRef.current = setInterval(() => {
      setUrgeSeconds(s => s + 1);
    }, 1000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [urgeRunning]);

  const formatTime = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;

  const getRandomDistraction = () => {
    const random = distractions[Math.floor(Math.random() * distractions.length)];
    setDistraction(random);
    setPhase("distraction");
  };

  const reset = () => {
    setPhase("idle");
    setUrgeSeconds(0);
    setUrgeRunning(false);
    setDistraction("");
    setBreathStep(0);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-teal-950 to-teal-900 text-white">
      <header className="flex justify-between items-center px-8 py-6">
        <a href="/" className="text-2xl font-bold tracking-tight">💙 Silent Safety</a>
        <a href="/emergency" className="bg-red-600 hover:bg-red-500 px-4 py-2 rounded-full text-sm font-semibold transition">🆘 Emergency</a>
      </header>

      <section className="text-center px-8 py-10">
        <div className="text-6xl mb-4">🧊</div>
        <h2 className="text-4xl font-bold mb-3">Craving Cooler</h2>
        <p className="text-teal-200 text-lg max-w-lg mx-auto">You don't have to give in. Cravings pass. Let's ride this out together.</p>
      </section>

      {/* Intensity Slider */}
      {phase === "idle" && (
        <section className="max-w-lg mx-auto px-8 pb-6 text-center">
          <p className="text-teal-200 mb-4">How intense is your craving right now?</p>
          <input type="range" min="1" max="10" value={intensity}
            onChange={e => setIntensity(Number(e.target.value))}
            className="w-full accent-teal-400 mb-2" />
          <p className="text-4xl font-bold text-teal-300">{intensity}/10</p>
          <p className="text-teal-300 text-sm mt-1">
            {intensity <= 3 ? "Mild — you've got this 💪" : intensity <= 6 ? "Moderate — let's work through it 🧊" : "Strong — stay with us, it will pass 💙"}
          </p>
        </section>
      )}

      {/* Tool Selection */}
      {phase === "idle" && (
        <section className="max-w-lg mx-auto px-8 pb-16 grid gap-4">
          <button onClick={() => setPhase("breathing")}
            className="bg-teal-700 hover:bg-teal-600 rounded-2xl p-6 text-left transition">
            <div className="text-3xl mb-2">🌬️</div>
            <h3 className="text-xl font-bold mb-1">Breathing Exercise</h3>
            <p className="text-teal-200 text-sm">Calm your nervous system with guided box breathing. Takes just 2 minutes.</p>
          </button>

          <button onClick={() => { setPhase("urge-surfing"); setUrgeRunning(true); }}
            className="bg-teal-700 hover:bg-teal-600 rounded-2xl p-6 text-left transition">
            <div className="text-3xl mb-2">🏄</div>
            <h3 className="text-xl font-bold mb-1">Urge Surfing Timer</h3>
            <p className="text-teal-200 text-sm">Ride the wave. Watch the craving rise and fall without giving in. Most cravings peak and pass within 20 minutes.</p>
          </button>

          <button onClick={getRandomDistraction}
            className="bg-teal-700 hover:bg-teal-600 rounded-2xl p-6 text-left transition">
            <div className="text-3xl mb-2">🎲</div>
            <h3 className="text-xl font-bold mb-1">Distraction Tool</h3>
            <p className="text-teal-200 text-sm">Get a random healthy distraction to break the craving cycle right now.</p>
          </button>
        </section>
      )}

      {/* Breathing Exercise */}
      {phase === "breathing" && (
        <section className="max-w-lg mx-auto px-8 pb-16 text-center">
          <div className={`w-48 h-48 mx-auto rounded-full flex items-center justify-center text-2xl font-bold mb-8 transition-all duration-1000 ${
            breathStep === 0 ? "bg-teal-500 scale-110" : breathStep === 1 ? "bg-teal-400 scale-125" : "bg-teal-700 scale-90"
          }`}>
            {breathLabel}
          </div>
          <p className="text-teal-200 mb-8">Follow the circle. Breathe slowly and deeply.</p>
          <button onClick={reset} className="bg-teal-700 hover:bg-teal-600 px-8 py-3 rounded-full transition">Stop</button>
        </section>
      )}

      {/* Urge Surfing */}
      {phase === "urge-surfing" && (
        <section className="max-w-lg mx-auto px-8 pb-16 text-center">
          <div className="bg-teal-800 rounded-2xl p-10 mb-6">
            <p className="text-teal-200 mb-4">You've been riding this craving for</p>
            <p className="text-7xl font-bold text-teal-300 mb-4">{formatTime(urgeSeconds)}</p>
            <p className="text-teal-200 text-sm">Most cravings peak within 20 minutes and then fade. You're doing amazing.</p>
          </div>
          <div className="bg-teal-800 rounded-2xl p-6 mb-6 text-left">
            <p className="font-bold mb-2">🏄 How to Urge Surf:</p>
            <p className="text-teal-200 text-sm">Notice the craving without judgement. Observe where you feel it in your body. Watch it rise like a wave. Know it will crest and fall. You are not your craving — you are the surfer.</p>
          </div>
          <div className="flex gap-4 justify-center">
            <button onClick={() => setUrgeRunning(r => !r)}
              className="bg-teal-600 hover:bg-teal-500 px-8 py-3 rounded-full transition">
              {urgeRunning ? "⏸ Pause" : "▶️ Resume"}
            </button>
            <button onClick={reset} className="bg-teal-800 hover:bg-teal-700 px-8 py-3 rounded-full transition">Done</button>
          </div>
        </section>
      )}

      {/* Distraction */}
      {phase === "distraction" && (
        <section className="max-w-lg mx-auto px-8 pb-16 text-center">
          <div className="bg-teal-700 rounded-2xl p-10 mb-6">
            <p className="text-teal-200 mb-4">Your distraction right now:</p>
            <p className="text-2xl font-bold">{distraction}</p>
          </div>
          <div className="flex gap-4 justify-center">
            <button onClick={getRandomDistraction}
              className="bg-teal-600 hover:bg-teal-500 px-8 py-3 rounded-full transition">🎲 Try Another</button>
            <button onClick={reset}
              className="bg-teal-800 hover:bg-teal-700 px-8 py-3 rounded-full transition">Done</button>
          </div>
        </section>
      )}

      <footer className="text-center text-teal-300 py-8 text-sm">
        <a href="/" className="hover:text-white transition">← Back to Silent Safety</a>
      </footer>
    </main>
  );
}