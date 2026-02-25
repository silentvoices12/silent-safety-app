'use client';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '50px', fontFamily: 'sans-serif' }}>
      {/* The Logo */}
      <img src="/logo.png" alt="Logo" style={{ width: '120px', marginBottom: '20px' }} />
      
      <h1>Silent Voices Recovery</h1>
      
      <div style={{ margin: '40px 0' }}>
        {/* We use the absolute path starting with / */}
        <a href="/app-debug.apk" download="SilentVoices.apk">
          <button style={{ 
            padding: '20px 40px', 
            backgroundColor: '#28a745', 
            color: 'white', 
            borderRadius: '50px',
            fontSize: '20px',
            border: 'none',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>
            Download Official App
          </button>
        </a>
      </div>

      {/* Basic Comment Box */}
      <div style={{ marginTop: '50px', borderTop: '1px solid #eee', paddingTop: '30px' }}>
        <h3>Community Comments</h3>
        <textarea placeholder="Write a message..." style={{ width: '100%', maxWidth: '400px', padding: '10px', height: '100px' }} />
        <br />
        <button onClick={() => alert('Feature coming soon!')} style={{ marginTop: '10px', padding: '10px 20px' }}>Post</button>
      </div>
    </div>
  );
}
