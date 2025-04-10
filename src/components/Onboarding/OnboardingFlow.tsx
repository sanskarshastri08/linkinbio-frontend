"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import OnboardingStep1 from './OnboardingStep1';
import OnboardingStep2 from './OnboardingStep2';
import OnboardingStep3 from './OnboardingStep3';
import OnboardingStep4 from './OnboardingStep4';
import OnboardingStep5 from './OnboardingStep5';
import "./onboardingAnimations.css";

interface OnboardingFlowProps {
  onComplete: (userData: OnboardingData) => void;
  onClose: () => void;
}

export interface OnboardingData {
  userType: string;
  // Add more fields for future steps
}

const OnboardingFlow = ({ onComplete, onClose }: OnboardingFlowProps) => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState<OnboardingData>({
    userType: '',
  });

  // Prevent scrolling when onboarding is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleUserTypeSelection = (userType: string) => {
    setUserData((prev) => ({ ...prev, userType }));
    // Move to next step
    setStep(2);
  };

  const handleBack = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    if (step < 5) {
      setStep(prev => prev + 1);
    } else {
      // Complete onboarding after final step
      finishOnboarding();
    }
  };
  
  const handleFinalComplete = () => {
    // Complete the onboarding and redirect to dashboard
    finishOnboarding();
  };

  const finishOnboarding = () => {
    // Save user data
    onComplete(userData);
    
    // Redirect to dashboard
    router.push('/dashboard');
  };

  // Determine total number of steps
  const totalSteps = 5; 

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md onboarding-backdrop-enter">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden onboarding-enter border border-gray-100">
        {/* Progress bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gray-100">
          <div 
            className="h-full bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-500 ease-in-out"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          ></div>
        </div>
        
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-purple-50 to-transparent opacity-50 pointer-events-none"></div>
        
        <button 
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 z-10 transition-colors duration-200 hover:rotate-90 transform rounded-full bg-white/80 backdrop-blur-sm p-1.5 shadow-sm"
          onClick={onClose}
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {step === 1 && <OnboardingStep1 onComplete={handleUserTypeSelection} />}
        {step === 2 && <OnboardingStep2 onContinue={handleNext} onBack={handleBack} />}
        {step === 3 && <OnboardingStep3 onComplete={handleNext} onBack={handleBack} />}
        {step === 4 && <OnboardingStep4 onComplete={handleNext} onBack={handleBack} />}
        {step === 5 && <OnboardingStep5 onComplete={handleFinalComplete} onBack={handleBack} />}
      </div>
    </div>
  );
};

export default OnboardingFlow; 