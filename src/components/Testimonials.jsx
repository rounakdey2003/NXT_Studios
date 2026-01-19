const testimonials = [
    {
        name: "VIKRAM NEERUGATTI",
        role: "PRODUCT MANAGER",
        company: "NXT Studios",
        quote: "NXT's innovative solutions accelerated our digital transformation, delivering measurable results.",
        image: "https://framerusercontent.com/images/indian1.jpg"
    },
    {
        name: "ROUNAK DEY",
        role: "DEVELOPMENT LEAD",
        company: "Infosys",
        quote: "Partnering with NXT gave us a competitive edge and a seamless user experience across platforms.",
        image: "https://framerusercontent.com/images/indian2.jpg"
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="testimonials-section">
            <h2 className="section-title">Voices behind our work.</h2>

            <div className="testimonials-grid">
                {testimonials.map((t, i) => (
                    <div key={i} className="testimonial-card">
                        <div className="author-info">
                            <span className="name">{t.name}</span>
                            <span className="role">/ {t.role}</span>
                        </div>
                        <div className="card-content">
                            <div className="testimonial-visual" style={{
                                backgroundImage: `lightgray`,
                                height: '200px',
                                backgroundSize: 'cover'
                            }}></div>
                        </div>
                    </div>
                ))}
            </div>

            <style>{`
                .testimonials-section {
                    padding: var(--padding-section);
                    padding-bottom: 120px;
                }

                .section-title {
                    font-size: 32px;
                    font-weight: 500;
                    margin-bottom: 60px;
                }

                .testimonials-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 40px;
                }

                .testimonial-card {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                .author-info {
                    font-size: 12px;
                    font-weight: 600;
                    text-transform: uppercase;
                    display: flex;
                    gap: 4px;
                }

                .name {
                    color: black;
                }

                .role {
                    color: black;
                }

                .testimonial-visual {
                    width: 100%;
                    background-color: #e0e0e0;
                    border-radius: 2px;
                }

                @media (max-width: 768px) {
                    .testimonials-section {
                         /* Padding handled by --padding-section */
                         padding-bottom: 80px;
                    }
                    .testimonials-grid {
                        grid-template-columns: 1fr;
                        gap: 32px;
                    }
                }
            `}</style>
        </section>
    );
};

export default Testimonials;
