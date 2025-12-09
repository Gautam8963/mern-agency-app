import SectionTitle from '../common/SectionTitle';
import ContactForm from './ContactForm';

const ContactSection = () => {
    return (
        <section id="contact" className="py-24 bg-gradient-to-br from-slate-50 to-brand-50/30 relative overflow-hidden">
            {/* Decorative blob */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-100/50 rounded-full blur-[100px] opacity-40"></div>
            </div>

            <div className="container-custom relative z-10">
                <SectionTitle title="Let's Work Together" subtitle="Have a project in mind? We'd love to help you build it." />

                <div className="max-w-2xl mx-auto">
                    <ContactForm />
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
