import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <div className="relative overflow-hidden bg-slate-50 pt-32 pb-20 lg:pt-48 lg:pb-32">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-brand-200 blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-purple-200 blur-3xl opacity-30 animate-[pulse_4s_ease-in-out_infinite]"></div>

            <div className="container-custom relative z-10 text-center lg:text-left">
                <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
                    <div className="lg:col-span-7">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-600 text-sm font-semibold mb-6 animate-[fadeIn_0.5s_ease-out]">
                            Digital Agency of the Future
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
                            We build <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-purple-600">digital products</span> that scale.
                        </h1>
                        <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Transform your brand with our full-stack engineering and premium design services. We craft experiences that users love and businesses rely on.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a
                                href="#projects"
                                className="px-8 py-4 rounded-full bg-brand-600 text-white font-semibold hover:bg-brand-700 hover:shadow-lg hover:shadow-brand-500/30 transition-all duration-300 transform hover:-translate-y-1 text-center"
                            >
                                View Our Work
                            </a>
                            <a
                                href="#contact"
                                className="px-8 py-4 rounded-full bg-white text-slate-700 border border-slate-200 font-semibold hover:border-brand-300 hover:text-brand-600 transition-all duration-300 transform hover:-translate-y-1 text-center"
                            >
                                Let's Talk
                            </a>
                        </div>

                        <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                            {/* Social Proof / Trust Badges Placeholder */}
                            <p className="text-sm font-medium text-slate-400 uppercase tracking-widest">Trusted by leading startups</p>
                        </div>
                    </div>

                    <div className="hidden lg:block lg:col-span-5 relative">
                        <div className="relative rounded-2xl bg-gradient-to-br from-brand-500 to-purple-600 p-1 shadow-2xl shadow-brand-500/20 transform rotate-3 hover:rotate-0 transition-all duration-700 animate-float">
                            <div className="bg-slate-900 rounded-xl overflow-hidden h-96 flex items-center justify-center">
                                {/* Abstract UI Representation */}
                                <div className="text-center p-8">
                                    <div className="w-16 h-16 bg-brand-500 rounded-xl mx-auto mb-4 animate-bounce"></div>
                                    <div className="h-4 w-32 bg-slate-700 rounded mx-auto mb-2"></div>
                                    <div className="h-3 w-24 bg-slate-800 rounded mx-auto"></div>

                                    <div className="mt-8 grid grid-cols-2 gap-4">
                                        <div className="h-20 bg-slate-800 rounded-lg"></div>
                                        <div className="h-20 bg-slate-800 rounded-lg"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
