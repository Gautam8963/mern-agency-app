const ProjectCard = ({ project }) => {
    return (
        <div className="group bg-white rounded-2xl shadow-soft border border-slate-100 overflow-hidden flex flex-col h-full hover:shadow-2xl hover:shadow-brand-500/10 transition-all duration-300 transform hover:-translate-y-1">
            <div className="h-56 bg-brand-50 w-full overflow-hidden relative">
                {project.imageUrl ? (
                    <img
                        src={project.imageUrl}
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                ) : (
                    <div className="flex items-center justify-center h-full text-brand-300 bg-brand-50">
                        <svg className="w-12 h-12 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    </div>
                )}
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="p-8 flex flex-col flex-1">
                <div className="mb-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-brand-50 text-brand-600 text-xs font-bold uppercase tracking-wider mb-3">
                        Case Study
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 leading-tight group-hover:text-brand-600 transition-colors">
                        {project.name}
                    </h3>
                </div>

                <p className="text-slate-600 text-base leading-relaxed mb-6 flex-1">
                    {project.description}
                </p>

                <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                    <button className="text-brand-600 font-bold text-sm tracking-wide uppercase hover:text-brand-700 transition-colors flex items-center gap-2 group-hover:gap-3">
                        View Details <span className="text-lg transition-transform">&rarr;</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
