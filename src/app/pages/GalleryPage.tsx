import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { PageHeader } from '../components/PageHeader';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryImage {
  id: string;
  src: string;
  caption: string;
  aspect: 'tall' | 'wide' | 'square';
}

const galleryImages: GalleryImage[] = [
  { id: 'g1', src: 'https://drsmitasharmafoundation.com/galleryImages/GalleryImage1762013908.jpg', caption: 'Foundation Day Celebration', aspect: 'wide' },
  { id: 'g2', src: 'https://drsmitasharmafoundation.com/galleryImages/GalleryImage1762013624.jpg', caption: 'Food Distribution Drive', aspect: 'tall' },
  { id: 'g3', src: 'https://drsmitasharmafoundation.com/galleryImages/GalleryImage1762013916.jpg', caption: 'Community Outreach', aspect: 'square' },
  { id: 'g4', src: 'https://drsmitasharmafoundation.com/galleryImages/GalleryImage1762013924.jpg', caption: 'Community Event', aspect: 'tall' },
  { id: 'g5', src: 'https://drsmitasharmafoundation.com/galleryImages/GalleryImage1762013929.jpg', caption: 'Health Awareness Camp', aspect: 'wide' },
  { id: 'g6', src: 'https://drsmitasharmafoundation.com/galleryImages/GalleryImage1762013937.jpg', caption: 'Volunteer Meet', aspect: 'square' },
  { id: 'g7', src: 'https://drsmitasharmafoundation.com/galleryImages/GalleryImage1762013942.jpg', caption: 'Awareness Campaign', aspect: 'tall' },
  { id: 'g8', src: 'https://drsmitasharmafoundation.com/galleryImages/GalleryImage1762013946.jpg', caption: 'Support Drive', aspect: 'wide' },
  { id: 'g9', src: 'https://drsmitasharmafoundation.com/images/causes5.jpg', caption: 'Elder Care Initiative', aspect: 'tall' },
  { id: 'g10', src: 'https://drsmitasharmafoundation.com/images/causes1.jpg', caption: 'Healthcare Outreach', aspect: 'wide' },
  { id: 'g11', src: 'https://drsmitasharmafoundation.com/images/causes4.jpg', caption: 'Community Support', aspect: 'square' },
];

function getAspectClass(aspect: string) {
  switch (aspect) {
    case 'tall': return 'aspect-[3/4]';
    case 'wide': return 'aspect-[4/3]';
    default: return 'aspect-square';
  }
}

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const navigateImage = useCallback((direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    if (direction === 'next') {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    } else {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
    }
  }, [selectedImage]);

  // Keyboard navigation
  useEffect(() => {
    if (selectedImage === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
      if (e.key === 'ArrowRight') navigateImage('next');
      if (e.key === 'ArrowLeft') navigateImage('prev');
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selectedImage, navigateImage]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selectedImage]);

  return (
    <>
      <PageHeader
        title="Gallery"
        subtitle="Glimpses from our journey of care, community, and compassion."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Gallery' },
        ]}
      />

      <section className="px-6 md:px-16 lg:px-[120px] py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto">
          {/* Section header */}
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <p className="font-['Delicious_Handrawn',sans-serif] text-[#c96a4a] text-[28px] md:text-[32px] mb-3">
              Our Moments
            </p>
            <p className="font-['Inter',sans-serif] text-[rgba(0,0,0,0.55)] text-[15px] max-w-[420px] mx-auto leading-[1.7]">
              Every photograph captures a story of care, togetherness, and humanity in action.
            </p>
          </motion.div>

          {/* Masonry Grid */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.2 }}
          >
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 640: 2, 900: 3 }}>
              <Masonry gutter="12px">
                {galleryImages.map((img, i) => (
                  <motion.div
                    key={img.id}
                    className={`relative rounded-xl overflow-hidden cursor-pointer group ${getAspectClass(img.aspect)}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                    onClick={() => setSelectedImage(i)}
                    whileHover={{ y: -3 }}
                  >
                    <ImageWithFallback
                      src={img.src}
                      alt={img.caption}
                      className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      <p className="font-['Inter',sans-serif] text-white text-[13px]">{img.caption}</p>
                    </div>
                  </motion.div>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/92 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelectedImage(null)}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors z-10"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Prev button */}
            <button
              onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors z-10"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>

            {/* Next button */}
            <button
              onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors z-10"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>

            {/* Image */}
            <motion.div
              key={selectedImage}
              className="max-w-[85vw] md:max-w-[75vw] max-h-[80vh] flex flex-col items-center"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ImageWithFallback
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].caption}
                className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="mt-5 text-center">
                <p className="text-white/80 font-['Inter',sans-serif] text-[15px]">
                  {galleryImages[selectedImage].caption}
                </p>
                <p className="text-white/40 font-['Inter',sans-serif] text-[12px] mt-1">
                  {selectedImage + 1} / {galleryImages.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
