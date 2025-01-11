import React from 'react';

const Partners = () => {
  // Replace these placeholders with your actual partner/investor logos
  const partnersLogos = [
    './icons/diamante.png',
    // 'https://via.placeholder.com/150?text=Partner+2',
    // 'https://via.placeholder.com/150?text=Partner+3',
    // 'https://via.placeholder.com/150?text=Partner+4',
  ];

  return (
    <section className="section" style={{ backgroundColor: 'var(--black)' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: '40px', color: 'var(--white)' }}>Partners & Investors</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '20px',
            justifyItems: 'center',
            alignItems: 'center',
          }}
        >
          {partnersLogos.map((logo, index) => (
            <div key={index}>
              <img
                src={logo}
                // alt={`Partner ${index + 1}`}
                style={{ maxWidth: '100%', filter: 'grayscale(100%)' }}
              />
              <p style={{ color: 'var(--white)', textAlign: 'center', marginTop: '10px' }}>Diamante Blockchain</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
