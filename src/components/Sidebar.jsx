'use client';

import { useState } from 'react';
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
                        <li><a href="/" className={isActive('/') ? 'active-link' : ''}>Home</a></li>
                        <li><a href="/about" className={isActive('/about') ? 'active-link' : ''}>About</a></li>
                        <li><a href="/projects" className={isActive('/projects') ? 'active-link' : ''}>Projects</a></li>
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
        </>
    );
};

export default Sidebar;
