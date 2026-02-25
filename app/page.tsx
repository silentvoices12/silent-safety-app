'use client';

export default function Home() {
  const handleDownload = () => {
    window.location.href = '/app-debug.apk';
  };

  return (
    <main style={{ textAlign: 'center', padding: '50px', fontFamily: 'sans-serif' }}>
      <img src="/logo.png" alt="Logo" style={{ width: '100px', marginBottom: '20px' }} />
      <h1>Silent Voices Recovery</h1>
      <p>Tap below to install the app.</p>

      <div style={{ margin: '30px 0' }}>
        <button 
          onClick={handleDownload}
          style={{ 
            padding: '20px 40px', 
            backgroundColor: '#28a745', 
            color: 'white', 
            borderRadius: '50px',
            fontSize: '20px',
            border: 'none',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          Download Official App
        </button>
      </div>

      <div style={{ marginTop: '40px', color: '#666' }}>
        <p>If tapping doesn't work, hold the button down and select "Download Link".</p>
      </div>
    </main>
  );
}
