import * as React from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { cn } from '@/lib/utils';

// Interface for the props of each individual icon.
interface IconProps {
  id: number;
  icon: React.FC<React.SVGProps<SVGSVGElement>> | React.FC<any>;
  className: string; // Used for custom positioning of the icon.
  style?: React.CSSProperties; // Optional inline styles for positioning
}

// Interface for the main hero component's props.
export interface FloatingIconsHeroProps {
  title: React.ReactNode;
  subtitle: string;
  memorialText?: string;
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

  // Motion values for the icon's position, with spring physics for smooth movement
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

        // If the cursor is close enough, repel the icon
        if (distance < 150) {
          const angle = Math.atan2(
            mouseY.current - (rect.top + rect.height / 2),
            mouseX.current - (rect.left + rect.width / 2)
          );
          // The closer the cursor, the stronger the repulsion
          const force = (1 - distance / 150) * 50;
          x.set(-Math.cos(angle) * force);
          y.set(-Math.sin(angle) * force);
        } else {
          // Return to original position when cursor is away
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
      {/* Inner wrapper for the continuous floating animation */}
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

const FloatingIconsHero = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & FloatingIconsHeroProps
>(({ className, title, subtitle, memorialText, primaryCta, secondaryCta, icons, backgroundImage, ...props }, ref) => {
  // Refs to track the raw mouse position
  const mouseX = React.useRef(0);
  const mouseY = React.useRef(0);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    mouseX.current = event.clientX;
    mouseY.current = event.clientY;
  };

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className={cn(
        'relative w-full h-[804px] flex items-center justify-center overflow-hidden bg-white',
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
          <a 
            href={primaryCta.href}
            className="bg-black text-[#fafafa] px-6 py-2.5 rounded-lg font-['Geist',sans-serif] font-medium text-[14px] hover:bg-gray-800 transition-colors w-full sm:w-auto"
          >
            {primaryCta.text}
          </a>
          {secondaryCta && (
            <a 
              href={secondaryCta.href}
              className="bg-white text-black px-6 py-2.5 rounded-lg font-['Geist',sans-serif] font-medium text-[14px] border border-black hover:bg-gray-50 transition-colors w-full sm:w-auto"
            >
              {secondaryCta.text}
            </a>
          )}
        </div>
      </div>
    </section>
  );
});

FloatingIconsHero.displayName = 'FloatingIconsHero';

export { FloatingIconsHero };