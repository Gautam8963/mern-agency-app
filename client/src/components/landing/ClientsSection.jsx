import { useState, useEffect } from 'react';
import api from '../../api/axios';
import ClientCard from './ClientCard';
import SectionTitle from '../common/SectionTitle';
import Loader from '../common/Loader';
import ErrorMessage from '../common/ErrorMessage';

const DUMMY_CLIENTS = [
    {
        _id: '1',
        name: 'Nektr.ai',
        type: 'Direct Client',
        designation: 'HR Tech',
        description:
            'Graduate hiring platform using intelligent matchmaking between students and employers.',
        imageUrl: 'https://ui-avatars.com/api/?name=Nektr&background=4f46e5&color=fff&size=200&bold=true',
    },
    {
        _id: '2',
        name: 'Acko',
        type: 'Hiring Partner',
        designation: 'Insurtech',
        description:
            'Digital-first insurance provider leveraging technology to simplify insurance products.',
        imageUrl: 'https://ui-avatars.com/api/?name=Acko&background=8b5cf6&color=fff&size=200&bold=true',
    },
    {
        _id: '3',
        name: 'Bikayi',
        type: 'Hiring Partner',
        designation: 'E-commerce',
        description:
            'E-commerce enablement platform helping small businesses sell online with ease.',
        imageUrl: 'https://ui-avatars.com/api/?name=Bikayi&background=10b981&color=fff&size=200&bold=true',
    },
    {
        _id: '4',
        name: 'Slice',
        type: 'Direct Client',
        designation: 'Fintech',
        description:
            'Fintech company focused on payment and credit products for young professionals.',
        imageUrl: 'https://ui-avatars.com/api/?name=Slice&background=f59e0b&color=fff&size=200&bold=true',
    },
    {
        _id: '5',
        name: 'Unacademy',
        type: 'Hiring Partner',
        designation: 'EdTech',
        description:
            'India\'s largest learning platform that helps students prepare for competitive exams.',
        imageUrl: 'https://ui-avatars.com/api/?name=Unacademy&background=3b82f6&color=fff&size=200&bold=true',
    },
    {
        _id: '6',
        name: 'PhonePe',
        type: 'Direct Client',
        designation: 'Fintech',
        description:
            'Digital payments and financial services platform making payments accessible to all.',
        imageUrl: 'https://ui-avatars.com/api/?name=PhonePe&background=6366f1&color=fff&size=200&bold=true',
    },
];

const ClientsSection = () => {
    const [clients, setClients] = useState(DUMMY_CLIENTS);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const res = await api.get('/clients');
                // Expecting: [{ _id, name, type, description, logoUrl }, ...]
                setClients(res.data.data || DUMMY_CLIENTS);
            } catch (err) {
                console.error(err);
                setError('Failed to load clients. Showing sample data.');
                setClients(DUMMY_CLIENTS);
            } finally {
                setLoading(false);
            }
        };

        fetchClients();
    }, []);

    return (
        <section id="clients" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    title="Our Happy Clients"
                    subtitle="Trusted by leading companies and hiring partners"
                />

                {loading ? (
                    <Loader />
                ) : error ? (
                    <ErrorMessage message={error} />
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {clients.map((client) => (
                            <ClientCard key={client._id} client={client} />
                        ))}
                    </div>
                )}

                {!loading && clients.length === 0 && !error && (
                    <p className="text-center text-gray-500">No clients added yet.</p>
                )}
            </div>
        </section>
    );
};

export default ClientsSection;
