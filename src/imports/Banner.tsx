import svgPaths from "./svg-fmod1xwf1y";
import imgHeaderIcon10Image from "figma:asset/38d7b2b81b9a45e8474e0d942dc35c087c9cc6c8.png";
import imgHeaderIcon6Image from "figma:asset/8590536e0bdd1f7e21f4ff737b9de77ecc708993.png";
import imgHeaderIcon5Image from "figma:asset/6091610efd2a62fe1ceeb8503d8f232c00f42f3e.png";
import imgHeaderLogoImage from "figma:asset/18d905bcbcbb93a201d9e52ecfa93ee27d877655.png";
import imgImg12951 from "figma:asset/803ce0730442a16482031ad345eebb82a1d2cbc6.png";
import imgImg12811 from "figma:asset/d45a34fa7fdd3c94829a40587a815925648fb399.png";
import imgImg12991 from "figma:asset/fd8b77915c697515f27a7ba011d3fe7709eb33f5.png";
import imgHeaderBackgroundImage from "figma:asset/d11ddf41dad5ca327f4091eb1c5edc1127bd1e43.png";

function HeaderTextContent() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center not-italic relative shrink-0 text-center w-full whitespace-pre-wrap" data-name="Header Text Content">
      <p className="font-['Delicious_Handrawn:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#c96a4a] text-[20px] w-[588px]">In loving memory of Dr. Smitha Sharma</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[0] min-w-full relative shrink-0 text-[#c96a4a] text-[54px] w-[min-content]">
        <span className="leading-[normal]">{`Because every `}</span>
        <span className="leading-[normal] text-[#9fb8a0]">breath</span>
        <span className="leading-[normal]">{` deserves `}</span>
        <span className="leading-[normal] text-[#9fb8a0]">kindness.</span>
      </p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#626262] text-[16px] w-[576px]">Born in hospital corridors and shaped by lived experience, the Dr. Smitha Sharma Foundation exists to stand beside those facing cancer, aging alone, and silent suffering — with dignity, compassion, and presence.</p>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-black content-stretch flex gap-[8px] items-center justify-center min-h-[40px] px-[24px] py-[10px] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#fafafa] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Walk through our journey</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center justify-center min-h-[40px] px-[24px] py-[10px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
        <p className="leading-[20px]">Volunteer with us</p>
      </div>
    </div>
  );
}

function HeaderButtons() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Header Buttons">
      <Button />
      <Button1 />
    </div>
  );
}

function HeaderTextContainer() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[32px] items-center justify-center left-[412px] right-[412px] rounded-[800px] top-[calc(50%-131.5px)]" data-name="Header Text Container">
      <HeaderTextContent />
      <HeaderButtons />
    </div>
  );
}

function HeaderIcon3() {
  return (
    <div className="absolute bg-[#e3ebe4] left-[81px] overflow-clip rounded-[75.25px] size-[112px] top-[304px]" data-name="Header Icon 10">
      <div className="absolute h-[265.627px] left-[-15.75px] top-[-38.5px] w-[176.999px]" data-name="Header Icon 10 Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHeaderIcon10Image} />
      </div>
    </div>
  );
}

function HeaderIcon2() {
  return (
    <div className="absolute bg-[#dfcfcf] left-[319px] overflow-clip rounded-[43px] size-[64px] top-[472px]" data-name="Header Icon 6">
      <div className="absolute h-[63.847px] left-[10.78px] top-[7.41px] w-[42.544px]" data-name="Header Icon 6 Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHeaderIcon6Image} />
      </div>
    </div>
  );
}

function HeaderIcon1() {
  return (
    <div className="absolute bg-[#e3ebe4] left-[1259px] overflow-clip rounded-[52.406px] size-[78px] top-[305px]" data-name="Header Icon 5">
      <div className="absolute h-[90.774px] left-[10.97px] top-[-2.44px] w-[55.702px]" data-name="Header Icon 5 Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHeaderIcon5Image} />
      </div>
    </div>
  );
}

function HeaderIcon() {
  return (
    <div className="absolute bg-[#dfcfcf] left-[1125px] overflow-clip rounded-[63.828px] size-[95px] top-[63px]" data-name="Header Icon">
      <div className="absolute h-[95px] left-[16px] top-[11px] w-[63px]" data-name="Header Icon Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHeaderIcon6Image} />
      </div>
    </div>
  );
}

function HeaderLogo() {
  return (
    <div className="absolute bg-[#dfcfcf] left-[267px] overflow-clip rounded-[77.938px] size-[116px] top-[47px]" data-name="Header Logo">
      <div className="absolute h-[102.578px] left-[-13.43px] top-[13.43px] w-[153.838px]" data-name="Header Logo Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHeaderLogoImage} />
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="absolute contents left-[913px] top-[358px]" data-name="Image">
      <div className="absolute h-[515px] left-[918.76px] top-[358px] w-[386px]" data-name="IMG_1295 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg12951} />
      </div>
      <div className="absolute h-[425.276px] left-[913px] top-[380.53px] w-[376.565px]" data-name="Vector">
        <div className="absolute inset-[-0.24%_-0.27%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 378.565 427.276">
            <path d={svgPaths.p2ebeb2a} id="Vector" stroke="var(--stroke-0, #C96A4A)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Image2() {
  return (
    <div className="h-[297.368px] relative w-[268.02px]" data-name="Image">
      <div className="absolute inset-[-0.31%_-0.35%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 269.885 299.232">
          <g id="Image">
            <path d={svgPaths.p1bbc0480} id="Vector 1" stroke="var(--stroke-0, #C96A4A)" strokeLinecap="round" strokeWidth="1.86441" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Image1() {
  return (
    <div className="absolute contents left-[608px] top-[489px]" data-name="Image">
      <div className="absolute h-[330px] left-[618.9px] top-[489px] w-[256.947px]" data-name="IMG_1281 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[124.58%] left-0 max-w-none top-[-0.08%] w-full" src={imgImg12811} />
        </div>
      </div>
      <div className="absolute flex h-[297.368px] items-center justify-center left-[608px] top-[521.63px] w-[268.02px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <Image2 />
        </div>
      </div>
    </div>
  );
}

function Image3() {
  return (
    <div className="absolute h-[427.151px] left-[167px] top-[377px] w-[325.809px]" data-name="Image">
      <div className="absolute inset-[-0.23%_-0.31%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 327.809 429.151">
          <g id="Image">
            <path d={svgPaths.p6bf2a00} id="Vector 2" stroke="var(--stroke-0, #C96A4A)" strokeLinecap="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Header1() {
  return (
    <div className="absolute contents left-[88px] top-[236px]" data-name="Header">
      <div className="absolute h-[621px] left-[88px] top-[236px] w-[525px]" data-name="IMG_1299 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[194.59%] left-[-12.3%] max-w-none top-[-12.42%] w-[144.08%]" src={imgImg12991} />
        </div>
      </div>
      <Image3 />
    </div>
  );
}

function Header() {
  return (
    <div className="h-[804px] overflow-clip relative shrink-0 w-[1440px]" data-name="Header">
      <div className="absolute h-[952px] left-[-129px] top-0 w-[1698px]" data-name="Header Background Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover opacity-15 pointer-events-none size-full" src={imgHeaderBackgroundImage} />
      </div>
      <HeaderTextContainer />
      <HeaderIcon3 />
      <HeaderIcon2 />
      <HeaderIcon1 />
      <HeaderIcon />
      <HeaderLogo />
      <Image />
      <Image1 />
      <Header1 />
    </div>
  );
}

export default function Banner() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center px-[120px] relative size-full" data-name="Banner">
      <Header />
    </div>
  );
}