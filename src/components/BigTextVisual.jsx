'use client';

import AnimateOnScroll from './AnimateOnScroll';

const BigTextVisual = () => {
    return (
        <section className="visual-section">
            <div className="full-visual">
                <div className="visual-overlay">
                    <AnimateOnScroll animation="scale">
                        <h2 className="big-text">NXT STUDIO</h2>
                    </AnimateOnScroll>
                </div>
            </div>
        </section>
    );
};

export default BigTextVisual;
