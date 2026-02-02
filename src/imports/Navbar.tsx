import svgPaths from "./svg-7hd2j54gkb";
import imgLogo from "figma:asset/c51118b692a5ee01203918025e2cacc3e384072f.png";

function DropdownIcon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Dropdown Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Dropdown Icon">
          <path d={svgPaths.p3cfe5200} fill="var(--fill-0, black)" fillOpacity="0.65" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function CauseDropdown() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Cause Dropdown">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.65)] tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[20px]">Cause</p>
      </div>
      <DropdownIcon />
    </div>
  );
}

function NavbarLinksContainer() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Navbar Links Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.65)] tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[20px]">Home</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.65)] tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[20px]">Our Work</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.65)] tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[20px]">{`News & Events`}</p>
      </div>
      <CauseDropdown />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.65)] tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[20px]">Join Us</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-black content-stretch flex gap-[8px] items-center justify-center min-h-[40px] px-[24px] py-[10px] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#fafafa] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Contact</p>
      </div>
    </div>
  );
}

function NavbarLinks() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0" data-name="Navbar Links">
      <NavbarLinksContainer />
      <Button />
    </div>
  );
}

export default function Navbar() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between px-[120px] py-[20px] relative size-full" data-name="Navbar">
      <div className="h-[43px] relative shrink-0 w-[163px]" data-name="Logo">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogo} />
      </div>
      <NavbarLinks />
    </div>
  );
}