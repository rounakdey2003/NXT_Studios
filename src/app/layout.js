import './globals.css';
import ClientLayout from '@/components/ClientLayout';

export const metadata = {
    title: 'NXT Studio',
    description: 'A digital studio offering web design, branding, and creative strategy',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <ClientLayout>
                    {children}
                </ClientLayout>
            </body>
        </html>
    );
}
