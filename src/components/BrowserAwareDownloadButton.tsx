'use client';

import { useState, useEffect } from 'react';
import { 
  detectBrowser, 
  getDownloadUrl, 
  getDownloadButtonText, 
  getDownloadButtonIcon,
  DEFAULT_EXTENSION_URLS,
  type BrowserInfo,
  type ExtensionUrls 
} from '../utils/browserDetection';

interface BrowserAwareDownloadButtonProps {
  className?: string;
  children?: React.ReactNode;
  showIcon?: boolean;
  customUrls?: ExtensionUrls;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  fullText?: boolean; // Whether to show full text like "Add to Chrome - It's Free"
}

function BrowserAwareDownloadButton({
  className = '',
  children,
  showIcon = true,
  customUrls,
  variant = 'primary',
  size = 'md',
  fullText = false
}: BrowserAwareDownloadButtonProps) {
  const [browserInfo, setBrowserInfo] = useState<BrowserInfo | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Only run browser detection on the client side
    setIsClient(true);
    setBrowserInfo(detectBrowser());
  }, []);

  // Show loading state or fallback during SSR
  if (!isClient || !browserInfo) {
    return (
      <a
        href={DEFAULT_EXTENSION_URLS.chrome}
        target="_blank"
        rel="noopener noreferrer"
        className={`${getButtonClasses(variant, size)} ${className}`}
      >
        {showIcon && <i className="fab fa-chrome mr-2"></i>}
        {children || (fullText ? 'Add to Chrome - It\'s Free' : 'Add to Chrome')}
      </a>
    );
  }

  const urls = customUrls || DEFAULT_EXTENSION_URLS;
  const downloadUrl = getDownloadUrl(urls);
  const buttonText = getDownloadButtonText(browserInfo);
  const iconClass = getDownloadButtonIcon(browserInfo);

  // Generate appropriate button text
  const getButtonText = () => {
    if (children) return children;

    if (fullText && browserInfo.isChromeBased) {
      return `${buttonText} - It's Free`;
    }

    return buttonText;
  };

  // Handle unsupported browsers with a helpful message
  if (!browserInfo.isSupported) {
    return (
      <div className={`${getButtonClasses(variant, size)} ${className} cursor-not-allowed opacity-75`}>
        {showIcon && <i className="fas fa-exclamation-triangle mr-2"></i>}
        <span className="mr-2">{children || 'Browser Not Supported'}</span>
        <div className="group relative">
          <i className="fas fa-info-circle text-sm"></i>
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
            Please use Chrome, Firefox, Edge, Opera, or Brave
          </div>
        </div>
      </div>
    );
  }

  return (
    <a
      href={downloadUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${getButtonClasses(variant, size)} ${className}`}
      title={`Download xVault for ${browserInfo.name}`}
    >
      {showIcon && <i className={`${iconClass} mr-2`}></i>}
      {getButtonText()}
    </a>
  );
}

/**
 * Helper function to get button classes based on variant and size
 */
function getButtonClasses(variant: 'primary' | 'secondary', size: 'sm' | 'md' | 'lg'): string {
  const baseClasses = 'rounded-full font-semibold flex items-center justify-center transform transition-all duration-300 hover:scale-105';
  
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary'
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2',
    lg: 'px-8 py-3 text-lg'
  };
  
  return `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`;
}

// Export a simpler version for common use cases
export function DownloadButton({ className = '', fullText = false }: { className?: string; fullText?: boolean }) {
  return (
    <BrowserAwareDownloadButton
      className={className}
      variant="primary"
      size="lg"
      fullText={fullText}
    />
  );
}

// Export a header version for navigation
export function HeaderDownloadButton({ className = '' }: { className?: string }) {
  return (
    <BrowserAwareDownloadButton
      className={className}
      variant="primary"
      size="md"
    />
  );
}

// Export a secondary version for less prominent placements
export function SecondaryDownloadButton({ className = '', children }: { className?: string; children?: React.ReactNode }) {
  return (
    <BrowserAwareDownloadButton
      className={className}
      variant="secondary"
      size="md"
    >
      {children}
    </BrowserAwareDownloadButton>
  );
}

// Export the main component
export { BrowserAwareDownloadButton };
export default BrowserAwareDownloadButton;
