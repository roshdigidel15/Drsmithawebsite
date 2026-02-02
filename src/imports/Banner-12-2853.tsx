import svgPaths from "./svg-gu3wi0s5tq";

function SocialMedia() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Social media">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_12_2877)" id="Social media">
          <path clipRule="evenodd" d={svgPaths.pdec5d00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_12_2877">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SocialMedia1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Social media">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_12_2880)" id="Social media">
          <path d={svgPaths.p14591b0} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_12_2880">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[0_0.06%_0.02%_0]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9906 15.9969">
        <g id="Group">
          <path d={svgPaths.p3a0a1c00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p3b619400} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p142cf280} fill="var(--fill-0, white)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function SocialMedia2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Social media">
      <Group />
    </div>
  );
}

function SocialMedia3() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Social media">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group">
          <path d={svgPaths.p114d3270} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SocialMediaIcons() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Social Media Icons">
      <SocialMedia />
      <SocialMedia1 />
      <SocialMedia2 />
      <SocialMedia3 />
    </div>
  );
}

export default function Banner() {
  return (
    <div className="bg-[#c96a4a] content-stretch flex items-center justify-between px-[120px] py-[12px] relative size-full" data-name="Banner">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[-0.2px] whitespace-nowrap" style={{ fontFeatureSettings: "'zero', 'cv01', 'cv02', 'cv03', 'cv04', 'cv07', 'cv10', 'cv11'" }}>
        <p className="leading-[1.5]">Healing Communities, Empowering People, Sustaining Nature...</p>
      </div>
      <SocialMediaIcons />
    </div>
  );
}