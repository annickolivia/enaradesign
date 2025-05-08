import React, { useEffect, useState } from 'react';
import { mainColors } from '../styles/variables';
import '../styles/preloader.scss';

export default function Preloader() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 6000); // 3s preloader
    return () => clearTimeout(timeout);
  }, []);

  if (loaded) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center h-screen w-screen"
        style={{backgroundColor: mainColors.mainBrown}}    
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Animation 1: Savoir-faire, Créativité, Excellence */}
        <div className="absolute flex flex-row gap-2 items-center">
          <p className="animate-slideFade1 opacity-0 transition text-xl md:text-5xl text-white font-thin">Savoir-faire</p>
          <p className="animate-slideFade2 opacity-0 transition text-xl md:text-5xl text-white font-semibold">Créativité</p>
          <p className="animate-slideFade3 opacity-0 transition text-xl md:text-5xl text-white font-thin">Excellence</p>
        </div>
        <div className="absolute flex flex-col items-center">
            <div className='absolute bg-white h-8 max-w-64 md:max-w-72 md:h-10 lg:h-10 animate-revealSlide'></div>
            <p className="opacity-0 animate-expandLine text-white text-xl md:text-3xl lg:text-3xl xl:text-2xl font-thin tracking-widest">enaradesign.com</p>
        </div>
      </div>
    </div>
  );
}
