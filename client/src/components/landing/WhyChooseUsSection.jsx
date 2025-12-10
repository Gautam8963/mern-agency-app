import SectionTitle from '../common/SectionTitle';

const WhyChooseUsSection = () => {
    const features = [
        {
            title: "Engineering-first approach",
            description: "We build scalable, robust applications using the latest MERN stack best practices.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
            )
        },
        {
            title: "Pixel-perfect design",
            description: "Every detail matters. We implement designs with precision across all devices.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.343 5.314-1.313 1.029 4.343 2.314 2.828"></path></svg>
            )
        },
        {
            title: "On-time delivery",
            description: "We value your time. Agile methodologies ensure we hit milestones and launch on schedule.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            )
        },
        {
            title: "Transparent communication",
            description: "No black boxes. You get regular updates and direct access to the team.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path></svg>
            )
        }
    ];

    return (
        <section className="py-24 bg-slate-50 relative">
            <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    title="Why Choose Us"
                    subtitle="Building digital products that drive results"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-soft border border-slate-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                            <div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;
