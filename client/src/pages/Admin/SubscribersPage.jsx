import { useState, useEffect } from 'react';
import api from '../../api/axios';
import Loader from '../../components/common/Loader';
import ErrorMessage from '../../components/common/ErrorMessage';

const SubscribersPage = () => {
    const [subscribers, setSubscribers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSubscribers = async () => {
            try {
                const res = await api.get('/subscribers');
                setSubscribers(res.data.data);
            } catch (err) {
                setError('Failed to fetch subscribers');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchSubscribers();
    }, []);

    if (loading) return <Loader />;
    if (error) return <ErrorMessage message={error} />;

    return (
        <div>
            <h1 className="text-2xl font-semibold mb-6">Newsletter Subscribers</h1>
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Date Subscribed
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {subscribers.map((sub) => (
                            <tr key={sub._id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {sub.email}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {new Date(sub.createdAt).toLocaleDateString()}
                                </td>
                            </tr>
                        ))}
                        {subscribers.length === 0 && (
                            <tr>
                                <td colSpan="2" className="px-6 py-4 text-center text-sm text-gray-500">
                                    No subscribers found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SubscribersPage;
