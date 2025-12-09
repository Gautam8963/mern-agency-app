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
        description:
            'Graduate hiring platform using intelligent matchmaking between students and employers.',
        logoUrl: 'https://assets.flipr.ai/logos/nektr-ai.png',
    },
    {
        _id: '2',
        name: 'Acko',
        type: 'Hiring Partner',
        description:
            'Digital-first insurance provider leveraging technology to simplify insurance products.',
        logoUrl: 'https://assets.flipr.ai/logos/acko.png',
    },
    {
        _id: '3',
        name: 'Bikayi',
        type: 'Hiring Partner',
        description:
            'E-commerce enablement platform helping small businesses sell online with ease.',
        logoUrl: 'https://assets.flipr.ai/logos/bikayi.png',
    },
    {
        _id: '4',
        name: 'Slice',
        type: 'Direct Client',
        description:
            'Fintech company focused on payment and credit products for young professionals.',
        logoUrl: 'https://assets.flipr.ai/logos/slice.png',
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
