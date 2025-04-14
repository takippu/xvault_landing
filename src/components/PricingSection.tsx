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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="feature-card p-8 rounded-xl border-2 border-border relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primaryBtn rounded-full filter blur-3xl opacity-5"></div>
            <h3 className="text-xl font-bold mb-2">Free</h3>
            <div className="flex items-end mb-6">
              <span className="text-4xl font-bold">$0</span>
              <span className="text-secondaryText ml-2 mb-1">/forever</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="mr-2">🔒</span>
                <span>Basic vault storage</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">📝</span>
                <span>Up to 19 snippets</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">📁</span>
                <span>Basic folder structure (5 folders)</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">🌓</span>
                <span>Light/Dark theme toggle</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">🔍</span>
                <span>Snippets search functionality</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">🛡️</span>
                <span>Powerful Encryption</span>
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
          
          <div className="pricing-premium p-8 text-white rounded-xl border-2 border-primaryBtn relative overflow-hidden bg-gradient-to-br from-pricing-premium/10 to-pricing-premium/5 z-10 shadow-[0_0_30px_rgba(var(--primary-btn-rgb),0.15)]">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primaryBtn rounded-full filter blur-3xl opacity-30"></div>
            <div className="absolute top-0 right-0 bg-primaryBtn  text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
              RECOMMENDED
            </div>
            <h3 className="text-xl font-bold mb-2">Premium</h3>
            <div className="flex items-end mb-6">
              <span className="text-4xl font-bold">$3.33</span>
              <span className="text-secondaryText ml-2 mb-1">one-time</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="mr-2">✨</span>
                <span>All Free features included</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">♾️</span>
                <span>Unlimited snippets</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">📂</span>
                <span>Advanced folder organization <br/> (unlimited folders)</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">↔️</span>
                <span>Import/Export functionality</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">📧</span>
                <span>Priority support</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">🚀</span>
                <span>Early access to new features</span>
              </li>
            </ul>
            <a 
              href="https://chrome.google.com/webstore/category/extensions" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary w-full py-3 rounded-lg font-semibold text-center block"
            >
              Get Premium
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}