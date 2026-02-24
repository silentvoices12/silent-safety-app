"use client";
import { useState } from "react";

export default function CoffeeFinder() {
  const [tab, setTab] = useState(0);
  const [location, setLocation] = useState("");
  const [cafes, setCafes] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [spaces, setSpaces] = useState<{name: string, address: string, notes: string}[]>([]);
  const [form, setForm] = useState({name: "", address: "", notes: ""});

  const findCafes = async () => {
    setLoading(true);
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords;
      const url = `https://nominatim.openstreetmap.org/search?q=cafe&format=json&limit=8&viewbox=${longitude-0.05},${latitude+0.05},${longitude+0.05},${latitude-0.05}&bounded=1`;
      const res = await fetch(url);
      const data = await res.json();
      setCafes(data);
      setLoading(false);
    }, () => setLoading(false));
  };

  const saveSpace = () => {
    if (form.name) {
      setSpaces([...spaces, form]);
      setForm({name: "", address: "", notes: ""});
    }
  };

  return (
    <main style={{background: "linear-gradient(135deg, #0a1628 0%, #0d2818 100%)", minHeight: "100vh", color: "#f5f0e8"}}>
      <header style={{borderBottom: "1px solid rgba(201,168,76,0.2)", padding: "1.5rem 2rem", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <div style={{display: "flex", alignItems: "center", gap: "0.75rem"}}>
          <img src="/logo.png" alt="Silent Voices" style={{height: "48px"}} />
          <div>
            <p style={{fontSize: "1.25rem", fontWeight: "bold", color: "#f5f0e8"}}>Silent Voices</p>
            <p style={{fontSize: "0.7rem", color: "#c9a84c", letterSpacing: "0.15em", textTransform: "uppercase"}}>Recovery App</p>
          </div>
        </div>
        <a href="/emergency" style={{background: "linear-gradient(135deg, #7f1d1d, #991b1b)", color: "#f5f0e8", padding: "0.6rem 1.2rem", borderRadius: "999px", fontSize: "0.85rem", fontWeight: "bold", textDecoration: "none"}}>🆘 Emergency</a>
      </header>

      <section style={{textAlign: "center", padding: "3rem 2rem 2rem"}}>
        <div style={{fontSize: "3.5rem", marginBottom: "1rem"}}>☕</div>
        <h2 style={{fontSize: "2.5rem", fontWeight: "bold", marginBottom: "0.75rem"}}>Coffee Shop Finder</h2>
        <p style={{color: "#c8bfa8", maxWidth: "500px", margin: "0 auto"}}>Find safe, welcoming spaces near you where you can relax and recharge.</p>
      </section>

      <div style={{display: "flex", justifyContent: "center", gap: "1rem", padding: "0 2rem 2rem"}}>
        {["Find Nearby", "My Safe Spaces"].map((t, i) => (
          <button key={i} onClick={() => setTab(i)} style={{
            padding: "0.75rem 2rem", borderRadius: "999px", fontWeight: "bold", fontSize: "0.9rem", cursor: "pointer", border: "none",
            background: tab === i ? "linear-gradient(135deg, #1e6040, #2d8a58)" : "rgba(201,168,76,0.1)",
            color: tab === i ? "#f5f0e8" : "#c8bfa8",
          }}>{t}</button>
        ))}
      </div>

      <div style={{maxWidth: "700px", margin: "0 auto", padding: "0 2rem 4rem"}}>
        {tab === 0 && (
          <div>
            <button onClick={findCafes} style={{
              width: "100%", padding: "1rem", borderRadius: "1rem", fontWeight: "bold", fontSize: "1rem", cursor: "pointer", border: "1px solid rgba(201,168,76,0.3)",
              background: "linear-gradient(135deg, #1e6040, #2d8a58)", color: "#f5f0e8", marginBottom: "1.5rem"
            }}>
              {loading ? "Finding cafes..." : "Find Cafes Near Me"}
            </button>
            {cafes.length === 0 && !loading && (
              <div style={{textAlign: "center", color: "#c8bfa8", padding: "3rem"}}>
                <p>Click the button to find cafes near your location.</p>
              </div>
            )}
            <div style={{display: "grid", gap: "1rem"}}>
              {cafes.map((cafe, i) => (
                <div key={i} style={{background: "linear-gradient(135deg, #0f2040, #0d2818)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "1rem", padding: "1.25rem", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                  <div>
                    <h3 style={{fontWeight: "bold", marginBottom: "0.25rem"}}>{cafe.display_name?.split(",")[0]}</h3>
                    <p style={{color: "#c8bfa8", fontSize: "0.85rem"}}>{cafe.display_name?.split(",").slice(1,3).join(",")}</p>
                  </div>
                  <a href={`https://www.google.com/maps/search/?api=1&query=${cafe.lat},${cafe.lon}`} target="_blank" rel="noopener noreferrer"
                    style={{background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.3)", color: "#c9a84c", padding: "0.5rem 1rem", borderRadius: "999px", textDecoration: "none", fontSize: "0.85rem", fontWeight: "bold"}}>
                    Directions
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === 1 && (
          <div>
            <div style={{background: "linear-gradient(135deg, #0f2040, #0d2818)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "1rem", padding: "1.5rem", marginBottom: "1.5rem"}}>
              <h3 style={{fontWeight: "bold", marginBottom: "1rem", color: "#c9a84c"}}>Add a Safe Space</h3>
              {["name", "address", "notes"].map((field) => (
                <input key={field} placeholder={field.charAt(0).toUpperCase() + field.slice(1)} value={(form as any)[field]}
                  onChange={e => setForm({...form, [field]: e.target.value})}
                  style={{width: "100%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "0.5rem", padding: "0.75rem", color: "#f5f0e8", marginBottom: "0.75rem", fontSize: "0.9rem"}} />
              ))}
              <button onClick={saveSpace} style={{background: "linear-gradient(135deg, #1e6040, #2d8a58)", color: "#f5f0e8", padding: "0.75rem 2rem", borderRadius: "999px", fontWeight: "bold", border: "none", cursor: "pointer"}}>Save Space</button>
            </div>
            {spaces.length === 0 && <p style={{textAlign: "center", color: "#c8bfa8"}}>No safe spaces saved yet.</p>}
            <div style={{display: "grid", gap: "1rem"}}>
              {spaces.map((s, i) => (
                <div key={i} style={{background: "linear-gradient(135deg, #0f2040, #0d2818)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "1rem", padding: "1.25rem"}}>
                  <h3 style={{fontWeight: "bold", marginBottom: "0.25rem"}}>{s.name}</h3>
                  <p style={{color: "#c8bfa8", fontSize: "0.85rem"}}>{s.address}</p>
                  {s.notes && <p style={{color: "#c9a84c", fontSize: "0.85rem", marginTop: "0.5rem"}}>{s.notes}</p>}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <footer style={{textAlign: "center", padding: "2rem", borderTop: "1px solid rgba(201,168,76,0.1)"}}>
        <a href="/" style={{color: "#c8bfa8", textDecoration: "none"}}>← Back to Silent Voices</a>
      </footer>
    </main>
  );
}