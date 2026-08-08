import { useState } from 'react';
import { motion } from 'motion/react';
import { PageHeader } from '../components/PageHeader';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out and let's start a conversation."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact Us' },
        ]}
      />

      <section className="px-6 md:px-16 lg:px-[120px] py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Contact info */}
            <motion.div
              className="w-full lg:w-2/5"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="font-['Delicious_Handrawn',sans-serif] text-[#c96a4a] text-[28px] md:text-[32px] mb-8">
                Quick Contact
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[rgba(201,106,74,0.1)] flex items-center justify-center shrink-0">
                    <MapPin className="w-4.5 h-4.5 text-[#c96a4a]" />
                  </div>
                  <div>
                    <p className="font-['Inter',sans-serif] text-[rgba(0,0,0,0.75)] text-[15px] mb-0.5">Location</p>
                    <p className="font-['Inter',sans-serif] text-[rgba(0,0,0,0.5)] text-[14px]">Delhi</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[rgba(201,106,74,0.1)] flex items-center justify-center shrink-0">
                    <Phone className="w-4.5 h-4.5 text-[#c96a4a]" />
                  </div>
                  <div>
                    <p className="font-['Inter',sans-serif] text-[rgba(0,0,0,0.75)] text-[15px] mb-0.5">Call Us</p>
                    <a href="tel:+919211483939" className="font-['Inter',sans-serif] text-[rgba(0,0,0,0.5)] text-[14px] hover:text-[#c96a4a] transition-colors">
                      +91-9211483939
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[rgba(201,106,74,0.1)] flex items-center justify-center shrink-0">
                    <Mail className="w-4.5 h-4.5 text-[#c96a4a]" />
                  </div>
                  <div>
                    <p className="font-['Inter',sans-serif] text-[rgba(0,0,0,0.75)] text-[15px] mb-0.5">Email Us</p>
                    <a href="mailto:drsmitasharmafoundation@outlook.com" className="font-['Inter',sans-serif] text-[rgba(0,0,0,0.5)] text-[14px] hover:text-[#c96a4a] transition-colors break-all">
                      drsmitasharmafoundation@outlook.com
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact form */}
            <motion.div
              className="w-full lg:w-3/5"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <p className="font-['Inter',sans-serif] text-[rgba(0,0,0,0.75)] text-[20px] mb-2">
                Let's talk!
              </p>
              <p className="font-['Inter',sans-serif] text-[rgba(0,0,0,0.45)] text-[14px] mb-8">
                Feel free to contact us
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-['Inter',sans-serif] text-[rgba(0,0,0,0.65)] text-[14px] mb-1.5">
                      Name
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
                </div>
                <div>
                  <label className="block font-['Inter',sans-serif] text-[rgba(0,0,0,0.65)] text-[14px] mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-[rgba(0,0,0,0.12)] bg-white font-['Inter',sans-serif] text-[14px] focus:outline-none focus:border-[#c96a4a] transition-colors"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label className="block font-['Inter',sans-serif] text-[rgba(0,0,0,0.65)] text-[14px] mb-1.5">
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-2.5 rounded-lg border border-[rgba(0,0,0,0.12)] bg-white font-['Inter',sans-serif] text-[14px] focus:outline-none focus:border-[#c96a4a] transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="contact-agree"
                    checked={formData.agreed}
                    onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                    className="mt-1 accent-[#c96a4a]"
                  />
                  <label htmlFor="contact-agree" className="font-['Inter',sans-serif] text-[rgba(0,0,0,0.55)] text-[13px]">
                    I agree to the terms and privacy policy
                  </label>
                </div>
                <button
                  type="submit"
                  className="bg-black text-[#fafafa] px-8 py-3 rounded-lg font-['Geist',sans-serif] text-[14px] hover:bg-[rgba(0,0,0,0.85)] transition-colors"
                >
                  Contact us
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}