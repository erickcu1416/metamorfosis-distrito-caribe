'use client'

import { useVideoBackground } from './hooks/useVideoBackground'

interface VideoBackgroundProps {
  webSrc: string
  mobileSrc: string
  posterWeb: string
  posterMobile: string
}

export function VideoBackground({
  webSrc,
  mobileSrc,
  posterWeb,
  posterMobile
}: VideoBackgroundProps) {
  const { shouldLoadVideo } = useVideoBackground()

  // Fallback gradient (same as original)
  if (!shouldLoadVideo) {
    return (
      <div className="absolute inset-0">
        {/* Original gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0014] via-[#1a0a2e] to-[#0a0014]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(16,185,129,0.1),transparent_50%)]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #8B5CF6 1px, transparent 1px),
              linear-gradient(to bottom, #8B5CF6 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>
    )
  }

  return (
    <div className="absolute inset-0">
      {/* Video element */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={posterWeb}
        className="absolute inset-0 h-full w-full object-cover"
      >
        {/* Mobile video (portrait) */}
        <source
          src={mobileSrc}
          type="video/webm"
          media="(max-width: 768px) and (orientation: portrait)"
        />
        {/* Web video (landscape) */}
        <source
          src={webSrc}
          type="video/webm"
        />
      </video>

      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

      {/* Subtle grid overlay (maintain original aesthetic) */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #8B5CF6 1px, transparent 1px),
            linear-gradient(to bottom, #8B5CF6 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Purple/green glow overlays (reduced opacity over video) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(16,185,129,0.05),transparent_50%)]" />
    </div>
  )
}
