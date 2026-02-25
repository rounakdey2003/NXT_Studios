'use client';

import Image from 'next/image';
import AnimateOnScroll from './AnimateOnScroll';

const projects = [
    {
        id: "zencampus",
        title: "ZEN CAMPUS",
        stat: "+35% website engagement",
        year: "2025",
        image: "/images/zen_campus_image/campus1.png"
    },
    {
        id: "coursesurf",
        title: "COURSE SURF",
        stat: "2x engagement rate",
        year: "2025",
        image: "/images/course_surf_image/course1.png"
    },
];

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <AnimateOnScroll animation="fade">
                <div className="section-header">
                    <span className="text-label text-label-mono">(001)</span>
                    <span className="text-label text-label-mono">EXPLORE THE STORIES BEHIND OUR WORK</span>
                </div>
            </AnimateOnScroll>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <AnimateOnScroll 
                        key={project.id} 
                        animation="slide-up" 
                        delay={0.1 + index * 0.15}
                    >
                        <a href={`/project/${project.id}`} className="project-card-link">
                            <div className="project-card hover-lift">
                                <div className="card-image-wrapper image-reveal">
                                    <Image 
                                        src={project.image} 
                                        alt={project.title}
                                        fill
                                        className="image-placeholder object-cover"
                                    />
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
                        </a>
                    </AnimateOnScroll>
                ))}
            </div>
        </section>
    );
};

export default Projects;
