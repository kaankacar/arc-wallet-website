// src/components/Features.js
import React from 'react';

const Features = () => {
  // Keep your original text, just add icons and a “card-like” design
  const featuresData = [
    {
      title: 'Self-custody infrastructure with bank-grade security',
      icon: '/icons/self-custody.png',
    },
    {
      title: 'Seamless fiat on/off ramp across 30+ countries',
      icon: '/icons/fiat-onoff.png',
    },
    {
      title: 'Direct token staking capabilities',
      icon: '/icons/stakingIcon.png',
    },
    {
      title: 'Automated yield optimization',
      icon: '/icons/yield-optimization.png',
    },
    {
      title: 'Institutional-grade security architecture',
      icon: '/icons/security-architecture.png',
    },
    {
      title: 'Intuitive mobile-first design',
      icon: '/icons/mobile-design.png',
    },
  ];

  return (
    <section
      style={{
        padding: '60px 0',
        backgroundColor: '#272525', // Reinforce dark background
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '40px',
            textAlign: 'center',
          }}
        >
          {featuresData.map((feature, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '20px',
              }}
            >
              {/* Icon */}
              {feature.icon && (
                <img
                  src={feature.icon}
                  alt={feature.title}
                  style={{
                    width: '80px',
                    marginBottom: '20px',
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
                  }}
                />
              )}
              {/* Title (exact text) */}
              <h3
                style={{
                  marginBottom: '10px',
                  fontSize: '1rem',
                  color: 'var(--green)', // Title in green
                }}
              >
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
