import { motion } from 'motion/react';
import { Link } from 'react-router';
import { PageHeader } from '../components/PageHeader';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Home, BookOpen, HeartPulse } from 'lucide-react';

const initiatives = [
  {
    icon: Home,
    title: 'Safe Shelter & Daily Care',
    description:
      'We provide secure, child-friendly living environments where nutritious meals, clean clothing and everyday necessities ensure stability and comfort. Trained caregivers and coordinators offer constant support, supervision and emotional warmth.',
  },
  {
    icon: BookOpen,
    title: 'Education & Academic Support',
    description:
      'From school admissions to tutoring and extracurricular learning, we make sure every child receives strong educational foundations. We also offer digital learning access, scholarships and career counseling for older children.',
  },
  {
    icon: HeartPulse,
    title: 'Healthcare & Emotional Well-Being',
    description:
      'Comprehensive healthcare support including regular check-ups, mental health counseling and emotional wellness programs to help every child grow with confidence and security.',
  },
];

export default function OrphanSupportPage() {
  return (
    <>
      <PageHeader
        title="Orphan Support"
        subtitle="Nurturing young lives with education, shelter, and the warmth of belonging."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Cause', href: '/' },
          { label: 'Orphan Support' },
        ]}
      />

      {/* Hero banner */}
      <section className="relative overflow-hidden">
        <div className="aspect-[21/9] md:aspect-[3/1] w-full">
          <ImageWithFallback
            src="https://drsmitasharmafoundation.com/images/page/Image1762950414.webp"
            alt="Orphan Support"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-16 lg:px-[120px] pb-8 md:pb-12">
            <motion.p
              className="font-['Inter',sans-serif] text-white text-[20px] md:text-[28px] max-w-[600px] leading-[1.4]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Every Child Deserves Love, Protection and the Opportunity to Dream
            </motion.p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="px-6 md:px-16 lg:px-[120px] py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            className="max-w-[720px]"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-['Delicious_Handrawn',sans-serif] text-[#c96a4a] text-[24px] mb-6">
              Our Promise
            </p>
            <p className="font-['Inter',sans-serif] text-[rgba(0,0,0,0.65)] text-[16px] leading-[1.7]">
              Every child deserves love, protection and the opportunity to dream freely. Our Orphan Support Program is designed to ensure that children without parental care grow up in a safe, nurturing and opportunity-rich environment. We focus on holistic development — physical, emotional, educational and social — so that every child can build a brighter future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="bg-[rgba(159,184,160,0.08)] px-6 md:px-16 lg:px-[120px] py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto">
          <motion.p
            className="font-['Delicious_Handrawn',sans-serif] text-[#c96a4a] text-[28px] md:text-[32px] mb-12 text-center"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4 }}
          >
            Support Initiatives
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {initiatives.map((item, i) => (
              <motion.div
                key={item.title}
                className="bg-white rounded-xl p-6 md:p-8"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="w-10 h-10 rounded-lg bg-[rgba(201,106,74,0.1)] flex items-center justify-center mb-5">
                  <item.icon className="w-5 h-5 text-[#c96a4a]" />
                </div>
                <h3 className="font-['Inter',sans-serif] text-[rgba(0,0,0,0.8)] text-[17px] mb-3 leading-[1.4]">
                  {item.title}
                </h3>
                <p className="font-['Inter',sans-serif] text-[rgba(0,0,0,0.55)] text-[14px] leading-[1.7]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-16 lg:px-[120px] py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto text-center">
          <p className="font-['Inter',sans-serif] text-[rgba(0,0,0,0.65)] text-[16px] mb-6 max-w-[500px] mx-auto">
            Join hands, share resources, and be the change someone needs today.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/join-us"
              className="bg-black text-[#fafafa] px-6 py-2.5 rounded-lg font-['Geist',sans-serif] text-[14px] hover:bg-[rgba(0,0,0,0.85)] transition-colors"
            >
              Volunteer with us
            </Link>
            <Link
              to="/contact"
              className="bg-white text-black px-6 py-2.5 rounded-lg font-['Geist',sans-serif] text-[14px] border border-[rgba(0,0,0,0.15)] hover:border-[rgba(0,0,0,0.3)] transition-colors"
            >
              Contact Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}