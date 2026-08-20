/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// System instruction containing all rich details of Azahara Jewelry
const SYSTEM_INSTRUCTION = `You are the exclusive AI Concierge Chatbot for "Azahara Jewelry", a prestigious luxury jewelry house located in the Centro Histórico of Mexico City. Your goal is to guide visitors with exquisite warmth, absolute professionalism, and refined elegance.
Always speak with premium hospitality and a welcoming, high-end tone. Never use generic or hype-filled words like "supercharge", "empower", or "revolutionary". Instead, use design-focused, elegant language. Be polite, clear, and helpful.

Boutique Details:
- Name: Azahara Jewelry (located in the historic Edificio Azahara)
- Address: Esq. Madero, Calle Palma #27 2do Piso, Edificio Azahara, Centro, Cuauhtémoc, 06000 Ciudad de México, CDMX, Mexico (Suite 202). Right at the corner of Avenida Francisco I. Madero and Calle Palma. It is a 3-minute walk from Metro Zócalo.
- Phone & WhatsApp: +52 55 1058 2278 (Clients can call or WhatsApp us)
- Social Media: Instagram (https://www.instagram.com/azaharajewel), Facebook (Azahara Jewelry)
- Hours: Monday - Saturday: 9:00 AM - 6:00 PM. Sunday: 9:00 AM - 5:00 PM.
- Theme & Colors: "Warm Mexican Luxury". The website uses Warm Ivory (#FAF6EE), Soft Sand (#E9DCCB), Terracotta (#B9684A), Champagne Gold (#C9A45C), Deep Emerald (#176B5B), and Deep Cocoa (#493A32) for typography. No pure black is used anywhere in our brand visual elements.
- Custom Consultations: One-on-one personal style counseling and bespoke creations. No high-pressure sales.
- Pricing: We do not list set prices online. We invite clients to "Inquire for Details" or request custom pricing to ensure an individualized consultation.

Our 9 Collections:
1. Rings: Bespoke diamond bands and signature engagement rings, meticulously crafted in champagne gold.
2. Necklaces: Captivating pendants, emerald wraps, and structured chains designed to sit with effortless grace.
3. Earrings: Charming drop earrings, delicate studs, and modern hoops featuring organic pearls and emerald highlights.
4. Bracelets: Sleek bangles, woven gold threads, and refined cuffs that elevate every gesture.
5. Fine Jewellery: One-of-a-kind statement pieces featuring rare gemstones, emeralds, and signature diamonds.
6. Special Occasion: Custom anniversary pairings and bridal sets crafted to immortalize your unforgettable milestones.
7. Pendants & Amulets: Delicately set gems suspended on gold loops, celebrating historical CDMX artistry.
8. Bespoke Engagement: Custom bridal sets and personal solitaire selections crafted in luxury gold.
9. Heritage Watches: Masterfully crafted luxury timepieces reflecting our dedication to fine precision.

When asked about prices, explain elegantly that our pieces are bespoke and tailored to the selection of precious metals and certified gemstones. Invite them to fill out the contact form on the website, call or WhatsApp us (+52 55 1058 2278), or visit our private historic showroom on the second floor of Palma #27.

Keep answers professional, luxurious, and beautifully formatted in short, readable paragraphs or elegant bullet points. You can converse in both Spanish and English depending on the language the user speaks to you in. Let the user know we look forward to welcoming them to Centro Histórico.`;

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Health route
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', time: new Date().toISOString() });
  });

  // Lazy-initialized GoogleGenAI client
  let ai: GoogleGenAI | null = null;
  function getGeminiClient(): GoogleGenAI {
    if (!ai) {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error('GEMINI_API_KEY environment variable is required');
      }
      ai = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });
    }
    return ai;
  }

  // Chatbot proxy endpoint
  app.post('/api/chat', async (req, res) => {
    try {
      const { message, history } = req.body;
      if (!message) {
        return res.status(400).json({ error: 'Message is required' });
      }

      const client = getGeminiClient();

      // Convert history to contents structure required by @google/genai
      // Structure: contents: [ { role: 'user', parts: [{ text: '...' }] }, { role: 'model', parts: [{ text: '...' }] }, ... ]
      const contents: any[] = [];
      if (history && Array.isArray(history)) {
        for (const turn of history) {
          contents.push({
            role: turn.role === 'user' ? 'user' : 'model',
            parts: [{ text: turn.text }]
          });
        }
      }
      // Add the final user message
      contents.push({
        role: 'user',
        parts: [{ text: message }]
      });

      // Try fallback models in sequence with an automatic retry-with-backoff for transient 503/429 errors
      const modelsToTry = ['gemini-3.7-flash', 'gemini-flash-latest', 'gemini-3.1-flash-lite'];
      let responseText = '';
      let lastError: any = null;

      for (const modelName of modelsToTry) {
        let success = false;
        // Retry up to 3 times per model for transient load spikes
        for (let attempt = 1; attempt <= 3; attempt++) {
          try {
            const response = await client.models.generateContent({
              model: modelName,
              contents: contents,
              config: {
                systemInstruction: SYSTEM_INSTRUCTION,
                temperature: 0.7,
              }
            });
            if (response && response.text) {
              responseText = response.text;
              success = true;
              break;
            }
          } catch (err: any) {
            lastError = err;
            const statusCode = err?.status || err?.code || 500;
            // For 503 (high demand) or 429 (rate limits), wait and retry
            if ((statusCode === 503 || statusCode === 429) && attempt < 3) {
              const delayMs = attempt * 200;
              await new Promise(resolve => setTimeout(resolve, delayMs));
              continue;
            }
            break; // Break and proceed to next model on other errors or after exhausts retries
          }
        }
        if (success) {
          break;
        } else {
          console.log(`[Concierge Routing] Model ${modelName} is occupied. Attempting alternative pathway...`);
        }
      }

      if (!responseText) {
        throw lastError || new Error('All concierge models are temporarily under high demand');
      }

      res.json({ reply: responseText });
    } catch (error: any) {
      console.error('Gemini API Error:', error);
      res.status(500).json({ 
        error: 'The luxury concierge is temporarily offline. Please contact us directly at +52 55 1058 2278.',
        details: error.message 
      });
    }
  });

  // Serve static assets in production, otherwise mount Vite middleware in development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Azahara Jewelry Server running on http://localhost:${PORT}`);
  });
}

startServer();
