"use client";

import React from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

interface HoverTextProps {
  children: React.ReactNode;
  className?: string;
}

export const HoverText: React.FC<HoverTextProps> = ({ children, className }) => {
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

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.span
      onMouseMove={handleMouseMove}
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
  );
};
