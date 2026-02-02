function Stat() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center justify-center min-h-px min-w-[200px] not-italic relative" data-name="stat">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#c96a4a] text-[32px] tracking-[-0.64px]">
        <p className="leading-[60px]">10k+</p>
      </div>
      <div className="capitalize flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#626262] text-[16px]">
        <p className="leading-[24px]">Meals served to senior Citizens</p>
      </div>
    </div>
  );
}

function Stat1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center justify-center min-h-px min-w-[200px] relative" data-name="stat">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#c96a4a] text-[32px] tracking-[-0.64px]">
        <p>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[60px] not-italic">200</span>
          <span className="leading-[60px]">+</span>
        </p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center not-italic relative shrink-0 text-[#626262] text-[16px]">
        <p className="leading-[24px]">Children educated and rehabilitated</p>
      </div>
    </div>
  );
}

function Stat2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center justify-center min-h-px min-w-[200px] not-italic relative" data-name="stat">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#c96a4a] text-[32px] tracking-[-0.64px]">
        <p className="leading-[60px]">50+</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#626262] text-[16px]">
        <p className="leading-[24px]">Health camps organized</p>
      </div>
    </div>
  );
}

function Stat3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center justify-center min-h-px min-w-[200px] not-italic relative" data-name="stat">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#c96a4a] text-[32px] tracking-[-0.64px]">
        <p className="leading-[60px]">100+</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#626262] text-[16px]">
        <p className="leading-[24px]">Active volunteers</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-center flex flex-[1_0_0] gap-[24px] md:gap-[48px] items-center justify-between leading-[0] max-w-[1200px] min-h-px min-w-px relative text-center whitespace-nowrap w-full" data-name="container">
      <Stat />
      <Stat1 />
      <Stat2 />
      <Stat3 />
    </div>
  );
}

export default function SectionStats() {
  return (
    <div className="bg-[rgba(159,184,160,0.1)] content-stretch flex items-center justify-center px-[20px] md:px-[60px] lg:px-[120px] py-[60px] relative w-full" data-name="[section]-stats1">
      <Container />
    </div>
  );
}