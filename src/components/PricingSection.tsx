export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-secondaryBase">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block bg-primaryBtn bg-opacity-10 px-4 py-2 rounded-full mb-4">
            <span className="font-medium text-sm">💰 Simple Pricing</span>
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Plan</h2>
          <p className="text-lg text-secondaryText max-w-2xl mx-auto">
            Start with our free plan or upgrade for more features
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="feature-card p-8 rounded-xl border-2 border-border relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primaryBtn rounded-full filter blur-3xl opacity-5"></div>
            <h3 className="text-xl font-bold mb-2">Free</h3>
            <div className="flex items-end mb-6">
              <span className="text-4xl font-bold">$0</span>
              <span className="text-secondaryText ml-2 mb-1">/forever</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <i className="fas fa-check text-green-500 mr-2"></i>
                <span>Up to 50 snippets</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-green-500 mr-2"></i>
                <span>Basic folder organization</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-green-500 mr-2"></i>
                <span>Local storage only</span>
              </li>
              <li className="flex items-center text-secondaryText">
                <i className="fas fa-times text-red-500 mr-2"></i>
                <span>Cloud sync</span>
              </li>
              <li className="flex items-center text-secondaryText">
                <i className="fas fa-times text-red-500 mr-2"></i>
                <span>Advanced search</span>
              </li>
            </ul>
            <a 
              href="https://chrome.google.com/webstore/category/extensions" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-secondary w-full py-3 rounded-lg font-semibold text-center block"
            >
              Get Started
            </a>
          </div>
          
          <div className="feature-card p-8 rounded-xl border-2 border-primaryBtn relative overflow-hidden transform scale-105 z-10 shadow-xl">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primaryBtn rounded-full filter blur-3xl opacity-10"></div>
            <div className="absolute top-0 right-0 bg-primaryBtn text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              POPULAR
            </div>
            <h3 className="text-xl font-bold mb-2">Pro</h3>
            <div className="flex items-end mb-6">
              <span className="text-4xl font-bold">$4.99</span>
              <span className="text-secondaryText ml-2 mb-1">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <i className="fas fa-check text-green-500 mr-2"></i>
                <span>Unlimited snippets</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-green-500 mr-2"></i>
                <span>Advanced folder organization</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-green-500 mr-2"></i>
                <span>Cloud sync across devices</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-green-500 mr-2"></i>
                <span>Advanced search</span>
              </li>
              <li className="flex items-center text-secondaryText">
                <i className="fas fa-times text-red-500 mr-2"></i>
                <span>Team sharing</span>
              </li>
            </ul>
            <a 
              href="https://chrome.google.com/webstore/category/extensions" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary w-full py-3 rounded-lg font-semibold text-center block"
            >
              Get Pro
            </a>
          </div>
          
          <div className="feature-card p-8 rounded-xl border-2 border-border relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primaryBtn rounded-full filter blur-3xl opacity-5"></div>
            <h3 className="text-xl font-bold mb-2">Team</h3>
            <div className="flex items-end mb-6">
              <span className="text-4xl font-bold">$9.99</span>
              <span className="text-secondaryText ml-2 mb-1">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <i className="fas fa-check text-green-500 mr-2"></i>
                <span>Unlimited snippets</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-green-500 mr-2"></i>
                <span>Advanced folder organization</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-green-500 mr-2"></i>
                <span>Cloud sync across devices</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-green-500 mr-2"></i>
                <span>Advanced search</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-green-500 mr-2"></i>
                <span>Team sharing & collaboration</span>
              </li>
            </ul>
            <a 
              href="https://chrome.google.com/webstore/category/extensions" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-secondary w-full py-3 rounded-lg font-semibold text-center block"
            >
              Get Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}