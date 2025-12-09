import { useState, useEffect } from 'react';
import api from '../../api/axios';
import Loader from '../../components/common/Loader';
import ErrorMessage from '../../components/common/ErrorMessage';
import ProjectForm from '../../components/admin/ProjectForm';

const ProjectsPage = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [currentProject, setCurrentProject] = useState(null); // null for new, object for edit

    const fetchProjects = async () => {
        setLoading(true);
        try {
            const res = await api.get('/projects');
            setProjects(res.data.data);
            setError(null);
        } catch (err) {
            setError('Failed to fetch projects');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this project?')) {
            try {
                await api.delete(`/projects/${id}`);
                fetchProjects();
            } catch (err) {
                alert('Failed to delete project');
            }
        }
    };

    const handleEdit = (project) => {
        setCurrentProject(project);
        setIsEditing(true);
    };

    const handleAddNew = () => {
        setCurrentProject(null);
        setIsEditing(true);
    };

    const handleFormSuccess = () => {
        setIsEditing(false);
        setCurrentProject(null);
        fetchProjects();
    };

    const handleFormCancel = () => {
        setIsEditing(false);
        setCurrentProject(null);
    };

    if (loading && !isEditing && projects.length === 0) return <Loader />;

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Projects</h1>
                    <p className="text-slate-500 mt-1 text-sm">Manage your portfolio showcase.</p>
                </div>
                {!isEditing && (
                    <button
                        onClick={handleAddNew}
                        className="bg-brand-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-brand-700 hover:shadow-lg hover:shadow-brand-500/30 transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                        Add New Project
                    </button>
                )}
            </div>

            {error && <ErrorMessage message={error} />}

            {isEditing ? (
                <ProjectForm
                    project={currentProject}
                    onSuccess={handleFormSuccess}
                    onCancel={handleFormCancel}
                />
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project._id} className="group bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl hover:shadow-brand-500/10 transition-all duration-300">
                            <div className="h-48 bg-slate-100 overflow-hidden relative">
                                {project.imageUrl ? (
                                    <img
                                        src={project.imageUrl}
                                        alt={project.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="flex items-center justify-center h-full text-slate-300">
                                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                    </div>
                                )}
                                <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                    <button
                                        onClick={() => handleEdit(project)}
                                        className="p-2 bg-white/90 backdrop-blur rounded-lg text-brand-600 hover:text-brand-700 shadow-sm hover:shadow-md transition-all"
                                        title="Edit"
                                        aria-label="Edit project"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                                    </button>
                                    <button
                                        onClick={() => handleDelete(project._id)}
                                        className="p-2 bg-white/90 backdrop-blur rounded-lg text-red-500 hover:text-red-700 shadow-sm hover:shadow-md transition-all"
                                        title="Delete"
                                        aria-label="Delete project"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                    </button>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="font-bold text-lg text-slate-900 mb-2 truncate">{project.name}</h3>
                                <p className="text-slate-500 text-sm mb-4 line-clamp-2 leading-relaxed">{project.description}</p>
                                <div className="pt-4 border-t border-slate-100 flex justify-between items-center text-xs text-slate-400 font-medium uppercase tracking-wider">
                                    <span>Project</span>
                                    <span>ID: {project._id ? project._id.substring(0, 6) : '---'}...</span>
                                </div>
                            </div>
                        </div>
                    ))}
                    {projects.length === 0 && !loading && (
                        <div className="col-span-full py-12 text-center bg-white rounded-2xl border border-dashed border-slate-300">
                            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
                            </div>
                            <p className="text-slate-500 font-medium">No projects found. Create your first one!</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ProjectsPage;
