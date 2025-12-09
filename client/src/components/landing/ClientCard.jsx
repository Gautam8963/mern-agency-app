const ClientCard = ({ client }) => {
    return (
        <div className="group bg-white rounded-2xl shadow-soft border border-slate-100 overflow-hidden flex flex-col h-full hover:shadow-2xl hover:shadow-brand-500/10 transition-all duration-300 transform hover:-translate-y-1">
            <div className="h-40 bg-slate-50 w-full relative flex items-center justify-center border-b border-slate-50 group-hover:bg-brand-50/50 transition-colors duration-300">
                {/* Decorative background pattern */}
                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:16px_16px]"></div>

                <div className="h-20 w-auto max-w-[70%] relative z-10 filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110">
                    {client.logoUrl ? (
                        <img
                            className="h-full w-full object-contain drop-shadow-sm"
                            src={client.logoUrl}
                            alt={client.name}
                        />
                    ) : (
                        <div className="h-20 w-20 bg-white rounded-2xl flex items-center justify-center text-slate-400 border border-slate-100 shadow-sm mx-auto">
                            <span className="text-3xl font-bold">{client.name?.charAt(0)}</span>
                        </div>
                    )}
                </div>
            </div>

            <div className="p-8 flex flex-col flex-1">
                <div className="mb-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 ${client.type === 'Hiring Partner'
                            ? 'bg-purple-50 text-purple-600 border border-purple-100'
                            : 'bg-indigo-50 text-indigo-600 border border-indigo-100'
                        }`}>
                        {client.type}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 leading-tight group-hover:text-brand-600 transition-colors">
                        {client.name}
                    </h3>
                </div>

                <p className="text-slate-600 text-base leading-relaxed mb-6 flex-1">
                    {client.description}
                </p>

                <div className="mt-auto pt-6 border-t border-slate-100">
                    <button className="text-slate-400 font-bold text-sm tracking-wide uppercase group-hover:text-brand-600 transition-colors flex items-center gap-2">
                        View Profile <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ClientCard;
