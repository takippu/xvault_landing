import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-12 bg-base border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-primaryBtn to-hover bg-clip-text">xVault</span>
            </div>
            <p className="text-secondaryText max-w-xs">
              The most secure and convenient password manager for Chrome.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-secondaryText hover:text-hoverText text-xl"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-secondaryText hover:text-hoverText text-xl"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-secondaryText hover:text-hoverText text-xl"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-secondaryText hover:text-hoverText text-xl"><i className="fab fa-linkedin"></i></a>
              <a href="https://github.com/takippu/xvault" target="_blank" rel="noopener noreferrer" className="text-secondaryText hover:text-hoverText text-xl"><i className="fab fa-github"></i></a>
            </div>
          </div>
          
          {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold text-lg mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-secondaryText hover:text-hoverText">Features</a></li>
                <li><a href="#" className="text-secondaryText hover:text-hoverText">Extensions</a></li>
                <li><a href="#" className="text-secondaryText hover:text-hoverText">Roadmap</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-secondaryText hover:text-hoverText">About</a></li>
                <li><a href="#" className="text-secondaryText hover:text-hoverText">Blog</a></li>
                <li><a href="#" className="text-secondaryText hover:text-hoverText">Careers</a></li>
                <li><a href="#" className="text-secondaryText hover:text-hoverText">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-secondaryText hover:text-hoverText">Help Center</a></li>
                <li><a href="#" className="text-secondaryText hover:text-hoverText">Community</a></li>
                <li><a href="#" className="text-secondaryText hover:text-hoverText">Security</a></li>
                <li><a href="#" className="text-secondaryText hover:text-hoverText">Status</a></li>
              </ul>
            </div>
          </div> */}
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondaryText mb-4 md:mb-0">© 2023 xVault. All rights reserved.</p>
          {/* <div className="flex space-x-6">
            <a href="#" className="text-secondaryText hover:text-hoverText">Privacy Policy</a>
            <a href="#" className="text-secondaryText hover:text-hoverText">Terms of Service</a>
            <a href="#" className="text-secondaryText hover:text-hoverText">Cookies</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}