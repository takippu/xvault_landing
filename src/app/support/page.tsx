import PageTemplate from '../../components/PageTemplate';

export default function Support() {
  return (
    <PageTemplate title="Support">
      <section className="mb-8">
        <p className="mb-6">
          Need help with xVault? You're in the right place. We've compiled resources to help you resolve common issues and get the most out of xVault.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Quick Help</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a href="/documentation" className="bg-secondaryBase p-6 rounded-xl border border-border hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-3">Documentation</h3>
            <p className="mb-4">
              Browse our comprehensive documentation to learn how to use all features of xVault.
            </p>
            <span className="text-primaryBtn hover:text-hover font-medium">View Documentation →</span>
          </a>
          
          <a href="/#faq" className="bg-secondaryBase p-6 rounded-xl border border-border hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-3">FAQ</h3>
            <p className="mb-4">
              Find answers to the most commonly asked questions about xVault.
            </p>
            <span className="text-primaryBtn hover:text-hover font-medium">View FAQ →</span>
          </a>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Common Issues</h2>
        
        <div className="space-y-6">
          <div className="bg-secondaryBase p-6 rounded-xl border border-border">
            <h3 className="text-xl font-bold mb-3">Installation Problems</h3>
            <p className="mb-4">
              If you're having trouble installing xVault:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Make sure you're using a supported browser (Chrome, Edge, or Brave)</li>
              <li>Check that you have permission to install extensions on your device</li>
              <li>Try clearing your browser cache and restarting your browser</li>
              <li>Ensure you have a stable internet connection</li>
            </ul>
          </div>
          
          <div className="bg-secondaryBase p-6 rounded-xl border border-border">
            <h3 className="text-xl font-bold mb-3">Account Access Issues</h3>
            <p className="mb-4">
              If you're having trouble accessing your account:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the "Forgot Password" option if you can't remember your password</li>
              <li>Check that you're using the correct email address</li>
              <li>Ensure your internet connection is stable</li>
              <li>Try signing out and back in again</li>
            </ul>
            <p className="mt-4 text-secondaryText">
              Note: Due to our end-to-end encryption, we cannot recover your snippets if you forget your password. Make sure to keep your password in a safe place.
            </p>
          </div>
          
          <div className="bg-secondaryBase p-6 rounded-xl border border-border">
            <h3 className="text-xl font-bold mb-3">Sync Problems</h3>
            <p className="mb-4">
              If your snippets aren't syncing across devices:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Verify you're signed in with the same account on all devices</li>
              <li>Check your internet connection</li>
              <li>Make sure you have the latest version of xVault installed</li>
              <li>Try restarting the browser on all devices</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Contact Support</h2>
        <p className="mb-6">
          Can't find what you're looking for? Our support team is here to help.
        </p>
        
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">Your Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full p-3 rounded-lg border border-border bg-secondaryBase focus:outline-none focus:ring-2 focus:ring-primaryBtn"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-medium">Your Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full p-3 rounded-lg border border-border bg-secondaryBase focus:outline-none focus:ring-2 focus:ring-primaryBtn"
                placeholder="john@example.com"
                required
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="issue" className="block mb-2 font-medium">Issue Type</label>
            <select 
              id="issue" 
              className="w-full p-3 rounded-lg border border-border bg-secondaryBase focus:outline-none focus:ring-2 focus:ring-primaryBtn"
              required
            >
              <option value="">Select an issue type</option>
              <option value="account">Account Issues</option>
              <option value="sync">Sync Problems</option>
              <option value="feature">Feature Request</option>
              <option value="bug">Bug Report</option>
              <option value="billing">Billing Question</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="message" className="block mb-2 font-medium">Describe Your Issue</label>
            <textarea 
              id="message" 
              rows={6} 
              className="w-full p-3 rounded-lg border border-border bg-secondaryBase focus:outline-none focus:ring-2 focus:ring-primaryBtn"
              placeholder="Please provide as much detail as possible..."
              required
            ></textarea>
          </div>
          
          <div>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" required />
              <span>I agree to the <a href="/privacy-policy" className="text-primaryBtn hover:text-hover underline">Privacy Policy</a></span>
            </label>
          </div>
          
          <button 
            type="submit" 
            className="btn-primary px-8 py-3 rounded-full font-semibold inline-flex items-center justify-center transform transition-all duration-300 hover:scale-105"
          >
            Submit Support Request
          </button>
        </form>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Email Support</h2>
        <p className="mb-4">
          Prefer to email us directly? Reach out to our support team at <a href="mailto:support@xvault.app" className="text-primaryBtn hover:text-hover underline">support@xvault.app</a>
        </p>
        <p>
          Our support hours are Monday through Friday, 9am to 5pm EST. We typically respond to all inquiries within 24 hours during business days.
        </p>
      </section>
    </PageTemplate>
  );
}