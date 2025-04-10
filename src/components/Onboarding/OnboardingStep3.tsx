"use client";

interface OnboardingStep3Props {
  onComplete: () => void;
  onBack: () => void;
}

const OnboardingStep3 = ({ onComplete, onBack }: OnboardingStep3Props) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 md:p-10 max-w-3xl mx-auto h-full">
      {/* Success illustration */}
      <div className="w-72 h-72 bg-gradient-to-br from-purple-50 to-green-50 rounded-full flex items-center justify-center mb-10 shadow-inner float-animation">
        <div className="w-40 h-40 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl">
          <svg className="w-32 h-32 text-purple-600 icon-pulse" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 11.0857V12.0057C21.9988 14.1621 21.3005 16.2604 20.0093 17.9875C18.7182 19.7147 16.9033 20.9782 14.8354 21.5896C12.7674 22.201 10.5573 22.1276 8.53447 21.3803C6.51168 20.633 4.78465 19.2518 3.61096 17.4428C2.43727 15.6338 1.87979 13.4938 2.02168 11.342C2.16356 9.19029 2.99721 7.14205 4.39828 5.5028C5.79935 3.86354 7.69279 2.72111 9.79619 2.24587C11.8996 1.77063 14.1003 1.98806 16.07 2.86572" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Final step text */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-blue-700">
          You're all set!
        </h1>
        <p className="text-gray-600 text-center max-w-lg mx-auto text-lg">
          Your LinkFolio page is ready. Now you can start customizing it and adding your content.
        </p>
      </div>

      {/* Navigation */}
      <div className="flex flex-col items-center">
        <div className="flex space-x-3 mb-10">
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          <div className="w-3 h-3 rounded-full bg-purple-600"></div>
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
            onClick={onComplete}
            className="py-3 px-8 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-lg hover:shadow-purple-200 transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingStep3; 