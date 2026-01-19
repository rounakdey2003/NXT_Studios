import Link from 'next/link';
import Footer from '@/components/Footer';

const projects = [
    {
        id: "zencampus",
        title: "ZEN CAMPUS",
        desc: "Brand identity and website design for a modern lighting company.",
        image: "/images/zencampus.png"
    },
    {
        id: "coursesurf",
        title: "COURSE SURF",
        desc: "UX/UI design for an online learning platform.",
        image: "https://framerusercontent.com/images/2x3c4v5b6n7m.jpg"
    },
];

const ProjectsPage = () => {
    return (
        <div className="projects-page">
            <div className="pp-header">
                <span className="text-label-mono">A CURATED SELECTION</span>
                <h1 className="pp-headline">
                    Our case studies highlight the process behind each project — from idea to impact. See how we solve challenges and create design that resonates.
                </h1>
            </div>

            <div className="pp-grid">
                {projects.map((project) => (
                    <Link href={`/project/${project.id}`} key={project.id} className="pp-card-link">
                        <div className="pp-card">
                            <div className="pp-image-wrapper">
                                <div className="pp-placeholder" style={{
                                    backgroundImage: project.id === 'luminor' || project.id === 'kairo' 
                                        ? `linear-gradient(45deg, #fdfbfb 0%, #ebedee 100%)` 
                                        : `linear-gradient(120deg, #f6d365 0%, #fda085 100%)`,
                                    width: '100%',
                                    height: '100%'
                                }}></div>
                            </div>
                            <div className="pp-info">
                                <h3 className="pp-title">{project.title}</h3>
                                <p className="pp-desc">{project.desc}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <Footer />

            <style>{`
                .pp-header {
                    padding: 120px 60px 100px;
                    max-width: 1000px;
                }

                .text-label-mono {
                    font-size: 12px;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    font-family: monospace;
                    color: var(--color-text-secondary);
                    display: block;
                    margin-bottom: 24px;
                }

                .pp-headline {
                    font-size: 40px;
                    font-weight: 400;
                    line-height: 1.2;
                    letter-spacing: -0.5px;
                }

                .pp-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 60px 40px;
                    padding: 0 60px 120px;
                }

                .pp-card-link {
                    display: block;
                }

                .pp-card {
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                    cursor: pointer;
                }

                .pp-image-wrapper {
                    aspect-ratio: 16/10;
                    border-radius: 4px;
                    overflow: hidden;
                    background-color: #f0f0f0;
                }

                .pp-placeholder {
                    transition: transform 0.5s ease;
                }

                .pp-card:hover .pp-placeholder {
                    transform: scale(1.05);
                }

                .pp-info {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }

                .pp-title {
                    font-size: 16px;
                    font-weight: 600;
                    color: var(--color-text-primary);
                }

                .pp-desc {
                    font-size: 14px;
                    color: var(--color-text-secondary);
                    line-height: 1.5;
                }

                @media (max-width: 768px) {
                    .pp-header {
                        padding: 80px 24px 60px;
                    }
                    .pp-headline {
                        font-size: 28px;
                    }
                    .pp-grid {
                        grid-template-columns: 1fr;
                        padding: 0 24px 80px;
                    }
                }
            `}</style>
        </div>
    );
};

export default ProjectsPage;
