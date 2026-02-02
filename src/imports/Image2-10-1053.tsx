import svgPaths from "./svg-rltp388rvy";
import imgImg12951 from "figma:asset/803ce0730442a16482031ad345eebb82a1d2cbc6.png";

function Image() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Image">
      <div className="absolute h-[515px] left-[5.76px] top-0 w-[386px]" data-name="IMG_1295 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg12951} />
      </div>
      <div className="absolute h-[425.276px] left-0 top-[22.53px] w-[376.565px]" data-name="Vector">
        <div className="absolute inset-[-0.24%_-0.27%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 378.565 427.276">
            <path d={svgPaths.p2ebeb2a} id="Vector" stroke="var(--stroke-0, #C96A4A)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Image1() {
  return (
    <div className="relative size-full" data-name="Image 2">
      <Image />
    </div>
  );
}