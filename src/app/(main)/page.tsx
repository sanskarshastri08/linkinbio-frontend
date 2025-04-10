"use client";

import Image from "next/image";
import { useModal } from "@/components/Modals/ModalProvider";

export default function Home() {
  const { openSignInModal, openSignUpModal } = useModal();
  
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-white via-white to-[#C4E2F7] pt-40 md:pt-44 pb-16 md:pb-20 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 lg:pr-6">
              <div className="mb-5">
                <span className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-purple-600 font-semibold py-1.5 px-4 rounded-full text-sm inline-flex items-center">
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 7H5C3.89543 4 3 4.89543 3 6V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V6C21 4.89543 20.1046 4 19 4H16M15 4H9C9 2.89543 9.89543 2 11 2H13C14.1046 2 15 2.89543 15 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                  Next-Gen Bio Link Platform
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-800 leading-none mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">One Link</span> for All Your Online Content
              </h1>
              
              <p className="text-gray-600 text-lg md:text-xl mb-8 leading-relaxed max-w-xl">
                LinkFolio gives creators, influencers, and businesses a beautiful way to share all their content with just <span className="text-purple-600 font-semibold">one bio link</span>. Get started for free in minutes.
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-10">
                <a 
                  href="#" 
                  className="group bg-white border border-gray-200 hover:border-gray-300 text-gray-700 hover:text-gray-900 px-8 py-4 rounded-full font-bold transition-all duration-300 text-center shadow-sm hover:shadow flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2 text-gray-500 group-hover:text-gray-700 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  How it works
                </a>
                <a
                  href="#" 
                  className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-1 text-center flex items-center justify-center"
                >
                  <span>Create Your LinkFolio</span>
                  <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
              
              <div className="flex items-center space-x-4 mt-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                      <Image
                        src={`/avatar-${i}.jpg`}
                        alt={`User ${i}`}
                        width={32}
                        height={32}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <span className="font-semibold text-purple-600">4,500+</span> creators trust us
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
                
                <div className="relative">
                  <Image
                    src="/hero-links.png"
                    alt="LinkFolio Platform Interface"
                    width={550}
                    height={400}
                    quality={85}
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 550px"
                    className="rounded-2xl shadow-lg relative z-10"
                    priority
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
                  />
                  
                  <div className="absolute -bottom-5 -right-5 z-20 bg-white rounded-xl shadow-lg px-4 py-2 flex items-center border border-gray-100">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-800">Setup takes only 2 minutes</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Features highlight */}
          <div className="flex flex-wrap justify-center gap-4 mt-20">
            <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm flex items-center border border-gray-100 hover:shadow-md transition-all duration-300 hover:bg-white">
              <div className="mr-3 w-6 h-6 text-purple-600 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
              </div>
              <span className="font-semibold text-gray-800">Smart Link Shortener</span>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm flex items-center border border-gray-100 hover:shadow-md transition-all duration-300 hover:bg-white">
              <div className="mr-3 w-6 h-6 text-purple-600 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </svg>
              </div>
              <span className="font-semibold text-gray-800">Customizable Bio Links</span>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm flex items-center border border-gray-100 hover:shadow-md transition-all duration-300 hover:bg-white">
              <div className="mr-3 w-6 h-6 text-purple-600 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H7" />
                </svg>
              </div>
              <span className="font-semibold text-gray-800">Advanced A/B Testing</span>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm flex items-center border border-gray-100 hover:shadow-md transition-all duration-300 hover:bg-white">
              <div className="mr-3 w-6 h-6 text-purple-600 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
              <span className="font-semibold text-gray-800">Detailed Analytics</span>
            </div>
          </div>
        </div>
      </section>

      {/* Business Promotion Section */}
      <section className="bg-gradient-to-r from-white via-white to-[#C4E2F7] pt-36 pb-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#2766E4] to-[#6B46C1] inline-block text-transparent bg-clip-text mb-3">
              Transform Your Online Presence
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#2766E4] to-[#6B46C1] mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Seamlessly connect your digital world with powerful link management
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row items-stretch gap-16">
            {/* First Column: Content First, Then Image */}
            <div className="lg:w-1/2 flex flex-col">
              <div className="mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-5">
                  Promoting your business is critical to your success
                </h2>
                <p className="text-base md:text-lg text-gray-700 mb-6 max-w-xl leading-relaxed">
                  Share your links and products with followers using one URL.
                </p>
              </div>
              
              <div className="mt-auto relative">
                <div className="relative">
                  <Image
                    src="/product-display.webp"
                    alt="Product Gallery Display"
                    width={600}
                    height={500}
                    quality={80}
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 600px"
                    className="rounded-xl shadow-lg relative z-10"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
                  />
                </div>
              </div>
              
              {/* Product Links Section */}
              <div className="mt-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-5">
                  Include links to your products
                </h2>
                <p className="text-base md:text-lg text-gray-700 mb-8 max-w-xl leading-relaxed">
                  Link to the pages where your products are listed, including online stores, marketplaces, and more. Enter your product link in the designated box to allow customers to learn more about your offerings.
                </p>
                <div className="relative mt-8">
                  <Image
                    src="/product-links.webp"
                    alt="Product Links Interface"
                    width={550}
                    height={470}
                    quality={80}
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 550px"
                    className="rounded-xl shadow-lg relative z-10"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
                  />
                </div>
              </div>
            </div>
            
            {/* Second Column: Image First, Then Content */}
            <div className="lg:w-1/2 flex flex-col">
              <div className="mb-10 relative">
                <div className="relative">
                  <Image
                    src="/business-showcase.webp"
                    alt="Business Link Showcase"
                    width={600}
                    height={500}
                    quality={80}
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 600px"
                    className="rounded-xl shadow-lg relative z-10"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
                  />
                </div>
              </div>
              
              <div className="mt-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-5">
                  Captivate buyers with visuals
                </h2>
                <p className="text-base md:text-lg text-gray-700 mb-6 max-w-xl leading-relaxed">
                  Let customers engage with every detail of your product. Capture their attention with up to 5 images per product and short, captivating videos.
                </p>
              </div>
              
              {/* Branded Templates Section */}
              <div className="mt-16">
                <div className="relative mb-10">
                  <Image
                    src="/branded-templates.webp"
                    alt="Branded Templates Example"
                    width={550}
                    height={470}
                    quality={80}
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 550px"
                    className="rounded-xl shadow-lg relative z-10"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
                  />
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-5">
                  Get noticed with branded templates
                </h2>
                <p className="text-base md:text-lg text-gray-700 mb-6 max-w-xl leading-relaxed">
                  Quickly start with ready-to-use templates and further customize the fonts, colors, and background images to match your style. No technical skills required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Integration Section */}
      <section className="relative">
        {/* Top curved separator */}
        <div className="absolute top-0 left-0 w-full overflow-hidden h-20">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full" style={{ transform: 'rotate(180deg)' }}>
            <path fill="#C4E2F7" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
        
        <div className="bg-[#1e2341] py-24 md:py-32 relative">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <span className="text-[#4263EB] bg-blue-100 px-4 py-1 rounded-full text-sm font-semibold mb-6 inline-block">INTEGRATIONS</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Connect with your favorite platforms
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                Seamlessly integrate all your social media accounts and content platforms in one beautiful bio link
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Spotify Card */}
              <div className="bg-gradient-to-br from-[#1ED760]/90 to-[#1ED760] rounded-xl p-8 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group">
                <div className="flex items-center mb-6">
                  <div className="bg-white/20 p-3 rounded-xl mr-4 group-hover:bg-white/30 transition-all duration-300">
                    <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Spotify</h3>
                </div>
                <p className="text-white/90 mb-6 leading-relaxed">
                  Share your favorite music and playlists directly from your profile with a beautiful Spotify integration.
                </p>
                <div className="flex items-center mt-auto group-hover:opacity-75 transition-opacity">
                  <span className="text-sm font-semibold mr-2">Learn more</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              
              {/* Facebook Card */}
              <div className="bg-gradient-to-br from-[#1877F2]/90 to-[#1877F2] rounded-xl p-8 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group">
                <div className="flex items-center mb-6">
                  <div className="bg-white/20 p-3 rounded-xl mr-4 group-hover:bg-white/30 transition-all duration-300">
                    <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Facebook</h3>
                </div>
                <p className="text-white/90 mb-6 leading-relaxed">
                  Connect your Facebook page to showcase updates, events, and content from your business page.
                </p>
                <div className="flex items-center mt-auto group-hover:opacity-75 transition-opacity">
                  <span className="text-sm font-semibold mr-2">Learn more</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              
              {/* Medium Card */}
              <div className="bg-gradient-to-br from-white/90 to-white rounded-xl p-8 text-gray-900 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group">
                <div className="flex items-center mb-6">
                  <div className="bg-gray-100 p-3 rounded-xl mr-4 group-hover:bg-gray-200 transition-all duration-300">
                    <svg className="w-8 h-8" viewBox="0 0 1043.63 592.71" xmlns="http://www.w3.org/2000/svg">
                      <g data-name="Layer 2">
                        <g data-name="Layer 1">
                          <path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36"/>
                          <path d="M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279"/>
                          <path d="M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94"/>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Medium</h3>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Share your articles and publications with your audience and position yourself as a thought leader.
                </p>
                <div className="flex items-center mt-auto group-hover:opacity-75 transition-opacity">
                  <span className="text-sm font-semibold mr-2 text-gray-900">Learn more</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              
              {/* Twitter Card */}
              <div className="bg-gradient-to-br from-[#1DA1F2]/90 to-[#1DA1F2] rounded-xl p-8 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group">
                <div className="flex items-center mb-6">
                  <div className="bg-white/20 p-3 rounded-xl mr-4 group-hover:bg-white/30 transition-all duration-300">
                    <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.027 10.027 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Twitter</h3>
                </div>
                <p className="text-white/90 mb-6 leading-relaxed">
                  Display your latest tweets and engage with your followers through an interactive Twitter feed.
                </p>
                <div className="flex items-center mt-auto group-hover:opacity-75 transition-opacity">
                  <span className="text-sm font-semibold mr-2">Learn more</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              
              {/* Instagram Card */}
              <div className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] rounded-xl p-8 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group">
                <div className="flex items-center mb-6">
                  <div className="bg-white/20 p-3 rounded-xl mr-4 group-hover:bg-white/30 transition-all duration-300">
                    <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Instagram</h3>
                </div>
                <p className="text-white/90 mb-6 leading-relaxed">
                  Showcase your latest Instagram posts and stories to highlight your visual content and style.
                </p>
                <div className="flex items-center mt-auto group-hover:opacity-75 transition-opacity">
                  <span className="text-sm font-semibold mr-2">Learn more</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              
              {/* YouTube Card */}
              <div className="bg-gradient-to-br from-[#FF0000]/90 to-[#FF0000] rounded-xl p-8 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group">
                <div className="flex items-center mb-6">
                  <div className="bg-white/20 p-3 rounded-xl mr-4 group-hover:bg-white/30 transition-all duration-300">
                    <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">YouTube</h3>
                </div>
                <p className="text-white/90 mb-6 leading-relaxed">
                  Embed your YouTube videos and channel to boost engagement and grow your subscriber base.
                </p>
                <div className="flex items-center mt-auto group-hover:opacity-75 transition-opacity">
                  <span className="text-sm font-semibold mr-2">Learn more</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                Join thousands of creators and businesses who are streamlining their online presence
              </p>
              <a 
                href="#" 
                className="bg-gradient-to-r from-[#4263EB] to-[#5D7BF2] text-white px-10 py-4 rounded-lg font-bold hover:from-[#3651c9] hover:to-[#4A69DE] transition-all duration-300 hover:shadow-xl inline-block"
              >
                Start Building Your Bio Link
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Creators Section */}
      <section className="py-24 bg-gradient-to-r from-white via-white to-[#C4E2F7] relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#2766E4] bg-blue-100 px-4 py-1 rounded-full text-sm font-semibold mb-6 inline-block">COMMUNITY</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Loved by <span className="bg-gradient-to-r from-[#2766E4] to-[#6B46C1] text-transparent bg-clip-text">500,000+</span> creators
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Join the community of influencers, brands, and creators who've already transformed their online presence
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {/* Creator Profiles - These will be displayed in a row/grid */}
            <div className="creator-profile group">
              <div className="relative mb-4 w-24 h-24 md:w-32 md:h-32 mx-auto">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2766E4]/30 to-[#6B46C1]/30 animate-pulse-slow opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-1 bg-white rounded-full shadow-md"></div>
                <div className="absolute inset-2 rounded-full overflow-hidden">
                  <Image
                    src="/austin-archer.webp"
                    alt="Austin Archer"
                    className="object-cover w-full h-full"
                    width={128}
                    height={128}
                    priority
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-[#2766E4] rounded-full p-1 border-2 border-white">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
              </div>
              <h3 className="font-bold text-center text-gray-800">Austin Archer</h3>
              <p className="text-sm text-center text-[#2766E4]">bio.link/austinarcher</p>
            </div>
            
            <div className="creator-profile group">
              <div className="relative mb-4 w-24 h-24 md:w-32 md:h-32 mx-auto">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2766E4]/30 to-[#6B46C1]/30 animate-pulse-slow opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-1 bg-white rounded-full shadow-md"></div>
                <div className="absolute inset-2 rounded-full overflow-hidden">
                  <Image
                    src="/ac-milan.jpg"
                    alt="AC Milan"
                    className="object-cover w-full h-full"
                    width={128}
                    height={128}
                    priority
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-[#2766E4] rounded-full p-1 border-2 border-white">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
              </div>
              <h3 className="font-bold text-center text-gray-800">AC Milan</h3>
              <p className="text-sm text-center text-[#2766E4]">bio.link/acmilan</p>
            </div>
            
            <div className="creator-profile group">
              <div className="relative mb-4 w-24 h-24 md:w-32 md:h-32 mx-auto">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2766E4]/30 to-[#6B46C1]/30 animate-pulse-slow opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-1 bg-white rounded-full shadow-md"></div>
                <div className="absolute inset-2 rounded-full overflow-hidden">
                  <Image
                    src="/jo-franco.jpeg"
                    alt="Jo Franco"
                    className="object-cover w-full h-full"
                    width={128}
                    height={128}
                    priority
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-[#2766E4] rounded-full p-1 border-2 border-white">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
              </div>
              <h3 className="font-bold text-center text-gray-800">Jo Franco</h3>
              <p className="text-sm text-center text-[#2766E4]">bio.link/jo_franco</p>
            </div>
            
            <div className="creator-profile group">
              <div className="relative mb-4 w-24 h-24 md:w-32 md:h-32 mx-auto">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2766E4]/30 to-[#6B46C1]/30 animate-pulse-slow opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-1 bg-white rounded-full shadow-md"></div>
                <div className="absolute inset-2 rounded-full overflow-hidden">
          <Image
                    src="/padre-paulo.png"
                    alt="Padre Paulo"
                    className="object-cover w-full h-full"
                    width={128}
                    height={128}
                    priority
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-[#2766E4] rounded-full p-1 border-2 border-white">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
              </div>
              <h3 className="font-bold text-center text-gray-800">Padre Paulo</h3>
              <p className="text-sm text-center text-[#2766E4]">bio.link/padrepauloricardo</p>
            </div>
            
            <div className="creator-profile group">
              <div className="relative mb-4 w-24 h-24 md:w-32 md:h-32 mx-auto">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2766E4]/30 to-[#6B46C1]/30 animate-pulse-slow opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-1 bg-white rounded-full shadow-md"></div>
                <div className="absolute inset-2 rounded-full overflow-hidden">
          <Image
                    src="/bachelorette.png"
                    alt="The Bachelorette"
                    className="object-cover w-full h-full"
                    width={128}
                    height={128}
                    priority
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-[#2766E4] rounded-full p-1 border-2 border-white">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
              </div>
              <h3 className="font-bold text-center text-gray-800">The Bachelorette</h3>
              <p className="text-sm text-center text-[#2766E4]">bio.link/bachelorette</p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <a 
              href="#" 
              className="bg-[#2766E4] text-white px-8 py-4 rounded-full font-bold hover:bg-[#1e55c6] transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 text-lg"
            >
              Join Our Community
            </a>
          </div>
        </div>
        
        {/* Features highlight */}
        <div className="flex flex-wrap justify-center gap-4 mt-24">
          <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm flex items-center border border-gray-100 hover:shadow-md transition-all duration-300 hover:bg-white">
            <div className="mr-3 w-6 h-6 text-[#2766E4] flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                <line x1="9" y1="9" x2="9.01" y2="9"></line>
                <line x1="15" y1="9" x2="15.01" y2="9"></line>
              </svg>
            </div>
            <span className="font-semibold text-gray-800">Happy Creators</span>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm flex items-center border border-gray-100 hover:shadow-md transition-all duration-300 hover:bg-white">
            <div className="mr-3 w-6 h-6 text-[#2766E4] flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
              </svg>
            </div>
            <span className="font-semibold text-gray-800">Easy Setup</span>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm flex items-center border border-gray-100 hover:shadow-md transition-all duration-300 hover:bg-white">
            <div className="mr-3 w-6 h-6 text-[#2766E4] flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <span className="font-semibold text-gray-800">Trusted Platform</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-white via-white to-[#C4E2F7] pt-24 pb-12 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2766E4]/10 via-[#2766E4] to-[#2766E4]/10"></div>
        <div className="absolute top-24 right-10 w-72 h-72 bg-[#C4E2F7]/30 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#C4E2F7]/20 rounded-full blur-3xl opacity-50"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Newsletter section */}
          <div className="bg-white/80 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-xl mb-16 border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#2766E4]/5 to-[#C4E2F7]/20 rounded-full blur-xl transform translate-x-1/4 -translate-y-1/4"></div>
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Stay in the loop</h3>
                  <p className="text-gray-600 max-w-md">Get the latest news, updates and tips delivered directly to your inbox.</p>
                </div>
                <div className="md:w-1/2">
                  <form className="flex flex-col sm:flex-row gap-3">
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2766E4]/50 focus:border-[#2766E4]"
                      required
                    />
                    <button 
                      type="submit" 
                      className="bg-[#2766E4] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#1e55c6] transition-all duration-300 hover:shadow-lg whitespace-nowrap"
                    >
                      Subscribe
                    </button>
                  </form>
                  <p className="text-xs text-gray-500 mt-2">We care about your data. Read our <a href="#" className="text-[#2766E4] hover:underline">Privacy Policy</a>.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-gray-200">
            {/* Logo and Description - 2 columns wide */}
            <div className="lg:col-span-2">
              <div className="flex items-center group">
                <div className="font-bold text-2xl flex items-center transition-all duration-300 group-hover:transform group-hover:scale-105">
                  <span className="h-11 w-11 rounded-full bg-gradient-to-r from-white to-[#C4E2F7] flex items-center justify-center mr-3 shadow-lg group-hover:shadow-xl transition-all duration-300 border border-[#C4E2F7]/50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" 
                            stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" 
                            stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </span>
                  <span className="text-gray-800 font-bold tracking-wide">LinkFolio</span>
                </div>
              </div>
              <p className="mt-5 text-gray-600 leading-relaxed">
                The beautiful way to share your content with just one bio link. Simplify your online presence with our customizable platform.
              </p>
              <div className="mt-8 flex space-x-5">
                <a href="#" className="bg-gray-100 hover:bg-[#2766E4]/10 text-gray-600 hover:text-[#2766E4] p-2.5 rounded-full transition-all duration-300 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="bg-gray-100 hover:bg-[#2766E4]/10 text-gray-600 hover:text-[#2766E4] p-2.5 rounded-full transition-all duration-300 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="bg-gray-100 hover:bg-[#2766E4]/10 text-gray-600 hover:text-[#2766E4] p-2.5 rounded-full transition-all duration-300 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Navigate Column */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-5">Navigate</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-[#2766E4] transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 transition-all duration-300 bg-[#2766E4]"></span>Home</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#2766E4] transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 transition-all duration-300 bg-[#2766E4]"></span>How It Works</a></li>
              </ul>
            </div>
            
            {/* Get Started Column */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-5">Get Started</h3>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={openSignUpModal}
                    className="text-gray-600 hover:text-[#2766E4] transition-colors flex items-center gap-2 group text-left"
                  >
                    <span className="w-0 group-hover:w-2 transition-all duration-300 bg-[#2766E4]"></span>
                    Sign Up For Free
                  </button>
                </li>
                <li>
                  <button 
                    onClick={openSignInModal}
                    className="text-gray-600 hover:text-[#2766E4] transition-colors flex items-center gap-2 group text-left"
                  >
                    <span className="w-0 group-hover:w-2 transition-all duration-300 bg-[#2766E4]"></span>
                    Sign In
                  </button>
                </li>
              </ul>
            </div>
            
            {/* Legal Column */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-5">Legal</h3>
              <ul className="space-y-3">
                <li><a href="/terms" className="text-gray-600 hover:text-[#2766E4] transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 transition-all duration-300 bg-[#2766E4]"></span>Terms & Conditions</a></li>
                <li><a href="/privacy" className="text-gray-600 hover:text-[#2766E4] transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 transition-all duration-300 bg-[#2766E4]"></span>Privacy Policy</a></li>
                <li><a href="/youtube-policy" className="text-gray-600 hover:text-[#2766E4] transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 transition-all duration-300 bg-[#2766E4]"></span>YouTube Policy</a></li>
              </ul>
            </div>
          </div>
          
          {/* Copyright and additional info */}
          <div className="mt-10 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} LinkFolio. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
              <span className="flex items-center text-xs text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5 text-[#2766E4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Secure payments
              </span>
              <span className="flex items-center text-xs text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5 text-[#2766E4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Lightning fast setup
              </span>
              <span className="flex items-center text-xs text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5 text-[#2766E4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
                Cloud-based platform
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
