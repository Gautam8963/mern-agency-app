const SectionTitle = ({ title, subtitle }) => {
    return (
        <div className="text-center mb-16 relative">
            <span className="text-brand-600 font-bold uppercase tracking-widest text-xs mb-2 block">
                Discover
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                {title}
            </h2>
            {subtitle && (
                <p className="mt-3 max-w-2xl mx-auto text-xl text-slate-500 font-light">
                    {subtitle}
                </p>
            )}
            <div className="mt-6 w-24 h-1 bg-brand-500 mx-auto rounded-full opacity-50"></div>
        </div>
    );
};

export default SectionTitle;
