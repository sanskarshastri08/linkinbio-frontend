"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import "./modalAnimations.css";
import OnboardingFlow from "../Onboarding/OnboardingFlow";

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
  openSignInModal: () => void;
}

const SignUpModal = ({ isOpen, onClose, openSignInModal }: SignUpModalProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    terms?: string;
  }>({});
  
  // Close on escape key press
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Clear errors when inputs change
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (errors.name) {
      setErrors(prev => ({ ...prev, name: undefined }));
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (errors.email) {
      setErrors(prev => ({ ...prev, email: undefined }));
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (errors.password) {
      setErrors(prev => ({ ...prev, password: undefined }));
    }
    // Also clear confirmPassword error if it's about matching
    if (errors.confirmPassword && e.target.value === confirmPassword) {
      setErrors(prev => ({ ...prev, confirmPassword: undefined }));
    }
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
    if (errors.confirmPassword && e.target.value === password) {
      setErrors(prev => ({ ...prev, confirmPassword: undefined }));
    }
  };

  const handleTermsChange = () => {
    const newValue = !agreeToTerms;
    setAgreeToTerms(newValue);
    if (newValue && errors.terms) {
      setErrors(prev => ({ ...prev, terms: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const newErrors: {
      name?: string;
      email?: string;
      password?: string;
      confirmPassword?: string;
      terms?: string;
    } = {};
    
    if (!name.trim()) newErrors.name = "Name is required";
    
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    
    if (!agreeToTerms) {
      newErrors.terms = "You must agree to the terms and conditions";
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    // For testing purposes, immediately show the onboarding flow
    // In production, this would be after an actual API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowOnboarding(true);
    }, 800); // Reduced timeout for better user experience
  };

  const handleOnboardingComplete = (userData: any) => {
    // Handle onboarding data, e.g. save to backend
    console.log("Onboarding completed with data:", userData);
    onClose();
  };

  const handleOnboardingClose = () => {
    setShowOnboarding(false);
    onClose();
  };

  const handleSignInClick = () => {
    onClose();
    setTimeout(() => {
      openSignInModal();
    }, 100);
  };

  // Show onboarding if it's active
  if (showOnboarding) {
    return <OnboardingFlow onComplete={handleOnboardingComplete} onClose={handleOnboardingClose} />;
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm modal-backdrop-enter" onClick={onClose}>
      {/* Modal Container */}
      <div 
        className="relative bg-white rounded-2xl shadow-2xl flex w-full max-w-4xl overflow-hidden modal-enter"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 z-50 transition-colors duration-200"
          onClick={onClose}
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Left Column - Sign Up Form */}
        <div className="w-full md:w-1/2 p-8 md:p-14">
          <div className="mb-10">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 mb-3">Create your account</h2>
            <p className="text-gray-500">Join thousands of creators using LinkFolio</p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="space-y-1.5">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={handleNameChange}
                  className={`appearance-none block w-full pl-12 px-4 py-3.5 border ${
                    errors.name ? 'border-red-500' : 'border-gray-200'
                  } rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-200`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <input
                  id="signup-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={handleEmailChange}
                  className={`appearance-none block w-full pl-12 px-4 py-3.5 border ${
                    errors.email ? 'border-red-500' : 'border-gray-200'
                  } rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-200`}
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="signup-password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  id="signup-password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={password}
                  onChange={handlePasswordChange}
                  className={`appearance-none block w-full pl-12 px-4 py-3.5 border ${
                    errors.password ? 'border-red-500' : 'border-gray-200'
                  } rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-200`}
                  placeholder="Create a strong password"
                />
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                )}
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">
                Confirm password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <input
                  id="confirm-password"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  className={`appearance-none block w-full pl-12 px-4 py-3.5 border ${
                    errors.confirmPassword ? 'border-red-500' : 'border-gray-200'
                  } rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-200`}
                  placeholder="Confirm your password"
                />
                {errors.confirmPassword && (
                  <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>
                )}
              </div>
            </div>

            <div className="flex items-center mt-6">
              <button
                type="button"
                onClick={handleTermsChange}
                className={`relative h-5 w-5 rounded border ${
                  agreeToTerms 
                    ? 'bg-purple-600 border-purple-600' 
                    : 'bg-white border-gray-300'
                } transition-colors duration-200 flex items-center justify-center`}
              >
                {agreeToTerms && (
                  <svg className="h-3.5 w-3.5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
              <label htmlFor="terms" className="ml-2.5 block text-sm text-gray-700 select-none cursor-pointer" onClick={handleTermsChange}>
                I agree to the <a href="/terms" className="text-purple-600 hover:text-purple-500">Terms of Service</a> and <a href="/privacy" className="text-purple-600 hover:text-purple-500">Privacy Policy</a>
              </label>
              {errors.terms && (
                <p className="mt-1 text-sm text-red-600">{errors.terms}</p>
              )}
            </div>

            <div className="pt-5">
              <button
                type="submit"
                disabled={isSubmitting || !agreeToTerms}
                className="w-full flex justify-center items-center py-3.5 px-4 border border-transparent rounded-xl shadow-sm font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-200 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  "Create account"
                )}
              </button>
            </div>
          </form>

          <div className="mt-9">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-3 bg-white text-gray-500">or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                type="button"
                className="flex justify-center items-center py-3 px-4 border border-gray-200 rounded-xl shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-200"
              >
                <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                Google
              </button>
              <button
                type="button"
                className="flex justify-center items-center py-3 px-4 border border-gray-200 rounded-xl shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-200"
              >
                <svg className="h-5 w-5 mr-2 text-[#1DA1F2]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.1 10.1 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
                Twitter
              </button>
            </div>
          </div>

          <p className="mt-9 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <button 
              type="button" 
              className="font-semibold text-purple-600 hover:text-purple-500 transition-colors"
              onClick={handleSignInClick}
            >
              Sign in
            </button>
          </p>
        </div>

        {/* Right Column - Bio Links Illustration */}
        <div className="hidden md:block md:w-1/2 bg-gradient-to-br from-purple-600 to-blue-600 p-14 text-white relative overflow-hidden">
          {/* Background effects */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
          <div className="absolute bottom-1/2 right-1/2 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
          
          <div className="relative z-10">
            <div className="flex items-center space-x-2 mb-8">
              <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 17h-4"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 5h-4"></path>
                  <line x1="12" y1="3" x2="12" y2="21" strokeWidth={2}></line>
                </svg>
              </div>
              <h3 className="text-2xl font-bold">LinkFolio</h3>
            </div>

            <h3 className="text-3xl font-bold mb-6">Why creators love LinkFolio</h3>
            <p className="text-lg opacity-90 mb-10 leading-relaxed">Everything you are, in one simple link. Connect your audience to all your content.</p>
            
            {/* Features */}
            <div className="space-y-6 mt-8">
              <div className="flex items-start space-x-4 bio-link-item-enter">
                <div className="rounded-full w-8 h-8 bg-white/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Analytics Dashboard</h4>
                  <p className="opacity-80 mt-1">Track clicks, views, and engagement on all your links</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bio-link-item-enter">
                <div className="rounded-full w-8 h-8 bg-white/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Custom Domains</h4>
                  <p className="opacity-80 mt-1">Use your own domain for a professional branded presence</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bio-link-item-enter">
                <div className="rounded-full w-8 h-8 bg-white/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Beautiful Themes</h4>
                  <p className="opacity-80 mt-1">Choose from dozens of themes or create your own custom design</p>
                </div>
              </div>
            </div>
            
            {/* Customer quote */}
            <div className="mt-12 bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-xl">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-white/20 overflow-hidden">
                  {/* This would be an actual user image in production */}
                  <div className="w-full h-full bg-gradient-to-br from-purple-300 to-blue-300"></div>
                </div>
                <div>
                  <div className="font-bold">Sarah Johnson</div>
                  <div className="text-sm opacity-80">Content Creator</div>
                </div>
              </div>
              <p className="italic opacity-90">
                "LinkFolio helped me increase my engagement by 40% in just one month. The analytics are incredible!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpModal; 