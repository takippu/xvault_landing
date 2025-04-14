import PageTemplate from '../../components/PageTemplate';

export default function TermsOfService() {
  return (
    <PageTemplate title="Terms of Service">
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
        <p className="mb-4">
          By accessing or using xVault ("the Service"), you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the Service.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">2. Description of Service</h2>
        <p className="mb-4">
          xVault is a text snippet manager Chrome extension that allows users to store, organize, and access frequently used text snippets. The Service provides end-to-end encryption for secure storage of your data.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">3. User Accounts</h2>
        <p className="mb-4">
          When you create an account with us, you must provide accurate, complete, and current information. You are responsible for safeguarding the password and for all activities that occur under your account.
        </p>
        <p className="mb-4">
          You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">4. Intellectual Property</h2>
        <p className="mb-4">
          The Service and its original content, features, and functionality are and will remain the exclusive property of xVault and its licensors. The Service is protected by copyright, trademark, and other laws.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">5. User Content</h2>
        <p className="mb-4">
          Our Service allows you to store and access text snippets. You retain all rights to your content, but you grant us a license to use, modify, and display the content as necessary to provide the Service.
        </p>
        <p className="mb-4">
          You are responsible for the content you store using our Service and must ensure it does not violate any laws or infringe on any third-party rights.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">6. Termination</h2>
        <p className="mb-4">
          We may terminate or suspend your account immediately, without prior notice or liability, for any reason, including without limitation if you breach the Terms.
        </p>
        <p className="mb-4">
          Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service or contact us to request account deletion.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
        <p className="mb-4">
          In no event shall xVault, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">8. Changes to Terms</h2>
        <p className="mb-4">
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect.
        </p>
        <p className="mb-4">
          By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">9. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about these Terms, please contact us at support@xvault.app.
        </p>
      </section>

      <p className="text-sm text-secondaryText mt-12">
        Last updated: January 1, 2023
      </p>
    </PageTemplate>
  );
}