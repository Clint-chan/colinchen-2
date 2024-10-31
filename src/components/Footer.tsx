import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} 陈定钢. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;