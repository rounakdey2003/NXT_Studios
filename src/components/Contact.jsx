'use client';

import { ArrowRight } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

const Contact = () => {
    return (
        <section id="contact" className="contact-section-dark">
            <AnimateOnScroll animation="fade">
                <div className="section-header-dark">
                    <span className="text-label-mono-light">(006)</span>
                    <h2 className="section-title-light">Let&apos;s build together.</h2>
                </div>
            </AnimateOnScroll>

            <div className="contact-content">
                <AnimateOnScroll animation="slide-up" delay={0.1} className="contact-form-col">
                    <form className="dark-form">
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" placeholder="Full Name" className="input-animated" />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" placeholder="name@gmail.com" className="input-animated" />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea placeholder="Enter your message" rows={4} className="input-animated"></textarea>
                        </div>
                        <button type="submit" className="submit-link animated-underline">
                            Submit <ArrowRight size={16} className="arrow-slide" />
                        </button>
                    </form>
                </AnimateOnScroll>

                <AnimateOnScroll animation="slide-up" delay={0.2} className="contact-info-col">
                    <div className="info-grid">
                        <div className="info-item">
                            <span className="info-label">OFFICE</span>
                            <p>Bangalore<br/>Karnataka, India</p>
                        </div>
                        <div className="info-item">
                            <span className="info-label">PHONE</span>
                            <p>+91 9876543210</p>
                        </div>
                        <div className="info-item">
                            <span className="info-label">EMAIL</span>
                            <p>hello@nxtstudio.com</p>
                        </div>
                    </div>

                    <div className="contact-image">
                       <div className="img-placeholder" style={{width: '100%', height: '300px', backgroundColor: '#222', borderRadius: '4px'}}></div>
                    </div>
                </AnimateOnScroll>
            </div>
        </section>
    );
};

export default Contact;
