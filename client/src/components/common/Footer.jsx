import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 py-16">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-slate-800 pb-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="inline-block mb-6">
                            <span className="text-2xl font-bold text-white tracking-tight">
                                Agency<span className="text-brand-500">App</span>
                            </span>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Crafting exceptional digital experiences for forward-thinking brands. We are your partners in innovation.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Services</h4>
                        <ul className="space-y-4 text-sm">
                            <li><a href="#" className="hover:text-brand-400 transition-colors">Web Development</a></li>
                            <li><a href="#" className="hover:text-brand-400 transition-colors">UI/UX Design</a></li>
                            <li><a href="#" className="hover:text-brand-400 transition-colors">Mobile Apps</a></li>
                            <li><a href="#" className="hover:text-brand-400 transition-colors">Consulting</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Company</h4>
                        <ul className="space-y-4 text-sm">
                            <li><a href="#" className="hover:text-brand-400 transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-brand-400 transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-brand-400 transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-brand-400 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Newsletter</h4>
                        <p className="text-sm text-slate-400 mb-4">Subscribe to our newsletter for the latest updates.</p>
                        <form className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter email"
                                className="bg-slate-800 border border-slate-700 text-white rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:ring-1 focus:ring-brand-500"
                            />
                            <button className="bg-brand-600 hover:bg-brand-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                                &rarr;
                            </button>
                        </form>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} AgencyApp. Developed by <span className="text-brand-500 font-bold">Gautam Dhodi</span>.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0 items-center">
                        <a href="https://www.linkedin.com/in/gautam-dhodi-848567237" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                            LinkedIn
                        </a>
                        <a href="https://github.com/Gautam8963/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                            GitHub
                        </a>
                        <a href="https://github.com/Gautam8963/mern-agency-app" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors border border-slate-700 px-3 py-1 rounded-full hover:bg-slate-800 hover:border-slate-600">
                            Source Code
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
