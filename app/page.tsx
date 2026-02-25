export default function Home() {
  return (
    <main style={{ textAlign: 'center', padding: '50px', fontFamily: 'sans-serif' }}>
      <h1>Silent Voices Recovery</h1>
      <p>Healing, Support, and Community</p>
      
      <div style={{ margin: '20px 0' }}>
        <a href="/app-debug.apk" download="SilentVoices.apk">
          <button style={{ 
            padding: '15px 30px', 
            backgroundColor: 'green', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px',
            fontSize: '18px',
            cursor: 'pointer' 
          }}>
            Download Android App
          </button>
        </a>
      </div>

      <div style={{ marginTop: '30px', textAlign: 'left', display: 'inline-block' }}>
        <h3>Instructions:</h3>
        <ol>
          <li>Tap the button above.</li>
          <li>If your phone warns you, tap "Download Anyway."</li>
          <li>Open the file and tap "Install."</li>
        </ol>
      </div>
    </main>
  );
}
