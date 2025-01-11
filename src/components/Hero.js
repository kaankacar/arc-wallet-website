import React from 'react';

const Hero = () => {
  return (
    <section
      style={{
        backgroundColor: 'var(--black)',
        color: 'var(--white)',
        textAlign: 'center',
        padding: '80px 20px',
      }}
    >
      <div className="container">
      <img src="/icons/ArcWallet.png" alt="Arc Wallet Logo" style={{ height: '200px', margin: 0 }} />
        <h1 style={{ marginBottom: '20px' }}>
          The Next Evolution in Crypto Management
        </h1>
        <p style={{ margin: '0 auto', maxWidth: '700px', marginBottom: '30px' }}>
          Arc Wallet is designed to make digital asset interaction as simple as
          traditional banking, while maintaining the core principles of crypto:
          security, self-custody, and financial opportunity.
        </p>
        <div style={{ marginBottom: '30px' }}>
          <a href="#download-ios" className="btn" style={{ marginRight: '10px' }}>
            Download for iOS (coming soon)
          </a>
          <a href="#download-android" className="btn">
            Download for Android (coming soon)
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
