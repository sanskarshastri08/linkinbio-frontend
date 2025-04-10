"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useModal } from "@/components/Modals/ModalProvider";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const { openSignInModal, openSignUpModal } = useModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "backdrop-blur-md bg-white/80 shadow-lg py-3 mx-6 mt-6 rounded-2xl border border-gray-100" 
          : "backdrop-blur-md bg-white/90 shadow-md py-5 mx-6 mt-6 rounded-2xl border border-gray-100"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="font-bold text-2xl flex items-center transition-all duration-300 group-hover:transform group-hover:scale-105">
              <span className="h-11 w-11 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mr-3 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 17H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                  <path d="M19 17h-4"></path>
                  <path d="M19 5h-4"></path>
                  <line x1="12" y1="3" x2="12" y2="21"></line>
                </svg>
              </span>
              <div className="flex flex-col">
                <span className="text-gray-800 font-bold tracking-wide">LinkFolio</span>
                <span className="text-xs text-gray-500 font-medium -mt-1">Bio Links Made Easy</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <NavLink href="/features" active={activeLink === "/features"} onClick={() => setActiveLink("/features")}>Features</NavLink>
            <NavLink href="/pricing" active={activeLink === "/pricing"} onClick={() => setActiveLink("/pricing")}>Pricing</NavLink>
            <NavLink href="/faqs" active={activeLink === "/faqs"} onClick={() => setActiveLink("/faqs")}>FAQs</NavLink>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={openSignInModal}
              className="text-gray-700 hover:text-purple-600 font-bold transition-colors px-3 py-2"
            >
              Sign in
            </button>
            <button 
              onClick={openSignUpModal}
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2.5 rounded-full font-bold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 hover:scale-105"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none p-2 hover:bg-gray-100/60 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white/90 backdrop-blur-md rounded-xl shadow-xl animate-fadeIn border border-gray-100">
            <nav className="flex flex-col space-y-3 px-4">
              <MobileNavLink 
                href="/features" 
                active={activeLink === "/features"} 
                onClick={() => {
                  setActiveLink("/features");
                  setIsMobileMenuOpen(false);
                }}
              >
                Features
              </MobileNavLink>
              <MobileNavLink 
                href="/pricing" 
                active={activeLink === "/pricing"} 
                onClick={() => {
                  setActiveLink("/pricing");
                  setIsMobileMenuOpen(false);
                }}
              >
                Pricing
              </MobileNavLink>
              <MobileNavLink 
                href="/faqs" 
                active={activeLink === "/faqs"} 
                onClick={() => {
                  setActiveLink("/faqs");
                  setIsMobileMenuOpen(false);
                }}
              >
                FAQs
              </MobileNavLink>
              <div className="pt-3 border-t">
                <button 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    openSignInModal();
                  }}
                  className="block py-2 text-gray-700 hover:text-purple-600 font-bold transition-colors w-full text-left px-3"
                >
                  Sign in
                </button>
                <button 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    openSignUpModal();
                  }}
                  className="mt-3 block bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-3 rounded-lg font-bold transition-all duration-300 hover:shadow-lg text-center hover:from-purple-600 hover:to-blue-600 w-full"
                >
                  Get Started
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

// Desktop Navigation Link Component
const NavLink = ({ 
  href, 
  children, 
  active, 
  onClick 
}: { 
  href: string; 
  children: React.ReactNode; 
  active?: boolean;
  onClick?: () => void;
}) => {
  return (
    <Link 
      href={href}
      className="relative text-gray-800 font-bold transition-colors py-1 group"
      onClick={onClick}
    >
      {children}
      <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 rounded-full ${
        active ? 'w-full' : 'w-0 group-hover:w-full'
      }`}></span>
    </Link>
  );
};

// Mobile Navigation Link Component
const MobileNavLink = ({ 
  href, 
  children, 
  active,
  onClick 
}: { 
  href: string; 
  children: React.ReactNode;
  active?: boolean;
  onClick: () => void;
}) => {
  return (
    <Link 
      href={href} 
      className={`block py-2 font-bold transition-all duration-200 ${
        active 
          ? "text-purple-600 bg-purple-50 px-3 rounded-lg" 
          : "text-gray-700 hover:text-purple-600 hover:bg-purple-50 px-3 rounded-lg"
      }`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Navbar; 