import React, { useState, useEffect } from 'react';
import { config} from '../config'

export default function Twitch_Player() {
  const streamerName = config.twitchUsername; // Replace with your Twitch username
  
  const [parentDomain, setParentDomain] = useState('');
  const [isLive, setIsLive] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setParentDomain(window.location.hostname);
    }

    const img = new Image();
    img.src = `https://static-cdn.jtvnw.net/previews-ttv/live_user_${streamerName}-640x360.jpg?t=${new Date().getTime()}`;

    img.onload = () => {
      setIsLive(true);
      setLoading(false);
    };

    img.onerror = () => {
      setIsLive(false);
      setLoading(false);
    };
  }, [streamerName]);

  if (loading) {
    return (
      <div className="w-full max-w-7xl mx-auto p-8 bg-slate-900/80 backdrop-blur-md rounded-3xl animate-pulse flex items-center justify-center border border-slate-700/50 min-h-75">
        <span className="text-slate-400 font-bold uppercase tracking-wider text-sm">Проверка статуса стрима...</span>
      </div>
    );
  }

  return (
    <div className="relative w-full min-h-[60vh] p-30 px-4 sm:px-8 sm:p-30 lg:px-16 lg:p-30 pt-12 pb-12 transition-colors duration-300 shadow-[0_-15px_50px_rgba(0,0,0,0.8)] bg-black select-none">
      <div className="w-full max-w-7xl mx-auto">
        {isLive && parentDomain ? (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 w-full">
            {/* Плеер */}
            <div className="lg:col-span-3 group relative">
              <div className="absolute -inset-1 bg-linear-to-r from-purple-500 via-pink-500 to-amber-500 rounded-2xl blur-md opacity-40 group-hover:opacity-70 transition duration-500"></div>
              <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 aspect-video">
                <iframe
                  src={`https://player.twitch.tv/?channel=${streamerName}&parent=${parentDomain}&autoplay=true`}
                  className="w-full h-full"
                  allowFullScreen={true}
                  title="Twitch Stream"
                ></iframe>
              </div>
            </div>
            
            {/* Чат */}
            <div className="lg:col-span-1 bg-black rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl lg:h-full min-h-112.5">
              <iframe
                src={`https://www.twitch.tv/embed/${streamerName}/chat?parent=${parentDomain}&theme=dark`}
                className="w-full h-full"
                title="Twitch Chat"
              ></iframe>
            </div>
          </div>
        ) : (
          /* Офлайн статус */
          <div className="relative bg-slate-800/90 backdrop-blur-md rounded-2xl p-8 sm:p-12 text-center border border-slate-700/50 shadow-2xl max-w-3xl mx-auto my-8 overflow-hidden">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-900 text-purple-400 mb-4 shadow-inner border border-slate-700/50">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
              </svg>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black tracking-wider uppercase text-white mb-2">
              Стример сейчас <span className="text-rose-500 font-black">Offline</span>
            </h3>
            <p className="text-slate-300 max-w-md mx-auto text-sm sm:text-base mb-8 font-medium">
              Но это не повод грустить! Чекай расписание ниже или заглядывай в Telegram, там весь движ.
            </p>

            <a
              href="#schedule"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-black text-sm tracking-wider uppercase rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg border border-purple-400/30"
            >
              Посмотреть расписание →
            </a>
          </div>
        )}
      </div>
    </div>
  );
}