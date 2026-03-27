import React from 'react'
import { Music } from 'lucide-react'
import Avatar from '../shared/Avatar.jsx'

/**
 * MusicDisc
 * Circular rotating disk pinned at the bottom right. Pauses when video is paused.
 */
export function MusicDisc({ avatarUrl, isPlaying }) {
  return (
    <div className="absolute right-4 bottom-[calc(env(safe-area-inset-bottom,0px)+64px)] z-20 w-12 h-12">
      <div
        className={`w-full h-full rounded-full border-4 border-toktik-text-primary/20 bg-toktik-bg flex items-center justify-center p-0.5
        animate-spin-disc
        ${isPlaying ? 'animation-running' : 'animation-paused'}
        `}
      >
        <div className="w-full h-full rounded-full overflow-hidden bg-toktik-surface-raised flex items-center justify-center">
          {avatarUrl ? (
            <img src={avatarUrl} alt="Music cover" className="w-full h-full object-cover" />
          ) : (
            <Music size={16} className="text-toktik-text-tertiary" />
          )}
        </div>
      </div>
    </div>
  )
}

export default MusicDisc
