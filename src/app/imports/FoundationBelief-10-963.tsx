import svgPaths from "./svg-0p15x8qwun";
import imgImage from "figma:asset/39f7388ba4c4f344bd025586ba3a4902a9a9e376.png";
import imgImage1 from "figma:asset/d28d83c7d8d72ff76f996beb1da0bbd0453483e7.png";

function Vector() {
  return (
    <div className="absolute contents left-[1124.26px] top-[283px]" data-name="Vector">
      <div className="absolute h-[274px] left-[1130px] top-[416.14px] w-[326px]" data-name="Image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[125.22%] left-[-44.44%] max-w-none top-0 w-[187.13%]" src={imgImage} />
        </div>
      </div>
      <div className="absolute h-[127.593px] left-[1124.26px] top-[283px] w-[223.984px]" data-name="Vector">
        <div className="absolute inset-[-0.78%_-0.45%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 225.984 129.594">
            <path d={svgPaths.p8a0d200} id="Vector" stroke="var(--stroke-0, #C96A4A)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Vector1() {
  return (
    <div className="absolute contents left-[-45px] top-[361px]" data-name="Vector">
      <div className="absolute h-[268px] left-[-45px] top-[422.14px] w-[336px]" data-name="Image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[107.69%] left-0 max-w-none top-[-7.69%] w-full" src={imgImage1} />
        </div>
      </div>
      <div className="absolute h-[162.671px] left-[134.8px] top-[361px] w-[123.077px]" data-name="Vector">
        <div className="absolute inset-[-0.61%_-0.81%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 125.077 164.671">
            <path d={svgPaths.p7ed148} id="Vector" stroke="var(--stroke-0, #C96A4A)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function FoundationBeliefText() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[24px] items-center leading-[normal] left-[calc(50%+13px)] not-italic text-[32px] text-center top-1/2 w-[1034px] whitespace-pre-wrap" data-name="Foundation Belief Text">
      <p className="font-['Delicious_Handrawn:Regular',sans-serif] relative shrink-0 text-[#c96a4a] w-full">Where it all took shape</p>
      <div className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#9fb8a0] w-full">
        <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold mb-0">The foundation did not begin with an idea on paper.</p>
        <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold mb-0 text-[#eaeaea]">It began with lived moments. Cancer is where this journey became deeply personal.</p>
        <p className="mb-0">&nbsp;</p>
        <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold mb-0 text-[#eaeaea]">In hospital visits.</p>
        <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold mb-0 text-[#eaeaea]">In conversations with patients and elders.</p>
        <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold mb-0 text-[#eaeaea]">In witnessing courage that often goes unseen around the people.</p>
        <p className="mb-0">&nbsp;</p>
        <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold mb-0 text-[#eaeaea]">These experiences shaped a simple belief:</p>
        <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold text-[#eaeaea]">care must go beyond systems — it must remain human.</p>
      </div>
    </div>
  );
}

function FoundationBelief1() {
  return (
    <div className="h-[690px] relative shrink-0 w-[1440px]" data-name="Foundation Belief">
      <Vector />
      <Vector1 />
      <FoundationBeliefText />
    </div>
  );
}

export default function FoundationBelief() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[120px] relative size-full" data-name="Foundation Belief">
      <FoundationBelief1 />
    </div>
  );
}