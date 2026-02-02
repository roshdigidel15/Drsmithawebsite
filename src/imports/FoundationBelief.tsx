"use client"

import { useRef, useEffect, useState } from "react";
import { MagicText } from "../components/MagicText";
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
  const fullText = `The foundation did not begin with an idea on paper. It began with lived moments. Cancer is where this journey became deeply personal. In hospital visits. In conversations with patients and elders. In witnessing courage that often goes unseen around the people. These experiences shaped a simple belief: care must go beyond systems — it must remain human.`;
  
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-[24px] items-center text-center w-[1034px] whitespace-pre-wrap" data-name="Foundation Belief Text">
      <p className="font-['Delicious_Handrawn:Regular',sans-serif] relative shrink-0 text-[#c96a4a] text-[32px] leading-normal w-full">Where it all took shape</p>
      <div className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#9fb8a0] text-[32px] leading-normal w-full min-h-[200px]">
        <MagicText text={fullText} manualProgress={scrollProgress} />
      </div>
    </div>
  );
}

function FoundationBelief1({ scrollProgress }: { scrollProgress: number }) {
  return (
    <div className="h-[690px] relative shrink-0 w-[1440px]" data-name="Foundation Belief">
      <Vector />
      <Vector1 />
      <FoundationBeliefText scrollProgress={scrollProgress} />
    </div>
  );
}

export default function FoundationBelief() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLocked, setIsLocked] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [accumulatedScroll, setAccumulatedScroll] = useState(0);
  const lockedScrollTop = useRef(0);

  useEffect(() => {
    let isScrolling = false;

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
      className="content-stretch flex flex-col items-center justify-center px-[120px] relative size-full min-h-screen" 
      data-name="Foundation Belief"
    >
      <FoundationBelief1 scrollProgress={scrollProgress} />
    </div>
  );
}