"use client";

interface OnboardingStep4Props {
  onComplete: () => void;
  onBack: () => void;
}

const OnboardingStep4 = ({ onComplete, onBack }: OnboardingStep4Props) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 md:p-10 max-w-3xl mx-auto h-full">
      {/* Blocks illustration */}
      <div className="w-72 h-72 bg-gradient-to-br from-purple-50 to-blue-50 rounded-full flex items-center justify-center mb-10 shadow-inner float-animation">
        <svg className="w-56 h-56 text-gray-400" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="150" y="90" width="200" height="320" rx="6" stroke="#D1D5DB" strokeWidth="4" fill="#F9FAFB" />
          
          {/* Top block */}
          <rect x="180" y="120" width="140" height="70" rx="4" stroke="#D1D5DB" strokeWidth="2" strokeDasharray="4 4" fill="#EFF6FF" opacity="0.7" />
          
          {/* Middle block with card */}
          <rect x="180" y="210" width="140" height="70" rx="4" stroke="#D1D5DB" strokeWidth="2" fill="#EFF6FF" />
          <rect x="190" y="225" width="120" height="40" rx="4" fill="white" stroke="#E5E7EB" strokeWidth="1" />
          <circle cx="205" cy="245" r="10" fill="#A78BFA" />
          <rect x="225" y="235" width="70" height="6" rx="3" fill="#A78BFA" />
          <rect x="225" y="250" width="50" height="4" rx="2" fill="#D1D5DB" />
          
          {/* Bottom block */}
          <rect x="180" y="300" width="140" height="70" rx="4" stroke="#D1D5DB" strokeWidth="2" strokeDasharray="4 4" fill="#EFF6FF" opacity="0.7" />
        </svg>
      </div>

      {/* Text content */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-blue-700">
          Your bio uses blocks.
        </h1>
        <p className="text-gray-600 text-center max-w-lg mx-auto text-lg">
          You can import or add content to a block. Move blocks around to customize your profile!
        </p>
      </div>

      {/* Navigation */}
      <div className="flex flex-col items-center">
        <div className="flex space-x-3 mb-10">
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          <div className="w-3 h-3 rounded-full bg-purple-600"></div>
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
            onClick={onComplete}
            className="py-3 px-8 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-lg hover:shadow-purple-200 transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingStep4; 