'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import Sidebar from '@/components/Sidebar';

export default function ClientLayout({ children }) {
    const pathname = usePathname();

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="container">
            <div className="bg-gradient-corner"></div>
            <Sidebar />
            <main className="scroll-container">
                {children}
            </main>
        </div>
    );
}
