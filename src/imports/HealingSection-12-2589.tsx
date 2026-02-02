import imgImg12941 from "figma:asset/d21ec2ca7029850f1cb830e4d132226183f02962.png";
import imgHealingSection from "figma:asset/dd87a693bb9e73c9d9813338b7ec9c40cf07fd04.png";

function Button() {
  return (
    <div className="bg-black content-stretch flex gap-[8px] items-center justify-center min-h-[40px] px-[24px] py-[10px] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#fafafa] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Walk with us!</p>
      </div>
    </div>
  );
}

function SocialMediaIcons() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[645px]" data-name="Social Media Icons">
      <div className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-full not-italic relative shrink-0 text-[0px] text-white w-[min-content] whitespace-pre-wrap">
        <p className="mb-0 text-[24px]">This foundation carries forward a legacy, not of illness, but of courage and hope.</p>
        <p className="mb-0 text-[24px]">&nbsp;</p>
        <p className="text-[16px]">In every hospital visit, every conversation, and every life touched, the spirit of Dr. Smita Sharma continues steady, compassionate, and deeply human. Because if we have the ability to help, we also have the responsibility to act.</p>
      </div>
      <Button />
    </div>
  );
}

function BannerText1() {
  return (
    <div className="h-[398px] overflow-clip relative shrink-0 w-[365px]" data-name="Banner Text">
      <div className="absolute flex h-[486px] items-center justify-center left-[-95px] top-[-5px] w-[460px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[486px] relative w-[460px]" data-name="IMG_1294 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[126.2%] left-0 max-w-none top-[-0.08%] w-full" src={imgImg12941} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BannerText() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Banner Text">
      <SocialMediaIcons />
      <BannerText1 />
    </div>
  );
}

export default function HealingSection() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[120px] relative size-full" data-name="Healing Section">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover opacity-20 size-full" src={imgHealingSection} />
        <div className="absolute bg-[#9fb8a0] inset-0" />
      </div>
      <BannerText />
    </div>
  );
}