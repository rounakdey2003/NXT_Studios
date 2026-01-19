import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import HomeAbout from '@/components/HomeAbout';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import BigTextVisual from '@/components/BigTextVisual';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <div className="home-container">
            <Hero />
            <Projects />
            <HomeAbout />
            <Services />
            <Testimonials />
            <BigTextVisual />
            <FAQ />
            <Contact />
            <Footer />
        </div>
    );
}
