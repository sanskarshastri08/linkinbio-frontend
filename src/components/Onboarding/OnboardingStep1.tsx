"use client";

import { useState } from 'react';

interface OnboardingStep1Props {
  onComplete: (userType: string) => void;
}

const OnboardingStep1 = ({ onComplete }: OnboardingStep1Props) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const options = [
    { 
      id: 'creator',
      title: 'Creator',
      description: 'I want to showcase and monetize my content',
      icon: (
        <svg className="w-10 h-10 text-purple-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 9.2C17 13.177 13.97 16.4 10 16.4C6.03 16.4 3 13.177 3 9.2C3 5.224 6.03 2 10 2C13.97 2 17 5.224 17 9.2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 16.4V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 19H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 13C22 14.6569 20.6569 16 19 16C17.3431 16 16 14.6569 16 13C16 11.3431 17.3431 10 19 10C20.6569 10 22 11.3431 22 13Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      id: 'business',
      title: 'Business',
      description: 'I want to promote my products or services',
      icon: (
        <svg className="w-10 h-10 text-purple-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 7H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M7 3V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M21 7V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7.5 15.5C7.5 14.6716 8.17157 14 9 14H15C15.8284 14 16.5 14.6716 16.5 15.5C16.5 16.3284 15.8284 17 15 17H9C8.17157 17 7.5 16.3284 7.5 15.5Z" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      )
    },
    { 
      id: 'personal',
      title: 'Personal',
      description: 'I want to create a personal bio page',
      icon: (
        <svg className="w-10 h-10 text-purple-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20 19C20 16.7909 16.4183 15 12 15C7.58172 15 4 16.7909 4 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20 19H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      id: 'other',
      title: 'Other',
      description: "I'm exploring other use cases",
      icon: (
        <svg className="w-10 h-10 text-purple-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 13V7C8 5.93913 8.42143 4.92172 9.17157 4.17157C9.92172 3.42143 10.9391 3 12 3C13.0609 3 14.0783 3.42143 14.8284 4.17157C15.5786 4.92172 16 5.93913 16 7V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19.9995 12L9.74951 12L3.99951 16.5V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4 21H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
  ];

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
  };

  const handleContinue = () => {
    if (selectedOption) {
      onComplete(selectedOption);
    }
  };

  return (
    <div className="p-8 md:p-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-3">
          Welcome! Let's get started
        </h2>
        <p className="mt-3 text-gray-600 text-lg">
          Tell us a bit about how you plan to use our platform
        </p>
      </div>

      <div className="space-y-4 mb-10">
        {options.map((option, index) => (
          <div
            key={option.id}
            className={`option-animate-enter relative flex items-center p-5 border-2 rounded-xl cursor-pointer transition-all duration-300 
              ${selectedOption === option.id
                ? 'border-purple-600 bg-purple-50 shadow-lg shadow-purple-100 scale-[1.02]'
                : 'border-gray-200 hover:border-purple-300 hover:shadow-md'
              }`}
            onClick={() => handleOptionSelect(option.id)}
          >
            <div className={`mr-5 p-2 rounded-xl ${selectedOption === option.id ? 'bg-purple-100' : 'bg-gray-50'}`}>
              {option.icon}
            </div>
            <div>
              <h3 className="font-bold text-xl text-purple-800 mb-1">{option.title}</h3>
              <p className="text-gray-600">{option.description}</p>
            </div>
            {selectedOption === option.id && (
              <div className="absolute right-5 text-purple-600 icon-pulse bg-white p-1 rounded-full shadow-sm">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-end">
        <button
          className={`py-3 px-8 rounded-xl font-semibold text-white transition-all duration-300 
            ${selectedOption
              ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-lg hover:shadow-purple-200 transform hover:-translate-y-0.5'
              : 'bg-gray-300 cursor-not-allowed'
            }`}
          onClick={handleContinue}
          disabled={!selectedOption}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default OnboardingStep1; 