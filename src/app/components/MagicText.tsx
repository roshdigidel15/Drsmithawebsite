"use client" 

import * as React from "react"
 
import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import { useRef, useMemo } from "react";
 
export interface MagicTextProps {
  text: string;
  manualProgress?: number;
}
 
interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: number[];
  isManual: boolean;
  manualValue: number;
}
 
const Word: React.FC<WordProps> = ({ children, progress, range, isManual, manualValue }) => {
  // Always call useTransform — hooks must be unconditional
  const scrollOpacity = useTransform(progress, range, [0, 1]);

  const manualOpacity = useMemo(() => {
    if (!isManual) return 0;
    if (manualValue >= range[1]) return 1;
    if (manualValue <= range[0]) return 0;
    // Smoother easing curve
    const raw = (manualValue - range[0]) / (range[1] - range[0]);
    return raw * raw * (3 - 2 * raw); // smoothstep
  }, [isManual, manualValue, range]);
 
  return (
    <span className="relative mt-[10px] md:mt-[14px] mr-[5px] md:mr-[7px] text-[22px] md:text-[36px] font-semibold inline-block">
      <span className="absolute opacity-[0.12]">{children}</span>
      {isManual ? (
        <span 
          style={{ 
            opacity: manualOpacity,
            transition: 'opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >{children}</span>
      ) : (
        <motion.span style={{ opacity: scrollOpacity }}>{children}</motion.span>
      )}
    </span>
  );
};
 
export const MagicText: React.FC<MagicTextProps> = ({ text, manualProgress }) => {
  const container = useRef<HTMLDivElement>(null);
  const isManual = manualProgress !== undefined;
 
  // Always call useScroll — hooks must be unconditional
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.7", "start 0.25"],
  });

  const words = text.split(" ");
 
  return (
    <div ref={container} style={{ position: 'relative' }} className="w-full">
      <p className="flex flex-wrap justify-center leading-[1.4] p-4 text-center">
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
 
          return (
            <Word 
              key={i} 
              progress={scrollYProgress} 
              range={[start, end]}
              isManual={isManual}
              manualValue={manualProgress ?? 0}
            >
              {word}
            </Word>
          );
        })}
      </p>
    </div>
  );
};