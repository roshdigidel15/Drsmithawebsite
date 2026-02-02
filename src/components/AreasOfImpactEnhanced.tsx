"use client"

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import imgElderlyCareImage from "figma:asset/5c37520e0917cdc1be32333e804503a84b8319ff.png";
import imgOrphanSupportImage from "figma:asset/862f67372ad136af2a08dcc82118ef0a925c5a8f.png";
import imgHealthCareImage from "figma:asset/ec8bbeaab40ab866e5e4fcd5878d62afb5262b23.png";

function AreasOfImpactHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center leading-[normal] not-italic relative shrink-0 text-center w-full" data-name="Areas of Impact Header">
      <p className="font-['Delicious_Handrawn:Regular',sans-serif] relative shrink-0 text-[#c96a4a] text-[32px]">Areas of Impact</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#626262] text-[16px] w-[330px] whitespace-pre-wrap">We work at the intersection of care, dignity, and everyday humanity.</p>
    </div>
  );
}

type AreaType = 'elderly' | 'orphan' | 'cancer';

interface AreaCardProps {
  type: AreaType;
  title: string;
  image: string;
  isCenter: boolean;
  onHover: () => void;
}

function AreaCard({ type, title, image, isCenter, onHover }: AreaCardProps) {
  return (
    <motion.div
      onMouseEnter={onHover}
      className="relative cursor-pointer overflow-hidden"
      initial={false}
      animate={{
        width: isCenter ? '616px' : '400px',
        height: isCenter ? '616px' : '556.275px',
        opacity: isCenter ? 1 : 0.6,
        y: isCenter ? 0 : 29.86,
      }}
      transition={{
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={image} />
        <div className="absolute bg-gradient-to-b from-[46.473%] from-[rgba(201,106,74,0)] inset-0 to-[#c96a4a]" />
      </div>
      <div className="absolute inset-0 content-stretch flex items-end justify-center px-[76.62px] py-[37.376px]">
        <motion.p
          className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-center text-white whitespace-pre-wrap"
          animate={{
            fontSize: isCenter ? '37.25px' : '33.638px',
          }}
          transition={{
            duration: 0.8,
            ease: [0.4, 0, 0.2, 1],
          }}
        >
          {title}
        </motion.p>
      </div>
    </motion.div>
  );
}

function AreasOfImpactContent() {
  const [centerArea, setCenterArea] = useState<AreaType>('orphan');

  const areas = [
    { type: 'elderly' as AreaType, title: 'Old Age Care', image: imgElderlyCareImage },
    { type: 'orphan' as AreaType, title: 'Orphan Care', image: imgOrphanSupportImage },
    { type: 'cancer' as AreaType, title: 'Cancer Care', image: imgHealthCareImage },
  ];

  return (
    <div className="h-[616px] relative shrink-0 w-[1418px] flex items-center justify-center gap-[1px]" data-name="Areas of Impact Content">
      {areas.map((area) => (
        <AreaCard
          key={area.type}
          type={area.type}
          title={area.title}
          image={area.image}
          isCenter={centerArea === area.type}
          onHover={() => setCenterArea(area.type)}
        />
      ))}
    </div>
  );
}

function Button() {
  return (
    <div className="bg-black content-stretch flex gap-[8px] items-center justify-center min-h-[40px] px-[24px] py-[10px] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#fafafa] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Get in Touch</p>
      </div>
    </div>
  );
}

export default function AreasOfImpact() {
  return (
    <div className="content-stretch flex flex-col gap-[60px] items-center justify-center pb-[60px] pt-[120px] px-[120px] relative size-full" data-name="Areas of Impact">
      <AreasOfImpactHeader />
      <AreasOfImpactContent />
      <Button />
    </div>
  );
}
