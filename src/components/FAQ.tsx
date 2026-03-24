'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "How does the YouTube extension work?",
    answer: "Once installed, a 'Save to FlowRep' button appears directly under the video player on YouTube. Clicking it analyzes the description and video data to instantly create a trackable workout in your dashboard."
  },
  {
    question: "Can I use FlowRep on my mobile phone?",
    answer: "Yes! FlowRep is fully responsive and also available as a PWA (Progressive Web App) that you can install on your iPhone or Android home screen for quick access."
  },
  {
    question: "Is my data private and secure?",
    answer: "Absolutely. We encrypt all user data and never share your workout history with third parties. Your privacy is our top priority."
  },
  {
    question: "How do creators earn money?",
    answer: "Creators can list their specialized programs on our marketplace. When users subscribe or purchase, you get a significant revenue share, handled automatically by our platform."
  },
  {
    question: "Do I need a gym membership?",
    answer: "Not at all. FlowRep has thousands of bodyweight and home-workout videos organized. You can filter by equipment to find the perfect session for your setup."
  },
  {
    question: "What if I want to cancel my Pro plan?",
    answer: "You can cancel anytime with a single click in your account settings. You'll keep your Pro features until the end of your billing cycle."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#f8fbf8]">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#2e7d32] font-bold tracking-widest text-xs uppercase mb-3 block">EVERYTHING YOU NEED TO KNOW</span>
          <h2 className="text-4xl font-black text-[#1a1a1a] tracking-tight">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-[#1a1a1a]">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  className="text-gray-400"
                >
                  <ChevronDown size={20} />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-8 text-gray-500 text-sm leading-relaxed max-w-[90%]">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
