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
                <Image src="https://randomuser.me/api/portraits/women/12.jpg" className="w-10 h-10 rounded-full border-2 border-base" alt="User" width={40} height={40} />
                <Image src="https://randomuser.me/api/portraits/men/43.jpg" className="w-10 h-10 rounded-full border-2 border-base" alt="User" width={40} height={40} />
                <Image src="https://randomuser.me/api/portraits/women/34.jpg" className="w-10 h-10 rounded-full border-2 border-base" alt="User" width={40} height={40} />
              </div>
              <div>
                <p className="text-sm">Trusted by <span className="font-bold">10,000+</span> users</p>
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
            <div className="relative bg-secondaryBase p-6 rounded-2xl shadow-xl border border-border">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <span className="font-semibold">xVault</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="fas fa-ellipsis-h text-secondaryText"></i>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-secondaryText">Saved Logins</span>
                  <i className="fas fa-search text-secondaryText"></i>
                </div>
                <div className="bg-base p-3 rounded-lg border border-border mb-2 flex items-center hover:shadow-md transition-shadow duration-300">
                  <i className="fas fa-code text-red-500 mr-3"></i>
                  <div className="flex-1">
                    <p className="font-medium">React Component</p>
                    <p className="text-xs text-secondaryText">const Button = (&#123;children&#125;) => ...</p>
                  </div>
                  <i className="fas fa-copy text-secondaryText hover:text-primaryBtn cursor-pointer transition-colors"></i>
                </div>
                <div className="bg-base p-3 rounded-lg border border-border mb-2 flex items-center hover:shadow-md transition-shadow duration-300">
                  <i className="fas fa-envelope text-gray-800 dark:text-white mr-3"></i>
                  <div className="flex-1">
                    <p className="font-medium">Email Template</p>
                    <p className="text-xs text-secondaryText">Dear [Name], Thank you for...</p>
                  </div>
                  <i className="fas fa-copy text-secondaryText hover:text-primaryBtn cursor-pointer transition-colors"></i>
                </div>
                <div className="bg-base p-3 rounded-lg border border-border mb-2 flex items-center hover:shadow-md transition-shadow duration-300">
                  <i className="fas fa-terminal text-blue-600 mr-3"></i>
                  <div className="flex-1">
                    <p className="font-medium">Terminal Command</p>
                    <p className="text-xs text-secondaryText">git checkout -b feature/...</p>
                  </div>
                  <i className="fas fa-copy text-secondaryText hover:text-primaryBtn cursor-pointer transition-colors"></i>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <button className="btn-primary px-4 py-2 rounded-lg text-sm flex items-center hover:scale-105 transition-transform duration-300">
                  <i className="fas fa-plus mr-2"></i> Add New
                </button>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-cog text-secondaryText hover:text-primaryBtn cursor-pointer transition-colors"></i>
                  <i className="fas fa-user-circle text-secondaryText hover:text-primaryBtn cursor-pointer transition-colors"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}