"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Dashboard from '@/components/Dashboard/Dashboard';

const BioLinksPage = () => {
  const router = useRouter();
  const [hasProfile, setHasProfile] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // In a real app, you would check if the user has already set up their bio link page
    // This is a mock implementation
    const checkProfileSetup = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // For demo purposes, we'll assume the user doesn't have a profile yet
        const mockHasProfile = false;
        setHasProfile(mockHasProfile);
        
        // Redirect to setup page if no profile exists
        if (!mockHasProfile) {
          router.push('/dashboard/biolinks/setup');
        }
      } catch (error) {
        console.error("Error checking profile setup:", error);
      } finally {
        setIsLoading(false);
      }
    };

    checkProfileSetup();
  }, [router]);

  // Loading state
  if (isLoading) {
    return (
      <Dashboard activeTab="biolinks">
        <div className="flex items-center justify-center h-[calc(100vh-80px)]">
          <div className="text-center">
            <div className="inline-block h-12 w-12 rounded-full border-4 border-t-blue-600 border-blue-200 animate-spin"></div>
            <p className="mt-4 text-lg text-gray-600">Loading your bio link page...</p>
          </div>
        </div>
      </Dashboard>
    );
  }

  // This would only be shown briefly before redirect, or if there's an error with the redirect
  return (
    <Dashboard activeTab="biolinks">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900">Bio Link Page</h1>
          <p className="mt-4 text-lg text-gray-600">
            Setting up your bio link page...
          </p>
          <button
            onClick={() => router.push('/dashboard/biolinks/setup')}
            className="mt-8 inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Go to Setup Page
          </button>
        </div>
      </div>
    </Dashboard>
  );
};

export default BioLinksPage; 