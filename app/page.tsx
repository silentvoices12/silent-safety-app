export default function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px', fontFamily: 'sans-serif' }}>
      <img src="/logo.png" style={{ width: '100px' }} />
      <h1>Silent Voices Recovery</h1>
      <p>App Download</p>
      
      <br />

      {/* This is the simplest possible way to make a button work */}
      <a href="/app-debug.apk" download style={{
        backgroundColor: '#28a745',
        color: 'white',
        padding: '20px 40px',
        textDecoration: 'none',
        borderRadius: '50px',
        fontWeight: 'bold',
        fontSize: '20px',
        display: 'inline-block'
      }}>
        DOWNLOAD NOW
      </a>

      <div style={{ marginTop: '50px' }}>
        <p style={{ color: 'red' }}>If nothing happens when you tap:</p>
        <p>1. <b>Long-press</b> the green button.</p>
        <p>2. Select <b>"Download link"</b>.</p>
      </div>
    </div>
  );
}
