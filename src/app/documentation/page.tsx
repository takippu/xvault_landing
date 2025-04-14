import PageTemplate from '../../components/PageTemplate';

export default function Documentation() {
  return (
    <PageTemplate title="Documentation">
      <section className="mb-8">
        <p className="mb-6">
          Welcome to the xVault documentation. Here you'll find comprehensive guides and documentation to help you start working with xVault as quickly as possible.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Getting Started</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold mb-3">1. Installation</h3>
            <p className="mb-4">
              Install xVault from the Chrome Web Store by clicking the "Add to Chrome" button on our homepage or by visiting the Chrome Web Store directly.
            </p>
            <div className="bg-secondaryBase p-4 rounded-lg border border-border">
              <code>https://chrome.google.com/webstore/detail/xvault/[extension-id]</code>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-3">2. Create an Account</h3>
            <p className="mb-4">
              After installation, click on the xVault icon in your browser toolbar and follow the prompts to create an account. You'll need to provide an email address and create a strong password.
            </p>
            <div className="bg-secondaryBase p-4 rounded-lg border border-border">
              <p className="text-secondaryText">Important: Your password is used to encrypt your data. We cannot recover your snippets if you forget your password.</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-3">3. Add Your First Snippet</h3>
            <p className="mb-4">
              To add a new snippet:
            </p>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li>Click the xVault icon in your browser toolbar</li>
              <li>Click the "+" button</li>
              <li>Enter a title for your snippet</li>
              <li>Enter the snippet content</li>
              <li>Click "Save"</li>
            </ol>
            <p>
              Your snippet is now securely stored and ready to use!
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Using xVault</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold mb-3">Accessing Snippets</h3>
            <p className="mb-4">
              To access your snippets, click the xVault icon in your browser toolbar. Your snippets will be displayed in a dropdown menu. Click on any snippet to copy it to your clipboard.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-3">Organizing Snippets</h3>
            <p className="mb-4">
              xVault allows you to organize your snippets into folders for easy access:
            </p>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li>Click the "Folders" tab in the xVault popup</li>
              <li>Click "Create New Folder"</li>
              <li>Enter a name for your folder</li>
              <li>Drag and drop snippets into the folder</li>
            </ol>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-3">Using Keyboard Shortcuts</h3>
            <p className="mb-4">
              xVault supports keyboard shortcuts for faster access to your snippets:
            </p>
            <div className="bg-secondaryBase p-4 rounded-lg border border-border space-y-2">
              <p><code>Ctrl+Shift+X</code> (Windows/Linux) or <code>Cmd+Shift+X</code> (Mac): Open xVault popup</p>
              <p><code>Ctrl+Shift+1-9</code> (Windows/Linux) or <code>Cmd+Shift+1-9</code> (Mac): Quick access to your first 9 snippets</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Advanced Features</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold mb-3">Template Variables</h3>
            <p className="mb-4">
              xVault supports dynamic template variables that are replaced when you paste a snippet:
            </p>
            <div className="bg-secondaryBase p-4 rounded-lg border border-border space-y-2">
              <p><code>{'{{date}}'}</code>: Current date (format: YYYY-MM-DD)</p>
              <p><code>{'{{time}}'}</code>: Current time (format: HH:MM)</p>
              <p><code>{'{{clipboard}}'}</code>: Contents of your clipboard</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-3">Sync Across Devices</h3>
            <p className="mb-4">
              Your snippets are automatically synced across all devices where you're signed in to xVault with the same account. Changes made on one device will be reflected on all others.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-3">Import/Export</h3>
            <p className="mb-4">
              To import or export your snippets:
            </p>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li>Click the settings icon in the xVault popup</li>
              <li>Select "Import/Export"</li>
              <li>Choose "Export" to download your snippets as a JSON file, or "Import" to upload a previously exported file</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Troubleshooting</h2>
        
        <div className="space-y-6">
          <div className="bg-secondaryBase p-6 rounded-xl border border-border">
            <h3 className="text-xl font-bold mb-3">Sync Issues</h3>
            <p className="mb-4">
              If your snippets aren't syncing across devices:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Ensure you're signed in with the same account on all devices</li>
              <li>Check your internet connection</li>
              <li>Try restarting your browser</li>
              <li>If problems persist, contact support</li>
            </ol>
          </div>
          
          <div className="bg-secondaryBase p-6 rounded-xl border border-border">
            <h3 className="text-xl font-bold mb-3">Extension Not Responding</h3>
            <p className="mb-4">
              If the xVault extension becomes unresponsive:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Refresh the current page</li>
              <li>Disable and re-enable the extension</li>
              <li>Clear your browser cache</li>
              <li>Reinstall the extension if necessary</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Need More Help?</h2>
        <p className="mb-4">
          If you can't find the information you need in our documentation, please visit our <a href="/support" className="text-primaryBtn hover:text-hover underline">Support page</a> or contact us directly at <a href="mailto:support@xvault.app" className="text-primaryBtn hover:text-hover underline">support@xvault.app</a>.
        </p>
      </section>
    </PageTemplate>
  );
}