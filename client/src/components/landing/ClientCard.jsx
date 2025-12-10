const ClientCard = ({ client }) => {
    return (
        <div className="group bg-white rounded-2xl shadow-soft border border-slate-100 overflow-hidden flex flex-col h-full hover:shadow-2xl hover:shadow-brand-500/10 transition-all duration-300 transform hover:-translate-y-1">
            <div className="h-40 bg-slate-50 w-full relative flex items-center justify-center border-b border-slate-50 group-hover:bg-brand-50/50 transition-colors duration-300">
                {/* Decorative background pattern */}
                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:16px_16px]"></div>

                <div className="h-24 w-24 relative z-10 mx-auto">
                    {client.imageUrl || client.logoUrl ? (
                        <img
                            className="h-full w-full object-cover rounded-full border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-500"
                            src={client.imageUrl || client.logoUrl}
                            alt={client.name}
                        />
                    ) : (
                        <div className="h-24 w-24 bg-white rounded-full flex items-center justify-center text-slate-400 border-4 border-white shadow-md mx-auto">
                            <span className="text-3xl font-bold">{client.name?.charAt(0)}</span>
                        </div>
                    )}
                </div>
            </div>

            <div className="p-8 flex flex-col flex-1 text-center -mt-12 relative z-20">
                <div className="mb-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 ${client.type === 'Hiring Partner'
                        ? 'bg-purple-50 text-purple-600 border border-purple-100'
                        : 'bg-indigo-50 text-indigo-600 border border-indigo-100'
                        }`}>
                        {client.type || 'Direct Client'}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 leading-tight mb-1 group-hover:text-brand-600 transition-colors">
                        {client.name}
                    </h3>
                    {client.designation && (
                        <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">{client.designation}</p>
                    )}
                </div>

                <p className="text-slate-600 text-base leading-relaxed mb-6 flex-1 italic">
                    "{client.description}"
                </p>
            </div>
        </div>
    );
};

export default ClientCard;
