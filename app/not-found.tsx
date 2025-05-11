import React, { Suspense } from 'react';

"use client";
const NotFoundClient = () => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh',
      padding: '20px',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>404 - ページが見つかりません</h1>
      <p style={{ marginBottom: '2rem' }}>お探しのページは存在しないか、移動した可能性があります。</p>
      <a 
        href="/" 
        style={{ 
          padding: '10px 20px', 
          backgroundColor: '#0070f3', 
          color: 'white', 
          borderRadius: '5px', 
          textDecoration: 'none' 
        }}
      >
        ホームに戻る
      </a>
    </div>
  );
};

export default function NotFound() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NotFoundClient />
    </Suspense>
  );
}
