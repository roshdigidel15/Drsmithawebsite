import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { PageHeader } from '../components/PageHeader';
import { Users, Eye, Phone } from 'lucide-react';

export default function JoinUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    agreed: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission placeholder
  };

  return (
    <>
      <PageHeader
        title="Join Us"
        subtitle="Be part of a movement that values compassion over convenience."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Join Us' },
        ]}
      />

      <section className="px-6 md:px-16 lg:px-[120px] py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Form */}
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="font-['Delicious_Handrawn',sans-serif] text-[#c96a4a] text-[28px] md:text-[32px] mb-2">
                Become a Volunteer!
              </p>
              <p className="font-['Inter',sans-serif] text-[rgba(0,0,0,0.55)] text-[15px] mb-8">
                Just fill the form to become a volunteer. Our team will contact you soon.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block font-['Inter',sans-serif] text-[rgba(0,0,0,0.65)] text-[14px] mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-[rgba(0,0,0,0.12)] bg-white font-['Inter',sans-serif] text-[14px] focus:outline-none focus:border-[#c96a4a] transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block font-['Inter',sans-serif] text-[rgba(0,0,0,0.65)] text-[14px] mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-[rgba(0,0,0,0.12)] bg-white font-['Inter',sans-serif] text-[14px] focus:outline-none focus:border-[#c96a4a] transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block font-['Inter',sans-serif] text-[rgba(0,0,0,0.65)] text-[14px] mb-1.5">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-[rgba(0,0,0,0.12)] bg-white font-['Inter',sans-serif] text-[14px] focus:outline-none focus:border-[#c96a4a] transition-colors"
                    placeholder="+91"
                  />
                </div>
                <div>
                  <label className="block font-['Inter',sans-serif] text-[rgba(0,0,0,0.65)] text-[14px] mb-1.5">
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-2.5 rounded-lg border border-[rgba(0,0,0,0.12)] bg-white font-['Inter',sans-serif] text-[14px] focus:outline-none focus:border-[#c96a4a] transition-colors resize-none"
                    placeholder="How would you like to help?"
                  />
                </div>
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="agree"
                    checked={formData.agreed}
                    onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                    className="mt-1 accent-[#c96a4a]"
                  />
                  <label htmlFor="agree" className="font-['Inter',sans-serif] text-[rgba(0,0,0,0.55)] text-[13px]">
                    I agree to the terms and privacy policy
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-black text-[#fafafa] px-6 py-3 rounded-lg font-['Geist',sans-serif] text-[14px] hover:bg-[rgba(0,0,0,0.85)] transition-colors"
                >
                  Submit
                </button>
              </form>
            </motion.div>

            {/* Info cards */}
            <motion.div
              className="w-full lg:w-1/2 flex flex-col gap-6"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <p className="font-['Delicious_Handrawn',sans-serif] text-[#c96a4a] text-[24px] mb-2">
                The Best Way to Make a Difference
              </p>

              {[
                {
                  icon: Eye,
                  title: 'Who We Are',
                  desc: 'Want to know more about us',
                  link: '/about',
                  linkText: 'Explore Now',
                },
                {
                  icon: Users,
                  title: 'Become Volunteer',
                  desc: 'Fill the form to become a volunteer',
                  link: '/join-us',
                  linkText: 'Volunteer with us',
                },
                {
                  icon: Phone,
                  title: 'Explore our Programs',
                  desc: 'Get in touch to know more',
                  link: '/contact',
                  linkText: 'Contact Now',
                },
              ].map((card, i) => (
                <motion.div
                  key={card.title}
                  className="bg-[rgba(159,184,160,0.06)] rounded-xl p-6 border border-[rgba(0,0,0,0.04)]"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-[rgba(201,106,74,0.1)] flex items-center justify-center shrink-0 mt-0.5">
                      <card.icon className="w-4 h-4 text-[#c96a4a]" />
                    </div>
                    <div>
                      <h3 className="font-['Inter',sans-serif] text-[rgba(0,0,0,0.75)] text-[16px] mb-1">
                        {card.title}
                      </h3>
                      <p className="font-['Inter',sans-serif] text-[rgba(0,0,0,0.45)] text-[14px] mb-3">
                        {card.desc}
                      </p>
                      <Link
                        to={card.link}
                        className="font-['Inter',sans-serif] text-[#c96a4a] text-[13px] hover:underline"
                      >
                        {card.linkText}
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}