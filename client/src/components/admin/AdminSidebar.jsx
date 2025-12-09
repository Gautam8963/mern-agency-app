import { Link, useLocation } from 'react-router-dom';

const AdminSidebar = () => {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname.includes(path)
            ? 'bg-brand-600/20 text-brand-300 font-semibold border-r-4 border-brand-500' // Changed to border-r for cleaner look
            : 'text-slate-400 hover:text-white hover:bg-slate-800 transition-all';
    };

    // Helper for icons (simple SVGs inline or reusable)
    const NavItem = ({ path, label, icon }) => (
        <Link to={path} className={`group flex items-center px-6 py-4 transition-all duration-200 ${isActive(path)}`}>
            <span className="mr-3">{icon}</span>
            {label}
        </Link>
    );

    return (
        <div className="flex flex-col w-64 bg-slate-900 border-r border-slate-800 h-full shadow-2xl z-20">
            <div className="flex items-center justify-center h-24 border-b border-slate-800/50 mb-2">
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center text-white font-bold text-lg">
                        A
                    </div>
                    <span className="text-xl font-bold text-white tracking-tight">
                        Agency<span className="text-brand-500">Admin</span>
                    </span>
                </Link>
            </div>

            <div className="flex flex-col flex-1 py-6">
                <p className="px-6 text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Menu</p>
                <nav className="space-y-1">
                    <NavItem
                        path="/admin"
                        label="Dashboard"
                        icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>}
                    />
                    <NavItem
                        path="/admin/projects"
                        label="Projects"
                        icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>}
                    />
                    <NavItem
                        path="/admin/clients"
                        label="Clients"
                        icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>}
                    />
                    <NavItem
                        path="/admin/contacts"
                        label="Contacts"
                        icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>}
                    />
                    <NavItem
                        path="/admin/subscribers"
                        label="Subscribers"
                        icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path></svg>}
                    />
                </nav>

                <div className="mt-auto pt-6 border-t border-slate-800 mx-6 mb-6">
                    <Link to="/" className="flex items-center text-slate-400 hover:text-white transition-colors group">
                        <svg className="w-5 h-5 mr-3 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"></path></svg>
                        Back to Website
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AdminSidebar;
