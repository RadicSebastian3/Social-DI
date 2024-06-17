import { ReactNode, createContext, useContext, useEffect, useState } from "react";

interface UserLoginContextType {
    name: string;
    setName: (n: string) => void;
    password: string;
    setPassword: (p: string) => void;
    registerUser: (username: string, password: string) => Promise<void>;
    loginUser: (username: string, password: string) => Promise<boolean>;
    photo: string;
    setPhoto: (p: string) => void;
    photoFile: File | null;
    setPhotoFile: (file: File | null) => void;
}

const STORAGE_KEY = 'photoSelectContext';

export const UserLoginContext = createContext<UserLoginContextType | null>(null);

export const UserLoginProvider = ({ children }: { children: ReactNode }) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [photo, setPhoto] = useState(localStorage.getItem(STORAGE_KEY) || '');
    const [photoFile, setPhotoFile] = useState<File | null>(null);

    const registerUser = async (username: string, password: string) => {
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to register');
        }
    };

    const loginUser = async (username: string, password: string) => {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to login');
        }

        return true;
    };

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, photo);
    }, [photo]);

    return (
      <UserLoginContext.Provider
        value={{ name, setName, password, setPassword, registerUser, loginUser, photo, setPhoto, photoFile, setPhotoFile }}>
          {children}
      </UserLoginContext.Provider>
    );
};

export const useAuthUser = () => useContext(UserLoginContext);
