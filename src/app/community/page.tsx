import PageTemplate from '../../components/PageTemplate';

export default function Community() {
  return (
    <PageTemplate title="Community">
      <section className="mb-8">
        <p className="mb-6">
          Join the xVault community! Connect with other users, share your snippets and templates, get help, and contribute to making xVault even better.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Join Our Community</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a href="#" className="bg-secondaryBase p-6 rounded-xl border border-border hover:shadow-md transition-shadow">
            <div className="text-3xl mb-4"><i className="fab fa-discord"></i></div>
            <h3 className="text-xl font-bold mb-3">Discord</h3>
            <p className="mb-4">
              Join our Discord server to chat with other xVault users, get help, and share your ideas.
            </p>
            <span className="text-primaryBtn hover:text-hover font-medium">Join Discord →</span>
          </a>
          
          <a href="#" className="bg-secondaryBase p-6 rounded-xl border border-border hover:shadow-md transition-shadow">
            <div className="text-3xl mb-4"><i className="fab fa-github"></i></div>
            <h3 className="text-xl font-bold mb-3">GitHub</h3>
            <p className="mb-4">
              Check out our open-source projects, report issues, and contribute to the development of xVault.
            </p>
            <span className="text-primaryBtn hover:text-hover font-medium">Visit GitHub →</span>
          </a>
          
          <a href="#" className="bg-secondaryBase p-6 rounded-xl border border-border hover:shadow-md transition-shadow">
            <div className="text-3xl mb-4"><i className="fab fa-reddit"></i></div>
            <h3 className="text-xl font-bold mb-3">Reddit</h3>
            <p className="mb-4">
              Join our subreddit to discuss xVault, share your use cases, and connect with the community.
            </p>
            <span className="text-primaryBtn hover:text-hover font-medium">Join Subreddit →</span>
          </a>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Community Showcase</h2>
        <p className="mb-6">
          Check out how other users are using xVault to boost their productivity. Here are some community-shared templates and use cases:
        </p>
        
        <div className="space-y-6">
          <div className="bg-secondaryBase p-6 rounded-xl border border-border">
            <h3 className="text-xl font-bold mb-3">Email Templates Collection</h3>
            <p className="mb-4">
              A collection of 20+ professional email templates for various situations, from customer support to sales outreach.
            </p>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-secondaryText rounded-full mr-3 flex items-center justify-center text-white font-bold">U</div>
              <span>Shared by UserName123</span>
            </div>
          </div>
          
          <div className="bg-secondaryBase p-6 rounded-xl border border-border">
            <h3 className="text-xl font-bold mb-3">Developer's Code Snippet Pack</h3>
            <p className="mb-4">
              A comprehensive collection of code snippets for JavaScript, Python, and HTML/CSS that can save developers hours of typing.
            </p>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-secondaryText rounded-full mr-3 flex items-center justify-center text-white font-bold">D</div>
              <span>Shared by DevGuru42</span>
            </div>
          </div>
          
          <div className="bg-secondaryBase p-6 rounded-xl border border-border">
            <h3 className="text-xl font-bold mb-3">Customer Service Response Templates</h3>
            <p className="mb-4">
              A set of professional, empathetic customer service responses for common scenarios, helping support teams maintain consistency.
            </p>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-secondaryText rounded-full mr-3 flex items-center justify-center text-white font-bold">S</div>
              <span>Shared by SupportPro</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Community Guidelines</h2>
        <div className="bg-secondaryBase p-6 rounded-xl border border-border">
          <p className="mb-4">
            To ensure our community remains helpful, respectful, and inclusive, we ask all members to follow these guidelines:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Be respectful and kind to other community members</li>
            <li>Do not share sensitive or personal information in public channels</li>
            <li>Avoid sharing snippets that contain private API keys or credentials</li>
            <li>Give credit when sharing templates created by others</li>
            <li>Keep discussions relevant to xVault and productivity</li>
            <li>Help others when you can and be patient with newcomers</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Contribute to xVault</h2>
        <p className="mb-6">
          We believe in the power of community-driven development. Here's how you can contribute to making xVault better:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-secondaryBase p-6 rounded-xl border border-border">
            <h3 className="text-xl font-bold mb-3">Feature Requests</h3>
            <p className="mb-4">
              Have an idea for a new feature? Submit it on our GitHub repository or vote on existing feature requests.
            </p>
            <a href="#" className="text-primaryBtn hover:text-hover font-medium">Submit Feature Request →</a>
          </div>
          
          <div className="bg-secondaryBase p-6 rounded-xl border border-border">
            <h3 className="text-xl font-bold mb-3">Bug Reports</h3>
            <p className="mb-4">
              Found a bug? Help us improve by reporting it with detailed steps to reproduce the issue.
            </p>
            <a href="#" className="text-primaryBtn hover:text-hover font-medium">Report a Bug →</a>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}