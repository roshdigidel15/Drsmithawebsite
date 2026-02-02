import imgScrollSectionImage4Content from "figma:asset/5165c358fbf71924dba59f5f8ba8817eb515259e.png";
import imgScrollSectionImage3 from "figma:asset/a03b382be48c481a0690b424f9d72e34b7bce05b.png";
import imgScrollSectionImage2Content from "figma:asset/1c5dd2ed31ad88a141deb4e641799e7f9d06c27f.png";
import imgScrollSectionImage1Content from "figma:asset/bf2078698f735a3325e526f6b5bcdc8533c35169.png";

function ScrollSectionImage3() {
  return (
    <div className="absolute bg-white h-[297px] left-[116px] overflow-clip top-[119px] w-[256px]" data-name="Scroll Section Image 4">
      <div className="absolute h-[399px] left-[-5px] top-0 w-[266px]" data-name="Scroll Section Image 4 Content">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgScrollSectionImage4Content} />
          <div className="absolute bg-[rgba(159,184,160,0.2)] inset-0" />
        </div>
      </div>
    </div>
  );
}

function ScrollSectionImage2() {
  return (
    <div className="absolute h-[281px] left-[406px] overflow-clip top-0 w-[453px]" data-name="Scroll Section Image 3">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScrollSectionImage3} />
      <div className="absolute bg-[rgba(159,184,160,0.1)] h-[284px] left-0 top-0 w-[505px]" data-name="Scroll Section Image 3 Content" />
    </div>
  );
}

function ScrollSectionImage1() {
  return (
    <div className="absolute bg-white h-[119px] left-[406px] overflow-clip top-[297px] w-[325px]" data-name="Scroll Section Image 2">
      <div className="absolute h-[506px] left-0 top-[-68px] w-[325px]" data-name="Scroll Section Image 2 Content">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgScrollSectionImage2Content} />
          <div className="absolute bg-[rgba(159,184,160,0.2)] inset-0" />
        </div>
      </div>
    </div>
  );
}

function ScrollSectionImage() {
  return (
    <div className="absolute bg-white h-[119px] left-[759px] overflow-clip top-[297px] w-[325px]" data-name="Scroll Section Image 1">
      <div className="-translate-x-1/2 absolute h-[498px] left-[calc(50%+0.5px)] top-[-22px] w-[326px]" data-name="Scroll Section Image 1 Content">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgScrollSectionImage1Content} />
          <div className="absolute bg-[rgba(159,184,160,0.2)] inset-0" />
        </div>
      </div>
    </div>
  );
}

function ScrollSectionImages() {
  return (
    <div className="absolute contents left-[116px] top-0" data-name="Scroll Section Images">
      <ScrollSectionImage3 />
      <ScrollSectionImage2 />
      <ScrollSectionImage1 />
      <ScrollSectionImage />
    </div>
  );
}

function ScrollSectionContent() {
  return (
    <div className="h-[416px] relative shrink-0 w-full" data-name="Scroll Section Content">
      <ScrollSectionImages />
    </div>
  );
}

export default function ScrollSectionParallax() {
  return (
    <div className="content-stretch flex flex-col gap-[196px] items-center justify-center pt-[120px] px-[120px] relative size-full" data-name="Scroll Section Parallax">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#626262] text-[32px] text-center w-full whitespace-pre-wrap">
        <span className="leading-[normal]">{`Scroll to see the `}</span>
        <span className="leading-[normal] text-[#c96a4a]">lives we walk beside.</span>
      </p>
      <ScrollSectionContent />
    </div>
  );
}