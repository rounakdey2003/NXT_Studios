'use client';

import AnimateOnScroll from './AnimateOnScroll';

const Footer = () => {
    return (
        <footer className="footer-mini">
            <AnimateOnScroll animation="fade">
                <div className="footer-bottom">
                    <span>© 2025 NXT Studio. All rights reserved.</span>
                    <span>Created by NXT Studio.</span>
                </div>
            </AnimateOnScroll>
        </footer>
    );
};

export default Footer;
