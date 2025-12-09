import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinkClasses = (path) => {
        const isActive = location.pathname === path || location.hash === path.replace('/', '');
        return `text-sm font-medium transition-all duration-300 ${isActive ? 'text-brand-600 font-semibold' : 'text-slate-600 hover:text-brand-500'
            }`;
    };

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-soft py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container-custom">
                <div className="flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
                            A
                        </div>
                        <span className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-brand-600 transition-colors">
                            Agency<span className="text-brand-600">App</span>
                        </span>
                    </Link>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className={navLinkClasses('/')}>Home</Link>
                        <a href="/#projects" className={navLinkClasses('/#projects')}>Projects</a>
                        <a href="/#clients" className={navLinkClasses('/#clients')}>Clients</a>

                        <Link
                            to="/admin/projects"
                            className="px-5 py-2.5 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-brand-600 hover:shadow-lg hover:shadow-brand-500/30 transition-all duration-300 transform hover:-translate-y-0.5"
                        >
                            Admin Dashboard
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
