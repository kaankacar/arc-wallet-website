import React from 'react';

const Testimonials = () => {
  const testimonialsData = [
    {
      name: 'Alice K.',
      feedback:
        'Arc Wallet has transformed my crypto experience. The fiat on/off ramp is super convenient!',
      avatar:
        'https://via.placeholder.com/60', // Replace with real avatar if available
    },
    {
      name: 'Bob L.',
      feedback:
        'The self-custody model and institutional-grade security made me confident in storing my assets here.',
      avatar: 'https://via.placeholder.com/60',
    },
    {
      name: 'Charlie P.',
      feedback:
        'Staking tokens directly in the wallet is a game-changer—no more jumping through multiple apps!',
      avatar: 'https://via.placeholder.com/60',
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>
          What Our Users Say
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px',
          }}
        >
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              style={{
                backgroundColor: 'var(--gray)',
                padding: '20px',
                borderRadius: '8px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                <img
                  src={testimonial.avatar}
                  alt={`${testimonial.name} avatar`}
                  style={{
                    borderRadius: '50%',
                    width: '60px',
                    height: '60px',
                    marginRight: '15px',
                  }}
                />
                <strong>{testimonial.name}</strong>
              </div>
              <p>{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
