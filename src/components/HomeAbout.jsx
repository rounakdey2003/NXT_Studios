'use client';

import AnimateOnScroll from './AnimateOnScroll';

const HomeAbout = () => {
    return (
        <section id="who-we-are" className="home-about-section">
            <AnimateOnScroll animation="fade">
                <div className="ha-header">
                    <span className="text-label-mono">(002)</span>
                    <h2 className="ha-title">Who we are.</h2>
                </div>
            </AnimateOnScroll>

            <div className="ha-content">
                <AnimateOnScroll animation="slide-up" delay={0.2} className="ha-text-block">
                    <p className="ha-main-text">
                        From branding and packaging to web design and digital campaigns, our team partners with ambitious businesses to bring bold ideas to life. We believe great design goes beyond aesthetics.
                    </p>
                    <a href="/about" className="link-arrow">
                        About us <span className="arrow arrow-slide">→</span>
                    </a>
                </AnimateOnScroll>
            </div>
        </section>
    );
};

export default HomeAbout;
