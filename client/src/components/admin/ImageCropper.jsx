import { useState, useCallback } from 'react';
import Cropper from 'react-easy-crop';

const ImageCropper = ({ imageSrc, onCropComplete, onCancel }) => {
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

    const onCropChange = (crop) => {
        setCrop(crop);
    };

    const onZoomChange = (zoom) => {
        setZoom(zoom);
    };

    const onCropCompleteHandler = useCallback((croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels);
    }, []);

    const createImage = (url) =>
        new Promise((resolve, reject) => {
            const image = new Image();
            image.addEventListener('load', () => resolve(image));
            image.addEventListener('error', (error) => reject(error));
            image.setAttribute('crossOrigin', 'anonymous');
            image.src = url;
        });

    const getCroppedImg = async () => {
        try {
            const image = await createImage(imageSrc);
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            canvas.width = croppedAreaPixels.width;
            canvas.height = croppedAreaPixels.height;

            ctx.drawImage(
                image,
                croppedAreaPixels.x,
                croppedAreaPixels.y,
                croppedAreaPixels.width,
                croppedAreaPixels.height,
                0,
                0,
                croppedAreaPixels.width,
                croppedAreaPixels.height
            );

            // As Base64 string
            return canvas.toDataURL('image/jpeg');
        } catch (e) {
            console.error(e);
            return null;
        }
    };

    const handleSave = async () => {
        const croppedImage = await getCroppedImg();
        onCropComplete(croppedImage);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
            <div className="bg-white p-4 rounded-lg w-full max-w-lg">
                <div className="relative h-64 w-full bg-gray-200 mb-4">
                    <Cropper
                        image={imageSrc}
                        crop={crop}
                        zoom={zoom}
                        aspect={4 / 3} // Enforce 4:3 aspect ratio as per example req (450x350 approx)
                        onCropChange={onCropChange}
                        onCropComplete={onCropCompleteHandler}
                        onZoomChange={onZoomChange}
                    />
                </div>
                <div className="flex justify-between items-center">
                    <div className="w-1/2 mr-4">
                        <label className="block text-xs text-gray-500 mb-1">Zoom</label>
                        <input
                            type="range"
                            value={zoom}
                            min={1}
                            max={3}
                            step={0.1}
                            aria-labelledby="Zoom"
                            onChange={(e) => setZoom(e.target.value)}
                            className="w-full"
                        />
                    </div>
                    <div className="flex space-x-2">
                        <button
                            onClick={onCancel}
                            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleSave}
                            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                        >
                            Crop & Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageCropper;
