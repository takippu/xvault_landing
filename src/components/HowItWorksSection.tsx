import BrowserAwareDownloadButton from './BrowserAwareDownloadButton';

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primaryBtn rounded-full filter blur-3xl opacity-5 animate-pulse-slow"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-hover rounded-full filter blur-3xl opacity-5 animate-pulse-slow"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block bg-primaryBtn bg-opacity-10 px-4 py-2 rounded-full mb-4">
            <span className="text-primaryBtn text-white font-medium text-sm">🚀 Get Started Easily</span>
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How xVault Works</h2>
          <p className="text-lg text-secondaryText max-w-2xl mx-auto">
            Simple 3-step process to secure your digital life
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/3 mb-8 md:mb-0 md:px-4">
            <div className="bg-secondaryBase p-8 rounded-xl border border-border hover:shadow-lg transition-all duration-300 h-full">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primaryBtn rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 animate-pulse-slow">1</div>
                <h3 className="text-xl font-bold">Install</h3>
              </div>
              <p className="text-secondaryText mb-6">Add xVault to your browser with one click from your browser's extension store.</p>
              <div className="rounded-lg w-full overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <img src="https://via.placeholder.com/500x300" alt="Install Extension" className="w-full object-cover h-auto transform hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </div>
          <div className="md:w-1/3 mb-8 md:mb-0 md:px-4">
            <div className="bg-secondaryBase p-8 rounded-xl border border-border hover:shadow-lg transition-all duration-300 h-full">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-hover rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 animate-pulse-slow">2</div>
                <h3 className="text-xl font-bold">Add Snippets</h3>
              </div>
              <p className="text-secondaryText mb-6">Create and organize your text snippets in customizable folders for quick access.</p>
              <div className="rounded-lg w-full overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <img src="https://via.placeholder.com/500x300" alt="Add Snippets" className="w-full object-cover h-auto transform hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </div>
          <div className="md:w-1/3 md:px-4">
            <div className="bg-secondaryBase p-8 rounded-xl border border-border hover:shadow-lg transition-all duration-300 h-full">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-secondaryText rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 animate-pulse-slow">3</div>
                <h3 className="text-xl font-bold">Copy in 1 Click</h3>
              </div>
              <p className="text-secondaryText mb-6">Access and copy your snippets instantly whenever you need them with just one click.</p>
              <div className="rounded-lg w-full overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <img src="https://via.placeholder.com/500x300" alt="Copy in 1 Click" className="w-full object-cover h-auto transform hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <BrowserAwareDownloadButton variant="primary" size="md" className="inline-flex">
            Start Managing Your Snippets
          </BrowserAwareDownloadButton>
        </div>
      </div>
    </section>
  );
}