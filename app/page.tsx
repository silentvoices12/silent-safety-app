'use client';

import React from 'react';

export default function Home() {
  return (
    <main style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      padding: '40px', 
      fontFamily: 'sans-serif',
      minHeight: '100vh',
      backgroundColor: '#f9f9f9'
    }}>
      {/* Logo */}
      <img src="/logo.png" alt="Logo" style={{ width: '100px', marginBottom: '20px', borderRadius: '15px' }} 
           onError={(e) => (e.currentTarget.style.display = 'none')} />

      <h1>Silent Voices Recovery</h1>
      <p style={{ color: '#666', maxWidth: '400px', textAlign: 'center' }}>
        A safe space for healing and community support.
      </p>

      {/* The Button */}
      <div style={{ margin: '30px 0' }}>
        <a href="/app-debug.apk" download="SilentVoices.apk">
          <button style={{ 
            padding: '15px 30px', 
            backgroundColor: '#28a745', 
            color: 'white', 
            border: 'none', 
            borderRadius: '50px',
            fontSize: '18px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
          }}>
            Download Android App
          </button>
        </a>
      </div>

      {/* Instructions */}
      <div style={{ textAlign: 'left', backgroundColor: 'white', padding: '20px', borderRadius: '10px', width: '100%', maxWidth: '400px' }}>
        <h3 style={{ marginTop: 0 }}>Instructions:</h3>
        <p>1. Tap the button above.<br/>2. If prompted, tap <b>"Download Anyway"</b>.<br/>3. Open the file and select <b>"Install"</b>.</p>
      </div>

      {/* Comments Section */}
      <div style={{ marginTop: '40px', width: '100%', maxWidth: '400px' }}>
        <h3>Leave a Comment</h3>
        <textarea 
          placeholder="Share your thoughts..." 
          style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd', minHeight: '80px' }}
        />
        <button 
          onClick={() => alert('Comments will be live soon!')}
          style={{ marginTop: '10px', padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Post
        </button>
      </div>
    </main>
  );
}
