'use client';

import AnimateOnScroll from './AnimateOnScroll';

const services = [
    {
        title: "BRAND IDENTITY",
        desc: "We build cohesive visual systems that define your brand's voice, personality, and presence."
    },
    {
        title: "WEB DESIGN",
        desc: "Modern, responsive websites that balance beauty with seamless user experience."
    },
    {
        title: "CREATIVE STRATEGY",
        desc: "Tailored strategies that align design with business goals and long-term growth."
    }
];

const Services = () => {
    return (
        <section id="services" className="services-section">
            <AnimateOnScroll animation="fade">
                <div className="section-header">
                    <span className="text-label-mono">(003)</span>
                    <span className="services-title">Our services.</span>
                </div>
            </AnimateOnScroll>

            <div className="services-list">
                {services.map((service, index) => (
                    <AnimateOnScroll 
                        key={index} 
                        animation="slide-up" 
                        delay={0.1 + index * 0.1}
                    >
                        <div className="service-item">
                            <div className="service-header">
                                <span className="arrow-icon">→</span>
                                <span className="service-name">{service.title}</span>
                            </div>
                            <p className="service-desc">{service.desc}</p>
                        </div>
                    </AnimateOnScroll>
                ))}
            </div>
        </section>
    );
};

export default Services;
