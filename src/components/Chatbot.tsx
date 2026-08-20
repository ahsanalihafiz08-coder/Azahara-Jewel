/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, X, Send } from 'lucide-react';

export default function Chatbot() {
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<{ id: string; role: 'user' | 'model'; text: string }[]>([
    { id: 'welcome', role: 'model', text: 'Bienvenido. Welcome to Azahara Jewelry. I am your exclusive AI Concierge. How may I assist you with our luxury collections or coordinating a private appointment at our historic showroom on Calle Palma today?' }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [chatSending, setChatSending] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to the bottom when messages or sending state changes
  useEffect(() => {
    if (chatbotOpen) {
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  }, [chatMessages, chatSending, chatbotOpen]);

  // Highlight phone numbers, address info, emails, and opening hours with gold text or bold styling
  const formatMessageText = (text: string, isUser: boolean) => {
    if (!text) return '';

    // Regex matching our exact phone, address, hours, dates and email patterns
    const regex = /(\+52\s?55\s?1058\s?2278|Calle\sPalma\s#27|Palma\s#27|Palma\s27|Edificio\sAzahara|Suite\s202|Madero|Metro\sZócalo|Monday\s?[–-]\s?Saturday|Sunday|9:00\s?AM\s?[–-]\s?6:00\s?PM|9:00\s?AM\s?[–-]\s?5:00\s?PM|concierge@azaharajewelry\.com)/gi;

    const parts = text.split(regex);
    if (parts.length === 1) return text;

    return parts.map((part, index) => {
      if (part.match(regex)) {
        const highlightClass = isUser
          ? "font-bold text-white underline underline-offset-2 decoration-gold/50"
          : "font-bold text-[#D4AF37] drop-shadow-sm bg-cocoa/5 px-1 rounded border border-gold/15";
        return (
          <span key={index} className={highlightClass}>
            {part}
          </span>
        );
      }
      return part;
    });
  };

  const handleSendChatMessage = async (e?: React.FormEvent, customMsg?: string) => {
    if (e) e.preventDefault();
    const textToSend = customMsg || chatInput;
    if (!textToSend.trim() || chatSending) return;

    const userMessageId = Date.now().toString();
    const newUserMessage = { id: userMessageId, role: 'user' as const, text: textToSend };
    setChatMessages((prev) => [...prev, newUserMessage]);
    if (!customMsg) setChatInput('');
    setChatSending(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: textToSend,
          history: chatMessages.map(msg => ({ role: msg.role === 'user' ? 'user' : 'model', text: msg.text }))
        })
      });
      const data = await response.json();
      if (data.reply) {
        setChatMessages((prev) => [...prev, { id: Date.now().toString(), role: 'model', text: data.reply }]);
      } else {
        throw new Error(data.error || 'Response error');
      }
    } catch (error) {
      console.error('Chat error:', error);
      setChatMessages((prev) => [...prev, { 
        id: Date.now().toString(), 
        role: 'model', 
        text: 'The boutique concierge is briefly occupied. Please call or WhatsApp us (+52 55 1058 2278) or visit us at Palma #27.' 
      }]);
    } finally {
      setChatSending(false);
    }
  };

  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col items-end">
      {/* Chat window panel */}
      <AnimatePresence>
        {chatbotOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.92 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="w-[330px] sm:w-[380px] h-[480px] bg-white rounded-2xl border border-sand shadow-2xl overflow-hidden flex flex-col mb-4"
            id="ai-chatbot-window"
          >
            {/* Chat Header */}
            <div className="bg-cocoa p-4 flex items-center justify-between border-b border-sand/20">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-gold/25 flex items-center justify-center border border-gold/40">
                  <Sparkles className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <h4 className="text-sm font-serif-playfair text-white font-bold leading-none">Azahara Concierge</h4>
                  <span className="text-[9px] font-sans-poppins text-gold uppercase tracking-wider font-semibold">AI Assistant</span>
                </div>
              </div>
              <button
                onClick={() => setChatbotOpen(false)}
                className="p-1 rounded-full hover:bg-white/10 text-sand hover:text-white transition-colors"
              >
                <X className="w-4.5 h-4.5" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-ivory/20" id="chat-messages-container">
              {chatMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[82%] rounded-2xl px-4 py-2.5 text-xs font-sans-manrope leading-relaxed shadow-sm ${
                      msg.role === 'user'
                        ? 'bg-terracotta text-white rounded-tr-none'
                        : 'bg-white border border-sand/50 text-cocoa rounded-tl-none'
                    }`}
                  >
                    {formatMessageText(msg.text, msg.role === 'user')}
                  </div>
                </div>
              ))}
              {chatSending && (
                <div className="flex justify-start">
                  <div className="bg-white border border-sand/50 rounded-2xl rounded-tl-none px-4 py-3 flex items-center gap-1.5 shadow-sm">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggestion Chips */}
            <div className="px-4 py-2 bg-white border-t border-sand/25 flex gap-1.5 overflow-x-auto whitespace-nowrap scrollbar-none">
              {[
                'Boutique Location',
                'Opening Hours',
                'Custom Pricing',
                'Collections'
              ].map((chip) => (
                <button
                  key={chip}
                  onClick={() => handleSendChatMessage(undefined, chip)}
                  className="text-[9px] font-sans-poppins uppercase tracking-wider font-semibold border border-sand hover:border-gold px-2.5 py-1 rounded-full bg-ivory/30 text-cocoa/80 hover:bg-sand/10 transition-colors"
                >
                  {chip}
                </button>
              ))}
            </div>

            {/* Chat Input */}
            <form onSubmit={handleSendChatMessage} className="p-3 bg-white border-t border-sand/30 flex gap-2">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Ask our AI Concierge about our boutique..."
                className="flex-1 px-3 py-2 bg-ivory/40 border border-sand/40 rounded-lg text-xs font-sans-manrope text-cocoa focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                disabled={!chatInput.trim() || chatSending}
                className="w-8 h-8 rounded-lg bg-cocoa hover:bg-terracotta text-white flex items-center justify-center disabled:opacity-40 transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button */}
      <button
        onClick={() => setChatbotOpen(!chatbotOpen)}
        id="ai-concierge-trigger"
        className="bg-cocoa border border-gold/40 md:border-none text-white rounded-full p-3.5 md:p-4 shadow-xl hover:bg-terracotta hover:scale-105 active:scale-95 transition-all flex items-center justify-center group animate-pulse-subtle"
      >
        <Sparkles className="w-4.5 h-4.5 text-gold group-hover:rotate-12 transition-transform" />
      </button>
    </div>
  );
}
