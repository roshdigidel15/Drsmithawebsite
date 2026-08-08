import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs: { label: string; href?: string }[];
}

export function PageHeader({ title, subtitle, breadcrumbs }: PageHeaderProps) {
  return (
    <div className="relative bg-[#FDF9F6] overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-[rgba(201,106,74,0.03)] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[200px] h-[200px] rounded-full bg-[rgba(159,184,160,0.05)] translate-y-1/2 -translate-x-1/3" />

      <div className="relative max-w-[1200px] mx-auto px-6 md:px-16 lg:px-[120px] py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-1.5 mb-5">
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                {i > 0 && (
                  <ChevronRight className="w-3.5 h-3.5 text-[#ababab]" />
                )}
                {crumb.href ? (
                  <Link
                    to={crumb.href}
                    className="font-['Inter',sans-serif] text-[13px] text-[rgba(0,0,0,0.4)] hover:text-[#c96a4a] transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="font-['Inter',sans-serif] text-[13px] text-[#c96a4a]">
                    {crumb.label}
                  </span>
                )}
              </span>
            ))}
          </nav>

          {/* Title */}
          <h1 className="font-['Inter',sans-serif] text-[30px] md:text-[40px] text-[rgba(0,0,0,0.85)] tracking-[-0.5px] leading-[1.2]">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <motion.p
              className="font-['Inter',sans-serif] text-[15px] text-[#626262] mt-3 max-w-[520px] leading-[1.7]"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              {subtitle}
            </motion.p>
          )}

          {/* Decorative accent line */}
          <motion.div
            className="mt-6 w-12 h-[3px] rounded-full bg-[#c96a4a]"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          />
        </motion.div>
      </div>
    </div>
  );
}
