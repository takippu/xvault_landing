export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primaryBtn rounded-full filter blur-3xl opacity-5 animate-pulse-slow"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-hover rounded-full filter blur-3xl opacity-5 animate-pulse-slow"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block bg-primaryBtn bg-opacity-10 px-4 py-2 rounded-full mb-4">
            <span className="font-medium text-sm">🚀 Simple Process</span>
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How xVault Works</h2>
          <p className="text-lg text-secondaryText max-w-2xl mx-auto">
            Get started with xVault in just a few simple steps
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="relative w-20 h-20 bg-primaryBtn bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl font-bold text-primaryBtn">1</span>
              <div className="absolute top-1/2 left-full w-full h-0.5 bg-border hidden md:block"></div>
            </div>
            <h3 className="text-xl font-bold mb-3">Install the Extension</h3>
            <p className="text-secondaryText">
              Add xVault to Chrome with just one click from the Chrome Web Store.
            </p>
          </div>
          
          <div className="text-center">
            <div className="relative w-20 h-20 bg-primaryBtn bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl font-bold text-primaryBtn">2</span>
              <div className="absolute top-1/2 left-full w-full h-0.5 bg-border hidden md:block"></div>
            </div>
            <h3 className="text-xl font-bold mb-3">Create Your Snippets</h3>
            <p className="text-secondaryText">
              Add your frequently used text snippets and organize them into folders.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-primaryBtn bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl font-bold text-primaryBtn">3</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Use Anywhere</h3>
            <p className="text-secondaryText">
              Access and paste your snippets with just one click wherever you need them.
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://chrome.google.com/webstore/category/extensions" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary px-8 py-3 rounded-full font-semibold inline-flex items-center justify-center transform transition-all duration-300 hover:scale-105"
          >
            <i className="fab fa-chrome mr-2"></i> Install Now - It's Free
          </a>
        </div>
      </div>
    </section>
  );
}