export default function Emergency() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-red-950 to-red-900 text-white">
      
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-6">
        <a href="/" className="text-2xl font-bold tracking-tight">💙 Silent Safety</a>
      </header>

      {/* Hero */}
      <section className="text-center px-8 py-16">
        <div className="text-6xl mb-6">🆘</div>
        <h2 className="text-4xl font-bold mb-4">You are not alone right now.</h2>
        <p className="text-red-200 text-xl max-w-xl mx-auto mb-12">If you are in crisis, please reach out immediately. Help is available 24 hours a day, 7 days a week.</p>
      </section>

      {/* Emergency Contacts */}
      <section className="max-w-2xl mx-auto px-8 pb-16 grid gap-6">
        
        <a href="tel:116123" className="bg-red-800 hover:bg-red-700 rounded-2xl p-6 flex items-center gap-6 transition">
          <div className="text-5xl">📞</div>
          <div>
            <h3 className="text-xl font-bold">Samaritans</h3>
            <p className="text-red-200">Call 116 123 — Free, 24/7</p>
            <p className="text-red-300 text-sm mt-1">Confidential support for anyone in distress</p>
          </div>
        </a>

        <a href="tel:03001234650" className="bg-red-800 hover:bg-red-700 rounded-2xl p-6 flex items-center gap-6 transition">
          <div className="text-5xl">🤝</div>
          <div>
            <h3 className="text-xl font-bold">FRANK Drug Helpline</h3>
            <p className="text-red-200">Call 0300 123 4650 — Free, 24/7</p>
            <p className="text-red-300 text-sm mt-1">Friendly, confidential drugs advice</p>
          </div>
        </a>

        <a href="tel:0800917820" className="bg-red-800 hover:bg-red-700 rounded-2xl p-6 flex items-center gap-6 transition">
          <div className="text-5xl">💊</div>
          <div>
            <h3 className="text-xl font-bold">Alcohol Change UK</h3>
            <p className="text-red-200">Call 0800 917 8282 — Free</p>
            <p className="text-red-300 text-sm mt-1">Support for alcohol dependency</p>
          </div>
        </a>

        <a href="sms:85258" className="bg-red-800 hover:bg-red-700 rounded-2xl p-6 flex items-center gap-6 transition">
          <div className="text-5xl">💬</div>
          <div>
            <h3 className="text-xl font-bold">Shout Crisis Text Line</h3>
            <p className="text-red-200">Text SHOUT to 85258 — Free, 24/7</p>
            <p className="text-red-300 text-sm mt-1">Text based support if you can't talk</p>
          </div>
        </a>

        <a href="tel:999" className="bg-red-600 hover:bg-red-500 rounded-2xl p-6 flex items-center gap-6 transition">
          <div className="text-5xl">🚨</div>
          <div>
            <h3 className="text-xl font-bold">Emergency Services</h3>
            <p className="text-red-200">Call 999</p>
            <p className="text-red-300 text-sm mt-1">If you or someone else is in immediate danger</p>
          </div>
        </a>

      </section>

      {/* Footer */}
      <footer className="text-center text-red-300 py-8 text-sm">
        <a href="/" className="hover:text-white transition">← Back to Silent Safety</a>
      </footer>

    </main>
  )
}