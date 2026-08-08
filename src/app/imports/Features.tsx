import imgHowWeHelpImageContent from "figma:asset/94a14b702aaeb73c6ea6b9e4ac0aeed788f5c9be.png";

function HowWeHelpTitle() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="How We Help Title">
      <div className="flex flex-col font-['Delicious_Handrawn:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#c96a4a] text-[32px] tracking-[-1.5px] whitespace-nowrap" style={{ fontFeatureSettings: "'zero'" }}>
        <p className="leading-[1.2]">How We Help Others</p>
      </div>
    </div>
  );
}

function HowWeHelpImage() {
  return (
    <div className="bg-[#f5f5f5] flex-[1_0_0] h-[550px] min-h-px min-w-px overflow-clip relative rounded-[20px]" data-name="How We Help Image">
      <div className="absolute h-[550px] left-[-39px] top-0 w-[657px]" data-name="How We Help Image Content">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgHowWeHelpImageContent} />
          <div className="absolute bg-[rgba(159,184,160,0.2)] inset-0" />
        </div>
      </div>
    </div>
  );
}

function CleanWaterHygiene() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Clean Water & Hygiene">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#c96a4a] text-[24px] tracking-[-0.5px] w-full" style={{ fontFeatureSettings: "'zero', 'cv01', 'cv02', 'cv03', 'cv04', 'cv07', 'cv10', 'cv11'" }}>
        <p className="leading-[1.5] whitespace-pre-wrap">Providing cancer patient with hope</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#626262] text-[16px] tracking-[-0.3px] w-full" style={{ fontFeatureSettings: "'zero', 'cv01', 'cv02', 'cv03', 'cv04', 'cv07', 'cv10', 'cv11'" }}>
        <p className="leading-[1.5] whitespace-pre-wrap">Providing access to safe drinking water and promoting hygiene to protect health and prevent disease.</p>
      </div>
    </div>
  );
}

function EducationChildhoodCare() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start opacity-60 relative shrink-0 w-full" data-name="Education & Childhood Care">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[24px] text-black tracking-[-0.5px] w-full" style={{ fontFeatureSettings: "'zero', 'cv01', 'cv02', 'cv03', 'cv04', 'cv07', 'cv10', 'cv11'" }}>
        <p className="leading-[1.5] whitespace-pre-wrap">{`Education & Childhood Care`}</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#626262] text-[16px] tracking-[-0.3px] w-full" style={{ fontFeatureSettings: "'zero', 'cv01', 'cv02', 'cv03', 'cv04', 'cv07', 'cv10', 'cv11'" }}>
        <p className="leading-[1.5] whitespace-pre-wrap">Creating safe, supportive spaces where children can learn, grow, and imagine a better future.</p>
      </div>
    </div>
  );
}

function AccessibleHealthcare() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start opacity-60 relative shrink-0 w-full" data-name="Accessible Healthcare">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[24px] text-black tracking-[-0.5px] w-full" style={{ fontFeatureSettings: "'zero', 'cv01', 'cv02', 'cv03', 'cv04', 'cv07', 'cv10', 'cv11'" }}>
        <p className="leading-[1.5] whitespace-pre-wrap">Accessible Healthcare</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#626262] text-[16px] tracking-[-0.3px] w-full" style={{ fontFeatureSettings: "'zero', 'cv01', 'cv02', 'cv03', 'cv04', 'cv07', 'cv10', 'cv11'" }}>
        <p className="leading-[1.5] whitespace-pre-wrap">Bringing timely medical care, preventive support, and health awareness to communities with limited access.</p>
      </div>
    </div>
  );
}

function NutritionWellbeing() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start opacity-60 relative shrink-0 w-full" data-name="Nutrition & Wellbeing">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[24px] text-black tracking-[-0.5px] w-full" style={{ fontFeatureSettings: "'zero', 'cv01', 'cv02', 'cv03', 'cv04', 'cv07', 'cv10', 'cv11'" }}>
        <p className="leading-[1.5] whitespace-pre-wrap">{`Nutrition & Wellbeing`}</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#626262] text-[16px] tracking-[-0.3px] w-full" style={{ fontFeatureSettings: "'zero', 'cv01', 'cv02', 'cv03', 'cv04', 'cv07', 'cv10', 'cv11'" }}>
        <p className="leading-[1.5] whitespace-pre-wrap">Ensuring nutritious food reaches those in need, supporting both physical health and human dignity.</p>
      </div>
    </div>
  );
}

function HowWeHelpTextContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between leading-[0] min-h-px min-w-px not-italic relative self-stretch" data-name="How We Help Text Content">
      <CleanWaterHygiene />
      <EducationChildhoodCare />
      <AccessibleHealthcare />
      <NutritionWellbeing />
    </div>
  );
}

function HowWeHelpContent() {
  return (
    <div className="content-stretch flex gap-[40px] items-start relative shrink-0 w-full" data-name="How We Help Content">
      <HowWeHelpImage />
      <HowWeHelpTextContent />
    </div>
  );
}

export default function Features() {
  return (
    <div className="bg-[rgba(159,184,160,0.1)] content-stretch flex flex-col gap-[80px] items-center justify-center p-[120px] relative size-full" data-name="features">
      <HowWeHelpTitle />
      <HowWeHelpContent />
    </div>
  );
}