'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

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
                <div className="faq-header-col">
                    <span className="text-label-mono">(005)</span>
                    <h2 className="faq-title">Your questions,<br/>answered.</h2>
                    <p className="faq-desc">
                        We build cohesive visual systems that define your brand&apos;s voice, personality, and presence.
                    </p>
                </div>

                <div className="faq-list-col">
                    <span className="text-label-mono mb-6 block">PROJECTS</span>
                    
                    <div className="accordion">
                        {faqItems.slice(0, 3).map((item, i) => (
                            <div key={i} className="accordion-item" onClick={() => toggleAccordion(i)}>
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
                    
                    <div className="accordion">
                        {faqItems.slice(3).map((item, i) => {
                            const index = i + 3;
                            return (
                                <div key={index} className="accordion-item" onClick={() => toggleAccordion(index)}>
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
                </div>
            </div>

            <style>{`
                .faq-section {
                    padding: var(--padding-section);
                }

                .faq-grid {
                    display: grid;
                    grid-template-columns: 1fr 1.5fr;
                    gap: 80px;
                }

                .faq-title {
                    font-size: 40px;
                    font-weight: 500;
                    margin: 24px 0;
                    line-height: 1.2;
                }

                .faq-desc {
                    font-size: 16px;
                    color: var(--color-text-secondary);
                    max-width: 300px;
                    line-height: 1.5;
                }

                .mb-6 { margin-bottom: 24px; }
                .mt-10 { margin-top: 40px; }
                .block { display: block; }

                .accordion-item {
                    border-bottom: 1px solid var(--color-border);
                    padding: 24px 0;
                    cursor: pointer;
                }

                .accordion-item:first-child {
                    border-top: 1px solid var(--color-border);
                }

                .accordion-header {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                }

                .question {
                    font-size: 16px;
                    font-weight: 500;
                }

                .accordion-content {
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 0.3s ease, padding 0.3s ease;
                    padding-left: 32px;
                }

                .accordion-content.open {
                    max-height: 200px;
                    padding-top: 16px;
                }

                .accordion-content p {
                    color: var(--color-text-secondary);
                    font-size: 14px;
                    line-height: 1.5;
                }

                @media (max-width: 900px) {
                    .faq-grid {
                        grid-template-columns: 1fr;
                        gap: 40px;
                    }
                }

                @media (max-width: 768px) {
                    .faq-section {
                         /* Padding handled by --padding-section */
                    }
                }
            `}</style>
        </section>
    );
};

export default FAQ;
