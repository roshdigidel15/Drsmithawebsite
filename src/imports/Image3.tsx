import imgImage3 from "figma:asset/34bfc6d99108ae65c0b43bdf83cd6464ed90d982.png";

export default function Image() {
  return (
    <div className="content-stretch flex items-center justify-center px-[123px] py-[204px] relative size-full" data-name="Image 3">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[54px] text-[rgba(255,255,255,0.8)] text-center w-[648px] whitespace-pre-wrap">We exist to bridge that gap with empathy, continuity, and dignity.</p>
    </div>
  );
}