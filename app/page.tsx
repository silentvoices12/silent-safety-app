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
      <section className="text-center px-8 py-24">
        <h2 className="text-5xl font-bold mb-6 leading-tight">You are not alone.<br/>Recovery is possible.</h2>
        <p className="text-blue-200 text-xl mb-10 max-w-xl mx-auto">A free, safe space for people in recovery, their friends and family. Check in daily, find support, and access resources anytime.</p>
        <a href="/signup" className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-full text-lg font-semibold transition">Get Started — It's Free</a>
      </section>

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-8 py-16 max-w-6xl mx-auto">
        <div className="bg-blue-800 rounded-2xl p-6">
          <div className="text-4xl mb-4">📋</div>
          <h3 className="text-xl font-bold mb-2">Daily Check-ins</h3>
          <p className="text-blue-200">Track your mood and progress every day. Celebrate your wins, however small.</p>
        </div>
        <div className="bg-blue-800 rounded-2xl p-6">
          <div className="text-4xl mb-4">🆘</div>
          <h3 className="text-xl font-bold mb-2">Emergency Help</h3>
          <p className="text-blue-200">Instant access to crisis support when you need it most. You are never alone.</p>
        </div>
        <div className="bg-blue-800 rounded-2xl p-6">
          <div className="text-4xl mb-4">💬</div>
          <h3 className="text-xl font-bold mb-2">Community</h3>
          <p className="text-blue-200">Connect with others who understand. Share your journey in a safe, supportive space.</p>
        </div>
        <div className="bg-blue-800 rounded-2xl p-6">
          <div className="text-4xl mb-4">📚</div>
          <h3 className="text-xl font-bold mb-2">Resources</h3>
          <p className="text-blue-200">Articles, guides and tools for people in recovery and their loved ones.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-blue-300 py-8 text-sm">
        <p>💙 Silent Safety — Free forever. Built with love for those who need it.</p>
      </footer>

    </main>
  )
}