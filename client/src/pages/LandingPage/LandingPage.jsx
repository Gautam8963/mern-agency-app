import HeroSection from '../../components/landing/HeroSection';
import ProjectsSection from '../../components/landing/ProjectsSection';
import ClientsSection from '../../components/landing/ClientsSection';
import ContactSection from '../../components/landing/ContactSection';
import NewsletterSection from '../../components/landing/NewsletterSection';

const LandingPage = () => {
    return (
        <div className="flex flex-col">
            <HeroSection />
            <ProjectsSection />
            <ClientsSection />
            <NewsletterSection />
            <ContactSection />
        </div>
    );
};

export default LandingPage;
