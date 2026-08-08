import imgHeroImage from "figma:asset/76aa191ae414ec4dd28c8558b9dc80afba3c9f0c.png";

function HeroImage() {
  return (
    <div className="content-stretch flex h-[539px] items-center justify-center overflow-clip px-[123px] py-[204px] relative shrink-0" data-name="Hero Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHeroImage} />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[54px] text-[rgba(255,255,255,0.8)] text-center w-[648px] whitespace-pre-wrap">Not everyone who suffers asks for help.</p>
    </div>
  );
}

export default function HeroSection() {
  return (
    <div className="content-stretch flex items-center justify-center p-[120px] relative size-full" data-name="Hero Section">
      <HeroImage />
    </div>
  );
}