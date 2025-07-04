'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What is xVault?",
      answer: "xVault is a Chrome extension that helps you store and organize frequently used text snippets, such as code blocks, email templates, and more. It features end-to-end encryption to keep your data secure. All features are now completely free."
    },
    {
      question: "Is my data secure with xVault?",
      answer: "Yes, xVault uses end-to-end encryption to ensure that your data is only accessible to you. Your snippets are encrypted by choice and only stored in your browser, and we don't have access to your encryption keys."
    },
    {
      question: "Can I use xVault on multiple devices?",
      answer: "Yes, you can use xVault on multiple devices, as long as you have the extension installed. However, as we don't store your snippets on cloud, we couldn't sync the snippets, therefore you must export it to the new browser."
    },
    {
      question: "How many snippets can I store?",
      answer: "There is no limit. xVault is now completely free and allows you to store unlimited snippets."
    },
    {
      question: "Can I organize my snippets into folders?",
      answer: "Yes, all features including folder organization are free for everyone."
    },
    {
      question: "Is there a mobile app for xVault?",
      answer: "Currently, xVault is only available as a Chrome extension."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primaryBtn rounded-full filter blur-3xl opacity-5 animate-pulse-slow"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-hover rounded-full filter blur-3xl opacity-5 animate-pulse-slow"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block bg-primaryBtn bg-opacity-10 px-4 py-2 rounded-full mb-4">
            <span className=" font-medium text-sm">❓ Common Questions</span>
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-secondaryText max-w-2xl mx-auto">
            Find answers to the most common questions about xVault
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full text-left p-4 rounded-lg bg-secondaryBase border border-border flex justify-between items-center focus:outline-none transition-all duration-300 hover:border-primaryBtn"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                <i className={`fas ${openIndex === index ? 'fa-chevron-up' : 'fa-chevron-down'} text-secondaryText transition-transform duration-300`}></i>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100 p-4' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-secondaryText">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-secondaryText mb-6">Still have questions?</p>
          <a 
            href="https://linkedin.com/in/thaqifrosdi" 
            className="btn-secondary px-8 py-3 rounded-full font-semibold inline-flex items-center justify-center transform transition-all duration-300 hover:scale-105"
          >
            <i className="fas fa-envelope mr-2"></i> Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}