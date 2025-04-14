import PageTemplate from '../../components/PageTemplate';

export default function About() {
  return (
    <PageTemplate title="About xVault">
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="mb-4">
          At xVault, our mission is to simplify digital productivity while maintaining the highest standards of security and privacy. We believe that everyone should have access to tools that make their online work more efficient without compromising their data.
        </p>
        <p className="mb-4">
          We created xVault as the ultimate text snippet manager for Chrome to help users securely store and access their frequently used text with just one click, saving time and reducing repetitive typing.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Our Story</h2>
        <p className="mb-4">
          xVault was founded in 2022 by a team of developers who were frustrated with the lack of secure and user-friendly text snippet management tools. After spending countless hours retyping the same information across various platforms, we decided to build a solution that would solve this problem once and for all.
        </p>
        <p className="mb-4">
          What started as a simple tool for personal use quickly evolved into a comprehensive solution that thousands of professionals now rely on daily. Our team's background in cybersecurity ensured that privacy and data protection were built into xVault's foundation from day one.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-secondaryBase p-6 rounded-xl border border-border">
            <h3 className="text-xl font-bold mb-3">Security First</h3>
            <p>
              We implement end-to-end encryption and follow industry best practices to ensure your data remains private and secure. Your snippets belong to you and only you.
            </p>
          </div>
          <div className="bg-secondaryBase p-6 rounded-xl border border-border">
            <h3 className="text-xl font-bold mb-3">User-Centered Design</h3>
            <p>
              We believe that powerful tools should also be intuitive and easy to use. Every feature in xVault is designed with the user experience in mind.
            </p>
          </div>
          <div className="bg-secondaryBase p-6 rounded-xl border border-border">
            <h3 className="text-xl font-bold mb-3">Continuous Improvement</h3>
            <p>
              We're constantly working to make xVault better based on user feedback and emerging technologies. Our product evolves with your needs.
            </p>
          </div>
          <div className="bg-secondaryBase p-6 rounded-xl border border-border">
            <h3 className="text-xl font-bold mb-3">Transparency</h3>
            <p>
              We're open about how our product works, how we handle your data, and our business practices. We believe in building trust through honesty.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Our Team</h2>
        <p className="mb-4">
          xVault is built by a small but dedicated team of professionals passionate about productivity, security, and creating exceptional user experiences. Our diverse backgrounds in software development, cybersecurity, and design allow us to approach problems from multiple perspectives.
        </p>
        <p className="mb-4">
          We're headquartered in San Francisco, California, but our team works remotely from around the world, bringing global insights to our product development.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Join Our Journey</h2>
        <p className="mb-4">
          We're always looking for talented individuals who share our passion for creating secure, user-friendly tools. If you're interested in joining our team, check out our <a href="/careers" className="text-primaryBtn hover:text-hover underline">Careers page</a> for current openings.
        </p>
        <p className="mb-4">
          Have questions or feedback? We'd love to hear from you! Reach out to us at <a href="mailto:hello@xvault.app" className="text-primaryBtn hover:text-hover underline">hello@xvault.app</a>.
        </p>
      </section>
    </PageTemplate>
  );
}