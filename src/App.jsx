import React from 'react'
import Linktree from './pages/StreamerLinktree.jsx'
import Twitch from './pages/Twitch_Player.jsx'
import Clips from './pages/Clips.jsx'

export default function App() {
  return (
    <div>
      <Linktree />
      <Twitch />
      <Clips/>
    </div>
  )
}
