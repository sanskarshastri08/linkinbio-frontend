"use client";

interface OnboardingStep5Props {
  onComplete: () => void;
  onBack: () => void;
}

const OnboardingStep5 = ({ onComplete, onBack }: OnboardingStep5Props) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 md:p-10 max-w-3xl mx-auto h-full">
      {/* Links illustration */}
      <div className="w-72 h-72 bg-gradient-to-br from-purple-50 to-blue-50 rounded-full flex items-center justify-center mb-10 shadow-inner float-animation">
        <svg className="w-56 h-56 text-gray-400" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="150" y="80" width="200" height="340" rx="6" stroke="#D1D5DB" strokeWidth="4" fill="#F9FAFB" />
          
          {/* Header area */}
          <rect x="180" y="110" width="140" height="30" rx="4" stroke="#D1D5DB" strokeWidth="2" strokeDasharray="4 4" fill="#EFF6FF" opacity="0.7" />
          
          {/* Links section title */}
          <circle cx="195" cy="170" r="8" fill="#A78BFA" />
          <rect x="210" y="165" width="90" height="10" rx="3" fill="#6B7280" />
          
          {/* Link items */}
          <rect x="180" y="190" width="140" height="30" rx="15" fill="white" stroke="#E5E7EB" strokeWidth="1" />
          <circle cx="195" cy="205" r="5" fill="#A78BFA" />
          <rect x="205" y="201" width="80" height="8" rx="2" fill="#6B7280" />
          <circle cx="305" cy="205" r="5" fill="#A78BFA" />
          
          <rect x="180" y="230" width="140" height="30" rx="15" fill="white" stroke="#E5E7EB" strokeWidth="1" />
          <circle cx="195" cy="245" r="5" fill="#A78BFA" />
          <rect x="205" y="241" width="80" height="8" rx="2" fill="#6B7280" />
          <circle cx="305" cy="245" r="5" fill="#A78BFA" />
          
          <rect x="180" y="270" width="140" height="30" rx="15" fill="white" stroke="#E5E7EB" strokeWidth="1" />
          <circle cx="195" cy="285" r="5" fill="#A78BFA" />
          <rect x="205" y="281" width="80" height="8" rx="2" fill="#6B7280" />
          <circle cx="305" cy="285" r="5" fill="#A78BFA" />
          
          <rect x="180" y="310" width="140" height="30" rx="15" fill="white" stroke="#E5E7EB" strokeWidth="1" />
          <circle cx="195" cy="325" r="5" fill="#A78BFA" />
          <rect x="205" y="321" width="80" height="8" rx="2" fill="#6B7280" />
          <circle cx="305" cy="325" r="5" fill="#A78BFA" />
          
          {/* Footer area */}
          <rect x="180" y="360" width="140" height="30" rx="4" stroke="#D1D5DB" strokeWidth="2" strokeDasharray="4 4" fill="#EFF6FF" opacity="0.7" />
        </svg>
      </div>

      {/* Text content */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-blue-700">
          Share your bio with the world.
        </h1>
        <p className="text-gray-600 text-center max-w-lg mx-auto text-lg">
          When you're done setting up your bio, add your unique URL to your social media and share what matters most to you!
        </p>
      </div>

      {/* Navigation */}
      <div className="flex flex-col items-center">
        <div className="flex space-x-3 mb-10">
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          <div className="w-3 h-3 rounded-full bg-purple-600"></div>
        </div>
        
        <div className="flex justify-between w-full max-w-sm">
          <button 
            onClick={onBack}
            className="py-3 px-8 rounded-xl font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-all duration-200 hover:shadow-md"
          >
            Back
          </button>
          <button 
            onClick={onComplete}
            className="py-3 px-8 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-lg hover:shadow-purple-200 transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Finish
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingStep5; 