const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dlp-darker border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Dead Lead Phoenix</h3>
            <p className="text-gray-400">
              AI-powered reactivation campaigns on autopilot. Turn dead leads into fresh revenue.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.querySelector('#simple-transparent-pricing')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-dlp-cyan transition-colors"
                >
                  Pricing
                </button>
              </li>
              <li>
                <a 
                  href="mailto:toni@deadleadphoenix.com" 
                  className="text-gray-400 hover:text-dlp-cyan transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4 text-white">Connect With Us</h4>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/dead-lead-phoenix" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-dlp-cyan transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a 
                href="https://www.tonisian.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-dlp-cyan transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="2" y1="20" x2="22" y2="20"/>
                  <line x1="7" y1="23" x2="17" y2="23"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500">
            &copy; {currentYear} Dead Lead Phoenix. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;