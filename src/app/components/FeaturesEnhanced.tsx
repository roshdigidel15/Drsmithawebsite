"use client"

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HeartHandshake, GraduationCap, Stethoscope, Apple } from 'lucide-react';

function HowWeHelpTitle() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="How We Help Title">
      <div className="flex flex-col font-['Delicious_Handrawn:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#c96a4a] text-[32px] tracking-[-1.5px] whitespace-nowrap" style={{ fontFeatureSettings: "'zero'" }}>
        <p className="leading-[1.2]">How We Help Others</p>
      </div>
    </div>
  );
}

interface HowWeHelpImageProps {
  image: string;
  direction: number;
}

function HowWeHelpImage({ image, direction }: HowWeHelpImageProps) {
  return (
    <div className="bg-[#f5f5f5] w-full lg:flex-[1_0_0] h-[280px] md:h-[550px] min-h-px min-w-px overflow-clip relative rounded-[20px]" data-name="How We Help Image">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div 
          className="absolute inset-0 md:h-[550px] md:left-[-39px] md:top-0 md:w-[657px]" 
          data-name="How We Help Image Content"
          key={image}
          initial={{ 
            opacity: 0, 
            scale: 1.12, 
            x: direction * 50,
            filter: 'blur(6px)',
          }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            x: 0,
            filter: 'blur(0px)',
          }}
          exit={{ 
            opacity: 0, 
            scale: 0.93,
            x: direction * -30,
            filter: 'blur(4px)',
          }}
          transition={{ 
            duration: 0.7, 
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <motion.img 
              alt="" 
              className="absolute max-w-none object-cover size-full" 
              src={image}
              animate={{
                scale: [1, 1.05],
                x: [0, -6],
              }}
              transition={{
                duration: 8,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
            <div className="absolute bg-[rgba(159,184,160,0.15)] inset-0" />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// --- Desktop ServiceCard: ORIGINAL design, untouched ---
interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  isSelected: boolean;
  onClick: () => void;
  index: number;
}

function ServiceCard({ title, description, isSelected, onClick, index }: ServiceCardProps) {
  return (
    <motion.div
      onClick={onClick}
      className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full cursor-pointer p-4 rounded-lg transition-all"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1] 
      }}
      whileHover={{
        scale: 1.02,
      }}
      data-name={title}
    >
      <motion.div
        className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[24px] tracking-[-0.5px] w-full"
        style={{ fontFeatureSettings: "'zero', 'cv01', 'cv02', 'cv03', 'cv04', 'cv07', 'cv10', 'cv11'" }}
        animate={{
          color: isSelected ? '#c96a4a' : '#171717',
          opacity: isSelected ? 1 : 0.6,
        }}
        transition={{ duration: 0.3 }}
      >
        <p className="leading-[1.5] whitespace-pre-wrap">{title}</p>
      </motion.div>
      <motion.div 
        className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#626262] text-[16px] tracking-[-0.3px] w-full" 
        style={{ fontFeatureSettings: "'zero', 'cv01', 'cv02', 'cv03', 'cv04', 'cv07', 'cv10', 'cv11'" }}
        animate={{
          opacity: isSelected ? 1 : 0.5,
        }}
        transition={{ duration: 0.3 }}
      >
        <p className="leading-[1.5] whitespace-pre-wrap">{description}</p>
      </motion.div>
    </motion.div>
  );
}

// --- Mobile Icon Box ---
interface MobileIconBoxProps {
  service: Service;
  isSelected: boolean;
  onClick: () => void;
  index: number;
}

function MobileIconBox({ service, isSelected, onClick, index }: MobileIconBoxProps) {
  const Icon = service.icon;
  return (
    <motion.button
      onClick={onClick}
      className="relative flex flex-col items-center justify-center gap-2 p-3 rounded-2xl cursor-pointer overflow-hidden"
      initial={{ opacity: 0, y: 16, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileTap={{ scale: 0.96 }}
      style={{
        background: isSelected
          ? 'linear-gradient(135deg, rgba(201,106,74,0.12), rgba(201,106,74,0.05))'
          : 'rgba(255,255,255,0.7)',
        border: isSelected ? '2px solid rgba(201,106,74,0.35)' : '2px solid rgba(0,0,0,0.06)',
        boxShadow: isSelected
          ? '0 4px 20px rgba(201,106,74,0.15), 0 1px 3px rgba(0,0,0,0.05)'
          : '0 1px 4px rgba(0,0,0,0.04)',
      }}
    >
      {isSelected && (
        <motion.div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: 'radial-gradient(circle at center, rgba(201,106,74,0.08) 0%, transparent 70%)',
          }}
          animate={{ scale: [1, 1.05, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}
      <motion.div
        className="relative z-10 flex items-center justify-center w-10 h-10 rounded-xl"
        style={{
          background: isSelected
            ? 'linear-gradient(135deg, #c96a4a, #d4845e)'
            : 'rgba(159,184,160,0.15)',
        }}
        animate={{ scale: isSelected ? 1 : 0.92 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <Icon size={20} strokeWidth={1.8} color={isSelected ? '#ffffff' : '#9FB8A0'} />
      </motion.div>
      <motion.span
        className="relative z-10 font-['Inter',sans-serif] font-medium text-[11px] leading-[1.2] text-center"
        animate={{ color: isSelected ? '#c96a4a' : '#888888' }}
        transition={{ duration: 0.3 }}
      >
        {service.shortTitle}
      </motion.span>
    </motion.button>
  );
}

// --- Mobile detail card ---
function MobileServiceDetail({ service }: { service: Service }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={service.id}
        className="w-full"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <h3 className="font-['Inter',sans-serif] font-medium text-[20px] tracking-[-0.3px] text-[#171717] mb-2">
          {service.title}
        </h3>
        <p className="font-['Inter',sans-serif] text-[#626262] text-[14px] leading-[1.6]">
          {service.description}
        </p>
      </motion.div>
    </AnimatePresence>
  );
}

// --- Progress dots ---
function ProgressDots({ activeIndex, total }: { activeIndex: number; total: number }) {
  return (
    <div className="flex items-center justify-center gap-2 mt-3">
      {Array.from({ length: total }).map((_, i) => (
        <motion.div
          key={i}
          className="rounded-full"
          animate={{
            width: i === activeIndex ? 20 : 6,
            height: 6,
            backgroundColor: i === activeIndex ? '#c96a4a' : 'rgba(201,106,74,0.2)',
          }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        />
      ))}
    </div>
  );
}

interface Service {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  image: string;
  icon: typeof HeartHandshake;
}

const services: Service[] = [
  {
    id: 'cancer',
    title: 'Providing cancer patients with hope',
    shortTitle: 'Cancer Care',
    description: 'Standing beside those facing cancer with compassion, presence, and practical support — because no one should fight alone.',
    image: 'https://drsmitasharmafoundation.com/images/page/Image1762950361.webp',
    icon: HeartHandshake,
  },
  {
    id: 'education',
    title: 'Education & Childhood Care',
    shortTitle: 'Education',
    description: 'Creating safe, supportive spaces where children can learn, grow, and imagine a better future through scholarships and mentorship.',
    image: 'https://drsmitasharmafoundation.com/images/page/Image1762950414.webp',
    icon: GraduationCap,
  },
  {
    id: 'healthcare',
    title: 'Accessible Healthcare',
    shortTitle: 'Healthcare',
    description: 'Bringing timely medical care, preventive support, and health awareness to communities with limited access through free camps and mobile clinics.',
    image: 'https://drsmitasharmafoundation.com/images/causes1.jpg',
    icon: Stethoscope,
  },
  {
    id: 'nutrition',
    title: 'Nutrition & Wellbeing',
    shortTitle: 'Nutrition',
    description: 'Ensuring nutritious food reaches those in need — nourishing bodies, uplifting spirits, and fostering a more compassionate society.',
    image: 'https://drsmitasharmafoundation.com/images/page/1761995368solve3.png',
    icon: Apple,
  },
];

function HowWeHelpTextContent() {
  const [selectedService, setSelectedService] = useState<string>('cancer');
  const [direction, setDirection] = useState(1);
  const timerRef = useRef<ReturnType<typeof setInterval>>();

  const resetAutoRotate = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setSelectedService((current) => {
        const currentIndex = services.findIndex(s => s.id === current);
        const nextIndex = (currentIndex + 1) % services.length;
        setDirection(1);
        return services[nextIndex].id;
      });
    }, 4000);
  }, []);

  useEffect(() => {
    resetAutoRotate();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [resetAutoRotate]);

  const handleSelect = (id: string) => {
    const currentIndex = services.findIndex(s => s.id === selectedService);
    const nextIndex = services.findIndex(s => s.id === id);
    setDirection(nextIndex > currentIndex ? 1 : -1);
    setSelectedService(id);
    resetAutoRotate();
  };

  const currentService = services.find(s => s.id === selectedService) || services[0];
  const currentIndex = services.findIndex(s => s.id === selectedService);

  return (
    <>
      <HowWeHelpImage image={currentService.image} direction={direction} />

      {/* MOBILE ONLY: Icon box grid + selected detail */}
      <div className="flex flex-col gap-5 w-full lg:hidden">
        <div className="grid grid-cols-4 gap-2">
          {services.map((service, index) => (
            <MobileIconBox
              key={service.id}
              service={service}
              isSelected={selectedService === service.id}
              onClick={() => handleSelect(service.id)}
              index={index}
            />
          ))}
        </div>
        <MobileServiceDetail service={currentService} />
        <ProgressDots activeIndex={currentIndex} total={services.length} />
      </div>

      {/* DESKTOP ONLY: Original stacked text cards — unchanged */}
      <div className="hidden lg:flex flex-col lg:flex-[1_0_0] items-start lg:justify-between w-full lg:self-stretch" data-name="How We Help Text Content">
        {services.map((service, index) => (
          <ServiceCard
            key={service.id}
            id={service.id}
            title={service.title}
            description={service.description}
            isSelected={selectedService === service.id}
            onClick={() => handleSelect(service.id)}
            index={index}
          />
        ))}
      </div>
    </>
  );
}

function HowWeHelpContent() {
  return (
    <div className="relative content-stretch flex flex-col lg:flex-row gap-6 lg:gap-[40px] items-start shrink-0 w-full" data-name="How We Help Content">
      <HowWeHelpTextContent />
    </div>
  );
}

export default function Features() {
  return (
    <div className="bg-[rgba(159,184,160,0.1)] content-stretch flex flex-col gap-12 md:gap-[80px] items-center justify-center p-6 md:p-16 lg:p-[120px] relative w-full" style={{ zIndex: 2 }} data-name="features">
      <HowWeHelpTitle />
      <HowWeHelpContent />
    </div>
  );
}