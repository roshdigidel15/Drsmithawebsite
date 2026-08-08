"use client"

import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import imgElderlyCareImage from "figma:asset/5c37520e0917cdc1be32333e804503a84b8319ff.png";
import imgOrphanSupportImage from "figma:asset/862f67372ad136af2a08dcc82118ef0a925c5a8f.png";
import imgHealthCareImage from "figma:asset/ec8bbeaab40ab866e5e4fcd5878d62afb5262b23.png";

function AreasOfImpactHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center leading-[normal] not-italic relative shrink-0 text-center w-full" data-name="Areas of Impact Header">
      <p className="font-['Delicious_Handrawn:Regular',sans-serif] relative shrink-0 text-[#c96a4a] text-[28px] md:text-[32px]">Areas of Impact</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#626262] text-[15px] md:text-[16px] max-w-[330px] whitespace-pre-wrap">We work at the intersection of care, dignity, and everyday humanity.</p>
    </div>
  );
}

type AreaType = 'elderly' | 'orphan' | 'cancer';

interface AreaCardProps {
  type: AreaType;
  title: string;
  description: string;
  image: string;
  href: string;
  isCenter: boolean;
  onHover: () => void;
}

// Desktop: expanding accordion-style cards
function DesktopAreaCard({ title, image, href, isCenter, onHover }: AreaCardProps) {
  return (
    <Link to={href}>
      <motion.div
        onMouseEnter={onHover}
        className="relative cursor-pointer overflow-hidden rounded-lg w-full"
        initial={false}
        animate={{
          flex: isCenter ? 1.5 : 1,
          height: isCenter ? '500px' : '450px',
          opacity: isCenter ? 1 : 0.7,
        }}
        transition={{
          duration: 0.8,
          ease: [0.4, 0, 0.2, 1],
        }}
      >
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <motion.img
            alt=""
            className="absolute max-w-none object-cover size-full"
            src={image}
            animate={{ scale: isCenter ? 1.05 : 1 }}
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          />
          <div className="absolute bg-gradient-to-b from-[46.473%] from-[rgba(201,106,74,0)] inset-0 to-[#c96a4a]" />
        </div>
        <div className="absolute inset-0 content-stretch flex flex-col items-center justify-end px-6 md:px-12 py-[37.376px] gap-3">
          <motion.p
            className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-center text-white whitespace-pre-wrap"
            animate={{
              fontSize: isCenter ? '32px' : '24px',
            }}
            transition={{
              duration: 0.8,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            {title}
          </motion.p>
          <motion.span
            className="text-white/80 font-['Inter',sans-serif] text-[13px] tracking-wide uppercase"
            animate={{ opacity: isCenter ? 1 : 0, y: isCenter ? 0 : 8 }}
            transition={{ duration: 0.4 }}
          >
            Learn more →
          </motion.span>
        </div>
      </motion.div>
    </Link>
  );
}

// Mobile: stacked full-width cards with description
function MobileAreaCard({ title, description, image, href }: AreaCardProps) {
  return (
    <Link to={href}>
      <motion.div
        className="relative overflow-hidden rounded-xl w-full h-[280px] group"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5 }}
      >
        <img
          alt=""
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          src={image}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <p className="font-['Inter:Bold',sans-serif] font-bold text-white text-[22px] mb-2">
            {title}
          </p>
          <p className="font-['Inter',sans-serif] text-white/70 text-[13px] leading-[1.6] line-clamp-2">
            {description}
          </p>
          <span className="font-['Inter',sans-serif] text-[#e8a88e] text-[12px] tracking-wide uppercase mt-3">
            Learn more →
          </span>
        </div>
      </motion.div>
    </Link>
  );
}

function AreasOfImpactContent() {
  const [centerArea, setCenterArea] = useState<AreaType>('orphan');

  const areas = [
    { type: 'elderly' as AreaType, title: 'Old Age Care', description: 'Ensuring dignity, comfort and holistic care for senior citizens through day-care, wellness, and companionship programs.', image: imgElderlyCareImage, href: '/cause/elderly-care' },
    { type: 'orphan' as AreaType, title: 'Orphan Care', description: 'Every child deserves love, protection and the opportunity to dream freely — we provide shelter, education, and emotional support.', image: imgOrphanSupportImage, href: '/cause/orphan-support' },
    { type: 'cancer' as AreaType, title: 'Cancer Care', description: 'Making essential healthcare accessible through community-driven free medical camps, telemedicine, and preventive programs.', image: imgHealthCareImage, href: '/cause/healthcare' },
  ];

  return (
    <>
      {/* Desktop: expanding accordion */}
      <div className="hidden md:flex w-full items-center justify-center gap-[1px]" data-name="Areas of Impact Content">
        {areas.map((area) => (
          <DesktopAreaCard
            key={area.type}
            type={area.type}
            title={area.title}
            description={area.description}
            image={area.image}
            href={area.href}
            isCenter={centerArea === area.type}
            onHover={() => setCenterArea(area.type)}
          />
        ))}
      </div>

      {/* Mobile: stacked cards */}
      <div className="flex md:hidden flex-col gap-4 w-full">
        {areas.map((area) => (
          <MobileAreaCard
            key={area.type}
            type={area.type}
            title={area.title}
            description={area.description}
            image={area.image}
            href={area.href}
            isCenter={false}
            onHover={() => {}}
          />
        ))}
      </div>
    </>
  );
}

export default function AreasOfImpact() {
  return (
    <div className="content-stretch flex flex-col gap-10 md:gap-[60px] items-center justify-center pb-[60px] pt-16 md:pt-[120px] px-4 md:px-8 lg:px-12 relative size-full" data-name="Areas of Impact">
      <AreasOfImpactHeader />
      <AreasOfImpactContent />
      <Link
        to="/contact"
        className="bg-black content-stretch flex gap-[8px] items-center justify-center min-h-[40px] px-[24px] py-[10px] relative rounded-[8px] shrink-0 hover:bg-[rgba(0,0,0,0.85)] transition-colors"
      >
        <span className="font-['Geist:Medium',sans-serif] font-medium text-[#fafafa] text-[14px] text-center leading-[20px]">
          Get in Touch
        </span>
      </Link>
    </div>
  );
}