"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Dashboard from '@/components/Dashboard/Dashboard';

const BioLinkEditorPage = () => {
  const router = useRouter();
  
  // State for bio link data (would normally come from API/database)
  const [bioLinkData, setBioLinkData] = useState({
    username: 'Sanskar',
    bio: 'amazing persone with cool friend',
    profileImage: '/profile-placeholder.jpg',
    links: []
  });
  
  // Tab state
  const [activeTab, setActiveTab] = useState('Links');
  const tabs = ['Links', 'Posts', 'Design', 'Subscribers', 'Stats', 'Settings'];

  // Effect to simulate loading data
  useEffect(() => {
    // This would normally fetch the user's bio link data from the API
  }, []);

  const handleAddLink = () => {
    // This would open a modal to add a new link
    console.log('Add link clicked');
  };

  const handleAddEmbed = () => {
    // This would open a modal to add an embed
    console.log('Add embed clicked');
  };

  const handleAddHeader = () => {
    // This would add a header section
    console.log('Add header clicked');
  };

  const handleAddSocials = () => {
    // This would open options to add social media links
    console.log('Add socials clicked');
  };

  return (
    <Dashboard activeTab="biolinks">
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 gap-8">
        {/* Left Side - Phone Preview */}
        <div className="lg:w-1/3">
          <div className="sticky top-24">
            <div className="relative w-[280px] h-[580px] mx-auto border-[8px] border-gray-800 rounded-[30px] shadow-[0_0_20px_rgba(0,0,0,0.15)] bg-white overflow-hidden">
              {/* Phone notch */}
              <div className="absolute top-0 left-0 right-0 h-6 bg-gray-800 rounded-b-lg w-1/3 mx-auto"></div>
              
              {/* Phone frame content */}
              <div className="relative h-full flex flex-col pt-6">
                {/* Share button */}
                <div className="absolute top-4 right-4 p-2 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors z-10 cursor-pointer">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </div>
                
                {/* Profile content */}
                <div className="flex flex-col items-center pt-10 px-6 bg-gradient-to-b from-gray-50 to-white">
                  {/* Profile picture */}
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4 ring-2 ring-gray-100 shadow-md">
                    <Image
                      src="/profile-placeholder.jpg"
                      alt="Profile"
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Username */}
                  <h1 className="text-xl font-bold text-gray-900">{bioLinkData.username}</h1>
                  
                  {/* Bio */}
                  <p className="text-sm text-gray-600 text-center mt-2 mb-8">
                    {bioLinkData.bio}
                  </p>
                  
                  {/* Links would be inserted here */}
                  <div className="w-full space-y-3">
                    {bioLinkData.links.length === 0 ? (
                      <div className="bg-gray-50 hover:bg-gray-100 transition-colors duration-200 rounded-lg py-3 px-4 text-center text-gray-500 text-sm border border-gray-100">
                        Your links will appear here
                      </div>
                    ) : (
                      bioLinkData.links.map((link, index) => (
                        <div key={index} className="bg-gray-50 hover:bg-gray-100 transition-colors duration-200 rounded-lg py-3 px-4 text-center border border-gray-100">
                          {link.title}
                        </div>
                      ))
                    )}
                  </div>
                  
                  {/* Bio Link branding */}
                  <div className="mt-auto pt-8 pb-4">
                    <div className="flex justify-center items-center">
                      <div className="bg-gray-50 border border-gray-100 rounded-md px-2 py-1">
                        <span className="text-xs text-gray-400 font-medium">BIO LINK</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Side - Editor */}
        <div className="lg:w-2/3 space-y-6">
          {/* Tabs */}
          <div className="relative border-b border-gray-200 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-gradient-to-r after:from-transparent after:via-gray-300 after:to-transparent">
            <div className="flex overflow-x-auto hide-scrollbar">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`px-5 py-3 text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                    activeTab === tab 
                      ? 'text-blue-600 border-b-2 border-blue-600 relative z-10' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                  {tab === 'Subscribers' && (
                    <span className="ml-1 px-1.5 py-0.5 text-xs bg-red-600 text-white rounded-md">NEW</span>
                  )}
                </button>
              ))}
            </div>
          </div>
          
          {/* Add Link & Add Embed Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleAddLink}
              className="flex-1 py-3.5 px-4 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-medium rounded-xl shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transform hover:-translate-y-0.5"
            >
              <span className="flex justify-center items-center">
                <span className="mr-2 text-lg">+</span> ADD LINK
              </span>
            </button>
            
            <button
              onClick={handleAddEmbed}
              className="flex-1 py-3.5 px-4 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-xl shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform hover:-translate-y-0.5"
            >
              <span className="flex justify-center items-center">
                <span className="mr-2 text-lg">+</span> ADD EMBED
              </span>
            </button>
          </div>
          
          {/* Add Header */}
          <button
            onClick={handleAddHeader}
            className="w-full flex items-center justify-center text-gray-600 hover:text-gray-900 py-2.5 hover:bg-gray-50 rounded-lg transition-colors duration-200"
          >
            <span className="mr-1">+</span> Add header
          </button>
          
          {/* Socials Section */}
          <div className="pt-4">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Socials</h3>
            
            <div className="bg-white rounded-xl border border-gray-200 p-8 flex items-center justify-center hover:border-gray-300 hover:shadow-sm transition-all duration-200">
              <button
                onClick={handleAddSocials}
                className="text-blue-600 hover:text-blue-700 font-medium flex items-center transition-colors duration-200"
              >
                <span className="mr-1 bg-blue-50 rounded-md w-5 h-5 inline-flex items-center justify-center">+</span> 
                Add socials
              </button>
            </div>
          </div>
        </div>
      </div>
    </Dashboard>
  );
};

export default BioLinkEditorPage; 