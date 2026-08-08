"use client"

import { useRef, useEffect, useState } from "react";
import { MagicText } from "../components/MagicText";
import { useScroll, useTransform, useMotionValueEvent } from "motion/react";
import { motion } from "motion/react";
import svgPaths from "./svg-0p15x8qwun";
import imgImage from "figma:asset/39f7388ba4c4f344bd025586ba3a4902a9a9e376.png";
import imgImage1 from "figma:asset/d28d83c7d8d72ff76f996beb1da0bbd0453483e7.png";

function Vector() {
  return (
    <div className="absolute contents left-[1124.26px] top-[283px]" data-name="Vector">
      <div className="absolute h-[274px] left-[1130px] top-[416.14px] w-[326px]" data-name="Image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[125.22%] left-[-44.44%] max-w-none top-0 w-[187.13%]" src={imgImage} />
        </div>
      </div>
      <div className="absolute h-[127.593px] left-[1124.26px] top-[283px] w-[223.984px]" data-name="Vector">
        <div className="absolute inset-[-0.78%_-0.45%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 225.984 129.594">
            <path d={svgPaths.p8a0d200} id="Vector" stroke="var(--stroke-0, #C96A4A)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Vector1() {
  return (
    <div className="absolute contents left-[-45px] top-[361px]" data-name="Vector">
      <div className="absolute h-[268px] left-[-45px] top-[422.14px] w-[336px]" data-name="Image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[107.69%] left-0 max-w-none top-[-7.69%] w-full" src={imgImage1} />
        </div>
      </div>
      <div className="absolute h-[162.671px] left-[134.8px] top-[361px] w-[123.077px]" data-name="Vector">
        <div className="absolute inset-[-0.61%_-0.81%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 125.077 164.671">
            <path d={svgPaths.p7ed148} id="Vector" stroke="var(--stroke-0, #C96A4A)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function FoundationBeliefText({ scrollProgress }: { scrollProgress: number }) {
  const fullText = `The foundation began with lived moments — in hospital visits, in conversations with patients and elders, in witnessing courage that often goes unseen. These experiences shaped a simple belief: care must remain human.`;
  
  // Use a different image from the hero — this shows the foundation's care work
  const BELIEF_PHOTO = "https://drsmitasharmafoundation.com/images/page/smita.jpg";
  
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-[20px] md:gap-[32px] items-center text-center w-full max-w-[1034px] px-6 whitespace-pre-wrap" data-name="Foundation Belief Text">
      <p className="font-['Delicious_Handrawn:Regular',sans-serif] relative shrink-0 text-[#c96a4a] text-[28px] md:text-[36px] leading-normal w-full">Where it all took shape</p>
      
      {/* Dr. Smita's Cutout Photo with Glowing Border */}
      <motion.div
        className="relative mx-auto"
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Outer animated glow ring */}
        <motion.div
          className="absolute inset-[-8px] rounded-full"
          style={{
            background: 'conic-gradient(from 0deg, #c96a4a, #9fb8a0, #c96a4a, #9fb8a0, #c96a4a)',
            opacity: 0.5,
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />
        {/* Pulsing halo */}
        <motion.div
          className="absolute inset-[-16px] rounded-full blur-[20px]"
          style={{
            background: 'radial-gradient(circle, rgba(201,106,74,0.3) 0%, rgba(159,184,160,0.15) 50%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Photo */}
        <div className="relative w-[90px] h-[90px] md:w-[110px] md:h-[110px] rounded-full overflow-hidden border-[3px] border-white shadow-lg">
          <img
            src={BELIEF_PHOTO}
            alt="Foundation's care work"
            className="w-full h-full object-cover object-top"
          />
        </div>
        {/* Orbiting dots */}
        {[0, 72, 144, 216, 288].map((angle, i) => (
          <motion.div
            key={angle}
            className="absolute w-[4px] h-[4px] rounded-full"
            style={{
              background: i % 2 === 0 ? '#c96a4a' : '#9fb8a0',
              left: `calc(50% + ${Math.cos((angle * Math.PI) / 180) * 65}px - 2px)`,
              top: `calc(50% + ${Math.sin((angle * Math.PI) / 180) * 65}px - 2px)`,
            }}
            animate={{
              opacity: [0, 0.7, 0],
              scale: [0, 1.2, 0],
            }}
            transition={{
              duration: 2.5,
              delay: 1 + i * 0.2,
              repeat: Infinity,
              repeatDelay: 2.5,
              ease: 'easeInOut',
            }}
          />
        ))}
      </motion.div>
      
      <div className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#9fb8a0] text-[22px] md:text-[36px] leading-[1.4] w-full min-h-[180px] md:min-h-[280px]">
        <MagicText text={fullText} manualProgress={scrollProgress} />
      </div>
    </div>
  );
}

function FoundationBelief1({ scrollProgress }: { scrollProgress: number }) {
  return (
    <div className="h-[650px] md:h-[800px] relative shrink-0 w-full max-w-[1440px]" data-name="Foundation Belief">
      <div className="hidden lg:block">
        <Vector />
        <Vector1 />
      </div>
      <FoundationBeliefText scrollProgress={scrollProgress} />
    </div>
  );
}

// Detect touch device
function useIsTouchDevice() {
  const [isTouch, setIsTouch] = useState(false);
  useEffect(() => {
    setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);
  return isTouch;
}

// Mobile version: scroll-position-based reveal (no lock)
function MobileFoundationBelief() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.5", "end 0.5"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollProgress(latest);
  });

  return (
    <div 
      ref={containerRef}
      className="content-stretch flex flex-col items-center justify-center px-6 md:px-16 lg:px-[120px] relative size-full min-h-[80vh]" 
      data-name="Foundation Belief"
    >
      <FoundationBelief1 scrollProgress={scrollProgress} />
    </div>
  );
}

// Desktop version: scroll-lock wheel-based reveal
function DesktopFoundationBelief() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLocked, setIsLocked] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [accumulatedScroll, setAccumulatedScroll] = useState(0);
  const lockedScrollTop = useRef(0);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const isInView = rect.top <= 100 && rect.bottom >= window.innerHeight - 100;

      if (isInView && scrollProgress < 1) {
        e.preventDefault();
        
        if (!isLocked) {
          setIsLocked(true);
          lockedScrollTop.current = window.scrollY;
        }

        // Accumulate scroll delta
        const scrollAmount = e.deltaY;
        setAccumulatedScroll((prev) => {
          const newScroll = Math.max(0, Math.min(1000, prev + scrollAmount));
          const newProgress = newScroll / 1000;
          setScrollProgress(newProgress);
          
          // Once progress reaches 100%, unlock scrolling
          if (newProgress >= 1) {
            setIsLocked(false);
          }
          
          return newScroll;
        });
      } else if (isLocked && scrollProgress >= 1) {
        // Unlock and allow normal scrolling
        setIsLocked(false);
      }
    };

    const handleScroll = () => {
      if (isLocked) {
        // Keep the window locked at the position where we started
        window.scrollTo(0, lockedScrollTop.current);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isLocked, scrollProgress]);

  return (
    <div 
      ref={containerRef}
      className="content-stretch flex flex-col items-center justify-center px-6 md:px-16 lg:px-[120px] relative size-full min-h-screen" 
      data-name="Foundation Belief"
    >
      <FoundationBelief1 scrollProgress={scrollProgress} />
    </div>
  );
}

export default function FoundationBelief() {
  const isTouch = useIsTouchDevice();
  
  return isTouch ? <MobileFoundationBelief /> : <DesktopFoundationBelief />;
}