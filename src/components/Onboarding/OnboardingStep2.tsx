"use client";

interface OnboardingStep2Props {
  onContinue: () => void;
  onBack: () => void;
}

const OnboardingStep2 = ({ onContinue, onBack }: OnboardingStep2Props) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 md:p-10 max-w-3xl mx-auto h-full">
      {/* Phone illustration */}
      <div className="w-72 h-72 bg-gradient-to-br from-purple-50 to-blue-50 rounded-full flex items-center justify-center mb-10 shadow-inner float-animation">
        <svg className="w-56 h-56 text-gray-400" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="140" y="40" width="220" height="420" rx="30" stroke="#D1D5DB" strokeWidth="6" fill="#F9FAFB" />
          <rect x="180" y="80" width="140" height="20" rx="6" fill="#A78BFA" />
          <circle cx="160" cy="90" r="10" fill="#A78BFA" />
          <rect x="180" y="140" width="140" height="60" rx="4" stroke="#D1D5DB" strokeWidth="2" strokeDasharray="4 4" fill="#EFF6FF" opacity="0.7" />
          <rect x="180" y="210" width="140" height="60" rx="4" stroke="#D1D5DB" strokeWidth="2" strokeDasharray="4 4" fill="#EFF6FF" opacity="0.7" />
          <rect x="180" y="280" width="140" height="60" rx="4" stroke="#D1D5DB" strokeWidth="2" strokeDasharray="4 4" fill="#EFF6FF" opacity="0.7" />
          <rect x="180" y="350" width="140" height="60" rx="4" stroke="#D1D5DB" strokeWidth="2" strokeDasharray="4 4" fill="#EFF6FF" opacity="0.7" />
        </svg>
      </div>

      {/* Welcome text */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-blue-700">
          Welcome to LinkFolio!
        </h1>
        <p className="text-gray-600 text-center max-w-lg mx-auto text-lg">
          LinkFolio is a beautiful way for you to curate and share your content with just one bio link.
        </p>
      </div>

      {/* Navigation */}
      <div className="flex flex-col items-center">
        <div className="flex space-x-3 mb-10">
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          <div className="w-3 h-3 rounded-full bg-purple-600"></div>
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
        </div>
        
        <div className="flex justify-between w-full max-w-sm">
          <button 
            onClick={onBack}
            className="py-3 px-8 rounded-xl font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-all duration-200 hover:shadow-md"
          >
            Back
          </button>
          <button 
            onClick={onContinue}
            className="py-3 px-8 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-lg hover:shadow-purple-200 transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingStep2; 