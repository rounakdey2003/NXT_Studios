'use client';

import { Quote } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

const testimonials = [
    {
        name: "VIKRAM NEERUGATTI",
        role: "PRODUCT MANAGER",
        company: "NXT Studios",
        quote: "NXT's innovative solutions accelerated our digital transformation, delivering measurable results.",
    },
    {
        name: "ROUNAK DEY",
        role: "DEVELOPMENT LEAD",
        company: "Infosys",
        quote: "Partnering with NXT gave us a competitive edge and a seamless user experience across platforms.",
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="testimonials-section">
            <AnimateOnScroll animation="fade">
                <h2 className="section-title">Voices behind our work.</h2>
            </AnimateOnScroll>

            <div className="testimonials-grid">
                {testimonials.map((t, i) => (
                    <AnimateOnScroll 
                        key={i} 
                        animation="slide-up" 
                        delay={0.1 + i * 0.15}
                    >
                        <div className="testimonial-card hover-lift">
                            <div className="quote-icon">
                                <Quote size={24} />
                            </div>
                            <p className="testimonial-quote">"{t.quote}"</p>
                            <div className="author-info">
                                <span className="name">{t.name}</span>
                                <span className="role">/ {t.role}</span>
                            </div>
                        </div>
                    </AnimateOnScroll>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
