import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Send } from 'lucide-react';

export default function ContactForm() {
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactSubject, setContactSubject] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { [key: string]: string } = {};

    if (!contactName.trim()) errors.name = 'Please enter your name';
    if (!contactEmail.trim() || !/\S+@\S+\.\S+/.test(contactEmail)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!contactMessage.trim()) errors.message = 'Please share your enquiry details';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setFormSubmitting(true);

    // Simulate luxury API logging
    setTimeout(() => {
      setFormSubmitting(false);
      setFormSuccess(true);
      // Reset inputs
      setContactName('');
      setContactPhone('');
      setContactEmail('');
      setContactSubject('');
      setContactMessage('');
    }, 1800);
  };

  return (
    <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-2xl border border-sand/50 shadow-md animate-[fadeIn_0.3s_ease-out]" id="contact-form-panel">
      {formSuccess ? (
        <div
          className="text-center py-12 space-y-4"
          id="contact-success-state"
        >
          <div className="w-16 h-16 rounded-full bg-emerald/10 border border-emerald/30 flex items-center justify-center mx-auto text-emerald">
            <CheckCircle className="w-8 h-8" />
          </div>
          <h3 className="text-3xl font-serif-cormorant font-bold text-cocoa">Enquiry Secured Successfully</h3>
          <p className="text-sm font-sans-manrope text-cocoa/85 max-w-md mx-auto leading-relaxed">
            Thank you for reaching out to Azahara Jewelry. Our master concierge has logged your request and will coordinate back with you within 2 hours.
          </p>
          <button
            onClick={() => setFormSuccess(false)}
            id="reset-form-btn"
            className="mt-6 px-6 py-2.5 bg-cocoa text-ivory text-xs font-sans-poppins uppercase tracking-widest rounded-md hover:bg-terracotta hover:text-white transition-colors font-semibold"
          >
            Send Another Enquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleContactSubmit} className="space-y-5" id="boutique-contact-form">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-sans-poppins uppercase tracking-wider text-cocoa/70 font-semibold mb-1.5">
                Your Name <span className="text-terracotta">*</span>
              </label>
              <input
                type="text"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                className={`w-full px-4 py-2 bg-ivory/40 border rounded-md text-sm font-sans-manrope text-cocoa focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all ${
                  formErrors.name ? 'border-terracotta/60 bg-terracotta/5' : 'border-sand/40'
                }`}
                placeholder="Sofia Rodriguez"
              />
              {formErrors.name && (
                <span className="text-[10px] text-terracotta font-medium mt-1 block">{formErrors.name}</span>
              )}
            </div>
            <div>
              <label className="block text-xs font-sans-poppins uppercase tracking-wider text-cocoa/70 font-semibold mb-1.5">
                Phone Number
              </label>
              <input
                type="text"
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
                className="w-full px-4 py-2 bg-ivory/40 border border-sand/40 rounded-md text-sm font-sans-manrope text-cocoa focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all"
                placeholder="+52 55..."
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-sans-poppins uppercase tracking-wider text-cocoa/70 font-semibold mb-1.5">
                Email Address <span className="text-terracotta">*</span>
              </label>
              <input
                type="email"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                className={`w-full px-4 py-2 bg-ivory/40 border rounded-md text-sm font-sans-manrope text-cocoa focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all ${
                  formErrors.email ? 'border-terracotta/60 bg-terracotta/5' : 'border-sand/40'
                }`}
                placeholder="sofia@gmail.com"
              />
              {formErrors.email && (
                <span className="text-[10px] text-terracotta font-medium mt-1 block">{formErrors.email}</span>
              )}
            </div>
            <div>
              <label className="block text-xs font-sans-poppins uppercase tracking-wider text-cocoa/70 font-semibold mb-1.5">
                Enquiry Subject
              </label>
              <input
                type="text"
                value={contactSubject}
                onChange={(e) => setContactSubject(e.target.value)}
                className="w-full px-4 py-2 bg-ivory/40 border border-sand/40 rounded-md text-sm font-sans-manrope text-cocoa focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all"
                placeholder="Custom Ring Evaluation / Store Visit"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-sans-poppins uppercase tracking-wider text-cocoa/70 font-semibold mb-1.5">
              Your Message <span className="text-terracotta">*</span>
            </label>
            <textarea
              value={contactMessage}
              onChange={(e) => setContactMessage(e.target.value)}
              rows={4}
              className={`w-full px-4 py-2 bg-ivory/40 border rounded-md text-sm font-sans-manrope text-cocoa focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all resize-none ${
                formErrors.message ? 'border-terracotta/60 bg-terracotta/5' : 'border-sand/40'
              }`}
              placeholder="Hello Azahara Jewelry, I am planning a visit to Centro on Thursday and would love to consult..."
            />
            {formErrors.message && (
              <span className="text-[10px] text-terracotta font-medium mt-1 block">{formErrors.message}</span>
            )}
          </div>

          <button
            type="submit"
            id="contact-submit-btn"
            disabled={formSubmitting}
            className="w-full py-3 bg-cocoa text-ivory text-xs font-sans-poppins uppercase tracking-widest font-semibold rounded-md hover:bg-terracotta hover:text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
          >
            {formSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Submitting Secured Inquiry...</span>
              </>
            ) : (
              <>
                <Send className="w-3.5 h-3.5" />
                <span>Send Inquiry</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
