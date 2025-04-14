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
          {/* Currently, we do not collect any personal data. This section will be updated when account features are implemented. */}
          We prioritize your privacy and currently operate without collecting any personal data.
        </p>
        <h3 className="text-xl font-bold mb-2">Snippet Data</h3>
        <p className="mb-4">
          Your text snippets are stored exclusively on your local device and never transmitted to any cloud or internet services. The data remains completely under your control, with end-to-end encryption ensuring that only you can access your snippets.
        </p>
        <h3 className="text-xl font-bold mb-2">Usage Data</h3>
        <p className="mb-4">
          We may collect anonymous usage statistics to help us improve the Service, such as feature usage patterns and error reports. This data is aggregated and does not identify individual users.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Use of Your Information</h2>
        <p className="mb-4">
          As we currently operate without collecting personal data, our use of information is limited to:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Providing the core snippet management functionality</li>
          <li>Ensuring the security and proper operation of the extension</li>
          <li>Improving the functionality and user experience of our Service</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Disclosure of Your Information</h2>
        <p className="mb-4">
          As we operate with a local-first approach and do not collect personal data, we do not share or disclose your information with any third parties. Your snippets remain securely stored on your device with end-to-end encryption.
        </p>
        <h3 className="text-xl font-bold mb-2">Legal Requirements</h3>
        <p className="mb-4">
          In the extremely rare case where we are required by law to disclose any information, we will notify you unless prohibited by law. However, as we do not collect personal data or have access to your snippets, such situations are highly unlikely.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Security of Your Information</h2>
        <p className="mb-4">
          Your privacy and security are our top priorities. Since all your snippet data is stored locally on your device and never transmitted online, you maintain complete control over your data at all times.
        </p>
        <p className="mb-4">
          Your snippet data is protected by end-to-end encryption on your local device, ensuring that only you can access your stored information. No one else, including our team, has access to your snippets.
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
          If you have questions or comments about this Privacy Policy, please contact us through LinkedIn:
        </p>
        <p className="mb-4">
          <a href="https://www.linkedin.com/in/thaqifrosdi" className="text-blue-600 hover:text-blue-800">https://www.linkedin.com/in/thaqifrosdi</a>
        </p>
      </section>

      <p className="text-sm text-secondaryText mt-12">
        Last updated: April 14, 2025
      </p>
    </PageTemplate>
  );
}