import { motion } from 'motion/react';
import { Link } from 'react-router';
import { PageHeader } from '../components/PageHeader';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';

const events = [
  {
    id: 1,
    title: 'Health Camp — Empowering Women & Differently-Abled Persons',
    date: '15 Dec 2025',
    time: '9:00 AM',
    location: 'Jaipur',
    description: 'Free medical check-ups, diagnostics, and specialist consultations for underserved communities. Focused on empowering women and differently-abled persons through accessible healthcare.',
    tag: 'Health Care',
  },
  {
    id: 2,
    title: 'Skill Development & Vocational Training Workshop',
    date: '17 Nov 2025',
    time: '8:30 AM',
    location: 'Jaipur',
    description: 'Vocational training and skill-building workshops for community upliftment — providing practical pathways to self-sufficiency and dignity.',
    tag: 'Education',
  },
];

const successStories = [
  {
    id: 's1',
    title: 'Ankit dreams again',
    description: 'An orphaned child we supported through school is now a graphic designer in training. What started as a scholarship became a doorway to a creative career and a life lived on his own terms.',
    image: 'https://drsmitasharmafoundation.com/images/causes4.jpg',
  },
  {
    id: 's2',
    title: 'Healing the Unseen',
    description: 'Through our mobile medical van, we brought life-saving care to remote villages in Haryana. Hundreds of families received their first-ever health check-ups — care that was long overdue.',
    image: 'https://drsmitasharmafoundation.com/images/causes1.jpg',
  },
  {
    id: 's3',
    title: 'Grandma Meera finds a home',
    description: 'Once abandoned at a bus stop, Meera Devi now lives in comfort and companionship at our elder care facility. She says it\'s the first time in years she\'s felt like she belongs.',
    image: 'https://drsmitasharmafoundation.com/images/causes5.jpg',
  },
];

export default function NewsEventsPage() {
  return (
    <>
      <PageHeader
        title="News & Events"
        subtitle="Stay connected with our upcoming events, camps, and community initiatives."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'News & Events' },
        ]}
      />

      {/* Events */}
      <section className="px-6 md:px-16 lg:px-[120px] py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4 }}
          >
            <p className="font-['Delicious_Handrawn',sans-serif] text-[#c96a4a] text-[28px] md:text-[32px] mb-3">
              Upcoming Events
            </p>
            <p className="font-['Inter',sans-serif] text-[rgba(0,0,0,0.55)] text-[16px]">
              Join us in making a difference — one event at a time.
            </p>
          </motion.div>

          <div className="space-y-6">
            {events.map((event, i) => (
              <motion.div
                key={event.id}
                className="flex flex-col md:flex-row gap-6 md:gap-10 p-6 md:p-8 bg-white rounded-xl border border-[rgba(0,0,0,0.06)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-shadow duration-300"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                {/* Date block */}
                <div className="flex md:flex-col items-center gap-3 md:gap-1 md:min-w-[80px] md:text-center shrink-0">
                  <div className="font-['Inter',sans-serif] font-bold text-[#c96a4a] text-[32px] md:text-[36px] leading-none">
                    {event.date.split(' ')[0]}
                  </div>
                  <div className="font-['Inter',sans-serif] text-[rgba(0,0,0,0.45)] text-[14px]">
                    {event.date.split(' ').slice(1).join(' ')}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 bg-[rgba(201,106,74,0.1)] text-[#c96a4a] rounded-full font-['Inter',sans-serif] text-[12px]">
                      {event.tag}
                    </span>
                  </div>
                  <h3 className="font-['Inter',sans-serif] text-[rgba(0,0,0,0.85)] text-[18px] mb-2 leading-[1.4]">
                    {event.title}
                  </h3>
                  <p className="font-['Inter',sans-serif] text-[rgba(0,0,0,0.55)] text-[14px] leading-[1.7] mb-4">
                    {event.description}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <span className="flex items-center gap-1.5 font-['Inter',sans-serif] text-[rgba(0,0,0,0.45)] text-[13px]">
                      <Clock className="w-3.5 h-3.5" />
                      {event.time}
                    </span>
                    <span className="flex items-center gap-1.5 font-['Inter',sans-serif] text-[rgba(0,0,0,0.45)] text-[13px]">
                      <MapPin className="w-3.5 h-3.5" />
                      {event.location}
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex items-center">
                  <Link
                    to="/contact"
                    className="bg-black text-[#fafafa] px-5 py-2.5 rounded-lg font-['Geist',sans-serif] text-[13px] hover:bg-[rgba(0,0,0,0.85)] transition-colors whitespace-nowrap"
                  >
                    Contact Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-[#FDF9F6] px-6 md:px-16 lg:px-[120px] py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4 }}
          >
            <p className="font-['Delicious_Handrawn',sans-serif] text-[#c96a4a] text-[28px] md:text-[32px] mb-3">
              Success Stories
            </p>
            <p className="font-['Inter',sans-serif] text-[rgba(0,0,0,0.55)] text-[15px] max-w-[460px] mx-auto leading-[1.7]">
              Real stories of transformation — lives touched, hope restored, futures rebuilt.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {successStories.map((story, i) => (
              <motion.div
                key={story.id}
                className="group bg-white rounded-xl overflow-hidden border border-[rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-['Inter',sans-serif] text-[rgba(0,0,0,0.85)] text-[17px] mb-3 leading-[1.4]">
                    {story.title}
                  </h3>
                  <p className="font-['Inter',sans-serif] text-[rgba(0,0,0,0.55)] text-[14px] leading-[1.7]">
                    {story.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-16 lg:px-[120px] py-16 md:py-20">
        <motion.div
          className="max-w-[900px] mx-auto bg-gradient-to-br from-[#9fb8a0] to-[#7a9e7d] rounded-2xl p-8 md:p-14 text-center relative overflow-hidden"
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
                className="group bg-white text-[#7a9e7d] px-7 py-3 rounded-lg font-['Inter',sans-serif] font-medium text-[15px] hover:bg-white/95 transition-colors inline-flex items-center gap-2"
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