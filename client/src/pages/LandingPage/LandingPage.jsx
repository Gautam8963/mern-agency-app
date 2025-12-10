import HeroSection from '../../components/landing/HeroSection';
import ProjectsSection from '../../components/landing/ProjectsSection';
import ClientsSection from '../../components/landing/ClientsSection';
import ContactSection from '../../components/landing/ContactSection';
import NewsletterSection from '../../components/landing/NewsletterSection';
import WhyChooseUsSection from '../../components/landing/WhyChooseUsSection';
import AboutUsSection from '../../components/landing/AboutUsSection';
import RealtorSection from '../../components/landing/RealtorSection';

const LandingPage = () => {
    return (
        <div className="flex flex-col">
            <HeroSection />
            <WhyChooseUsSection />
            <AboutUsSection />
            <ProjectsSection />
            <ClientsSection />
            <RealtorSection />
            <NewsletterSection />
            <ContactSection />
        </div>
    );
};

export default LandingPage;
