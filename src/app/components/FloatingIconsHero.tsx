import { Link } from 'react-router';
import * as React from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { cn } from '@/lib/utils';

// Interface for the props of each individual icon.
interface IconProps {
  id: number;
  icon: React.FC<React.SVGProps<SVGSVGElement>> | React.FC<any>;
  className: string;
  style?: React.CSSProperties;
}

// Interface for the main hero component's props.
export interface FloatingIconsHeroProps {
  title: React.ReactNode;
  subtitle: string;
  memorialText?: string;
  founderPhoto?: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  icons: IconProps[];
  backgroundImage?: string;
  mobileLeftPhoto?: React.ReactNode;
  mobileRightPhoto?: React.ReactNode;
}

// A single icon component with its own motion logic
const Icon = ({
  mouseX,
  mouseY,
  iconData,
  index,
}: {
  mouseX: React.MutableRefObject<number>;
  mouseY: React.MutableRefObject<number>;
  iconData: IconProps;
  index: number;
}) => {
  const ref = React.useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  React.useEffect(() => {
    const handleMouseMove = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const distance = Math.sqrt(
          Math.pow(mouseX.current - (rect.left + rect.width / 2), 2) +
            Math.pow(mouseY.current - (rect.top + rect.height / 2), 2)
        );

        if (distance < 150) {
          const angle = Math.atan2(
            mouseY.current - (rect.top + rect.height / 2),
            mouseX.current - (rect.left + rect.width / 2)
          );
          const force = (1 - distance / 150) * 50;
          x.set(-Math.cos(angle) * force);
          y.set(-Math.sin(angle) * force);
        } else {
          x.set(0);
          y.set(0);
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y, mouseX, mouseY]);

  return (
    <motion.div
      ref={ref}
      key={iconData.id}
      style={{
        x: springX,
        y: springY,
        ...iconData.style,
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: index * 0.08,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn('absolute', iconData.className)}
    >
      <motion.div
        className="flex items-center justify-center rounded-full overflow-hidden"
        animate={{
          y: [0, -8, 0, 8, 0],
          x: [0, 6, 0, -6, 0],
          rotate: [0, 5, 0, -5, 0],
        }}
        transition={{
          duration: 5 + Math.random() * 5,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
        }}
      >
        <iconData.icon />
      </motion.div>
    </motion.div>
  );
};

// Floating particle — golden colored for mobile
const FloatingParticle = ({ delay, duration, x, size }: { delay: number; duration: number; x: number; size: number }) => (
  <motion.div
    className="absolute rounded-full"
    style={{
      width: size,
      height: size,
      left: `${x}%`,
      bottom: -10,
      background: `radial-gradient(circle, rgba(218,165,32,${0.3 + Math.random() * 0.3}) 0%, rgba(255,200,60,${0.2 + Math.random() * 0.2}) 100%)`,
    }}
    animate={{
      y: [0, -600],
      opacity: [0, 0.8, 0.6, 0],
      x: [0, Math.sin(x) * 30, Math.cos(x) * -20, Math.sin(x) * 15],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: 'easeOut',
    }}
  />
);

// Mobile Hero Content — cream background with small Figma photos on left/right
const MobileHeroContent = ({
  memorialText,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  mobileLeftPhoto,
  mobileRightPhoto,
}: {
  memorialText?: string;
  title: React.ReactNode;
  subtitle: string;
  primaryCta: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
  mobileLeftPhoto?: React.ReactNode;
  mobileRightPhoto?: React.ReactNode;
}) => {
  const particles = React.useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        id: i,
        delay: i * 0.8 + Math.random() * 2,
        duration: 6 + Math.random() * 4,
        x: 5 + Math.random() * 90,
        size: 3 + Math.random() * 5,
      })),
    []
  );

  return (
    <section className="relative w-full min-h-[600px] flex flex-col items-center justify-center overflow-hidden bg-[#FDF9F6] py-12 px-6">
      {/* Golden animated gradient orbs */}
      <motion.div
        className="absolute top-[-20%] left-[-30%] w-[70vw] h-[70vw] rounded-full blur-[80px]"
        style={{ background: 'radial-gradient(circle, rgba(218,165,32,0.15) 0%, rgba(255,200,60,0.08) 50%, transparent 70%)' }}
        animate={{
          x: [0, 30, -10, 20, 0],
          y: [0, -20, 15, -10, 0],
          scale: [1, 1.1, 0.95, 1.05, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-15%] right-[-25%] w-[60vw] h-[60vw] rounded-full blur-[70px]"
        style={{ background: 'radial-gradient(circle, rgba(218,165,32,0.12) 0%, rgba(255,200,60,0.06) 50%, transparent 70%)' }}
        animate={{
          x: [0, -25, 15, -20, 0],
          y: [0, 15, -25, 10, 0],
          scale: [1, 0.95, 1.1, 0.98, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-[40%] left-[20%] w-[40vw] h-[40vw] rounded-full blur-[60px]"
        style={{ background: 'radial-gradient(circle, rgba(218,165,32,0.08) 0%, transparent 70%)' }}
        animate={{
          x: [0, 20, -15, 0],
          y: [0, -15, 20, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Golden floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <FloatingParticle key={p.id} {...p} />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-[400px]">
        {/* Memorial text — golden colored */}
        {memorialText && (
          <motion.p
            className="font-['Delicious_Handrawn',sans-serif] text-[17px] mb-5"
            style={{
              background: 'linear-gradient(135deg, #DAA520, #C96A4A, #DAA520)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {memorialText}
          </motion.p>
        )}

        {/* Title */}
        <motion.h1
          className="font-['Inter',sans-serif] font-bold text-[32px] leading-[1.15] mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="font-['Inter',sans-serif] text-[#626262] text-[13px] leading-[1.6] mb-7 px-2"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {subtitle}
        </motion.p>

        {/* CTAs — black primary, white+black border secondary */}
        <motion.div
          className="flex flex-col gap-3 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            to={primaryCta.href}
            className="bg-black text-[#fafafa] px-6 py-3 rounded-lg font-['Geist',sans-serif] font-medium text-[14px] text-center shadow-md hover:bg-gray-800 transition-all"
          >
            {primaryCta.text}
          </Link>
          {secondaryCta && (
            <Link
              to={secondaryCta.href}
              className="bg-white text-black px-6 py-3 rounded-lg font-['Geist',sans-serif] font-medium text-[14px] border border-black text-center hover:bg-gray-50 transition-all"
            >
              {secondaryCta.text}
            </Link>
          )}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-8 flex flex-col items-center gap-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.6 }}
        >
          <motion.span
            className="font-['Inter',sans-serif] text-[10px] text-[#c96a4a]/60 tracking-[2px] uppercase"
          >
            Scroll
          </motion.span>
          <motion.div
            className="w-[1px] h-[20px] bg-gradient-to-b from-[#c96a4a]/40 to-transparent"
            animate={{ scaleY: [0.5, 1, 0.5], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>

      {/* Small Figma photos with SVG borders — bottom-left and bottom-right, not overlapping content */}
      {mobileLeftPhoto && (
        <motion.div
          className="absolute bottom-4 left-2 pointer-events-none z-[1]"
          style={{ width: 186, height: 220, transformOrigin: 'bottom left' }}
          initial={{ opacity: 0, scale: 0, x: -30 }}
          animate={{ opacity: 0.8, scale: 0.5, x: 0 }}
          transition={{ duration: 1, delay: 1.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {mobileLeftPhoto}
        </motion.div>
      )}
      {mobileRightPhoto && (
        <motion.div
          className="absolute bottom-4 right-2 pointer-events-none z-[1]"
          style={{ width: 159, height: 195, transformOrigin: 'bottom right' }}
          initial={{ opacity: 0, scale: 0, x: 30 }}
          animate={{ opacity: 0.8, scale: 0.5, x: 0 }}
          transition={{ duration: 1, delay: 2, ease: [0.22, 1, 0.36, 1] }}
        >
          {mobileRightPhoto}
        </motion.div>
      )}
    </section>
  );
};

const FloatingIconsHero = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & FloatingIconsHeroProps
>(({ className, title, subtitle, memorialText, founderPhoto, primaryCta, secondaryCta, icons, backgroundImage, mobileLeftPhoto, mobileRightPhoto, ...props }, ref) => {
  const mouseX = React.useRef(0);
  const mouseY = React.useRef(0);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    mouseX.current = event.clientX;
    mouseY.current = event.clientY;
  };

  return (
    <>
      {/* Mobile Hero */}
      <div className="md:hidden">
        <MobileHeroContent
          memorialText={memorialText}
          title={title}
          subtitle={subtitle}
          primaryCta={primaryCta}
          secondaryCta={secondaryCta}
          mobileLeftPhoto={mobileLeftPhoto}
          mobileRightPhoto={mobileRightPhoto}
        />
      </div>

      {/* Desktop Hero — ORIGINAL, UNTOUCHED */}
      <section
        ref={ref}
        onMouseMove={handleMouseMove}
        className={cn(
          'relative w-full h-[804px] hidden md:flex items-center justify-center overflow-hidden bg-white',
          className
        )}
        {...props}
      >
        {/* Background Image */}
        {backgroundImage && (
          <div className="absolute inset-0 w-full h-full">
            <img
              src={backgroundImage}
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none scale-110"
            />
          </div>
        )}

        {/* Container for the background floating icons */}
        <div className="absolute inset-0 w-full h-full">
          {icons.map((iconData, index) => (
            <Icon
              key={iconData.id}
              mouseX={mouseX}
              mouseY={mouseY}
              iconData={iconData}
              index={index}
            />
          ))}
        </div>

        {/* Container for the foreground content */}
        <div className="relative z-10 text-center px-4 max-w-[588px] mx-auto -mt-[60px]">
          {memorialText && (
            <p className="font-['Delicious_Handrawn',sans-serif] text-[#c96a4a] text-[18px] md:text-[20px] mb-1">
              {memorialText}
            </p>
          )}

          <h1 className="font-['Inter',sans-serif] font-bold text-[36px] md:text-[48px] xl:text-[54px] leading-[1.2] mb-4">
            {title}
          </h1>
          <p className="font-['Inter',sans-serif] text-[#626262] text-[14px] md:text-[16px] leading-normal mb-8">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-2 items-center justify-center mb-[60px]">
            <Link
              to={primaryCta.href}
              className="bg-black text-[#fafafa] px-6 py-2.5 rounded-lg font-['Geist',sans-serif] font-medium text-[14px] hover:bg-gray-800 transition-colors w-full sm:w-auto text-center"
            >
              {primaryCta.text}
            </Link>
            {secondaryCta && (
              <Link
                to={secondaryCta.href}
                className="bg-white text-black px-6 py-2.5 rounded-lg font-['Geist',sans-serif] font-medium text-[14px] border border-black hover:bg-gray-50 transition-colors w-full sm:w-auto text-center"
              >
                {secondaryCta.text}
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  );
});

FloatingIconsHero.displayName = 'FloatingIconsHero';

export { FloatingIconsHero };