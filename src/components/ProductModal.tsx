/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle, ShieldCheck, Sparkles, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  phone: string;
}

export default function ProductModal({ product, onClose, phone }: ProductModalProps) {
  const [name, setName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState('');

  // Prefill message when product changes
  useEffect(() => {
    if (product) {
      setMessage(`Dear Azahara Jewelry Concierge,\n\nI would love to receive more information and coordinate a private consultation for the exquisite "${product.name}" piece.\n\nPlease let me know your availability for a private viewing.\n\nWarm regards.`);
      setSubmitSuccess(false);
      setError('');
    }
  }, [product]);

  // Escape key close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!product) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name.trim()) {
      setError('Please provide your name.');
      return;
    }
    if (!clientPhone.trim() && !email.trim()) {
      setError('Please provide at least a phone number or email address.');
      return;
    }

    setIsSubmitting(true);
    // Simulate luxury concierge API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setName('');
      setClientPhone('');
      setEmail('');
    }, 1500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
        {/* Backdrop glass blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-cocoa/35 backdrop-blur-md"
          id="modal-backdrop"
        />

        {/* Modal Content Box */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.98 }}
          transition={{ type: 'spring', damping: 25, stiffness: 220 }}
          className="bg-ivory w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl border border-sand/60 relative z-10 flex flex-col md:flex-row max-h-[90vh] md:max-h-[85vh]"
          id="modal-content-box"
        >
          {/* Close button top right */}
          <button
            onClick={onClose}
            id="modal-close-btn"
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-ivory/80 backdrop-blur border border-sand/40 flex items-center justify-center text-cocoa hover:text-terracotta transition-colors shadow-sm"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left Column: Premium Imagery Panel */}
          <div className="w-full md:w-1/2 relative min-h-[250px] md:min-h-full bg-sand/20">
            <img
              src={product.image}
              alt={product.name}
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Soft decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-cocoa/40 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 text-white drop-shadow-sm pointer-events-none">
              <span className="text-xs font-sans-poppins tracking-widest uppercase bg-gold/90 text-cocoa font-bold px-2.5 py-1 rounded-full inline-block mb-2">
                {product.category}
              </span>
              <h4 className="text-2xl font-serif-cormorant font-semibold italic">{product.name}</h4>
            </div>
          </div>

          {/* Right Column: Specifications & Inquire Form */}
          <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto bg-white">
            <div>
              {/* Header */}
              <div className="mb-4">
                <span className="text-xs font-sans-poppins text-terracotta uppercase tracking-wider font-bold">Exclusive Piece</span>
                <h3 className="text-2xl font-serif-cormorant text-cocoa font-bold mt-1">{product.name}</h3>
                <div className="w-12 h-[1px] bg-gold mt-2"></div>
              </div>

              {/* Description */}
              <p className="text-sm font-sans-manrope text-cocoa/80 leading-relaxed mb-5">
                {product.description}
              </p>

              {/* Specifications / Materials */}
              <div className="mb-6">
                <h5 className="text-xs font-sans-poppins uppercase tracking-wider text-cocoa/60 font-bold mb-2.5 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-gold shrink-0" /> Exquisite Details
                </h5>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                  {product.specifications.map((spec, i) => (
                    <li key={i} className="text-xs font-sans-manrope text-cocoa/85 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Concierge Form Area */}
            <div className="border-t border-sand/40 pt-5 mt-auto">
              {submitSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald/5 border border-emerald/20 p-5 rounded-xl text-center"
                  id="modal-success-state"
                >
                  <CheckCircle className="w-8 h-8 text-emerald mx-auto mb-2.5" />
                  <h4 className="text-sm font-sans-poppins font-bold text-emerald uppercase tracking-wider">Inquiry Received</h4>
                  <p className="text-xs font-sans-manrope text-cocoa/80 mt-1.5 leading-relaxed">
                    Our private jewellery consultant will contact you via your preferred channel within 2 hours. We look forward to welcome you.
                  </p>
                  <button
                    onClick={onClose}
                    id="modal-success-done"
                    className="mt-4 px-4 py-2 bg-emerald text-white text-xs font-sans-poppins rounded-md hover:bg-emerald/90 transition-colors"
                  >
                    Close Window
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3" id="modal-inquiry-form">
                  <h5 className="text-xs font-sans-poppins uppercase tracking-wider text-cocoa/70 font-bold flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-emerald" /> Private Boutique Inquiry
                  </h5>
                  
                  {error && (
                    <div className="p-2 bg-terracotta/10 border border-terracotta/30 text-terracotta rounded text-xs flex items-center gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-sans-poppins uppercase tracking-wider text-cocoa/60 font-semibold mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3 py-1.5 bg-ivory/50 border border-sand/40 rounded-md text-xs font-sans-manrope text-cocoa focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-sans-poppins uppercase tracking-wider text-cocoa/60 font-semibold mb-1">
                        Phone or Email
                      </label>
                      <input
                        type="text"
                        value={clientPhone}
                        onChange={(e) => setClientPhone(e.target.value)}
                        className="w-full px-3 py-1.5 bg-ivory/50 border border-sand/40 rounded-md text-xs font-sans-manrope text-cocoa focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all"
                        placeholder="+52 / email"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-sans-poppins uppercase tracking-wider text-cocoa/60 font-semibold mb-1">
                      Concierge Note
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={3}
                      className="w-full px-3 py-1.5 bg-ivory/50 border border-sand/40 rounded-md text-xs font-sans-manrope text-cocoa focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    id="modal-submit-btn"
                    disabled={isSubmitting}
                    className="w-full py-2 px-4 bg-cocoa text-ivory text-xs font-sans-poppins uppercase tracking-widest font-semibold rounded-md hover:bg-terracotta hover:text-white active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Securing Connection...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3 h-3" />
                        <span>Send Private Inquiry</span>
                      </>
                    )}
                  </button>

                  <p className="text-[9px] text-center text-cocoa/40 mt-1 leading-normal">
                    This inquiry is securely logged for private service. Direct telephone concierge: <span className="font-semibold text-cocoa">{phone}</span>.
                  </p>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
