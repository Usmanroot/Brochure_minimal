import React, { useState, useEffect } from 'react'
import { config } from '../config'

export default function Clips() {
  const clips = config.clips;

  const [parentDomain, setParentDomain] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setParentDomain(window.location.hostname)
    }
  }, [])

  return (
    <section className="py-12 px-4 flex flex-col items-center min-h-screen text-white bg-linear-to-l from-zinc-900 via-zinc-800 to-zinc-900">
      <div className="mb-10 text-center">
        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-wider uppercase drop-shadow-[0_0_25px_rgba(168,85,247,0.4)]">
          Clips
        </h1>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-[1700px] w-full justify-items-center">
        {clips.map((clip) => (
          <div
            key={clip.id}
            className="w-full sm:w-105 lg:w-115 aspect-9/16 rounded-3xl overflow-hidden shadow-[0_0_35px_rgba(147,51,234,0.35)] border-2 border-purple-500/20 hover:border-purple-500/60 transition-all duration-300 hover:scale-[1.02] bg-zinc-900"
          >
            {parentDomain ? (
              <iframe
                className="w-full h-full object-cover"
                src={`https://clips.twitch.tv/embed?clip=${clip.slug}&parent=${parentDomain}&autoplay=false`}
                title="Twitch Clip"
                height="100%"
                width="100%"
                allowFullScreen
              ></iframe>
            ) : (
              <div className="w-full h-full animate-pulse bg-zinc-800" />
            )}
          </div>
        ))}
      </div>
      <div className="mt-12 flex justify-center gap-4 text-xs text-slate-500 opacity-50 hover:opacity-100 transition-opacity">
        <p>©{new Date().getFullYear()} {config.footerText}</p> {/* Display the footer text from the config */}
      </div>
    </section>
  )
}