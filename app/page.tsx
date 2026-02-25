import React from 'react';

export default function Home() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh',
      padding: '20px',
      fontFamily: 'sans-serif',
      textAlign: 'center'
    }}>
      {/* logo.png must be in your /public folder */}
      <img src="/logo.png" alt="Logo" style={{ width: '120px', marginBottom: '20px' }} />
      
      <h1>Silent Voices Recovery</h1>
      <p>Your safe space for healing and community.</p>

      {/* app-debug.apk must be in your /public folder */}
      <a href="/app-debug.apk" download="SilentVoices.apk" style={{ marginTop: '20px' }}>
        <button style={{
          backgroundColor: '#28a745',
          color: 'white',
          padding: '15px 30px',
          border: 'none',
          borderRadius: '8px',
          fontSize: '18px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}>
          Download App
        </button>
      </a>

      <div style={{ marginTop: '30px', color: '#666' }}>
        <h3>Instructions:</h3>
        <p>1. Tap Download. <br/> 2. Select "Download Anyway." <br/> 3. Open the file to install.</p>
      </div>
    </div>
  );
}
