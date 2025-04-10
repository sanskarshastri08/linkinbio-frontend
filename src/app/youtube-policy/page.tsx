'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function YouTubePolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-white via-white to-[#C4E2F7] py-20">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-[#2766E4] mb-6 transition-colors hover:text-[#1e55c6] hover:scale-105 transform duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">YouTube Policy</h1>
          <p className="text-lg text-gray-800 max-w-3xl mx-auto">
            Guidelines for linking and sharing YouTube content on bio.fm
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2766E4] to-[#6B46C1] mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="mt-12 space-y-8">
          <motion.section
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            id="content-guidelines"
            className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Content Guidelines</h2>
            <div className="prose max-w-none">
              <p className="text-gray-800 text-base leading-relaxed mb-4">
                To ensure a safe and positive experience for all users, please follow these guidelines when linking YouTube content:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-800">
                <li className="leading-relaxed">Content must comply with YouTube's Terms of Service</li>
                <li className="leading-relaxed">No hate speech, harassment, or harmful content</li>
                <li className="leading-relaxed">Respect copyright and intellectual property rights</li>
                <li className="leading-relaxed">No misleading or deceptive content</li>
                <li className="leading-relaxed">Age-appropriate content only</li>
              </ul>
            </div>
          </motion.section>

          <motion.section
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            id="monetization"
            className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Monetization</h2>
            <div className="prose max-w-none">
              <p className="text-gray-800 text-base leading-relaxed mb-6">
                Understanding how monetization works with your YouTube content on bio.fm:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Allowed</h3>
                  <ul className="space-y-3 text-gray-800">
                    <li className="flex items-center leading-relaxed">
                      <span className="text-green-500 mr-2">✓</span>
                      Monetized YouTube channels
                    </li>
                    <li className="flex items-center leading-relaxed">
                      <span className="text-green-500 mr-2">✓</span>
                      Sponsored content links
                    </li>
                    <li className="flex items-center leading-relaxed">
                      <span className="text-green-500 mr-2">✓</span>
                      Affiliate marketing
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Not Allowed</h3>
                  <ul className="space-y-3 text-gray-800">
                    <li className="flex items-center leading-relaxed">
                      <span className="text-red-500 mr-2">×</span>
                      Deceptive monetization
                    </li>
                    <li className="flex items-center leading-relaxed">
                      <span className="text-red-500 mr-2">×</span>
                      Misleading affiliate links
                    </li>
                    <li className="flex items-center leading-relaxed">
                      <span className="text-red-500 mr-2">×</span>
                      Unauthorized promotions
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            id="copyright"
            className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Copyright</h2>
            <div className="prose max-w-none">
              <p className="text-gray-800 text-base leading-relaxed mb-6">
                Protecting intellectual property rights is crucial. Here's what you need to know:
              </p>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Points</h3>
                <ul className="space-y-3 text-gray-800">
                  <li className="flex items-start leading-relaxed">
                    <span className="text-blue-500 mr-2">•</span>
                    Only link to content you own or have rights to share
                  </li>
                  <li className="flex items-start leading-relaxed">
                    <span className="text-blue-500 mr-2">•</span>
                    Respect copyright laws and YouTube's copyright policies
                  </li>
                  <li className="flex items-start leading-relaxed">
                    <span className="text-blue-500 mr-2">•</span>
                    Properly attribute any licensed content
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            id="community-standards"
            className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Community Standards</h2>
            <div className="prose max-w-none">
              <p className="text-gray-800 text-base leading-relaxed mb-6">
                We maintain high standards to ensure a safe and positive environment for all users:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {[
                  {
                    title: 'Respect',
                    description: 'Treat all community members with respect and courtesy'
                  },
                  {
                    title: 'Quality',
                    description: 'Maintain high-quality, authentic content standards'
                  },
                  {
                    title: 'Safety',
                    description: 'Ensure content is safe and appropriate for all audiences'
                  }
                ].map((standard) => (
                  <div key={standard.title} className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{standard.title}</h3>
                    <p className="text-gray-800 leading-relaxed">{standard.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl shadow-sm p-8 mt-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Updates & Changes</h2>
            <div className="prose max-w-none">
              <p className="text-gray-800 text-base leading-relaxed mb-6">
                We regularly update our policies to ensure the best experience for our community.
                Stay informed about policy changes:
              </p>
              <div className="flex flex-col md:flex-row gap-6">
                <a
                  href="/newsletter"
                  className="flex-1 bg-white p-6 rounded-lg hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Newsletter</h3>
                  <p className="text-gray-800 leading-relaxed">Subscribe for policy updates</p>
                </a>
                <a
                  href="/discord"
                  className="flex-1 bg-white p-6 rounded-lg hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Discord</h3>
                  <p className="text-gray-800 leading-relaxed">Join our community discussions</p>
                </a>
                <a
                  href="/blog"
                  className="flex-1 bg-white p-6 rounded-lg hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Blog</h3>
                  <p className="text-gray-800 leading-relaxed">Read detailed policy articles</p>
                </a>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
} 