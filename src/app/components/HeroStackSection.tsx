"use client";

import { FC, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import imgHeroImage from "figma:asset/76aa191ae414ec4dd28c8558b9dc80afba3c9f0c.png";
import imgImage2 from "figma:asset/efce35585936524053812624975e275ef57b4f04.png";
import imgImage3 from "figma:asset/34bfc6d99108ae65c0b43bdf83cd6464ed90d982.png";

interface HeroCardProps {
  title: string;
  src: string;
  index: number;
}

// Desktop: sticky parallax stack card
const DesktopHeroCard: FC<HeroCardProps> = ({ title, src, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.92, 1, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.4]);

  return (
    <div ref={ref} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        className="relative flex flex-col items-center justify-center h-[539px] w-full max-w-[1200px] px-[123px] py-[204px] overflow-hidden mx-auto rounded-2xl shadow-lg"
        style={{ scale, opacity, zIndex: index }}
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={src}
        />
        <div className="absolute inset-0 bg-black/20" />
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative z-10 shrink-0 text-[42px] xl:text-[54px] text-[rgba(255,255,255,0.9)] text-center w-full max-w-[648px] whitespace-pre-wrap drop-shadow-lg">
          {title}
        </p>
      </motion.div>
    </div>
  );
};

// Mobile card for scroll-linked horizontal section
const MobileScrollCard: FC<{ title: string; src: string }> = ({ title, src }) => {
  return (
    <div className="flex-shrink-0 w-[80vw]">
      <div className="relative flex flex-col items-center justify-center h-[350px] w-full overflow-hidden rounded-xl shadow-md">
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={src}
        />
        <div className="absolute inset-0 bg-black/25" />
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative z-10 shrink-0 text-[22px] text-[rgba(255,255,255,0.9)] text-center w-full max-w-[320px] whitespace-pre-wrap drop-shadow-lg px-6">
          {title}
        </p>
      </div>
    </div>
  );
};

// Progress dot component (uses hooks safely at component level)
const ProgressDot: FC<{ index: number; scrollYProgress: any }> = ({ index, scrollYProgress }) => {
  const width = useTransform(
    scrollYProgress,
    [0.1 + index * 0.2, 0.25 + index * 0.2, 0.4 + index * 0.2],
    [8, 24, 8]
  );
  const dotOpacity = useTransform(
    scrollYProgress,
    [0.1 + index * 0.2, 0.25 + index * 0.2, 0.4 + index * 0.2],
    [0.3, 1, 0.3]
  );

  return (
    <motion.div
      className="h-[3px] rounded-full bg-[#c96a4a]"
      style={{ width, opacity: dotOpacity }}
    />
  );
};

// Mobile scroll-linked horizontal motion section
const MobileHorizontalScrollSection: FC<{ cards: { title: string; src: string }[] }> = ({ cards }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Map vertical scroll progress to horizontal translation
  // Cards start slightly off-screen right and slide to the left as user scrolls
  // Using pixel values: each card is ~80vw ≈ 314px, gap ~16px
  // Total needed translation: roughly 2 card widths for 3 cards
  const x = useTransform(
    scrollYProgress,
    [0.05, 0.35, 0.75],
    [120, 0, -350]
  );

  // Overall opacity for the section
  const sectionOpacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.65, 0.9],
    [0, 1, 1, 0.3]
  );

  return (
    <div ref={containerRef} className="relative min-h-[130vh]">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Section heading */}
        <motion.p
          className="font-['Delicious_Handrawn',sans-serif] text-[#c96a4a] text-[30px] text-center mb-8 px-4"
          style={{ opacity: sectionOpacity }}
        >
          Why we exist
        </motion.p>

        {/* Horizontally translating cards */}
        <motion.div
          className="flex gap-[4vw] px-[10vw]"
          style={{ x, opacity: sectionOpacity }}
        >
          {cards.map((card, i) => (
            <MobileScrollCard key={i} title={card.title} src={card.src} />
          ))}
        </motion.div>

        {/* Subtle progress indicator */}
        <motion.div className="mt-8 flex gap-2 items-center" style={{ opacity: sectionOpacity }}>
          {cards.map((_, i) => (
            <ProgressDot key={i} index={i} scrollYProgress={scrollYProgress} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export const HeroStackSection: FC = () => {
  const cards = [
    {
      title: "Not everyone who suffers asks for help.",
      src: imgHeroImage,
    },
    {
      title: "Not everyone who needs care knows where to go.",
      src: imgImage2,
    },
    {
      title: "We exist to bridge that gap with empathy, continuity, and dignity.",
      src: imgImage3,
    },
  ];

  return (
    <>
      {/* Desktop: sticky stacking cards */}
      <div className="hidden md:block min-h-screen">
        {cards.map((card, i) => (
          <DesktopHeroCard
            key={i}
            title={card.title}
            src={card.src}
            index={i}
          />
        ))}
      </div>

      {/* Mobile: scroll-linked horizontal motion */}
      <div className="md:hidden">
        <MobileHorizontalScrollSection cards={cards} />
      </div>
    </>
  );
};
