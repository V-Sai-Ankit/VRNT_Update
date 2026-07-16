import React from 'react';

export default function Hero() {
  return (
    <article className="mb-6" style={{ fontFamily: 'Georgia, serif' }}>
      {/* Updated heading with explicit bold styling */}
      <h2 
        className="mb-4" 
        style={{ 
          fontSize: '42px', 
          lineHeight: '1.1', 
          color: '#8b2b22',
          fontWeight: 'bold'
        }}
      >
        Welcome to Veda Rakshana Nidhi Trust
      </h2>
      
      {/* Paragraph body matching exact size, alignment, and spacing rules */}
      <p 
        className="text-justify m-0 drop-cap-first" 
        style={{ 
          fontSize: '19px', 
          lineHeight: '1.7', 
          color: '#171717' 
        }}
      >
        Founded in 1963 under the divine guidance of His Holiness Sri Sri Chandrashekarendra Saraswati MahaSwamigal, VRNT is a Public Charitable Trust dedicated to the preservation of the Vedic oral tradition. Our mission is to ensure that the "unbroken chain" of ancient wisdom remains vibrant and resilient for future generations.
      </p>
    </article>
  );
}