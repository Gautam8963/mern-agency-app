import { useState, useEffect } from 'react';
import api from '../../api/axios';
import Loader from '../../components/common/Loader';
import ErrorMessage from '../../components/common/ErrorMessage';
import ClientForm from '../../components/admin/ClientForm';

const ClientsPage = () => {
    const [clients, setClients] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [currentClient, setCurrentClient] = useState(null);

    const fetchClients = async () => {
        setLoading(true);
        try {
            const res = await api.get('/clients');
            setClients(res.data.data);
            setError(null);
        } catch (err) {
            setError('Failed to fetch clients');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchClients();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this client?')) {
            try {
                await api.delete(`/clients/${id}`);
                fetchClients();
            } catch (err) {
                alert('Failed to delete client');
            }
        }
    };

    const handleEdit = (client) => {
        setCurrentClient(client);
        setIsEditing(true);
    };

    const handleAddNew = () => {
        setCurrentClient(null);
        setIsEditing(true);
    };

    const handleFormSuccess = () => {
        setIsEditing(false);
        setCurrentClient(null);
        fetchClients();
    };

    const handleFormCancel = () => {
        setIsEditing(false);
        setCurrentClient(null);
    };

    if (loading && !isEditing && clients.length === 0) return <Loader />;

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Clients</h1>
                    <p className="text-slate-500 mt-1 text-sm">Manage testimonials and partners.</p>
                </div>
                {!isEditing && (
                    <button
                        onClick={handleAddNew}
                        className="bg-brand-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-brand-700 hover:shadow-lg hover:shadow-brand-500/30 transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                        Add New Client
                    </button>
                )}
            </div>

            {error && <ErrorMessage message={error} />}

            {isEditing ? (
                <ClientForm
                    client={currentClient}
                    onSuccess={handleFormSuccess}
                    onCancel={handleFormCancel}
                />
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {clients.map((client, index) => (
                        <div key={client._id || index} className="group bg-white rounded-2xl shadow-soft border border-slate-100 overflow-hidden flex flex-col h-full hover:shadow-2xl hover:shadow-brand-500/10 transition-all duration-300 transform hover:-translate-y-1">
                            <div className="h-32 bg-slate-50 relative flex items-center justify-center border-b border-slate-50">
                                {/* Decorative pattern */}
                                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:16px_16px]"></div>

                                {client.imageUrl ? (
                                    <img
                                        src={client.imageUrl}
                                        alt={client.name}
                                        className="h-20 w-20 rounded-full object-cover border-4 border-white shadow-md relative z-10 transition-transform duration-500 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className="h-20 w-20 rounded-full bg-white flex items-center justify-center text-slate-400 border-4 border-slate-100 shadow-sm relative z-10 text-2xl font-bold">
                                        {client.name?.charAt(0)}
                                    </div>
                                )}

                                <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20">
                                    <button
                                        onClick={() => handleEdit(client)}
                                        className="p-2 bg-white/90 backdrop-blur rounded-lg text-brand-600 hover:text-brand-700 shadow-sm hover:shadow-md transition-all"
                                        title="Edit"
                                        aria-label="Edit client"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                                    </button>
                                    <button
                                        onClick={() => handleDelete(client._id)}
                                        className="p-2 bg-white/90 backdrop-blur rounded-lg text-red-500 hover:text-red-700 shadow-sm hover:shadow-md transition-all"
                                        title="Delete"
                                        aria-label="Delete client"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                    </button>
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-1 text-center">
                                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 mx-auto ${client.type === 'Hiring Partner'
                                    ? 'bg-purple-50 text-purple-600 border border-purple-100'
                                    : 'bg-indigo-50 text-indigo-600 border border-indigo-100'
                                    }`}>
                                    {client.type || 'Direct Client'}
                                </span>
                                <h3 className="font-bold text-lg text-slate-900">{client.name}</h3>
                                {client.designation && <p className="text-slate-400 text-xs font-medium uppercase tracking-wide mb-4">{client.designation}</p>}

                                <div className="flex-1 relative">
                                    <svg className="w-6 h-6 text-slate-200 absolute -top-2 -left-2 transform -scale-x-100" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                    </svg>
                                    <p className="text-slate-600 text-sm italic leading-relaxed relative z-10 px-2 line-clamp-4">
                                        "{client.description}"
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                    {clients.length === 0 && !loading && (
                        <div className="col-span-full py-12 text-center bg-white rounded-2xl border border-dashed border-slate-300">
                            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            </div>
                            <p className="text-slate-500 font-medium">No clients found. Add your first testimonial!</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ClientsPage;
