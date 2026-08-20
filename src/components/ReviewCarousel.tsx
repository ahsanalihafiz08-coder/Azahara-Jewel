/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, CheckCircle, Quote, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Review } from '../types';

interface ReviewCarouselProps {
  reviews: Review[];
  overallRating: number;
  totalReviewsCount: number;
}

export default function ReviewCarousel({ reviews, overallRating, totalReviewsCount }: ReviewCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const autoplayTimer = useRef<NodeJS.Timeout | null>(null);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  // Autoplay functionality
  useEffect(() => {
    if (!isHovered) {
      autoplayTimer.current = setInterval(() => {
        handleNext();
      }, 7000); // Rotate every 7 seconds
    } else if (autoplayTimer.current) {
      clearInterval(autoplayTimer.current);
    }

    return () => {
      if (autoplayTimer.current) clearInterval(autoplayTimer.current);
    };
  }, [isHovered, reviews.length]);

  const activeReview = reviews[currentIndex];

  return (
    <div className="w-full" id="reviews-carousel-section">
      {/* Google Rating Overview Panel */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center bg-sand/35 rounded-2xl p-6 md:p-8 border border-sand/50 mb-10">
        <div className="text-center md:text-left md:border-r border-cocoa/10 pr-0 md:pr-6 flex flex-col justify-center">
          <span className="text-[10px] font-sans-poppins tracking-widest text-terracotta uppercase font-bold">Boutique Trust</span>
          <div className="flex items-center justify-center md:justify-start gap-3 mt-1">
            <span className="text-5xl font-serif-cormorant font-bold text-cocoa leading-none">{overallRating.toFixed(1)}</span>
            <div>
              <div className="flex gap-0.5 text-gold mb-1">
                {[1, 2, 3, 4].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-gold text-gold" />
                ))}
                {/* 4.1 stars, so the last one is silver or semi-filled */}
                <svg className="w-4 h-4 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <defs>
                    <linearGradient id="halfStar">
                      <stop offset="10%" stopColor="#C9A45C" />
                      <stop offset="10%" stopColor="transparent" stopOpacity="1" />
                    </linearGradient>
                  </defs>
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="url(#halfStar)" stroke="#C9A45C" />
                </svg>
              </div>
              <p className="text-xs font-sans-manrope text-cocoa/70 font-semibold">{totalReviewsCount} Customer Reviews</p>
            </div>
          </div>
        </div>

        <div className="col-span-1 md:col-span-2 text-center md:text-left flex flex-col justify-center">
          <h4 className="text-sm font-sans-poppins text-cocoa/90 font-bold uppercase tracking-wider flex items-center justify-center md:justify-start gap-1.5">
            <MessageSquare className="w-4 h-4 text-gold shrink-0" /> Real Client Satisfaction
          </h4>
          <p className="text-xs font-sans-manrope text-cocoa/80 leading-relaxed mt-2 max-w-xl">
            Our private showroom at Palma #27 is designed to offer a peaceful, luxury jewelry browsing environment. We are proud of our stellar reputation in Cuauhtémoc, Ciudad de México, and thank each client for placing their trust in Azahara Jewelry.
          </p>
        </div>
      </div>

      {/* Main Reviews Slider Card */}
      <div
        className="relative bg-white rounded-2xl border border-sand/60 shadow-md p-8 md:p-12 min-h-[300px] flex flex-col justify-between overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        id="reviews-slider"
      >
        {/* Soft decorative background gold pattern */}
        <div className="absolute right-6 top-6 opacity-5 pointer-events-none text-cocoa">
          <Quote className="w-32 h-32 rotate-180" />
        </div>

        {/* Animation Content Area */}
        <div className="relative z-10">
          <div className="space-y-6">
              {/* Stars & Verified */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-sand/30 pb-4">
                <div className="flex gap-0.5 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < activeReview.rating ? 'fill-gold text-gold' : 'text-sand'
                      }`}
                    />
                  ))}
                </div>
                {activeReview.verified && (
                  <span className="text-[10px] font-sans-poppins uppercase tracking-wider text-emerald font-bold flex items-center gap-1.5 bg-emerald/5 px-2.5 py-1 rounded-full border border-emerald/10">
                    <CheckCircle className="w-3.5 h-3.5" /> Verified Showroom Purchase
                  </span>
                )}
              </div>

              {/* Review Text */}
              <blockquote className="text-lg md:text-xl font-serif-cormorant text-cocoa font-medium leading-relaxed italic">
                "{activeReview.text}"
              </blockquote>

              {/* Author & Meta */}
              <div className="flex items-center gap-3.5 pt-2">
                <div className="w-12 h-12 rounded-full bg-sand text-cocoa font-sans-poppins font-bold text-sm flex items-center justify-center border border-gold/40 shadow-sm shrink-0">
                  {activeReview.avatar || 'C'}
                </div>
                <div>
                  <h5 className="font-serif-playfair text-cocoa text-base font-bold leading-none">{activeReview.name}</h5>
                  <p className="text-xs font-sans-manrope text-cocoa/55 mt-1">
                    Boutique Client — {activeReview.date}
                  </p>
                </div>
              </div>
            </div>
        </div>

        {/* Carousel Navigation Bottom Controls */}
        <div className="relative z-10 flex items-center justify-between border-t border-sand/40 pt-6 mt-8">
          {/* Slider Progress Dots */}
          <div className="flex gap-1.5">
            {reviews.map((rev, index) => (
              <button
                key={rev.id}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-6 bg-terracotta' : 'w-1.5 bg-sand hover:bg-gold'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Button arrows */}
          <div className="flex gap-2.5">
            <button
              onClick={handlePrev}
              id="carousel-prev"
              className="w-9 h-9 rounded-full border border-sand text-cocoa hover:bg-sand/30 active:scale-[0.95] transition-all flex items-center justify-center"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              id="carousel-next"
              className="w-9 h-9 rounded-full border border-sand text-cocoa hover:bg-sand/30 active:scale-[0.95] transition-all flex items-center justify-center"
              aria-label="Next review"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Aesthetic Notice Label for Transparency (Highly luxury and professional) */}
      <p className="text-[10px] text-center font-sans-manrope text-cocoa/40 mt-4 leading-normal italic">
        * Aesthetic appreciation samples. Guest names and details are customized placeholders; visit our office at Edificio Azahara to read our original physical registry log.
      </p>
    </div>
  );
}
