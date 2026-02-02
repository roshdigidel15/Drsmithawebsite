import svgPaths from "./svg-wefawe1wal";
import imgFooterLogo from "figma:asset/c51118b692a5ee01203918025e2cacc3e384072f.png";
import imgImg12941 from "figma:asset/78525f701fe10aa23974873a6a5a7ed52ba785d1.png";

function CompanyLinksColumn() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[88px]" data-name="Company Links Column 1">
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[1.5] whitespace-pre-wrap">Home</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[1.5] whitespace-pre-wrap">About us</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[1.5] whitespace-pre-wrap">Our Work</p>
      </div>
    </div>
  );
}

function CompanyLinksColumn1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative" data-name="Company Links Column 2">
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[1.5] whitespace-pre-wrap">{`News & Events`}</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[1.5] whitespace-pre-wrap">Join Us</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[1.5] whitespace-pre-wrap">Contact</p>
      </div>
    </div>
  );
}

function CompanyLinksContainer() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[12px] items-start relative shrink-0 text-[#626262] w-[244px]" data-name="Company Links Container">
      <CompanyLinksColumn />
      <CompanyLinksColumn1 />
    </div>
  );
}

function CompanyLinks() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic relative shrink-0 text-[14px] tracking-[-0.2px]" data-name="Company Links">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center min-w-full relative shrink-0 text-[rgba(0,0,0,0.65)] w-[min-content]">
        <p className="leading-[20px] whitespace-pre-wrap">Company</p>
      </div>
      <CompanyLinksContainer />
    </div>
  );
}

function LucideMapPin() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="lucide/map-pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="lucide/map-pin">
          <g id="Vector">
            <path d={svgPaths.p18b47100} stroke="var(--stroke-0, #C96A4A)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p434b400} stroke="var(--stroke-0, #C96A4A)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Address() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Address">
      <LucideMapPin />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#626262] text-[14px] tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[1.5]">Delhi</p>
      </div>
    </div>
  );
}

function LucidePhone() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="lucide/phone">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_12_2669)" id="lucide/phone">
          <path d={svgPaths.p2a5c800} id="Vector" stroke="var(--stroke-0, #C96A4A)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_12_2669">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Phone() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Phone">
      <LucidePhone />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#626262] text-[14px] tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[1.5]">+91-9211483939</p>
      </div>
    </div>
  );
}

function LucideMail() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="lucide/mail">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="lucide/mail">
          <path d={svgPaths.p10945e80} id="Vector" stroke="var(--stroke-0, #C96A4A)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Email() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Email">
      <LucideMail />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#626262] text-[14px] tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[1.5]">drsmitasharmafoundation@outlook.com</p>
      </div>
    </div>
  );
}

function ContactDetails() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-name="Contact Details">
      <Address />
      <Phone />
      <Email />
    </div>
  );
}

function ContactInfo() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Contact Info">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.65)] tracking-[-0.2px] w-[min-content]">
        <p className="leading-[20px] whitespace-pre-wrap">Contact</p>
      </div>
      <ContactDetails />
    </div>
  );
}

function FooterLinksContainer() {
  return (
    <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-[670px]" data-name="Footer Links Container">
      <CompanyLinks />
      <ContactInfo />
    </div>
  );
}

function FooterLeftColumn() {
  return (
    <div className="content-stretch flex flex-col items-start justify-between relative self-stretch shrink-0" data-name="Footer Left Column">
      <div className="h-[76.847px] relative shrink-0 w-[290.922px]" data-name="Footer Logo">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFooterLogo} />
      </div>
      <FooterLinksContainer />
    </div>
  );
}

function BannerText() {
  return (
    <div className="h-[144px] overflow-clip relative shrink-0 w-[108.298px]" data-name="Banner Text">
      <div className="absolute flex items-center justify-center left-0 size-[150px] top-[-0.23px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="relative size-[150px]" data-name="IMG_1294 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[133.53%] left-[-0.28%] max-w-none top-[-21.1%] w-[100.14%]" src={imgImg12941} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-[40px] min-w-px relative rounded-[8px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center min-h-[inherit] px-[24px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#ddd] text-[14px] text-center whitespace-nowrap">
            <p className="leading-[20px]">meeramodi@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center justify-center min-h-[40px] px-[24px] py-[10px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.65)] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.65)] text-center whitespace-nowrap">
        <p className="leading-[20px]">Walk with us!</p>
      </div>
    </div>
  );
}

function InputButton() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Input+Button">
      <Button />
      <Button1 />
    </div>
  );
}

function SubscribeInput() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[372px]" data-name="Subscribe input">
      <InputButton />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#ababab] text-[12px] w-full whitespace-pre-wrap" style={{ fontFeatureSettings: "'zero', 'cv01', 'cv02', 'cv03', 'cv04', 'cv07', 'cv10', 'cv11'" }}>
        Be part of non-monetary support that brings dignity and strength to care.
      </p>
    </div>
  );
}

function SocialMediaIcons() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Social Media Icons">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-w-full not-italic relative shrink-0 text-[#c96a4a] text-[14px] tracking-[-0.2px] w-[min-content] whitespace-pre-wrap">Carry a legacy of care forward.</p>
      <SubscribeInput />
    </div>
  );
}

function JoinCommunity() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Join Community">
      <BannerText />
      <SocialMediaIcons />
    </div>
  );
}

function FooterContent() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[1184px]" data-name="Footer Content">
      <FooterLeftColumn />
      <JoinCommunity />
    </div>
  );
}

function FooterBottomLeft() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Footer Bottom Left">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#626262] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">© 2026 Dr. Smitha Sharma Foundation</p>
      </div>
      <div className="relative shrink-0 size-[2px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, #626262)" id="Ellipse 1" r="1" />
        </svg>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#626262] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Terms</p>
      </div>
      <div className="relative shrink-0 size-[2px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <circle cx="1" cy="1" fill="var(--fill-0, #626262)" id="Ellipse 1" r="1" />
        </svg>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#626262] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Privacy</p>
      </div>
    </div>
  );
}

function SocialMedia() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Social media">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_12_2648)" id="Social media">
          <path clipRule="evenodd" d={svgPaths.pdec5d00} fill="var(--fill-0, #C96A4A)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_12_2648">
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
        <g clipPath="url(#clip0_12_2645)" id="Social media">
          <path d={svgPaths.p14591b0} fill="var(--fill-0, #C96A4A)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_12_2645">
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
          <path d={svgPaths.p3a0a1c00} fill="var(--fill-0, #C96A4A)" id="Vector" />
          <path d={svgPaths.p3b619400} fill="var(--fill-0, #C96A4A)" id="Vector_2" />
          <path d={svgPaths.p142cf280} fill="var(--fill-0, #C96A4A)" id="Vector_3" />
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
          <path d={svgPaths.p114d3270} fill="var(--fill-0, #C96A4A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SocialIcons() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Social Icons">
      <SocialMedia />
      <SocialMedia1 />
      <SocialMedia2 />
      <SocialMedia3 />
    </div>
  );
}

function FooterBottomContent() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Footer Bottom Content">
      <FooterBottomLeft />
      <SocialIcons />
    </div>
  );
}

function FooterBottom() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Footer Bottom">
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1200 1">
            <line id="Line 1" stroke="var(--stroke-0, #EAEAEA)" x2="1200" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <FooterBottomContent />
    </div>
  );
}

export default function Footer() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[40px] items-center pb-[20px] pt-[60px] px-[120px] relative size-full" data-name="Footer">
      <FooterContent />
      <FooterBottom />
    </div>
  );
}