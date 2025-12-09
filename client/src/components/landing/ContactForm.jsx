import { useState } from 'react';
import api from '../../api/axios';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        mobile: '',
        city: '',
    });
    const [status, setStatus] = useState(null); // 'loading', 'success', 'error'
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        setMessage('');

        try {
            await api.post('/contacts', formData);
            setStatus('success');
            setMessage('Message sent successfully! We will get back to you soon.');
            setFormData({ fullName: '', email: '', mobile: '', city: '' });
        } catch (err) {
            setStatus('error');
            setMessage(err.response?.data?.message || 'Failed to send message.');
        }
    };

    const inputClasses = "mt-1 block w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white focus:border-transparent transition-all duration-200";
    const labelClasses = "block text-sm font-semibold text-slate-700 ml-1 mb-1";

    return (
        <div className="bg-white rounded-3xl shadow-xl shadow-brand-900/5 p-8 md:p-10 border border-slate-100">
            {status === 'success' && (
                <div className="mb-8 bg-green-50 text-green-700 p-4 rounded-xl border border-green-200 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    {message}
                </div>
            )}
            {status === 'error' && (
                <div className="mb-8 bg-red-50 text-red-700 p-4 rounded-xl border border-red-200 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    {message}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="fullName" className={labelClasses}>Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            id="fullName"
                            required
                            placeholder="Gautam Dhodi"
                            value={formData.fullName}
                            onChange={handleChange}
                            className={inputClasses}
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className={labelClasses}>Email Address</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            placeholder="gautam@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            className={inputClasses}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="mobile" className={labelClasses}>Mobile Number</label>
                        <input
                            type="text"
                            name="mobile"
                            id="mobile"
                            required
                            placeholder="+91 82394 93242"
                            value={formData.mobile}
                            onChange={handleChange}
                            className={inputClasses}
                        />
                    </div>
                    <div>
                        <label htmlFor="city" className={labelClasses}>City</label>
                        <input
                            type="text"
                            name="city"
                            id="city"
                            required
                            placeholder="Indore"
                            value={formData.city}
                            onChange={handleChange}
                            className={inputClasses}
                        />
                    </div>
                </div>

                <div className="pt-4">
                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className={`w-full flex justify-center py-4 px-6 border border-transparent rounded-full shadow-lg text-base font-bold text-white bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-500 hover:to-brand-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transform transition-all duration-200 hover:-translate-y-1 ${status === 'loading' ? 'opacity-75 cursor-not-allowed' : ''}`}
                    >
                        {status === 'loading' ? 'Sending Message...' : 'Send Message'}
                    </button>
                    <p className="text-center text-xs text-slate-400 mt-4">We respect your privacy. No spam, ever.</p>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
