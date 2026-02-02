"use client"

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import imgHowWeHelpImageContent from "figma:asset/94a14b702aaeb73c6ea6b9e4ac0aeed788f5c9be.png";

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
}

function HowWeHelpImage({ image }: HowWeHelpImageProps) {
  return (
    <div className="bg-[#f5f5f5] flex-[1_0_0] h-[550px] min-h-px min-w-px overflow-clip relative rounded-[20px]" data-name="How We Help Image">
      <motion.div 
        className="absolute h-[550px] left-[-39px] top-0 w-[657px]" 
        data-name="How We Help Image Content"
        key={image}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ 
          duration: 0.6, 
          ease: [0.43, 0.13, 0.23, 0.96]
        }}
      >
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={image} />
          <div className="absolute bg-[rgba(159,184,160,0.2)] inset-0" />
        </div>
      </motion.div>
    </div>
  );
}

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  isSelected: boolean;
  onClick: () => void;
}

function ServiceCard({ title, description, isSelected, onClick }: ServiceCardProps) {
  return (
    <motion.div
      onClick={onClick}
      className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full cursor-pointer p-4 rounded-lg transition-all"
      initial={false}
      animate={{
        opacity: isSelected ? 1 : 0.6,
      }}
      whileHover={{
        opacity: 1,
        scale: 1.02,
      }}
      transition={{ duration: 0.3 }}
      data-name={title}
    >
      <motion.div
        className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[24px] tracking-[-0.5px] w-full"
        style={{ fontFeatureSettings: "'zero', 'cv01', 'cv02', 'cv03', 'cv04', 'cv07', 'cv10', 'cv11'" }}
        animate={{
          color: isSelected ? '#c96a4a' : '#171717',
        }}
        transition={{ duration: 0.3 }}
      >
        <p className="leading-[1.5] whitespace-pre-wrap">{title}</p>
      </motion.div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#626262] text-[16px] tracking-[-0.3px] w-full" style={{ fontFeatureSettings: "'zero', 'cv01', 'cv02', 'cv03', 'cv04', 'cv07', 'cv10', 'cv11'" }}>
        <p className="leading-[1.5] whitespace-pre-wrap">{description}</p>
      </div>
    </motion.div>
  );
}

interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

function HowWeHelpTextContent() {
  const services: Service[] = [
    {
      id: 'cancer',
      title: 'Providing cancer patient with hope',
      description: 'Providing access to safe drinking water and promoting hygiene to protect health and prevent disease.',
      image: 'https://images.unsplash.com/photo-1648964388258-e71b58683ed0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjYW5jZXIlMjBwYXRpZW50JTIwaG9zcGl0YWwlMjBpbmRpYXxlbnwxfHx8fDE3NzAwMjE4OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 'education',
      title: 'Education & Childhood Care',
      description: 'Creating safe, supportive spaces where children can learn, grow, and imagine a better future.',
      image: 'https://images.unsplash.com/flagged/photo-1574097656146-0b43b7660cb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjaGlsZHJlbiUyMGVkdWNhdGlvbiUyMHNjaG9vbCUyMGluZGlhfGVufDF8fHx8MTc3MDAyMTg5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 'healthcare',
      title: 'Accessible Healthcare',
      description: 'Bringing timely medical care, preventive support, and health awareness to communities with limited access.',
      image: 'https://images.unsplash.com/photo-1741769766414-188500c6d143?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBoZWFsdGhjYXJlJTIwZG9jdG9yJTIwbWVkaWNhbCUyMGluZGlhfGVufDF8fHx8MTc3MDAyMTg5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 'nutrition',
      title: 'Nutrition & Wellbeing',
      description: 'Ensuring nutritious food reaches those in need, supporting both physical health and human dignity.',
      image: 'https://images.unsplash.com/photo-1708146646005-30597857a7c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmb29kJTIwbnV0cml0aW9uJTIwaGVhbHRoeSUyMGluZGlhfGVufDF8fHx8MTc3MDAyMTg5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  const [selectedService, setSelectedService] = useState<string>('cancer');
  
  // Auto-rotate through services every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedService((current) => {
        const currentIndex = services.findIndex(s => s.id === current);
        const nextIndex = (currentIndex + 1) % services.length;
        return services[nextIndex].id;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const currentService = services.find(s => s.id === selectedService) || services[0];

  return (
    <>
      <HowWeHelpImage image={currentService.image} />
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between leading-[0] min-h-px min-w-px not-italic relative self-stretch" data-name="How We Help Text Content">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            id={service.id}
            title={service.title}
            description={service.description}
            isSelected={selectedService === service.id}
            onClick={() => setSelectedService(service.id)}
          />
        ))}
      </div>
    </>
  );
}

function HowWeHelpContent() {
  return (
    <div className="content-stretch flex gap-[40px] items-start relative shrink-0 w-full" data-name="How We Help Content">
      <HowWeHelpTextContent />
    </div>
  );
}

export default function Features() {
  return (
    <div className="bg-[rgba(159,184,160,0.1)] content-stretch flex flex-col gap-[80px] items-center justify-center p-[120px] relative size-full" data-name="features">
      <HowWeHelpTitle />
      <HowWeHelpContent />
    </div>
  );
}