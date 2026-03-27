import React, { useRef, useImperativeHandle, forwardRef, useEffect } from 'react'
import { Volume2, VolumeX } from 'lucide-react'
import { usePlayer } from '../../hooks/usePlayer.js'
import { useAppContext } from '../../context/AppContext.jsx'
import { useHaptics } from '../../hooks/useHaptics.js'

/**
 * VideoPlayer
 * Wraps the HTML5 video element handling looping securely without native control bars.
 * Renders the absolute positioned progress indicator bar automatically tracking time.
 */
export const VideoPlayer = forwardRef(({ video, isActive }, ref) => {
  const videoRef = useRef(null)
  const { isMuted, toggleMute } = useAppContext()
  const haptics = useHaptics()

  // Extract wrapped play/pause handlers 
  const {
      isPlaying,
      currentTime,
      duration,
      handleTimeUpdate,
      handleLoadedMetadata,
      handleEnded
  } = usePlayer(videoRef, isActive, isMuted)

  // Pass functions up to parent card securely
  useImperativeHandle(ref, () => ({
    get videoElement() { return videoRef.current },
    isPlaying: isPlaying,
    mute: () => { if (!isMuted) toggleMute() },
    unmute: () => { if (isMuted) toggleMute() }
  }))

  const handleMuteClick = (e) => {
    e.stopPropagation()
    haptics.soundToggle()
    toggleMute()
  }

  // Calculate strict linear progress widths avoiding NaN layout bugs
  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0

  const handleSeek = (e) => {
    e.stopPropagation()
    const rect = e.currentTarget.getBoundingClientRect()
    let clientX = e.clientX
    if (e.touches && e.touches.length > 0) {
      clientX = e.touches[0].clientX
    }
    const x = clientX - rect.left
    const width = rect.width
    const percentage = Math.max(0, Math.min(1, x / width))
    if (videoRef.current && duration > 0) {
      videoRef.current.currentTime = percentage * duration
    }
  }

  return (
    <div className="relative w-full h-full bg-black/90">
      
      {/* Video Content Block */}
      <video
        ref={videoRef}
        src={video.url}
        poster={video.thumbnailUrl || undefined}
        loop // Ensure infinite loop
        playsInline // Required for iOS to prevent fullscreen popouts
        muted={isMuted}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
        // Force rendering over background strictly mapped
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      />

      {/* Persistent global sound toggle mapped on top-right outside safe area logic conservatively */}
      <button 
        onClick={handleMuteClick}
        className="absolute top-12 right-4 z-50 p-2 text-white bg-black/20 rounded-full backdrop-blur transition-opacity opacity-80 active:opacity-100"
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>

      {/* Progress Bar locked to bottom viewport edge precisely above nav boundaries (56px h-14) */}
      <div 
        className="absolute left-0 right-0 bottom-[calc(env(safe-area-inset-bottom,0px)+56px)] h-[6px] bg-white/20 z-10 cursor-pointer pointer-events-auto"
        onPointerDown={handleSeek}
        onPointerMove={(e) => {
          if (e.buttons === 1) handleSeek(e)
        }}
        onTouchStart={handleSeek}
        onTouchMove={(e) => handleSeek(e)}
        onClick={(e) => e.stopPropagation()}
      >
        <div 
          className="h-full bg-toktik-accent transition-all ease-linear relative"
          style={{ width: `${progressPercent}%`, transitionDuration: '0.1s' }} 
        >
          {/* Subtle scrubber thumb */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow" />
        </div>
      </div>
    </div>
  )
})

export default VideoPlayer
