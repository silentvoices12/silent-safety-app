"use client";
import { useState, useEffect, useRef } from "react";

const focusTips = [
  "📵 Put your phone face down and on silent",
  "💧 Have a glass of water on your desk",
  "📝 Write down your ONE goal for this session",
  "🎧 Use headphones to block out distractions",
  "🌡️ Make sure the room is a comfortable temperature",
  "🪑 Sit up straight and feel your feet on the floor",
];

const tasks = [
  "Write down 3 things you want to achieve today",
  "Read one chapter of a book",
  "Write in your diary for 10 minutes",
  "Research one topic that interests you",
  "Plan your week ahead",
  "Write a letter to your future self",
  "Learn something new for 25 minutes",
  "Work on a creative project",
];

export default function Concentration() {
  const [timerMode, setTimerMode] = useState<"pomodoro" | "short" | "long">("pomodoro");
  const [seconds, setSeconds] = useState(25 * 60);
  const [running, setRunning] = useState(false);
  const [finished, setFinished] = useState(false);
  const [sessions, setSessions] = useState(0);
  const [task, setTask] = useState("");
  const [randomTask, setRandomTask] = useState("");
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const modes = {
    pomodoro: { label: "🍅 Focus", seconds: 25 * 60 },
    short: { label: "☕ Short Break", seconds: 5 * 60 },
    long: { label: "🛋️ Long Break", seconds: 15 * 60 },
  };

  useEffect(() => {
    if (!running) return;
    intervalRef.current = setInterval(() => {
      setSeconds(s => {
        if (s <= 1) {
          clearInterval(intervalRef.current!);
          setRunning(false);
          setFinished(true);
          setSessions(prev => prev + 1);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [running]);

  const setMode = (mode: "pomodoro" | "short" | "long") => {
    setTimerMode(mode);
    setSeconds(modes[mode].seconds);
    setRunning(false);
    setFinished(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const toggle = () => {
    setFinished(false);
    setRunning(r => !r);
  };

  const reset = () => {
    setRunning(false);
    setFinished(false);
    setSeconds(modes[timerMode].seconds);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const formatTime = (s: number) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

  const percent = ((modes[timerMode].seconds - seconds) / modes[timerMode].seconds) * 100;

  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-950 to-indigo-900 text-white">
      <header className="flex justify-between items-center px-8 py-6">
        <a href="/" className="text-2xl font-bold tracking-tight">💙 Silent Safety</a>
        <a href="/emergency" className="bg-red-600 hover:bg-red-500 px-4 py-2 rounded-full text-sm font-semibold transition">🆘 Emergency</a>
      </header>

      <section className="max-w-2xl mx-auto px-8 py-10">
        <div className="text-center mb-10">
          <div className="text-6xl mb-4">🧠</div>
          <h2 className="text-4xl font-bold mb-3">Concentration Pack</h2>
          <p className="text-indigo-200">Use the Pomodoro technique to stay focused. 25 minutes on, 5 minutes off.</p>
        </div>

        {/* Mode Selector */}
        <div className="flex gap-3 justify-center mb-8">
          {(Object.keys(modes) as Array<keyof typeof modes>).map(mode => (
            <button key={mode} onClick={() => setMode(mode)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition ${timerMode === mode ? "bg-indigo-500" : "bg-indigo-800 hover:bg-indigo-700"}`}>
              {modes[mode].label}
            </button>
          ))}
        </div>

        {/* Timer */}
        <div className="bg-indigo-800 rounded-3xl p-10 text-center mb-8">
          <div className="relative w-48 h-48 mx-auto mb-6">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="#3730a3" strokeWidth="8" />
              <circle cx="50" cy="50" r="45" fill="none" stroke="#818cf8" strokeWidth="8"
                strokeDasharray={`${2 * Math.PI * 45}`}
                strokeDashoffset={`${2 * Math.PI * 45 * (1 - percent / 100)}`}
                className="transition-all duration-1000" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-5xl font-bold">{formatTime(seconds)}</p>
            </div>
          </div>

          {finished && <p className="text-indigo-200 mb-4 text-lg font-bold">🎉 Session complete! Take a break.</p>}
          <p className="text-indigo-300 mb-6">Sessions completed today: <span className="font-bold text-white">{sessions}</span></p>

          <div className="flex gap-4 justify-center">
            <button onClick={toggle}
              className="bg-indigo-500 hover:bg-indigo-400 px-10 py-3 rounded-full font-bold transition">
              {running ? "⏸ Pause" : "▶️ Start"}
            </button>
            <button onClick={reset}
              className="bg-indigo-700 hover:bg-indigo-600 px-6 py-3 rounded-full font-bold transition">
              🔄 Reset
            </button>
          </div>
        </div>

        {/* Task Input */}
        <div className="bg-indigo-800 rounded-2xl p-6 mb-6">
          <p className="font-bold mb-3">What are you focusing on?</p>
          <input value={task} onChange={e => setTask(e.target.value)}
            placeholder="e.g. Read chapter 3, write in diary..."
            className="w-full bg-indigo-700 rounded-xl p-4 text-white placeholder-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 mb-3" />
          <button onClick={() => setRandomTask(tasks[Math.floor(Math.random() * tasks.length)])}
            className="text-indigo-300 hover:text-white text-sm transition">🎲 Give me a random task idea</button>
          {randomTask && <p className="text-indigo-200 mt-2 text-sm">💡 Try this: {randomTask}</p>}
        </div>

        {/* Focus Tips */}
        <div className="bg-indigo-800 rounded-2xl p-6">
          <p className="font-bold mb-4">💡 Before you start:</p>
          <div className="grid gap-2">
            {focusTips.map((tip, i) => (
              <p key={i} className="text-indigo-200 text-sm">{tip}</p>
            ))}
          </div>
        </div>
      </section>

      <footer className="text-center text-indigo-300 py-8 text-sm">
        <a href="/" className="hover:text-white transition">← Back to Silent Safety</a>
      </footer>
    </main>
  );
}
```

Save with **Ctrl + S** then run:
```
code app\coffee-finder\page.tsx