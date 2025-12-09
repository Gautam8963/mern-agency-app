import { useState } from 'react';
import api from '../../api/axios';

const NewsletterSection = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState(null); // 'loading', 'success', 'error'
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        setMessage('');

        try {
            await api.post('/subscribers', { email });
            setStatus('success');
            setMessage('Successfully subscribed to our newsletter!');
            setEmail('');
        } catch (err) {
            setStatus('error');
            setMessage(err.response?.data?.message || 'Something went wrong. Please try again.');
        }
    };

    return (
        <section className="py-16 bg-indigo-700 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-extrabold sm:text-4xl mb-4">
                    Subscribe to our Newsletter
                </h2>
                <p className="text-lg text-indigo-200 mb-8 max-w-2xl mx-auto">
                    Get the latest updates, news, and special offers directly in your inbox.
                </p>

                <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="Enter your email"
                        className="flex-1 px-5 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className={`px-6 py-3 rounded-md font-medium text-indigo-700 bg-white hover:bg-indigo-50 transition-colors ${status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                        {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
                    </button>
                </form>

                {message && (
                    <div className={`mt-4 p-2 rounded ${status === 'success' ? 'bg-green-500' : 'bg-red-500'} bg-opacity-90 max-w-md mx-auto`}>
                        {message}
                    </div>
                )}
            </div>
        </section>
    );
};

export default NewsletterSection;
