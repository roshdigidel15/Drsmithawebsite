import svgPaths from "./svg-173gapovl4";
import imgImg12811 from "figma:asset/d45a34fa7fdd3c94829a40587a815925648fb399.png";

function Image1() {
  return (
    <div className="h-[175.717px] relative w-[159px]" data-name="Image">
      <div className="absolute inset-[-0.53%_-0.59%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 160.864 177.582">
          <g id="Image">
            <path d={svgPaths.p1fee04e0} id="Vector 1" stroke="var(--stroke-0, #C96A4A)" strokeLinecap="round" strokeWidth="1.86441" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Image">
      <div className="absolute h-[194.997px] left-[4.27px] top-0 w-[151.83px]" data-name="IMG_1281 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[124.58%] left-0 max-w-none top-[-0.08%] w-full" src={imgImg12811} />
        </div>
      </div>
      <div className="absolute flex h-[175.717px] items-center justify-center left-0 top-[19.28px] w-[159px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <Image1 />
        </div>
      </div>
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <Image />
    </div>
  );
}