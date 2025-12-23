
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="font-rock text-4xl text-yellow-400 mb-8 tracking-tighter">
          XDINARY HEROES
        </div>
        
        <div className="flex gap-8 mb-12">
          {[
            { name: 'Instagram', url: 'https://instagram.com/xdinaryheroes_official' },
            { name: 'X (Twitter)', url: 'https://twitter.com/XH_official' },
            { name: 'Facebook', url: 'https://facebook.com/XdinaryHeroes' }
          ].map((social) => (
            <a 
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition-colors uppercase text-sm font-bold tracking-widest"
            >
              {social.name}
            </a>
          ))}
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 space-y-4 md:space-y-0 border-t border-white/5 pt-10">
          <p>© 2024 JYP ENTERTAINMENT. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <span className="text-yellow-400/50">Official Pop-up Store Authorized Product</span>
            <span>Design by XH TAIPEI TEAM</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
