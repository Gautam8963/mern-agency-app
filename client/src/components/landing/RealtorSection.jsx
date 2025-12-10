const RealtorSection = () => {
    return (
        <section className="py-24 bg-slate-900 relative overflow-hidden">
            {/* Background embellishments */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-600 rounded-full blur-[100px] opacity-20 translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-600 rounded-full blur-[80px] opacity-20 -translate-x-1/3 translate-y-1/3"></div>

            <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">
                        Not Your Average <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-purple-400">Realtor</span>
                    </h2>

                    <p className="text-slate-300 text-lg lg:text-xl leading-relaxed mb-10">
                        We don't just build websites; we build high-converting digital ecosystems specifically for real estate professionals. From lead-gen funnels to immersive property experiences, we give you the edge in a competitive market.
                    </p>

                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-12 text-left inline-block w-full">
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                "Deep understanding of buyer/seller journeys",
                                "Conversion-optimized landing pages",
                                "Seamless CRM & Email integrations",
                                "Automated lead capture systems",
                                "Interactive property showcases",
                                "Fast, SEO-ready architecture"
                            ].map((item, index) => (
                                <li key={index} className="flex items-center text-slate-300">
                                    <svg className="w-5 h-5 text-brand-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-brand-600 border border-transparent rounded-xl hover:bg-brand-700 hover:shadow-lg hover:shadow-brand-500/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 hover:-translate-y-1"
                    >
                        Build My Real Estate Brand
                        <svg className="w-5 h-5 ml-2 -mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default RealtorSection;
