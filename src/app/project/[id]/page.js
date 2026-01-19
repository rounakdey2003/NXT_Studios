import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Footer from '@/components/Footer';

const ProjectDetail = async ({ params }) => {
    const { id } = await params;
    
    // Default content for demo
    const project = {
        title: id ? id.toUpperCase() : "PROJECT",
        type: "Brand Identity",
        client: `${id ? id.charAt(0).toUpperCase() + id.slice(1) : "Client"} Co.`,
        year: "2025",
        timeline: "8 Weeks",
        description: "We partnered with this forward-thinking brand to redefine their digital presence. The goal was to create a visual language that speaks to modern consumers while retaining the core values of the company."
    };

    return (
        <div className="project-detail">
            <div className="pd-container">
                {/* Left Media Scroll */}
                <div className="pd-media">
                     <div className="pd-image-large" style={{backgroundImage: 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)'}}></div>
                     <div className="pd-grid">
                        <div className="pd-image-sq" style={{backgroundImage: 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)'}}></div>
                        <div className="pd-image-sq" style={{backgroundImage: 'linear-gradient(to top, #accbee 0%, #e7f0fd 100%)'}}></div>
                     </div>
                     <div className="pd-image-large" style={{backgroundImage: 'linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)'}}></div>
                </div>

                {/* Right Sticky Info */}
                <div className="pd-info">
                    <div className="pd-sticky-wrapper">
                        <Link href="/" className="back-link">
                            <ArrowLeft size={16} /> View all
                        </Link>
                        
                        <h1 className="pd-title">{project.title}</h1>
                        <p className="pd-desc">{project.description}</p>
                        
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
                    </div>
                </div>
            </div>

            <section className="pd-case-study">
                <h2>Designing a seamless experience</h2>
                <p>
                    The challenge was to merge functionality with aesthetics. We started by auditing the existing brand assets and identifying gaps. 
                    The new design system focuses on clarity, bold typography, and a unified color palette that scales across devices.
                </p>
            </section>

            <Footer />

            <style>{`
                .pd-container {
                    display: grid;
                    grid-template-columns: 1.5fr 1fr;
                    gap: 60px;
                    padding: 120px 60px 80px;
                }

                .pd-media {
                    display: flex;
                    flex-direction: column;
                    gap: 40px;
                }

                .pd-image-large {
                    width: 100%;
                    aspect-ratio: 16/9;
                    background-color: #eee;
                    border-radius: 4px;
                }

                .pd-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 40px;
                }

                .pd-image-sq {
                    width: 100%;
                    aspect-ratio: 1/1;
                    background-color: #eee;
                    border-radius: 4px;
                }

                .pd-sticky-wrapper {
                    position: sticky;
                    top: 40px;
                }

                .back-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 14px;
                    font-weight: 500;
                    margin-bottom: 40px;
                    opacity: 0.6;
                }

                .back-link:hover {
                    opacity: 1;
                }

                .pd-title {
                    font-size: 48px;
                    margin-bottom: 24px;
                    font-weight: 500;
                }

                .pd-desc {
                    font-size: 18px;
                    line-height: 1.6;
                    color: var(--color-text-secondary);
                    margin-bottom: 40px;
                }

                .pd-meta {
                    display: flex;
                    flex-direction: column;
                    border-top: 1px solid var(--color-border);
                }

                .meta-row {
                    display: flex;
                    justify-content: space-between;
                    padding: 16px 0;
                    border-bottom: 1px solid var(--color-border);
                    font-size: 14px;
                }

                .meta-label {
                    color: var(--color-text-secondary);
                }

                .meta-val {
                    font-weight: 500;
                }

                .pd-case-study {
                    padding: 0 60px 120px;
                    max-width: 800px;
                }

                .pd-case-study h2 {
                    font-size: 32px;
                    margin-bottom: 24px;
                    font-weight: 500;
                }

                .pd-case-study p {
                    font-size: 18px;
                    line-height: 1.6;
                    color: var(--color-text-secondary);
                }

                @media (max-width: 1024px) {
                    .pd-container {
                        grid-template-columns: 1fr;
                        padding: 80px 24px;
                    }
                    .pd-sticky-wrapper {
                        position: static;
                    }
                    .pd-case-study {
                        padding: 0 24px 80px;
                    }
                }
            `}</style>
        </div>
    );
};

export default ProjectDetail;
