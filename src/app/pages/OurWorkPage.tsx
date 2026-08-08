import { motion } from 'motion/react';
import { Link } from 'react-router';
import { PageHeader } from '../components/PageHeader';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';

const workItems = [
  {
    title: 'Education Facilities',
    description: 'Providing education facilities to poor children empowers them with knowledge, dignity, and a pathway to a brighter future.',
    image: 'https://drsmitasharmafoundation.com/images/page/1761995317solve1.png',
  },
  {
    title: 'Medical Facilities',
    description: 'Providing medical facilities ensures essential healthcare access, saving lives and promoting healthier communities.',
    image: 'https://drsmitasharmafoundation.com/images/page/1761995353solve2.png',
  },
  {
    title: 'Healthy Food',
    description: 'Providing healthy food to needy people nourishes bodies, uplifts spirits, and fosters a more compassionate society.',
    image: 'https://drsmitasharmafoundation.com/images/page/1761995368solve3.png',
  },
  {
    title: 'Community Support',
    description: 'Building stronger, more connected communities through sustained engagement, resources and empowerment programs.',
    image: 'https://drsmitasharmafoundation.com/images/page/1761995384solve4.png',
  },
];

export default function OurWorkPage() {
  return (
    <>
      <PageHeader
        title="Our Work"
        subtitle="Building compassion into action — one life, one community at a time."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Our Work' },
        ]}
      />

      {/* What We Do */}
      <section className="px-6 md:px-16 lg:px-[120px] py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4 }}
          >
            <p className="font-['Delicious_Handrawn',sans-serif] text-[#c96a4a] text-[28px] md:text-[32px] mb-3">
              A Mission to Solve a Problem
            </p>
            <p className="font-['Inter',sans-serif] text-[rgba(0,0,0,0.55)] text-[16px] max-w-[480px] mx-auto">
              The best way to make a difference in the lives of others.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {workItems.map((item, i) => (
              <motion.div
                key={item.title}
                className="rounded-xl overflow-hidden bg-[rgba(159,184,160,0.06)] border border-[rgba(0,0,0,0.04)]"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-['Inter',sans-serif] text-[rgba(0,0,0,0.8)] text-[18px] mb-2">
                    {item.title}
                  </h3>
                  <p className="font-['Inter',sans-serif] text-[rgba(0,0,0,0.55)] text-[14px] leading-[1.7]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Causes overview */}
      <section className="bg-[rgba(159,184,160,0.08)] px-6 md:px-16 lg:px-[120px] py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4 }}
          >
            <p className="font-['Delicious_Handrawn',sans-serif] text-[#c96a4a] text-[28px] md:text-[32px] mb-10">
              The Causes We Care About
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Health Care',
                desc: 'Delivering free medical camps, preventive health programs, and community outreach for the underserved.',
                href: '/cause/healthcare',
                image: 'https://drsmitasharmafoundation.com/images/page/Image1762950361.webp',
              },
              {
                title: 'Elderly Care',
                desc: 'Providing homes, healthcare, and companionship to senior citizens who have no one else.',
                href: '/cause/elderly-care',
                image: 'https://drsmitasharmafoundation.com/images/page/Image1762950402.webp',
              },
              {
                title: 'Orphan Support',
                desc: 'Ensuring every child has access to shelter, education, nutrition, and mentorship for a brighter future.',
                href: '/cause/orphan-support',
                image: 'https://drsmitasharmafoundation.com/images/page/Image1762950414.webp',
              },
            ].map((cause, i) => (
              <motion.div
                key={cause.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Link
                  to={cause.href}
                  className="block rounded-xl overflow-hidden bg-white border border-[rgba(0,0,0,0.04)] hover:shadow-md transition-shadow group"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <ImageWithFallback
                      src={cause.image}
                      alt={cause.title}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 text-left">
                    <h3 className="font-['Inter',sans-serif] text-[#c96a4a] text-[17px] mb-2">
                      {cause.title}
                    </h3>
                    <p className="font-['Inter',sans-serif] text-[rgba(0,0,0,0.55)] text-[14px] leading-[1.6]">
                      {cause.desc}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-16 lg:px-[120px] py-16 md:py-20">
        <motion.div
          className="max-w-[900px] mx-auto bg-gradient-to-br from-[#c96a4a] to-[#b85a3a] rounded-2xl p-8 md:p-14 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />
          <div className="relative z-10">
            <p className="font-['Delicious_Handrawn',sans-serif] text-white/70 text-[20px] mb-2">
              Want to know how you can help?
            </p>
            <h2 className="font-['Inter',sans-serif] font-bold text-white text-[24px] md:text-[32px] leading-[1.3] mb-4">
              Join hands, share resources, and be the change someone needs today
            </h2>
            <p className="font-['Inter',sans-serif] text-white/70 text-[15px] max-w-[480px] mx-auto leading-[1.7] mb-8">
              Every small act of kindness builds a stronger, more connected world.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
              <Link
                to="/join-us"
                className="group bg-white text-[#c96a4a] px-7 py-3 rounded-lg font-['Inter',sans-serif] font-medium text-[15px] hover:bg-white/95 transition-colors inline-flex items-center gap-2"
              >
                Volunteer with us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="text-white/90 px-7 py-3 rounded-lg font-['Inter',sans-serif] text-[15px] border border-white/25 hover:bg-white/10 transition-colors"
              >
                Contact Now
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}