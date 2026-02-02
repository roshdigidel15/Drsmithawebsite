"use client";

import { FC } from "react";
import imgHeroImage from "figma:asset/76aa191ae414ec4dd28c8558b9dc80afba3c9f0c.png";
import imgImage2 from "figma:asset/efce35585936524053812624975e275ef57b4f04.png";
import imgImage3 from "figma:asset/34bfc6d99108ae65c0b43bdf83cd6464ed90d982.png";

interface HeroCardProps {
  title: string;
  src: string;
}

const HeroCard: FC<HeroCardProps> = ({ title, src }) => {
  return (
    <div className="h-screen flex items-center justify-center sticky top-0 md:p-0 px-4">
      <div className="relative flex flex-col items-center justify-center h-[539px] w-full max-w-[1200px] px-[123px] py-[204px] overflow-hidden mx-auto shadow-md">
        <img 
          alt="" 
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" 
          src={src} 
        />
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative z-10 shrink-0 text-[54px] text-[rgba(255,255,255,0.8)] text-center w-[648px] whitespace-pre-wrap">
          {title}
        </p>
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
    <div className="min-h-screen">
      {cards.map((card, i) => (
        <HeroCard 
          key={i}
          title={card.title}
          src={card.src}
        />
      ))}
    </div>
  );
};