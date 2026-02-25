'use client';

import Footer from '@/components/Footer';
import AnimateOnScroll from '@/components/AnimateOnScroll';

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
                <AnimateOnScroll animation="fade">
                    <span className="text-label-mono">ABOUT NXT</span>
                </AnimateOnScroll>
                <AnimateOnScroll animation="slide-up" delay={0.15}>
                    <h1 className="ap-headline">
                        <span className="bold">At NXT</span>, design is more than visuals — it's about creating brands that <span className="bold">resonate, inspire, and grow with the people they serve.</span>
                    </h1>
                </AnimateOnScroll>
            </div>

            {/* 2. Content Grid Images */}
            <div className="ap-image-grid">
                {[0, 1, 2, 3].map((i) => (
                    <AnimateOnScroll key={i} animation="scale" delay={0.1 + i * 0.1}>
                        <div className={`ap-img-card ${i === 0 ? 'bg-linear-to-t from-[#00c6fb] to-[#005bea]' : i === 1 ? 'bg-linear-to-br from-[#f093fb] to-[#f5576c]' : i === 2 ? 'bg-linear-to-t from-[#f43b47] to-[#453a94]' : 'bg-linear-to-t from-[#cd9cf2] to-[#f6f3ff]'}`}></div>
                    </AnimateOnScroll>
                ))}
            </div>

            {/* 3. Hero Overlay Banner */}
            <AnimateOnScroll animation="fade">
                <div className="ap-banner">
                    <div className="ap-banner-bg bg-linear-to-t from-[#a18cd1] to-[#fbc2eb] relative">
                        <div className="absolute inset-0 bg-linear-to-b from-black/30 to-black/70"></div>
                        <div className="ap-banner-content relative z-10">
                            <h2>DESIGN THAT LASTS.<br/>BRANDS THAT RESONATE.<br/>EXPERIENCES THAT INSPIRE.</h2>
                        </div>
                    </div>
                </div>
            </AnimateOnScroll>

            {/* 4. Text Content */}
            <div className="ap-text-section">
                <AnimateOnScroll animation="slide-up" delay={0.1}>
                    <p>
                        Design is a way to shape how people experience and remember a brand. Our work blends strategy and creativity to craft identities, products, and campaigns that stand out while staying true to the essence of each client.
                    </p>
                </AnimateOnScroll>
                <AnimateOnScroll animation="slide-up" delay={0.2}>
                    <p>
                        We partner with businesses at every stage, from startups to established brands seeking fresh momentum. Our vision is to create design that not only resonates today but continues to inspire trust and connection for years to come.
                    </p>
                </AnimateOnScroll>
            </div>

            {/* 5. Stats Section */}
            <div className="ap-stats">
                {stats.map((stat, i) => (
                    <AnimateOnScroll key={i} animation="slide-up" delay={0.1 + i * 0.1}>
                        <div className="stat-item">
                            <span className="stat-num">{stat.number}</span>
                            <h4 className="stat-label">{stat.label}</h4>
                            <p className="stat-desc">{stat.desc}</p>
                        </div>
                    </AnimateOnScroll>
                ))}
            </div>

            {/* 6. Team Section */}
            <div className="ap-team">
                <AnimateOnScroll animation="fade">
                    <h2 className="section-title">Meet our team.</h2>
                </AnimateOnScroll>
                <div className="team-grid">
                    {team.map((member, i) => (
                        <AnimateOnScroll key={i} animation="slide-up" delay={0.1 + i * 0.1}>
                            <div className="team-card hover-lift">
                                <div className="team-img-placeholder"></div>
                                <div className="team-info">
                                    <h3>{member.name}</h3>
                                    <span className="team-role">■ {member.role}</span>
                                    <p className="team-desc">{member.desc}</p>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </div>

            {/* 7. Awards Section */}
            <div className="ap-awards-section">
                <AnimateOnScroll animation="fade">
                    <h2 className="section-title">Proudly awarded.</h2>
                </AnimateOnScroll>
                <ul className="awards-list">
                    {[
                        { year: "2025", title: "Design Leadership and Impact Award" },
                        { year: "2024", title: "International Branding Excellence Award" },
                        { year: "2022", title: "Outstanding Web Design Recognition" },
                        { year: "2019", title: "Excellence in Brand Identity Design" },
                        { year: "2016", title: "Best Emerging Studio Award" }
                    ].map((award, i) => (
                        <AnimateOnScroll key={i} animation="slide-left" delay={0.05 + i * 0.05}>
                            <li className="award-item">
                                <span className="award-year">{award.year}</span>
                                <span className="award-title">■ {award.title}</span>
                            </li>
                        </AnimateOnScroll>
                    ))}
                </ul>
            </div>

            <Footer />
        </div>
    );
};

export default AboutPage;
