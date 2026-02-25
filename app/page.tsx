'use client';

export default function Home() {
  return (
    <main style={{ textAlign: 'center', padding: '50px', fontFamily: 'sans-serif' }}>
      {/* 1. The Logo */}
      <img 
        src="logo.png" 
        alt="Logo" 
        style={{ width: '120px', borderRadius: '20px' }} 
        onError={(e) => (e.currentTarget.style.display = 'none')} 
      />

      <h1>Silent Voices Recovery</h1>
      <p>Healing and Community Support</p>

      {/* 2. The Download Button */}
      <div style={{ margin: '30px 0' }}>
        <a href="app-debug.apk" download="SilentVoices.apk">
          <button style={{ 
            padding: '15px 30px', 
            backgroundColor: '#28a745', 
            color: 'white', 
            border: 'none', 
            borderRadius: '50px',
            fontSize: '18px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}>
            Download Android App
          </button>
        </a>
      </div>

      {/* 3. The Instruction Box */}
      <div style={{ marginTop: '20px', color: '#666', fontSize: '14px' }}>
        <p><strong>Note:</strong> If the button doesn't start the download, <br /> 
        long-press it and select "Download link".</p>
      </div>
    </main>
  );
}
