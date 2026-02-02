"use client"

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import imgScrollSectionImage4Content from "figma:asset/5165c358fbf71924dba59f5f8ba8817eb515259e.png";
import imgScrollSectionImage3 from "figma:asset/a03b382be48c481a0690b424f9d72e34b7bce05b.png";
import imgScrollSectionImage2Content from "figma:asset/1c5dd2ed31ad88a141deb4e641799e7f9d06c27f.png";
import imgScrollSectionImage1Content from "figma:asset/bf2078698f735a3325e526f6b5bcdc8533c35169.png";
import imgImage9 from "figma:asset/f5ba2f3badaf3611cd41ea4215032d33b9ce9ca4.png";
import imgWhatsAppImage20260131At123837Pm1 from "figma:asset/91400fe21c56b0760e37f741559a82189c716844.png";

interface ParallaxImageProps {
  image: string;
  index: number;
  scrollYProgress: any;
  speed: number;
  left: string;
  top: string;
  width: string;
  height: string;
  isHeroImage?: boolean;
}

function ParallaxImage({ 
  image, 
  index, 
  scrollYProgress, 
  speed, 
  left, 
  top, 
  width, 
  height,
  isHeroImage = false 
}: ParallaxImageProps) {
  
  if (isHeroImage) {
    // Hero image that becomes full bleed
    const scale = useTransform(
      scrollYProgress,
      [0.5, 0.8],
      [1, 3.5]
    );
    
    const y = useTransform(
      scrollYProgress,
      [0, 0.5, 0.8],
      [200 * speed, 0, -100]
    );

    const opacity = useTransform(
      scrollYProgress,
      [0, 0.15, 0.5, 0.8, 1],
      [0, 1, 1, 1, 1]
    );

    const borderRadius = useTransform(
      scrollYProgress,
      [0.5, 0.8],
      [12, 0]
    );

    return (
      <motion.div
        className="absolute overflow-hidden shadow-2xl"
        style={{
          left,
          top,
          width,
          height,
          y,
          scale,
          opacity,
          borderRadius,
          zIndex: 50,
          transformOrigin: 'center center',
        }}
      >
        <img 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover" 
          src={image} 
        />
        <motion.div 
          className="absolute bg-[rgba(159,184,160,0.15)] inset-0"
          style={{
            opacity: useTransform(scrollYProgress, [0.5, 0.8], [1, 0])
          }}
        />
      </motion.div>
    );
  }

  // Regular parallax images
  const y = useTransform(
    scrollYProgress,
    [0, 0.5, 0.8],
    [200 * speed, -100 * speed, -200 * speed]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.5, 0.7, 0.8],
    [0, 1, 1, 0.3, 0]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 0.8],
    [0.8, 1, 0.9]
  );

  return (
    <motion.div
      className="absolute rounded-lg overflow-hidden shadow-xl"
      style={{
        left,
        top,
        width,
        height,
        y,
        opacity,
        scale,
        zIndex: 10 + index,
      }}
    >
      <div className="relative w-full h-full">
        <img 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover" 
          src={image} 
        />
        <div className="absolute bg-[rgba(159,184,160,0.12)] inset-0" />
      </div>
    </motion.div>
  );
}

function ScrollSectionContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Define images with their parallax properties
  const images = [
    {
      src: imgScrollSectionImage1Content,
      left: '5%',
      top: '15%',
      width: '320px',
      height: '420px',
      speed: 1.5,
    },
    {
      src: imgScrollSectionImage3,
      left: '8%',
      top: '60%',
      width: '300px',
      height: '380px',
      speed: 1.2,
    },
    {
      src: imgScrollSectionImage4Content,
      left: '70%',
      top: '65%',
      width: '320px',
      height: '400px',
      speed: 0.6,
    },
    {
      src: imgWhatsAppImage20260131At123837Pm1,
      left: '32%',
      top: '70%',
      width: '340px',
      height: '420px',
      speed: 1.0,
    },
    {
      src: imgImage9,
      left: '68%',
      top: '8%',
      width: '350px',
      height: '450px',
      speed: 0.8,
    },
  ];

  // Hero image that becomes full bleed (using imgScrollSectionImage2Content)
  const heroImage = {
    src: imgScrollSectionImage2Content,
    left: '35%',
    top: '25%',
    width: '380px',
    height: '480px',
    speed: 0.5,
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[400vh]"
      data-name="Scroll Section Content"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-white">
        {/* Regular parallax images */}
        {images.map((img, index) => (
          <ParallaxImage
            key={index}
            image={img.src}
            index={index}
            scrollYProgress={scrollYProgress}
            speed={img.speed}
            left={img.left}
            top={img.top}
            width={img.width}
            height={img.height}
          />
        ))}
        
        {/* Hero image that becomes full bleed */}
        <ParallaxImage
          image={heroImage.src}
          index={images.length}
          scrollYProgress={scrollYProgress}
          speed={heroImage.speed}
          left={heroImage.left}
          top={heroImage.top}
          width={heroImage.width}
          height={heroImage.height}
          isHeroImage={true}
        />
      </div>
    </div>
  );
}

export default function ScrollSectionParallax() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative w-full bg-white" data-name="Scroll Section Parallax">
      <div className="pt-[120px] px-[120px] w-full text-center">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic text-[#626262] text-[32px] whitespace-pre-wrap">
          <span>Scroll to see the </span>
          <span className="text-[#c96a4a]">lives we walk beside.</span>
        </p>
      </div>
      <ScrollSectionContent />
    </div>
  );
}