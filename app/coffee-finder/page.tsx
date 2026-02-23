export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-950 to-blue-900 text-white">

      {/* Header */}
      <header className="flex justify-between items-center px-8 py-6">
        <h1 className="text-2xl font-bold tracking-tight">💙 Silent Safety</h1>
        <div className="flex gap-4">
          <a href="/login" className="text-blue-200 hover:text-white transition">Login</a>
          <a href="/signup" className="bg-blue-500 hover:bg-blue-400 px-4 py-2 rounded-full text-sm font-semibold transition">Join Free</a>
        </div>
      </header>

      {/* Hero */}
      <section className="text-center px-8 py-16">
        <h2 className="text-5xl font-bold mb-6 leading-tight">You are not alone.<br/>Recovery is possible.</h2>
        <p className="text-blue-200 text-xl mb-10 max-w-xl mx-auto">A free, safe space for people in recovery, their friends and family.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/checkin" className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-full text-lg font-semibold transition">Get Started — It's Free</a>
          <a href="/emergency" className="bg-red-600 hover:bg-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition">🆘 Emergency Help</a>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-6xl mx-auto px-8 py-10">
        <h3 className="text-2xl font-bold text-center mb-8 text-blue-200">Everything you need, all free</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

          <a href="/checkin" className="bg-blue-800 hover:bg-blue-700 rounded-2xl p-6 transition text-center">
            <div className="text-4xl mb-3">📋</div>
            <h3 className="font-bold mb-1">Daily Check-in</h3>
            <p className="text-blue-300 text-sm">Track your mood and progress</p>
          </a>

          <a href="/craving-cooler" className="bg-teal-800 hover:bg-teal-700 rounded-2xl p-6 transition text-center">
            <div className="text-4xl mb-3">🧊</div>
            <h3 className="font-bold mb-1">Craving Cooler</h3>
            <p className="text-teal-300 text-sm">Ride out cravings with tools</p>
          </a>

          <a href="/diary" className="bg-purple-800 hover:bg-purple-700 rounded-2xl p-6 transition text-center">
            <div className="text-4xl mb-3">📔</div>
            <h3 className="font-bold mb-1">My Diary</h3>
            <p className="text-purple-300 text-sm">Private space to write freely</p>
          </a>

          <a href="/daily-structure" className="bg-orange-800 hover:bg-orange-700 rounded-2xl p-6 transition text-center">
            <div className="text-4xl mb-3">🗓️</div>
            <h3 className="font-bold mb-1">Daily Structure</h3>
            <p className="text-orange-300 text-sm">Build healthy daily routines</p>
          </a>

          <a href="/celebration" className="bg-yellow-800 hover:bg-yellow-700 rounded-2xl p-6 transition text-center">
            <div className="text-4xl mb-3">🎉</div>
            <h3 className="font-bold mb-1">Celebration</h3>
            <p className="text-yellow-300 text-sm">Celebrate your daily wins</p>
          </a>

          <a href="/milestone" className="bg-blue-800 hover:bg-blue-700 rounded-2xl p-6 transition text-center">
            <div className="text-4xl mb-3">🏆</div>
            <h3 className="font-bold mb-1">Milestone Certificate</h3>
            <p className="text-blue-300 text-sm">Download your achievement</p>
          </a>

          <a href="/music" className="bg-pink-800 hover:bg-pink-700 rounded-2xl p-6 transition text-center">
            <div className="text-4xl mb-3">🎵</div>
            <h3 className="font-bold mb-1">Recovery Music</h3>
            <p className="text-pink-300 text-sm">Playlists for every moment</p>
          </a>

          <a href="/concentration" className="bg-indigo-800 hover:bg-indigo-700 rounded-2xl p-6 transition text-center">
            <div className="text-4xl mb-3">🧠</div>
            <h3 className="font-bold mb-1">Concentration Pack</h3>
            <p className="text-indigo-300 text-sm">Focus timer and tools</p>
          </a>

          <a href="/coffee-finder" className="bg-amber-800 hover:bg-amber-700 rounded-2xl p-6 transition text-center">
            <div className="text-4xl mb-3">☕</div>
            <h3 className="font-bold mb-1">Coffee Shop Finder</h3>
            <p className="text-amber-300 text-sm">Find your safe spaces nearby</p>
          </a>

          <a href="/resources" className="bg-blue-800 hover:bg-blue-700 rounded-2xl p-6 transition text-center">
            <div className="text-4xl mb-3">📚</div>
            <h3 className="font-bold mb-1">Resources</h3>
            <p className="text-blue-300 text-sm">200 free recovery resources</p>
          </a>

          <a href="/emergency" className="bg-red-800 hover:bg-red-700 rounded-2xl p-6 transition text-center">
            <div className="text-4xl mb-3">🆘</div>
            <h3 className="font-bold mb-1">Emergency Help</h3>
            <p className="text-red-300 text-sm">Crisis support 24/7</p>
          </a>

        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-blue-300 py-10 text-sm">
        <p>💙 Silent Safety — Free forever. Built with love for those who need it.</p>
      </footer>

    </main>
  );
}
```

Save with **Ctrl + S** then let's push everything live at once:
```
git add . ; git commit -m "add all features" ; git push ; vercel --prod