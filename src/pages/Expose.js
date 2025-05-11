import React from 'react';

export default function Expose() {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        minHeight: '100vh',
        minWidth: '100vw',
        background: '#d2f5bc',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
      }}
    >
      <h1
        style={{
          color: '#963F2E',
          fontWeight: 700,
          marginBottom: '2vw',
          fontSize: '3vw',
          letterSpacing: 2,
          textAlign: 'center',
        }}
      >
        Expose'
      </h1>
      <div
        style={{
          background: '#44444f22',
          borderRadius: '20px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: '60vw',
          width: '100%',
          aspectRatio: '16/9',
          overflow: 'hidden',
        }}
      >
        <img
          src="/jinmuwon.jpg"
          alt="Jin Mu Won"
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 0,
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </div>
      <div
        style={{
          background: '#f8f4b2',
          color: '#963F2E',
          borderRadius: '14px',
          boxShadow: '0 2px 8px #0001',
          marginTop: '2vw',
          padding: '1.2vw 2vw',
          fontFamily: 'Fira Code, monospace',
          fontSize: '1.3vw',
          fontWeight: 500,
          letterSpacing: 1,
          textAlign: 'center',
          maxWidth: '32vw',
        }}
      >
        ValorantId :- NorthernBladeSid#solo
      </div>
    </div>
  );
} 