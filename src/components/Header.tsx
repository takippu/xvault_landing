'use client';

import { useState } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Mobile Menu Overlay */}
      <div 
        id="mobile-menu" 
        className={`fixed inset-0 z-50 flex flex-col transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}
      >
        <div className="bg-base bg-opacity-95 backdrop-blur-sm flex-1 flex flex-col">
          <div className="flex justify-between items-center p-6 border-b border-border">
            <div className="flex items-center space-x-2">
              <img src="/icon/32x32.png" alt="xVault Logo" className="w-8 h-8" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-btn to-hover bg-clip-text text-transparent">xVault</span>
            </div>
            <button 
              id="close-menu" 
              className="focus:outline-none hover:text-hoverText transition-colors" 
              aria-label="Close menu"
              onClick={toggleMobileMenu}
            >
              <i className="fas fa-times text-2xl"></i>
            </button>
          </div>
          <nav className="flex flex-col items-center space-y-8 p-8 flex-1">
            <Link href="/#features" className="nav-link font-medium text-xl w-full text-center py-2 border-b border-border border-opacity-30">Features</Link>
            <Link href="/#how-it-works" className="nav-link font-medium text-xl w-full text-center py-2 border-b border-border border-opacity-30">How It Works</Link>
            <Link href="/#pricing" className="nav-link font-medium text-xl w-full text-center py-2 border-b border-border border-opacity-30">Pricing</Link>
            <Link href="/#faq" className="nav-link font-medium text-xl w-full text-center py-2 border-b border-border border-opacity-30">FAQ</Link>
            <a 
              href="https://chrome.google.com/webstore/category/extensions" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary px-8 py-3 rounded-full font-semibold mt-6 w-full max-w-xs flex items-center justify-center"
            >
              <i className="fab fa-chrome mr-2"></i> Add to Chrome
            </a>
          </nav>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-base bg-opacity-90 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="#" className="flex items-center space-x-2 group">
              <img src="/icon/32x32.png" alt="xVault Logo" className="w-8 h-8" />
              <span className="text-2xl font-bold nav-link">xVault</span>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/#features" className="nav-link font-medium hover:scale-105 transition-transform">Features</Link>
              <Link href="/#how-it-works" className="nav-link font-medium hover:scale-105 transition-transform">How It Works</Link>
              <Link href="/#pricing" className="nav-link font-medium hover:scale-105 transition-transform">Pricing</Link>
              <Link href="/#faq" className="nav-link font-medium hover:scale-105 transition-transform">FAQ</Link>
            </nav>
            
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <a 
                href="https://chrome.google.com/webstore/category/extensions" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary px-6 py-2 rounded-full font-semibold hidden md:block"
              >
                Add to Chrome
              </a>
              <button 
                id="open-menu" 
                className="md:hidden focus:outline-none hover:text-hoverText transition-colors" 
                aria-label="Open menu"
                onClick={toggleMobileMenu}
              >
                <i className="fas fa-bars text-xl"></i>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}