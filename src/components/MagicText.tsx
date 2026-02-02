"use client" 

import * as React from "react"
 
import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import { useRef } from "react";
 
export interface MagicTextProps {
  text: string;
  manualProgress?: number;
}
 
interface WordProps {
  children: string;
  progress: MotionValue<number> | number;
  range: number[];
}
 
const Word: React.FC<WordProps> = ({ children, progress, range }) => {
  const opacity = typeof progress === 'number' 
    ? (progress >= range[0] && progress <= range[1] 
        ? Math.min(1, Math.max(0, (progress - range[0]) / (range[1] - range[0])))
        : progress > range[1] ? 1 : 0)
    : useTransform(progress, range, [0, 1]);
 
  return (
    <span className="relative mt-[12px] mr-1 text-3xl font-semibold">
      <span className="absolute opacity-20">{children}</span>
      {typeof opacity === 'number' ? (
        <span style={{ opacity }}>{children}</span>
      ) : (
        <motion.span style={{ opacity }}>{children}</motion.span>
      )}
    </span>
  );
};
 
export const MagicText: React.FC<MagicTextProps> = ({ text, manualProgress }) => {
  const container = useRef<HTMLDivElement>(null);
 
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.7", "start 0.25"],
  });

  const words = text.split(" ");
  const progress = manualProgress !== undefined ? manualProgress : scrollYProgress;
 
  return (
    <div ref={container} className="relative">
      <p className="flex flex-wrap leading-[0.5] p-4">
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
 
          return (
            <Word key={i} progress={progress} range={[start, end]}>
              {word}
            </Word>
          );
        })}
      </p>
    </div>
  );
};