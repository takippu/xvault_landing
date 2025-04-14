import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <div className="inline-block bg-primaryBtn bg-opacity-10 px-4 py-2 rounded-full mb-4">
            <span className="font-medium text-sm">📋 Secure Snippet Manager</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Organize Your <span className="neon-text">Text Snippets</span> with xVault
          </h1>
          <p className="text-lg md:text-xl text-secondaryText mb-8 max-w-xl">
            The ultimate text snippet manager for Chrome that securely stores your frequently used text in customizable folders with end-to-end encryption.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="https://chrome.google.com/webstore/category/extensions" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary px-8 py-3 rounded-full font-semibold text-lg flex items-center justify-center transform transition-all duration-300 hover:scale-105"
            >
              <i className="fab fa-chrome mr-2"></i> Add to Chrome - It's Free
            </a>
            <Link 
              href="#features" 
              className="btn-secondary px-8 py-3 rounded-full font-semibold text-lg flex items-center justify-center transform transition-all duration-300 hover:scale-105"
            >
              <i className="fas fa-info-circle mr-2"></i> Learn More
            </Link>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-2">
                <Image src="/icon/32x32.png" className="w-10 h-10 rounded-full border-2 border-base" alt="User" width={40} height={40} />
                {/* <Image src="https://randomuser.me/api/portraits/men/43.jpg" className="w-10 h-10 rounded-full border-2 border-base" alt="User" width={40} height={40} />
                <Image src="https://randomuser.me/api/portraits/women/34.jpg" className="w-10 h-10 rounded-full border-2 border-base" alt="User" width={40} height={40} /> */}
              </div>
              <div>
                <p className="text-sm">Trusted by <span className="font-bold">1</span> user (myself)</p>
                <div className="flex items-center">
                  <i className="fas fa-star text-yellow-400"></i>
                  <i className="fas fa-star text-yellow-400"></i>
                  <i className="fas fa-star text-yellow-400"></i>
                  <i className="fas fa-star text-yellow-400"></i>
                  <i className="fas fa-star text-yellow-400"></i>
                  <span className="ml-2 text-sm">4.9/5</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2 bg-secondaryBase px-4 py-2 rounded-lg border border-border">
              <i className="fas fa-shield-alt text-primaryBtn"></i>
              <span className="text-sm font-medium">End-to-End Encryption</span>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-primaryBtn rounded-full filter blur-3xl opacity-10 animate-pulse-slow"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-hover rounded-full filter blur-3xl opacity-10 animate-pulse-slow"></div>
          <div className="relative w-full max-w-md mx-auto transform hover:scale-105 transition-transform duration-700 ease-in-out">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-primaryBtn rounded-full filter blur-3xl opacity-20"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-hover rounded-full filter blur-3xl opacity-20"></div>
            <div className="relative bg-secondaryBase rounded-2xl shadow-xl border border-border overflow-hidden">
              {/* App Header */}
              <div className="flex items-center justify-between p-4 border-b border-border">
                <span className="font-semibold">xVault</span>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-moon text-secondaryText hover:text-primaryBtn cursor-pointer"></i>
                  <i className="fas fa-circle-info text-secondaryText hover:text-primaryBtn cursor-pointer"></i>
                  <i className="fas fa-gear text-secondaryText hover:text-primaryBtn cursor-pointer"></i>
                  <i className="fas fa-lock text-secondaryText hover:text-primaryBtn cursor-pointer"></i>
                </div>
              </div>
              
              {/* App Content */}
              <div className="flex h-[400px]">
                {/* Sidebar */}
                <div className="w-1/3 border-r border-border p-4 relative feature-card">
                  <h3 className="font-medium mb-2 flex items-center justify-between">
                    Folders
                    <i className="fas fa-chevron-left text-xs text-secondaryText"></i>
                  </h3>
                  
                  {/* Folder Item */}
                  <div className="  rounded-md p-2 mb-2 flex items-center justify-between">
                    <span>APIs</span>
                    <span className="text-xs">(1)</span>
                  </div>
                  
                  {/* Folder list content would go here */}
                  
                  {/* Add Folder Button - positioned at bottom */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <button className="w-full text-sm btn-primary p-2 rounded-md flex items-center justify-center">
                      <i className="fas fa-plus mr-2"></i> Add Folder
                    </button>
                  </div>
                </div>
                
                {/* Main Content */}
                <div className="w-2/3 p-4 relative">
                  {/* Search Bar */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="relative flex-1 mr-2">
                      <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-secondaryText"></i>
                      <input type="text" placeholder="Search snippets..." className="w-full pl-9 pr-3 py-2 bg-base border border-border rounded-md text-sm" />
                    </div>
                    <div className="flex items-center bg-green-500 text-white px-3 py-2 rounded-md">
                      <span className="mr-1">Mode:</span>
                      <i className="fas fa-clipboard"></i>
                    </div>
                  </div>
                  
                  <h3 className="font-medium mb-3">Snippets</h3>
                  
                  {/* Snippet Item */}
                  <div className="bg-base border border-border rounded-md p-3 mb-3 flex items-center justify-between">
                    <span>Gemini AI (Tier 1)</span>
                    <i className="fas fa-clipboard text-green-500"></i>
                  </div>
                  
                  {/* Snippet list content would go here */}
                  
                  {/* Add Snippet Button - positioned at bottom */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <button className="w-full text-sm btn-secondary p-2 rounded-md flex items-center justify-center">
                      <i className="fas fa-plus mr-2"></i> Add Snippet
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}