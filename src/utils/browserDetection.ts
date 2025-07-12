export interface BrowserInfo {
  name: string;
  isFirefox: boolean;
  isChromeBased: boolean;
  isSupported: boolean;
}

export interface ExtensionUrls {
  chrome: string;
  firefox: string;
}

/**
 * Detects the user's browser type and returns relevant information
 * Supports Firefox, Chrome, Edge, Opera, Brave, and other Chrome-based browsers
 */
export function detectBrowser(): BrowserInfo {
  const userAgent = navigator.userAgent.toLowerCase();
  
  // Firefox detection
  if (userAgent.includes('firefox')) {
    return {
      name: 'Firefox',
      isFirefox: true,
      isChromeBased: false,
      isSupported: true
    };
  }
  
  // Chrome-based browsers detection
  // Check for specific browsers first, then fall back to generic Chrome
  if (userAgent.includes('edg/') || userAgent.includes('edge/')) {
    return {
      name: 'Microsoft Edge',
      isFirefox: false,
      isChromeBased: true,
      isSupported: true
    };
  }
  
  if (userAgent.includes('opr/') || userAgent.includes('opera/')) {
    return {
      name: 'Opera',
      isFirefox: false,
      isChromeBased: true,
      isSupported: true
    };
  }
  
  if (userAgent.includes('brave/') || (userAgent.includes('chrome/') && userAgent.includes('brave'))) {
    return {
      name: 'Brave',
      isFirefox: false,
      isChromeBased: true,
      isSupported: true
    };
  }
  
  if (userAgent.includes('chrome/') && !userAgent.includes('edg/')) {
    return {
      name: 'Google Chrome',
      isFirefox: false,
      isChromeBased: true,
      isSupported: true
    };
  }
  
  // Fallback for other Chromium-based browsers
  if (userAgent.includes('chromium/') || userAgent.includes('webkit/')) {
    return {
      name: 'Chromium-based Browser',
      isFirefox: false,
      isChromeBased: true,
      isSupported: true
    };
  }
  
  // Unsupported browsers
  return {
    name: 'Unknown Browser',
    isFirefox: false,
    isChromeBased: false,
    isSupported: false
  };
}

/**
 * Gets the appropriate download URL based on the detected browser
 */
export function getDownloadUrl(urls: ExtensionUrls): string {
  const browser = detectBrowser();
  
  if (browser.isFirefox) {
    return urls.firefox;
  }
  
  if (browser.isChromeBased) {
    return urls.chrome;
  }
  
  // Fallback to Chrome Web Store for unsupported browsers
  return urls.chrome;
}

/**
 * Gets the appropriate button text based on the detected browser
 */
export function getDownloadButtonText(browser?: BrowserInfo): string {
  const browserInfo = browser || detectBrowser();
  
  if (browserInfo.isFirefox) {
    return 'Add to Firefox';
  }
  
  if (browserInfo.isChromeBased) {
    switch (browserInfo.name) {
      case 'Microsoft Edge':
        return 'Add to Edge';
      case 'Opera':
        return 'Add to Opera';
      case 'Brave':
        return 'Add to Brave';
      case 'Google Chrome':
        return 'Add to Chrome';
      default:
        return 'Install Extension';
    }
  }
  
  return 'Download Extension';
}

/**
 * Gets the appropriate icon class based on the detected browser
 */
export function getDownloadButtonIcon(browser?: BrowserInfo): string {
  const browserInfo = browser || detectBrowser();
  
  if (browserInfo.isFirefox) {
    return 'fab fa-firefox-browser';
  }
  
  if (browserInfo.isChromeBased) {
    switch (browserInfo.name) {
      case 'Microsoft Edge':
        return 'fab fa-edge';
      case 'Opera':
        return 'fab fa-opera';
      case 'Brave':
        return 'fab fa-brave'; // Note: This might not be available in all FontAwesome versions
      case 'Google Chrome':
        return 'fab fa-chrome';
      default:
        return 'fas fa-download';
    }
  }
  
  return 'fas fa-download';
}

/**
 * Default extension URLs
 */
export const DEFAULT_EXTENSION_URLS: ExtensionUrls = {
  chrome: 'https://chromewebstore.google.com/detail/xvault/lnlkddgipmbhfhigcdnialkpindadhgo?authuser=3&hl=en-GB',
  firefox: 'https://addons.mozilla.org/en-US/firefox/addon/xvault/'
};
