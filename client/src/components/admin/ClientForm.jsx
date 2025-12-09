import { useState, useRef } from 'react';
import api from '../../api/axios';
import ImageCropper from './ImageCropper';

const ClientForm = ({ client, onSuccess, onCancel }) => {
    const [formData, setFormData] = useState({
        name: client?.name || '',
        type: client?.type || 'Direct Client',
        designation: client?.designation || '',
        description: client?.description || '', // testimonial
        imageUrl: client?.imageUrl || '',
    });
    const [imageSrc, setImageSrc] = useState(null);
    const [showCropper, setShowCropper] = useState(false);
    const fileInputRef = useRef(null);

    const inputClasses = "w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white focus:border-transparent transition-all duration-200";
    const labelClasses = "block text-sm font-bold text-slate-700 mb-2";
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
            if (client?._id) {
                await api.put(`/clients/${client._id}`, formData);
            } else {
                await api.post('/clients', formData);
            }
            onSuccess();
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to save client');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white p-8 rounded-2xl shadow-soft border border-slate-100 max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-8 border-b border-slate-100 pb-4">
                <h2 className="text-2xl font-bold text-slate-900">{client ? 'Edit Client' : 'Add New Client'}</h2>
                <button onClick={onCancel} className="text-slate-400 hover:text-slate-600 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
            </div>
            {error && <div className="bg-red-50 text-red-600 p-4 rounded-xl mb-6 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                {error}
            </div>}

            {showCropper && imageSrc && (
                <ImageCropper
                    imageSrc={imageSrc}
                    onCropComplete={handleCropComplete}
                    onCancel={handleCancelCrop}
                />
            )}

            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className={labelClasses}>Client Name</label>
                        <input
                            type="text"
                            className={inputClasses}
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                        />
                    </div>
                    <div>
                        <label className={labelClasses}>Client Type</label>
                        <select
                            className={inputClasses}
                            value={formData.type}
                            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        >
                            <option value="Direct Client">Direct Client</option>
                            <option value="Hiring Partner">Hiring Partner</option>
                        </select>
                    </div>
                    <div className="md:col-span-2">
                        <label className={labelClasses}>Designation (Optional)</label>
                        <input
                            type="text"
                            className={inputClasses}
                            value={formData.designation}
                            onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                            placeholder="e.g. CEO, HR Manager"
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Testimonial</label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        rows="4"
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Client Photo</label>
                    <input
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                    />
                    {formData.imageUrl && !showCropper && (
                        <div className="mt-2">
                            <img src={formData.imageUrl} alt="Preview" className="h-24 w-24 object-cover rounded-full" />
                            <button
                                type="button"
                                onClick={() => setFormData({ ...formData, imageUrl: '' })}
                                className="text-red-500 text-xs mt-1 block"
                            >
                                Remove Photo
                            </button>
                        </div>
                    )}
                </div>
                <div className="flex items-center justify-end gap-2">
                    <button
                        type="button"
                        onClick={onCancel}
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        disabled={loading}
                        className={`bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        {loading ? 'Saving...' : 'Save Client'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ClientForm;
