
import React, { useState, useEffect, useCallback } from 'react';
import { EVENT_START_DATE } from '../constants';
import { CountdownTime } from '../types';

const Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<CountdownTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });

  const calculateTimeLeft = useCallback(() => {
    const target = new Date(EVENT_START_DATE).getTime();
    const now = new Date().getTime();
    const difference = target - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isExpired: false,
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
      {/* Background Graphic Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] opacity-10 pointer-events-none select-none">
         <img src="https://picsum.photos/seed/rock-pattern/1200/800" alt="" className="w-full h-full object-cover rounded-3xl" />
      </div>

      <div className="relative z-10 space-y-8 animate-fade-in">
        <div className="inline-block px-4 py-1 bg-yellow-400 text-black font-bold uppercase text-sm mb-4 transform -rotate-2">
          Coming Soon in Taipei
        </div>
        
        <h1 className="text-5xl md:text-8xl font-rock leading-tight tracking-tight drop-shadow-2xl">
          Xdinary Heroes<br/>
          <span className="text-yellow-400">Pop-up Store</span>
        </h1>
        
        <p className="text-xl md:text-2xl font-light text-gray-300 max-w-2xl mx-auto italic">
          "WE ARE ALL HEROES" - 官方授權快閃店，全台首次震撼登場。
        </p>

        {/* Countdown Area */}
        <div className="flex flex-wrap justify-center gap-4 py-8">
          {timeLeft.isExpired ? (
            <div className="text-3xl md:text-5xl font-rock text-green-400 animate-pulse border-4 border-green-400 p-6 rounded-xl transform rotate-1">
              活動進行中！
            </div>
          ) : (
            <>
              <div className="flex flex-col items-center p-4 bg-zinc-900/80 border border-white/20 rounded-xl min-w-[100px] sticker-shadow">
                <span className="text-4xl md:text-6xl font-bold">{timeLeft.days}</span>
                <span className="text-xs uppercase text-gray-400">Days</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-zinc-900/80 border border-white/20 rounded-xl min-w-[100px] sticker-shadow">
                <span className="text-4xl md:text-6xl font-bold">{timeLeft.hours}</span>
                <span className="text-xs uppercase text-gray-400">Hours</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-zinc-900/80 border border-white/20 rounded-xl min-w-[100px] sticker-shadow">
                <span className="text-4xl md:text-6xl font-bold">{timeLeft.minutes}</span>
                <span className="text-xs uppercase text-gray-400">Mins</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-zinc-900/80 border border-white/20 rounded-xl min-w-[100px] sticker-shadow">
                <span className="text-4xl md:text-6xl font-bold text-yellow-400">{timeLeft.seconds}</span>
                <span className="text-xs uppercase text-gray-400">Secs</span>
              </div>
            </>
          )}
        </div>

        <div className="pt-4">
          <a
            href="#merch"
            className="inline-block px-10 py-4 bg-white text-black font-bold text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 hover:-rotate-1 active:scale-95"
          >
            立即探索商品 →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
