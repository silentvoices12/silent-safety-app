"use client";
export default function Emergency() {
  return (
    <main style={{background: "linear-gradient(135deg, #0a1628 0%, #1a0a0a 100%)", minHeight: "100vh", color: "#f5f0e8"}}>
      <header style={{borderBottom: "1px solid rgba(201,168,76,0.2)", padding: "1.5rem 2rem", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <div style={{display: "flex", alignItems: "center", gap: "0.75rem"}}>
          <img src="/logo.png" alt="Silent Voices" style={{height: "48px"}} />
          <div>
            <p style={{fontSize: "1.25rem", fontWeight: "bold", color: "#f5f0e8"}}>Silent Voices</p>
            <p style={{fontSize: "0.7rem", color: "#c9a84c", letterSpacing: "0.15em", textTransform: "uppercase"}}>Recovery App</p>
          </div>
        </div>
        <a href="/" style={{color: "#c8bfa8", textDecoration: "none", fontSize: "0.9rem"}}>← Back</a>
      </header>

      <section style={{textAlign: "center", padding: "4rem 2rem 2rem"}}>
        <div style={{fontSize: "4rem", marginBottom: "1rem"}}>🆘</div>
        <h2 style={{fontSize: "3rem", fontWeight: "bold", color: "#f5f0e8", marginBottom: "1rem"}}>Emergency Help</h2>
        <p style={{color: "#c8bfa8", fontSize: "1.1rem", maxWidth: "500px", margin: "0 auto"}}>You are not alone. Please reach out right now — help is available 24 hours a day.</p>
      </section>

      <div style={{maxWidth: "700px", margin: "0 auto", padding: "2rem", display: "grid", gap: "1rem"}}>
        {[
          { name: "Samaritans", number: "116 123", desc: "Free 24/7 emotional support", action: "tel:116123" },
          { name: "FRANK Drug Helpline", number: "0300 123 6600", desc: "Free confidential drug advice", action: "tel:03001236600" },
          { name: "Alcohol Change UK", number: "0300 123 1110", desc: "Alcohol support helpline", action: "tel:03001231110" },
          { name: "Shout — Text Support", number: "Text SHOUT to 85258", desc: "Free 24/7 text crisis support", action: "sms:85258?body=SHOUT" },
          { name: "Emergency Services", number: "999", desc: "If you or someone is in immediate danger", action: "tel:999" },
        ].map((item, i) => (
          <a key={i} href={item.action} style={{
            background: "linear-gradient(135deg, #1a0f0f, #0a1628)",
            border: "1px solid rgba(201,168,76,0.2)",
            borderRadius: "1rem",
            padding: "1.5rem 2rem",
            textDecoration: "none",
            color: "#f5f0e8",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
            <div>
              <h3 style={{fontSize: "1.2rem", fontWeight: "bold", color: "#f5f0e8", marginBottom: "0.25rem"}}>{item.name}</h3>
              <p style={{color: "#c8bfa8", fontSize: "0.85rem"}}>{item.desc}</p>
            </div>
            <div style={{color: "#c9a84c", fontWeight: "bold", fontSize: "1.1rem", textAlign: "right"}}>{item.number}</div>
          </a>
        ))}
      </div>

      <footer style={{textAlign: "center", padding: "3rem 2rem"}}>
        <a href="/" style={{color: "#c8bfa8", textDecoration: "none", fontSize: "0.9rem"}}>← Back to Silent Voices</a>
      </footer>
    </main>
  );
}