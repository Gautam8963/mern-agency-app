import SectionTitle from '../common/SectionTitle';

const AboutUsSection = () => {
    const stats = [
        { value: "20+", label: "Projects Delivered" },
        { value: "5+", label: "Years Experience" },
        { value: "100%", label: "Product Ownership" },
        { value: "Global", label: "Client Base" },
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column: Text */}
                    <div>
                        <SectionTitle
                            title="About Us"
                            subtitle="Passionate about technology and design"
                            className="text-left mb-8"
                            center={false}
                        />
                        <div className="prose prose-lg text-slate-600">
                            <p className="mb-6 leading-relaxed">
                                We are a modern digital agency focused on building high-performance web applications. Our team combines technical expertise with creative design to deliver solutions that not only look great but perform flawlessly.
                            </p>
                            <p className="mb-6 leading-relaxed">
                                Our tech stack is centered around the MERN ecosystem (MongoDB, Express, React, Node.js), allowing us to build scalable, full-stack applications efficiently. We believe in clean code, user-centric design, and solving real business problems.
                            </p>
                            <p className="leading-relaxed">
                                From startups to established businesses, we partner with our clients to take ownership of the product lifecycle, ensuring transparency and quality at every step.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Stats */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-brand-50 rounded-3xl transform rotate-3 scale-105 -z-10"></div>
                        <div className="bg-slate-900 rounded-3xl p-10 shadow-2xl text-white relative overflow-hidden">
                            {/* Decorative background circle */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl opacity-20"></div>

                            <h3 className="text-2xl font-bold mb-8">Agency Highlights</h3>
                            <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                                {stats.map((stat, index) => (
                                    <div key={index} className="border-l-4 border-brand-500 pl-4">
                                        <div className="text-3xl font-extrabold text-white mb-2">{stat.value}</div>
                                        <div className="text-slate-400 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;
