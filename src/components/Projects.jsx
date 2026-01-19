import Link from 'next/link';

const projects = [
    {
        id: "zencampus",
        title: "ZEN CAMPUS",
        stat: "+35% website engagement",
        year: "2025",
        image: "https://framerusercontent.com/images/3fQkBq4u0M6w3y9x2q7e5r8t.jpg"
    },
    {
        id: "coursesurf",
        title: "COURSE SURF",
        stat: "2x engagement rate",
        year: "2025",
        image: "https://framerusercontent.com/images/2x3c4v5b6n7m.jpg"
    },
];

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <div className="section-header">
                <span className="text-label text-label-mono">(001)</span>
                <span className="text-label text-label-mono">EXPLORE THE STORIES BEHIND OUR WORK</span>
            </div>

            <div className="projects-grid">
                {projects.map((project) => (
                    <Link href={`/project/${project.id}`} key={project.id} className="project-card-link">
                        <div className="project-card">
                            <div className="card-image-wrapper">
                                <div className="image-placeholder" style={{
                                    backgroundImage: `linear-gradient(45deg, #f3f4f6 0%, #e5e7eb 100%)`,
                                    width: '100%',
                                    height: '100%'
                                }}></div> 
                            </div>
                            <div className="card-info">
                                <div className="info-top">
                                    <h3>{project.title}</h3>
                                    <span>{project.stat}</span>
                                </div>
                                <div className="info-bottom">
                                    <span>{project.year}</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <style>{`
                .projects-section {
                    padding: var(--padding-section);
                }

                .section-header {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 40px;
                    padding-bottom: 20px;
                    border-bottom: 1px solid var(--color-border);
                }

                .projects-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 40px;
                }

                .project-card-link {
                    display: block;
                }

                .project-card {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                    cursor: pointer;
                    group: hover;
                }

                .card-image-wrapper {
                    aspect-ratio: 4/3;
                    border-radius: 4px;
                    overflow: hidden;
                    background-color: #f0f0f0;
                }
                
                .image-placeholder {
                    transition: transform 0.5s ease;
                }

                .project-card:hover .image-placeholder {
                    transform: scale(1.05);
                }

                .card-info {
                    display: flex;
                    justify-content: space-between;
                    font-size: 14px;
                    font-weight: 500;
                    color: var(--color-text-primary);
                }

                .info-top {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                }

                .info-top h3 {
                    font-size: 16px;
                    font-weight: 600;
                }

                .info-top span {
                    color: var(--color-text-secondary);
                }

                @media (max-width: 768px) {
                    .projects-section {
                        /* Padding handled by --padding-section */
                    }
                    .projects-grid {
                        grid-template-columns: 1fr;
                        gap: 32px;
                    }
                    .section-header {
                        flex-direction: column;
                        gap: 8px;
                    }
                }
            `}</style>
        </section>
    );
};

export default Projects;
