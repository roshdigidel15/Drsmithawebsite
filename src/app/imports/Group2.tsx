import svgPaths from "./svg-t3xvx7k42v";
import imgImg12991 from "figma:asset/fd8b77915c697515f27a7ba011d3fe7709eb33f5.png";

function Image() {
  return (
    <div className="absolute h-[151.333px] left-[27.99px] top-[49.95px] w-[115.43px]" data-name="Image">
      <div className="absolute inset-[-0.66%_-0.87%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 117.43 153.333">
          <g id="Image">
            <path d={svgPaths.p1aa03e00} id="Vector 2" stroke="var(--stroke-0, #C96A4A)" strokeLinecap="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Header">
      <div className="absolute h-[220.011px] left-0 top-0 w-[186px]" data-name="IMG_1299 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[194.59%] left-[-12.3%] max-w-none top-[-12.42%] w-[144.08%]" src={imgImg12991} />
        </div>
      </div>
      <Image />
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <Header />
    </div>
  );
}