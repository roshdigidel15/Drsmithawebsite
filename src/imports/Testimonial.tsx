import imgAvatar from "figma:asset/d9d3bfb72c85f87bb6b9bcec90934113b263bf3f.png";
import imgAvatar1 from "figma:asset/2db14426aa31bcc5820ff3b6e5e1f65bbcb1b62d.png";
import imgAvatar2 from "figma:asset/6cb9ae4c732f7e15dfddbe1581738cb7e4a57b81.png";
import imgAvatar3 from "figma:asset/b47288733c4720802fe72baf519067619933d17c.png";
import imgTestimonial from "figma:asset/dd87a693bb9e73c9d9813338b7ec9c40cf07fd04.png";
import { motion } from 'motion/react';

function ReviewSectionTitle() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Review Section Title">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#c96a4a] text-[32px] tracking-[-1.5px] whitespace-nowrap" style={{ fontFeatureSettings: "'zero', 'cv01', 'cv02', 'cv03', 'cv04', 'cv07', 'cv10', 'cv11'" }}>
        <p className="leading-[1.2]">Don’t Believe Us? See review</p>
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="mr-[-10px] relative rounded-[999px] shrink-0 size-[24px]" data-name="Avatar">
      <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[999px] size-full" src={imgAvatar} />
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 rounded-[999px]" />
    </div>
  );
}

function Avatar1() {
  return (
    <div className="mr-[-10px] relative rounded-[999px] shrink-0 size-[24px]" data-name="Avatar">
      <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[999px] size-full" src={imgAvatar1} />
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 rounded-[999px]" />
    </div>
  );
}

function Avatar2() {
  return (
    <div className="mr-[-10px] relative rounded-[999px] shrink-0 size-[24px]" data-name="Avatar">
      <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[999px] size-full" src={imgAvatar2} />
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 rounded-[999px]" />
    </div>
  );
}

function Avatar3() {
  return (
    <div className="mr-[-10px] relative rounded-[999px] shrink-0 size-[24px]" data-name="Avatar">
      <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[999px] size-full" src={imgAvatar3} />
      <div aria-hidden="true" className="absolute border border-[#c96a4a] border-solid inset-0 rounded-[999px]" />
    </div>
  );
}

function AvatarGroup1() {
  return (
    <div className="content-stretch flex items-center pointer-events-none pr-[10px] relative shrink-0" data-name="Avatar group">
      <Avatar />
      <Avatar1 />
      <Avatar2 />
      <Avatar3 />
    </div>
  );
}

function AvatarGroup() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Avatar group">
      <AvatarGroup1 />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.65)] whitespace-nowrap" style={{ fontFeatureSettings: "'zero', 'cv01', 'cv02', 'cv03', 'cv04', 'cv07', 'cv10', 'cv11'" }}>
        <p className="leading-[16px]">04</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#626262] text-[12px] whitespace-nowrap" style={{ fontFeatureSettings: "'zero', 'cv01', 'cv02', 'cv03', 'cv04', 'cv07', 'cv10', 'cv11'" }}>
        <p className="leading-[16px]">/04</p>
      </div>
    </div>
  );
}

function Review1Pagination() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0" data-name="Review 1 Pagination">
      <Text />
      <Text1 />
    </div>
  );
}

function Review1Header() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Review 1 Header">
      <AvatarGroup />
      <Review1Pagination />
    </div>
  );
}

function Review1Content() {
  return (
    <div className="capitalize content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[73px] items-start justify-center leading-[0] not-italic relative shrink-0 tracking-[-0.5px] w-full" data-name="Review 1 Content">
      <div className="flex flex-[1_0_0] flex-col justify-center min-h-px min-w-px relative text-[#c96a4a] text-[24px] w-full" style={{ fontFeatureSettings: "'zero', 'cv01', 'cv02', 'cv03', 'cv04', 'cv07', 'cv10', 'cv11'" }}>
        <p className="leading-[1.5] whitespace-pre-wrap">Grandma Meera finds a home</p>
      </div>
      <div className="flex flex-[1_0_0] flex-col justify-center min-h-px min-w-px relative text-[#626262] text-[16px] w-full" style={{ fontFeatureSettings: "'zero', 'cv01', 'cv02', 'cv03', 'cv04', 'cv07', 'cv10', 'cv11'" }}>
        <p className="leading-[normal] whitespace-pre-wrap">Once abandoned at bus stand, Meera Devi now lives in comofrt and companionship at our old age home.</p>
      </div>
    </div>
  );
}

function Review() {
  return (
    <div className="bg-[rgba(159,184,160,0.1)] content-stretch flex flex-col gap-[25px] items-start px-[24px] py-[32px] relative shrink-0 w-[580px]" data-name="Review 1">
      <Review1Header />
      <Review1Content />
    </div>
  );
}

function Avatar4() {
  return (
    <div className="mr-[-10px] relative rounded-[999px] shrink-0 size-[24px]" data-name="Avatar">
      <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[999px] size-full" src={imgAvatar} />
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 rounded-[999px]" />
    </div>
  );
}

function Avatar5() {
  return (
    <div className="mr-[-10px] relative rounded-[999px] shrink-0 size-[24px]" data-name="Avatar">
      <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[999px] size-full" src={imgAvatar1} />
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 rounded-[999px]" />
    </div>
  );
}

function Avatar6() {
  return (
    <div className="mr-[-10px] relative rounded-[999px] shrink-0 size-[24px]" data-name="Avatar">
      <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[999px] size-full" src={imgAvatar2} />
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 rounded-[999px]" />
    </div>
  );
}

function Avatar7() {
  return (
    <div className="mr-[-10px] relative rounded-[999px] shrink-0 size-[24px]" data-name="Avatar">
      <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[999px] size-full" src={imgAvatar3} />
      <div aria-hidden="true" className="absolute border border-[#c96a4a] border-solid inset-0 rounded-[999px]" />
    </div>
  );
}

function AvatarGroup3() {
  return (
    <div className="content-stretch flex items-center pointer-events-none pr-[10px] relative shrink-0" data-name="Avatar group">
      <Avatar4 />
      <Avatar5 />
      <Avatar6 />
      <Avatar7 />
    </div>
  );
}

function AvatarGroup2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Avatar group">
      <AvatarGroup3 />
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.65)] whitespace-nowrap" style={{ fontFeatureSettings: "'zero', 'cv01', 'cv02', 'cv03', 'cv04', 'cv07', 'cv10', 'cv11'" }}>
        <p className="leading-[16px]">05</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#626262] text-[12px] whitespace-nowrap" style={{ fontFeatureSettings: "'zero', 'cv01', 'cv02', 'cv03', 'cv04', 'cv07', 'cv10', 'cv11'" }}>
        <p className="leading-[16px]">/04</p>
      </div>
    </div>
  );
}

function Review2Pagination() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0" data-name="Review 2 Pagination">
      <Text2 />
      <Text3 />
    </div>
  );
}

function Review2Header() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Review 2 Header">
      <AvatarGroup2 />
      <Review2Pagination />
    </div>
  );
}

function Review2Content() {
  return (
    <div className="capitalize content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[73px] items-start justify-center leading-[0] not-italic relative shrink-0 tracking-[-0.5px] w-full" data-name="Review 2 Content">
      <div className="flex flex-[1_0_0] flex-col justify-center min-h-px min-w-px relative text-[#c96a4a] text-[24px] w-full" style={{ fontFeatureSettings: "'zero', 'cv01', 'cv02', 'cv03', 'cv04', 'cv07', 'cv10', 'cv11'" }}>
        <p className="leading-[1.5] whitespace-pre-wrap">Healing the Unseen</p>
      </div>
      <div className="flex flex-[1_0_0] flex-col justify-center min-h-px min-w-px relative text-[#626262] text-[16px] w-full" style={{ fontFeatureSettings: "'zero', 'cv01', 'cv02', 'cv03', 'cv04', 'cv07', 'cv10', 'cv11'" }}>
        <p className="leading-[normal] whitespace-pre-wrap">After losing his family, Raj Kumar discovered a supportive community that helped him rediscover joy and purpose.</p>
      </div>
    </div>
  );
}

function Review1() {
  return (
    <div className="bg-[rgba(159,184,160,0.1)] content-stretch flex flex-col gap-[25px] items-start px-[24px] py-[32px] relative shrink-0 w-[580px]" data-name="Review 2">
      <Review2Header />
      <Review2Content />
    </div>
  );
}

function Avatar8() {
  return (
    <div className="mr-[-10px] relative rounded-[999px] shrink-0 size-[24px]" data-name="Avatar">
      <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[999px] size-full" src={imgAvatar} />
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 rounded-[999px]" />
    </div>
  );
}

function Avatar9() {
  return (
    <div className="mr-[-10px] relative rounded-[999px] shrink-0 size-[24px]" data-name="Avatar">
      <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[999px] size-full" src={imgAvatar1} />
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 rounded-[999px]" />
    </div>
  );
}

function Avatar10() {
  return (
    <div className="mr-[-10px] relative rounded-[999px] shrink-0 size-[24px]" data-name="Avatar">
      <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[999px] size-full" src={imgAvatar2} />
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 rounded-[999px]" />
    </div>
  );
}

function Avatar11() {
  return (
    <div className="mr-[-10px] relative rounded-[999px] shrink-0 size-[24px]" data-name="Avatar">
      <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[999px] size-full" src={imgAvatar3} />
      <div aria-hidden="true" className="absolute border border-[#c96a4a] border-solid inset-0 rounded-[999px]" />
    </div>
  );
}

function AvatarGroup5() {
  return (
    <div className="content-stretch flex items-center pointer-events-none pr-[10px] relative shrink-0" data-name="Avatar group">
      <Avatar8 />
      <Avatar9 />
      <Avatar10 />
      <Avatar11 />
    </div>
  );
}

function AvatarGroup4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Avatar group">
      <AvatarGroup5 />
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.65)] whitespace-nowrap" style={{ fontFeatureSettings: "'zero', 'cv01', 'cv02', 'cv03', 'cv04', 'cv07', 'cv10', 'cv11'" }}>
        <p className="leading-[16px]">06</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#626262] text-[12px] whitespace-nowrap" style={{ fontFeatureSettings: "'zero', 'cv01', 'cv02', 'cv03', 'cv04', 'cv07', 'cv10', 'cv11'" }}>
        <p className="leading-[16px]">/04</p>
      </div>
    </div>
  );
}

function Review3Pagination() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0" data-name="Review 3 Pagination">
      <Text4 />
      <Text5 />
    </div>
  );
}

function Review3Header() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Review 3 Header">
      <AvatarGroup4 />
      <Review3Pagination />
    </div>
  );
}

function Review3Content() {
  return (
    <div className="capitalize content-stretch flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[73px] items-start justify-center leading-[0] not-italic relative shrink-0 tracking-[-0.5px] w-full" data-name="Review 3 Content">
      <div className="flex flex-[1_0_0] flex-col justify-center min-h-px min-w-px relative text-[#c96a4a] text-[24px] w-full" style={{ fontFeatureSettings: "'zero', 'cv01', 'cv02', 'cv03', 'cv04', 'cv07', 'cv10', 'cv11'" }}>
        <p className="leading-[1.5] whitespace-pre-wrap">Ankit Dreams Again</p>
      </div>
      <div className="flex flex-[1_0_0] flex-col justify-center min-h-px min-w-px relative text-[#626262] text-[16px] w-full" style={{ fontFeatureSettings: "'zero', 'cv01', 'cv02', 'cv03', 'cv04', 'cv07', 'cv10', 'cv11'" }}>
        <p className="leading-[normal] whitespace-pre-wrap">From being a shy artist to showcasing her work, Amina now inspires others in the home to pursue their passions.</p>
      </div>
    </div>
  );
}

function Review2() {
  return (
    <div className="bg-[rgba(159,184,160,0.1)] content-stretch flex flex-col gap-[25px] items-start px-[24px] py-[32px] relative shrink-0 w-[580px]" data-name="Review 3">
      <Review3Header />
      <Review3Content />
    </div>
  );
}

function ReviewsContainer() {
  // Duplicate the reviews 3 times for seamless infinite scroll
  const reviews = [
    <Review key="1-a" />,
    <Review1 key="2-a" />,
    <Review2 key="3-a" />,
    <Review key="1-b" />,
    <Review1 key="2-b" />,
    <Review2 key="3-b" />,
    <Review key="1-c" />,
    <Review1 key="2-c" />,
    <Review2 key="3-c" />,
  ];

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex gap-[80px]"
        animate={{
          x: [0, -((580 + 80) * 3)],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        {reviews}
      </motion.div>
    </div>
  );
}

export default function Testimonial() {
  return (
    <div className="relative w-full overflow-hidden" data-name="Testimonial">
      <img alt="" className="absolute inset-0 max-w-none object-cover opacity-20 pointer-events-none size-full" src={imgTestimonial} />
      <div className="flex flex-col gap-[80px] items-center justify-center py-[120px] relative">
        <ReviewSectionTitle />
        <ReviewsContainer />
      </div>
    </div>
  );
}