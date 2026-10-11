import React, { createContext, useContext } from 'react';
import defaultAvatarImg from '../assets/images/avantika_profile_1791755523545.jpg';

export const DEFAULT_AVATAR = defaultAvatarImg;

interface PhotoContextType {
  photoUrl: string;
}

const PhotoContext = createContext<PhotoContextType>({
  photoUrl: DEFAULT_AVATAR,
});

export const PhotoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <PhotoContext.Provider value={{ photoUrl: DEFAULT_AVATAR }}>
      {children}
    </PhotoContext.Provider>
  );
};

export const useProfilePhoto = () => useContext(PhotoContext);
