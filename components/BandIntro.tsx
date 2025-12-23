
import React from 'react';

const BandIntro: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 relative">
            <div className="aspect-video bg-zinc-800 rounded-3xl overflow-hidden border-4 border-white/5 sticker-shadow">
                <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/fGv7X67B-qQ?si=Rj3k0o5-A9VlHn5_" 
                    title="Xdinary Heroes MV" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                    className="opacity-90 hover:opacity-100 transition-opacity"
                ></iframe>
            </div>
            {/* Artistic Sticker */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full flex items-center justify-center transform rotate-12 font-rock text-black text-center text-sm p-4 sticker-shadow hidden md:flex">
                WE ARE ALL HEROES
            </div>
        </div>

        <div className="order-1 lg:order-2 space-y-8">
          <h2 className="text-4xl md:text-6xl font-rock">
            ABOUT <br/>
            <span className="text-yellow-400">Xdinary Heroes</span>
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed font-light">
            Xdinary Heroes 是由 JYP 旗下音樂廠牌 Studio J 於 2021 年推出的六人男子樂團。
            團名為「Extraordinary Heroes」的縮寫，意味著「每個人都可以成為英雄」。
          </p>

          <div className="grid grid-cols-2 gap-4">
            {['Gun-il (Leader/Drums)', 'Jungsu (Keyboard/Vocals)', 'Gaon (Guitar/Vocals)', 'O.de (Synthesizer/Vocals)', 'Jun Han (Guitar)', 'Jooyeon (Bass/Vocals)'].map((member) => (
              <div key={member} className="px-4 py-2 border border-white/10 hover:border-yellow-400/50 transition-colors text-sm text-gray-400">
                {member}
              </div>
            ))}
          </div>

          <div className="pt-4">
            <p className="text-gray-500 italic border-l-2 border-zinc-700 pl-4">
                音樂風格融合了搖滾、電子與龐克，以極具爆發力的现场演出和獨特的世界觀深受全球粉絲喜愛。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BandIntro;
