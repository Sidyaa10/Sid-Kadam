import React from 'react';

export default function VideoShowcase() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#d2f5bc',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <h1 style={{ color: '#963F2E', fontWeight: 700, marginBottom: 32 }}>expose'</h1>
      <video
        src="/videos/JinMuWon4k.mp4"
        controls
        loop
        autoPlay
        muted
        style={{ maxWidth: '90vw', maxHeight: '70vh', borderRadius: 12, boxShadow: '0 4px 24px #0003' }}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
} 