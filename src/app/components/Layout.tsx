import { Outlet, useLocation, ScrollRestoration } from 'react-router';
import { AnimatePresence } from 'motion/react';
import Banner from '../imports/Banner-12-2853';
import ResponsiveNavbar from './ResponsiveNavbar';
import Footer from '../imports/Footer';
import { PageTransition } from './PageTransition';

export default function Layout() {
  const location = useLocation();

  return (
    <div className="relative min-h-screen flex flex-col bg-white">
      {/* Fixed Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 w-full">
        <Banner />
        <ResponsiveNavbar />
      </div>

      {/* Spacer for fixed nav */}
      <div className="pt-[90px] md:pt-[107px]" />

      {/* Page content with transition */}
      <main className="relative flex-1">
        <AnimatePresence mode="wait">
          <PageTransition key={location.pathname}>
            <Outlet />
          </PageTransition>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer />

      <ScrollRestoration />
    </div>
  );
}