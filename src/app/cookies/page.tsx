import PageTemplate from '../../components/PageTemplate';

export default function CookiesPolicy() {
  return (
    <PageTemplate title="Cookies Policy">
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">What Are Cookies</h2>
        <p className="mb-4">
          Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners.
        </p>
        <p className="mb-4">
          At xVault, we use cookies and similar technologies to enhance your experience, analyze usage patterns, and optimize our service.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">How We Use Cookies</h2>
        <p className="mb-4">
          We use different types of cookies for various purposes:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">
            <strong>Essential Cookies:</strong> These cookies are necessary for the website and extension to function properly. They enable basic functions like page navigation and access to secure areas. The website cannot function properly without these cookies.
          </li>
          <li className="mb-2">
            <strong>Preference Cookies:</strong> These cookies enable the website to remember information that changes the way the website behaves or looks, like your preferred language or the region you are in.
          </li>
          <li className="mb-2">
            <strong>Analytics Cookies:</strong> These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website and services.
          </li>
          <li className="mb-2">
            <strong>Functional Cookies:</strong> These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Third-Party Cookies</h2>
        <p className="mb-4">
          In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the service and deliver advertisements on and through the service.
        </p>
        <p className="mb-4">
          These third parties may use cookies, pixel tags, and other technologies to collect information about your use of our website and other websites, including your IP address, web browser, pages viewed, time spent on pages, links clicked, and conversion information.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Your Cookie Choices</h2>
        <p className="mb-4">
          Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience, as it will no longer be personalized to you.
        </p>
        <p className="mb-4">
          To modify your cookie settings, please refer to the instructions provided by your browser. The following links provide information on how to modify your cookie settings on the most popular browsers:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primaryBtn hover:text-hover underline">Google Chrome</a></li>
          <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-primaryBtn hover:text-hover underline">Mozilla Firefox</a></li>
          <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primaryBtn hover:text-hover underline">Microsoft Edge</a></li>
          <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primaryBtn hover:text-hover underline">Safari</a></li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Cookie Policy Updates</h2>
        <p className="mb-4">
          We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our business practices. Any changes will become effective when we post the revised policy on this page. We encourage you to periodically review this page for the latest information on our cookie practices.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p className="mb-4">
          If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
        </p>
        <p className="mb-4">
          Email: privacy@xvault.app
        </p>
      </section>

      <p className="text-sm text-secondaryText mt-12">
        Last updated: January 1, 2023
      </p>
    </PageTemplate>
  );
}