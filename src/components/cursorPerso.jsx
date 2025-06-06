// CustomCursor.jsx
import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { mainColors } from '../styles/variables';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(true);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const cursorX = useSpring(mouseX, { damping: 20, stiffness: 150 });
  const cursorY = useSpring(mouseY, { damping: 20, stiffness: 150 });

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const show = () => setIsVisible(true);
    const hide = () => setIsVisible(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseenter', show);
    window.addEventListener('mouseleave', hide);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseenter', show);
      window.removeEventListener('mouseleave', hide);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Hide cursor on small screens */}
      <div className="hidden md:block pointer-events-none fixed top-0 left-0 z-[9999]">
        {isVisible && (
          <motion.div
            className="w-6 h-6 rounded-full mix-blend-difference"
            style={{
              translateX: cursorX,
              translateY: cursorY,
              position: 'absolute',
              top: '-50%',
              left: '-50%',
              backgroundColor: "#ffffff",
              boxShadow: "0px 0px 8px #ffffff"
            }}
          />
        )}
      </div>
    </>
  );
}
