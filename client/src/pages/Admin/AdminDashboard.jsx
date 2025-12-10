import { useState, useEffect } from 'react';
import api from '../../api/axios';

const AdminDashboard = () => {
    const [stats, setStats] = useState({
        projects: 0,
        clients: 0,
        contacts: 0
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                // Fetching all lists to get counts (in a real large app, backend should provide a stats endpoint)
                const [projectsRes, clientsRes, contactsRes] = await Promise.all([
                    api.get('/projects'),
                    api.get('/clients'),
                    api.get('/contacts').catch(() => ({ data: { data: [] } })) // Handle potential failure if contacts not implemented yet
                ]);

                setStats({
                    projects: projectsRes.data.data?.length || 0,
                    clients: clientsRes.data.data?.length || 0,
                    contacts: contactsRes.data.data?.length || 0
                });
            } catch (error) {
                console.error("Failed to fetch dashboard stats", error);
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
                <p className="text-slate-500 mt-2">Welcome back! Here's what's happening today.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-8 rounded-2xl shadow-soft border border-slate-100 flex items-center">
                    <div className="w-12 h-12 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center mr-6">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest">Project Management</p>
                        <h3 className="text-3xl font-bold text-slate-900 mt-1">{loading ? '...' : stats.projects}</h3>
                        <p className="text-xs text-brand-600 font-medium mt-2">View all projects &rarr;</p>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-soft border border-slate-100 flex items-center">
                    <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mr-6">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest">Client Management</p>
                        <h3 className="text-3xl font-bold text-slate-900 mt-1">{loading ? '...' : stats.clients}</h3>
                        <p className="text-xs text-purple-600 font-medium mt-2">View directory &rarr;</p>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-soft border border-slate-100 flex items-center">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mr-6">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest">Messages</p>
                        <h3 className="text-3xl font-bold text-slate-900 mt-1">{loading ? '...' : stats.contacts}</h3>
                        <p className="text-xs text-emerald-600 font-medium mt-2">Check messages &rarr;</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
