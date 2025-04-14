import PageTemplate from '../../components/PageTemplate';

export default function Blog() {
  return (
    <PageTemplate title="Blog">
      <section className="mb-8">
        <p className="mb-6">
          Welcome to the xVault blog. Here we share productivity tips, feature updates, and insights into secure text management.
        </p>
      </section>

      <section className="mb-12">
        <div className="space-y-12">
          <article className="border-b border-border pb-12">
            <div className="mb-4 text-secondaryText">January 15, 2023</div>
            <h2 className="text-2xl font-bold mb-4">Introducing xVault 2.0: New Features and Improvements</h2>
            <p className="mb-6">
              We're excited to announce the release of xVault 2.0, which includes several new features and improvements based on your feedback. In this update, we've added template variables, folder organization, and improved the sync performance.
            </p>
            <div className="mb-6">
              <img 
                src="https://via.placeholder.com/800x400" 
                alt="xVault 2.0 Screenshot" 
                className="rounded-lg w-full object-cover h-auto"
              />
            </div>
            <p className="mb-6">
              The new template variables feature allows you to insert dynamic content into your snippets, such as the current date, time, or clipboard contents. This makes xVault even more powerful for creating dynamic templates.
            </p>
            <a href="#" className="text-primaryBtn hover:text-hover font-medium">Read More →</a>
          </article>
          
          <article className="border-b border-border pb-12">
            <div className="mb-4 text-secondaryText">December 10, 2022</div>
            <h2 className="text-2xl font-bold mb-4">5 Ways to Boost Your Productivity with Text Snippets</h2>
            <p className="mb-6">
              Text snippets are a powerful tool for saving time and reducing repetitive typing. In this post, we'll explore five ways you can use xVault to boost your productivity and streamline your workflow.
            </p>
            <div className="mb-6">
              <img 
                src="https://via.placeholder.com/800x400" 
                alt="Productivity Tips" 
                className="rounded-lg w-full object-cover h-auto"
              />
            </div>
            <p className="mb-6">
              From email templates to code snippets, learn how to leverage xVault to save hours of typing every week and ensure consistency in your communications.
            </p>
            <a href="#" className="text-primaryBtn hover:text-hover font-medium">Read More →</a>
          </article>
          
          <article className="border-b border-border pb-12">
            <div className="mb-4 text-secondaryText">November 5, 2022</div>
            <h2 className="text-2xl font-bold mb-4">The Importance of End-to-End Encryption for Your Data</h2>
            <p className="mb-6">
              At xVault, security is our top priority. In this post, we explain what end-to-end encryption is, how it works in xVault, and why it's essential for protecting your sensitive information.
            </p>
            <div className="mb-6">
              <img 
                src="https://via.placeholder.com/800x400" 
                alt="Encryption Concept" 
                className="rounded-lg w-full object-cover h-auto"
              />
            </div>
            <p className="mb-6">
              Learn about the technical measures we've implemented to ensure that only you can access your snippets, even if our servers were compromised.
            </p>
            <a href="#" className="text-primaryBtn hover:text-hover font-medium">Read More →</a>
          </article>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Subscribe to Our Newsletter</h2>
        <p className="mb-6">
          Stay updated with the latest features, tips, and insights from the xVault team. We send a monthly newsletter with valuable content (no spam, we promise!).
        </p>
        <form className="flex flex-col md:flex-row gap-4">
          <input 
            type="email" 
            placeholder="Your email address" 
            className="flex-grow p-3 rounded-lg border border-border bg-secondaryBase focus:outline-none focus:ring-2 focus:ring-primaryBtn"
            required
          />
          <button 
            type="submit" 
            className="btn-primary px-6 py-3 rounded-full font-semibold inline-flex items-center justify-center transform transition-all duration-300 hover:scale-105"
          >
            Subscribe
          </button>
        </form>
      </section>
    </PageTemplate>
  );
}