"use client";
import { useState } from "react";

const defaultStructure = [
  { time: "7:00 AM", activity: "Wake up & drink a glass of water", icon: "💧", done: false },
  { time: "7:15 AM", activity: "5 minutes of deep breathing or meditation", icon: "🧘", done: false },
  { time: "7:30 AM", activity: "Healthy breakfast", icon: "🍳", done: false },
  { time: "8:00 AM", activity: "Short walk outside — even 10 minutes helps", icon: "🚶", done: false },
  { time: "9:00 AM", activity: "Daily check-in — log your mood", icon: "📋", done: false },
  { time: "10:00 AM", activity: "Productive activity — work, study or hobby", icon: "💼", done: false },
  { time: "12:00 PM", activity: "Lunch — eat slowly and mindfully", icon: "🍽️", done: false },
  { time: "1:00 PM", activity: "Rest or light activity", icon: "😌", done: false },
  { time: "2:00 PM", activity: "Connect with someone — call or message a friend", icon: "📞", done: false },
  { time: "3:00 PM", activity: "Recovery reading or resources", icon: "📚", done: false },
  { time: "4:00 PM", activity: "Exercise — walk, gym, yoga or stretching", icon: "🏃", done: false },
  { time: "5:00 PM", activity: "Prepare a healthy meal", icon: "🥗", done: false },
  { time: "6:00 PM", activity: "Dinner with no distractions", icon: "🍴", done: false },
  { time: "7:00 PM", activity: "Relaxing hobby — music, art, reading", icon: "🎨", done: false },
  { time: "8:00 PM", activity: "Write in your diary", icon: "📔", done: false },
  { time: "9:00 PM", activity: "Wind down — no screens, dim lights", icon: "🌙", done: false },
  { time: "9:30 PM", activity: "Gratitude — write 3 things you are grateful for", icon: "🙏", done: false },
  { time: "10:00 PM", activity: "Sleep — you did amazing today", icon: "😴", done: false },
];

export default function DailyStructure() {
  const [tasks, setTasks] = useState(defaultStructure);

  const toggle = (i: number) => {
    setTasks(prev => prev.map((t, idx) => idx === i ? { ...t, done: !t.done } : t));
  };

  const completed = tasks.filter(t => t.done).length;
  const percent = Math.round((completed / tasks.length) * 100);

  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-950 to-orange-900 text-white">
      <header className="flex justify-between items-center px-8 py-6">
        <a href="/" className="text-2xl font-bold tracking-tight">💙 Silent Safety</a>
        <a href="/emergency" className="bg-red-600 hover:bg-red-500 px-4 py-2 rounded-full text-sm font-semibold transition">🆘 Emergency</a>
      </header>

      <section className="max-w-2xl mx-auto px-8 py-10">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">🗓️</div>
          <h2 className="text-4xl font-bold mb-3">Daily Structure</h2>
          <p className="text-orange-200">Structure is one of the most powerful tools in recovery. Tick off each step as you go.</p>
        </div>

        {/* Progress Bar */}
        <div className="bg-orange-800 rounded-2xl p-6 mb-8">
          <div className="flex justify-between mb-2">
            <p className="font-bold">Today's Progress</p>
            <p className="font-bold text-orange-300">{completed}/{tasks.length}</p>
          </div>
          <div className="w-full bg-orange-700 rounded-full h-4 mb-2">
            <div className="bg-orange-400 h-4 rounded-full transition-all duration-500"
              style={{ width: `${percent}%` }} />
          </div>
          <p className="text-center text-orange-200 text-sm">
            {percent === 100 ? "🎉 You completed your whole day! Incredible!" : `${percent}% complete — keep going!`}
          </p>
        </div>

        {/* Task List */}
        <div className="grid gap-3">
          {tasks.map((task, i) => (
            <button key={i} onClick={() => toggle(i)}
              className={`flex items-center gap-4 p-4 rounded-xl transition text-left w-full ${task.done ? "bg-orange-700 opacity-75" : "bg-orange-800 hover:bg-orange-700"}`}>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition ${task.done ? "bg-orange-400 border-orange-400" : "border-orange-400"}`}>
                {task.done && <span className="text-white text-xs">✓</span>}
              </div>
              <div className="flex-1">
                <p className="text-orange-300 text-xs">{task.time}</p>
                <p className={`font-medium ${task.done ? "line-through text-orange-400" : ""}`}>
                  {task.icon} {task.activity}
                </p>
              </div>
            </button>
          ))}
        </div>
      </section>

      <footer className="text-center text-orange-300 py-8 text-sm">
        <a href="/" className="hover:text-white transition">← Back to Silent Safety</a>
      </footer>
    </main>
  );
}