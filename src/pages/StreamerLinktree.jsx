import React from 'react';

export default function StreamerLinktree() {
  const links = [
    { name: 'TWITCH STREAM', url: 'https://twitch.tv', color: 'from-purple-600 to-indigo-600' },
    { name: 'KICK LIVE', url: 'https://kick.com', color: 'from-green-500 to-emerald-600' },
    { name: 'YOUTUBE CHANNEL', url: 'https://youtube.com', color: 'from-red-600 to-rose-600' },
    { name: 'DISCORD SERVER', url: 'https://discord.gg', color: 'from-indigo-500 to-blue-600' },
    { name: 'TELEGRAM CHANNEL', url: 'https://t.me', color: 'from-sky-500 to-blue-500' },
    { name: 'DONATE / SUPPORT', url: '#', color: 'from-amber-500 to-orange-600' },
    { name: 'TIKTOK', url: '#', color: 'from-pink-500 to-rose-500' },
    { name: 'MERCH STORE', url: '#', color: 'from-emerald-500 to-teal-600' },
  ];

  return (
    <div className="relative min-h-screen w-full bg-slate-950 flex flex-col justify-between overflow-x-hidden select-none">
      <div className="fixed top-0 left-0 w-full h-[50vh] z-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&auto=format&fit=crop&q=80"
          alt="Streamer Banner"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/20 to-black/90" />
      </div>
      <div className="h-[40vh] w-full shrink-0 z-0" />
      <div 
        className="relative z-10 w-full min-h-[60vh] rounded-t-4xl sm:rounded-t-[48px] px-4 sm:px-8 lg:px-16 pt-16 pb-12 transition-colors duration-300 shadow-[0_-15px_50px_rgba(0,0,0,0.8)] bg-black"
      >
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 z-20">
          <div className="relative p-1 bg-linear-to-r from-purple-500 via-pink-500 to-amber-500 rounded-full shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=300&auto=format&fit=crop&q=80"
              alt="Streamer Avatar"
              className="w-28 h-28 sm:w-32 sm:h-32 object-cover rounded-full"
            />
          </div>
        </div>

        <div className="text-center mt-2 mb-8">
          <h1 className="text-2xl sm:text-4xl font-black tracking-wider uppercase text-white">
            NINJA_STREAMER
          </h1>
          <p className="text-sm sm:text-base mt-1 font-medium text-slate-400">
            Live every day at 18:00 • FPS & Variety Streams
          </p>
        </div>

        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden flex items-center justify-between p-5 sm:p-6 rounded-2xl font-black text-base sm:text-lg tracking-wider uppercase transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 shadow-md bg-slate-800/90 hover:bg-slate-800 text-white border border-slate-700/50"
            >
              <div className={`absolute left-0 top-0 bottom-0 w-3 bg-linear-to-b ${link.color}`} />

              <span className="ml-3 truncate group-hover:translate-x-1 transition-transform">
                {link.name}
              </span>
              <span className="text-2xl opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all ml-2 shrink-0">
                →
              </span>
            </a>
          ))}
        </div>

        <div className="mt-12 flex justify-center gap-4 text-xs text-slate-500 opacity-50 hover:opacity-100 transition-opacity">
          <p>©{new Date().getFullYear()} Usman Mukhtorow. All rights reserved</p>
        </div>

      </div>
    </div>
  );
}