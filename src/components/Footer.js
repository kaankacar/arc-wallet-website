import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--black)', color: 'var(--white)' }}>
      <div className="container" style={{ padding: '40px 20px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
          }}
        >
          {/* Company Info */}
          <div>
            <h3 style={{ color: 'var(--green)', marginBottom: '10px' }}>Arc Wallet</h3>
            <p>
              Arc Wallet is the easiest way to manage your crypto portfolio with
              self-custody at its core.
            </p>
            <p>
              Istanbul, Turkey <br />
              <a href="mailto:kaankacar02@gmail.com">Contact us</a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>
                <a
                  href="#privacy"
                  style={{ color: 'var(--white)', textDecoration: 'none' }}
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  style={{ color: 'var(--white)', textDecoration: 'none' }}
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#social"
                  style={{ color: 'var(--white)', textDecoration: 'none' }}
                >
                  Follow us
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4>Newsletter</h4>
            <p>Sign up to receive the latest news and updates.</p>
            <form>
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Newsletter Email"
                style={{
                  padding: '8px',
                  marginRight: '8px',
                  borderRadius: '4px',
                  border: 'none',
                  outline: 'none',
                  maxWidth: '200px',
                }}
              />
              <button type="submit" className="btn">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} Arc Wallet. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
