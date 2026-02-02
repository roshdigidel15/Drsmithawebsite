import svgPaths from "./svg-7nvlygjocw";
import imgImg13372 from "figma:asset/e05a0da66851fbd60f73f11ea19d97ad9cafb038.png";
import imgImage from "figma:asset/dd87a693bb9e73c9d9813338b7ec9c40cf07fd04.png";
import { imgImg13371 } from "./svg-yxbl7";

function MaskGroup() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] ml-0 mt-0 relative row-1" data-name="Mask group">
      <div className="col-1 h-[443px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-16px_-69px] mask-size-[420.767px_441.229px] ml-[16px] mt-[69px] relative row-1 w-[336px]" data-name="IMG_1337 1" style={{ maskImage: `url('${imgImg13371}')` }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[159.32%] left-0 max-w-none top-[-37.65%] w-[108.04%]" src={imgImg13372} />
        </div>
      </div>
    </div>
  );
}

function Img() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0" data-name="img">
      <div className="col-1 h-[441.229px] ml-0 mt-0 relative row-1 w-[420.767px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 420.767 441.229">
          <path clipRule="evenodd" d={svgPaths.pa7caf80} fill="var(--fill-0, #9FB8A0)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <MaskGroup />
    </div>
  );
}

function FoundationBeliefText() {
  return (
    <div className="content-stretch flex flex-col gap-[60px] items-center justify-center relative shrink-0" data-name="Foundation Belief Text">
      <p className="font-['Delicious_Handrawn:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#c96a4a] text-[32px]">The essence</p>
      <Img />
    </div>
  );
}

export default function Image() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[60px] pt-[120px] px-[120px] relative size-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover opacity-20 pointer-events-none size-full" src={imgImage} />
      <FoundationBeliefText />
      <div className="font-['Inter:Medium',sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[24px] text-[rgba(0,0,0,0.65)] w-[625px] whitespace-pre-wrap">
        <p className="mb-0">
          <span className="leading-[normal] text-[#c96a4a]">Dr. Smita Sharma</span>
          <span className="leading-[normal]">{` was an educator by profession and a mentor by spirit.`}</span>
        </p>
        <p className="leading-[normal] mb-0">&nbsp;</p>
        <p className="leading-[normal] mb-0">A former Senior Associate Professor at LBSIM, New Delhi, she devoted nearly two decades to teaching not just subjects, but values — believing education was a way to awaken minds, shape character, and nurture humanity.</p>
        <p className="leading-[normal] mb-0">&nbsp;</p>
        <p className="leading-[normal]">This foundation exists to carry that philosophy beyond classrooms, into lives that need care, respect, and presence.</p>
      </div>
    </div>
  );
}