'use client';

import Footer from '@/components/Footer';
import Image from 'next/image';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const projects = [
    {
        id: "zencampus",
        title: "ZEN CAMPUS",
        desc: "Brand identity and website design for a modern lighting company.",
        image: "/images/zen_campus_image/campus1.png"
    },
    {
        id: "coursesurf",
        title: "COURSE SURF",
        desc: "UX/UI design for an online learning platform.",
        image: "/images/course_surf_image/course1.png"
    },
];

const ProjectsPage = () => {
    return (
        <div className="projects-page">
            <div className="pp-header">
                <AnimateOnScroll animation="fade">
                    <span className="text-label-mono">A CURATED SELECTION</span>
                </AnimateOnScroll>
                <AnimateOnScroll animation="slide-up" delay={0.15}>
                    <h1 className="pp-headline">
                        Our case studies highlight the process behind each project — from idea to impact. See how we solve challenges and create design that resonates.
                    </h1>
                </AnimateOnScroll>
            </div>

            <div className="pp-grid">
                {projects.map((project, index) => (
                    <AnimateOnScroll 
                        key={project.id} 
                        animation="slide-up" 
                        delay={0.1 + index * 0.15}
                    >
                        <a href={`/project/${project.id}`} className="pp-card-link">
                            <div className="pp-card hover-lift">
                                <div className="pp-image-wrapper image-reveal">
                                    <Image 
                                        src={project.image} 
                                        alt={project.title}
                                        fill
                                        className="pp-placeholder object-cover"
                                    />
                                </div>
                                <div className="pp-info">
                                    <h3 className="pp-title">{project.title}</h3>
                                    <p className="pp-desc">{project.desc}</p>
                                </div>
                            </div>
                        </a>
                    </AnimateOnScroll>
                ))}
            </div>

            <Footer />
        </div>
    );
};

export default ProjectsPage;
