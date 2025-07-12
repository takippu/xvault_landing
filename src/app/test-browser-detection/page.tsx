'use client';

import { useState, useEffect } from 'react';
import { detectBrowser, getDownloadUrl, getDownloadButtonText, getDownloadButtonIcon, DEFAULT_EXTENSION_URLS } from '../../utils/browserDetection';
import BrowserAwareDownloadButton from '../../components/BrowserAwareDownloadButton';

export default function TestBrowserDetection() {
  const [browserInfo, setBrowserInfo] = useState<any>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const info = detectBrowser();
    setBrowserInfo(info);
  }, []);

  if (!isClient) {
    return <div className="p-8">Loading...</div>;
  }

  const downloadUrl = getDownloadUrl(DEFAULT_EXTENSION_URLS);
  const buttonText = getDownloadButtonText(browserInfo);
  const iconClass = getDownloadButtonIcon(browserInfo);

  return (
    <div className="min-h-screen bg-base text-primaryText p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Browser Detection Test</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-secondaryBase p-6 rounded-lg border border-border">
            <h2 className="text-xl font-bold mb-4">Detected Browser Info</h2>
            <div className="space-y-2">
              <p><strong>Browser Name:</strong> {browserInfo?.name || 'Unknown'}</p>
              <p><strong>Is Firefox:</strong> {browserInfo?.isFirefox ? 'Yes' : 'No'}</p>
              <p><strong>Is Chrome-based:</strong> {browserInfo?.isChromeBased ? 'Yes' : 'No'}</p>
              <p><strong>Is Supported:</strong> {browserInfo?.isSupported ? 'Yes' : 'No'}</p>
              <p><strong>User Agent:</strong> <code className="text-sm bg-base p-1 rounded">{navigator.userAgent}</code></p>
            </div>
          </div>

          <div className="bg-secondaryBase p-6 rounded-lg border border-border">
            <h2 className="text-xl font-bold mb-4">Generated Download Info</h2>
            <div className="space-y-2">
              <p><strong>Download URL:</strong> <a href={downloadUrl} target="_blank" rel="noopener noreferrer" className="text-primaryBtn hover:underline break-all">{downloadUrl}</a></p>
              <p><strong>Button Text:</strong> {buttonText}</p>
              <p><strong>Icon Class:</strong> <code className="text-sm bg-base p-1 rounded">{iconClass}</code></p>
              <p><strong>Icon Preview:</strong> <i className={iconClass}></i></p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-secondaryBase p-6 rounded-lg border border-border">
          <h2 className="text-xl font-bold mb-4">Download Button Test</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Primary Button (Full Text):</h3>
              <BrowserAwareDownloadButton variant="primary" size="lg" fullText={true} />
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Primary Button (Short Text):</h3>
              <BrowserAwareDownloadButton variant="primary" size="md" />
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Secondary Button:</h3>
              <BrowserAwareDownloadButton variant="secondary" size="md">
                Get Extension
              </BrowserAwareDownloadButton>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Small Button (No Icon):</h3>
              <BrowserAwareDownloadButton variant="primary" size="sm" showIcon={false} />
            </div>
          </div>
        </div>

        <div className="mt-8 bg-secondaryBase p-6 rounded-lg border border-border">
          <h2 className="text-xl font-bold mb-4">Test Different User Agents</h2>
          <p className="text-secondaryText mb-4">
            To test different browsers, open your browser's developer tools and use the device emulation feature to change the user agent string.
          </p>
          <div className="space-y-2 text-sm">
            <p><strong>Chrome:</strong> Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36</p>
            <p><strong>Firefox:</strong> Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:91.0) Gecko/20100101 Firefox/91.0</p>
            <p><strong>Edge:</strong> Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.59</p>
            <p><strong>Opera:</strong> Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 OPR/77.0.4054.172</p>
            <p><strong>Brave:</strong> Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36</p>
          </div>
        </div>

        <div className="mt-8">
          <a href="/" className="btn-secondary px-6 py-2 rounded-full">
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
