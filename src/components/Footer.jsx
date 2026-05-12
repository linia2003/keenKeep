const Footer = () => {
  const socialLinks = [
    { name: 'Instagram', icon: '/icons/instagram.png', url: '#' },
    { name: 'Facebook', icon: '/icons/facebook.png', url: '#' },
    { name: 'Twitter', icon: '/icons/twitter.png', url: '#' }
  ];

  return (
    <footer className="bg-[#244D3F] text-white pt-16 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        {}
        <div className="mb-2">
          <img src="/icons/logo-xl.png" alt="KeenKeeper" className="h-12 object-contain" />
        </div>
        
        <p className="text-slate-100 text-xs max-w-sm text-center mb-2">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <div className="flex flex-col items-center gap-4 mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
            Social Links
          </span>
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a 
                key={link.name}
                href={link.url} 
                className="w-10 h-10 rounded-full border border-slate-500 flex items-center justify-center hover:bg-white transition-all overflow-hidden p-2"
              >
                <img src={link.icon} alt={link.name} className="w-full h-full object-contain" />
              </a>
            ))}
          </div>
        </div>

        <div className="w-full pt-8 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-400 uppercase tracking-wider text-center md:text-left">
          <p>© 2026 KeenKeeper.All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;