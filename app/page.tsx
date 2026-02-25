'use client';

export default function Home() {
  return (
    <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1>Silent Voices Recovery</h1>
      <p>Healing & Community</p>

      <div style={{ margin: '30px 0' }}>
        {/* Force download by using a direct link */}
        <a href="/app-debug.apk" download="SilentVoices.apk">
          <button style={{ 
            padding: '20px 40px', 
            backgroundColor: '#28a745', 
            color: 'white', 
            borderRadius: '10px',
            fontSize: '20px',
            border: 'none',
            cursor: 'pointer'
          }}>
            Download Android App
          </button>
        </a>
      </div>

      <div style={{ marginTop: '50px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
        <h3>Instructions:</h3>
        <p>1. Download the file. <br/> 2. Open it on your phone. <br/> 3. Allow "Unknown Sources" to install.</p>
      </div>

      {/* Basic Comment Box */}
      <div style={{ marginTop: '50px' }}>
        <h3>Leave a Comment</h3>
        <textarea placeholder="Your message..." style={{ width: '80%', padding: '10px' }}></textarea>
        <br />
        <button onClick={() => alert('Coming soon!')} style={{ marginTop: '10px' }}>Post Comment</button>
      </div>
    </div>
  );
}
