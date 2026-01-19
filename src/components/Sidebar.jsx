'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Instagram, Linkedin, Twitter, Menu, X } from 'lucide-react';

const Sidebar = () => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const pathname = usePathname();

    const toggleMobile = () => setIsMobileOpen(!isMobileOpen);

    const isActive = (path) => pathname === path;

    return (
        <>
            {/* Mobile Header */}
            <div className="mobile-header">
                <div className="logo">NXT STUDIO</div>
                <button onClick={toggleMobile}>
                    {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Sidebar Container */}
            <aside className={`sidebar ${isMobileOpen ? 'open' : ''}`}>
                <div className="sidebar-top">
                    <div className="logo">NXT STUDIO</div>
                </div>

                <nav className="sidebar-nav">
                    <ul>
                        <li><Link href="/" className={isActive('/') ? 'active-link' : ''}>Home</Link></li>
                        <li><Link href="/about" className={isActive('/about') ? 'active-link' : ''}>About</Link></li>
                        <li><Link href="/projects" className={isActive('/projects') ? 'active-link' : ''}>Projects</Link></li>
                        <li><a href="/#services">Services</a></li>
                        <li><a href="/#contact">Contact</a></li>
                    </ul>
                </nav>

                <div className="sidebar-bottom">
                    <a href="#contact" className="cta-button">
                        Contact us <ArrowUpRight size={16} />
                    </a>
                    
                    <div className="social-links">
                        <a href="#"><Instagram size={18} /></a>
                        <a href="#"><Linkedin size={18} /></a>
                        <a href="#"><Twitter size={18} /></a>
                    </div>

                    <div className="credits">
                        Created by NXT Studio
                    </div>
                </div>
            </aside>

            <style>{`
                .sidebar {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: var(--width-sidebar);
                    height: 100vh;
                    padding: 40px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    border-right: 1px solid var(--color-border);
                    background-color: var(--color-bg-primary);
                    z-index: 100;
                    transition: transform 0.3s ease;
                }

                .logo {
                    font-weight: 700;
                    font-size: 14px;
                    letter-spacing: 1px;
                }

                .sidebar-nav ul {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                .sidebar-nav a {
                    font-size: 14px;
                    font-weight: 500;
                    color: var(--color-text-primary);
                    opacity: 0.6;
                    transition: opacity 0.2s;
                }

                .sidebar-nav a:hover, .sidebar-nav a.active-link {
                    opacity: 1;
                }

                .sidebar-bottom {
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                }

                .cta-button {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 14px;
                    font-weight: 500;
                }

                .social-links {
                    display: flex;
                    gap: 16px;
                    color: var(--color-text-secondary);
                }

                .credits {
                    font-size: 12px;
                    color: #999;
                }

                /* Mobile Handling */
                .mobile-header {
                    display: none;
                }

                @media (max-width: 1024px) {
                    .mobile-header {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: 24px;
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        background: rgba(255,255,255,0.9);
                        backdrop-filter: blur(10px);
                        z-index: 200;
                        border-bottom: 1px solid var(--color-border);
                    }

                    .sidebar {
                        transform: translateX(-100%);
                        padding-top: 100px; /* Clear mobile header */
                    }

                    .sidebar.open {
                        transform: translateX(0);
                    }
                    
                    .sidebar-top {
                        display: none;
                    }
                }
            `}</style>
        </>
    );
};

export default Sidebar;
