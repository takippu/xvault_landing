import PageTemplate from '../../components/PageTemplate';

export default function Contact() {
  return (
    <PageTemplate title="Contact Us">
      <section className="mb-8">
        <p className="mb-6">
          We'd love to hear from you! Whether you have a question about our features or anything else, our team is ready to answer all your questions.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-secondaryBase p-6 rounded-xl border border-border">
            <h3 className="text-xl font-bold mb-3">Email Us</h3>
            <p className="mb-4">For general inquiries:</p>
            <a href="mailto:hello@xvault.app" className="text-primaryBtn hover:text-hover underline">hello@xvault.app</a>
            
            <p className="mt-4 mb-4">For support:</p>
            <a href="mailto:support@xvault.app" className="text-primaryBtn hover:text-hover underline">support@xvault.app</a>
          </div>
          
          <div className="bg-secondaryBase p-6 rounded-xl border border-border">
            <h3 className="text-xl font-bold mb-3">Follow Us</h3>
            <p className="mb-4">Stay updated with our latest news and updates:</p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondaryText hover:text-hoverText transition-colors text-2xl">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-secondaryText hover:text-hoverText transition-colors text-2xl">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-secondaryText hover:text-hoverText transition-colors text-2xl">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-secondaryText hover:text-hoverText transition-colors text-2xl">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Contact Form</h2>
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
            <label htmlFor="subject" className="block mb-2 font-medium">Subject</label>
            <input 
              type="text" 
              id="subject" 
              className="w-full p-3 rounded-lg border border-border bg-secondaryBase focus:outline-none focus:ring-2 focus:ring-primaryBtn"
              placeholder="How can we help you?"
              required
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block mb-2 font-medium">Message</label>
            <textarea 
              id="message" 
              rows={6} 
              className="w-full p-3 rounded-lg border border-border bg-secondaryBase focus:outline-none focus:ring-2 focus:ring-primaryBtn"
              placeholder="Your message here..."
              required
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className="btn-primary px-8 py-3 rounded-full font-semibold inline-flex items-center justify-center transform transition-all duration-300 hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-6">FAQ</h2>
        <p className="mb-4">
          Have a quick question? Check our <a href="/#faq" className="text-primaryBtn hover:text-hover underline">FAQ section</a> for answers to commonly asked questions.
        </p>
      </section>
    </PageTemplate>
  );
}