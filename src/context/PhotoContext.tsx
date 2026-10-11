import React, { createContext, useContext, useState, useEffect } from 'react';
import defaultAvatarImg from '../assets/images/avantika_profile_1791755523545.jpg';

// Default generated portrait
export const DEFAULT_AVATAR = defaultAvatarImg;
const STORAGE_KEY = 'avantika_custom_profile_photo';

interface PhotoContextType {
  photoUrl: string;
  isCustom: boolean;
  setPhoto: (dataUrl: string) => void;
  resetToDefault: () => void;
}

const PhotoContext = createContext<PhotoContextType>({
  photoUrl: DEFAULT_AVATAR,
  isCustom: false,
  setPhoto: () => {},
  resetToDefault: () => {},
});

export const PhotoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [photoUrl, setPhotoUrlState] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && saved.startsWith('data:image')) {
        return saved;
      }
    } catch {
      // LocalStorage access issues
    }
    return DEFAULT_AVATAR;
  });

  const isCustom = photoUrl !== DEFAULT_AVATAR;

  const setPhoto = (dataUrl: string) => {
    setPhotoUrlState(dataUrl);
    try {
      localStorage.setItem(STORAGE_KEY, dataUrl);
    } catch (err) {
      console.warn('Failed to save photo to localStorage', err);
    }
  };

  const resetToDefault = () => {
    setPhotoUrlState(DEFAULT_AVATAR);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  return (
    <PhotoContext.Provider value={{ photoUrl, isCustom, setPhoto, resetToDefault }}>
      {children}
    </PhotoContext.Provider>
  );
};

export const useProfilePhoto = () => useContext(PhotoContext);
