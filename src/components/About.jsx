const clients = ["NaviAI", "NovaTech", "BoxMedia", "VitaHealth", "Pluto Inc", "Lumora"];

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-content">
                <div className="section-header-dark">
                    <span className="text-label-dark">(002)</span>
                    <span className="text-label-dark">WHO WE ARE</span>
                </div>

                <div className="team-image">
                    <div style={{width:'100%', height:'400px', backgroundColor:'#222', borderRadius:'4px'}}></div>
                    <p className="caption">Our team at the annual design retreat in Kyoto.</p>
                </div>

                <p className="about-text">
                    We believe that great design is not just about aesthetics, but about storytelling and connection. Our mission is to help brands find their unique voice in a crowded digital landscape.
                </p>
            </div>

            <div className="marquee-container">
                <div className="marquee-track">
                    {[...clients, ...clients, ...clients].map((client, i) => (
                        <span key={i} className="client-logo">{client}</span>
                    ))}
                </div>
            </div>

            <style>{`
                .about-section {
                    background-color: var(--color-bg-secondary);
                    color: white;
                    padding: 80px 60px;
                    display: flex;
                    flex-direction: column;
                    gap: 60px;
                }

                .section-header-dark {
                    display: flex;
                    justify-content: space-between;
                    border-bottom: 1px solid rgba(255,255,255,0.2);
                    padding-bottom: 20px;
                    margin-bottom: 40px;
                }

                .text-label-dark {
                    font-size: 12px;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    font-weight: 500;
                    color: rgba(255,255,255,0.7);
                }

                .team-image {
                    margin-bottom: 40px;
                }
                
                .caption {
                    font-size: 12px;
                    color: rgba(255,255,255,0.5);
                    margin-top: 10px;
                }

                .about-text {
                    font-size: 24px;
                    font-weight: 400;
                    line-height: 1.4;
                    max-width: 800px;
                }

                .marquee-container {
                    overflow: hidden;
                    white-space: nowrap;
                    padding: 40px 0;
                    border-top: 1px solid rgba(255,255,255,0.1);
                    border-bottom: 1px solid rgba(255,255,255,0.1);
                }

                .marquee-track {
                    display: inline-block;
                    animation: marquee 20s linear infinite;
                }

                .client-logo {
                    font-size: 24px;
                    font-weight: 600;
                    color: rgba(255,255,255,0.5);
                    margin: 0 40px;
                }

                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }

                @media (max-width: 768px) {
                    .about-section {
                        padding: 60px 24px;
                    }
                    .about-text {
                        font-size: 20px;
                    }
                }
            `}</style>
        </section>
    );
};

export default About;
