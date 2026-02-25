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
                    <div className="w-full h-100 bg-[#222] rounded"></div>
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
        </section>
    );
};

export default About;
