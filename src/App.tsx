import { FloatingIconsHero } from './components/FloatingIconsHero';
import SectionStats from './imports/SectionStats1';
import FoundationBelief from './imports/FoundationBelief';
import Image from './imports/Image';
import AreasOfImpact from './components/AreasOfImpactEnhanced';
import { HeroStackSection } from './components/HeroStackSection';
import HealingSection from './imports/HealingSection';
import ScrollSectionParallax from './components/ScrollSectionParallaxEnhanced';
import Features from './components/FeaturesEnhanced';
import Testimonial from './imports/Testimonial';
import LegacySection from './imports/HealingSection-12-2589';
import Footer from './imports/Footer';
import Banner from './imports/Banner-12-2853';
import Navbar from './imports/Navbar';
import svgPaths from "./imports/svg-fmod1xwf1y";
import imgHeaderIcon10Image from "figma:asset/38d7b2b81b9a45e8474e0d942dc35c087c9cc6c8.png";
import imgHeaderIcon6Image from "figma:asset/8590536e0bdd1f7e21f4ff737b9de77ecc708993.png";
import imgHeaderIcon5Image from "figma:asset/6091610efd2a62fe1ceeb8503d8f232c00f42f3e.png";
import imgHeaderLogoImage from "figma:asset/18d905bcbcbb93a201d9e52ecfa93ee27d877655.png";
import imgHeaderBackgroundImage from "figma:asset/d11ddf41dad5ca327f4091eb1c5edc1127bd1e43.png";
import imgImg12951 from "figma:asset/803ce0730442a16482031ad345eebb82a1d2cbc6.png";
import imgImg12811 from "figma:asset/d45a34fa7fdd3c94829a40587a815925648fb399.png";
import imgImg12991 from "figma:asset/fd8b77915c697515f27a7ba011d3fe7709eb33f5.png";

// Icon wrapper components that match the Figma design
const HeaderLogoIcon = () => (
  <div className="bg-[#dfcfcf] rounded-full size-[116px] flex items-center justify-center overflow-hidden">
    <img 
      src={imgHeaderLogoImage} 
      alt="" 
      className="w-[153.838px] h-[102.578px] object-cover scale-110"
    />
  </div>
);

const HeaderIcon1Component = () => (
  <div className="bg-[#dfcfcf] rounded-full size-[95px] flex items-center justify-center overflow-hidden">
    <img 
      src={imgHeaderIcon6Image} 
      alt="" 
      className="w-[63px] h-[95px] object-cover"
    />
  </div>
);

const HeaderIcon3Component = () => (
  <div className="bg-[#e3ebe4] rounded-full size-[112px] flex items-center justify-center overflow-hidden">
    <img 
      src={imgHeaderIcon10Image} 
      alt="" 
      className="w-[176.999px] h-[265.627px] object-cover scale-110"
    />
  </div>
);

const HeaderIcon5Component = () => (
  <div className="bg-[#e3ebe4] rounded-full size-[78px] flex items-center justify-center overflow-hidden">
    <img 
      src={imgHeaderIcon5Image} 
      alt="" 
      className="w-[55.702px] h-[90.774px] object-cover"
    />
  </div>
);

const HeaderIcon6Component = () => (
  <div className="bg-[#dfcfcf] rounded-full size-[64px] flex items-center justify-center overflow-hidden">
    <img 
      src={imgHeaderIcon6Image} 
      alt="" 
      className="w-[42.544px] h-[63.847px] object-cover"
    />
  </div>
);

export default function App() {
  const icons = [
    {
      id: 1,
      icon: HeaderLogoIcon,
      className: 'hidden xl:block',
      style: { left: 'calc(50% - 453px)', top: '47px' },
    },
    {
      id: 2,
      icon: HeaderIcon1Component,
      className: 'hidden xl:block',
      style: { left: 'calc(50% + 405px)', top: '63px' },
    },
    {
      id: 3,
      icon: HeaderIcon3Component,
      className: 'hidden xl:block',
      style: { left: 'calc(50% - 639px)', top: '304px' },
    },
    {
      id: 4,
      icon: HeaderIcon5Component,
      className: 'hidden xl:block',
      style: { left: 'calc(50% + 539px)', top: '305px' },
    },
    {
      id: 5,
      icon: HeaderIcon6Component,
      className: 'hidden xl:block',
      style: { left: 'calc(50% - 401px)', top: '472px' },
    },
  ];

  return (
    <div className="size-full bg-white">
      {/* Fixed Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 w-full">
        <Banner />
        <Navbar />
      </div>

      {/* Add padding to account for fixed nav height (approx 107px total) */}
      <div className="pt-[107px]">
        {/* Hero section wrapper - full width responsive */}
        <div className="relative w-full h-[864px] overflow-hidden">
          <FloatingIconsHero
            memorialText="In loving memory of Dr. Smitha Sharma"
            title={
              <>
                <span className="text-[#c96a4a]">Because every </span>
                <span className="text-[#9fb8a0]">breath</span>
                <br />
                <span className="text-[#c96a4a]">deserves </span>
                <span className="text-[#9fb8a0]">kindness.</span>
              </>
            }
            subtitle="Born in hospital corridors and shaped by lived experience, the Dr. Smitha Sharma Foundation exists to stand beside those facing cancer, aging alone, and silent suffering — with dignity, compassion, and presence."
            primaryCta={{
              text: "Walk through our journey",
              href: "#journey"
            }}
            secondaryCta={{
              text: "Volunteer with us",
              href: "#volunteer"
            }}
            icons={icons}
            backgroundImage={imgHeaderBackgroundImage}
          />
          
          {/* Bottom Lady Images - hidden on smaller screens */}
          <div className="hidden xl:block absolute inset-0 pointer-events-none">
            {/* Right image with border */}
            <div className="absolute" style={{ left: 'calc(50% + 233px)', top: '418px' }}>
              <div className="absolute h-[515px] w-[386px]" style={{ left: '5.76px' }}>
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg12951} />
              </div>
              <div className="absolute h-[425.276px] w-[376.565px]" style={{ top: '22.53px' }}>
                <div className="absolute inset-[-0.24%_-0.27%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 378.565 427.276">
                    <path d={svgPaths.p2ebeb2a} stroke="#C96A4A" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Center image with border */}
            <div className="absolute" style={{ left: 'calc(50% - 112px)', top: '549px' }}>
              <div className="absolute h-[330px] w-[256.947px]" style={{ left: '10.9px' }}>
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[124.58%] left-0 max-w-none top-[-0.08%] w-full" src={imgImg12811} />
                </div>
              </div>
              <div className="absolute flex h-[297.368px] items-center justify-center w-[268.02px]" style={{ top: '32.63px' }}>
                <div className="-scale-y-100 flex-none rotate-180">
                  <div className="h-[297.368px] relative w-[268.02px]">
                    <div className="absolute inset-[-0.31%_-0.35%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 269.885 299.232">
                        <path d={svgPaths.p1bbc0480} stroke="#C96A4A" strokeLinecap="round" strokeWidth="1.86441" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Left image with border */}
            <div className="absolute" style={{ left: 'calc(50% - 632px)', top: '296px' }}>
              <div className="absolute h-[621px] w-[525px]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[194.59%] left-[-12.3%] max-w-none top-[-12.42%] w-[144.08%]" src={imgImg12991} />
                </div>
              </div>
              <div className="absolute h-[427.151px] w-[325.809px]" style={{ left: '79px', top: '141px' }}>
                <div className="absolute inset-[-0.23%_-0.31%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 327.809 429.151">
                    <path d={svgPaths.p6bf2a00} stroke="#C96A4A" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div>
          <SectionStats />
        </div>
        
        {/* Foundation Belief Section */}
        <div>
          <FoundationBelief />
        </div>
        
        {/* The Essence Section */}
        <div>
          <Image />
        </div>
        
        {/* Areas of Impact Section */}
        <div>
          <AreasOfImpact />
        </div>
        
        {/* Hero Stack Section */}
        <div>
          <HeroStackSection />
        </div>
        
        {/* Healing Section */}
        <div>
          <HealingSection />
        </div>
        
        {/* Scroll Section Parallax */}
        <div>
          <ScrollSectionParallax />
        </div>
        
        {/* Features Section */}
        <div>
          <Features />
        </div>
        
        {/* Testimonial Section */}
        <div>
          <Testimonial />
        </div>
        
        {/* Legacy Section */}
        <div>
          <LegacySection />
        </div>
        
        {/* Footer Section */}
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}