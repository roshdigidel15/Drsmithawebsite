import { motion } from 'motion/react';
import { Link } from 'react-router';
import { PageHeader } from '../components/PageHeader';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Home, HeartHandshake, Scale, Users } from 'lucide-react';

const initiatives = [
  {
    icon: Home,
    title: 'Day-Care & Wellness Centers',
    description:
      'Providing regular health check-ups, wellness activities and a safe space for social interaction.',
  },
  {
    icon: HeartHandshake,
    title: 'Home-Based Caregiving & Companionship',
    description:
      'Offering trained caregivers who assist with daily tasks while providing emotional support and companionship.',
  },
  {
    icon: Scale,
    title: 'Pension Awareness & Legal Aid Clinics',
    description:
      'Guiding seniors through pension schemes, government benefits and essential legal support.',
  },
  {
    icon: Users,
    title: 'Intergenerational Events',
    description:
      'Creating opportunities for young people to engage with elders, fostering respect, learning and joyful community bonding.',
  },
];

export default function ElderlyCarePage() {
  return (
    <>
      <PageHeader
        title="Elderly Care"
        subtitle="Ensuring dignity, comfort and holistic care for senior citizens."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Cause', href: '/' },
          { label: 'Elderly Care' },
        ]}
      />

      {/* Hero banner */}
      <section className="relative overflow-hidden">
        <div className="aspect-[21/9] md:aspect-[3/1] w-full">
          <ImageWithFallback
            src="https://drsmitasharmafoundation.com/images/page/Image1762950402.webp"
            alt="Elderly Care"
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
              Ensuring Dignity, Comfort and Holistic Care for Senior Citizens
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
              Our Commitment
            </p>
            <p className="font-['Inter',sans-serif] text-[rgba(0,0,0,0.65)] text-[16px] leading-[1.7]">
              We are committed to ensuring dignity, comfort and holistic care for senior citizens. Our programs support their physical well-being, emotional health, and social connection — helping them lead fulfilling and active lives.
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
            Our Initiatives
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {initiatives.map((item, i) => (
              <motion.div
                key={item.title}
                className="bg-white rounded-xl p-6 md:p-8"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="w-10 h-10 rounded-lg bg-[rgba(159,184,160,0.15)] flex items-center justify-center mb-5">
                  <item.icon className="w-5 h-5 text-[#9fb8a0]" />
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

      {/* Impact */}
      <section className="px-6 md:px-16 lg:px-[120px] py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-['Delicious_Handrawn',sans-serif] text-[#c96a4a] text-[24px] mb-4">
              Our Impact
            </p>
            <p className="font-['Inter',sans-serif] text-[rgba(0,0,0,0.65)] text-[16px] leading-[1.7] max-w-[600px] mx-auto mb-8">
              Through our initiatives, seniors experience dignity, compassion, companionship and opportunities for healthy, active aging — ensuring they remain valued members of the community.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-black text-[#fafafa] px-6 py-2.5 rounded-lg font-['Geist',sans-serif] text-[14px] hover:bg-[rgba(0,0,0,0.85)] transition-colors"
            >
              Contact Now
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}