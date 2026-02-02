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

function ElderlyCareImage() {
  return (
    <div className="absolute content-stretch flex h-[556.275px] items-end justify-center left-[-178.32px] opacity-60 overflow-clip px-[76.62px] py-[37.376px] top-[29.86px]" data-name="Elderly Care Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgElderlyCareImage} />
        <div className="absolute bg-gradient-to-b from-[46.473%] from-[rgba(201,106,74,0)] inset-0 to-[#c96a4a]" />
      </div>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[33.638px] text-center text-white w-[403.657px] whitespace-pre-wrap">Old Age Care</p>
    </div>
  );
}

function OrphanSupportImage() {
  return (
    <div className="absolute content-stretch flex h-[616px] items-end justify-center left-[400.66px] overflow-clip px-[84.847px] py-[41.389px] top-0" data-name="Orphan Support Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgOrphanSupportImage} />
        <div className="absolute bg-gradient-to-b from-[46.473%] from-[rgba(201,106,74,0)] inset-0 to-[#c96a4a]" />
      </div>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[37.25px] text-center text-white w-[446.997px] whitespace-pre-wrap">Orphan Care</p>
    </div>
  );
}

function HealthCareImage() {
  return (
    <div className="absolute content-stretch flex h-[556.275px] items-end justify-center left-[1039.42px] opacity-60 overflow-clip px-[76.62px] py-[37.376px] top-[29.86px]" data-name="Health Care Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgHealthCareImage} />
        <div className="absolute bg-gradient-to-b from-[46.473%] from-[rgba(201,106,74,0)] inset-0 to-[#c96a4a]" />
      </div>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[33.638px] text-center text-white w-[403.657px] whitespace-pre-wrap">Cancer Care</p>
    </div>
  );
}

function AreasOfImpactContent() {
  return (
    <div className="h-[616px] relative shrink-0 w-[1418px]" data-name="Areas of Impact Content">
      <ElderlyCareImage />
      <OrphanSupportImage />
      <HealthCareImage />
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