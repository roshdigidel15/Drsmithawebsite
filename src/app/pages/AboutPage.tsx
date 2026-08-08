import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { Heart, BookOpen, Users, Leaf, ArrowRight } from 'lucide-react';

// Timeline milestone data
const milestones = [
  {
    year: '2019',
    title: 'A Seed of Compassion',
    description: 'What began as hospital visits and bedside conversations with cancer patients became the quiet stirring of something larger — a conviction that care must be personal, present, and persistent.',
  },
  {
    year: '2020',
    title: 'Foundation Established',
    description: 'The Dr. Smita Sharma Foundation was formally registered, born not from an idea on paper but from lived moments — in hospital corridors, in conversations with elders, in witnessing courage that often goes unseen.',
  },
  {
    year: '2021',
    title: 'First Health Camps',
    description: 'Free healthcare camps were organized in underserved communities across Delhi, bringing medical check-ups, medicines, and most importantly — a sense of being seen and cared for.',
  },
  {
    year: '2022',
    title: 'Expanding to Elder Care',
    description: 'The foundation extended its embrace to senior citizens living alone, providing companionship, nutrition support, and the simple dignity of being remembered.',
  },
  {
    year: '2023',
    title: 'Children & Education',
    description: 'Scholarships and educational support programs launched for orphaned and underprivileged children — because Dr. Sharma always believed education was the most powerful act of kindness.',
  },
  {
    year: '2024–26',
    title: 'Growing Together',
    description: 'With 100+ active volunteers and partnerships across communities, the foundation now touches thousands of lives through healthcare, elder care, orphan support, sanitation, and environmental initiatives.',
  },
];

// Aims data
const aims = [
  { icon: Heart, text: 'To touch lives through free healthcare camps and cancer patient support', color: '#c96a4a' },
  { icon: BookOpen, text: 'To support children with education, scholarships, and rehabilitation', color: '#9fb8a0' },
  { icon: Users, text: 'To care for elders through senior assistance and companionship programs', color: '#c96a4a' },
  { icon: Leaf, text: 'To uplift communities through sanitation, poverty alleviation, and tree planting', color: '#9fb8a0' },
];

function TimelineMilestone({ milestone, index }: { milestone: typeof milestones[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className="relative flex items-center w-full mb-8 md:mb-0">
      {/* Desktop: alternating sides */}
      <div className={`hidden md:flex w-full items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
        {/* Content */}
        <motion.div
          className="w-[calc(50%-40px)]"
          initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={`p-6 rounded-2xl bg-white border border-[rgba(0,0,0,0.06)] shadow-[0_2px_16px_rgba(0,0,0,0.04)] ${isLeft ? 'text-right' : 'text-left'}`}>
            <span className="font-['Delicious_Handrawn',sans-serif] text-[#c96a4a] text-[24px]">
              {milestone.year}
            </span>
            <h3 className="font-['Inter',sans-serif] text-[rgba(0,0,0,0.85)] text-[18px] mt-1 mb-2">
              {milestone.title}
            </h3>
            <p className="font-['Inter',sans-serif] text-[#626262] text-[14px] leading-[1.7]">
              {milestone.description}
            </p>
          </div>
        </motion.div>

        {/* Center dot */}
        <div className="w-[80px] flex items-center justify-center relative z-10">
          <motion.div
            className="w-4 h-4 rounded-full border-[3px] border-[#c96a4a] bg-white"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.1, type: 'spring', stiffness: 300 }}
          />
        </div>

        {/* Empty spacer for the other side */}
        <div className="w-[calc(50%-40px)]" />
      </div>

      {/* Mobile: single column */}
      <div className="flex md:hidden items-start gap-4 w-full">
        <div className="flex flex-col items-center shrink-0">
          <motion.div
            className="w-3 h-3 rounded-full border-[2px] border-[#c96a4a] bg-white relative z-10"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.3, delay: 0.1, type: 'spring' }}
          />
          {index < milestones.length - 1 && (
            <div className="w-[2px] bg-[rgba(201,106,74,0.15)] flex-1 min-h-[20px]" />
          )}
        </div>
        <motion.div
          className="flex-1 pb-6"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <span className="font-['Delicious_Handrawn',sans-serif] text-[#c96a4a] text-[20px]">
            {milestone.year}
          </span>
          <h3 className="font-['Inter',sans-serif] text-[rgba(0,0,0,0.85)] text-[16px] mt-0.5 mb-1.5">
            {milestone.title}
          </h3>
          <p className="font-['Inter',sans-serif] text-[#626262] text-[14px] leading-[1.7]">
            {milestone.description}
          </p>
        </motion.div>
      </div>
    </div>
  );
}

function TimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.5'],
  });

  // Animate the vertical line drawing
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section ref={containerRef} className="px-6 md:px-16 lg:px-[120px] py-16 md:py-24 bg-[#FDF9F6]">
      <div className="max-w-[1000px] mx-auto">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-['Delicious_Handrawn',sans-serif] text-[#c96a4a] text-[28px] md:text-[32px] mb-3">
            Our Journey
          </p>
          <p className="font-['Inter',sans-serif] text-[#626262] text-[15px] max-w-[480px] mx-auto leading-[1.7]">
            A timeline of moments that shaped who we are — and who we continue to become.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line (desktop) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-[rgba(201,106,74,0.1)]">
            <motion.div
              className="w-full bg-[#c96a4a] origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Milestones */}
          <div className="flex flex-col md:gap-12">
            {milestones.map((milestone, index) => (
              <TimelineMilestone key={milestone.year} milestone={milestone} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroAboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative h-[50vh] md:h-[65vh] overflow-hidden">
      {/* Background image with parallax */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1765892410441-530076515cff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5yaXNlJTIwaG9wZSUyMG5hdHVyZSUyMHdhcm0lMjBnb2xkZW4lMjBsaWdodHxlbnwxfHx8fDE3NzE1Nzk1OTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Golden sunrise"
          className="w-full h-[130%] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
        style={{ opacity }}
      >
        <motion.p
          className="font-['Delicious_Handrawn',sans-serif] text-white/80 text-[18px] md:text-[22px] mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          About the Foundation
        </motion.p>
        <motion.h1
          className="font-['Inter',sans-serif] font-bold text-white text-[32px] md:text-[48px] lg:text-[56px] leading-[1.15] max-w-[700px] tracking-tight"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          Born from <span className="text-[#e8a88e]">compassion</span>,{' '}
          built with <span className="text-[#c5dbc7]">purpose</span>
        </motion.h1>
        <motion.p
          className="font-['Inter',sans-serif] text-white/70 text-[15px] md:text-[16px] mt-5 max-w-[520px] leading-[1.7]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          A foundation that began not with a plan, but with a heartbeat — for those who needed someone to simply show up.
        </motion.p>
      </motion.div>
    </section>
  );
}

function FoundationStorySection() {
  return (
    <section className="px-6 md:px-16 lg:px-[120px] py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-['Delicious_Handrawn',sans-serif] text-[#c96a4a] text-[28px] md:text-[32px] mb-6">
              The Foundation — Born from Compassion
            </p>
            <div className="space-y-5 font-['Inter',sans-serif] text-[rgba(0,0,0,0.65)] text-[16px] leading-[1.8]">
              <p>
                This foundation began not as an institution, but as a heartfelt vision — a vision to nurture stronger, healthier and more compassionate communities.
              </p>
              <p>
                At its core lies a simple conviction: <span className="text-[#c96a4a] font-medium">every person deserves to live with dignity, equality and hope.</span> We reach out to the places where life is most vulnerable — in healthcare, education, elder care, sanitation, poverty alleviation and environmental protection.
              </p>
              <p>
                Because we believe that true progress is not defined by wealth or prestige, but by the compassion we extend to those most in need.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="relative">
              {/* Decorative background shape */}
              <div className="absolute -top-4 -right-4 w-full h-full rounded-2xl bg-[rgba(159,184,160,0.12)]" />
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
                <ImageWithFallback
                  src="https://drsmitasharmafoundation.com/images/causes1.jpg"
                  alt="Foundation community outreach"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function DrSmitaSection() {
  return (
    <section className="bg-white px-6 md:px-16 lg:px-[120px] py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-20 items-center">
          <motion.div
            className="w-full lg:w-[55%]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-['Delicious_Handrawn',sans-serif] text-[#9fb8a0] text-[20px] mb-1">
              The Heart Behind the Vision
            </p>
            <h2 className="font-['Inter',sans-serif] text-[rgba(0,0,0,0.85)] text-[28px] md:text-[36px] tracking-tight mb-6">
              Dr. Smita Sharma
            </h2>
            <div className="space-y-5 font-['Inter',sans-serif] text-[rgba(0,0,0,0.6)] text-[16px] leading-[1.8]">
              <p>
                The spirit and soul of this foundation flow from the life and work of <span className="text-[#c96a4a] font-medium">Dr. Smita Sharma</span> — a Senior Associate Professor at LBSIM, New Delhi, who dedicated nearly two decades to shaping young minds.
              </p>
              <p>
                But her lessons were never confined to the classroom — she taught her students to think deeply, act kindly and live with integrity. In every role — mentor, colleague, friend and guide — she embodied dignity, resilience and boundless compassion.
              </p>
              <p>
                She taught us that <span className="text-[rgba(0,0,0,0.8)] font-medium italic">true success lies not in accolades, but in the hearts we touch, the kindness we extend, and the hope we kindle in others.</span>
              </p>
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-[45%]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="relative max-w-[420px] mx-auto">
              {/* Hand-drawn style border frame */}
              <div className="absolute -inset-3 rounded-3xl border-2 border-dashed border-[rgba(201,106,74,0.2)]" />
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-[0_12px_40px_rgba(0,0,0,0.1)]">
                <ImageWithFallback
                  src="https://drsmitasharmafoundation.com/images/page/smita.jpg"
                  alt="Dr. Smita Sharma"
                  className="w-full h-full object-cover"
                />
                {/* Warm overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(201,106,74,0.15)] to-transparent" />
              </div>
              {/* Floating label */}
              <motion.div
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white px-5 py-2.5 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-[rgba(0,0,0,0.04)]"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <p className="font-['Inter',sans-serif] text-[13px] text-[#c96a4a] whitespace-nowrap">
                  Senior Associate Professor, LBSIM
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Quote */}
        <motion.div
          className="mt-20 md:mt-24 text-center max-w-[700px] mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="relative py-8">
            <span className="font-['Delicious_Handrawn',sans-serif] text-[80px] md:text-[100px] text-[#9fb8a0] opacity-20 absolute -top-6 md:-top-8 left-4 md:left-8 leading-none select-none">"</span>
            <p className="font-['Inter',sans-serif] text-[18px] md:text-[22px] text-[rgba(0,0,0,0.6)] italic leading-[1.7] px-8 md:px-12">
              Every elder who smiles again, every child who dreams again — is our greatest reward.
            </p>
            <div className="mt-5 flex items-center justify-center gap-3">
              <div className="w-8 h-[1px] bg-[#c96a4a]" />
              <p className="font-['Inter',sans-serif] text-[14px] text-[#c96a4a] tracking-wide">
                Dr. Smita Sharma
              </p>
              <div className="w-8 h-[1px] bg-[#c96a4a]" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ImpactStatsSection() {
  return (
    <section className="bg-[rgba(159,184,160,0.08)] px-6 md:px-16 lg:px-[120px] py-16 md:py-20">
      <div className="max-w-[1000px] mx-auto">
        <motion.p
          className="font-['Delicious_Handrawn',sans-serif] text-[#c96a4a] text-[28px] md:text-[32px] text-center mb-12"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Impact in Numbers
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          <AnimatedCounter end={10} suffix="k+" label="Meals served to senior citizens" />
          <AnimatedCounter end={200} suffix="+" label="Children educated & rehabilitated" duration={2.2} />
          <AnimatedCounter end={50} suffix="+" label="Health camps organized" duration={1.8} />
          <AnimatedCounter end={100} suffix="+" label="Active volunteers" duration={2} />
        </div>
      </div>
    </section>
  );
}

function AimsSection() {
  return (
    <section className="px-6 md:px-16 lg:px-[120px] py-16 md:py-24">
      <div className="max-w-[1000px] mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-['Delicious_Handrawn',sans-serif] text-[#c96a4a] text-[28px] md:text-[32px] mb-3">
            Our Aims
          </p>
          <p className="font-['Inter',sans-serif] text-[#626262] text-[15px] max-w-[440px] mx-auto leading-[1.6]">
            What we set out to do — guided by the belief that care changes everything.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {aims.map((aim, i) => (
            <motion.div
              key={i}
              className="group relative bg-white rounded-xl p-6 border border-[rgba(0,0,0,0.05)] hover:border-[rgba(201,106,74,0.15)] transition-all duration-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300"
                  style={{ backgroundColor: `${aim.color}10` }}
                >
                  <aim.icon className="w-5 h-5" style={{ color: aim.color }} />
                </div>
                <p className="font-['Inter',sans-serif] text-[rgba(0,0,0,0.7)] text-[15px] leading-[1.7] pt-2">
                  {aim.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="px-6 md:px-16 lg:px-[120px] py-16 md:py-20">
      <motion.div
        className="max-w-[900px] mx-auto bg-gradient-to-br from-[#c96a4a] to-[#b85a3a] rounded-2xl p-8 md:p-14 text-center relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10">
          <p className="font-['Delicious_Handrawn',sans-serif] text-white/70 text-[20px] mb-2">
            Walk with us
          </p>
          <h2 className="font-['Inter',sans-serif] font-bold text-white text-[24px] md:text-[32px] leading-[1.3] mb-4">
            Every act of care creates a ripple<br className="hidden md:block" /> that reaches further than we know
          </h2>
          <p className="font-['Inter',sans-serif] text-white/70 text-[15px] max-w-[480px] mx-auto leading-[1.7] mb-8">
            Whether you volunteer, donate, or simply spread the word — you become part of a community committed to compassion.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
            <Link
              to="/join-us"
              className="group bg-white text-[#c96a4a] px-7 py-3 rounded-lg font-['Inter',sans-serif] font-medium text-[15px] hover:bg-white/95 transition-colors inline-flex items-center gap-2"
            >
              Join as a Volunteer
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="text-white/90 px-7 py-3 rounded-lg font-['Inter',sans-serif] text-[15px] border border-white/25 hover:bg-white/10 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      <HeroAboutSection />
      <FoundationStorySection />
      <DrSmitaSection />
      <ImpactStatsSection />
      <TimelineSection />
      <AimsSection />
      <CTASection />
    </>
  );
}