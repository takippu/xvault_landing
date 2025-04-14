import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-secondaryBase py-10 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">xVault</h3>
            <p className="text-secondaryText mb-4">
              The ultimate text snippet manager for Chrome that securely stores your frequently used text.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondaryText hover:text-hoverText transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-secondaryText hover:text-hoverText transition-colors">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-secondaryText hover:text-hoverText transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-secondaryText hover:text-hoverText transition-colors">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
          
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-lg font-bold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><Link href="#features" className="text-secondaryText hover:text-hoverText transition-colors">Features</Link></li>
                <li><Link href="#pricing" className="text-secondaryText hover:text-hoverText transition-colors">Pricing</Link></li>
                <li><Link href="#faq" className="text-secondaryText hover:text-hoverText transition-colors">FAQ</Link></li>
                <li><a href="#" className="text-secondaryText hover:text-hoverText transition-colors">Changelog</a></li>
              </ul>
            </div>
            
            {/* <div>
              <h3 className="text-lg font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/documentation" className="text-secondaryText hover:text-hoverText transition-colors">Documentation</Link></li>
                <li><Link href="/support" className="text-secondaryText hover:text-hoverText transition-colors">Support</Link></li>
                <li><Link href="/blog" className="text-secondaryText hover:text-hoverText transition-colors">Blog</Link></li>
                <li><Link href="/community" className="text-secondaryText hover:text-hoverText transition-colors">Community</Link></li>
              </ul>
            </div> */}
            
            <div>
              <h3 className="text-lg font-bold mb-4">xVault</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-secondaryText hover:text-hoverText transition-colors">About</Link></li>
                {/* <li><Link href="/careers" className="text-secondaryText hover:text-hoverText transition-colors">Careers</Link></li> */}
                {/* <li><Link href="/contact" className="text-secondaryText hover:text-hoverText transition-colors">Contact</Link></li> */}
                {/* <li><Link href="/partners" className="text-secondaryText hover:text-hoverText transition-colors">Partners</Link></li> */}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondaryText mb-4 md:mb-0">© 2023 xVault. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="text-secondaryText hover:text-hoverText">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-secondaryText hover:text-hoverText">Terms of Service</Link>
            {/* <Link href="/cookies" className="text-secondaryText hover:text-hoverText">Cookies</Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
}