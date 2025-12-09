import { useState, useRef } from 'react';
import api from '../../api/axios';
import ImageCropper from './ImageCropper';

const ProjectForm = ({ project, onSuccess, onCancel }) => {
    const [formData, setFormData] = useState({
        name: project?.name || '',
        description: project?.description || '',
        imageUrl: project?.imageUrl || '',
    });
    const [imageSrc, setImageSrc] = useState(null);
    const [showCropper, setShowCropper] = useState(false);
    const fileInputRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.addEventListener('load', () => {
                setImageSrc(reader.result);
                setShowCropper(true);
            });
            reader.readAsDataURL(file);
        }
    };

    const handleCropComplete = (croppedImageBase64) => {
        setFormData({ ...formData, imageUrl: croppedImageBase64 });
        setShowCropper(false);
        setImageSrc(null);
    };

    const handleCancelCrop = () => {
        setShowCropper(false);
        setImageSrc(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            if (project?._id) {
                await api.put(`/projects/${project._id}`, formData);
            } else {
                await api.post('/projects', formData);
            }
            onSuccess();
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to save project');
        } finally {
            setLoading(false);
        }
    };

    const inputClasses = "w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white focus:border-transparent transition-all duration-200";
    const labelClasses = "block text-sm font-bold text-slate-700 mb-2";

    return (
        <div className="bg-white p-8 rounded-2xl shadow-soft border border-slate-100 max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-8 border-b border-slate-100 pb-4">
                <h2 className="text-2xl font-bold text-slate-900">{project ? 'Edit Project' : 'Create New Project'}</h2>
                <button onClick={onCancel} className="text-slate-400 hover:text-slate-600 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
            </div>

            {error && <div className="bg-red-50 text-red-600 p-4 rounded-xl mb-6 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                {error}
            </div>}

            {showCropper && imageSrc && (
                <div className="mb-8 border border-slate-200 rounded-xl overflow-hidden">
                    <ImageCropper
                        imageSrc={imageSrc}
                        onCropComplete={handleCropComplete}
                        onCancel={handleCancelCrop}
                    />
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className={labelClasses}>Project Name</label>
                    <input
                        type="text"
                        className={inputClasses}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        placeholder="e.g. E-commerce Platform Redesign"
                    />
                </div>
                <div>
                    <label className={labelClasses}>Description</label>
                    <textarea
                        className={inputClasses}
                        rows="4"
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        required
                        placeholder="Describe the project details, technologies used, and outcomes..."
                    />
                </div>
                <div>
                    <label className={labelClasses}>Project Image</label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-300 border-dashed rounded-xl hover:bg-slate-50 transition-colors cursor-pointer relative">
                        <input
                            type="file"
                            accept="image/*"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                        />
                        <div className="space-y-1 text-center">
                            <svg className="mx-auto h-12 w-12 text-slate-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <div className="flex text-sm text-slate-600 justify-center">
                                <span className="relative cursor-pointer bg-white rounded-md font-medium text-brand-600 hover:text-brand-500 focus-within:outline-none">
                                    Upload a file
                                </span>
                                <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs text-slate-500">PNG, JPG, GIF up to 10MB</p>
                        </div>
                    </div>

                    {formData.imageUrl && !showCropper && (
                        <div className="mt-6 relative inline-block group">
                            <img src={formData.imageUrl} alt="Preview" className="h-40 w-auto object-cover rounded-xl shadow-md" />
                            <button
                                type="button"
                                onClick={() => setFormData({ ...formData, imageUrl: '' })}
                                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-md hover:bg-red-600 transition-colors"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                            </button>
                        </div>
                    )}
                </div>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-end gap-3">
                    <button
                        type="button"
                        onClick={onCancel}
                        className="px-6 py-3 border border-slate-200 rounded-xl text-slate-700 font-semibold hover:bg-slate-50 hover:text-slate-900 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        disabled={loading}
                        className={`px-8 py-3 bg-brand-600 text-white rounded-xl font-bold hover:bg-brand-700 hover:shadow-lg hover:shadow-brand-500/20 transition-all transform active:scale-95 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                        {loading ? 'Saving...' : 'Save Project'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ProjectForm;
