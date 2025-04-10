'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function TermsAndConditions() {
  return (
    <div className="bg-gradient-to-r from-white via-white to-[#C4E2F7] min-h-screen py-20">
      {/* Background elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-40 right-10 w-72 h-72 bg-[#C4E2F7]/30 rounded-full blur-3xl"
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute bottom-40 left-10 w-80 h-80 bg-[#C4E2F7]/20 rounded-full blur-3xl"
      />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Terms and Conditions</h1>
          <p className="text-lg text-gray-800 max-w-3xl mx-auto">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2766E4] to-[#6B46C1] mx-auto mt-6 rounded-full"></div>
        </motion.div>
        
        {/* Quick Navigation */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white/70 backdrop-blur-sm rounded-xl p-6 mb-8 shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-4 text-gray-900">Quick Navigation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Introduction",
              "Communications",
              "Purchases",
              "Content",
              "Prohibited Uses",
              "Analytics",
              "Intellectual Property",
              "Termination",
              "Changes To Service",
              "Governing Law",
              "Contact Us"
            ].map((section, index) => (
              <a
                key={section}
                href={`#section-${index + 1}`}
                className="px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:bg-[#2766E4]/5 flex items-center gap-2"
              >
                <span className="text-[#2766E4] font-medium">{index + 1}.</span>
                <span className="text-gray-800">{section}</span>
              </a>
            ))}
          </div>
        </motion.div>
        
        {/* Content */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 mb-10"
        >
          <div className="prose prose-lg max-w-none">
            <div id="section-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2766E4]/10 text-[#2766E4] text-sm">1</span>
                Introduction
              </h2>
              <div className="pl-11">
                <p className="mb-6 text-gray-800 text-base leading-relaxed">
                  Welcome to PlugLink ("Company", "we", "our", "us")! These Terms and Conditions ("Terms", "Terms and Conditions") govern your use of our website located at bio.fm (together or individually "Service") operated by PlugLink.
                </p>
                <div className="bg-blue-50 border-l-4 border-[#2766E4] p-4 rounded-r-md mb-6">
                  <p className="text-sm text-gray-800 leading-relaxed">
                    By using our Service, you agree to these Terms and our Privacy Policy. If you disagree with any part of the terms, you may not access the Service.
                  </p>
                </div>
              </div>
            </div>

            <div id="section-2" className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2766E4]/10 text-[#2766E4] text-sm">2</span>
                Communications
              </h2>
              <div className="pl-11">
                <p className="mb-6 text-gray-800 text-base leading-relaxed">
                  By using our Service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or by emailing support@bio.fm.
                </p>
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-md mb-6">
                  <h4 className="text-green-800 font-semibold mb-2">Communication Preferences</h4>
                  <p className="text-sm text-gray-800 leading-relaxed">
                    You can manage your communication preferences at any time through your account settings or by contacting our support team.
                  </p>
                </div>
              </div>
            </div>

            <div id="section-3" className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2766E4]/10 text-[#2766E4] text-sm">3</span>
                Purchases
              </h2>
              <div className="pl-11">
                <p className="mb-6 text-gray-800 text-base leading-relaxed">
                  If you wish to purchase any product or service made available through Service ("Purchase"), you may be asked to supply certain information relevant to your Purchase including, without limitation, your credit card number, the expiration date of your credit card, your billing address, and your shipping information.
                </p>
                <p className="mb-6 text-gray-800 text-base leading-relaxed">
                  You represent and warrant that: (i) you have the legal right to use any credit card(s) or other payment method(s) in connection with any Purchase; and that (ii) the information you supply to us is true, correct and complete.
                </p>
              </div>
            </div>

            <div id="section-4" className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2766E4]/10 text-[#2766E4] text-sm">4</span>
                Content
              </h2>
              <div className="pl-11">
                <p className="mb-6 text-gray-800 text-base leading-relaxed">
                  Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You are responsible for Content that you post on or through Service, including its legality, reliability, and appropriateness.
                </p>
                <p className="mb-6 text-gray-800 text-base leading-relaxed">
                  By posting Content on or through Service, You represent and warrant that: (i) Content is yours (you own it) and/or you have the right to use it and the right to grant us the rights and license as provided in these Terms, and (ii) that the posting of your Content on or through Service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person or entity.
                </p>
              </div>
            </div>

            <div id="section-5" className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2766E4]/10 text-[#2766E4] text-sm">5</span>
                Prohibited Uses
              </h2>
              <div className="pl-11">
                <p className="mb-6 text-gray-800 text-base leading-relaxed">
                  You may use Service only for lawful purposes and in accordance with Terms. You agree not to use Service:
                </p>
                <ol className="list-decimal pl-6 mb-6 space-y-2 text-gray-800">
                  <li className="leading-relaxed">In any way that violates any applicable national or international law or regulation.</li>
                  <li className="leading-relaxed">For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them to inappropriate content or otherwise.</li>
                  <li className="leading-relaxed">To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter," "spam," or any other similar solicitation.</li>
                  <li className="leading-relaxed">To impersonate or attempt to impersonate Company, a Company employee, another user, or any other person or entity.</li>
                  <li className="leading-relaxed">In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful, or in connection with any unlawful, illegal, fraudulent, or harmful purpose or activity.</li>
                </ol>
              </div>
            </div>

            <div id="section-6" className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2766E4]/10 text-[#2766E4] text-sm">6</span>
                Analytics
              </h2>
              <div className="pl-11">
                <p className="mb-6">
                  We may use third-party Service Providers to monitor and analyze the use of our Service.
                </p>
                <p className="mb-6">
                  <strong>Google Analytics</strong> is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualize and personalize the ads of its own advertising network.
                </p>
              </div>
            </div>

            <div id="section-7" className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2766E4]/10 text-[#2766E4] text-sm">7</span>
                Intellectual Property
              </h2>
              <div className="pl-11">
                <p className="mb-6">
                  Service and its original content (excluding Content provided by users), features and functionality are and will remain the exclusive property of PlugLink and its licensors. Service is protected by copyright, trademark, and other laws of the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of PlugLink.
                </p>
              </div>
            </div>

            <div id="section-8" className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2766E4]/10 text-[#2766E4] text-sm">8</span>
                Termination
              </h2>
              <div className="pl-11">
                <p className="mb-6">
                  We may terminate or suspend your account and bar access to Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of Terms.
                </p>
                <p className="mb-6">
                  If you wish to terminate your account, you may simply discontinue using Service. All provisions of Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.
                </p>
              </div>
            </div>

            <div id="section-9" className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2766E4]/10 text-[#2766E4] text-sm">9</span>
                Changes To Service
              </h2>
              <div className="pl-11">
                <p className="mb-6">
                  We reserve the right to withdraw or amend our Service, and any service or material we provide via Service, in our sole discretion without notice. We will not be liable if for any reason all or any part of Service is unavailable at any time or for any period. From time to time, we may restrict access to some parts of Service, or the entire Service, to users, including registered users.
                </p>
              </div>
            </div>

            <div id="section-10" className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2766E4]/10 text-[#2766E4] text-sm">10</span>
                Governing Law
              </h2>
              <div className="pl-11">
                <p className="mb-6">
                  These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
                </p>
                <p className="mb-6">
                  Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service and supersede and replace any prior agreements we might have had between us regarding Service.
                </p>
              </div>
            </div>

            <div id="section-11" className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2766E4]/10 text-[#2766E4] text-sm">11</span>
                Contact Us
              </h2>
              <div className="pl-11">
                <p className="mb-6">
                  If you have any questions about these Terms, please contact us:
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li className="mb-2">By email: support@pluglink.com</li>
                  <li className="mb-2">By visiting this page on our website: bio.fm/contact</li>
                  <li>By phone number: +1 (800) 123-4567</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Related Policies */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
        >
          <Link href="/privacy" className="group">
            <div className="bg-white/60 backdrop-blur-sm rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:bg-white/80 border border-gray-100 h-full flex flex-col">
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#2766E4] transition-colors">
                Privacy Policy
              </h3>
              <p className="text-gray-600 mb-3 flex-grow">
                Learn more about how we collect, use, and share your personal information.
              </p>
              <div className="flex items-center text-[#2766E4]">
                <span className="font-medium mr-2">Read Policy</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
          
          <Link href="/youtube-policy" className="group">
            <div className="bg-white/60 backdrop-blur-sm rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:bg-white/80 border border-gray-100 h-full flex flex-col">
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#2766E4] transition-colors">
                YouTube Policy
              </h3>
              <p className="text-gray-600 mb-3 flex-grow">
                Details about our policies regarding YouTube content and integrations.
              </p>
              <div className="flex items-center text-[#2766E4]">
                <span className="font-medium mr-2">Read Policy</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
} 