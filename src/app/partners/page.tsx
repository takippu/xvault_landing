import PageTemplate from '../../components/PageTemplate';

export default function Partners() {
  return (
    <PageTemplate title="Partners">
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Partner With xVault</h2>
        <p className="mb-4">
          At xVault, we believe in the power of collaboration. We're always looking for strategic partnerships that can help us deliver more value to our users while expanding our reach.
        </p>
        <p className="mb-4">
          Whether you're a technology company, a content creator, or a productivity expert, we'd love to explore how we can work together.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Partnership Opportunities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-secondaryBase p-6 rounded-xl border border-border">
            <h3 className="text-xl font-bold mb-3">Technology Integration</h3>
            <p className="mb-4">
              Integrate xVault with your platform or service to provide enhanced productivity tools for your users. We offer a flexible API and developer resources to make integration seamless.
            </p>
            <a href="/contact" className="text-primaryBtn hover:text-hover font-medium">Discuss Integration →</a>
          </div>
          
          <div className="bg-secondaryBase p-6 rounded-xl border border-border">
            <h3 className="text-xl font-bold mb-3">Affiliate Program</h3>
            <p className="mb-4">
              Join our affiliate program and earn commission for every new user you refer to xVault. We offer competitive rates and provide all the marketing materials you need to succeed.
            </p>
            <a href="/contact" className="text-primaryBtn hover:text-hover font-medium">Join Affiliate Program →</a>
          </div>
          
          <div className="bg-secondaryBase p-6 rounded-xl border border-border">
            <h3 className="text-xl font-bold mb-3">Co-Marketing</h3>
            <p className="mb-4">
              Partner with us on co-marketing initiatives such as webinars, blog posts, or joint promotions. We're always looking for opportunities to collaborate with brands that share our values.
            </p>
            <a href="/contact" className="text-primaryBtn hover:text-hover font-medium">Explore Co-Marketing →</a>
          </div>
          
          <div className="bg-secondaryBase p-6 rounded-xl border border-border">
            <h3 className="text-xl font-bold mb-3">Enterprise Solutions</h3>
            <p className="mb-4">
              Become a reseller or implementation partner for xVault's enterprise solutions. Help businesses improve productivity while earning revenue through our partner program.
            </p>
            <a href="/contact" className="text-primaryBtn hover:text-hover font-medium">Become a Reseller →</a>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Current Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="p-6 rounded-xl border border-border flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 bg-secondaryText rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">Logo</div>
              <p className="font-bold">Partner 1</p>
            </div>
          </div>
          <div className="p-6 rounded-xl border border-border flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 bg-secondaryText rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">Logo</div>
              <p className="font-bold">Partner 2</p>
            </div>
          </div>
          <div className="p-6 rounded-xl border border-border flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 bg-secondaryText rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">Logo</div>
              <p className="font-bold">Partner 3</p>
            </div>
          </div>
          <div className="p-6 rounded-xl border border-border flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 bg-secondaryText rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">Logo</div>
              <p className="font-bold">Partner 4</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Become a Partner</h2>
        <p className="mb-4">
          Interested in partnering with xVault? We'd love to hear from you! Please fill out our partner inquiry form, and our partnerships team will get back to you within 2 business days.
        </p>
        <a 
          href="/contact" 
          className="btn-primary px-8 py-3 rounded-full font-semibold inline-flex items-center justify-center transform transition-all duration-300 hover:scale-105 mt-4"
        >
          Contact Our Partnerships Team
        </a>
      </section>
    </PageTemplate>
  );
}