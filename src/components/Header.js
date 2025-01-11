import React from 'react';

const Header = () => {
  return (
    <header
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0)',
        color: 'var(--white)',
        padding: '10px 20px',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backdropFilter: 'blur(0px)',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center' }}>
        {/* Logo Section */}
        <div style={{ flexGrow: 1 }}>
        <img src="/icons/ArcWallet-removebg-preview.png" alt="Arc Wallet Logo" style={{ height: '100px', margin: 0 }} />
        </div>

        {/* Navigation Menu */}
        <nav>
          <ul
            style={{
              display: 'flex',
              listStyle: 'none',
              gap: '20px',
              margin: 0,
            }}
          >
            <li>
              <a
                href="#blog"
                style={{ color: 'var(--white)', textDecoration: 'none' }}
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#faq"
                style={{ color: 'var(--white)', textDecoration: 'none' }}
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#contact"
                style={{ color: 'var(--white)', textDecoration: 'none' }}
              >
                Contact
              </a>
            </li>
            {/* Social Media Icons or Links (placeholder) */}
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--white)', textDecoration: 'none' }}
              >
                Twitter
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
