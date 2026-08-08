import imgImage from "figma:asset/dd87a693bb9e73c9d9813338b7ec9c40cf07fd04.png";
import imgSmitaCutout from "figma:asset/854444cbaa710280b48748c24d651fddc0a08d15.png";
import { motion } from "motion/react";

function GoldenGlowCutout() {
  return (
    <motion.div
      className="relative shrink-0"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Ambient golden glow behind the cutout */}
      <motion.div
        className="absolute inset-[-30px] blur-[40px] z-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(218,165,32,0.25) 0%, rgba(255,200,60,0.12) 35%, rgba(201,106,74,0.08) 60%, transparent 85%)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.75, 0.4],
        }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Secondary shimmer layer */}
      <motion.div
        className="absolute inset-[-18px] blur-[25px] z-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255,215,0,0.18) 0%, rgba(218,165,32,0.08) 50%, transparent 80%)',
        }}
        animate={{
          scale: [1.05, 0.95, 1.05],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
      />

      {/* The cutout image with animated golden drop-shadow that traces the silhouette */}
      <motion.div
        className="relative z-10"
        animate={{
          filter: [
            'drop-shadow(0 0 8px rgba(218,165,32,0.4)) drop-shadow(0 0 20px rgba(218,165,32,0.25)) drop-shadow(0 0 40px rgba(255,200,60,0.15))',
            'drop-shadow(0 0 14px rgba(218,165,32,0.6)) drop-shadow(0 0 30px rgba(255,215,0,0.35)) drop-shadow(0 0 55px rgba(255,200,60,0.2))',
            'drop-shadow(0 0 8px rgba(218,165,32,0.4)) drop-shadow(0 0 20px rgba(218,165,32,0.25)) drop-shadow(0 0 40px rgba(255,200,60,0.15))',
          ],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <img
          alt="Dr. Smita Sharma"
          className="w-[320px] md:w-[380px] h-auto object-contain block"
          src={imgSmitaCutout}
        />
      </motion.div>

      {/* Orbiting golden sparkle dots around the image */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
        const radius = 180;
        const cx = Math.cos((angle * Math.PI) / 180) * radius;
        const cy = Math.sin((angle * Math.PI) / 180) * radius;
        return (
          <motion.div
            key={angle}
            className="absolute w-[4px] h-[4px] rounded-full z-20"
            style={{
              background: i % 2 === 0 ? '#DAA520' : '#FFD700',
              left: `calc(50% + ${cx}px - 2px)`,
              top: `calc(50% + ${cy}px - 2px)`,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 2.5,
              delay: i * 0.3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        );
      })}
    </motion.div>
  );
}

function FoundationBeliefText() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center justify-center relative shrink-0" data-name="Foundation Belief Text">
      <p className="font-['Delicious_Handrawn:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#c96a4a] text-[32px]">The essence</p>
      <GoldenGlowCutout />
    </div>
  );
}

export default function Image() {
  return (
    <div className="content-stretch flex flex-col lg:flex-row items-center justify-between gap-10 pb-[60px] pt-16 lg:pt-[120px] px-6 md:px-16 lg:px-[120px] relative size-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover opacity-20 pointer-events-none size-full" src={imgImage} />
      <FoundationBeliefText />
      <div className="font-['Inter:Medium',sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[24px] text-[rgba(0,0,0,0.65)] w-full lg:w-[625px] whitespace-pre-wrap">
        <p className="mb-0">
          <span className="leading-[normal] text-[#c96a4a]">Dr. Smita Sharma</span>
          <span className="leading-[normal]">{` was an educator by profession and a mentor by spirit.`}</span>
        </p>
        <p className="leading-[normal] mb-0">&nbsp;</p>
        <p className="leading-[normal] mb-0">A former Senior Associate Professor at LBSIM, New Delhi, she devoted nearly two decades to teaching not just subjects, but values — believing education was a way to awaken minds, shape character, and nurture humanity.</p>
        <p className="leading-[normal] mb-0">&nbsp;</p>
        <p className="leading-[normal]">This foundation exists to carry that philosophy beyond classrooms, into lives that need care, respect, and presence.</p>
      </div>
    </div>
  );
}