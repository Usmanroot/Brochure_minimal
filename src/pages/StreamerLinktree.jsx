import React from 'react';
import { config } from '../config';

export default function StreamerLinktree() {
  return (
    <div className="relative min-h-screen w-full bg-slate-950 flex flex-col justify-between overflow-x-hidden select-none">
      <div className="absolute top-0 left-0 w-full h-[50vh] z-0 pointer-events-none">
        <img
          src={config.bannerUrl}
          alt="Streamer Banner"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/20 to-black/90" />
      </div>

      <div className="h-[40vh] w-full shrink-0 z-0" />
      <div className="relative z-10 w-full min-h-[60vh] rounded-t-4xl sm:rounded-t-[48px] px-4 sm:px-8 lg:px-16 pt-16 pb-12 transition-colors duration-300 shadow-[0_-15px_50px_rgba(0,0,0,0.8)] bg-linear-to-r from-zinc-900 via-zinc-800 to-zinc-900">
        
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 z-20">
          <div className="relative w-30 h-30 sm:w-34 sm:h-34 p-1 flex items-center justify-center rounded-full shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-r from-purple-500 via-pink-500 to-amber-500 rounded-full animate-spin" />
            <img
              src={config.avatarUrl}
              alt="Streamer Avatar"
              className="relative z-10 w-28 h-28 sm:w-32 sm:h-32 object-cover rounded-full"
            />
          </div>
        </div>

        <div className="text-center mt-2 mb-8">
          <h1 className="text-2xl sm:text-4xl font-black tracking-wider uppercase text-white">
            {config.streamerName}
          </h1>
          <p className="text-sm sm:text-base mt-1 font-medium text-slate-400">
            {config.bio}
          </p>
        </div>

        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {config.links.map((link, index) => (
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
      </div>
    </div>
  );
}