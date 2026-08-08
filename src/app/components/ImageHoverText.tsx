"use client";

import React from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "motion/react";

interface ImageHoverTextProps {
  children: React.ReactNode;
  imageSrc: string;
  imageWidth?: number;
  imageHeight?: number;
  className?: string;
  hasBorder?: boolean;
  borderPath?: string;
}

export const ImageHoverText: React.FC<ImageHoverTextProps> = ({ 
  children, 
  imageSrc, 
  imageWidth = 300,
  imageHeight = 300,
  className,
  hasBorder = false,
  borderPath
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  const springConfig = { stiffness: 100, damping: 15 };
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const translateX = useSpring(x, springConfig);
  const translateY = useSpring(y, springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLSpanElement>) => {
    const targetRect = event.currentTarget.getBoundingClientRect();
    const eventOffsetX = event.clientX - targetRect.left;
    const eventOffsetY = event.clientY - targetRect.top;
    const offsetFromCenterX = (eventOffsetX - targetRect.width / 2) / 2;
    const offsetFromCenterY = (eventOffsetY - targetRect.height / 2) / 2;
    x.set(offsetFromCenterX);
    y.set(offsetFromCenterY);
  };

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsOpen(false);
  };

  return (
    <span className="relative inline-block">
      <motion.span
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          x: translateX,
          y: translateY,
          display: "inline-block",
        }}
        className={className}
      >
        {children}
      </motion.span>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.6 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 260,
                damping: 20,
              },
            }}
            exit={{ opacity: 0, y: 20, scale: 0.6 }}
            className="absolute left-1/2 -translate-x-1/2 bottom-full mb-4 pointer-events-none z-50"
            style={{
              width: imageWidth,
              height: imageHeight,
            }}
          >
            <div className="relative bg-white rounded-xl shadow-xl overflow-hidden" style={{ width: imageWidth, height: imageHeight }}>
              {hasBorder && borderPath ? (
                <div className="relative w-full h-full">
                  <img 
                    src={imageSrc} 
                    alt="" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <svg 
                    className="absolute inset-0 w-full h-full pointer-events-none" 
                    fill="none" 
                    preserveAspectRatio="none" 
                    viewBox="0 0 378.565 427.276"
                  >
                    <path 
                      d={borderPath} 
                      stroke="#C96A4A" 
                      strokeLinecap="round" 
                      strokeWidth="2" 
                    />
                  </svg>
                </div>
              ) : (
                <img 
                  src={imageSrc} 
                  alt="" 
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
};
