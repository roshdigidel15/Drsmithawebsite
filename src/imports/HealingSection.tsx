import imgHealingSection from "figma:asset/dd87a693bb9e73c9d9813338b7ec9c40cf07fd04.png";
import imgWhatsAppImage20260131At123832Pm1 from "figma:asset/c987a798d4aed98c11967d18f65a2cfa170b41a6.png";
import imgImg13431 from "figma:asset/2243eeeeab74f83a046a0d1f941b9830543f4199.png";
import { ImageHoverText } from "../components/ImageHoverText";
import svgPaths from "./svg-rltp388rvy";

export default function HealingSection() {
  return (
    <div className="content-stretch flex items-center justify-center p-[120px] relative size-full" data-name="Healing Section">
      <img alt="" className="absolute inset-0 max-w-none object-cover opacity-20 pointer-events-none size-full" src={imgHealingSection} />
      <div className="font-['Inter:Bold',sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#626262] text-[32px] w-[819px] whitespace-pre-wrap">
        <div className="mb-0">
          <ImageHoverText 
            className="leading-[normal] text-[#c96a4a]"
            imageSrc={imgWhatsAppImage20260131At123832Pm1}
            imageWidth={250}
            imageHeight={250}
          >
            Healing
          </ImageHoverText>
          <span className="leading-[normal]">{` doesn't end with treatment.`}</span>
        </div>
        <div className="mb-0">
          <span className="leading-[normal]">{`It continues through `}</span>
          <span className="leading-[normal] text-[#9fb8a0]">trust, access, and compassion.</span>
        </div>
        <div className="leading-[normal] mb-0">&nbsp;</div>
        <div className="leading-[normal] text-[#c96a4a]">
          <ImageHoverText 
            className="leading-[normal] text-[#c96a4a]"
            imageSrc={imgImg13431}
            imageWidth={250}
            imageHeight={250}
            hasBorder={true}
            borderPath={svgPaths.p2ebeb2a}
          >
            Dr. Smitha Sharma
          </ImageHoverText>
        </div>
      </div>
    </div>
  );
}