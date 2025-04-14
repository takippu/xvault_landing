export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-secondaryBase">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block bg-primaryBtn bg-opacity-10 px-4 py-2 rounded-full mb-4">
            <span className=" font-medium text-sm">✨ Why Choose xVault</span>
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-lg text-secondaryText max-w-2xl mx-auto">
            xVault comes packed with everything you need to manage your text snippets efficiently
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="feature-card p-6 rounded-xl group">
            <div className="w-14 h-14 bg-primaryBtn bg-opacity-10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <i className="fas fa-folder-tree text-2xl text-primaryBtn"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Folder Organization</h3>
            <p className="text-secondaryText">Organize your snippets into customizable folders for easy access and management.</p>
          </div>
          
          <div className="feature-card p-6 rounded-xl group">
            <div className="w-14 h-14 bg-secondaryText bg-opacity-10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <i className="fas fa-search text-2xl text-secondaryText"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Quick Search</h3>
            <p className="text-secondaryText">Find your snippets instantly with our powerful search functionality.</p>
          </div>
          
          <div className="feature-card p-6 rounded-xl group">
            <div className="w-14 h-14 bg-primaryBtn bg-opacity-10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <i className="fas fa-lock text-2xl text-primaryBtn"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">End-to-End Encryption</h3>
            <p className="text-secondaryText">Your snippets are encrypted and only accessible to you, ensuring maximum security.</p>
          </div>
          
          <div className="feature-card p-6 rounded-xl group">
            <div className="w-14 h-14 bg-secondaryText bg-opacity-10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <i className="fas fa-bolt text-2xl text-secondaryText"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">One-Click Copy</h3>
            <p className="text-secondaryText">Copy any snippet to your clipboard with just one click for maximum efficiency.</p>
          </div>

          <div className="feature-card p-6 rounded-xl group">
            <div className="w-14 h-14 bg-primaryBtn bg-opacity-10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <i className="fas fa-shield text-2xl text-primaryBtn"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Secured Import and Export</h3>
            <p className="text-secondaryText">Import and export your snippets securely using encryption with a password set by yourselves. </p>
          </div>

          {/* <div className="feature-card p-6 rounded-xl group">
            <div className="w-14 h-14 bg-primaryBtn bg-opacity-10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <i className="fas fa-cloud-upload-alt text-2xl text-primaryBtn"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Cloud Sync</h3>
            <p className="text-secondaryText">Access your snippets across all your devices with secure cloud synchronization.</p>
          </div> */}
          
          <div className="feature-card p-6 rounded-xl group">
            <div className="w-14 h-14 bg-secondaryText bg-opacity-10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <i className="fas fa-user-shield text-2xl text-secondaryText"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Privacy First</h3>
            <p className="text-secondaryText">Your data stays on your device - we don't collect or store your passwords on our servers.</p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a href="https://chrome.google.com/webstore/category/extensions" target="_blank" rel="noopener noreferrer" className="btn-primary px-8 py-3 rounded-full font-semibold inline-flex items-center justify-center transform transition-all duration-300 hover:scale-105">
            <i className="fab fa-chrome mr-2"></i> Get xVault Now
          </a>
        </div>
      </div>
    </section>
  );
}