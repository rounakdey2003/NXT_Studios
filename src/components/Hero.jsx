'use client';

import { ArrowRight } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <AnimateOnScroll animation="fade" delay={0.1}>
                <div className="hero-top">
                    <span className="since-badge">SINCE 2025</span>
                    <span className="status-badge">
                        <span className="dot"></span> ACCEPTING WORK
                    </span>
                </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="slide-up" delay={0.2}>
                <h1 className="hero-headline text-hero">
                    NXT is a digital studio offering web design, branding, and creative strategy to help brands stand out with modern, seamless experiences.
                </h1>
            </AnimateOnScroll>

            <AnimateOnScroll animation="slide-up" delay={0.4}>
                <div className="hero-cta">
                    <a href="#contact" className="button-primary">
                        Book a call <div className="icon-circle"><ArrowRight size={16} /></div>
                    </a>
                </div>
            </AnimateOnScroll>
        </section>
    );
};

export default Hero;
