'use client';

import { ArrowLeft } from 'lucide-react';
import Footer from '@/components/Footer';
import Image from 'next/image';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { use } from 'react';

const ProjectDetail = ({ params }) => {
    const { id } = use(params);
    
    // Project-specific data
    const projectData = {
        'coursesurf': {
            title: 'COURSE SURF',
            type: 'Web Application',
            client: 'Course Surf Inc.',
            year: '2025',
            timeline: '10 Weeks',
            description: 'Course Surf is an innovative online learning platform designed to help students discover and navigate through courses effortlessly. We crafted a seamless user experience with intuitive course discovery features.',
            images: [
                '/images/course_surf_image/course1.png',
                '/images/course_surf_image/course2.png',
                '/images/course_surf_image/course3.png',
                '/images/course_surf_image/course4.png'
            ]
        },
        'zencampus': {
            title: 'ZEN CAMPUS',
            type: 'Brand Identity',
            client: 'Zen Campus Co.',
            year: '2025',
            timeline: '8 Weeks',
            description: 'Zen Campus reimagines the university experience with a focus on mindfulness and well-being. We developed a calming visual identity that reflects the peaceful learning environment they provide.',
            images: [
                '/images/zen_campus_image/campus1.png',
                '/images/zen_campus_image/campus2.png',
                '/images/zen_campus_image/campus3.png',
                '/images/zen_campus_image/campus4.png'
            ]
        }
    };

    // Get project data or use defaults
    const project = projectData[id] || {
        title: id ? id.toUpperCase() : "PROJECT",
        type: "Brand Identity",
        client: `${id ? id.charAt(0).toUpperCase() + id.slice(1) : "Client"} Co.`,
        year: "2025",
        timeline: "8 Weeks",
        description: "We partnered with this forward-thinking brand to redefine their digital presence. The goal was to create a visual language that speaks to modern consumers while retaining the core values of the company.",
        images: []
    };

    const hasImages = project.images && project.images.length >= 4;

    return (
        <div className="project-detail">
            <div className="pd-container">
                {/* Left Media Scroll */}
                <div className="pd-media">
                     <AnimateOnScroll animation="scale">
                         {hasImages ? (
                            <div className="pd-image-large image-reveal">
                                <Image src={project.images[0]} alt={`${project.title} image 1`} fill className="object-cover" />
                            </div>
                         ) : (
                            <div className="pd-image-large bg-linear-to-t from-[#cfd9df] to-[#e2ebf0]"></div>
                         )}
                     </AnimateOnScroll>
                     <div className="pd-grid">
                        {hasImages ? (
                            <>
                                <AnimateOnScroll animation="slide-up" delay={0.1}>
                                    <div className="pd-image-sq image-reveal">
                                        <Image src={project.images[1]} alt={`${project.title} image 2`} fill className="object-cover" />
                                    </div>
                                </AnimateOnScroll>
                                <AnimateOnScroll animation="slide-up" delay={0.2}>
                                    <div className="pd-image-sq image-reveal">
                                        <Image src={project.images[2]} alt={`${project.title} image 3`} fill className="object-cover" />
                                    </div>
                                </AnimateOnScroll>
                            </>
                        ) : (
                            <>
                                <AnimateOnScroll animation="slide-up" delay={0.1}>
                                    <div className="pd-image-sq bg-linear-to-br from-[#fdfbfb] to-[#ebedee]"></div>
                                </AnimateOnScroll>
                                <AnimateOnScroll animation="slide-up" delay={0.2}>
                                    <div className="pd-image-sq bg-linear-to-t from-[#accbee] to-[#e7f0fd]"></div>
                                </AnimateOnScroll>
                            </>
                        )}
                     </div>
                     <AnimateOnScroll animation="scale">
                         {hasImages ? (
                            <div className="pd-image-large image-reveal">
                                <Image src={project.images[3]} alt={`${project.title} image 4`} fill className="object-cover" />
                            </div>
                         ) : (
                            <div className="pd-image-large bg-linear-to-t from-[#fff1eb] to-[#ace0f9]"></div>
                         )}
                     </AnimateOnScroll>
                </div>

                {/* Right Sticky Info */}
                <div className="pd-info">
                    <div className="pd-sticky-wrapper">
                        <AnimateOnScroll animation="fade">
                            <a href="/" className="back-link">
                                <ArrowLeft size={16} /> View all
                            </a>
                        </AnimateOnScroll>
                        
                        <AnimateOnScroll animation="slide-up" delay={0.1}>
                            <h1 className="pd-title">{project.title}</h1>
                        </AnimateOnScroll>
                        <AnimateOnScroll animation="slide-up" delay={0.15}>
                            <p className="pd-desc">{project.description}</p>
                        </AnimateOnScroll>
                        
                        <AnimateOnScroll animation="slide-up" delay={0.2}>
                            <div className="pd-meta">
                                <div className="meta-row">
                                    <span className="meta-label">Year</span>
                                    <span className="meta-val">{project.year}</span>
                                </div>
                                <div className="meta-row">
                                    <span className="meta-label">Type</span>
                                    <span className="meta-val">{project.type}</span>
                                </div>
                                <div className="meta-row">
                                    <span className="meta-label">Client</span>
                                    <span className="meta-val">{project.client}</span>
                                </div>
                                <div className="meta-row">
                                    <span className="meta-label">Timeline</span>
                                    <span className="meta-val">{project.timeline}</span>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </div>

            <section className="pd-case-study">
                <AnimateOnScroll animation="slide-up">
                    <h2>Designing a seamless experience</h2>
                </AnimateOnScroll>
                <AnimateOnScroll animation="slide-up" delay={0.1}>
                    <p>
                        The challenge was to merge functionality with aesthetics. We started by auditing the existing brand assets and identifying gaps. 
                        The new design system focuses on clarity, bold typography, and a unified color palette that scales across devices.
                    </p>
                </AnimateOnScroll>
            </section>

            <Footer />
        </div>
    );
};

export default ProjectDetail;
