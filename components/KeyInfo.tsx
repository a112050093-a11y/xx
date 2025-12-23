
import React from 'react';

const KeyInfo: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-12">
          <h2 className="text-4xl md:text-6xl font-rock">
            <span className="block text-yellow-400 transform -rotate-1">ACTIVITY</span>
            <span className="block ml-4">INFORMATION</span>
          </h2>
          
          <div className="space-y-8">
            <div className="flex gap-6 items-start group">
              <div className="w-16 h-16 bg-white text-black flex items-center justify-center font-rock text-2xl flex-shrink-0 group-hover:bg-yellow-400 transition-colors">
                DATE
              </div>
              <div className="flex-1 border-b border-white/20 pb-4">
                <h3 className="text-xl font-bold mb-1">活動日期</h3>
                <p className="text-gray-400 text-lg">115/03/01 (Sun.) — 115/03/31 (Tue.)</p>
                <p className="text-sm text-yellow-400/60 mt-2">每日 11:00 AM - 09:00 PM</p>
              </div>
            </div>

            <div className="flex gap-6 items-start group">
              <div className="w-16 h-16 bg-white text-black flex items-center justify-center font-rock text-2xl flex-shrink-0 group-hover:bg-yellow-400 transition-colors">
                LOC.
              </div>
              <div className="flex-1 border-b border-white/20 pb-4">
                <h3 className="text-xl font-bold mb-1">活動地點</h3>
                <p className="text-gray-400 text-lg">台北流行音樂館 2 號館 (Taipei Music Center)</p>
                <p className="text-sm text-gray-500 mt-2">115台北市南港區市民大道八段99號</p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-zinc-900 border-l-4 border-yellow-400 italic text-gray-300">
            "本次活動採現場排隊入場制，每日名額有限，請粉絲留意官方粉絲專頁之公告。"
          </div>
        </div>

        <div className="relative aspect-video w-full h-[400px] lg:h-[500px] bg-zinc-800 rounded-2xl overflow-hidden border-2 border-white/10 sticker-shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.4842797664973!2d121.5833!3d25.048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ab6721085189%3A0x334863032543e39b!2z6Ie65YyX5rWB6KGM6Z-ｳ5qiC!5e0!3m2!1szh-TW!2stw!4v1714800000000!5m2!1szh-TW!2stw"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Taipei Music Center Map"
            className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
          ></iframe>
          <div className="absolute bottom-4 right-4">
            <a
              href="https://maps.app.goo.gl/3f8H5qC8fX5X5X5X"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-black/80 backdrop-blur-sm text-white text-sm font-bold border border-white/20 hover:bg-yellow-400 hover:text-black transition-all"
            >
              開啟導航 ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyInfo;
