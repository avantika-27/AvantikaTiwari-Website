import React, { useRef, useState } from 'react';
import { useProfilePhoto } from '../context/PhotoContext';

interface PhotoUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PhotoUploadModal: React.FC<PhotoUploadModalProps> = ({ isOpen, onClose }) => {
  const { photoUrl, isCustom, setPhoto, resetToDefault } = useProfilePhoto();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setError('Please select a valid image file (JPEG, PNG, WEBP).');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setPreview(result);
    };
    reader.onerror = () => {
      setError('Failed to read image file.');
    };
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    if (preview) {
      setPhoto(preview);
      setPreview(null);
      onClose();
    }
  };

  const handleReset = () => {
    resetToDefault();
    setPreview(null);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-[#121214] border border-[#27272a] rounded-2xl w-full max-w-md p-6 text-white shadow-2xl relative animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
          aria-label="Close"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
            <span className="material-symbols-outlined text-[22px]">photo_camera</span>
          </div>
          <div>
            <h3 className="font-headline font-bold text-lg text-white">Your Exact Photo</h3>
            <p className="font-mono-tech text-xs text-neutral-400">Apply your original high-res picture</p>
          </div>
        </div>

        <p className="text-sm text-neutral-300 mb-4 leading-relaxed">
          Select and apply your exact WhatsApp photo or high-res headshot. It will immediately replace the intro photo, profile modal, and header avatar across the entire website.
        </p>

        {/* Current / New Preview */}
        <div className="flex items-center justify-center my-5">
          <div className="relative group w-36 h-44 rounded-xl overflow-hidden border-2 border-blue-500/40 shadow-xl bg-black">
            <img
              src={preview || photoUrl}
              alt="Preview"
              className="w-full h-full object-cover object-top"
            />
            {preview && (
              <span className="absolute bottom-1 right-1 bg-green-600 text-white text-[10px] font-mono-tech px-2 py-0.5 rounded-full font-bold shadow">
                New Preview
              </span>
            )}
          </div>
        </div>

        {error && (
          <p className="text-xs text-red-400 bg-red-950/40 border border-red-800/50 p-2.5 rounded-lg mb-4 text-center font-mono-tech">
            {error}
          </p>
        )}

        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />

        <div className="flex flex-col gap-2.5">
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="w-full py-3 px-4 rounded-xl bg-[#1c1c20] hover:bg-[#25252b] border border-[#323238] hover:border-blue-500/50 text-white font-mono-tech text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
          >
            <span className="material-symbols-outlined text-[18px] text-blue-400">upload_file</span>
            <span>Choose Your Photo (WhatsApp / Camera / Gallery)</span>
          </button>

          {preview && (
            <button
              type="button"
              onClick={handleSave}
              className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-headline text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-blue-600/30"
            >
              <span className="material-symbols-outlined text-[18px]">check_circle</span>
              <span>Apply This Exact Photo</span>
            </button>
          )}

          {isCustom && !preview && (
            <button
              type="button"
              onClick={handleReset}
              className="w-full py-2 px-3 rounded-lg bg-transparent hover:bg-red-950/20 text-neutral-400 hover:text-red-400 font-mono-tech text-xs transition-colors flex items-center justify-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[15px]">restart_alt</span>
              <span>Reset to default photo</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
