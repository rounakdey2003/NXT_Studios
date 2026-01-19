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
            <div className="section-header">
                <span className="text-label-mono">(003)</span>
                <span className="services-title">Our services.</span>
            </div>

            <div className="services-list">
                {services.map((service, index) => (
                    <div key={index} className="service-item">
                        <div className="service-header">
                            {index === 1 && <span className="arrow-icon">→</span>}
                            <span className="service-name">{service.title}</span>
                        </div>
                        <p className="service-desc">{service.desc}</p>
                    </div>
                ))}
            </div>

            <style>{`
                .services-section {
                    padding: var(--padding-section);
                }

                .section-header {
                    display: flex;
                    align-items: baseline;
                    gap: 16px;
                    margin-bottom: 60px;
                }

                .services-title {
                    font-size: 32px;
                    font-weight: 500;
                }

                .services-list {
                    display: flex;
                    flex-direction: column;
                }

                .service-item {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    padding: 32px 0;
                    border-bottom: 1px solid var(--color-border);
                    align-items: flex-start;
                }

                .service-item:first-child {
                    border-top: 1px solid var(--color-border);
                }

                .service-header {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                }

                .service-name {
                    font-size: 16px;
                    font-weight: 600;
                    text-transform: uppercase;
                }

                .arrow-icon {
                    font-size: 16px;
                }

                .service-desc {
                    font-size: 16px;
                    color: var(--color-text-secondary);
                    line-height: 1.5;
                }

                @media (max-width: 768px) {
                    .services-section {
                        /* Padding handled by --padding-section */
                    }
                    .service-item {
                        grid-template-columns: 1fr;
                        gap: 16px;
                    }
                }
            `}</style>
        </section>
    );
};

export default Services;
