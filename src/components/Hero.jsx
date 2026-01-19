import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="hero-top">
                <span className="since-badge">SINCE 2025</span>
                <span className="status-badge">
                    <span className="dot"></span> ACCEPTING WORK
                </span>
            </div>

            <h1 className="hero-headline text-hero">
                NXT is a digital studio offering web design, branding, and creative strategy to help brands stand out with modern, seamless experiences.
            </h1>

            <div className="hero-cta">
                <a href="#contact" className="button-primary">
                    Book a call <div className="icon-circle"><ArrowRight size={16} /></div>
                </a>
            </div>

            <style>{`
                .hero-section {
                    padding: var(--padding-section);
                    min-height: 80vh;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    gap: 60px;
                }

                .hero-top {
                    display: flex;
                    gap: 24px;
                    font-size: 12px;
                    font-weight: 500;
                    letter-spacing: 0.5px;
                    color: var(--color-text-primary);
                }

                .status-badge {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .dot {
                    width: 8px;
                    height: 8px;
                    background-color: #22c55e;
                    border-radius: 50%;
                }

                .hero-headline {
                    max-width: 900px;
                    font-size: var(--text-h1-size);
                    letter-spacing: -1px;
                }

                .button-primary {
                    display: inline-flex;
                    align-items: center;
                    gap: 12px;
                    padding: 0;
                    font-size: 16px;
                    font-weight: 500;
                    color: black;
                }

                .icon-circle {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    border: 1px solid rgba(0,0,0,0.1);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.2s;
                }

                .button-primary:hover .icon-circle {
                    background: black;
                    color: white;
                    border-color: black;
                }

                @media (max-width: 768px) {
                    .hero-section {
                         /* Padding handled by --padding-section */
                         min-height: 60vh;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
