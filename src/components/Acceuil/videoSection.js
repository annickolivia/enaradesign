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
            data-aos="fade-up"
        />
        <h2 className='relative text-white bottom-40 px-20 font-extralight'  data-aos="fade-right" data-aos-delay="300"><span className='font-semibold'>Notre </span> approche</h2>
    </div>
  )
}

export default VideoSection
