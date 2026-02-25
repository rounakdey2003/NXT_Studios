'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

const faqItems = [
    {
        question: "What kind of projects does NXT Studio work on?",
        answer: "We specialize in branding, web design, product design, and creative campaigns. Each project is tailored to the client's needs."
    },
    {
        question: "Do you work with startups as well as established companies?",
        answer: "Yes, we partner with ambitious businesses at every stage, from early-stage startups to global brands seeking a refresh."
    },
    {
        question: "How long does a typical project take?",
        answer: "Timelines vary depending on scope, but a typical branding and web project takes between 4-8 weeks."
    },
    {
        question: "How does payment work?",
        answer: "We typically require a 50% deposit to secure your slot, with the remaining balance due upon project completion."
    },
    {
        question: "What do I need to provide before we start?",
        answer: "A clear brief, brand goals, and any existing assets are helpful. We'll guide you through a discovery phase to gather everything needed."
    },
    {
        question: "How can I start a project with you?",
        answer: "Simply fill out our contact form below or book a discovery call. We'd love to hear about your vision."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section className="faq-section">
            <div className="faq-grid">
                <AnimateOnScroll animation="slide-left" className="faq-header-col">
                    <span className="text-label-mono">(005)</span>
                    <h2 className="faq-title">Your questions,<br/>answered.</h2>
                    <p className="faq-desc">
                        We build cohesive visual systems that define your brand&apos;s voice, personality, and presence.
                    </p>
                </AnimateOnScroll>

                <AnimateOnScroll animation="slide-up" delay={0.2} className="faq-list-col">
                    <span className="text-label-mono mb-6 block">PROJECTS</span>
                    
                    <div className="accordion accordion-animated">
                        {faqItems.slice(0, 3).map((item, i) => (
                            <div 
                                key={i} 
                                className={`accordion-item ${openIndex === i ? 'active' : ''}`} 
                                onClick={() => toggleAccordion(i)}
                            >
                                <div className="accordion-header">
                                    <div className="icon-wrapper">
                                        {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                                    </div>
                                    <h3 className="question">{item.question}</h3>
                                </div>
                                <div className={`accordion-content ${openIndex === i ? 'open' : ''}`}>
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <span className="text-label-mono mb-6 mt-10 block">GET STARTED</span>
                    
                    <div className="accordion accordion-animated">
                        {faqItems.slice(3).map((item, i) => {
                            const index = i + 3;
                            return (
                                <div 
                                    key={index} 
                                    className={`accordion-item ${openIndex === index ? 'active' : ''}`}
                                    onClick={() => toggleAccordion(index)}
                                >
                                    <div className="accordion-header">
                                        <div className="icon-wrapper">
                                            {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                                        </div>
                                        <h3 className="question">{item.question}</h3>
                                    </div>
                                    <div className={`accordion-content ${openIndex === index ? 'open' : ''}`}>
                                        <p>{item.answer}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </AnimateOnScroll>
            </div>
        </section>
    );
};

export default FAQ;
