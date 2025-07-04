export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-secondaryBase">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block bg-primaryBtn bg-opacity-10 px-4 py-2 rounded-full mb-4">
            <span className="text-primaryBtn text-white font-medium text-sm">✨ Why Choose xVault</span>
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-lg text-secondaryText max-w-2xl mx-auto">
            xVault comes packed with everything you need to manage your text snippets efficiently
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="feature-card p-8 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-14 h-14 bg-primaryBtn bg-opacity-10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <i className="fas fa-folder text-2xl text-primaryBtn"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Folder Organization</h3>
            <p className="text-secondaryText">Keep your text snippets neatly organized in customizable folders for quick and easy access.</p>
          </div>
          
          <div className="feature-card p-8 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-14 h-14 bg-hover bg-opacity-10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <i className="fas fa-clipboard text-2xl text-hover"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Text Snippets</h3>
            <p className="text-secondaryText">Store and quickly access frequently used text snippets with one-click copying functionality.</p>
          </div>
          
          <div className="feature-card p-8 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-14 h-14 bg-secondaryText bg-opacity-10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <i className="fas fa-lock text-2xl text-secondaryText"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Secure Encryption</h3>
            <p className="text-secondaryText">Your sensitive data is protected with strong encryption and a master password only you know.</p>
          </div>
          
          <div className="feature-card p-8 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-14 h-14 bg-primaryBtn bg-opacity-10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <i className="fas fa-moon text-2xl text-primaryBtn"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Dark Mode</h3>
            <p className="text-secondaryText">Switch between light and dark themes to reduce eye strain and match your browsing preferences.</p>
          </div>
          
          <div className="feature-card p-8 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-14 h-14 bg-hover bg-opacity-10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <i className="fas fa-file-export text-2xl text-hover"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Import/Export</h3>
            <p className="text-secondaryText">Easily backup your data or migrate from other password managers with our import/export tools.</p>
          </div>
          
          <div className="feature-card p-8 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-14 h-14 bg-secondaryText bg-opacity-10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <i className="fas fa-user-shield text-2xl text-secondaryText"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Privacy First</h3>
            <p className="text-secondaryText">Your data stays on your device - we don't collect or store your passwords on our servers.</p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a href="https://chromewebstore.google.com/detail/xvault/lnlkddgipmbhfhigcdnialkpindadhgo?authuser=3&hl=en-GB" target="_blank" rel="noopener noreferrer" className="btn-primary px-8 py-3 rounded-full font-semibold inline-flex items-center justify-center transform transition-all duration-300 hover:scale-105">
            <i className="fab fa-chrome mr-2"></i> Get xVault Now
          </a>
        </div>
      </div>
    </section>
  );
}