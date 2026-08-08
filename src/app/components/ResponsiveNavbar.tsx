import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import imgLogo from "figma:asset/c51118b692a5ee01203918025e2cacc3e384072f.png";

const FOUNDER_PHOTO = "https://drsmitasharmafoundation.com/images/page/smita.jpg";

interface NavLinkItem {
  label: string;
  href: string;
  children?: NavLinkItem[];
}

const navLinks: NavLinkItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Our Work', href: '/our-work' },
  { label: 'News & Events', href: '/news-events' },
  {
    label: 'Cause',
    href: '#',
    children: [
      { label: 'Health Care', href: '/cause/healthcare' },
      { label: 'Elderly Care', href: '/cause/elderly-care' },
      { label: 'Orphan Support', href: '/cause/orphan-support' },
    ],
  },
  { label: 'Join Us', href: '/join-us' },
  { label: 'Gallery', href: '/gallery' },
];

function DesktopNavLink({ item }: { item: NavLinkItem }) {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isActive = item.href === '/'
    ? location.pathname === '/'
    : location.pathname.startsWith(item.href) && item.href !== '#';

  const isChildActive = item.children?.some((child) =>
    location.pathname.startsWith(child.href)
  );

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (item.children) {
    return (
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className={`flex items-center gap-1 font-['Inter',sans-serif] text-[14px] tracking-[-0.2px] transition-colors ${
            isChildActive ? 'text-[#c96a4a]' : 'text-[rgba(0,0,0,0.65)] hover:text-[#c96a4a]'
          }`}
        >
          {item.label}
          <ChevronDown
            className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
          />
        </button>

        <AnimatePresence>
          {isDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              transition={{ duration: 0.15 }}
              className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-[rgba(0,0,0,0.08)] py-2 min-w-[180px] z-50"
            >
              {item.children.map((child) => {
                const childActive = location.pathname.startsWith(child.href);
                return (
                  <Link
                    key={child.href}
                    to={child.href}
                    onClick={() => setIsDropdownOpen(false)}
                    className={`block px-4 py-2 font-['Inter',sans-serif] text-[14px] transition-colors ${
                      childActive
                        ? 'text-[#c96a4a] bg-[rgba(201,106,74,0.05)]'
                        : 'text-[rgba(0,0,0,0.65)] hover:text-[#c96a4a] hover:bg-[rgba(201,106,74,0.05)]'
                    }`}
                  >
                    {child.label}
                  </Link>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <Link
      to={item.href}
      className={`relative font-['Inter',sans-serif] text-[14px] tracking-[-0.2px] transition-colors ${
        isActive ? 'text-[#c96a4a]' : 'text-[rgba(0,0,0,0.65)] hover:text-[#c96a4a]'
      }`}
    >
      {item.label}
      {isActive && (
        <motion.div
          layoutId="nav-active-indicator"
          className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#c96a4a] rounded-full"
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        />
      )}
    </Link>
  );
}

// Animated hamburger icon that morphs to X
function AnimatedHamburger({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="lg:hidden relative flex items-center justify-center w-10 h-10 rounded-lg transition-colors z-50"
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
    >
      <div className="w-5 h-4 relative flex flex-col justify-between">
        <motion.span
          className="block h-[2px] rounded-full origin-left"
          style={{ backgroundColor: isOpen ? '#FDF9F6' : 'rgba(0,0,0,0.75)' }}
          animate={
            isOpen
              ? { rotate: 45, x: 2, y: -1, width: '100%' }
              : { rotate: 0, x: 0, y: 0, width: '100%' }
          }
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.span
          className="block h-[2px] rounded-full"
          style={{ backgroundColor: isOpen ? '#FDF9F6' : 'rgba(0,0,0,0.75)' }}
          animate={
            isOpen
              ? { opacity: 0, x: -10 }
              : { opacity: 1, x: 0, width: '70%' }
          }
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.span
          className="block h-[2px] rounded-full origin-left"
          style={{ backgroundColor: isOpen ? '#FDF9F6' : 'rgba(0,0,0,0.75)' }}
          animate={
            isOpen
              ? { rotate: -45, x: 2, y: 1, width: '100%' }
              : { rotate: 0, x: 0, y: 0, width: '85%' }
          }
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </button>
  );
}

// Full-screen mobile menu link
function FullScreenMobileNavLink({
  item,
  index,
  onClose,
}: {
  item: NavLinkItem;
  index: number;
  onClose: () => void;
}) {
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(false);

  const isActive = item.href === '/'
    ? location.pathname === '/'
    : location.pathname.startsWith(item.href) && item.href !== '#';

  const isChildActive = item.children?.some((child) =>
    location.pathname.startsWith(child.href)
  );

  if (item.children) {
    return (
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 60 }}
        transition={{
          duration: 0.5,
          delay: 0.08 + index * 0.06,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`flex items-center justify-between w-full py-2 font-['Inter',sans-serif] text-[26px] tracking-[-0.5px] transition-colors ${
            isChildActive
              ? 'text-[#c96a4a]'
              : 'text-[#FDF9F6]/80 hover:text-[#c96a4a]'
          }`}
        >
          <span>{item.label}</span>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </button>
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="pl-4 pb-2 flex flex-col gap-1">
                {item.children.map((child, ci) => {
                  const childActive = location.pathname.startsWith(child.href);
                  return (
                    <motion.div
                      key={child.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: ci * 0.05, duration: 0.3 }}
                    >
                      <Link
                        to={child.href}
                        onClick={onClose}
                        className={`block py-2 font-['Inter',sans-serif] text-[18px] tracking-[-0.3px] transition-colors ${
                          childActive
                            ? 'text-[#c96a4a]'
                            : 'text-[#FDF9F6]/50 hover:text-[#c96a4a]'
                        }`}
                      >
                        {child.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 60 }}
      transition={{
        duration: 0.5,
        delay: 0.08 + index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link
        to={item.href}
        onClick={onClose}
        className={`block py-2 font-['Inter',sans-serif] text-[26px] tracking-[-0.5px] transition-colors ${
          isActive
            ? 'text-[#c96a4a]'
            : 'text-[#FDF9F6]/80 hover:text-[#c96a4a]'
        }`}
      >
        {item.label}
      </Link>
    </motion.div>
  );
}

export default function ResponsiveNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className={`relative z-40 transition-colors duration-300 ${isMobileMenuOpen ? 'bg-transparent' : 'bg-white'}`}>
      <div className="flex items-center justify-between px-6 md:px-16 lg:px-[120px] py-4 lg:py-5">
        {/* Logo */}
        <Link to="/" className="shrink-0 relative z-50">
          <div className="h-[36px] md:h-[43px] w-[136px] md:w-[163px] relative">
            <img
              alt="Dr. Smita Sharma Foundation"
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-all duration-300"
              style={{
                filter: isMobileMenuOpen ? 'brightness(0) invert(1)' : 'none',
              }}
              src={imgLogo}
            />
          </div>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-8">
            {navLinks.map((item) => (
              <DesktopNavLink key={item.label} item={item} />
            ))}
          </div>
          <Link
            to="/contact"
            className="bg-black text-[#fafafa] px-6 py-2.5 rounded-lg font-['Geist',sans-serif] text-[14px] hover:bg-[rgba(0,0,0,0.85)] transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Mobile hamburger button */}
        <AnimatedHamburger
          isOpen={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />
      </div>

      {/* Full-screen mobile menu overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-30 lg:hidden"
            style={{ background: 'rgba(26, 18, 14, 0.97)' }}
          >
            {/* Subtle warm gradient orbs in menu background */}
            <motion.div
              className="absolute top-[10%] right-[-10%] w-[50vw] h-[50vw] rounded-full blur-[100px]"
              style={{ background: 'radial-gradient(circle, rgba(201,106,74,0.12) 0%, transparent 70%)' }}
              animate={{
                x: [0, -15, 10, 0],
                y: [0, 10, -15, 0],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute bottom-[20%] left-[-10%] w-[40vw] h-[40vw] rounded-full blur-[80px]"
              style={{ background: 'radial-gradient(circle, rgba(159,184,160,0.08) 0%, transparent 70%)' }}
              animate={{
                x: [0, 15, -10, 0],
                y: [0, -10, 15, 0],
              }}
              transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Decorative hand-drawn line */}
            <motion.div
              className="absolute top-[72px] left-8 right-8 h-[1px]"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(201,106,74,0.2), rgba(159,184,160,0.15), transparent)',
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* Menu content */}
            <div className="flex flex-col h-full pt-[90px] px-8">
              {/* Navigation links */}
              <div className="flex-1 flex flex-col justify-center -mt-4">
                <div className="flex flex-col gap-0.5">
                  {navLinks.map((item, index) => (
                    <FullScreenMobileNavLink
                      key={item.label}
                      item={item}
                      index={index}
                      onClose={() => setIsMobileMenuOpen(false)}
                    />
                  ))}

                  {/* Contact button */}
                  <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 60 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.08 + navLinks.length * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mt-5"
                  >
                    <Link
                      to="/contact"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="inline-block bg-[#c96a4a] text-white px-8 py-3 rounded-xl font-['Geist',sans-serif] text-[14px] text-center hover:bg-[#b55a3d] transition-colors"
                    >
                      Contact Us
                    </Link>
                  </motion.div>
                </div>
              </div>

              {/* Bottom section with Dr. Smita's photo */}
              <motion.div
                className="pb-10 flex items-end gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Photo with warm glow */}
                <div className="relative shrink-0">
                  {/* Glow behind photo */}
                  <motion.div
                    className="absolute inset-[-8px] rounded-full blur-[12px]"
                    style={{
                      background: 'radial-gradient(circle, rgba(201,106,74,0.3) 0%, rgba(159,184,160,0.15) 50%, transparent 70%)',
                    }}
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.4, 0.7, 0.4],
                    }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  {/* Rotating ring */}
                  <motion.div
                    className="absolute inset-[-3px] rounded-full"
                    style={{
                      background: 'conic-gradient(from 0deg, rgba(201,106,74,0.5), rgba(159,184,160,0.3), rgba(201,106,74,0.5))',
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                  />
                  <div className="relative w-[56px] h-[56px] rounded-full overflow-hidden border-[2px] border-[#FDF9F6]/30">
                    <img
                      src={FOUNDER_PHOTO}
                      alt="Dr. Smita Sharma"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>

                {/* Tagline next to photo */}
                <div className="flex flex-col gap-0.5">
                  <span className="font-['Delicious_Handrawn',sans-serif] text-[#c96a4a] text-[14px]">
                    In her memory
                  </span>
                  <span className="font-['Inter',sans-serif] text-[#FDF9F6]/40 text-[11px] tracking-[-0.2px]">
                    This is not charity. This is humanity.
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
