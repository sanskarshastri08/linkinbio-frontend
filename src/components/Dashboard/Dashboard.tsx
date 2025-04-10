"use client";
import { useState } from 'react';
import Link from 'next/link';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [urlToShorten, setUrlToShorten] = useState('');
  const [isUrlProcessing, setIsUrlProcessing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleShortenUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (!urlToShorten) return;
    
    setIsUrlProcessing(true);
    // Simulate API call
    setTimeout(() => {
      setIsUrlProcessing(false);
      setUrlToShorten('');
      // Here you would handle the response and update your links
    }, 1000);
  };

  const demoLinks = [
    {
      id: 1,
      originalUrl: 'https://example.com/very-long-url-that-needs-shortening',
      shortUrl: 'linkfo.io/a1b2c3',
      campaign: 'Summer Sale',
      clicks: 245,
      uniqueClicks: 189,
      qrScans: 42,
      tags: ['marketing', 'sale'],
      status: 'active',
    }
  ];

  return (
    <div className={`min-h-screen bg-white ${styles.dashboardContainer}`}>
      {/* Dashboard Top Bar - Only contains dashboard nav, not the main site nav */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <div className="font-bold text-2xl flex items-center">
                <span className="h-10 w-10 rounded-md bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mr-3 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 17H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                    <path d="M19 17h-4"></path>
                    <path d="M19 5h-4"></path>
                    <line x1="12" y1="3" x2="12" y2="21"></line>
                  </svg>
                </span>
                <div className="flex flex-col">
                  <span className="text-gray-800 font-bold tracking-wide">LinkFolio</span>
                  <span className="text-xs text-gray-500 font-medium -mt-1">Dashboard</span>
                </div>
              </div>
            </div>

            {/* Dashboard Navigation - Centered */}
            <div className="flex flex-1 justify-center">
              <nav className="flex space-x-8 items-center">
                <Link 
                  href="/dashboard" 
                  className={`px-3 py-2 text-sm font-bold flex items-center ${styles.navLink} ${
                    activeTab === 'home' 
                      ? `text-blue-600 ${styles.activeNavLink}` 
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                  onClick={() => setActiveTab('home')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                  Home
                </Link>
                <Link 
                  href="/dashboard/links" 
                  className={`px-3 py-2 text-sm font-bold flex items-center ${styles.navLink} ${
                    activeTab === 'links' 
                      ? `text-blue-600 ${styles.activeNavLink}` 
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                  onClick={() => setActiveTab('links')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                  </svg>
                  Links
                </Link>
                <Link 
                  href="/dashboard/biolinks" 
                  className={`px-3 py-2 text-sm font-bold flex items-center ${styles.navLink} ${
                    activeTab === 'biolinks' 
                      ? `text-blue-600 ${styles.activeNavLink}` 
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                  onClick={() => setActiveTab('biolinks')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="9" y1="3" x2="9" y2="21"></line>
                  </svg>
                  Bio Links
                </Link>
                <Link 
                  href="/dashboard/analytics" 
                  className={`px-3 py-2 text-sm font-bold flex items-center ${styles.navLink} ${
                    activeTab === 'analytics' 
                      ? `text-blue-600 ${styles.activeNavLink}` 
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                  onClick={() => setActiveTab('analytics')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10"></line>
                    <line x1="12" y1="20" x2="12" y2="4"></line>
                    <line x1="6" y1="20" x2="6" y2="14"></line>
                  </svg>
                  Analytics
                </Link>
              </nav>
            </div>

            {/* Profile Dropdown */}
            <div className="flex items-center">
              <button className="mr-4 relative p-1 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" aria-label="Notifications">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-md bg-red-500 ring-2 ring-white"></span>
              </button>
              
              <div className="relative flex-shrink-0">
                <div>
                  <button
                    className={`bg-white rounded-md flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${styles.profileButton}`}
                    onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                  >
                    <span className="sr-only">Open user menu</span>
                    <div className="h-8 w-8 rounded-md bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-semibold">
                      U
                    </div>
                  </button>
                </div>
                
                {isProfileDropdownOpen && (
                  <div 
                    className={`origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ${styles.dropdownMenu}`}
                  >
                    <a
                      href="#profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Your Profile
                    </a>
                    <a
                      href="#settings"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Settings
                    </a>
                    <a
                      href="#signout"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sign out
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <main className={`max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 ${styles.dashboardContent}`}>
        {/* Features Section (Link Shortener + Bio Link) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          {/* Link Shortener Card */}
          <div className="bg-white p-6 rounded-md border border-gray-200 shadow-sm flex items-center hover:shadow-md transition-shadow duration-200">
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Quickly Shorten your link</h2>
              <form onSubmit={handleShortenUrl} className="flex">
                <input
                  type="url"
                  placeholder="Enter URL to shorten"
                  value={urlToShorten}
                  onChange={(e) => setUrlToShorten(e.target.value)}
                  className="flex-1 border border-gray-300 py-2 px-4 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                <button 
                  type="submit"
                  disabled={isUrlProcessing}
                  className={`flex items-center justify-center w-12 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md transition-colors ${isUrlProcessing ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {isUrlProcessing ? (
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  )}
                </button>
              </form>
              <p className="mt-2 text-xs text-gray-500">Enter any URL to create a short, trackable link</p>
            </div>
            <div className="hidden md:block ml-8">
              <div className="p-3 bg-gray-50 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="120" height="90" viewBox="0 0 160 100" fill="none">
                  <path d="M60 50H100" stroke="#2563EB" strokeWidth="8" strokeLinecap="round"/>
                  <rect x="25" y="35" width="30" height="30" rx="6" stroke="#2563EB" strokeWidth="8"/>
                  <rect x="105" y="35" width="30" height="30" rx="6" stroke="#2563EB" strokeWidth="8"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Bio Link Card */}
          <div className="bg-white p-6 rounded-md border border-gray-200 shadow-sm flex items-center relative overflow-hidden hover:shadow-md transition-shadow duration-200">
            <div className="absolute top-0 right-0">
              <div className="bg-blue-50 text-blue-600 text-xs px-2 py-1 font-semibold rounded-bl-md">PRO</div>
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-800 mb-3">Bio Link</h2>
              <p className="text-gray-600 mb-4">A single URL that houses all your key links in one place.</p>
              <div className="flex space-x-3">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md transition-colors flex items-center">
                  <span>Create Now</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <button className="text-gray-600 hover:text-gray-800 hover:bg-gray-100 font-medium px-4 py-2 rounded-md transition-colors border border-gray-200">
                  Learn More
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-gray-50 p-3 rounded-md">
                <div className="w-40 h-60 bg-white rounded-md p-2 border border-gray-200 shadow-sm">
                  <div className="flex justify-center mb-2">
                    <div className="h-8 w-8 rounded-md bg-blue-500"></div>
                  </div>
                  <div className="bg-gray-100 rounded-md p-1 mb-2">
                    <div className="h-2 bg-blue-200 rounded w-3/4 mx-auto"></div>
                  </div>
                  <div className="bg-gray-100 rounded-md p-1 mb-2">
                    <div className="h-2 bg-blue-200 rounded w-3/4 mx-auto"></div>
                  </div>
                  <div className="bg-gray-100 rounded-md p-1 mb-2">
                    <div className="h-2 bg-blue-200 rounded w-3/4 mx-auto"></div>
                  </div>
                  <div className="flex justify-center mt-2 space-x-1">
                    <div className="h-2 w-2 rounded-md bg-blue-500"></div>
                    <div className="h-2 w-2 rounded-md bg-pink-500"></div>
                    <div className="h-2 w-2 rounded-md bg-green-500"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Links Section */}
        <div className="mt-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-2 sm:mb-0">Recent Links</h2>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search Links"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full sm:w-auto border border-gray-300 rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 absolute right-3 top-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <div className="flex space-x-2">
                <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="-ml-0.5 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                  Filter
                </button>
                <button className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="-ml-0.5 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  New Link
                </button>
              </div>
            </div>
          </div>
          
          {/* Links Table */}
          <div className="bg-white shadow-sm rounded-md overflow-hidden border border-gray-200">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Link
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Campaign
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Clicks
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Unique Clicks
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      QR Scans
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tags
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {demoLinks.length > 0 ? (
                    demoLinks.map(link => (
                      <tr key={link.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{link.shortUrl}</div>
                          <div className="text-xs text-gray-500 truncate max-w-xs">{link.originalUrl}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{link.campaign}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {link.clicks}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {link.uniqueClicks}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {link.qrScans}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex flex-wrap gap-1">
                            {link.tags.map((tag, index) => (
                              <span key={index} className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-blue-50 text-blue-600">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-green-50 text-green-600">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5"></span>
                            Active
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex space-x-2">
                            <button className="text-blue-600 hover:text-blue-800 font-medium">Edit</button>
                            <button className="text-red-600 hover:text-red-800 font-medium">Delete</button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={8} className="px-6 py-16 text-center text-gray-500">
                        <div className="flex flex-col items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                          </svg>
                          <p className="text-lg font-medium text-gray-900 mb-1">No links available</p>
                          <p className="text-gray-500 mb-4">Create your first shortened link to start tracking clicks</p>
                          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="-ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            Create First Link
                          </button>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard; 