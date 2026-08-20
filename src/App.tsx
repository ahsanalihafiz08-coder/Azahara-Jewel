/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  MapPin, 
  Phone, 
  Mail, 
  Star, 
  Compass, 
  ShieldCheck, 
  Award, 
  Sparkles, 
  Maximize2, 
  ChevronRight, 
  Info, 
  ExternalLink, 
  ChevronLeft,
  ChevronDown,
  Briefcase,
  Heart,
  Send,
  CheckCircle,
  Gem,
  Instagram,
  Facebook,
  MessageCircle,
  MessageSquare,
  Clock
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Import Types and Data
import { Collection, Product, GalleryItem, Review } from './types';
import { COLLECTIONS, PRODUCTS, FIRST_9_GALLERY, FINAL_9_GALLERY, REVIEWS_DATA } from './data';

// Import Modular Components
import InteractiveMap from './components/InteractiveMap';
import ProductModal from './components/ProductModal';
import ReviewCarousel from './components/ReviewCarousel';
import ContactForm from './components/ContactForm';
import Chatbot from './components/Chatbot';

const MemoizedInteractiveMap = React.memo(InteractiveMap);
const MemoizedReviewCarousel = React.memo(ReviewCarousel);
const MemoizedContactForm = React.memo(ContactForm);
const MemoizedChatbot = React.memo(Chatbot);
const MemoizedProductModal = React.memo(ProductModal);

interface BoutiqueGalleryProps {
  isDesktop: boolean;
  galleryFilter: string;
  setGalleryFilter: (cat: string) => void;
  displayedFirstGallery: GalleryItem[];
  setActiveLightboxList: (list: GalleryItem[]) => void;
  setActiveLightboxIndex: (idx: number) => void;
}

const BoutiqueGallery = React.memo(({
  isDesktop,
  galleryFilter,
  setGalleryFilter,
  displayedFirstGallery,
  setActiveLightboxList,
  setActiveLightboxIndex
}: BoutiqueGalleryProps) => {
  return (
    <section 
      id="gallery" 
      className="py-24 bg-sand/20 border-none boutique-gallery-section"
      style={isDesktop ? { contain: 'layout paint', contentVisibility: 'auto', containIntrinsicSize: '1000px', willChange: 'transform', transform: 'translateZ(0)' } as React.CSSProperties : { contentVisibility: 'auto', containIntrinsicSize: '1000px' } as React.CSSProperties}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        <div className="text-center mb-12 space-y-3" id="gallery-header">
          <span className="text-xs font-sans-poppins tracking-widest uppercase text-terracotta font-bold">Curated Catalog</span>
          <h2 className="text-4xl md:text-5xl font-serif-cormorant font-bold text-cocoa">
            Boutique Gallery
          </h2>
          <div className="w-16 h-[1px] bg-gold mx-auto" />
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 pt-4 max-w-4xl mx-auto" id="gallery-filters">
            {['All', 'Rings', 'Necklaces', 'Earrings', 'Bracelets', 'Fine Jewellery', 'Special Occasion', 'Pendants & Amulets', 'Bespoke Engagement', 'Heritage Watches'].map((cat) => (
              <button
                key={cat}
                onClick={() => setGalleryFilter(cat)}
                id={`gallery-filter-${cat.replace(/\s+/g, '-').toLowerCase()}`}
                className={`px-4 py-1.5 rounded-full text-xs font-sans-poppins font-medium transition-all duration-300 ${
                  galleryFilter === cat
                    ? 'bg-cocoa text-ivory shadow-sm'
                    : 'bg-white border border-sand/50 text-cocoa/70 hover:bg-sand/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Strict 3-column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto md:px-0" id="gallery-grid">
          {displayedFirstGallery.map((item, index) => (
            <div
              key={item.id}
              onClick={() => {
                setActiveLightboxList(displayedFirstGallery);
                setActiveLightboxIndex(index);
              }}
              className="bg-white rounded-xl overflow-hidden cursor-pointer shadow-sm relative group h-[260px] md:h-[260px] animate-[fadeIn_0.3s_ease-out] hover:shadow-md transition-shadow duration-300"
            >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  style={{ imageRendering: '-webkit-optimize-contrast' }}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  width={380}
                  height={260}
                />
                {/* Subtle luxurious hover overlay */}
                <div className="absolute inset-0 bg-cocoa/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5" />
                
                <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-350 z-10 text-white pointer-events-none">
                  <span className="text-[10px] font-sans-poppins uppercase tracking-wider text-gold font-bold">
                    {item.category}
                  </span>
                  <h4 className="text-lg font-serif-cormorant font-bold italic mt-0.5">{item.title}</h4>
                  <span className="text-[10px] font-sans-manrope text-white/70 flex items-center gap-1 mt-1.5">
                    <Maximize2 className="w-3 h-3" /> Click to enlarge
                  </span>
                </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
});

interface TestimonialsProps {
  isDesktop: boolean;
}

const Testimonials = React.memo(({ isDesktop }: TestimonialsProps) => {
  return (
    <section 
      id="reviews" 
      className="py-24 max-w-7xl mx-auto px-6 md:px-8 testimonials-section"
      style={isDesktop ? { contain: 'layout paint', contentVisibility: 'auto', containIntrinsicSize: '600px', willChange: 'transform', transform: 'translateZ(0)' } : { contentVisibility: 'auto', containIntrinsicSize: '600px' }}
    >
      <div className="text-center mb-16 space-y-3" id="reviews-header">
        <span className="text-xs font-sans-poppins tracking-widest uppercase text-terracotta font-bold">Client Encounters</span>
        <h2 className="text-4xl md:text-5xl font-serif-cormorant font-bold text-cocoa">
          Our Clients’ Thoughts
        </h2>
        <div className="w-16 h-[1px] bg-gold mx-auto" />
      </div>

      <MemoizedReviewCarousel 
        reviews={REVIEWS_DATA} 
        overallRating={4.1} 
        totalReviewsCount={111} 
      />
    </section>
  );
});

interface SignatureCollectionProps {
  isDesktop: boolean;
  displayedFinalGallery: GalleryItem[];
  setActiveLightboxList: (list: GalleryItem[]) => void;
  setActiveLightboxIndex: (idx: number) => void;
}

const SignatureCollection = React.memo(({
  isDesktop,
  displayedFinalGallery,
  setActiveLightboxList,
  setActiveLightboxIndex
}: SignatureCollectionProps) => {
  return (
    <section 
      id="archive-gallery" 
      className="py-24 bg-sand/15 border-none signature-gallery-section"
      style={isDesktop ? { contain: 'layout paint', contentVisibility: 'auto', containIntrinsicSize: '1000px', willChange: 'transform', transform: 'translateZ(0)' } : { contentVisibility: 'auto', containIntrinsicSize: '1000px' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        <div className="text-center mb-12 space-y-3" id="archive-gallery-header">
          <span className="text-xs font-sans-poppins tracking-widest uppercase text-terracotta font-bold">Heritage Catalog</span>
          <h2 className="text-4xl md:text-5xl font-serif-cormorant font-bold text-cocoa">
            Signature Collection Gallery
          </h2>
          <p className="text-xs font-sans-manrope text-cocoa/70 max-w-md mx-auto">
            Exquisite precious metal pieces and gemstone compositions, capturing the timeless beauty of Mexican artisan luxury.
          </p>
          <div className="w-16 h-[1px] bg-gold mx-auto mt-4" />
        </div>

        {/* Strict 3-column Grid Layout with lazy loading */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto md:px-0" id="archive-gallery-grid">
          {displayedFinalGallery.map((item, index) => (
            <div
              key={item.id}
              onClick={() => {
                setActiveLightboxList(displayedFinalGallery);
                setActiveLightboxIndex(index);
              }}
              className="bg-white rounded-xl overflow-hidden cursor-pointer shadow-sm relative group h-[260px] md:h-[260px] animate-[fadeIn_0.3s_ease-out] hover:shadow-md transition-shadow duration-300"
            >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  style={{ imageRendering: '-webkit-optimize-contrast' }}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  width={380}
                  height={260}
                />
                {/* Subtle luxurious hover overlay */}
                <div className="absolute inset-0 bg-cocoa/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5" />
                
                <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-350 z-10 text-white pointer-events-none">
                  <span className="text-[10px] font-sans-poppins uppercase tracking-wider text-gold font-bold">
                    {item.category}
                  </span>
                  <h4 className="text-lg font-serif-cormorant font-bold italic mt-0.5">{item.title}</h4>
                  <span className="text-[10px] font-sans-manrope text-white/70 flex items-center gap-1 mt-1.5">
                    <Maximize2 className="w-3 h-3" /> Click to enlarge
                  </span>
                </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
});

export default function App() {
  // Navigation & Scroll states
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [collectionsDropdownOpen, setCollectionsDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const isScrolledRef = useRef(false);
  const activeSectionRef = useRef('home');
  const scrollTimeoutRef = useRef<any>(null);

  // Close collections dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = () => {
      setCollectionsDropdownOpen((prev) => prev ? false : prev);
    };
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, []);

  // Interactive UI states
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleCloseProductModal = useCallback(() => {
    setSelectedProduct(null);
  }, []);

  const handleSelectProduct = useCallback((prod: Product) => {
    setSelectedProduct(prod);
  }, []);
  const [galleryFilter, setGalleryFilter] = useState('All');
  const [collectionsFilter, setCollectionsFilter] = useState('All');
  const [productsFilter, setProductsFilter] = useState('All');
  const [activeLightboxList, setActiveLightboxList] = useState<GalleryItem[]>([]);
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  // Screen width state for desktop modifications - debounced to prevent layout thrashing and lag
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;
    const checkIsDesktop = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const desktop = window.innerWidth >= 1024;
        setIsDesktop((prev) => prev !== desktop ? desktop : prev);
      }, 100);
    };
    const checkIsDesktopInitial = () => {
      const desktop = window.innerWidth >= 1024;
      setIsDesktop(desktop);
    };
    checkIsDesktopInitial();
    window.addEventListener('resize', checkIsDesktop, { passive: true });
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      window.removeEventListener('resize', checkIsDesktop);
    };
  }, []);

  // Constants
  const STORE_ADDRESS = "Esq. Madero, Calle Palma #27 2do Piso, Edificio Azahara, Centro, Cuauhtémoc, 06000 Ciudad de México, CDMX, Mexico";
  const STORE_PHONE = "+52 55 1058 2278";

  // Custom Smooth Scrolling Helper with Fixed Header Offset
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string, isMobile = false) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Shorter offset for mobile view header (approx 80px), standard offset for desktop (120px)
      const offset = isMobile ? 80 : 120;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      if (isMobile) {
        setMobileMenuOpen(false);
        // Delay scroll slightly on mobile to avoid interruptions from the menu closing animation
        setTimeout(() => {
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 150);
      } else {
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      if (isMobile) {
        setMobileMenuOpen(false);
      }
    }
  };

  // Intersection Observer for highlighting navigation tabs dynamically on scroll (highly optimized to prevent layout thrashing and scrolling lag)
  useEffect(() => {
    // Native IntersectionObserver for active section highlight
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -65% 0px', // Focused around the top/middle of the viewport
      threshold: 0
    };

    let rAFId: number | null = null;
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      if (rAFId) cancelAnimationFrame(rAFId);
      rAFId = requestAnimationFrame(() => {
        const intersecting = entries.filter(e => e.isIntersecting);
        if (intersecting.length > 0) {
          const lastIntersecting = intersecting[intersecting.length - 1];
          const targetId = lastIntersecting.target.id;
          if (activeSectionRef.current !== targetId) {
            activeSectionRef.current = targetId;
            setActiveSection(targetId);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ['home', 'collections', 'jewellery', 'about', 'reviews', 'gallery', 'contact'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Throttled scroll listener only for header background change (isScrolled) and pointer-events toggles
    let ticking = false;
    const handleScroll = () => {
      // Temporarily disable hover states during scroll to prevent expensive layout recalculations
      const galleryGrid = document.getElementById('gallery-grid');
      const archiveGrid = document.getElementById('archive-gallery-grid');
      if (galleryGrid) galleryGrid.classList.add('pointer-events-none');
      if (archiveGrid) archiveGrid.classList.add('pointer-events-none');
      
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        const gGrid = document.getElementById('gallery-grid');
        const aGrid = document.getElementById('archive-gallery-grid');
        if (gGrid) gGrid.classList.remove('pointer-events-none');
        if (aGrid) aGrid.classList.remove('pointer-events-none');
      }, 150);

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY > 40;
          if (isScrolledRef.current !== scrolled) {
            isScrolledRef.current = scrolled;
            setIsScrolled(scrolled);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      observer.disconnect();
      if (rAFId) cancelAnimationFrame(rAFId);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Cached default sub-arrays to prevent redundant execution on every render cycle
  const defaultFirstGallery = useMemo(() => {
    return FIRST_9_GALLERY.slice(0, 3);
  }, []);

  const defaultFinalGallery = useMemo(() => {
    return FINAL_9_GALLERY.slice(0, 3);
  }, []);

  const defaultCollections = useMemo(() => {
    return COLLECTIONS.filter(col => ['rings', 'bespoke-engagement', 'heritage-watches'].includes(col.id));
  }, []);

  const defaultProducts = useMemo(() => {
    return PRODUCTS.filter(prod => ['p1', 'p19', 'p27'].includes(prod.id));
  }, []);

  // Gallery Filtering with memoization to optimize render cycles
  const filteredFirstGallery = useMemo(() => {
    return galleryFilter === 'All'
      ? FIRST_9_GALLERY
      : FIRST_9_GALLERY.filter(item => item.category.toLowerCase() === galleryFilter.toLowerCase() || item.category === galleryFilter);
  }, [galleryFilter]);

  const filteredFinalGallery = useMemo(() => {
    return galleryFilter === 'All'
      ? FINAL_9_GALLERY
      : FINAL_9_GALLERY.filter(item => item.category.toLowerCase() === galleryFilter.toLowerCase() || item.category === galleryFilter);
  }, [galleryFilter]);

  const displayedFirstGallery = useMemo(() => {
    if (isDesktop) {
      return galleryFilter === 'All' ? defaultFirstGallery : filteredFirstGallery.slice(0, 3);
    }
    return filteredFirstGallery;
  }, [isDesktop, galleryFilter, filteredFirstGallery, defaultFirstGallery]);

  const displayedFinalGallery = useMemo(() => {
    if (isDesktop) {
      return galleryFilter === 'All' ? defaultFinalGallery : filteredFinalGallery.slice(0, 3);
    }
    return filteredFinalGallery;
  }, [isDesktop, galleryFilter, filteredFinalGallery, defaultFinalGallery]);

  // Collections Filtering (applied to Desktop only) with memoization
  const filteredCollections = useMemo(() => {
    return collectionsFilter === 'All'
      ? COLLECTIONS
      : COLLECTIONS.filter(col => col.name.toLowerCase() === collectionsFilter.toLowerCase() || col.name === collectionsFilter);
  }, [collectionsFilter]);

  const displayedCollections = useMemo(() => {
    if (isDesktop) {
      return collectionsFilter === 'All' ? defaultCollections : filteredCollections.slice(0, 3);
    }
    return filteredCollections;
  }, [isDesktop, collectionsFilter, filteredCollections, defaultCollections]);

  // Products Filtering (applied to Desktop only) with memoization
  const filteredProducts = useMemo(() => {
    return productsFilter === 'All'
      ? PRODUCTS
      : PRODUCTS.filter(prod => prod.category.toLowerCase() === productsFilter.toLowerCase() || prod.category === productsFilter);
  }, [productsFilter]);

  const displayedProducts = useMemo(() => {
    if (isDesktop) {
      return productsFilter === 'All' ? defaultProducts : filteredProducts.slice(0, 3);
    }
    return filteredProducts;
  }, [isDesktop, productsFilter, filteredProducts, defaultProducts]);

  // Lightbox Keyboard Listeners
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex !== null) {
        if (e.key === 'Escape') setActiveLightboxIndex(null);
        if (e.key === 'ArrowRight') handleLightboxNext();
        if (e.key === 'ArrowLeft') handleLightboxPrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, activeLightboxList.length]);

  const handleLightboxNext = () => {
    if (activeLightboxIndex !== null && activeLightboxList.length > 0) {
      setActiveLightboxIndex((prev) => (prev! + 1) % activeLightboxList.length);
    }
  };

  const handleLightboxPrev = () => {
    if (activeLightboxIndex !== null && activeLightboxList.length > 0) {
      setActiveLightboxIndex((prev) => (prev! - 1 + activeLightboxList.length) % activeLightboxList.length);
    }
  };

  // Memoized subtrees of heavy static sections above the fold to completely prevent re-renders on filter changes
  const HeroSectionMemoized = useMemo(() => {
    return (
      <section 
        id="home" 
        className="relative flex items-center pt-28 md:pt-36 pb-32 md:pb-48 overflow-hidden bg-ivory border-none shadow-none"
      >
        {/* Luxury Looping Background Video */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none aspect-video border-none">
          <video
            className="w-full h-full object-cover opacity-100 select-none aspect-video"
            src="https://res.cloudinary.com/o82tprxi/video/upload/v1786871700/Gold_ring_sliding_onto_finger_202608160738.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          />
        </div>

        {/* Subtle, premium floating gold dust elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" id="hero-floating-particles">
          {/* Custom golden shimmering dust vectors */}
          <div className="absolute top-[25%] left-[10%] w-2 h-2 rounded-full bg-gold/30 animate-float-slow" />
          <div className="absolute top-[45%] left-[80%] w-1.5 h-1.5 rounded-full bg-gold/45 animate-float-medium" />
          <div className="absolute top-[75%] left-[30%] w-2 h-2 rounded-full bg-gold/25 animate-float-fast" />
          <div className="absolute top-[15%] left-[65%] w-1 h-1 rounded-full bg-gold/50 animate-float-medium" />
          <div className="absolute top-[85%] left-[85%] w-2.5 h-2.5 rounded-full bg-gold/20 animate-float-slow" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-8 w-full relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
          
          {/* Hero text editorial */}
          <div className="max-w-3xl space-y-6 md:space-y-8 flex flex-col items-center md:items-start" id="hero-text-panel">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose/10 rounded-full border border-rose/30">
              <Sparkles className="w-3.5 h-3.5 text-terracotta" />
              <span className="text-[10px] font-sans-poppins uppercase tracking-widest text-terracotta font-bold">
                Luxury Boutique — CDMX
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl xl:text-7xl font-serif-cormorant font-black text-[#000000] leading-[1.08] tracking-tight">
              Elegance <br />
              <span className="italic text-gold font-bold">Made Timeless</span>
            </h1>

            <p className="text-base md:text-lg font-sans-manrope text-[#0a0704] font-semibold leading-relaxed max-w-xl mx-auto md:mx-0">
              Discover jewelry that celebrates beauty, individuality and unforgettable moments. Handcrafted to become part of your lineage.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4 w-full">
              <a
                href="#collections"
                onClick={(e) => scrollToSection(e, 'collections')}
                id="hero-primary-cta"
                className="bg-terracotta text-white font-sans-poppins text-xs font-semibold uppercase tracking-widest py-3 rounded-md hover:bg-cocoa hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 shadow-md flex items-center justify-center gap-2 group w-full md:w-48 h-11 text-center"
              >
                <span>Explore Collection</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                id="hero-secondary-cta"
                className="border border-sand hover:border-gold bg-white/70 backdrop-blur-sm text-cocoa font-sans-poppins text-xs font-semibold uppercase tracking-widest py-3 rounded-md hover:bg-white hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 flex items-center justify-center w-full md:w-48 h-11 text-center"
              >
                Visit Our Store
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }, []);

  const TrustSectionMemoized = useMemo(() => {
    return (
      <section 
        id="trust" 
        className="bg-white py-10 relative z-10"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 items-center text-center">
            
            <div className="space-y-1 md:border-r border-sand/40 last:border-0" id="trust-card-rating">
              <div className="flex items-center justify-center gap-1">
                <span className="text-3xl font-serif-playfair font-bold text-cocoa">4.1</span>
                <span className="text-sm font-sans-manrope text-gold font-bold">/ 5.0</span>
              </div>
              <div className="flex justify-center text-gold mb-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-3 h-3 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-[10px] font-sans-poppins uppercase tracking-wider text-cocoa/50 font-semibold">Google Rating</p>
            </div>

            <div className="space-y-1 md:border-r border-sand/40 last:border-0" id="trust-card-reviews">
              <h3 className="text-3xl font-serif-playfair font-bold text-cocoa">111</h3>
              <p className="text-xs font-sans-manrope text-cocoa/80 font-medium">Verified Reviews</p>
              <p className="text-[10px] font-sans-poppins uppercase tracking-wider text-cocoa/50 font-semibold">Client Testimonials</p>
            </div>

            <div className="space-y-1 md:border-r border-sand/40 last:border-0" id="trust-card-jewellery">
              <div className="flex items-center justify-center gap-1.5">
                <Gem className="w-5 h-5 text-gold" />
                <h3 className="text-lg font-serif-playfair font-bold text-cocoa">Fine Jewellery</h3>
              </div>
              <p className="text-xs font-sans-manrope text-cocoa/70">Custom Gemstones & Gold</p>
              <p className="text-[10px] font-sans-poppins uppercase tracking-wider text-cocoa/50 font-semibold">Exquisite Materials</p>
            </div>

            <div className="space-y-1 last:border-0" id="trust-card-experience">
              <div className="flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-5 h-5 text-emerald" />
                <h3 className="text-lg font-serif-playfair font-bold text-cocoa">Premium Care</h3>
              </div>
              <p className="text-xs font-sans-manrope text-cocoa/70">One-on-One Consulting</p>
              <p className="text-[10px] font-sans-poppins uppercase tracking-wider text-cocoa/50 font-semibold">Exclusivity</p>
            </div>

          </div>
        </div>
      </section>
    );
  }, []);

  const ExperienceSplitSectionMemoized = useMemo(() => {
    return (
      <section 
        id="experience-split" 
        className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual left */}
          <div className="lg:col-span-6 relative" id="experience-visual-panel">
            
            <div className="relative z-10 w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg bg-sand/30">
              <img
                src="https://i.ibb.co/KQDDKNz/Gold-ring-with-heart-charms-202608161534-1.jpg"
                alt="Azahara Jewelry gold ring with heart charms closeup"
                className="w-full h-full object-cover transform hover:scale-[1.02] transition-all duration-700"
                referrerPolicy="no-referrer"
                loading="lazy"
                width={550}
                height={500}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cocoa/30 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Editorial copy right */}
          <div className="lg:col-span-6 space-y-6 md:space-y-8" id="experience-copy-panel">
            <span className="text-xs font-sans-poppins tracking-widest uppercase text-terracotta font-bold">The Emotional Value</span>
            <h2 className="text-4xl md:text-5xl font-serif-cormorant font-bold text-cocoa leading-tight">
              Designed to Become Part of Your Story
            </h2>
            <div className="w-16 h-[1px] bg-gold" />
            
            <p className="text-sm font-sans-manrope text-cocoa/80 leading-relaxed">
              We believe a fine piece of jewellery is never just an accessory. It is a container for memories, a physical witness to weddings, achievements, anniversaries, and personal milestones. 
            </p>
            <p className="text-sm font-sans-manrope text-cocoa/80 leading-relaxed">
              At Azahara Jewelry, we meticulously pair cormorant display styles with warm, rich stones so each metal ring or gold necklace feels less like standard manufacture and more like a custom work of historic architecture crafted exclusively for you.
            </p>

            <div className="pt-4 flex items-center gap-6 w-full">
              <a 
                href="#about"
                className="flex md:inline-flex items-center justify-center text-center gap-2.5 bg-cocoa text-ivory text-xs font-sans-poppins font-bold uppercase tracking-widest py-3 px-8 leading-none md:py-3.5 md:px-8 md:leading-normal w-full max-w-[260px] md:w-auto rounded-md hover:bg-terracotta hover:text-white transition-all duration-300 shadow-sm active:scale-[0.98]"
              >
                <span>Discover More</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0" />
              </a>
              <div className="flex items-center gap-2 text-gold">
                <Award className="w-5 h-5 shrink-0" />
                <span className="text-[10px] font-sans-poppins uppercase tracking-wider font-bold text-cocoa/60">Legacy Quality</span>
              </div>
            </div>
          </div>

        </div>
      </section>
    );
  }, []);

  const WhyChooseSectionMemoized = useMemo(() => {
    return (
      <section 
        id="why-choose" 
        className="py-24 bg-white border-none"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          
          <div className="text-center mb-16 space-y-3" id="why-choose-header">
            <span className="text-xs font-sans-poppins tracking-widest uppercase text-terracotta font-bold">Uncompromising Values</span>
            <h2 className="text-3xl md:text-4xl font-serif-cormorant font-bold text-cocoa">
              Why Choose Azahara Jewelry
            </h2>
            <div className="w-16 h-[1px] bg-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" id="why-choose-grid">
            
            <div className="space-y-4 p-6 rounded-xl border border-sand/35 hover:border-gold/50 transition-all bg-ivory/25" id="why-card-timeless">
              <div className="w-10 h-10 rounded-full bg-sand/40 flex items-center justify-center text-terracotta">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif-playfair font-bold text-cocoa">Timeless Elegance</h3>
              <p className="text-xs font-sans-manrope text-cocoa/75 leading-relaxed">
                Sophisticated jewellery designed to complement unforgettable moments and maintain grace across generations.
              </p>
            </div>

            <div className="space-y-4 p-6 rounded-xl border border-sand/35 hover:border-gold/50 transition-all bg-ivory/25" id="why-card-curated">
              <div className="w-10 h-10 rounded-full bg-sand/40 flex items-center justify-center text-terracotta">
                <Gem className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif-playfair font-bold text-cocoa">Curated Selection</h3>
              <p className="text-xs font-sans-manrope text-cocoa/75 leading-relaxed">
                A carefully presented collection of beautiful jewellery pieces honoring historical gold and emerald compositions.
              </p>
            </div>

            <div className="space-y-4 p-6 rounded-xl border border-sand/35 hover:border-gold/50 transition-all bg-ivory/25" id="why-card-personal">
              <div className="w-10 h-10 rounded-full bg-sand/40 flex items-center justify-center text-terracotta">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif-playfair font-bold text-cocoa">Personal Experience</h3>
              <p className="text-xs font-sans-manrope text-cocoa/75 leading-relaxed">
                A welcoming jewellery shopping experience focused entirely on individual preferences and style counseling.
              </p>
            </div>

            <div className="space-y-4 p-6 rounded-xl border border-sand/35 hover:border-gold/50 transition-all bg-ivory/25" id="why-card-craft">
              <div className="w-10 h-10 rounded-full bg-sand/40 flex items-center justify-center text-terracotta">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif-playfair font-bold text-cocoa">Beautiful Craftsmanship</h3>
              <p className="text-xs font-sans-manrope text-cocoa/75 leading-relaxed">
                Elegant hand-polished finishes, meticulous diamond prongs, and refined presentation boxes.
              </p>
            </div>

          </div>
        </div>
      </section>
    );
  }, []);

  const ProductShotBannerMemoized = useMemo(() => {
    return (
      <section className="relative h-[380px] md:h-[450px] overflow-hidden flex items-center justify-center bg-cocoa mx-4 md:mx-8 rounded-2xl md:rounded-2xl">
        <img
          src="https://i.ibb.co/M5G1Tyf6/Rose-gold-ring-on-surface-202608161448.jpg"
          alt="Azahara Jewelry rose gold collection centerpiece"
          className="absolute inset-0 w-full h-full object-cover transform scale-100 hover:scale-[1.01] transition-transform duration-[3000ms]"
          referrerPolicy="no-referrer"
          loading="lazy"
          width={1200}
          height={450}
        />
        <div className="absolute inset-0 bg-cocoa/40 backdrop-brightness-[0.9]" />
        <div className="relative z-10 text-center space-y-4 px-6 max-w-2xl text-white">
          <span className="text-xs font-sans-poppins uppercase tracking-widest text-gold font-bold">The Rose Gold Series</span>
          <h2 className="text-4xl md:text-5xl font-serif-cormorant italic font-bold">Uncompromising Warmth & Elegance</h2>
          <div className="w-16 h-[1px] bg-gold mx-auto" />
          <p className="text-sm font-sans-manrope text-white/90 leading-relaxed">
            Every curve is calculated; every reflection is designed. Experience our signature rose gold pieces crafted for the heart of Mexico City.
          </p>
        </div>
      </section>
    );
  }, []);

  return (
    <div className="bg-ivory min-h-screen text-cocoa selection:bg-terracotta/20 font-sans-manrope overflow-x-hidden relative">
      
      {/* 1. PREMIUM HEADER / NAVIGATION */}
      <header 
        id="navbar-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-ivory/95 backdrop-blur-md shadow-md border-b border-sand/40' 
            : 'bg-ivory/90 shadow-sm border-b border-sand/20'
        }`}
      >
        <div className={`max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'py-3 md:py-1.5' : 'py-3 md:py-3.5'
        }`}>
          
          {/* Logo brand */}
          <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="flex flex-col select-none group -ml-1.5 md:ml-0" id="navbar-logo">
            <span className={`text-xl font-serif-cormorant font-bold tracking-widest uppercase text-cocoa transition-all duration-300 group-hover:text-terracotta ${
              isScrolled ? 'md:text-lg' : 'md:text-2xl'
            }`}>
              Azahara Jewelry
            </span>
            <span className={`text-[9px] font-sans-poppins tracking-[0.3em] text-gold uppercase font-semibold leading-none -mt-1 pl-0.5 transition-all duration-300 ${
              isScrolled ? 'mb-1.5 md:mb-0 md:hidden' : 'mb-1.5 md:mb-0 block'
            }`}>
              Centro Histórico
            </span>
          </a>

          {/* Desktop central navigation */}
          <nav className="hidden lg:flex items-center gap-7" id="navbar-nav-links">
            {[
              { id: 'home', label: 'Home' },
              { id: 'collections', label: 'Collections', hasDropdown: true },
              { id: 'jewellery', label: 'Jewellery' },
              { id: 'about', label: 'About' },
              { id: 'reviews', label: 'Reviews' },
              { id: 'gallery', label: 'Gallery' },
              { id: 'contact', label: 'Contact' }
            ].map((link) => {
              if (link.hasDropdown) {
                return (
                  <div key={link.id} className="relative z-50">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setCollectionsDropdownOpen(!collectionsDropdownOpen);
                      }}
                      className={`text-xs font-sans-poppins font-medium uppercase tracking-widest relative py-1 transition-colors hover:text-terracotta flex items-center gap-1 ${
                        activeSection === link.id || collectionsDropdownOpen ? 'text-terracotta' : 'text-cocoa/80'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${collectionsDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <AnimatePresence>
                      {collectionsDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-56 bg-white border border-sand/55 shadow-xl rounded-lg py-2.5 z-50 text-left"
                          onClick={(e) => e.stopPropagation()} // Prevents closing immediately when clicking inside
                        >
                          {COLLECTIONS.map((col) => (
                            <a
                              key={col.id}
                              href="#gallery"
                              onClick={(ev) => {
                                ev.stopPropagation();
                                scrollToSection(ev, 'gallery');
                                setGalleryFilter(col.name);
                                setCollectionsDropdownOpen(false);
                              }}
                              className="block px-4 py-2 text-xs font-sans-poppins uppercase tracking-wider text-cocoa/80 hover:bg-sand/15 hover:text-terracotta transition-all"
                            >
                              {col.name}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    scrollToSection(e, link.id);
                    setCollectionsDropdownOpen(false);
                  }}
                  className={`text-xs font-sans-poppins font-medium uppercase tracking-widest relative py-1 transition-colors hover:text-terracotta ${
                    activeSection === link.id ? 'text-terracotta' : 'text-cocoa/80'
                  }`}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <div 
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-terracotta transition-all duration-300 animate-[fadeIn_0.2s_ease-out]"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center gap-4" id="navbar-cta-buttons">
            <a 
              href="#collections" 
              onClick={(e) => scrollToSection(e, 'collections')}
              className="text-[11px] font-sans-poppins font-semibold uppercase tracking-wider text-cocoa hover:text-terracotta transition-colors py-2 px-1 gold-underline"
            >
              Explore Collection
            </a>
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, 'contact')}
              className="bg-cocoa text-ivory text-[11px] font-sans-poppins font-semibold uppercase tracking-widest py-2.5 px-5 rounded-md hover:bg-terracotta hover:text-white transition-all duration-300 shadow-sm active:scale-[0.98]"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-nav-toggle"
            className="lg:hidden p-1.5 rounded-full hover:bg-sand/30 text-cocoa transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Panel */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-ivory border-b border-sand/50 shadow-md overflow-hidden"
              id="mobile-nav-panel"
            >
              <div className="px-6 py-6 flex flex-col gap-4">
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'collections', label: 'Collections' },
                  { id: 'jewellery', label: 'Jewellery' },
                  { id: 'about', label: 'About' },
                  { id: 'reviews', label: 'Reviews' },
                  { id: 'gallery', label: 'Gallery' },
                  { id: 'contact', label: 'Contact' }
                ].map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => scrollToSection(e, link.id, true)}
                    className={`text-xs font-sans-poppins font-semibold uppercase tracking-wider py-1 border-l-2 pl-3 transition-all ${
                      activeSection === link.id 
                        ? 'border-terracotta text-terracotta bg-sand/20' 
                        : 'border-transparent text-cocoa/80 hover:text-terracotta'
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
                
                <div className="flex flex-col gap-2.5 border-t border-sand/40 pt-4 mt-2">
                  <a 
                    href="#collections" 
                    onClick={(e) => scrollToSection(e, 'collections', true)}
                    className="text-center text-xs font-sans-poppins uppercase tracking-wider text-cocoa py-2.5 bg-sand/30 rounded-md hover:bg-sand/50 transition-all font-semibold"
                  >
                    Explore Collection
                  </a>
                  <a 
                    href="#contact" 
                    onClick={(e) => scrollToSection(e, 'contact', true)}
                    className="text-center text-xs font-sans-poppins uppercase tracking-wider text-ivory bg-cocoa py-2.5 rounded-md hover:bg-terracotta transition-all font-semibold"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* 2. SPECTACULAR HERO SECTION */}
      {HeroSectionMemoized}

      {/* 3. TRUST SECTION */}
      {TrustSectionMemoized}

      {/* 4. COLLECTIONS SECTION */}
      <section 
        id="collections" 
        className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-8"
      >
        <div className="text-center mb-12 space-y-3" id="collections-header">
          <span className="text-xs font-sans-poppins tracking-widest uppercase text-terracotta font-bold">The House of Azahara</span>
          <h2 className="text-4xl md:text-5xl font-serif-cormorant font-bold text-cocoa leading-tight">
            Discover Our Collections
          </h2>
          <div className="w-16 h-[1px] bg-gold mx-auto" />
          <p className="text-sm font-sans-manrope text-cocoa/75 max-w-xl mx-auto">
            From modern geometries to heirloom-quality emerald wraps, discover nine meticulously curated pathways of high luxury.
          </p>

          {/* Filter Tabs for Desktop Collections */}
          <div className="hidden md:flex flex-wrap items-center justify-center gap-1.5 pt-4 max-w-4xl mx-auto" id="collections-filters">
            {['All', 'Rings', 'Necklaces', 'Earrings', 'Bracelets', 'Fine Jewellery', 'Special Occasion', 'Pendants & Amulets', 'Bespoke Engagement', 'Heritage Watches'].map((cat) => (
              <button
                key={cat}
                onClick={() => setCollectionsFilter(cat)}
                id={`collections-filter-${cat.replace(/\s+/g, '-').toLowerCase()}`}
                className={`px-4 py-1.5 rounded-full text-xs font-sans-poppins font-medium transition-all duration-300 ${
                  collectionsFilter === cat
                    ? 'bg-cocoa text-ivory shadow-sm'
                    : 'bg-white border border-sand/50 text-cocoa/70 hover:bg-sand/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Collections grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto md:px-0" id="collections-grid">
          {/* Mobile view showing all collections unfiltered */}
          <div className="contents md:hidden">
            {COLLECTIONS.map((col) => (
              <div 
                key={col.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 flex flex-col group relative"
                id={`collection-card-mobile-${col.id}`}
              >
                {/* Card visual showcase */}
                <div className="w-full h-[260px] overflow-hidden relative bg-sand/20">
                  <img
                    src={col.image}
                    alt={col.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cocoa/40 via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>

                {/* Card text metadata */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-2xl font-serif-cormorant font-bold text-cocoa group-hover:text-terracotta transition-colors">
                      {col.name}
                    </h3>
                    <p className="text-xs font-sans-manrope text-cocoa/75 mt-2 leading-relaxed">
                      {col.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-sand/20">
                    <a
                      href="#gallery"
                      onClick={(e) => {
                        scrollToSection(e, 'gallery');
                        setGalleryFilter(col.name);
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-sans-poppins font-bold uppercase tracking-widest text-cocoa hover:text-terracotta group-hover:translate-x-1.5 transition-all"
                    >
                      <span>View Gallery</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop view with filtering */}
          <div className="hidden md:contents">
            {displayedCollections.map((col) => (
              <div 
                key={col.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 flex flex-col group relative animate-[fadeIn_0.3s_ease-out]"
                id={`collection-card-${col.id}`}
              >
                  {/* Card visual showcase */}
                  <div className="w-full h-[260px] overflow-hidden relative bg-sand/20">
                    <img
                      src={col.image}
                      alt={col.name}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      width={380}
                      height={260}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cocoa/40 via-transparent to-transparent opacity-60 pointer-events-none" />
                  </div>

                  {/* Card text metadata */}
                  <div className="p-6 md:p-5 flex-1 flex flex-col justify-between space-y-4 md:space-y-3">
                    <div>
                      <h3 className="text-2xl font-serif-cormorant font-bold text-cocoa group-hover:text-terracotta transition-colors">
                        {col.name}
                      </h3>
                      <p className="text-xs font-sans-manrope text-cocoa/75 mt-2 leading-relaxed">
                        {col.description}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-sand/20">
                      <a
                        href="#gallery"
                        onClick={(e) => {
                          scrollToSection(e, 'gallery');
                          setGalleryFilter(col.name);
                        }}
                        className="inline-flex items-center gap-1.5 text-xs font-sans-poppins font-bold uppercase tracking-widest text-cocoa hover:text-terracotta group-hover:translate-x-1.5 transition-all"
                      >
                        <span>View Gallery</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
              </div>
              ))}
          </div>
        </div>
      </section>

      {/* 5. FEATURED JEWELLERY SECTION */}
      <section 
        id="jewellery" 
        className="py-24 bg-sand/25 border-none"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6" id="featured-header">
            <div className="space-y-3">
              <span className="text-xs font-sans-poppins tracking-widest uppercase text-terracotta font-bold">Unveiling Masterpieces</span>
              <h2 className="text-4xl md:text-5xl font-serif-cormorant font-bold text-cocoa leading-none">
                Pieces Worth Remembering
              </h2>
              <p className="text-sm font-sans-manrope text-cocoa/75 max-w-lg leading-relaxed">
                Hand-selected individual creations demonstrating our dedication to exquisite metal finishing and brilliant gem settings.
              </p>
            </div>
            <a 
              href="#gallery" 
              className="inline-flex items-center gap-2 bg-white border border-sand hover:border-gold py-3 px-6 rounded-md text-xs font-sans-poppins font-bold uppercase tracking-widest text-cocoa hover:text-terracotta active:scale-[0.98] transition-all"
            >
              <span>Explore All Pieces</span>
              <Gem className="w-4 h-4" />
            </a>
          </div>

          {/* Dynamic Category Filter Buttons for Desktop Products */}
          <div className="hidden md:flex flex-wrap items-center justify-center gap-1.5 pb-8 max-w-4xl mx-auto" id="products-filters">
            {['All', 'Rings', 'Necklaces', 'Earrings', 'Bracelets', 'Fine Jewellery', 'Special Occasion', 'Pendants & Amulets', 'Bespoke Engagement', 'Heritage Watches'].map((cat) => (
              <button
                key={cat}
                onClick={() => setProductsFilter(cat)}
                id={`products-filter-${cat.replace(/\s+/g, '-').toLowerCase()}`}
                className={`px-4 py-1.5 rounded-full text-xs font-sans-poppins font-medium transition-all duration-300 ${
                  productsFilter === cat
                    ? 'bg-cocoa text-ivory shadow-sm'
                    : 'bg-white border border-sand/50 text-cocoa/70 hover:bg-sand/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto md:px-0" id="featured-grid">
            {/* Mobile view showing all products unfiltered */}
            <div className="contents md:hidden">
              {PRODUCTS.map((prod) => (
                <div 
                  key={prod.id}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-500 overflow-hidden flex flex-col justify-between group"
                  id={`product-card-mobile-${prod.id}`}
                >
                  <div className="relative overflow-hidden bg-sand/20 aspect-square">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-750"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    {prod.isFeatured && (
                      <span className="absolute top-4 left-4 text-[9px] font-sans-poppins font-bold uppercase tracking-wider bg-terracotta text-white px-2.5 py-1 rounded-md shadow-sm">
                        Bespoke Signature
                      </span>
                    )}
                    <span className="absolute bottom-4 right-4 text-[9px] font-sans-poppins font-bold uppercase tracking-wider bg-white/95 backdrop-blur text-cocoa/75 px-2.5 py-1 rounded-md shadow-sm">
                      {prod.category}
                    </span>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-serif-cormorant font-bold text-cocoa group-hover:text-terracotta transition-colors leading-tight">
                        {prod.name}
                      </h3>
                      <p className="text-xs font-sans-manrope text-cocoa/75 leading-relaxed">
                        {prod.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-sand/20 flex items-center justify-between gap-2">
                      <span className="text-sm font-sans-poppins font-bold text-cocoa">
                        {prod.price || "$150.00"}
                      </span>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setSelectedProduct(prod)}
                          id={`view-details-btn-mobile-${prod.id}`}
                          className="text-[10px] font-sans-poppins font-semibold uppercase tracking-wider bg-sand/30 hover:bg-cocoa hover:text-ivory text-cocoa py-1.5 px-3 rounded transition-all duration-300"
                        >
                          Details
                        </button>
                        <button
                          onClick={() => setSelectedProduct(prod)}
                          id={`book-now-btn-mobile-${prod.id}`}
                          className="text-[10px] font-sans-poppins font-bold uppercase tracking-wider bg-terracotta hover:bg-cocoa text-white py-1.5 px-3 rounded transition-all duration-300"
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop view with dynamic filtering */}
            <div className="hidden md:contents">
              {displayedProducts.map((prod) => (
                <div 
                  key={prod.id}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-500 overflow-hidden flex flex-col justify-between group animate-[fadeIn_0.3s_ease-out]"
                  id={`product-card-${prod.id}`}
                >
                    <div className="relative overflow-hidden bg-sand/20 aspect-square md:h-[260px] md:aspect-auto">
                      <img
                        src={prod.image}
                        alt={prod.name}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-750"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        width={380}
                        height={260}
                      />
                      {prod.isFeatured && (
                        <span className="absolute top-4 left-4 text-[9px] font-sans-poppins font-bold uppercase tracking-wider bg-terracotta text-white px-2.5 py-1 rounded-md shadow-sm">
                          Bespoke Signature
                        </span>
                      )}
                      <span className="absolute bottom-4 right-4 text-[9px] font-sans-poppins font-bold uppercase tracking-wider bg-white/95 backdrop-blur text-cocoa/75 px-2.5 py-1 rounded-md shadow-sm">
                        {prod.category}
                      </span>
                    </div>

                    <div className="p-6 md:p-5 flex-1 flex flex-col justify-between space-y-4 md:space-y-3">
                      <div className="space-y-2">
                        <h3 className="text-xl font-serif-cormorant font-bold text-cocoa group-hover:text-terracotta transition-colors leading-tight">
                          {prod.name}
                        </h3>
                        <p className="text-xs font-sans-manrope text-cocoa/75 leading-relaxed">
                          {prod.description}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-sand/20 flex items-center justify-between gap-2">
                        <span className="text-sm font-sans-poppins font-bold text-cocoa">
                          {prod.price || "$150.00"}
                        </span>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleSelectProduct(prod)}
                            id={`view-details-btn-${prod.id}`}
                            className="h-8 px-3.5 flex items-center justify-center text-[10px] font-sans-poppins font-semibold uppercase tracking-wider bg-sand/30 hover:bg-cocoa hover:text-ivory text-cocoa rounded transition-all duration-300 shrink-0 whitespace-nowrap"
                          >
                            Details
                          </button>
                          <button
                            onClick={() => handleSelectProduct(prod)}
                            id={`book-now-btn-${prod.id}`}
                            className="h-8 px-3.5 flex items-center justify-center text-[10px] font-sans-poppins font-bold uppercase tracking-wider bg-terracotta hover:bg-cocoa text-white rounded transition-all duration-300 shrink-0 whitespace-nowrap"
                          >
                            Book Now
                          </button>
                        </div>
                      </div>
                    </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 6. JEWELLERY EXPERIENCE SECTION (Split layout) */}
      {ExperienceSplitSectionMemoized}

      {/* 7. WHY CHOOSE AZAHARA JEWELRY */}
      {WhyChooseSectionMemoized}

      {/* 8. FIRST BOUTIQUE GALLERY SECTION */}
      <BoutiqueGallery
        isDesktop={isDesktop}
        galleryFilter={galleryFilter}
        setGalleryFilter={setGalleryFilter}
        displayedFirstGallery={displayedFirstGallery}
        setActiveLightboxList={setActiveLightboxList}
        setActiveLightboxIndex={setActiveLightboxIndex}
      />

      {/* Dynamic Lightbox Component */}
      {activeLightboxIndex !== null && activeLightboxList[activeLightboxIndex] && (
        <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center p-4">
          <div
            onClick={() => setActiveLightboxIndex(null)}
            className="fixed inset-0 bg-cocoa/90 backdrop-blur-md"
            id="lightbox-backdrop"
          />

          <div
            className="relative z-10 w-full max-w-4xl bg-transparent max-h-[85vh] flex flex-col items-center justify-center"
            id="lightbox-content"
          >
            {/* Image showcase */}
            <div className="relative max-w-full max-h-[70vh] rounded-lg overflow-hidden border border-sand/30 shadow-2xl bg-cocoa">
              <img
                src={activeLightboxList[activeLightboxIndex].image}
                alt={activeLightboxList[activeLightboxIndex].title}
                className="max-w-full max-h-[70vh] object-contain"
                referrerPolicy="no-referrer"
              />

              {/* Left & Right arrows inside */}
              <button
                onClick={(e) => { e.stopPropagation(); handleLightboxPrev(); }}
                id="lightbox-prev-btn"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-ivory/80 backdrop-blur border border-sand/40 text-cocoa hover:bg-white flex items-center justify-center transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); handleLightboxNext(); }}
                id="lightbox-next-btn"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-ivory/80 backdrop-blur border border-sand/40 text-cocoa hover:bg-white flex items-center justify-center transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Info and controls */}
            <div className="w-full text-center mt-4 text-white">
              <span className="text-xs font-sans-poppins uppercase tracking-wider text-gold font-bold">
                {activeLightboxList[activeLightboxIndex].category}
              </span>
              <h4 className="text-xl font-serif-cormorant mt-0.5">{activeLightboxList[activeLightboxIndex].title}</h4>
              
              {/* Close button and keyboard indicator */}
              <div className="flex justify-center items-center gap-4 mt-3">
                <button
                  onClick={() => setActiveLightboxIndex(null)}
                  id="lightbox-close-btn"
                  className="px-5 py-1.5 bg-ivory text-cocoa text-xs font-sans-poppins font-semibold uppercase tracking-wider rounded hover:bg-terracotta hover:text-white transition-colors"
                >
                  Close [Esc]
                </button>
                <span className="text-[10px] text-white/50 font-sans-manrope">
                  Navigate using Arrow Keys
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Standalone Intermediary Product Shot Banner */}
      {ProductShotBannerMemoized}

      {/* 9. REVIEWS SECTION */}
      <Testimonials isDesktop={isDesktop} />

      {/* 10. ABOUT SECTION */}
      <section 
        id="about" 
        className="py-24 bg-white border-none"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6 md:space-y-8" id="about-copy-panel">
              <span className="text-xs font-sans-poppins tracking-widest uppercase text-terracotta font-bold">The Art of Discovering Gems</span>
              <h2 className="text-4xl md:text-5xl font-serif-cormorant font-bold text-cocoa leading-tight">
                The Art of Jewellery
              </h2>
              <div className="w-16 h-[1px] bg-gold" />

              <p className="text-sm font-sans-manrope text-cocoa/85 leading-relaxed">
                At Azahara Jewelry, our passion is helping you locate jewelry that feels naturally paired to your life's memorable occasions. Located in the architectural heart of Mexico City on Calle Palma, our second-floor showroom offers a secluded sanctuary away from busy avenues.
              </p>
              
              <p className="text-sm font-sans-manrope text-cocoa/85 leading-relaxed">
                Our approach honors the fine heritage of jewelry crafting, focusing on warm tones like champagne gold and natural emerald wraps. Every discovery begins with a quiet conversation and absolute attention to detail. No rushed counters—only timeless style, personal expression, and genuine hospitality.
              </p>

              <div className="pt-4 grid grid-cols-2 gap-6" id="about-stats">
                <div className="space-y-1">
                  <span className="text-3xl font-serif-playfair text-terracotta font-bold">111</span>
                  <p className="text-xs font-sans-manrope text-cocoa/70">CDMX Client Journals</p>
                </div>
                <div className="space-y-1">
                  <span className="text-3xl font-serif-playfair text-terracotta font-bold">2nd</span>
                  <p className="text-xs font-sans-manrope text-cocoa/70">Floor Historic Lounge</p>
                </div>
              </div>
            </div>

            {/* Visual right side */}
            <div className="lg:col-span-6 relative flex justify-center" id="about-visual-panel">
              
              <div className="relative z-10 w-full max-w-[500px] h-[350px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg bg-sand/30">
                <img
                  src="https://i.ibb.co/0y8phmZP/Gold-ring-with-heart-charms-202608161534.jpg"
                  alt="Azahara Jewelry gold ring with heart charms"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  width={500}
                  height={400}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cocoa/30 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 11. FINAL BOUTIQUE GALLERY SECTION */}
      <SignatureCollection
        isDesktop={isDesktop}
        displayedFinalGallery={displayedFinalGallery}
        setActiveLightboxList={setActiveLightboxList}
        setActiveLightboxIndex={setActiveLightboxIndex}
      />

      {/* 11. STORE EXPERIENCE SECTION (Address, contact numbers, and custom vector Map) */}
      <section 
        id="store" 
        className="py-24 max-w-7xl mx-auto px-6 md:px-8"
      >
        <div className="text-center mb-16 space-y-3" id="store-header">
          <span className="text-xs font-sans-poppins tracking-widest uppercase text-terracotta font-bold">Physical Showroom</span>
          <h2 className="text-4xl md:text-5xl font-serif-cormorant font-bold text-cocoa">
            Visit Azahara Jewelry
          </h2>
          <div className="w-16 h-[1px] bg-gold mx-auto" />
          <p className="text-sm font-sans-manrope text-cocoa/75 max-w-xl mx-auto">
            Experience our personal, warm, one-on-one jewelry consulting first-hand. Find us on the corner of Avenida Francisco I. Madero.
          </p>
        </div>

        {/* Custom interactive Map Component with directional guides */}
        <MemoizedInteractiveMap 
          address={STORE_ADDRESS} 
          phone={STORE_PHONE} 
        />

        {/* Buttons: Get directions & Call us directly */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 w-full px-6 md:px-0" id="store-cta-buttons">
          <a
            href="https://maps.app.goo.gl/z8bxDERN5EagKnqW7"
            target="_blank"
            rel="noopener noreferrer"
            id="get-directions-btn"
            className="flex md:inline-flex items-center justify-center text-center gap-2 bg-cocoa text-ivory text-xs font-sans-poppins font-semibold uppercase tracking-widest py-3 px-4 md:px-6 w-full max-w-sm md:w-auto rounded-md hover:bg-terracotta hover:text-white transition-all duration-300 shadow-sm"
          >
            <Compass className="w-4 h-4 shrink-0" />
            <span className="truncate md:overflow-visible">Get Directions (Google Maps)</span>
            <ExternalLink className="w-3.5 h-3.5 shrink-0" />
          </a>
          <a
            href={`tel:${STORE_PHONE.replace(/\s+/g, '')}`}
            id="call-us-btn"
            className="flex md:inline-flex items-center justify-center text-center gap-2 bg-white border border-sand hover:border-gold text-cocoa text-xs font-sans-poppins font-semibold uppercase tracking-widest py-3 px-4 md:px-6 w-full max-w-sm md:w-auto rounded-md hover:bg-sand/20 transition-all duration-300 shadow-sm"
          >
            <Phone className="w-4 h-4 text-terracotta shrink-0" />
            <span>Call Concierge Us</span>
          </a>
        </div>
      </section>

      {/* 12. CONTACT SECTION & SUBMISSION FORM */}
      <section 
        id="contact" 
        className="py-24 bg-sand/15 border-none relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Details Left */}
          <div className="lg:col-span-5 space-y-6 md:space-y-8" id="contact-details-panel">
            <div className="space-y-3">
              <span className="text-xs font-sans-poppins tracking-widest uppercase text-terracotta font-bold">Secure Communication</span>
              <h2 className="text-4xl md:text-5xl font-serif-cormorant font-bold text-cocoa leading-tight">
                Begin Your Discoveries
              </h2>
              <div className="w-16 h-[1px] bg-gold" />
              <p className="text-sm font-sans-manrope text-cocoa/80 leading-relaxed max-w-md">
                Have a bespoke vision in mind, or wish to schedule a personal showroom evaluation at Palma #27? Share your notes below and we will reach out with care.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-terracotta shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-sans-poppins uppercase tracking-wider text-cocoa/55 font-bold">Showroom Suite</h4>
                  <p className="text-sm font-sans-manrope text-cocoa font-medium mt-0.5 leading-relaxed">
                    {STORE_ADDRESS}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-terracotta shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-sans-poppins uppercase tracking-wider text-cocoa/55 font-bold">Boutique Phone</h4>
                  <p className="text-sm font-sans-manrope text-cocoa font-medium mt-0.5">
                    {STORE_PHONE}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-terracotta shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-sans-poppins uppercase tracking-wider text-cocoa/55 font-bold">Concierge Email</h4>
                  <p className="text-sm font-sans-manrope text-cocoa font-medium mt-0.5 hover:text-terracotta transition-colors">
                    concierge@azaharajewelry.com
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-emerald/5 border border-emerald/10 rounded-xl max-w-sm">
              <p className="text-[11px] font-sans-manrope text-cocoa/80 flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald shrink-0" /> Rest assured, your message is secure and private.
              </p>
            </div>
          </div>

          {/* Contact Form Right */}
          <MemoizedContactForm />

        </div>
      </section>

      {/* 13. VISIT / CTA SECTION (Gradient panel with champagne gold accents) */}
      <section 
        id="final-cta" 
        className="py-24 bg-gradient-to-r from-[#FAF6EE] via-[#E9DCCB] to-[#FAF6EE] border-none relative"
      >
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6 md:space-y-8 relative z-10" id="final-cta-container">
          <div className="inline-flex justify-center items-center gap-1.5 text-gold">
            <Gem className="w-5 h-5 animate-pulse" />
            <span className="text-xs font-sans-poppins uppercase tracking-widest font-bold">The Signature Experience</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif-cormorant font-bold text-cocoa leading-tight">
            Find the Piece That Feels Like You
          </h2>

          <p className="text-sm font-sans-manrope text-cocoa/85 leading-relaxed max-w-xl mx-auto">
            Explore our curated jewelry collection online or schedule an exclusive visit to our private second-floor Mexico City showroom. Let us assist you in locating a truly unique legacy.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#collections"
              onClick={(e) => scrollToSection(e, 'collections')}
              id="final-cta-explore"
              className="w-full sm:w-auto bg-terracotta text-white font-sans-poppins text-xs font-semibold uppercase tracking-widest py-3.5 px-8 rounded-md hover:bg-cocoa hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 shadow-sm flex items-center justify-center gap-2"
            >
              <span>Explore Collection</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="#store"
              onClick={(e) => scrollToSection(e, 'store')}
              id="final-cta-visit"
              className="w-full sm:w-auto border border-sand hover:border-gold bg-white/70 backdrop-blur-sm text-cocoa font-sans-poppins text-xs font-semibold uppercase tracking-widest py-3.5 px-8 rounded-md hover:bg-white hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 text-center"
            >
              Visit Our Store
            </a>
          </div>
        </div>
      </section>

      {/* 14. FOOTER */}
      <footer 
        id="app-footer"
        className="bg-cocoa text-sand pt-16 pb-8 animate-fade-in"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-sand/15 pb-12">
          
          {/* Col 1 Brand */}
          <div className="md:col-span-5 space-y-4" id="footer-col-brand">
            <h3 className="text-2xl font-serif-cormorant font-bold tracking-widest uppercase text-white leading-none">
              Azahara Jewelry
            </h3>
            <p className="text-xs font-sans-manrope text-sand/65 uppercase tracking-widest -mt-1 font-bold text-gold">
              Centro Histórico CDMX
            </p>
            <p className="text-xs font-sans-manrope text-sand/75 leading-relaxed max-w-sm pt-2">
              An exclusive, warm Mexican luxury jewelry house designed to facilitate personal discovery, refined custom craftsmanship, and elegant legacy jewelry.
            </p>
            {/* Social media footer brand icons (original colors) */}
            <div className="flex gap-3.5 pt-4">
              <a
                href="https://wa.me/525510582278"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-sm"
                title="WhatsApp Concierge"
              >
                <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 fill-white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.456h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/azaharajewel"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-sm"
                title="Instagram"
              >
                <Instagram className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://www.facebook.com/azaharajewelry"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-sm"
                title="Facebook"
              >
                <Facebook className="w-4.5 h-4.5 fill-current" />
              </a>
              <a
                href="mailto:azahara.jewel@hotmail.com"
                className="w-8 h-8 rounded-full bg-gold text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-sm"
                title="Email Concierge"
              >
                <Mail className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Col 2 Quick Links */}
          <div className="md:col-span-3 space-y-4" id="footer-col-links">
            <h4 className="text-xs font-sans-poppins uppercase tracking-wider text-gold font-bold">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { id: 'home', label: 'Home' },
                { id: 'collections', label: 'Collections' },
                { id: 'jewellery', label: 'Jewellery' },
                { id: 'about', label: 'About' },
                { id: 'reviews', label: 'Reviews' },
                { id: 'gallery', label: 'Gallery' },
                { id: 'contact', label: 'Contact' }
              ].map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => scrollToSection(e, link.id)}
                    className="text-xs font-sans-manrope text-sand/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 Contact */}
          <div className="md:col-span-4 space-y-4" id="footer-col-contact">
            <h4 className="text-xs font-sans-poppins uppercase tracking-wider text-gold font-bold">Concierge Contact</h4>
            
            <ul className="space-y-3 text-xs font-sans-manrope text-sand/80 leading-relaxed">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>{STORE_ADDRESS}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <span>{STORE_PHONE}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <span>concierge@azaharajewelry.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="max-w-7xl mx-auto px-6 md:px-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-sans-manrope text-sand/55">
          <p>© 2026 Azahara Jewelry. All Rights Reserved. Private & Exclusive Showroom.</p>
          <p className="italic">Timeless Beauty, Crafted with Dignity & Warmth.</p>
        </div>
      </footer>



      {/* FLOATING AI CONCIERGE CHATBOT WIDGET */}
      <MemoizedChatbot />

      {/* 15. DYNAMIC INTERACTIVE MODALS */}
      <MemoizedProductModal
        product={selectedProduct}
        onClose={handleCloseProductModal}
        phone={STORE_PHONE}
      />

    </div>
  );
}
