import Image from "next/image";

export default function Home() {
  return (export default function Home() {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '50px', fontFamily: 'sans-serif' }}>
      
      {/* 1. Your Logo */}
      <img src="/logo.png" alt="Silent Voices Logo" style={{ width: '150px', borderRadius: '20px', marginBottom: '20px' }} />

      {/* 2. Your Heading */}
      <h1 style={{ color: '#333' }}>Silent Voices Recovery</h1>
      <p style={{ maxWidth: '400px', textAlign: 'center', color: '#666' }}>
        Healing, Support, and Community. Download our official Android app below.
      </p>

      {/* 3. The Download Button */}
      <a href="/app-debug.apk" download="SilentVoices.apk" style={{ marginTop: '20px' }}>
        <button style={{
          backgroundColor: '#28a745',
          color: 'white',
          padding: '15px 30px',
          border: 'none',
          borderRadius: '50px',
          fontSize: '18px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}>
          Download for Android
        </button>
      </a>

      {/* 4. Simple Instructions */}
      <div style={{ marginTop: '40px', fontSize: '14px', color: '#888', textAlign: 'center' }}>
        <p><strong>Instructions:</strong></p>
        <p>1. Tap Download. 2. Select "Download Anyway." <br/> 3. Open the file and tap "Install."</p>
      </div>

    </main>
  );
}
    )", minHeight: "100vh", color: "#f5f0e8"}}>

      <header style={{borderBottom: "1px solid rgba(201,168,76,0.2)", padding: "1.5rem 2rem", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <div style={{display: "flex", alignItems: "center", gap: "0.75rem"}}>
          <img src="/logo.png" alt="Silent Voices" style={{height: "48px", width: "auto"}} />
          <div>
            <p style={{fontSize: "1.25rem", fontWeight: "bold", color: "#f5f0e8", letterSpacing: "0.05em"}}>Silent Voices</p>
            <p style={{fontSize: "0.7rem", color: "#c9a84c", letterSpacing: "0.15em", textTransform: "uppercase"}}>Recovery App</p>
          </div>
        </div>
        <a href="/emergency" style={{background: "linear-gradient(135deg, #7f1d1d, #991b1b)", color: "#f5f0e8", padding: "0.6rem 1.2rem", borderRadius: "999px", fontSize: "0.85rem", fontWeight: "bold", textDecoration: "none", border: "1px solid rgba(255,100,100,0.3)"}}>
          🆘 Emergency
        </a>
      </header>

      <section style={{textAlign: "center", padding: "5rem 2rem 4rem"}}>
        <div style={{display: "inline-block", background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.3)", borderRadius: "999px", padding: "0.4rem 1.2rem", marginBottom: "2rem"}}>
          <p style={{color: "#c9a84c", fontSize: "0.8rem", letterSpacing: "0.2em", textTransform: "uppercase"}}>Free Forever — Built With Love</p>
        </div>
        <h1 style={{fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: "bold", lineHeight: "1.15", marginBottom: "1.5rem", color: "#f5f0e8"}}>
          You are not alone.<br/>
          <span style={{color: "#c9a84c"}}>Recovery is possible.</span>
        </h1>
        <p style={{fontSize: "1.2rem", color: "#c8bfa8", maxWidth: "600px", margin: "0 auto 3rem", lineHeight: "1.7"}}>
          A free, safe and confidential space for people in recovery, their friends and family. Every tool you need, in one place.
        </p>
        <div style={{display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap"}}>
          <a href="/checkin" style={{background: "linear-gradient(135deg, #1e6040, #2d8a58)", color: "#f5f0e8", padding: "1rem 2.5rem", borderRadius: "999px", fontSize: "1rem", fontWeight: "bold", textDecoration: "none"}}>
            Begin Your Journey
          </a>
          <a href="/emergency" style={{background: "rgba(127,29,29,0.3)", color: "#f5f0e8", padding: "1rem 2.5rem", borderRadius: "999px", fontSize: "1rem", fontWeight: "bold", textDecoration: "none", border: "1px solid rgba(255,100,100,0.3)"}}>
            🆘 Emergency Help
          </a>
        </div>
      </section>

      <div style={{maxWidth: "800px", margin: "0 auto", borderTop: "1px solid rgba(201,168,76,0.15)", marginBottom: "3rem"}} />

      <section style={{maxWidth: "1200px", margin: "0 auto", padding: "0 2rem 5rem"}}>
        <p style={{textAlign: "center", color: "#c9a84c", letterSpacing: "0.2em", textTransform: "uppercase", fontSize: "0.8rem", marginBottom: "1rem"}}>Everything You Need</p>
        <h2 style={{textAlign: "center", fontSize: "2rem", fontWeight: "bold", color: "#f5f0e8", marginBottom: "3rem"}}>Your Recovery Toolkit</h2>
        <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "1.25rem"}}>
          {[
            { href: "/checkin", icon: "📋", title: "Daily Check-in", desc: "Track your mood and progress every day", color: "#1e6040" },
            { href: "/craving-cooler", icon: "🧊", title: "Craving Cooler", desc: "Ride out cravings with proven tools", color: "#0f2040" },
            { href: "/diary", icon: "📔", title: "My Diary", desc: "A private space to write freely", color: "#1a1a3e" },
            { href: "/daily-structure", icon: "🗓️", title: "Daily Structure", desc: "Build healthy routines that stick", color: "#1e3a20" },
            { href: "/celebration", icon: "🎉", title: "Celebration", desc: "Honour your wins however small", color: "#2a1a0e" },
            { href: "/milestone", icon: "🏆", title: "Milestone Certificate", desc: "Download your achievement certificate", color: "#1a2a1a" },
            { href: "/music", icon: "🎵", title: "Recovery Music", desc: "Curated playlists for every moment", color: "#1a0f2e" },
            { href: "/concentration", icon: "🧠", title: "Concentration Pack", desc: "Pomodoro timer and focus tools", color: "#0f1a2e" },
            { href: "/coffee-finder", icon: "☕", title: "Coffee Shop Finder", desc: "Find safe welcoming spaces nearby", color: "#2a1a0a" },
            { href: "/resources", icon: "📚", title: "Resources", desc: "200 free recovery resources", color: "#0f2818" },
            { href: "/family-hub", icon: "👨‍👩‍👧", title: "Family Hub", desc: "Support for friends and loved ones", color: "#2a0f1a" },
            { href: "/emergency", icon: "🆘", title: "Emergency Help", desc: "Crisis support available 24/7", color: "#2a0f0f" },
          ].map((item, i) => (
            <a key={i} href={item.href} style={{
              background: `linear-gradient(135deg, ${item.color}, #0a1628)`,
              border: "1px solid rgba(201,168,76,0.15)",
              borderRadius: "1rem",
              padding: "1.5rem",
              textDecoration: "none",
              color: "#f5f0e8",
              display: "block",
            }}>
              <div style={{fontSize: "2.5rem", marginBottom: "0.75rem"}}>{item.icon}</div>
              <h3 style={{fontSize: "1rem", fontWeight: "bold", marginBottom: "0.4rem", color: "#f5f0e8"}}>{item.title}</h3>
              <p style={{fontSize: "0.8rem", color: "#c8bfa8", lineHeight: "1.5"}}>{item.desc}</p>
            </a>
          ))}
        </div>
      </section>

      <section style={{background: "linear-gradient(135deg, #0d2818, #0f2040)", borderTop: "1px solid rgba(201,168,76,0.15)", borderBottom: "1px solid rgba(201,168,76,0.15)", padding: "4rem 2rem", textAlign: "center"}}>
        <p style={{fontSize: "1.5rem", color: "#c9a84c", fontStyle: "italic", maxWidth: "700px", margin: "0 auto", lineHeight: "1.8"}}>
          "Recovery is not a race. You do not have to feel guilty if it takes you longer than you thought it would."
        </p>
      </section>

      <footer style={{textAlign: "center", padding: "3rem 2rem", borderTop: "1px solid rgba(201,168,76,0.1)"}}>
        <img src="/logo.png" alt="Silent Voices" style={{height: "40px", margin: "0 auto 1rem", display: "block"}} />
        <p style={{color: "#c8bfa8", fontSize: "0.85rem"}}>Silent Voices Recovery App — Free forever. Built with love for those who need it.</p>
        <p style={{color: "#c9a84c", fontSize: "0.75rem", marginTop: "0.5rem"}}>💙 You are not alone</p>
      </footer>

    </main>
  );
}
