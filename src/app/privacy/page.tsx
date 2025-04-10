'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  return (
    <div className="bg-gradient-to-r from-white via-white to-[#C4E2F7] min-h-screen py-20">
      {/* Background elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-40 left-10 w-72 h-72 bg-[#C4E2F7]/30 rounded-full blur-3xl"
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute bottom-40 right-10 w-80 h-80 bg-[#C4E2F7]/20 rounded-full blur-3xl"
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
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
              "Information We Collect",
              "How We Use Information",
              "How We Share Information",
              "Your Choices",
              "Data Security",
              "International Transfers",
              "Children's Privacy",
              "Policy Changes",
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
                  PlugLink ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by PlugLink when you use our website (bio.fm), mobile applications, and other online products and services (collectively, the "Services") or when you otherwise interact with us.
                </p>
                <div className="bg-blue-50 border-l-4 border-[#2766E4] p-4 rounded-r-md mb-6">
                  <p className="text-sm text-gray-800 leading-relaxed">
                    By accessing or using our Services, you signify that you have read, understood, and agree to our collection, storage, use, and disclosure of your personal information as described in this Privacy Policy.
                  </p>
                </div>
              </div>
            </div>

            <div id="section-2" className="mt-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2766E4]/10 text-[#2766E4] text-sm">2</span>
                Information We Collect
              </h2>
              <div className="pl-11">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Information You Provide</h3>
                    <ul className="space-y-2 text-gray-800">
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Account information
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Profile information
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Content you post
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Automatic Collection</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Device information
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Usage information
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Location information
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div id="section-3" className="mt-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2766E4]/10 text-[#2766E4] text-sm">3</span>
                How We Use Your Information
              </h2>
              <div className="pl-11">
                <p className="mb-6 text-gray-800 text-base leading-relaxed">
                  We use the information we collect to provide, maintain, and improve our Services, to develop new products and services, and to protect PlugLink and our users. Specifically, we use your information to:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-800">
                  <li className="leading-relaxed">Provide and deliver the Services you request</li>
                  <li className="leading-relaxed">Create and maintain your account and profile</li>
                  <li className="leading-relaxed">Process transactions and send related information, including confirmations and receipts</li>
                  <li className="leading-relaxed">Send you technical notices, updates, security alerts, and support and administrative messages</li>
                  <li className="leading-relaxed">Respond to your comments, questions, and requests, and provide customer service</li>
                  <li className="leading-relaxed">Communicate with you about products, services, offers, promotions, and events</li>
                  <li className="leading-relaxed">Monitor and analyze trends, usage, and activities in connection with our Services</li>
                  <li className="leading-relaxed">Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
                  <li className="leading-relaxed">Personalize and improve the Services</li>
                </ul>
              </div>
            </div>

            <div id="section-4" className="mt-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2766E4]/10 text-[#2766E4] text-sm">4</span>
                How We Share Your Information
              </h2>
              <div className="pl-11">
                <p className="mb-6">
                  We may share information about you in the following ways:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>With other users:</strong> Information that you make public on our Services, such as your profile information and content you post, will be available to other users of the Services.</li>
                  <li><strong>With service providers:</strong> We may share your information with third-party vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.</li>
                  <li><strong>For legal reasons:</strong> We may share information if we believe that disclosure is reasonably necessary to comply with a law, regulation, legal process, or governmental request; to protect the safety, rights, or property of PlugLink, our users, or the public; or to detect, prevent, or otherwise address fraud, security, or technical issues.</li>
                  <li><strong>Business transfers:</strong> We may share or transfer information in connection with a merger, acquisition, reorganization, sale of assets, or bankruptcy.</li>
                  <li><strong>With your consent:</strong> We may share information with third parties when we have your consent to do so.</li>
                </ul>
              </div>
            </div>

            <div id="section-5" className="mt-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2766E4]/10 text-[#2766E4] text-sm">5</span>
                Your Choices
              </h2>
              <div className="pl-11">
                <p className="mb-6">
                  You have several choices regarding the information we collect and how it's used:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Account Information:</strong> You may update, correct, or delete your account information at any time by logging into your account settings.</li>
                  <li><strong>Marketing Communications:</strong> You can opt out of receiving promotional emails from PlugLink by following the instructions in those emails or by changing your notification settings in your account.</li>
                  <li><strong>Cookies:</strong> Most web browsers are set to accept cookies by default. You can usually set your browser to remove or reject cookies, but note that doing so may affect the availability and functionality of our Services.</li>
                  <li><strong>Do Not Track:</strong> Some browsers support a "Do Not Track" feature, which signals to websites that you do not want to have your online activities tracked. Our Services do not currently respond to "Do Not Track" signals.</li>
                </ul>
              </div>
            </div>

            <div id="section-6" className="mt-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2766E4]/10 text-[#2766E4] text-sm">6</span>
                Data Security
              </h2>
              <div className="pl-11">
                <p className="mb-6">
                  We take reasonable measures to help protect information about you from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction. However, no security system is impenetrable, and we cannot guarantee the security of our systems or your information.
                </p>
              </div>
            </div>

            <div id="section-7" className="mt-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2766E4]/10 text-[#2766E4] text-sm">7</span>
                International Data Transfers
              </h2>
              <div className="pl-11">
                <p className="mb-6">
                  PlugLink is based in the United States, and we process and store information in the U.S. and other countries. By accessing or using our Services or otherwise providing information to us, you consent to the processing, transfer, and storage of information in and to the U.S. and other countries, where you may not have the same rights as you do under local law.
                </p>
              </div>
            </div>

            <div id="section-8" className="mt-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2766E4]/10 text-[#2766E4] text-sm">8</span>
                Children's Privacy
              </h2>
              <div className="pl-11">
                <p className="mb-6">
                  PlugLink is not directed to children under the age of 13, and we do not knowingly collect personal information from children under 13. If we learn that we have collected personal information from a child under 13, we will promptly delete that information.
                </p>
              </div>
            </div>

            <div id="section-9" className="mt-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2766E4]/10 text-[#2766E4] text-sm">9</span>
                Changes to this Privacy Policy
              </h2>
              <div className="pl-11">
                <p className="mb-6">
                  We may modify this Privacy Policy from time to time. When we make changes, we will update the "Last Updated" date at the top of this policy. We encourage you to review the Privacy Policy whenever you access or use our Services or otherwise interact with us to stay informed about our information practices and the choices available to you.
                </p>
              </div>
            </div>

            <div id="section-10" className="mt-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2766E4]/10 text-[#2766E4] text-sm">10</span>
                Contact Us
              </h2>
              <div className="pl-11">
                <p className="mb-6">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li className="mb-2">By email: privacy@pluglink.com</li>
                  <li className="mb-2">By visiting this page on our website: bio.fm/privacy-contact</li>
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
          <Link href="/terms" className="group">
            <div className="bg-white/60 backdrop-blur-sm rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:bg-white/80 border border-gray-100 h-full flex flex-col">
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#2766E4] transition-colors">
                Terms and Conditions
              </h3>
              <p className="text-gray-600 mb-3 flex-grow">
                Review our Terms and Conditions for using our platform and services.
              </p>
              <div className="flex items-center text-[#2766E4]">
                <span className="font-medium mr-2">Read Terms</span>
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