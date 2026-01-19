import Footer from '@/components/Footer';

const AboutPage = () => {
    const team = [
        { name: "ROUNAK DEY", role: "Developer", desc: "Rounak leads the studio's development vision with over 1 year in development." },
        { name: "AASIRBAD BISWAL", role: "Developer/Tester", desc: "Aasirbad looks after development and testing with expertise in software development." },
        { name: "SAGOLSEM AKASH", role: "Designer", desc: "Akash designs digital experiences that connect people and products." },
        { name: "VIKRAM NEERUGATTI", role: "Project Manager", desc: "Vikram ensures every project runs smoothly and delivers on time." },
    ];

    const stats = [
        { number: "120+", label: "PROJECTS DELIVERED", desc: "Successful collaborations across branding and product design." },
        { number: "15+", label: "INDUSTRIES SERVED", desc: "From lifestyle and eCommerce to tech, fintech, and hospitality." },
        { number: "98%", label: "CLIENT SATISFACTION", desc: "Based on feedback and long-term partnerships." },
        { number: "7+", label: "YEARS OF EXPERIENCE", desc: "Designing brands and experiences that last." },
    ];

    return (
        <div className="about-page">
            {/* 1. Header Section */}
            <div className="ap-header">
                <span className="text-label-mono">ABOUT NXT</span>
                <h1 className="ap-headline">
                    <span className="bold">At NXT</span>, design is more than visuals — it's about creating brands that <span className="bold">resonate, inspire, and grow with the people they serve.</span>
                </h1>
            </div>

            {/* 2. Content Grid Images */}
            <div className="ap-image-grid">
                <div className="ap-img-card" style={{backgroundImage: 'linear-gradient(to top, #00c6fb 0%, #005bea 100%)'}}></div>
                <div className="ap-img-card" style={{backgroundImage: 'linear-gradient(120deg, #f093fb 0%, #f5576c 100%)'}}></div>
                <div className="ap-img-card" style={{backgroundImage: 'linear-gradient(to top, #f43b47 0%, #453a94 100%)'}}></div>
                <div className="ap-img-card" style={{backgroundImage: 'linear-gradient(to top, #cd9cf2 0%, #f6f3ff 100%)'}}></div>
            </div>

            {/* 3. Hero Overlay Banner */}
            <div className="ap-banner">
                <div className="ap-banner-bg" style={{backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7)), linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)'}}>
                    <div className="ap-banner-content">
                        <h2>DESIGN THAT LASTS.<br/>BRANDS THAT RESONATE.<br/>EXPERIENCES THAT INSPIRE.</h2>
                    </div>
                </div>
            </div>

            {/* 4. Text Content */}
            <div className="ap-text-section">
                <p>
                    Design is a way to shape how people experience and remember a brand. Our work blends strategy and creativity to craft identities, products, and campaigns that stand out while staying true to the essence of each client.
                </p>
                <p>
                    We partner with businesses at every stage, from startups to established brands seeking fresh momentum. Our vision is to create design that not only resonates today but continues to inspire trust and connection for years to come.
                </p>
            </div>

            {/* 5. Stats Section */}
            <div className="ap-stats">
                {stats.map((stat, i) => (
                    <div key={i} className="stat-item">
                        <span className="stat-num">{stat.number}</span>
                        <h4 className="stat-label">{stat.label}</h4>
                        <p className="stat-desc">{stat.desc}</p>
                    </div>
                ))}
            </div>

            {/* 6. Team Section */}
            <div className="ap-team">
                <h2 className="section-title">Meet our team.</h2>
                <div className="team-grid">
                    {team.map((member, i) => (
                        <div key={i} className="team-card">
                            <div className="team-img-placeholder"></div>
                            <div className="team-info">
                                <h3>{member.name}</h3>
                                <span className="team-role">■ {member.role}</span>
                                <p className="team-desc">{member.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 7. Awards Section */}
            <div className="ap-awards-section">
                <h2 className="section-title">Proudly awarded.</h2>
                <ul className="awards-list">
                    {[
                        { year: "2025", title: "Design Leadership and Impact Award" },
                        { year: "2024", title: "International Branding Excellence Award" },
                        { year: "2022", title: "Outstanding Web Design Recognition" },
                        { year: "2019", title: "Excellence in Brand Identity Design" },
                        { year: "2016", title: "Best Emerging Studio Award" }
                    ].map((award, i) => (
                        <li key={i} className="award-item">
                            <span className="award-year">{award.year}</span>
                            <span className="award-title">■ {award.title}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <Footer />

            <style>{`
                .text-label-mono {
                    font-size: 12px;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    font-family: monospace;
                    color: var(--color-text-secondary);
                    display: block;
                    margin-bottom: 24px;
                }

                .ap-header {
                    padding: 120px 60px 80px;
                    max-width: 900px;
                }

                .ap-headline {
                    font-size: 40px;
                    font-weight: 400;
                    line-height: 1.3;
                    color: #555;
                }

                .ap-headline .bold {
                    font-weight: 500;
                    color: black;
                }

                .ap-image-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 20px;
                    padding: 0 60px 80px;
                }

                .ap-img-card {
                    aspect-ratio: 3/4;
                    background-color: #eee;
                    border-radius: 2px;
                }

                .ap-banner {
                    padding: 0 60px 80px;
                }

                .ap-banner-bg {
                    height: 500px;
                    width: 100%;
                    background-size: cover;
                    background-position: center;
                    display: flex;
                    align-items: flex-end;
                    padding: 60px;
                    color: white;
                }

                .ap-banner-content h2 {
                    font-size: 32px;
                    font-weight: 500;
                    letter-spacing: 1px;
                    line-height: 1.4;
                }

                .ap-text-section {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 60px;
                    padding: 0 60px 100px;
                    font-size: 18px;
                    line-height: 1.6;
                    color: var(--color-text-secondary);
                }

                .ap-stats {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 40px;
                    padding: 0 60px 120px;
                }

                .stat-num {
                    font-size: 56px;
                    font-weight: 600;
                    display: block;
                    margin-bottom: 16px;
                }

                .stat-label {
                    font-size: 14px;
                    font-weight: 600;
                    margin-bottom: 12px;
                    letter-spacing: 0.5px;
                }

                .stat-desc {
                    font-size: 14px;
                    color: var(--color-text-secondary);
                    line-height: 1.5;
                }

                .ap-team {
                    padding: 0 60px 120px;
                }

                .section-title {
                    font-size: 40px;
                    margin-bottom: 60px;
                    font-weight: 500;
                }

                .team-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 40px;
                }

                .team-img-placeholder {
                    aspect-ratio: 1/1;
                    background-color: #ddd;
                    margin-bottom: 24px;
                    border-radius: 2px;
                }

                .team-info h3 {
                    font-size: 14px;
                    font-weight: 600;
                    text-transform: uppercase;
                    margin-bottom: 8px;
                }

                .team-role {
                    font-size: 12px;
                    color: var(--color-text-secondary);
                    display: block;
                    margin-bottom: 16px;
                }

                .team-desc {
                    font-size: 14px;
                    color: var(--color-text-secondary);
                    line-height: 1.5;
                }

                .ap-awards-section {
                    padding: 0 60px 100px;
                }

                .awards-list {
                    border-top: 1px solid var(--color-border);
                }

                .award-item {
                    display: grid;
                    grid-template-columns: 200px 1fr;
                    padding: 24px 0;
                    border-bottom: 1px solid var(--color-border);
                    align-items: center;
                }

                .award-year {
                    font-size: 14px;
                    color: var(--color-text-secondary);
                }

                .award-title {
                    font-size: 16px;
                    font-weight: 500;
                }

                @media (max-width: 1024px) {
                    .ap-header, .ap-banner, .ap-text-section, .ap-stats, .ap-team, .ap-awards-section, .ap-image-grid {
                        padding-left: 24px;
                        padding-right: 24px;
                    }

                    .ap-image-grid, .ap-stats, .team-grid {
                        grid-template-columns: 1fr 1fr;
                    }
                    
                    .ap-text-section {
                        grid-template-columns: 1fr;
                    }
                }

                @media (max-width: 600px) {
                    .ap-image-grid, .ap-stats, .team-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </div>
    );
};

export default AboutPage;
