import React from 'react'

function VideoSection() {
  return (
    <div>
        <video 
            src="/videos/accueilVideo.mp4" 
            autoPlay 
            loop 
            muted 
            // playsInline 
            className="w-full h-auto"
        />
        <h2 className='relative text-gray-600 bottom-40 px-20 font-extralight'><span className='font-semibold'>Notre </span> approche</h2>
    </div>
  )
}

export default VideoSection
