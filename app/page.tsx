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
      backgroundColor: '#ffffff'
    }}>
      {/* 1. Logo (Must be in public folder) */}
      <img 
        src="/logo.png" 
        alt="Logo" 
        style={{ width: '120px', marginBottom: '10px', borderRadius: '15px' }} 
        onError={(e) => (e.currentTarget.style.display = 'none')} 
      />

      <h1 style={{ color: '#333' }}>Silent Voices Recovery</h1>
      <p style={{ color: '#666', textAlign: 'center', maxWidth: '400px' }}>
        A safe community for healing and support.
      </p>

      {/* 2. The Download Button (Links to public/app-debug.apk) */}
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
            cursor: 'pointer'
          }}>
            Download Android App
          </button>
        </a>
      </div>

      {/* 3. The Comments Section */}
      <div style={{ width: '100%', maxWidth: '400px', marginTop: '40px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
        <h3>Community Comments</h3>
        <textarea 
          placeholder="Share your thoughts..." 
          style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', minHeight: '80px' }}
        />
        <button 
          onClick={() => alert('Comments are being moderated and will appear soon!')}
          style={{ marginTop: '10px', padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Post Comment
        </button>
      </div>

      <div style={{ marginTop: '40px', fontSize: '12px', color: '#999' }}>
        <p>Instructions: Tap Download, then "Install" on your phone.</p>
      </div>
    </main>
  );
}
