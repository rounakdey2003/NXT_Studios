import Link from 'next/link';

const HomeAbout = () => {
    return (
        <section id="who-we-are" className="home-about-section">
            <div className="ha-header">
                <span className="text-label-mono">(002)</span>
                <h2 className="ha-title">Who we are.</h2>
            </div>

            <div className="ha-content">
                <div className="ha-text-block">
                    <p className="ha-main-text">
                        From branding and packaging to web design and digital campaigns, our team partners with ambitious businesses to bring bold ideas to life. We believe great design goes beyond aesthetics.
                    </p>
                    <Link href="/about" className="link-arrow">
                        About us <span className="arrow">→</span>
                    </Link>
                </div>
            </div>

            <style>{`
                .home-about-section {
                    background-color: #111;
                    color: white;
                    padding: 80px 60px;
                    min-height: 500px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://framerusercontent.com/images/kairo_img.jpg');
                    background-size: cover;
                    background-position: center;
                }

                .ha-header {
                    display: flex;
                    gap: 24px;
                    align-items: baseline;
                }

                .ha-title {
                    font-size: 32px;
                    font-weight: 500;
                }

                .ha-content {
                    display: flex;
                    justify-content: flex-end;
                    padding-top: 100px;
                }

                .ha-text-block {
                    max-width: 500px;
                }

                .ha-main-text {
                    font-size: 24px;
                    line-height: 1.4;
                    margin-bottom: 32px;
                    font-weight: 400;
                    color: #ddd;
                }

                .link-arrow {
                    color: white;
                    text-decoration: none;
                    font-size: 16px;
                    border-bottom: 1px solid white;
                    padding-bottom: 4px;
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                }

                .arrow {
                    transition: transform 0.2s;
                }

                .link-arrow:hover .arrow {
                    transform: translateX(4px);
                }

                @media (max-width: 768px) {
                    .home-about-section {
                        padding: 60px 24px;
                    }
                    .ha-main-text {
                        font-size: 20px;
                    }
                }
            `}</style>
        </section>
    );
};

export default HomeAbout;
