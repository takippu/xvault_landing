import PageTemplate from '../../components/PageTemplate';

export default function PrivacyPolicy() {
  return (
    <PageTemplate title="Privacy Policy">
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Introduction</h2>
        <p className="mb-4">
          At xVault, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Chrome extension and related services.
        </p>
        <p className="mb-4">
          Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the application.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Collection of Your Information</h2>
        <p className="mb-4">
          We may collect information about you in a variety of ways. The information we may collect via the Service includes:
        </p>
        <h3 className="text-xl font-bold mb-2">Personal Data</h3>
        <p className="mb-4">
          When you register for an account, we collect your email address and authentication information. We do not have access to your password as we implement secure authentication methods.
        </p>
        <h3 className="text-xl font-bold mb-2">Snippet Data</h3>
        <p className="mb-4">
          The text snippets you store in xVault are encrypted end-to-end. This means that only you can access the content of your snippets. We cannot access, read, or share your snippet content.
        </p>
        <h3 className="text-xl font-bold mb-2">Usage Data</h3>
        <p className="mb-4">
          We may collect anonymous usage statistics to help us improve the Service, such as feature usage patterns and error reports. This data is aggregated and does not identify individual users.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Use of Your Information</h2>
        <p className="mb-4">
          Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Service to:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Create and manage your account</li>
          <li>Provide technical support and respond to your inquiries</li>
          <li>Deliver the services you request</li>
          <li>Improve the functionality and user experience of our Service</li>
          <li>Monitor and analyze usage and trends to improve your experience with the Service</li>
          <li>Notify you of updates to the Service</li>
          <li>Prevent fraudulent transactions and monitor against theft</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Disclosure of Your Information</h2>
        <p className="mb-4">
          We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
        </p>
        <h3 className="text-xl font-bold mb-2">By Law or to Protect Rights</h3>
        <p className="mb-4">
          If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
        </p>
        <h3 className="text-xl font-bold mb-2">Third-Party Service Providers</h3>
        <p className="mb-4">
          We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Security of Your Information</h2>
        <p className="mb-4">
          We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
        </p>
        <p className="mb-4">
          Your snippet data is encrypted end-to-end, meaning it is encrypted before it leaves your device and can only be decrypted with your encryption key, which is derived from your password and never leaves your device.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Policy for Children</h2>
        <p className="mb-4">
          We do not knowingly solicit information from or market to children under the age of 13. If you become aware of any data we have collected from children under age 13, please contact us using the contact information provided below.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h2>
        <p className="mb-4">
          We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last Updated" date at the bottom of this page. You are advised to review this privacy policy periodically for any changes.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p className="mb-4">
          If you have questions or comments about this Privacy Policy, please contact us at:
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