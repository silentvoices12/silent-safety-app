"use client";
import { useState } from "react";

const playlists = [
  {
    category: "🌅 Morning Motivation",
    songs: [
      { title: "Eye of the Tiger", artist: "Survivor", videoId: "btPJPFnesV4" },
      { title: "Here Comes the Sun", artist: "The Beatles", videoId: "KQetemT1sWc" },
      { title: "Beautiful Day", artist: "U2", videoId: "co6WMzDOh1o" },
      { title: "Walking on Sunshine", artist: "Katrina & The Waves", videoId: "iPUmE-tne5U" },
      { title: "Good as Hell", artist: "Lizzo", videoId: "SmbmeOgWsqE" },
      { title: "Rise Up", artist: "Andra Day", videoId: "lwgr_IMeEgA" },
      { title: "Roar", artist: "Katy Perry", videoId: "CevxZvSJLk8" },
      { title: "Fight Song", artist: "Rachel Platten", videoId: "xo1VInw-SKc" },
    ]
  },
  {
    category: "🧘 Calm & Peace",
    songs: [
      { title: "Weightless", artist: "Marconi Union", videoId: "UfcAVejslrU" },
      { title: "Claire de Lune", artist: "Debussy", videoId: "CvFH_6DNRCY" },
      { title: "Somewhere Over the Rainbow", artist: "Israel Kamakawiwoʻole", videoId: "V1bFr2SWP1I" },
      { title: "The Sound of Silence", artist: "Simon & Garfunkel", videoId: "4zLfCnGVeL4" },
      { title: "Pure Shores", artist: "All Saints", videoId: "pSFuGCCpGNM" },
      { title: "Breathe", artist: "Pink Floyd", videoId: "mrojrDCI02k" },
      { title: "Waterfall", artist: "The Stone Roses", videoId: "QpFPpFQFkgI" },
      { title: "Fix You", artist: "Coldplay", videoId: "k4V3Mo61fJM" },
    ]
  },
  {
    category: "💪 Strength & Recovery",
    songs: [
      { title: "Not Afraid", artist: "Eminem", videoId: "j5-yKhDd64s" },
      { title: "Stronger", artist: "Kelly Clarkson", videoId: "Xn676-fLq7I" },
      { title: "Survivor", artist: "Destiny's Child", videoId: "Wmc8bQoL-J0" },
      { title: "I Will Survive", artist: "Gloria Gaynor", videoId: "ARt9HV9T0w8" },
      { title: "Beautiful", artist: "Christina Aguilera", videoId: "eAfyFTzZDMM" },
      { title: "Man in the Mirror", artist: "Michael Jackson", videoId: "PivWY9wn5ps" },
      { title: "Hall of Fame", artist: "The Script", videoId: "mk48xbywa3c" },
      { title: "Titanium", artist: "David Guetta ft Sia", videoId: "JRfuAukYTKg" },
    ]
  },
  {
    category: "🌙 Evening Wind Down",
    songs: [
      { title: "Skinny Love", artist: "Bon Iver", videoId: "ssdgFoHLwnk" },
      { title: "The Night Will Always Win", artist: "Manchester Orchestra", videoId: "bITQo8GXMBI" },
      { title: "Holocene", artist: "Bon Iver", videoId: "TWcyIpul8OE" },
      { title: "Lua", artist: "Bright Eyes", videoId: "oHNSdkl3Js4" },
      { title: "To Build a Home", artist: "The Cinematic Orchestra", videoId: "kpnX_JHXlS4" },
      { title: "First Day of My Life", artist: "Bright Eyes", videoId: "R9gPGMDkHhE" },
      { title: "The Night", artist: "Frankie Valli", videoId: "0Vu7V2aMpek" },
      { title: "Lullaby", artist: "Sigrid", videoId: "5e3psVE6OMs" },
    ]
  },
];

export default function Music() {
  const [videoId, setVideoId] = useState<string | null>(null);
  const [nowPlaying, setNowPlaying] = useState<string | null>(null);

  const play = (videoId: string, title: string, artist: string) => {
    setVideoId(videoId);
    setNowPlaying(`${title} — ${artist}`);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-950 to-pink-900 text-white">
      <header className="flex justify-between items-center px-8 py-6">
        <a href="/" className="text-2xl font-bold tracking-tight">💙 Silent Safety</a>
        <a href="/emergency" className="bg-red-600 hover:bg-red-500 px-4 py-2 rounded-full text-sm font-semibold transition">🆘 Emergency</a>
      </header>

      <section className="text-center px-8 py-10">
        <div className="text-6xl mb-4">🎵</div>
        <h2 className="text-4xl font-bold mb-3">Recovery Music</h2>
        <p className="text-pink-200 text-lg max-w-lg mx-auto">Music heals. These playlists are curated for every moment of your recovery journey.</p>
      </section>

      {nowPlaying && (
        <div className="max-w-2xl mx-auto px-8 mb-6">
          <div className="bg-pink-700 rounded-2xl p-4 flex items-center justify-between">
            <p className="text-sm font-medium">▶️ Now Playing: {nowPlaying}</p>
            <button onClick={() => { setVideoId(null); setNowPlaying(null); }}
              className="text-pink-200 hover:text-white text-xl">✕</button>
          </div>
        </div>
      )}

      <section className="max-w-4xl mx-auto px-8 pb-16 grid gap-8">
        {playlists.map((playlist, pi) => (
          <div key={pi} className="bg-pink-800 rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4">{playlist.category}</h3>
            <div className="grid gap-2">
              {playlist.songs.map((song, si) => (
                <button key={si} onClick={() => play(song.videoId, song.title, song.artist)}
                  className={`flex items-center gap-4 p-3 rounded-xl transition text-left w-full ${videoId === song.videoId ? "bg-pink-500" : "bg-pink-700 hover:bg-pink-600"}`}>
                  <span className="text-xl">{videoId === song.videoId ? "▶️" : "🎵"}</span>
                  <div>
                    <p className="font-medium">{song.title}</p>
                    <p className="text-pink-300 text-sm">{song.artist}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </section>

      {videoId && (
        <div className="fixed bottom-0 left-0 right-0 bg-pink-900 border-t border-pink-700 p-4">
          <iframe width="100%" height="80"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen className="rounded-xl" />
        </div>
      )}

      <footer className="text-center text-pink-300 py-8 text-sm pb-32">
        <a href="/" className="hover:text-white transition">← Back to Silent Safety</a>
      </footer>
    </main>
  );
}
```

Save with **Ctrl + S** then run:
```
code app\concentration\page.tsx