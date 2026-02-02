import imgImage2 from "figma:asset/efce35585936524053812624975e275ef57b4f04.png";

export default function Image() {
  return (
    <div className="content-stretch flex items-center justify-center px-[123px] py-[204px] relative size-full" data-name="Image 2">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[54px] text-[rgba(255,255,255,0.8)] text-center w-[648px] whitespace-pre-wrap">Not everyone who needs care knows where to go.</p>
    </div>
  );
}