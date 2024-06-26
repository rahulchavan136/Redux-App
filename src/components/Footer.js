import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        <p className="mb-0">&copy; 2024 Your Company. All rights reserved.</p>
        <p className="mb-0">
          <a href="/privacy" className="text-white mx-2">Privacy Policy</a> | 
          <a href="/terms" className="text-white mx-2">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
