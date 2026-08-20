/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MapPin, Compass, Navigation, Phone, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface MapProps {
  address: string;
  phone: string;
}

export default function InteractiveMap({ address, phone }: MapProps) {
  const [activeTab, setActiveTab] = useState<'map' | 'walking' | 'floorplan'>('map');

  return (
    <div className="w-full bg-white rounded-2xl border border-sand p-6 md:p-8 shadow-sm flex flex-col lg:flex-row gap-8">
      {/* Map Left Side: Directions & Info */}
      <div className="flex-1 flex flex-col justify-between" id="map-info">
        <div>
          <span className="text-xs font-sans-poppins tracking-wider uppercase text-terracotta font-semibold">Boutique Location</span>
          <h3 className="text-3xl font-serif-cormorant text-cocoa mt-2 mb-4 font-semibold leading-tight">
            An Exclusive Space in the Heart of Centro Histórico
          </h3>
          <p className="text-sm font-sans-manrope text-cocoa/80 leading-relaxed mb-6">
            We are located in the historic <strong>Edificio Azahara</strong> on the second floor, right at the corner of Calle Palma and Avenida Francisco I. Madero. This central heritage hub reflects the timeless craftsmanship we pour into our jewellery.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-sand/30 flex items-center justify-center text-terracotta shrink-0 mt-0.5">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-sans-poppins uppercase tracking-wider text-cocoa/60 font-semibold">Address</h4>
                <p className="text-sm font-sans-manrope text-cocoa font-medium leading-normal mt-0.5">
                  {address}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-sand/30 flex items-center justify-center text-terracotta shrink-0 mt-0.5">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-sans-poppins uppercase tracking-wider text-cocoa/60 font-semibold">Concierge Line</h4>
                <p className="text-sm font-sans-manrope text-cocoa font-medium leading-normal mt-0.5">
                  {phone}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-sand/30 flex items-center justify-center text-terracotta shrink-0 mt-0.5">
                <Compass className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-sans-poppins uppercase tracking-wider text-cocoa/60 font-semibold">Visiting Hours</h4>
                <p className="text-sm font-sans-manrope text-cocoa/80 mt-0.5">
                  Monday – Saturday: 9:00 AM – 6:00 PM <br />
                  Sunday: 9:00 AM – 5:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Route/Details Tabs */}
        <div className="border-t border-sand/40 pt-6">
          <h4 className="text-xs font-sans-poppins uppercase tracking-wider text-cocoa/60 font-bold mb-3">Explore Your Arrival</h4>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTab('map')}
              id="map-tab-map"
              className={`px-4 py-2 text-xs font-sans-poppins font-medium rounded-full transition-all duration-300 ${
                activeTab === 'map'
                  ? 'bg-terracotta text-white shadow-sm'
                  : 'bg-sand/30 text-cocoa/80 hover:bg-sand/50'
              }`}
            >
              Palma & Madero Area
            </button>
            <button
              onClick={() => setActiveTab('walking')}
              id="map-tab-walking"
              className={`px-4 py-2 text-xs font-sans-poppins font-medium rounded-full transition-all duration-300 ${
                activeTab === 'walking'
                  ? 'bg-terracotta text-white shadow-sm'
                  : 'bg-sand/30 text-cocoa/80 hover:bg-sand/50'
              }`}
            >
              Walk from Zócalo (3 mins)
            </button>
            <button
              onClick={() => setActiveTab('floorplan')}
              id="map-tab-floorplan"
              className={`px-4 py-2 text-xs font-sans-poppins font-medium rounded-full transition-all duration-300 ${
                activeTab === 'floorplan'
                  ? 'bg-terracotta text-white shadow-sm'
                  : 'bg-sand/30 text-cocoa/80 hover:bg-sand/50'
              }`}
            >
              2nd Floor Showroom Plan
            </button>
          </div>
        </div>
      </div>

      {/* Map Right Side: Styled Map Display Panel */}
      <div className={`flex-1 bg-ivory rounded-xl border border-sand/60 relative overflow-hidden flex items-center justify-center p-4 transition-all duration-300 ${
        activeTab === 'map' ? 'min-h-[350px] md:min-h-[400px]' : 'min-h-0 md:min-h-[400px]'
      }`}>
          {activeTab === 'map' && (
        <div className="absolute inset-0 p-2 flex flex-col justify-between" id="map-view-container">
              <div className="w-full h-full relative" style={{ minHeight: '280px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.4827361730424!2d-99.1362489239!3d19.43265538184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fecdd9b7f575%3A0x6b77fd150b0cd9b!2sCalle%20de%20la%20Palma%2027%2C%20Centro%20Hist%C3%B3rico%20de%20la%20Cdad.%20de%20M%C3%A9xico%2C%20Centro%2C%20Cuau%C3%A9moc%2C%2006000%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1sen!2smx!4v1700000000000!5m2!1sen!2smx"
                  className="absolute inset-0 w-full h-full border-0 rounded-xl shadow-inner"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Azahara Jewelry Historic Showroom Google Map Location"
                />
              </div>
              <div className="text-center mt-2 px-4">
                <a
                  href="https://maps.app.goo.gl/z8bxDERN5EagKnqW7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-sans-poppins font-semibold text-terracotta hover:text-cocoa transition-colors inline-flex items-center gap-1 bg-sand/20 py-1 px-3 rounded-full hover:bg-sand/40"
                >
                  <Sparkles className="w-3 h-3 text-gold" /> Open in Google Maps app & view 111 verified reviews
                </a>
              </div>
            </div>
          )}

          {activeTab === 'walking' && (
        <div className="relative md:absolute md:inset-0 w-full p-1 md:p-6 flex flex-col justify-start md:justify-between gap-4" id="walking-view-container">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-terracotta border-b border-sand/40 pb-2">
                  <Navigation className="w-4 h-4" />
                  <span className="text-xs font-sans-poppins uppercase tracking-wider font-bold">Directions from Metro Zócalo</span>
                </div>
                
                <ol className="space-y-2.5">
                  <li className="text-xs font-sans-manrope text-cocoa/90 flex gap-2">
                    <span className="w-5 h-5 rounded-full bg-sand/40 flex items-center justify-center text-[10px] font-bold text-cocoa shrink-0 mt-0.5">1</span>
                    <span className="leading-relaxed">Exit Metro Zócalo onto the main plaza and face west toward the Cathedral.</span>
                  </li>
                  <li className="text-xs font-sans-manrope text-cocoa/90 flex gap-2">
                    <span className="w-5 h-5 rounded-full bg-sand/40 flex items-center justify-center text-[10px] font-bold text-cocoa shrink-0 mt-0.5">2</span>
                    <span className="leading-relaxed">Walk past the Monte de Piedad building directly onto the wide pedestrianised <strong>Avenida Francisco I. Madero</strong>.</span>
                  </li>
                  <li className="text-xs font-sans-manrope text-cocoa/90 flex gap-2">
                    <span className="w-5 h-5 rounded-full bg-sand/40 flex items-center justify-center text-[10px] font-bold text-cocoa shrink-0 mt-0.5">3</span>
                    <span className="leading-relaxed">Walk straight for two blocks. You will pass Calle de Monte de Piedad and Calle de Isabel la Católica.</span>
                  </li>
                  <li className="text-xs font-sans-manrope text-cocoa/90 flex gap-2">
                    <span className="w-5 h-5 rounded-full bg-sand/40 flex items-center justify-center text-[10px] font-bold text-cocoa shrink-0 mt-0.5">4</span>
                    <span className="leading-relaxed">At the corner of <strong>Calle Palma</strong>, look up to the left. The beautiful carved stone corner edifice is the historic <strong>Edificio Azahara</strong>. Enter Palma #27 and proceed to the 2nd Floor.</span>
                  </li>
                </ol>
              </div>

              <div className="p-3 bg-rose/10 border border-rose/30 rounded-lg text-xs font-sans-manrope text-cocoa flex items-center gap-2">
                <span className="font-semibold text-terracotta shrink-0">Tip:</span> <span className="leading-relaxed">Look out for the beautiful gold brass plaques at the entrance on Calle Palma #27.</span>
              </div>
            </div>
          )}

          {activeTab === 'floorplan' && (
        <div className="relative md:absolute md:inset-0 w-full p-1 md:p-6 flex flex-col justify-start md:justify-between gap-4" id="floorplan-view-container">
              <div className="text-center">
                <span className="text-[10px] font-sans-poppins tracking-widest text-gold uppercase font-bold">Showroom Floor Plan</span>
                <h4 className="text-lg font-serif-cormorant text-cocoa font-semibold mt-1">Azahara Suite 202 - Private Collections</h4>
              </div>

              <div className="w-full flex items-center justify-center my-1">
                <svg className="w-full h-auto max-w-[280px]" viewBox="0 0 300 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Outer Walls */}
                  <rect x="10" y="10" width="280" height="160" rx="6" fill="#FDFBFA" stroke="#E9DCCB" strokeWidth="2" />
                  
                  {/* Entrance Door */}
                  <line x1="80" y1="170" x2="110" y2="170" stroke="#FAF6EE" strokeWidth="4" />
                  <path d="M110 170 C 110 150, 95 140, 80 140" stroke="#B9684A" strokeWidth="1" strokeDasharray="2 2" fill="none" />
                  <text x="95" y="165" fill="#493A32" opacity="0.5" fontSize="6" fontFamily="sans-serif">ENTRANCE</text>
                  
                  {/* Showroom Zones */}
                  {/* Main Foyer */}
                  <line x1="120" y1="10" x2="120" y2="110" stroke="#E9DCCB" strokeWidth="1" strokeDasharray="3 3" />
                  <text x="65" y="80" fill="#493A32" opacity="0.4" fontSize="7" fontFamily="sans-serif" textAnchor="middle">RECEIVER FOYER</text>

                  {/* Emerald Viewing Lounge */}
                  <line x1="120" y1="110" x2="290" y2="110" stroke="#E9DCCB" strokeWidth="1" />
                  <rect x="140" y="125" width="120" height="35" rx="3" fill="#FAF6EE" stroke="#176B5B" strokeWidth="0.75" />
                  <text x="200" y="146" fill="#176B5B" fontSize="7" fontFamily="sans-serif" textAnchor="middle" fontWeight="semibold">Emerald & Bridal Private Lounge</text>

                  {/* Main Showcase Area */}
                  <g transform="translate(130, 20)">
                    {/* Display cases circular center */}
                    <circle cx="70" cy="45" r="24" stroke="#C9A45C" strokeWidth="1.5" strokeDasharray="4 4" />
                    <rect x="55" y="35" width="30" height="20" rx="2" fill="#FFFFFF" stroke="#C9A45C" strokeWidth="1" />
                    <text x="70" y="47" fill="#C9A45C" fontSize="7" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">SIGNATURES</text>
                  </g>

                  {/* Window Overlooking Madero */}
                  <line x1="290" y1="30" x2="290" y2="90" stroke="#FAF6EE" strokeWidth="4" />
                  <text x="282" y="65" fill="#C9A45C" fontSize="6" fontFamily="sans-serif" transform="rotate(90 282 65)" textAnchor="middle">Madero Balcony Vista</text>
                </svg>
              </div>

              <div className="text-center">
                <p className="text-xs font-sans-manrope text-cocoa/80 italic">
                  Designed for quiet discovery, private evaluations, and relaxed individual hospitality.
                </p>
              </div>
            </div>
          )}
      </div>
    </div>
  );
}
